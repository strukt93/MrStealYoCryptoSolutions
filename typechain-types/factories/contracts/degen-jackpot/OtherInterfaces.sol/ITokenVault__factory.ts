/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITokenVault,
  ITokenVaultInterface,
} from "../../../../contracts/degen-jackpot/OtherInterfaces.sol/ITokenVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fnftId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositMul",
            type: "uint256",
          },
        ],
        internalType: "struct IRevest.FNFTConfig",
        name: "fnftConfig",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "createFNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fnftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "depositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fnftId",
        type: "uint256",
      },
    ],
    name: "getFNFT",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositMul",
            type: "uint256",
          },
        ],
        internalType: "struct IRevest.FNFTConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fnftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newFNFTId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "handleMultipleDeposits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fnftId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "depositAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "depositMul",
            type: "uint256",
          },
        ],
        internalType: "struct IRevest.FNFTConfig",
        name: "fnftConfig",
        type: "tuple",
      },
    ],
    name: "mapFNFTToToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fnftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITokenVault__factory {
  static readonly abi = _abi;
  static createInterface(): ITokenVaultInterface {
    return new utils.Interface(_abi) as ITokenVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITokenVault {
    return new Contract(address, _abi, signerOrProvider) as ITokenVault;
  }
}
