import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const bscProvider = new StaticJsonRpcProvider(
  {
    url: 'https://nodes.pancakeswap.com',
    skipFetchSetup: true,
  },
  56,
)

export const bscTestnetProvider = new StaticJsonRpcProvider(
  {
    url: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
    skipFetchSetup: true,
  },
  97,
)

export const goerliProvider = new StaticJsonRpcProvider(
  {
    url: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    skipFetchSetup: true,
  },
  5,
)
