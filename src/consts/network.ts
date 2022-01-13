export const NETWORK = process.env.REACT_APP_NETWORK
export const PRODUCTION = NETWORK == 'mainnet'
export const EXPLORER_URL = PRODUCTION ? 'https://explorer.provenance.io' : 'https://explorer.test.provenance.io'
export const GRPC_URL = PRODUCTION ? 'https://wallet.provenance.io/proxy' : 'https://wallet.test.provenance.io/proxy'
export const WALLET_URL = PRODUCTION ? 'https://wallet.provenance.io' : 'https://wallet.test.provenance.io'