import '../styles/globals.css'

import { createClient, WagmiConfig } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import { AppProps } from 'next/app'


const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
})

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

export default MyApp
