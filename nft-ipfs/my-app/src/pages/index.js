import { Contract, providers, utils } from "ethers";
import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import { abi, NFT_CONTRACT_ADDRESS } from "../../constants";
import styles from "../styles/Home.module.css";
import learnweb3 from "../../public/learnweb3.png";
import { useWeb3ModalTheme } from "@web3modal/react";

export default function Home() {
  const { theme, setTheme } = useWeb3ModalTheme();
  const { address } = useAccount();

  // Function to set modal's themeMode and themeVariables options
  setTheme({
    themeMode: "dark",
    themeVariables: {
      "--w3m-font-family": "Montserrat, sans-serif",
      "--w3m-accent-color": "#F5841F",
      // ...
    },
  });
  return (
    <div>
      <Head>
        <title>LW3Punks</title>
        <meta name="description" content="LW3Punks-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to LW3Punks!</h1>
          <div className={styles.description}>
            {/* Using HTML Entities for the apostrophe */}
            It&#39;s an NFT collection for LearnWeb3 students.
          </div>
          <div className={styles.description}>0/10 have been minted</div>
          <Web3Button />
          <div className={styles.description}>
            your wallet address: {address}
          </div>
        </div>
        <div>
          <img className={styles.image} src={learnweb3} />
        </div>
      </div>

      <footer className={styles.footer}>Made with &#10084; by LW3Punks</footer>
    </div>
  );
}