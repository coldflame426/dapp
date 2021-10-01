import { provider } from "web3-core";

declare global {
  interface Window {
    ethereum?: provider;
    web3?: Record<string, unknown>;
  }
}
