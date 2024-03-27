"use client";
import Image from "next/image";
import {
  WalletDisconnectButton,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <Image className={styles.brandName} src="/1nj3kt0r_drawing.png" alt="" width="50" height="50" />
        <div className={styles.details}>
          <span className={styles.title}>Heliovac</span>
        </div>
      </div>
      <div className={styles.links}>

      </div>
      <div className={styles.config}>
        <WalletDisconnectButton />
        <WalletMultiButton />
      </div>

    </div>
  )
}

export default Navbar;

// llama: 31.53
