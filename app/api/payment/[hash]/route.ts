import { getDocument, updateDocumentById } from "@/config";
import { web3 } from "@/config/rpc";
import { StoredOrder } from "@/types";
import { validateAuth } from "@/utils/auth";
import { log } from "@/utils/handlers";

interface Params {
  hash: string;
}

export async function GET(req: Request, context: { params: Params }) {
  const user = await validateAuth(req);
  const { hash } = context.params;

  const orderInformation = (
    await getDocument<StoredOrder>({
      collectionName: "orders",
      queries: [["hash", "==", hash]],
    })
  ).at(0);

  if (!orderInformation)
    return Response.json({ message: "No order information" }, { status: 400 });
  else if (user !== orderInformation.user)
    return Response.json(
      { message: "User and order creator mismatch" },
      { status: 401 }
    );

  const { sentTo, toPay } = orderInformation;

  // ---------- Checking payment ----------
  const balance = await web3.eth.getBalance(sentTo);

  if (balance < Number(web3.utils.toWei(toPay, "ether"))) {
    log(`Transaction amount doesn't match`);
    return Response.json({ message: "Payment not verified" }, { status: 402 });
  }

  updateDocumentById<StoredOrder>({
    collectionName: "orders",
    updates: { status: "PAID" },
    id: orderInformation.id || "",
  });

  return Response.json({ message: "Success", order: orderInformation });
}
