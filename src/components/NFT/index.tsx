import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import styles from '../../styles/Home.module.css'

const NFT = () => {
  const { address, isConnected } = useAccount()
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
        <button onClick={() => connect()}>Mint new nft</button>
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