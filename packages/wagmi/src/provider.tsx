import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import React from 'react'
import useSWRImmutable from 'swr/immutable'
import { useAccount, WagmiConfig, WagmiConfigProps, useNetwork } from 'wagmi'
import { Provider, WebSocketProvider } from '@wagmi/core'
import { StaticJsonRpcProvider } from '@ethersproject/providers'

export function WagmiProvider<TProvider extends Provider, TWebSocketProvider extends WebSocketProvider>(
  props: React.PropsWithChildren<WagmiConfigProps<TProvider, TWebSocketProvider>>,
) {
  return (
    <WagmiConfig client={props.client}>
      <Web3LibraryProvider>{props.children}</Web3LibraryProvider>
    </WagmiConfig>
  )
}

const Web3LibraryContext = React.createContext<Web3Provider | undefined>(undefined)

export const useWeb3LibraryContext = () => {
  return React.useContext(Web3LibraryContext)
}

const Web3LibraryProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { connector } = useAccount()
  const { chain } = useNetwork()
  const { data: library } = useSWRImmutable(connector && ['web3-library', connector, chain], async () => {
    let provider =   new JsonRpcProvider(
      {
        url: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        skipFetchSetup: true,
      },
      5,
    )
    if( chain?.id != 5){
      provider =  await connector?.getProvider()
    }
    // @ts-ignore
    return new Web3Provider(provider)
  })

  return <Web3LibraryContext.Provider value={library}>{props.children}</Web3LibraryContext.Provider>
}
