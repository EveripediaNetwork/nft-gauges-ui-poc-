import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NFT from '../components/NFT'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Gauges</title>
        <meta name="description" content="NFT Gauge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <NFT />

        {/* <button>Mint new nft</button> */}

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p> */}

        {/* <div className={styles.grid}>
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

        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <span
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/brain.svg" alt="Brain Logo" width={72} height={16} />
          </span>
        </span>
      </footer> */}
    </div>
  )
}

export default Home
