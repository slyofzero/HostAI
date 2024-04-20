import { getDocument } from "@/config";
import { web3 } from "@/config/rpc";
import { StoredOrder } from "@/types";
import { log } from "@/utils/handlers";
import { sleep } from "@/utils/time";

interface Params {
  hash: string;
}

export async function GET(req: Request, context: { params: Params }) {
  const { hash } = context.params;

  const orderInformation = (
    await getDocument<StoredOrder>({
      collectionName: "orders",
      queries: [["hash", "==", hash]],
    })
  ).at(0);

  if (!orderInformation)
    return Response.json({ message: "No order information" });

  const { sentTo, toPay } = orderInformation;

  // ---------- Checking payment ----------
  let attempt = 0;
  await (async function checkPayment() {
    attempt += 1;
    const balance = await web3.eth.getBalance(sentTo);

    if (attempt > 30) {
      return Response.json(
        { message: "Payment not verified" },
        { status: 402 }
      );
    }

    if (balance < Number(web3.utils.toWei(toPay, "ether"))) {
      log(`Transaction amount doesn't match`);
      await sleep(5000);
      checkPayment();
    }

    return true;
  })();

  return Response.json({ message: "Success", order: orderInformation });
}
