import { createNetwork } from "@stacks/network";

export const MAINNET = createNetwork("mainnet");
export const TESTNET = createNetwork("testnet");

export const API_URLS = {
  mainnet: "https://api.hiro.so",
  testnet: "https://api.testnet.hiro.so",
} as const;

export const CHAIN_IDS = {
  mainnet: 1,
  testnet: 2147483648,
} as const;

// Celo Networks
export const CELO_MAINNET_RPC = "https://forno.celo.org";
export const CELO_ALFAJORES_RPC = "https://alfajores-forno.celo-testnet.org";

export const CELO_CHAIN_IDS = {
  mainnet: 42220,
  alfajores: 44787,
} as const;

export const CELO_TOKENS = {
  mainnet: {
    CELO: "0x0000000000000000000000000000000000000000",
    cUSD: "0x765de816845861e75a25fca122bb6898b8b1282a",
    cEUR: "0xd8763c431d1022027d3f74e6f98efd4cb31057e0",
  },
  alfajores: {
    CELO: "0x0000000000000000000000000000000000000000",
    cUSD: "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
    cEUR: "0x10c8ae1904d85a257229c985274cbd5883d3e74b",
  }
} as const;

