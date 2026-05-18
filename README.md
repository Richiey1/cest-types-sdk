# cest-types-sdk

Type definitions, network configs, and SIP standard constants for Stacks L2 development.

## Install

```bash
npm install cest-types-sdk
```

## Usage

```typescript
import { MAINNET, TESTNET, API_URLS, CHAIN_IDS, SIP010_TRAIT } from "cest-types-sdk";
import type { ContractCallOptions, WalletAccount, BatchResult } from "cest-types-sdk";

// Use network configs
const apiUrl = API_URLS.mainnet; // "https://api.hiro.so"
const network = MAINNET;

// Use SIP trait constants
const trait = SIP010_TRAIT;
```

## Exports

### Networks
- `MAINNET` — Mainnet network config
- `TESTNET` — Testnet network config
- `API_URLS` — `{ mainnet: "https://api.hiro.so", testnet: "https://api.testnet.hiro.so" }`
- `CHAIN_IDS` — `{ mainnet: 1, testnet: 2147483648 }`

### SIP Standards
- `SIP010_TRAIT` — SIP-010 fungible token trait address
- `SIP009_TRAIT` — SIP-009 NFT trait address
- `SIP013_TRAIT` — SIP-013 semi-fungible token trait address
- `CLARITY_TYPE_IDS` — Clarity value type identifiers

### Types
- `ContractCallOptions` — Options for contract calls
- `ReadOnlyOptions` — Options for read-only calls
- `WalletAccount` — `{ address, privateKey, index }`
- `FundTransfer` — `{ recipient, amount }`
- `BatchResult` — `{ txid, success, error }`
- `NonceInfo` — `{ nonce, balance, locked }`
- `NetworkName` — `"mainnet" | "testnet"`

## License

MIT

## Author

Richiey1
