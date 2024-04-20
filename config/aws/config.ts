import { AWS_ACCESS_KEY, AWS_ACCESS_KEY_ID } from "@/utils/env";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_ACCESS_KEY,
  region: "ap-south-1", // e.g. 'us-west-2'
});

export const ec2 = new AWS.EC2();
