import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Crypto Payment Gateways Comparison | PayRam",
    description: "Compare the best crypto payment processors for your business. Self-hosted vs Custodial. PayRam, BTCPay, BitPay, CoinGate, OpenNode & more.",
    keywords: "crypto payments, bitcoin payments, lightning network, btcpay, bitpay, payment gateway, self-hosted, no kyc",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="en">
                <body className="antialiased">
                  {children}
                </body>body>
          </html>html>
        );
}</html>
