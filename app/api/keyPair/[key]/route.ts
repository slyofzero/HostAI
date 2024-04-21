import { getDocument } from "@/config";
import { StoredOrder } from "@/types";
import { validateAuth } from "@/utils/auth";
import * as path from "path";
import { readFile } from "fs/promises";

interface Params {
  key: string;
}

export async function GET(req: Request, context: { params: Params }) {
  const user = await validateAuth(req);
  const { key } = context.params;

  const orderInformation = (
    await getDocument<StoredOrder>({
      collectionName: "orders",
      queries: [["hash", "==", key]],
    })
  ).at(0);

  if (!orderInformation)
    return Response.json({ message: "No order information" }, { status: 400 });
  else if (user !== orderInformation.user)
    return Response.json(
      { message: "User and order creator mismatch" },
      { status: 401 }
    );
  else if (orderInformation.status !== "PAID")
    return Response.json({ message: "Order payment pending" }, { status: 401 });

  const filePath = path.join("./", "temp", `${key}.pem`);

  const buffer = await readFile(filePath);
  const headers = new Headers();
  headers.append("Content-Disposition", `attachment; filename="${key}.pem"`);
  headers.append("Content-Type", "application/x-pem-file");

  return new Response(buffer, {
    headers,
  });
}
