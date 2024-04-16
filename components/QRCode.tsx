import QRCode from "qrcode.react";

export function SepoliaQrCode() {
  // Your Ethereum wallet address
  const address = "0x6cA3Cc89d26d4E1f5b0Cd84B6721ef979Cb61be2";

  // Amount of ETH to send (in wei)
  const amount = "0.1"; // 0.1 ETH

  // Generating a payment link for Sepolia
  const paymentUri = `ethereum:${address}?value=${amount}`;

  return (
    <div>
      <h1>Scan to send 0.1 ETH on Sepolia</h1>
      <QRCode value={address} />
    </div>
  );
}
