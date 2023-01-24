/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NotSushiToken,
  NotSushiTokenInterface,
} from "../../../contracts/governance-shenanigans/NotSushiToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_toAdds",
        type: "address[]",
      },
    ],
    name: "addWledAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f4e6f7453757368690000000000000000000000000000000000000000000000008152506040518060400160405280600881526020017f4e6f745375736869000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620001a6565b508060049080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000256565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b600060028204905060018216806200026f57607f821691505b602082108114156200028657620002856200028c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b612c1480620002cb6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063715018a6116100b8578063a9059cbb1161007c578063a9059cbb1461039f578063b4b5ea57146103cf578063dd62ed3e146103ff578063ee297b9a1461042f578063f1127ed81461044b578063f2fde38b1461047c57610142565b8063715018a6146102f9578063782d6fe1146103035780638da5cb5b1461033357806395d89b4114610351578063a457c2d71461036f57610142565b8063395093511161010a578063395093511461020157806340c10f1914610231578063587cde1e1461024d5780635c19a95c1461027d5780636fcfff451461029957806370a08231146102c957610142565b806306fdde0314610147578063095ea7b31461016557806318160ddd1461019557806323b872dd146101b3578063313ce567146101e3575b600080fd5b61014f610498565b60405161015c91906122c5565b60405180910390f35b61017f600480360381019061017a9190611f9a565b61052a565b60405161018c91906122aa565b60405180910390f35b61019d61054d565b6040516101aa9190612467565b60405180910390f35b6101cd60048036038101906101c89190611f47565b610557565b6040516101da91906122aa565b60405180910390f35b6101eb610586565b6040516101f891906124ef565b60405180910390f35b61021b60048036038101906102169190611f9a565b61058f565b60405161022891906122aa565b60405180910390f35b61024b60048036038101906102469190611f9a565b6105c6565b005b61026760048036038101906102629190611eda565b6105e8565b604051610274919061228f565b60405180910390f35b61029760048036038101906102929190611eda565b610651565b005b6102b360048036038101906102ae9190611eda565b6106ea565b6040516102c091906124ab565b60405180910390f35b6102e360048036038101906102de9190611eda565b61070d565b6040516102f09190612467565b60405180910390f35b610301610755565b005b61031d60048036038101906103189190611f9a565b610769565b60405161032a9190612467565b60405180910390f35b61033b610b40565b604051610348919061228f565b60405180910390f35b610359610b6a565b60405161036691906122c5565b60405180910390f35b61038960048036038101906103849190611f9a565b610bfc565b60405161039691906122aa565b60405180910390f35b6103b960048036038101906103b49190611f9a565b610c73565b6040516103c691906122aa565b60405180910390f35b6103e960048036038101906103e49190611eda565b610c96565b6040516103f69190612467565b60405180910390f35b61041960048036038101906104149190611f07565b610d75565b6040516104269190612467565b60405180910390f35b6104496004803603810190610444919061201a565b610dfc565b005b61046560048036038101906104609190611fda565b610ea7565b6040516104739291906124c6565b60405180910390f35b61049660048036038101906104919190611eda565b610ee8565b005b6060600380546104a7906126e7565b80601f01602080910402602001604051908101604052809291908181526020018280546104d3906126e7565b80156105205780601f106104f557610100808354040283529160200191610520565b820191906000526020600020905b81548152906001019060200180831161050357829003601f168201915b5050505050905090565b600080610535610f6c565b9050610542818585610f74565b600191505092915050565b6000600254905090565b600080610562610f6c565b905061056f85828561113f565b61057a8585856111cb565b60019150509392505050565b60006012905090565b60008061059a610f6c565b90506105bb8185856105ac8589610d75565b6105b69190612526565b610f74565b600191505092915050565b6105ce61144c565b6105d882826114ca565b6105e46000808361162a565b5050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166106dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d490612387565b60405180910390fd5b6106e733826118d9565b50565b60086020528060005260406000206000915054906101000a900463ffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61075d61144c565b6107676000611a4a565b565b60004382106107ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a4906123a7565b60405180910390fd5b6000600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff16905060008163ffffffff16141561081a576000915050610b3a565b82600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600184610869919061261b565b63ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900463ffffffff1663ffffffff161161091657600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001836108f0919061261b565b63ffffffff1663ffffffff16815260200190815260200160002060010154915050610b3a565b82600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008063ffffffff16815260200190815260200160002060000160009054906101000a900463ffffffff1663ffffffff161115610997576000915050610b3a565b6000806001836109a7919061261b565b90505b8163ffffffff168163ffffffff161115610ad4576000600283836109ce919061261b565b6109d891906125b6565b826109e3919061261b565b90506000600760008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008363ffffffff1663ffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff168152602001600182015481525050905086816000015163ffffffff161415610aa357806020015195505050505050610b3a565b86816000015163ffffffff161015610abd57819350610acd565b600182610aca919061261b565b92505b50506109aa565b600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008363ffffffff1663ffffffff1681526020019081526020016000206001015493505050505b92915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610b79906126e7565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba5906126e7565b8015610bf25780601f10610bc757610100808354040283529160200191610bf2565b820191906000526020600020905b815481529060010190602001808311610bd557829003601f168201915b5050505050905090565b600080610c07610f6c565b90506000610c158286610d75565b905083811015610c5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5190612427565b60405180910390fd5b610c678286868403610f74565b60019250505092915050565b600080610c7e610f6c565b9050610c8b8185856111cb565b600191505092915050565b600080600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff16905060008163ffffffff1611610d00576000610d6d565b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600183610d4e919061261b565b63ffffffff1663ffffffff168152602001908152602001600020600101545b915050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610e0461144c565b60005b82829050811015610ea257600160096000858585818110610e2b57610e2a6127ef565b5b9050602002016020810190610e409190611eda565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080610e9b90612719565b9050610e07565b505050565b6007602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900463ffffffff16908060010154905082565b610ef061144c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5790612307565b60405180910390fd5b610f6981611a4a565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610fe4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fdb90612407565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611054576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104b90612327565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516111329190612467565b60405180910390a3505050565b600061114b8484610d75565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146111c557818110156111b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ae90612347565b60405180910390fd5b6111c48484848403610f74565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561123b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611232906123e7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112a2906122e7565b60405180910390fd5b6112b6838383611b10565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561133c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133390612367565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113cf9190612526565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114339190612467565b60405180910390a3611446848484611b15565b50505050565b611454610f6c565b73ffffffffffffffffffffffffffffffffffffffff16611472610b40565b73ffffffffffffffffffffffffffffffffffffffff16146114c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114bf906123c7565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561153a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153190612447565b60405180910390fd5b61154660008383611b10565b80600260008282546115589190612526565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115ad9190612526565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516116129190612467565b60405180910390a361162660008383611b15565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156116665750600081115b156118d457600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461179f576000600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1690506000808263ffffffff1611611709576000611776565b600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600184611757919061261b565b63ffffffff1663ffffffff168152602001908152602001600020600101545b9050600061178d8483611b1a90919063ffffffff16565b905061179b86848484611b30565b5050505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146118d3576000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1690506000808263ffffffff161161183d5760006118aa565b600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060018461188b919061261b565b63ffffffff1663ffffffff168152602001908152602001600020600101545b905060006118c18483611dd990919063ffffffff16565b90506118cf85848484611b30565b5050505b5b505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006119488461070d565b905082600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4611a4482848361162a565b50505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b60008183611b2891906125e7565b905092915050565b6000611b5443604051806060016040528060358152602001612baa60359139611def565b905060008463ffffffff16118015611bf257508063ffffffff16600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600187611bbc919061261b565b63ffffffff1663ffffffff16815260200190815260200160002060000160009054906101000a900463ffffffff1663ffffffff16145b15611c6c5781600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600187611c46919061261b565b63ffffffff1663ffffffff16815260200190815260200160002060010181905550611d82565b60405180604001604052808263ffffffff16815260200183815250600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008663ffffffff1663ffffffff16815260200190815260200160002060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160010155905050600184611d24919061257c565b600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff1602179055505b8473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248484604051611dca929190612482565b60405180910390a25050505050565b60008183611de79190612526565b905092915050565b600064010000000083108290611e3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e3291906122c5565b60405180910390fd5b5082905092915050565b600081359050611e5481612b64565b92915050565b60008083601f840112611e7057611e6f612823565b5b8235905067ffffffffffffffff811115611e8d57611e8c61281e565b5b602083019150836020820283011115611ea957611ea8612828565b5b9250929050565b600081359050611ebf81612b7b565b92915050565b600081359050611ed481612b92565b92915050565b600060208284031215611ef057611eef612832565b5b6000611efe84828501611e45565b91505092915050565b60008060408385031215611f1e57611f1d612832565b5b6000611f2c85828601611e45565b9250506020611f3d85828601611e45565b9150509250929050565b600080600060608486031215611f6057611f5f612832565b5b6000611f6e86828701611e45565b9350506020611f7f86828701611e45565b9250506040611f9086828701611eb0565b9150509250925092565b60008060408385031215611fb157611fb0612832565b5b6000611fbf85828601611e45565b9250506020611fd085828601611eb0565b9150509250929050565b60008060408385031215611ff157611ff0612832565b5b6000611fff85828601611e45565b925050602061201085828601611ec5565b9150509250929050565b6000806020838503121561203157612030612832565b5b600083013567ffffffffffffffff81111561204f5761204e61282d565b5b61205b85828601611e5a565b92509250509250929050565b6120708161264f565b82525050565b61207f81612661565b82525050565b60006120908261250a565b61209a8185612515565b93506120aa8185602086016126b4565b6120b381612837565b840191505092915050565b60006120cb602383612515565b91506120d682612848565b604082019050919050565b60006120ee602683612515565b91506120f982612897565b604082019050919050565b6000612111602283612515565b915061211c826128e6565b604082019050919050565b6000612134601d83612515565b915061213f82612935565b602082019050919050565b6000612157602683612515565b91506121628261295e565b604082019050919050565b600061217a600d83612515565b9150612185826129ad565b602082019050919050565b600061219d602883612515565b91506121a8826129d6565b604082019050919050565b60006121c0602083612515565b91506121cb82612a25565b602082019050919050565b60006121e3602583612515565b91506121ee82612a4e565b604082019050919050565b6000612206602483612515565b915061221182612a9d565b604082019050919050565b6000612229602583612515565b915061223482612aec565b604082019050919050565b600061224c601f83612515565b915061225782612b3b565b602082019050919050565b61226b8161268d565b82525050565b61227a81612697565b82525050565b612289816126a7565b82525050565b60006020820190506122a46000830184612067565b92915050565b60006020820190506122bf6000830184612076565b92915050565b600060208201905081810360008301526122df8184612085565b905092915050565b60006020820190508181036000830152612300816120be565b9050919050565b60006020820190508181036000830152612320816120e1565b9050919050565b6000602082019050818103600083015261234081612104565b9050919050565b6000602082019050818103600083015261236081612127565b9050919050565b600060208201905081810360008301526123808161214a565b9050919050565b600060208201905081810360008301526123a08161216d565b9050919050565b600060208201905081810360008301526123c081612190565b9050919050565b600060208201905081810360008301526123e0816121b3565b9050919050565b60006020820190508181036000830152612400816121d6565b9050919050565b60006020820190508181036000830152612420816121f9565b9050919050565b600060208201905081810360008301526124408161221c565b9050919050565b600060208201905081810360008301526124608161223f565b9050919050565b600060208201905061247c6000830184612262565b92915050565b60006040820190506124976000830185612262565b6124a46020830184612262565b9392505050565b60006020820190506124c06000830184612271565b92915050565b60006040820190506124db6000830185612271565b6124e86020830184612262565b9392505050565b60006020820190506125046000830184612280565b92915050565b600081519050919050565b600082825260208201905092915050565b60006125318261268d565b915061253c8361268d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561257157612570612762565b5b828201905092915050565b600061258782612697565b915061259283612697565b92508263ffffffff038211156125ab576125aa612762565b5b828201905092915050565b60006125c182612697565b91506125cc83612697565b9250826125dc576125db612791565b5b828204905092915050565b60006125f28261268d565b91506125fd8361268d565b9250828210156126105761260f612762565b5b828203905092915050565b600061262682612697565b915061263183612697565b92508282101561264457612643612762565b5b828203905092915050565b600061265a8261266d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600060ff82169050919050565b60005b838110156126d25780820151818401526020810190506126b7565b838111156126e1576000848401525b50505050565b600060028204905060018216806126ff57607f821691505b60208210811415612713576127126127c0565b5b50919050565b60006127248261268d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561275757612756612762565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f21574c6564206164647265737300000000000000000000000000000000000000600082015250565b7f53555348493a3a6765745072696f72566f7465733a206e6f742079657420646560008201527f7465726d696e6564000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b612b6d8161264f565b8114612b7857600080fd5b50565b612b848161268d565b8114612b8f57600080fd5b50565b612b9b81612697565b8114612ba657600080fd5b5056fe53555348493a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473a2646970667358221220eb34390fc29ea321ede67651ae11bdb26aa1fed6b21710515efb4e381bdd3f7f64736f6c63430008070033";

type NotSushiTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NotSushiTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NotSushiToken__factory extends ContractFactory {
  constructor(...args: NotSushiTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NotSushiToken> {
    return super.deploy(overrides || {}) as Promise<NotSushiToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NotSushiToken {
    return super.attach(address) as NotSushiToken;
  }
  override connect(signer: Signer): NotSushiToken__factory {
    return super.connect(signer) as NotSushiToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NotSushiTokenInterface {
    return new utils.Interface(_abi) as NotSushiTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NotSushiToken {
    return new Contract(address, _abi, signerOrProvider) as NotSushiToken;
  }
}
