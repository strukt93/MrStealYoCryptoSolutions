/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenVault,
  TokenVaultInterface,
} from "../../../contracts/degen-jackpot/TokenVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "provider",
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
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        name: "transferAmount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
    ],
    name: "setAddressRegistry",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenTrackers",
    outputs: [
      {
        internalType: "uint256",
        name: "lastBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastMul",
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

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620034c0380380620034c0833981810160405281019062000037919062000186565b80620000586200004c620000a160201b60201c565b620000a960201b60201c565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506200020b565b600033905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200018081620001f1565b92915050565b6000602082840312156200019f576200019e620001ec565b5b6000620001af848285016200016f565b91505092915050565b6000620001c582620001cc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620001fc81620001b8565b81146200020857600080fd5b50565b6132a5806200021b6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad578063a3606b9011610071578063a3606b9014610340578063b9b97f0a1461035c578063ca15c87314610378578063d547741f146103a8578063f2fde38b146103c45761012c565b8063715018a61461029a5780638da5cb5b146102a45780639010d07c146102c257806391d14854146102f2578063a217fddf146103225761012c565b8063375d59ba116100f4578063375d59ba146101e55780633c08f3e314610201578063522f9b371461021d5780635d61210d1461024d578063628645c0146102695761012c565b806301ffc9a714610131578063248a9ca31461016157806327c7812c146101915780632f2ff15d146101ad57806336568abe146101c9575b600080fd5b61014b600480360381019061014691906124b4565b6103e0565b60405161015891906129f8565b60405180910390f35b61017b60048036038101906101769190612407565b61045a565b6040516101889190612a13565b60405180910390f35b6101ab60048036038101906101a69190612380565b610479565b005b6101c760048036038101906101c29190612434565b6104c5565b005b6101e360048036038101906101de9190612434565b6104e6565b005b6101ff60048036038101906101fa9190612635565b610569565b005b61021b6004803603810190610216919061253b565b61087a565b005b610237600480360381019061023291906124e1565b610aae565b6040516102449190612b90565b60405180910390f35b610267600480360381019061026291906125e2565b610b45565b005b610283600480360381019061027e9190612380565b610eda565b604051610291929190612bc6565b60405180910390f35b6102a2610efe565b005b6102ac610f12565b6040516102b991906129b4565b60405180910390f35b6102dc60048036038101906102d79190612474565b610f3c565b6040516102e991906129b4565b60405180910390f35b61030c60048036038101906103079190612434565b610f6b565b60405161031991906129f8565b60405180910390f35b61032a610fd5565b6040516103379190612a13565b60405180910390f35b61035a60048036038101906103559190612635565b610fdc565b005b6103766004803603810190610371919061257b565b611208565b005b610392600480360381019061038d9190612407565b611227565b60405161039f9190612bab565b60405180910390f35b6103c260048036038101906103bd9190612434565b61124b565b005b6103de60048036038101906103d99190612380565b61126c565b005b60007f5a05180f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104535750610452826112f0565b5b9050919050565b6000806000838152602001908152602001600020600101549050919050565b61048161136a565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6104ce8261045a565b6104d7816113e8565b6104e183836113fc565b505050565b6104ee611430565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461055b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055290612b70565b60405180910390fd5b6105658282611438565b5050565b600073ffffffffffffffffffffffffffffffffffffffff16610589611430565b73ffffffffffffffffffffffffffffffffffffffff1614156105e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d790612ab0565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f97e7d746040518163ffffffff1660e01b815260040160206040518083038186803b15801561064857600080fd5b505afa15801561065c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068091906123ad565b73ffffffffffffffffffffffffffffffffffffffff1661069e611430565b73ffffffffffffffffffffffffffffffffffffffff16146106f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106eb90612af0565b60405180910390fd5b600460008481526020019081526020016000206001015481101561074d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074490612a70565b60405180910390fd5b60006004600085815260200190815260200160002090508181600101819055506107ec84826040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505061087a565b600083146108745761087383826040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505061087a565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff1661089a611430565b73ffffffffffffffffffffffffffffffffffffffff1614156108f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e890612ab0565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f97e7d746040518163ffffffff1660e01b815260040160206040518083038186803b15801561095957600080fd5b505afa15801561096d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099191906123ad565b73ffffffffffffffffffffffffffffffffffffffff166109af611430565b73ffffffffffffffffffffffffffffffffffffffff1614610a05576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fc90612af0565b60405180910390fd5b80600001516004600084815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080602001516004600084815260200190815260200160002060010181905550600081604001511115610aaa57806040015160046000848152602001908152602001600020600201819055505b5050565b610ab6612252565b600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815250509050919050565b600073ffffffffffffffffffffffffffffffffffffffff16610b65611430565b73ffffffffffffffffffffffffffffffffffffffff161415610bbc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb390612ab0565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f97e7d746040518163ffffffff1660e01b815260040160206040518083038186803b158015610c2457600080fd5b505afa158015610c38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5c91906123ad565b73ffffffffffffffffffffffffffffffffffffffff16610c7a611430565b73ffffffffffffffffffffffffffffffffffffffff1614610cd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc790612af0565b60405180910390fd5b60006004600085815260200190815260200160002090506000600560008360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610d8286600061146c565b600083600201548360010154878660010154610d9e9190612cd8565b610da89190612cd8565b610db29190612ca7565b905080836000016000828254610dc89190612d32565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610e2f57610e2e85828473ffffffffffffffffffffffffffffffffffffffff1661161c9092919063ffffffff16565b5b6000610e396116a2565b73ffffffffffffffffffffffffffffffffffffffff1663f77ee79d896040518263ffffffff1660e01b8152600401610e719190612bab565b60206040518083038186803b158015610e8957600080fd5b505afa158015610e9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec1919061250e565b1415610ed157610ed087611749565b5b50505050505050565b60056020528060005260406000206000915090508060000154908060010154905082565b610f0661136a565b610f106000611799565b565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000610f63826001600086815260200190815260200160002061185f90919063ffffffff16565b905092915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b600073ffffffffffffffffffffffffffffffffffffffff16610ffc611430565b73ffffffffffffffffffffffffffffffffffffffff161415611053576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104a90612ab0565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f97e7d746040518163ffffffff1660e01b815260040160206040518083038186803b1580156110bb57600080fd5b505afa1580156110cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f391906123ad565b73ffffffffffffffffffffffffffffffffffffffff16611111611430565b73ffffffffffffffffffffffffffffffffffffffff1614611167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115e90612af0565b60405180910390fd5b61117c8383836111779190612cd8565b61146c565b6000600460008581526020019081526020016000209050600560008260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154816002018190555050505050565b611212848461087a565b61122184846020015184610fdc565b50505050565b600061124460016000848152602001908152602001600020611879565b9050919050565b6112548261045a565b61125d816113e8565b6112678383611438565b505050565b61127461136a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156112e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112db90612a90565b60405180910390fd5b6112ed81611799565b50565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061136357506113628261188e565b5b9050919050565b611372611430565b73ffffffffffffffffffffffffffffffffffffffff16611390610f12565b73ffffffffffffffffffffffffffffffffffffffff16146113e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113dd90612b10565b60405180910390fd5b565b6113f9816113f4611430565b6118f8565b50565b6114068282611995565b61142b8160016000858152602001908152602001600020611a7590919063ffffffff16565b505050565b600033905090565b6114428282611aa5565b6114678160016000858152602001908152602001600020611b8690919063ffffffff16565b505050565b600060046000848152602001908152602001600020905060008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008082600001549050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146115bd578373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161156691906129b4565b60206040518083038186803b15801561157e57600080fd5b505afa158015611592573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b6919061250e565b91506115c1565b8091505b600081146115ed578082670de0b6b3a76400006115de9190612cd8565b6115e89190612ca7565b6115f7565b670de0b6b3a76400005b8360010181905550858261160b9190612c51565b836000018190555050505050505050565b61169d8363a9059cbb60e01b848460405160240161163b9291906129cf565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611bb6565b505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d59e296e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561170c57600080fd5b505afa158015611720573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174491906123ad565b905090565b60046000828152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018201600090556002820160009055505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600061186e8360000183611c7d565b60001c905092915050565b600061188782600001611ca8565b9050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6119028282610f6b565b611991576119278173ffffffffffffffffffffffffffffffffffffffff166014611cb9565b6119358360001c6020611cb9565b60405160200161194692919061297a565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119889190612a2e565b60405180910390fd5b5050565b61199f8282610f6b565b611a7157600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611a16611430565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000611a9d836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611ef5565b905092915050565b611aaf8282610f6b565b15611b8257600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611b27611430565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6000611bae836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611f65565b905092915050565b6000611c18826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120799092919063ffffffff16565b9050600081511115611c785780806020019051810190611c3891906123da565b611c77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6e90612b50565b60405180910390fd5b5b505050565b6000826000018281548110611c9557611c94612eff565b5b9060005260206000200154905092915050565b600081600001805490509050919050565b606060006002836002611ccc9190612cd8565b611cd69190612c51565b67ffffffffffffffff811115611cef57611cee612f2e565b5b6040519080825280601f01601f191660200182016040528015611d215781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611d5957611d58612eff565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611dbd57611dbc612eff565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002611dfd9190612cd8565b611e079190612c51565b90505b6001811115611ea7577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110611e4957611e48612eff565b5b1a60f81b828281518110611e6057611e5f612eff565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080611ea090612e17565b9050611e0a565b5060008414611eeb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ee290612a50565b60405180910390fd5b8091505092915050565b6000611f018383612091565b611f5a578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611f5f565b600090505b92915050565b6000808360010160008481526020019081526020016000205490506000811461206d576000600182611f979190612d32565b9050600060018660000180549050611faf9190612d32565b905081811461201e576000866000018281548110611fd057611fcf612eff565b5b9060005260206000200154905080876000018481548110611ff457611ff3612eff565b5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b8560000180548061203257612031612ed0565b5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050612073565b60009150505b92915050565b606061208884846000856120b4565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b6060824710156120f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120f090612ad0565b60405180910390fd5b612102856121c8565b612141576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161213890612b30565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161216a9190612963565b60006040518083038185875af1925050503d80600081146121a7576040519150601f19603f3d011682016040523d82523d6000602084013e6121ac565b606091505b50915091506121bc8282866121eb565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606083156121fb5782905061224b565b60008351111561220e5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122429190612a2e565b60405180910390fd5b9392505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b600081359050612298816131fc565b92915050565b6000815190506122ad816131fc565b92915050565b6000815190506122c281613213565b92915050565b6000813590506122d78161322a565b92915050565b6000813590506122ec81613241565b92915050565b60006060828403121561230857612307612f5d565b5b6123126060612bef565b9050600061232284828501612289565b600083015250602061233684828501612356565b602083015250604061234a84828501612356565b60408301525092915050565b60008135905061236581613258565b92915050565b60008151905061237a81613258565b92915050565b60006020828403121561239657612395612f62565b5b60006123a484828501612289565b91505092915050565b6000602082840312156123c3576123c2612f62565b5b60006123d18482850161229e565b91505092915050565b6000602082840312156123f0576123ef612f62565b5b60006123fe848285016122b3565b91505092915050565b60006020828403121561241d5761241c612f62565b5b600061242b848285016122c8565b91505092915050565b6000806040838503121561244b5761244a612f62565b5b6000612459858286016122c8565b925050602061246a85828601612289565b9150509250929050565b6000806040838503121561248b5761248a612f62565b5b6000612499858286016122c8565b92505060206124aa85828601612356565b9150509250929050565b6000602082840312156124ca576124c9612f62565b5b60006124d8848285016122dd565b91505092915050565b6000602082840312156124f7576124f6612f62565b5b600061250584828501612356565b91505092915050565b60006020828403121561252457612523612f62565b5b60006125328482850161236b565b91505092915050565b6000806080838503121561255257612551612f62565b5b600061256085828601612356565b9250506020612571858286016122f2565b9150509250929050565b60008060008060c0858703121561259557612594612f62565b5b60006125a387828801612356565b94505060206125b4878288016122f2565b93505060806125c587828801612356565b92505060a06125d687828801612289565b91505092959194509250565b6000806000606084860312156125fb576125fa612f62565b5b600061260986828701612356565b935050602061261a86828701612356565b925050604061262b86828701612289565b9150509250925092565b60008060006060848603121561264e5761264d612f62565b5b600061265c86828701612356565b935050602061266d86828701612356565b925050604061267e86828701612356565b9150509250925092565b61269181612d66565b82525050565b6126a081612d66565b82525050565b6126af81612d78565b82525050565b6126be81612d84565b82525050565b60006126cf82612c14565b6126d98185612c2a565b93506126e9818560208601612de4565b80840191505092915050565b600061270082612c1f565b61270a8185612c35565b935061271a818560208601612de4565b61272381612f67565b840191505092915050565b600061273982612c1f565b6127438185612c46565b9350612753818560208601612de4565b80840191505092915050565b600061276c602083612c35565b915061277782612f78565b602082019050919050565b600061278f600483612c35565b915061279a82612fa1565b602082019050919050565b60006127b2602683612c35565b91506127bd82612fca565b604082019050919050565b60006127d5600483612c35565b91506127e082613019565b602082019050919050565b60006127f8602683612c35565b915061280382613042565b604082019050919050565b600061281b600483612c35565b915061282682613091565b602082019050919050565b600061283e602083612c35565b9150612849826130ba565b602082019050919050565b6000612861601d83612c35565b915061286c826130e3565b602082019050919050565b6000612884601783612c46565b915061288f8261310c565b601782019050919050565b60006128a7602a83612c35565b91506128b282613135565b604082019050919050565b60006128ca601183612c46565b91506128d582613184565b601182019050919050565b60006128ed602f83612c35565b91506128f8826131ad565b604082019050919050565b6060820160008201516129196000850182612688565b50602082015161292c6020850182612945565b50604082015161293f6040850182612945565b50505050565b61294e81612dda565b82525050565b61295d81612dda565b82525050565b600061296f82846126c4565b915081905092915050565b600061298582612877565b9150612991828561272e565b915061299c826128bd565b91506129a8828461272e565b91508190509392505050565b60006020820190506129c96000830184612697565b92915050565b60006040820190506129e46000830185612697565b6129f16020830184612954565b9392505050565b6000602082019050612a0d60008301846126a6565b92915050565b6000602082019050612a2860008301846126b5565b92915050565b60006020820190508181036000830152612a4881846126f5565b905092915050565b60006020820190508181036000830152612a698161275f565b9050919050565b60006020820190508181036000830152612a8981612782565b9050919050565b60006020820190508181036000830152612aa9816127a5565b9050919050565b60006020820190508181036000830152612ac9816127c8565b9050919050565b60006020820190508181036000830152612ae9816127eb565b9050919050565b60006020820190508181036000830152612b098161280e565b9050919050565b60006020820190508181036000830152612b2981612831565b9050919050565b60006020820190508181036000830152612b4981612854565b9050919050565b60006020820190508181036000830152612b698161289a565b9050919050565b60006020820190508181036000830152612b89816128e0565b9050919050565b6000606082019050612ba56000830184612903565b92915050565b6000602082019050612bc06000830184612954565b92915050565b6000604082019050612bdb6000830185612954565b612be86020830184612954565b9392505050565b6000612bf9612c0a565b9050612c058282612e41565b919050565b6000604051905090565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b6000612c5c82612dda565b9150612c6783612dda565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612c9c57612c9b612e72565b5b828201905092915050565b6000612cb282612dda565b9150612cbd83612dda565b925082612ccd57612ccc612ea1565b5b828204905092915050565b6000612ce382612dda565b9150612cee83612dda565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612d2757612d26612e72565b5b828202905092915050565b6000612d3d82612dda565b9150612d4883612dda565b925082821015612d5b57612d5a612e72565b5b828203905092915050565b6000612d7182612dba565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015612e02578082015181840152602081019050612de7565b83811115612e11576000848401525b50505050565b6000612e2282612dda565b91506000821415612e3657612e35612e72565b5b600182039050919050565b612e4a82612f67565b810181811067ffffffffffffffff82111715612e6957612e68612f2e565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f4530303300000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4530303400000000000000000000000000000000000000000000000000000000600082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f4530313700000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b61320581612d66565b811461321057600080fd5b50565b61321c81612d78565b811461322757600080fd5b50565b61323381612d84565b811461323e57600080fd5b50565b61324a81612d8e565b811461325557600080fd5b50565b61326181612dda565b811461326c57600080fd5b5056fea26469706673582212209b0d98912dd8bcaef68c133494a9568edabf9a0c70d39505b20508df833512a864736f6c63430008070033";

type TokenVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenVault__factory extends ContractFactory {
  constructor(...args: TokenVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenVault> {
    return super.deploy(provider, overrides || {}) as Promise<TokenVault>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(provider, overrides || {});
  }
  override attach(address: string): TokenVault {
    return super.attach(address) as TokenVault;
  }
  override connect(signer: Signer): TokenVault__factory {
    return super.connect(signer) as TokenVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenVaultInterface {
    return new utils.Interface(_abi) as TokenVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenVault {
    return new Contract(address, _abi, signerOrProvider) as TokenVault;
  }
}