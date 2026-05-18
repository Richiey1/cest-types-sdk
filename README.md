# cest-types-sdk

Hybrid type definitions, network configs, and constants for both **Celo EVM** and **Stacks L2** development.

## Install

```bash
npm install cest-types-sdk
```

## Usage

```typescript
import { 
  // Stacks Exports
  MAINNET, API_URLS, SIP010_TRAIT,
  // Celo Exports
  CELO_MAINNET_RPC, CELO_ALFAJORES_RPC, CELO_CHAIN_IDS, CELO_TOKENS
} from "cest-types-sdk";

import type { 
  // Stacks Types
  ContractCallOptions, WalletAccount, BatchResult,
  // Celo Types
  EvmTransactionResult, EvmDeployOptions, Erc20Metadata 
} from "cest-types-sdk";

// --- Stacks Usage ---
const stacksApiUrl = API_URLS.mainnet; // "https://api.hiro.so"

// --- Celo Usage ---
const celoRpcUrl = CELO_MAINNET_RPC; // "https://forno.celo.org"
const cUsdAddress = CELO_TOKENS.mainnet.cUSD;
```

## Exports

### Celo EVM
- `CELO_MAINNET_RPC` — Celo mainnet RPC url
- `CELO_ALFAJORES_RPC` — Alfajores testnet RPC url
- `CELO_CHAIN_IDS` — `{ mainnet: 42220, alfajores: 44787 }`
- `CELO_TOKENS` — Native CELO, cUSD, and cEUR addresses for mainnet/alfajores
- `EvmTransactionResult` — `{ txHash, contractAddress?, success, error? }`
- `EvmDeployOptions` — EVM deployment options (abi, bytecode, args, etc)
- `Erc20Metadata` — `{ name, symbol, decimals }`

### Stacks L2
- `MAINNET` / `TESTNET` — Network configs
- `API_URLS` — `{ mainnet: "https://api.hiro.so", testnet: "https://api.testnet.hiro.so" }`
- `CHAIN_IDS` — `{ mainnet: 1, testnet: 2147483648 }`
- `SIP010_TRAIT` / `SIP009_TRAIT` / `SIP013_TRAIT` — SIP trait constants
- `ContractCallOptions` / `ReadOnlyOptions` / `BatchResult` / `NonceInfo` — Stacks types

## License

MIT

## Author

Richiey1
