import Web3 from "web3";
import { AbiItem } from "web3-utils";

import ShrugNFTAbi from "abi/ShrugToken.json";
import ShrugSaleAbi from "abi/ShrugSale.json";

// Deployed contracts deployed on Rinkeby Network
export const nftContractAddress = "0x90cF3d432F84f6696107E378d5D848C9A738db07";
const saleContractAddress = "0xA96F2d842A40EA29411CE34B1544a2253f0c8011";

export const web3 = new Web3(Web3.givenProvider);

export const shrugToken = new web3.eth.Contract(
  ShrugNFTAbi.abi as AbiItem[],
  nftContractAddress
);

export const shrugSale = new web3.eth.Contract(
  ShrugSaleAbi.abi as AbiItem[],
  saleContractAddress
);
