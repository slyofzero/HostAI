import { addDocument } from "@/config";
import { DeployInstance, StoredOrder } from "@/types";
import { getUnlockedAccount } from "@/utils/web3";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  const body = (await req.json()) as DeployInstance;

  if (!body.location || !body.os || !body.plan || !body.type)
    return Response.json(
      { message: "All fields are required" },
      { status: 400 }
    );

  const address = await getUnlockedAccount();
  const hash = nanoid(10);

  addDocument<StoredOrder>({
    collectionName: "orders",
    data: {
      ...body,
      hash,
      sentTo: address,
      status: "PENDING",
      plan: body.plan,
    },
  });

  return Response.json({ address, hash });
}
