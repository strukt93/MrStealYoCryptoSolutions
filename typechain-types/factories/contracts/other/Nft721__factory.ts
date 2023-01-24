/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Nft721, Nft721Interface } from "../../../contracts/other/Nft721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mintForUser",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
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
  "0x60806040523480156200001157600080fd5b5060405162002cfc38038062002cfc833981810160405281019062000037919062000291565b818181600090805190602001906200005192919062000163565b5080600190805190602001906200006a92919062000163565b5050506200008d620000816200009560201b60201c565b6200009d60201b60201c565b50506200049a565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200017190620003ab565b90600052602060002090601f016020900481019282620001955760008555620001e1565b82601f10620001b057805160ff1916838001178555620001e1565b82800160010185558215620001e1579182015b82811115620001e0578251825591602001919060010190620001c3565b5b509050620001f09190620001f4565b5090565b5b808211156200020f576000816000905550600101620001f5565b5090565b60006200022a62000224846200033f565b62000316565b9050828152602081018484840111156200024957620002486200047a565b5b6200025684828562000375565b509392505050565b600082601f83011262000276576200027562000475565b5b81516200028884826020860162000213565b91505092915050565b60008060408385031215620002ab57620002aa62000484565b5b600083015167ffffffffffffffff811115620002cc57620002cb6200047f565b5b620002da858286016200025e565b925050602083015167ffffffffffffffff811115620002fe57620002fd6200047f565b5b6200030c858286016200025e565b9150509250929050565b60006200032262000335565b9050620003308282620003e1565b919050565b6000604051905090565b600067ffffffffffffffff8211156200035d576200035c62000446565b5b620003688262000489565b9050602081019050919050565b60005b838110156200039557808201518184015260208101905062000378565b83811115620003a5576000848401525b50505050565b60006002820490506001821680620003c457607f821691505b60208210811415620003db57620003da62000417565b5b50919050565b620003ec8262000489565b810181811067ffffffffffffffff821117156200040e576200040d62000446565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61285280620004aa6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde146102a4578063c87b56dd146102c0578063d0dbc833146102f0578063e985e9c51461030c578063f2fde38b1461033c5761010b565b8063715018a6146102425780638da5cb5b1461024c57806395d89b411461026a578063a22cb465146102885761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e257806370a08231146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611ae3565b610358565b6040516101379190611e8c565b60405180910390f35b61014861043a565b6040516101559190611ea7565b60405180910390f35b61017860048036038101906101739190611b3d565b6104cc565b6040516101859190611e25565b60405180910390f35b6101a860048036038101906101a39190611aa3565b610512565b005b6101c460048036038101906101bf919061198d565b61062a565b005b6101e060048036038101906101db919061198d565b61068a565b005b6101fc60048036038101906101f79190611b3d565b6106aa565b6040516102099190611e25565b60405180910390f35b61022c60048036038101906102279190611920565b61075c565b6040516102399190612069565b60405180910390f35b61024a610814565b005b610254610828565b6040516102619190611e25565b60405180910390f35b610272610852565b60405161027f9190611ea7565b60405180910390f35b6102a2600480360381019061029d9190611a63565b6108e4565b005b6102be60048036038101906102b991906119e0565b6108fa565b005b6102da60048036038101906102d59190611b3d565b61095c565b6040516102e79190611ea7565b60405180910390f35b61030a60048036038101906103059190611aa3565b6109c4565b005b6103266004803603810190610321919061194d565b610a0a565b6040516103339190611e8c565b60405180910390f35b61035660048036038101906103519190611920565b610a9e565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610433575061043282610b22565b5b9050919050565b6060600080546104499061228e565b80601f01602080910402602001604051908101604052809291908181526020018280546104759061228e565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b60006104d782610b8c565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061051d826106aa565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561058e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058590612029565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105ad610bd7565b73ffffffffffffffffffffffffffffffffffffffff1614806105dc57506105db816105d6610bd7565b610a0a565b5b61061b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061290611fa9565b60405180910390fd5b6106258383610bdf565b505050565b61063b610635610bd7565b82610c98565b61067a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067190612049565b60405180910390fd5b610685838383610d2d565b505050565b6106a5838383604051806020016040528060008152506108fa565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074a90612009565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c490611f89565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61081c610f94565b6108266000611012565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546108619061228e565b80601f016020809104026020016040519081016040528092919081815260200182805461088d9061228e565b80156108da5780601f106108af576101008083540402835291602001916108da565b820191906000526020600020905b8154815290600101906020018083116108bd57829003601f168201915b5050505050905090565b6108f66108ef610bd7565b83836110d8565b5050565b61090b610905610bd7565b83610c98565b61094a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094190612049565b60405180910390fd5b61095684848484611245565b50505050565b606061096782610b8c565b60006109716112a1565b9050600081511161099157604051806020016040528060008152506109bc565b8061099b846112b8565b6040516020016109ac929190611e01565b6040516020818303038152906040525b915050919050565b6109cc610f94565b60005b81811015610a05576109ea836109e56007611419565b611427565b6109f46007611601565b806109fe906122f1565b90506109cf565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610aa6610f94565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0d90611ee9565b60405180910390fd5b610b1f81611012565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b9581611617565b610bd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcb90612009565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c52836106aa565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ca4836106aa565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ce65750610ce58185610a0a565b5b80610d2457508373ffffffffffffffffffffffffffffffffffffffff16610d0c846104cc565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610d4d826106aa565b73ffffffffffffffffffffffffffffffffffffffff1614610da3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9a90611f09565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0a90611f49565b60405180910390fd5b610e1e838383611683565b610e29600082610bdf565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e7991906121a4565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ed0919061211d565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f8f838383611688565b505050565b610f9c610bd7565b73ffffffffffffffffffffffffffffffffffffffff16610fba610828565b73ffffffffffffffffffffffffffffffffffffffff1614611010576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100790611fe9565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611147576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113e90611f69565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112389190611e8c565b60405180910390a3505050565b611250848484610d2d565b61125c8484848461168d565b61129b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129290611ec9565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611300576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611414565b600082905060005b6000821461133257808061131b906122f1565b915050600a8261132b9190612173565b9150611308565b60008167ffffffffffffffff81111561134e5761134d612427565b5b6040519080825280601f01601f1916602001820160405280156113805781602001600182028036833780820191505090505b5090505b6000851461140d5760018261139991906121a4565b9150600a856113a8919061233a565b60306113b4919061211d565b60f81b8183815181106113ca576113c96123f8565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856114069190612173565b9450611384565b8093505050505b919050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611497576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148e90611fc9565b60405180910390fd5b6114a081611617565b156114e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d790611f29565b60405180910390fd5b6114ec60008383611683565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461153c919061211d565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46115fd60008383611688565b5050565b6001816000016000828254019250508190555050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006116ae8473ffffffffffffffffffffffffffffffffffffffff16611824565b15611817578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026116d7610bd7565b8786866040518563ffffffff1660e01b81526004016116f99493929190611e40565b602060405180830381600087803b15801561171357600080fd5b505af192505050801561174457506040513d601f19601f820116820180604052508101906117419190611b10565b60015b6117c7573d8060008114611774576040519150601f19603f3d011682016040523d82523d6000602084013e611779565b606091505b506000815114156117bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117b690611ec9565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061181c565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061185a611855846120a9565b612084565b9050828152602081018484840111156118765761187561245b565b5b61188184828561224c565b509392505050565b600081359050611898816127c0565b92915050565b6000813590506118ad816127d7565b92915050565b6000813590506118c2816127ee565b92915050565b6000815190506118d7816127ee565b92915050565b600082601f8301126118f2576118f1612456565b5b8135611902848260208601611847565b91505092915050565b60008135905061191a81612805565b92915050565b60006020828403121561193657611935612465565b5b600061194484828501611889565b91505092915050565b6000806040838503121561196457611963612465565b5b600061197285828601611889565b925050602061198385828601611889565b9150509250929050565b6000806000606084860312156119a6576119a5612465565b5b60006119b486828701611889565b93505060206119c586828701611889565b92505060406119d68682870161190b565b9150509250925092565b600080600080608085870312156119fa576119f9612465565b5b6000611a0887828801611889565b9450506020611a1987828801611889565b9350506040611a2a8782880161190b565b925050606085013567ffffffffffffffff811115611a4b57611a4a612460565b5b611a57878288016118dd565b91505092959194509250565b60008060408385031215611a7a57611a79612465565b5b6000611a8885828601611889565b9250506020611a998582860161189e565b9150509250929050565b60008060408385031215611aba57611ab9612465565b5b6000611ac885828601611889565b9250506020611ad98582860161190b565b9150509250929050565b600060208284031215611af957611af8612465565b5b6000611b07848285016118b3565b91505092915050565b600060208284031215611b2657611b25612465565b5b6000611b34848285016118c8565b91505092915050565b600060208284031215611b5357611b52612465565b5b6000611b618482850161190b565b91505092915050565b611b73816121d8565b82525050565b611b82816121ea565b82525050565b6000611b93826120da565b611b9d81856120f0565b9350611bad81856020860161225b565b611bb68161246a565b840191505092915050565b6000611bcc826120e5565b611bd68185612101565b9350611be681856020860161225b565b611bef8161246a565b840191505092915050565b6000611c05826120e5565b611c0f8185612112565b9350611c1f81856020860161225b565b80840191505092915050565b6000611c38603283612101565b9150611c438261247b565b604082019050919050565b6000611c5b602683612101565b9150611c66826124ca565b604082019050919050565b6000611c7e602583612101565b9150611c8982612519565b604082019050919050565b6000611ca1601c83612101565b9150611cac82612568565b602082019050919050565b6000611cc4602483612101565b9150611ccf82612591565b604082019050919050565b6000611ce7601983612101565b9150611cf2826125e0565b602082019050919050565b6000611d0a602983612101565b9150611d1582612609565b604082019050919050565b6000611d2d603e83612101565b9150611d3882612658565b604082019050919050565b6000611d50602083612101565b9150611d5b826126a7565b602082019050919050565b6000611d73602083612101565b9150611d7e826126d0565b602082019050919050565b6000611d96601883612101565b9150611da1826126f9565b602082019050919050565b6000611db9602183612101565b9150611dc482612722565b604082019050919050565b6000611ddc602e83612101565b9150611de782612771565b604082019050919050565b611dfb81612242565b82525050565b6000611e0d8285611bfa565b9150611e198284611bfa565b91508190509392505050565b6000602082019050611e3a6000830184611b6a565b92915050565b6000608082019050611e556000830187611b6a565b611e626020830186611b6a565b611e6f6040830185611df2565b8181036060830152611e818184611b88565b905095945050505050565b6000602082019050611ea16000830184611b79565b92915050565b60006020820190508181036000830152611ec18184611bc1565b905092915050565b60006020820190508181036000830152611ee281611c2b565b9050919050565b60006020820190508181036000830152611f0281611c4e565b9050919050565b60006020820190508181036000830152611f2281611c71565b9050919050565b60006020820190508181036000830152611f4281611c94565b9050919050565b60006020820190508181036000830152611f6281611cb7565b9050919050565b60006020820190508181036000830152611f8281611cda565b9050919050565b60006020820190508181036000830152611fa281611cfd565b9050919050565b60006020820190508181036000830152611fc281611d20565b9050919050565b60006020820190508181036000830152611fe281611d43565b9050919050565b6000602082019050818103600083015261200281611d66565b9050919050565b6000602082019050818103600083015261202281611d89565b9050919050565b6000602082019050818103600083015261204281611dac565b9050919050565b6000602082019050818103600083015261206281611dcf565b9050919050565b600060208201905061207e6000830184611df2565b92915050565b600061208e61209f565b905061209a82826122c0565b919050565b6000604051905090565b600067ffffffffffffffff8211156120c4576120c3612427565b5b6120cd8261246a565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061212882612242565b915061213383612242565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156121685761216761236b565b5b828201905092915050565b600061217e82612242565b915061218983612242565b9250826121995761219861239a565b5b828204905092915050565b60006121af82612242565b91506121ba83612242565b9250828210156121cd576121cc61236b565b5b828203905092915050565b60006121e382612222565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561227957808201518184015260208101905061225e565b83811115612288576000848401525b50505050565b600060028204905060018216806122a657607f821691505b602082108114156122ba576122b96123c9565b5b50919050565b6122c98261246a565b810181811067ffffffffffffffff821117156122e8576122e7612427565b5b80604052505050565b60006122fc82612242565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561232f5761232e61236b565b5b600182019050919050565b600061234582612242565b915061235083612242565b9250826123605761235f61239a565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6127c9816121d8565b81146127d457600080fd5b50565b6127e0816121ea565b81146127eb57600080fd5b50565b6127f7816121f6565b811461280257600080fd5b50565b61280e81612242565b811461281957600080fd5b5056fea264697066735822122069806cf63fbf0a604cbcc0e6ba6ea2f9f84b72713cbbc32c957fba930c1a43d764736f6c63430008070033";

type Nft721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Nft721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Nft721__factory extends ContractFactory {
  constructor(...args: Nft721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Nft721> {
    return super.deploy(name, symbol, overrides || {}) as Promise<Nft721>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): Nft721 {
    return super.attach(address) as Nft721;
  }
  override connect(signer: Signer): Nft721__factory {
    return super.connect(signer) as Nft721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Nft721Interface {
    return new utils.Interface(_abi) as Nft721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Nft721 {
    return new Contract(address, _abi, signerOrProvider) as Nft721;
  }
}