/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SafuStrategy,
  SafuStrategyInterface,
} from "../../../contracts/safu-vault/SafuStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_want",
        type: "address",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "add",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isAdd",
        type: "bool",
      },
    ],
    name: "addOrRemoveFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
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
    inputs: [],
    name: "balanceOfWant",
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
    inputs: [],
    name: "beforeDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "setVault",
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
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
    name: "want",
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
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001c0338038062001c038339818101604052810190620000379190620001f4565b620000576200004b6200011160201b60201c565b6200011960201b60201c565b60008060146101000a81548160ff02191690831515021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505062000279565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050620001ee816200025f565b92915050565b6000602082840312156200020d576200020c6200025a565b5b60006200021d84828501620001dd565b91505092915050565b600062000233826200023a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6200026a8162000226565b81146200027657600080fd5b50565b61197a80620002896000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063722713f7116100a2578063c1a3d44c11610071578063c1a3d44c14610222578063d0e30db014610240578063f00526441461024a578063f2fde38b14610266578063fbfa77cf146102825761010b565b8063722713f7146101ac5780638456cb59146101ca5780638da5cb5b146101d45780639b19251a146101f25761010b565b8063573fef0a116100de578063573fef0a1461015e5780635c975abb146101685780636817031b14610186578063715018a6146101a25761010b565b80631f1fcd51146101105780632e1a7d4d1461012e5780633f4ba83a1461014a5780634641257d14610154575b600080fd5b6101186102a0565b6040516101259190611386565b60405180910390f35b610148600480360381019061014391906110fd565b6102c6565b005b61015261053a565b005b61015c61054c565b005b610166610642565b005b61017061070e565b60405161017d91906113ca565b60405180910390f35b6101a0600480360381019061019b9190611063565b610724565b005b6101aa610801565b005b6101b4610815565b6040516101c19190611567565b60405180910390f35b6101d261082f565b005b6101dc610841565b6040516101e99190611386565b60405180910390f35b61020c60048036038101906102079190611063565b61086a565b60405161021991906113ca565b60405180910390f35b61022a61088a565b6040516102379190611567565b60405180910390f35b61024861093c565b005b610264600480360381019061025f9190611090565b610946565b005b610280600480360381019061027b9190611063565b6109a9565b005b61028a610a2d565b6040516102979190611386565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610356576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034d906114a7565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103b39190611386565b60206040518083038186803b1580156103cb57600080fd5b505afa1580156103df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610403919061112a565b9050818110156104bb57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104689190611386565b60206040518083038186803b15801561048057600080fd5b505afa158015610494573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b8919061112a565b90505b818111156104c7578190505b610536600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610a539092919063ffffffff16565b5050565b610542610ad9565b61054a610b57565b565b610554610bb9565b60011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146105e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105de90611507565b60405180910390fd5b6105f033610c03565b15610630576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062790611547565b60405180910390fd5b610638610c26565b61064061093c565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161069f9190611386565b60206040518083038186803b1580156106b757600080fd5b505afa1580156106cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ef919061112a565b9050600081111561070b5761070261093c565b61070a610c26565b5b50565b60008060149054906101000a900460ff16905090565b61072c610ad9565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b490611427565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610809610ad9565b6108136000610c28565b565b60008061082061088a565b61082a91906115b4565b905090565b610837610ad9565b61083f610cec565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60036020528060005260406000206000915054906101000a900460ff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108e79190611386565b60206040518083038186803b1580156108ff57600080fd5b505afa158015610913573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610937919061112a565b905090565b610944610bb9565b565b61094e610ad9565b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6109b1610ad9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1890611447565b60405180910390fd5b610a2a81610c28565b50565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610ad48363a9059cbb60e01b8484604051602401610a729291906113a1565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610d4f565b505050565b610ae1610e16565b73ffffffffffffffffffffffffffffffffffffffff16610aff610841565b73ffffffffffffffffffffffffffffffffffffffff1614610b55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4c906114c7565b60405180910390fd5b565b610b5f610e1e565b60008060146101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610ba2610e16565b604051610baf9190611386565b60405180910390a1565b610bc161070e565b15610c01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf890611487565b60405180910390fd5b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610cf4610bb9565b6001600060146101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610d38610e16565b604051610d459190611386565b60405180910390a1565b6000610db1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610e679092919063ffffffff16565b9050600081511115610e115780806020019051810190610dd191906110d0565b610e10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0790611527565b60405180910390fd5b5b505050565b600033905090565b610e2661070e565b610e65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5c90611407565b60405180910390fd5b565b6060610e768484600085610e7f565b90509392505050565b606082471015610ec4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebb90611467565b60405180910390fd5b610ecd85610c03565b610f0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f03906114e7565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610f35919061136f565b60006040518083038185875af1925050503d8060008114610f72576040519150601f19603f3d011682016040523d82523d6000602084013e610f77565b606091505b5091509150610f87828286610f93565b92505050949350505050565b60608315610fa357829050610ff3565b600083511115610fb65782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fea91906113e5565b60405180910390fd5b9392505050565b600081359050611009816118ff565b92915050565b60008135905061101e81611916565b92915050565b60008151905061103381611916565b92915050565b6000813590506110488161192d565b92915050565b60008151905061105d8161192d565b92915050565b600060208284031215611079576110786116b4565b5b600061108784828501610ffa565b91505092915050565b600080604083850312156110a7576110a66116b4565b5b60006110b585828601610ffa565b92505060206110c68582860161100f565b9150509250929050565b6000602082840312156110e6576110e56116b4565b5b60006110f484828501611024565b91505092915050565b600060208284031215611113576111126116b4565b5b600061112184828501611039565b91505092915050565b6000602082840312156111405761113f6116b4565b5b600061114e8482850161104e565b91505092915050565b6111608161160a565b82525050565b61116f8161161c565b82525050565b600061118082611582565b61118a8185611598565b935061119a818560208601611652565b80840191505092915050565b60006111b18261158d565b6111bb81856115a3565b93506111cb818560208601611652565b6111d4816116b9565b840191505092915050565b60006111ec6014836115a3565b91506111f7826116ca565b602082019050919050565b600061120f6009836115a3565b915061121a826116f3565b602082019050919050565b60006112326026836115a3565b915061123d8261171c565b604082019050919050565b60006112556026836115a3565b91506112608261176b565b604082019050919050565b60006112786010836115a3565b9150611283826117ba565b602082019050919050565b600061129b6009836115a3565b91506112a6826117e3565b602082019050919050565b60006112be6020836115a3565b91506112c98261180c565b602082019050919050565b60006112e1601d836115a3565b91506112ec82611835565b602082019050919050565b6000611304600f836115a3565b915061130f8261185e565b602082019050919050565b6000611327602a836115a3565b915061133282611887565b604082019050919050565b600061134a600b836115a3565b9150611355826118d6565b602082019050919050565b61136981611648565b82525050565b600061137b8284611175565b915081905092915050565b600060208201905061139b6000830184611157565b92915050565b60006040820190506113b66000830185611157565b6113c36020830184611360565b9392505050565b60006020820190506113df6000830184611166565b92915050565b600060208201905081810360008301526113ff81846111a6565b905092915050565b60006020820190508181036000830152611420816111df565b9050919050565b6000602082019050818103600083015261144081611202565b9050919050565b6000602082019050818103600083015261146081611225565b9050919050565b6000602082019050818103600083015261148081611248565b9050919050565b600060208201905081810360008301526114a08161126b565b9050919050565b600060208201905081810360008301526114c08161128e565b9050919050565b600060208201905081810360008301526114e0816112b1565b9050919050565b60006020820190508181036000830152611500816112d4565b9050919050565b60006020820190508181036000830152611520816112f7565b9050919050565b600060208201905081810360008301526115408161131a565b9050919050565b600060208201905081810360008301526115608161133d565b9050919050565b600060208201905061157c6000830184611360565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006115bf82611648565b91506115ca83611648565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115ff576115fe611685565b5b828201905092915050565b600061161582611628565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015611670578082015181840152602081019050611655565b8381111561167f576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b7f7661756c74207365740000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b7f6e6f74207661756c740000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f6e6f742077686974656c69737465640000000000000000000000000000000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f697320636f6e7472616374000000000000000000000000000000000000000000600082015250565b6119088161160a565b811461191357600080fd5b50565b61191f8161161c565b811461192a57600080fd5b50565b61193681611648565b811461194157600080fd5b5056fea264697066735822122062876aec26e85069a3949a453e748bfb4881876a7639696b3b88fb8777ae2cea64736f6c63430008070033";

type SafuStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafuStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafuStrategy__factory extends ContractFactory {
  constructor(...args: SafuStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _want: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SafuStrategy> {
    return super.deploy(_want, overrides || {}) as Promise<SafuStrategy>;
  }
  override getDeployTransaction(
    _want: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_want, overrides || {});
  }
  override attach(address: string): SafuStrategy {
    return super.attach(address) as SafuStrategy;
  }
  override connect(signer: Signer): SafuStrategy__factory {
    return super.connect(signer) as SafuStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafuStrategyInterface {
    return new utils.Interface(_abi) as SafuStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafuStrategy {
    return new Contract(address, _abi, signerOrProvider) as SafuStrategy;
  }
}