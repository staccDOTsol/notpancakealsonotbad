import { Pair } from '@pancakeswap/aptos-swap-sdk'
import type { SerializedFarmConfig } from '@pancakeswap/farms'
import { mainnetTokens } from '../tokens/index'

const farms: SerializedFarmConfig[] = [
  {
    pid: 8,
    lpSymbol: 'APT-USDC LP',
    lpAddress:
      '0xc169f9a16fcba555ff4beb18e1a50f3ba3c32c9c569910dd280ef05d5ffc0ab7::swap::LPToken<0x1::aptos_coin::AptosCoin, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin>',
    token: mainnetTokens.celerusdc,
    quoteToken: mainnetTokens.apt,
  },
  {
    pid: 7,
    lpSymbol: 'BNB-USDC LP',
    lpAddress:
      '0xc169f9a16fcba555ff4beb18e1a50f3ba3c32c9c569910dd280ef05d5ffc0ab7::swap::LPToken<0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::BnbCoin, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin>',
    token: mainnetTokens.celerusdc,
    quoteToken: mainnetTokens.celerbnb,
  },
  {
    pid: 6,
    lpSymbol: 'USDC-WETH LP',
    lpAddress:
      '0xc169f9a16fcba555ff4beb18e1a50f3ba3c32c9c569910dd280ef05d5ffc0ab7::swap::LPToken<0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::WethCoin>',
    token: mainnetTokens.celerweth,
    quoteToken: mainnetTokens.celerusdc,
  },
  {
    pid: 5,
    lpSymbol: 'USDC-USDT LP',
    lpAddress:
      '0xc169f9a16fcba555ff4beb18e1a50f3ba3c32c9c569910dd280ef05d5ffc0ab7::swap::LPToken<0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdcCoin, 0x8d87a65ba30e09357fa2edea2c80dbac296e5dec2b18287113500b902942929d::celer_coin_manager::UsdtCoin>',
    token: mainnetTokens.celerusdt,
    quoteToken: mainnetTokens.celerusdc,
  },
  {
    pid: 4,
    lpSymbol: 'stApt-USDC LP',
    lpAddress:
      '0xc169f9a16fcba555ff4beb18e1a50f3ba3c32c9c569910dd280ef05d5ffc0ab7::swap::LPToken<0xd11107bdf0d6d7040c6c0bfbdecb6545191fdf13e8d8d259952f53e1713f61b5::staked_coin::StakedAptos, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC>',
    token: mainnetTokens.l0usdc,
    quoteToken: mainnetTokens.stapt,
  },
  {
    pid: 3,
    lpSymbol: 'APT-USDC LP',
    lpAddress:
      '0xc169f9a16fcba555ff4beb18e1a50f3ba3c32c9c569910dd280ef05d5ffc0ab7::swap::LPToken<0x1::aptos_coin::AptosCoin, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC>',
    token: mainnetTokens.l0usdc,
    quoteToken: mainnetTokens.apt,
  },
  {
    pid: 2,
    lpSymbol: 'USDC-WETH LP',
    lpAddress:
      '0xc169f9a16fcba555ff4beb18e1a50f3ba3c32c9c569910dd280ef05d5ffc0ab7::swap::LPToken<0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::WETH>',
    token: mainnetTokens.l0weth,
    quoteToken: mainnetTokens.l0usdc,
  },
  {
    pid: 1,
    lpSymbol: 'USDC-USDT LP',
    lpAddress:
      '0xc169f9a16fcba555ff4beb18e1a50f3ba3c32c9c569910dd280ef05d5ffc0ab7::swap::LPToken<0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT>',
    token: mainnetTokens.l0usdt,
    quoteToken: mainnetTokens.l0usdc,
  },
].map((p) => ({
  ...p,
  token: p.token.equals(p.quoteToken) ? p.token.serialize : Pair.sortToken(p.token, p.quoteToken)[1].serialize,
  quoteToken: p.token.equals(p.quoteToken)
    ? p.quoteToken.serialize
    : Pair.sortToken(p.token, p.quoteToken)[0].serialize,
}))

export default farms
