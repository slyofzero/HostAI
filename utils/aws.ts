import { amiIds, ec2Instances } from "@/data/aws";
import { StoredOrder } from "@/types";
import EC2, {
  CreateKeyPairRequest,
  RunInstancesRequest,
} from "aws-sdk/clients/ec2";
import * as fs from "fs";
import * as path from "path";

const tempDir = path.join("./", "temp"); // Define the temp directory path

async function ensureDirectoryExistence(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function createKeyPair(ec2: EC2, KeyName: string) {
  const params: CreateKeyPairRequest = { KeyName };
  await ensureDirectoryExistence(tempDir); // Ensure the temp directory exists

  try {
    const data = await ec2.createKeyPair(params).promise();
    const keyPair = `${KeyName}.pem`;
    const keyPath = path.join(tempDir, keyPair);

    if (data.KeyMaterial) {
      console.log(keyPath);
      fs.writeFileSync(keyPath, data.KeyMaterial);
    } // Save the key pair file

    return keyPair;
  } catch (error) {
    const err = error as Error;
    console.log(err, err.stack);
    return null; // or throw an error, depending on how you want to handle failures
  }
}

export async function createInstance(ec2: EC2, orderInformation: StoredOrder) {
  const { hash, plan, type, os, location } = orderInformation;
  const keypair = await createKeyPair(ec2, hash);

  if (!keypair) return null;

  const ImageId = amiIds[location][os];
  const InstanceType = ec2Instances[type][plan];

  const params: RunInstancesRequest = {
    ImageId,
    InstanceType,
    KeyName: hash,
    MinCount: 1,
    MaxCount: 1,
    TagSpecifications: [
      {
        ResourceType: "instance",
        Tags: [
          {
            Key: "SDK instance",
            Value: "MyNewInstance",
          },
        ],
      },
    ],
  };

  try {
    const data = await ec2.runInstances(params).promise();
    const instanceId = data.Instances?.[0].InstanceId;
    const sshCommand = `ssh -i "${keypair}" ec2-user@${instanceId}`;

    return { instanceId, keypair, sshCommand };
  } catch (error) {
    const err = error as Error;
    console.log(err, err.stack);
    return null; // or throw an error, depending on how you want to handle failures
  }
}
