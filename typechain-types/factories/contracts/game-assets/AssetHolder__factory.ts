/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetHolder,
  AssetHolderInterface,
} from "../../../contracts/game-assets/AssetHolder";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
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
        name: "account",
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
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
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
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getIdOwned",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200301e3803806200301e833981810160405281019062000037919062000199565b62000048816200004f60201b60201c565b506200036e565b8060039080519060200190620000679291906200006b565b5050565b82805462000079906200027f565b90600052602060002090601f0160209004810192826200009d5760008555620000e9565b82601f10620000b857805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e8578251825591602001919060010190620000cb565b5b509050620000f89190620000fc565b5090565b5b8082111562000117576000816000905550600101620000fd565b5090565b6000620001326200012c8462000213565b620001ea565b9050828152602081018484840111156200015157620001506200034e565b5b6200015e84828562000249565b509392505050565b600082601f8301126200017e576200017d62000349565b5b8151620001908482602086016200011b565b91505092915050565b600060208284031215620001b257620001b162000358565b5b600082015167ffffffffffffffff811115620001d357620001d262000353565b5b620001e18482850162000166565b91505092915050565b6000620001f662000209565b9050620002048282620002b5565b919050565b6000604051905090565b600067ffffffffffffffff8211156200023157620002306200031a565b5b6200023c826200035d565b9050602081019050919050565b60005b83811015620002695780820151818401526020810190506200024c565b8381111562000279576000848401525b50505050565b600060028204905060018216806200029857607f821691505b60208210811415620002af57620002ae620002eb565b5b50919050565b620002c0826200035d565b810181811067ffffffffffffffff82111715620002e257620002e16200031a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b612ca0806200037e6000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c80634e1273f4116100665780634e1273f4146101435780638cba064d14610173578063a22cb465146101a3578063e985e9c5146101bf578063f242432a146101ef57610092565b8062fdd58e1461009757806301ffc9a7146100c75780630e89341c146100f75780632eb2c2d614610127575b600080fd5b6100b160048036038101906100ac9190611ca1565b61020b565b6040516100be9190612436565b60405180910390f35b6100e160048036038101906100dc9190611da2565b6102fa565b6040516100ee9190612279565b60405180910390f35b610111600480360381019061010c9190611dfc565b6103dc565b60405161011e9190612294565b60405180910390f35b610141600480360381019061013c9190611afb565b610470565b005b61015d60048036038101906101589190611ce1565b610511565b60405161016a9190612220565b60405180910390f35b61018d60048036038101906101889190611e56565b61062a565b60405161019a9190612436565b60405180910390f35b6101bd60048036038101906101b89190611c61565b610684565b005b6101d960048036038101906101d49190611abb565b61069a565b6040516101e69190612279565b60405180910390f35b61020960048036038101906102049190611bca565b61072e565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561027c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027390612356565b60405180910390fd5b600115156001600084815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146102ec5760006102ef565b60015b60ff16905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103c557507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103d557506103d4826107cf565b5b9050919050565b6060600380546103eb9061264f565b80601f01602080910402602001604051908101604052809291908181526020018280546104179061264f565b80156104645780601f1061043957610100808354040283529160200191610464565b820191906000526020600020905b81548152906001019060200180831161044757829003601f168201915b50505050509050919050565b610478610839565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806104be57506104bd856104b8610839565b61069a565b5b6104fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f4906122d6565b60405180910390fd5b61050a8585858585610841565b5050505050565b60608151835114610557576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054e906123b6565b60405180910390fd5b6000835167ffffffffffffffff81111561057457610573612788565b5b6040519080825280602002602001820160405280156105a25781602001602082028036833780820191505090505b50905060005b845181101561061f576105ef8582815181106105c7576105c6612759565b5b60200260200101518583815181106105e2576105e1612759565b5b602002602001015161020b565b82828151811061060257610601612759565b5b60200260200101818152505080610618906126b2565b90506105a8565b508091505092915050565b600080600084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61069661068f610839565b8383610d76565b5050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610736610839565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061077c575061077b85610776610839565b61069a565b5b6107bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b2906122d6565b60405180910390fd5b6107c88585858585610ee3565b5050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b8151835114610885576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087c906123f6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156108f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ec90612376565b60405180910390fd5b60006108ff610839565b905061090f818787878787611378565b6000828060200190518101906109259190611d59565b905060005b8551811015610cd257600086828151811061094857610947612759565b5b60200260200101519050600083838151811061096757610966612759565b5b60200260200101519050600187848151811061098657610985612759565b5b6020026020010151146109ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c5906123d6565b60405180910390fd5b6001600083815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610a6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6290612316565b60405180910390fd5b8060008084815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610afc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af390612336565b60405180910390fd5b6001600083815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610b9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9190612416565b60405180910390fd5b60006001600084815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600180600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508060008084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505080610ccb906126b2565b905061092a565b508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8888604051610d49929190612242565b60405180910390a4610d5f828888888888611380565b610d6d828888888888611388565b50505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610de5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ddc90612396565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ed69190612279565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610f53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4a90612376565b60405180910390fd5b60018214610f96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8d906123d6565b60405180910390fd5b6000610fa0610839565b90506000610fad8561156f565b90506000610fba8561156f565b9050610fca838989858589611378565b600084806020019051810190610fe09190611e29565b90506001600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661107f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107690612316565b60405180910390fd5b8060008089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611110576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110790612336565b60405180910390fd5b6001600088815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156111ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a590612416565b60405180910390fd5b60006001600089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600180600089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508060008089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a8a604051611349929190612451565b60405180910390a461135f848a8a86868a611380565b61136d848a8a8a8a8a6115e9565b505050505050505050565b505050505050565b505050505050565b6113a78473ffffffffffffffffffffffffffffffffffffffff166117d0565b15611567578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b81526004016113ed95949392919061215e565b602060405180830381600087803b15801561140757600080fd5b505af192505050801561143857506040513d601f19601f820116820180604052508101906114359190611dcf565b60015b6114de576114446127b7565b806308c379a014156114a15750611459612b78565b8061146457506114a3565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114989190612294565b60405180910390fd5b505b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d5906122b6565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611565576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155c906122f6565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff81111561158e5761158d612788565b5b6040519080825280602002602001820160405280156115bc5781602001602082028036833780820191505090505b50905082816000815181106115d4576115d3612759565b5b60200260200101818152505080915050919050565b6116088473ffffffffffffffffffffffffffffffffffffffff166117d0565b156117c8578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b815260040161164e9594939291906121c6565b602060405180830381600087803b15801561166857600080fd5b505af192505050801561169957506040513d601f19601f820116820180604052508101906116969190611dcf565b60015b61173f576116a56127b7565b806308c379a0141561170257506116ba612b78565b806116c55750611704565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116f99190612294565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611736906122b6565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146117c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bd906122f6565b60405180910390fd5b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006118066118018461249f565b61247a565b90508083825260208201905082856020860282011115611829576118286127de565b5b60005b85811015611859578161183f8882611985565b84526020840193506020830192505060018101905061182c565b5050509392505050565b6000611876611871846124cb565b61247a565b90508083825260208201905082856020860282011115611899576118986127de565b5b60005b858110156118c957816118af8882611a91565b84526020840193506020830192505060018101905061189c565b5050509392505050565b60006118e66118e1846124cb565b61247a565b90508083825260208201905082856020860282011115611909576119086127de565b5b60005b85811015611939578161191f8882611aa6565b84526020840193506020830192505060018101905061190c565b5050509392505050565b6000611956611951846124f7565b61247a565b905082815260208101848484011115611972576119716127e3565b5b61197d84828561260d565b509392505050565b60008135905061199481612c0e565b92915050565b600082601f8301126119af576119ae6127d9565b5b81356119bf8482602086016117f3565b91505092915050565b600082601f8301126119dd576119dc6127d9565b5b81356119ed848260208601611863565b91505092915050565b600082601f830112611a0b57611a0a6127d9565b5b8151611a1b8482602086016118d3565b91505092915050565b600081359050611a3381612c25565b92915050565b600081359050611a4881612c3c565b92915050565b600081519050611a5d81612c3c565b92915050565b600082601f830112611a7857611a776127d9565b5b8135611a88848260208601611943565b91505092915050565b600081359050611aa081612c53565b92915050565b600081519050611ab581612c53565b92915050565b60008060408385031215611ad257611ad16127ed565b5b6000611ae085828601611985565b9250506020611af185828601611985565b9150509250929050565b600080600080600060a08688031215611b1757611b166127ed565b5b6000611b2588828901611985565b9550506020611b3688828901611985565b945050604086013567ffffffffffffffff811115611b5757611b566127e8565b5b611b63888289016119c8565b935050606086013567ffffffffffffffff811115611b8457611b836127e8565b5b611b90888289016119c8565b925050608086013567ffffffffffffffff811115611bb157611bb06127e8565b5b611bbd88828901611a63565b9150509295509295909350565b600080600080600060a08688031215611be657611be56127ed565b5b6000611bf488828901611985565b9550506020611c0588828901611985565b9450506040611c1688828901611a91565b9350506060611c2788828901611a91565b925050608086013567ffffffffffffffff811115611c4857611c476127e8565b5b611c5488828901611a63565b9150509295509295909350565b60008060408385031215611c7857611c776127ed565b5b6000611c8685828601611985565b9250506020611c9785828601611a24565b9150509250929050565b60008060408385031215611cb857611cb76127ed565b5b6000611cc685828601611985565b9250506020611cd785828601611a91565b9150509250929050565b60008060408385031215611cf857611cf76127ed565b5b600083013567ffffffffffffffff811115611d1657611d156127e8565b5b611d228582860161199a565b925050602083013567ffffffffffffffff811115611d4357611d426127e8565b5b611d4f858286016119c8565b9150509250929050565b600060208284031215611d6f57611d6e6127ed565b5b600082015167ffffffffffffffff811115611d8d57611d8c6127e8565b5b611d99848285016119f6565b91505092915050565b600060208284031215611db857611db76127ed565b5b6000611dc684828501611a39565b91505092915050565b600060208284031215611de557611de46127ed565b5b6000611df384828501611a4e565b91505092915050565b600060208284031215611e1257611e116127ed565b5b6000611e2084828501611a91565b91505092915050565b600060208284031215611e3f57611e3e6127ed565b5b6000611e4d84828501611aa6565b91505092915050565b60008060408385031215611e6d57611e6c6127ed565b5b6000611e7b85828601611a91565b9250506020611e8c85828601611985565b9150509250929050565b6000611ea28383612140565b60208301905092915050565b611eb781612599565b82525050565b6000611ec882612538565b611ed28185612566565b9350611edd83612528565b8060005b83811015611f0e578151611ef58882611e96565b9750611f0083612559565b925050600181019050611ee1565b5085935050505092915050565b611f24816125ab565b82525050565b6000611f3582612543565b611f3f8185612577565b9350611f4f81856020860161261c565b611f58816127f2565b840191505092915050565b6000611f6e8261254e565b611f788185612588565b9350611f8881856020860161261c565b611f91816127f2565b840191505092915050565b6000611fa9603483612588565b9150611fb482612810565b604082019050919050565b6000611fcc602f83612588565b9150611fd78261285f565b604082019050919050565b6000611fef602883612588565b9150611ffa826128ae565b604082019050919050565b6000612012602283612588565b915061201d826128fd565b604082019050919050565b6000612035602083612588565b91506120408261294c565b602082019050919050565b6000612058602a83612588565b915061206382612975565b604082019050919050565b600061207b602583612588565b9150612086826129c4565b604082019050919050565b600061209e602983612588565b91506120a982612a13565b604082019050919050565b60006120c1602983612588565b91506120cc82612a62565b604082019050919050565b60006120e4602083612588565b91506120ef82612ab1565b602082019050919050565b6000612107602883612588565b915061211282612ada565b604082019050919050565b600061212a602383612588565b915061213582612b29565b604082019050919050565b61214981612603565b82525050565b61215881612603565b82525050565b600060a0820190506121736000830188611eae565b6121806020830187611eae565b81810360408301526121928186611ebd565b905081810360608301526121a68185611ebd565b905081810360808301526121ba8184611f2a565b90509695505050505050565b600060a0820190506121db6000830188611eae565b6121e86020830187611eae565b6121f5604083018661214f565b612202606083018561214f565b81810360808301526122148184611f2a565b90509695505050505050565b6000602082019050818103600083015261223a8184611ebd565b905092915050565b6000604082019050818103600083015261225c8185611ebd565b905081810360208301526122708184611ebd565b90509392505050565b600060208201905061228e6000830184611f1b565b92915050565b600060208201905081810360008301526122ae8184611f63565b905092915050565b600060208201905081810360008301526122cf81611f9c565b9050919050565b600060208201905081810360008301526122ef81611fbf565b9050919050565b6000602082019050818103600083015261230f81611fe2565b9050919050565b6000602082019050818103600083015261232f81612005565b9050919050565b6000602082019050818103600083015261234f81612028565b9050919050565b6000602082019050818103600083015261236f8161204b565b9050919050565b6000602082019050818103600083015261238f8161206e565b9050919050565b600060208201905081810360008301526123af81612091565b9050919050565b600060208201905081810360008301526123cf816120b4565b9050919050565b600060208201905081810360008301526123ef816120d7565b9050919050565b6000602082019050818103600083015261240f816120fa565b9050919050565b6000602082019050818103600083015261242f8161211d565b9050919050565b600060208201905061244b600083018461214f565b92915050565b6000604082019050612466600083018561214f565b612473602083018461214f565b9392505050565b6000612484612495565b90506124908282612681565b919050565b6000604051905090565b600067ffffffffffffffff8211156124ba576124b9612788565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156124e6576124e5612788565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561251257612511612788565b5b61251b826127f2565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006125a4826125e3565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561263a57808201518184015260208101905061261f565b83811115612649576000848401525b50505050565b6000600282049050600182168061266757607f821691505b6020821081141561267b5761267a61272a565b5b50919050565b61268a826127f2565b810181811067ffffffffffffffff821117156126a9576126a8612788565b5b80604052505050565b60006126bd82612603565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156126f0576126ef6126fb565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060033d11156127d65760046000803e6127d3600051612803565b90505b90565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160e01c9050919050565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b7f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60008201527f6572206e6f7220617070726f7665640000000000000000000000000000000000602082015250565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207573657220646f65736e2774206f776e20746f6b656e2060008201527f4944000000000000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207573657220646f65736e2774206f776e204e4654206964600082015250565b7f455243313135353a2061646472657373207a65726f206973206e6f742061207660008201527f616c6964206f776e657200000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b7f455243313135353a20696e76616c6964207472616e7366657220616d6f756e74600082015250565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a20726563656976657220616c72656164792068617320746f60008201527f6b656e0000000000000000000000000000000000000000000000000000000000602082015250565b600060443d1015612b8857612c0b565b612b90612495565b60043d036004823e80513d602482011167ffffffffffffffff82111715612bb8575050612c0b565b808201805167ffffffffffffffff811115612bd65750505050612c0b565b80602083010160043d038501811115612bf3575050505050612c0b565b612c0282602001850186612681565b82955050505050505b90565b612c1781612599565b8114612c2257600080fd5b50565b612c2e816125ab565b8114612c3957600080fd5b50565b612c45816125b7565b8114612c5057600080fd5b50565b612c5c81612603565b8114612c6757600080fd5b5056fea2646970667358221220f99883ebcfe34a4b4ca8c2e7286c5ef20892565c2d6d6b8b8a2e72a8e3a5778d64736f6c63430008070033";

type AssetHolderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetHolderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetHolder__factory extends ContractFactory {
  constructor(...args: AssetHolderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetHolder> {
    return super.deploy(uri_, overrides || {}) as Promise<AssetHolder>;
  }
  override getDeployTransaction(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override attach(address: string): AssetHolder {
    return super.attach(address) as AssetHolder;
  }
  override connect(signer: Signer): AssetHolder__factory {
    return super.connect(signer) as AssetHolder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetHolderInterface {
    return new utils.Interface(_abi) as AssetHolderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetHolder {
    return new Contract(address, _abi, signerOrProvider) as AssetHolder;
  }
}
