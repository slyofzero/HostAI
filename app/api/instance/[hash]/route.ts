import { getDocument } from "@/config";
import { awsLocations } from "@/data/aws";
import { StoredOrder } from "@/types";
import { validateAuth } from "@/utils/auth";
import { createInstance } from "@/utils/aws";
import { AWS_ACCESS_KEY, AWS_ACCESS_KEY_ID } from "@/utils/env";
import AWS from "aws-sdk";

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
  else if (orderInformation.status !== "PAID")
    return Response.json({ message: "Order payment pending" }, { status: 401 });

  const { location } = orderInformation;

  AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_ACCESS_KEY,
    region: awsLocations[location], // e.g. 'us-west-2'
  });

  const ec2 = new AWS.EC2();
  const instance = await createInstance(ec2, orderInformation);

  if (!instance)
    return Response.json(
      { message: "Error in creating an instance" },
      { status: 400 }
    );

  return Response.json({ message: "Success", instance });
}
