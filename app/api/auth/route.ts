import { signingMessage } from "@/utils/constants";
import { ethers } from "ethers";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { signature, address } = await req.json();

  try {
    const signerAddress = ethers.utils.verifyMessage(signingMessage, signature);
    if (signerAddress.toLowerCase() === address.toLowerCase()) {
      const token = jwt.sign({ address }, "your_secret_key", {
        expiresIn: "1w",
      });
      return Response.json({ token });
    } else {
      return Response.json({ error: "Invalid signature" }, { status: 401 });
    }
  } catch (error) {
    return Response.json({ error: "Invalid signature" }, { status: 500 });
  }
}
