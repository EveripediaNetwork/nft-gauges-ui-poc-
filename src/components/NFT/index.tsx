import { useAccount, useConnect, useContractWrite, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { utils } from "ethers"

import { BrainyAbi } from '../../abis/brainy.abi'

import styles from '../../styles/Home.module.css'

const NFT = () => {
  const { address, isConnected } = useAccount()
  const { writeAsync: mint } = useContractWrite({
    addressOrName: "0x196c92baa8af0a685bee4a87fe35e570c2215b36",
    chainId: 5,
    contractInterface: BrainyAbi,
    functionName: "publicMint",
    args: [1],
    overrides: {
      value: utils.parseEther("0.03"),
    }
  })

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (

    <div className={styles.home}>
      <h1 className={styles.title}>
        NFT Gauges
      </h1>
      <div className={styles.buttonContainer}>
        <button onClick={() => isConnected ? disconnect() : connect()}>{isConnected ? "Disconnect" : "Connect"} wallet</button>
        <button onClick={() => mint()}>Mint new nft</button>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>NFT 1 👾</h2>
          <p>Brainy nft</p>
        </div>
        <div className={styles.card}>
          <h2>NFT 1 👾</h2>
          <p>Brainy nft</p>
        </div>
        <div className={styles.card}>
          <h2>NFT 1 👾</h2>
          <p>Brainy nft</p>
        </div>

      </div>
      <span>{address ? address : "Disconnected"}</span>
    </div>
  )
}

export default NFT