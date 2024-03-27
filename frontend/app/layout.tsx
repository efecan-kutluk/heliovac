import { Inter } from "next/font/google";
import WalletWrapper from "./ui/wallet/walletwrapper";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletWrapper>
          {children}
        </WalletWrapper>
      </body>
    </html>
  )
}
