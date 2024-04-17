import { getDocument } from "@/config";
import { StoredOrder } from "@/types";

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

  return Response.json({ message: "Success", order: orderInformation });
}
