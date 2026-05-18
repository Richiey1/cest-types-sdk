import type { ClarityValue } from "@stacks/transactions";

export interface ContractCallOptions {
  contractAddress: string;
  contractName: string;
  functionName: string;
  functionArgs: ClarityValue[];
  senderKey: string;
  network?: any;
  fee?: number;
  nonce?: bigint;
  postConditionMode?: any;
}

export interface ReadOnlyOptions {
  contractAddress: string;
  contractName: string;
  functionName: string;
  functionArgs: string[];
  senderAddress: string;
  networkUrl?: string;
}

export interface WalletAccount {
  address: string;
  privateKey: string;
  index: number;
}

export interface FundTransfer {
  recipient: string;
  amount: number;
}

export interface BatchResult {
  txid: string;
  success: boolean;
  error?: string;
}

export interface NonceInfo {
  nonce: bigint;
  balance: bigint;
  locked: bigint;
}

export type NetworkName = "mainnet" | "testnet";

// Celo / EVM Types
export interface EvmTransactionResult {
  txHash: string;
  contractAddress?: string;
  success: boolean;
  error?: string;
}

export interface EvmDeployOptions {
  abi: any[];
  bytecode: string;
  privateKey: string;
  providerUrl?: string;
  args?: any[];
  gasLimit?: bigint;
  gasPrice?: bigint;
}

export interface Erc20Metadata {
  name: string;
  symbol: string;
  decimals: number;
}

