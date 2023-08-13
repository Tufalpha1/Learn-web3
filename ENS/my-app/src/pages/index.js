import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@web3modal/react";


export default function Home() {

  return (
    <div>
      <Head>
        <title>Wallet Conection Dapp</title>
        <meta name="description" content="ENS-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to LearnWeb3 Punks</h1>
          <div className={styles.description}>
            {/* Using HTML Entities for the apostrophe */}
            It&#39;s an NFT collection for LearnWeb3 Punks.{" "}
          </div>
          <Web3Button />
        </div>
        <div>
          <img className={styles.image} src="./learnweb3.png" />
        </div>
      </div>

      <footer className={styles.footer}>
        Made with &#10084; by LearnWeb3 Punks
      </footer>
    </div>
  );
}
