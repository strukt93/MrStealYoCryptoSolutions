/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1155,
  ERC1155Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC1155/ERC1155";

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
  "0x60806040523480156200001157600080fd5b50604051620028da380380620028da833981810160405281019062000037919062000199565b62000048816200004f60201b60201c565b506200036e565b8060029080519060200190620000679291906200006b565b5050565b82805462000079906200027f565b90600052602060002090601f0160209004810192826200009d5760008555620000e9565b82601f10620000b857805160ff1916838001178555620000e9565b82800160010185558215620000e9579182015b82811115620000e8578251825591602001919060010190620000cb565b5b509050620000f89190620000fc565b5090565b5b8082111562000117576000816000905550600101620000fd565b5090565b6000620001326200012c8462000213565b620001ea565b9050828152602081018484840111156200015157620001506200034e565b5b6200015e84828562000249565b509392505050565b600082601f8301126200017e576200017d62000349565b5b8151620001908482602086016200011b565b91505092915050565b600060208284031215620001b257620001b162000358565b5b600082015167ffffffffffffffff811115620001d357620001d262000353565b5b620001e18482850162000166565b91505092915050565b6000620001f662000209565b9050620002048282620002b5565b919050565b6000604051905090565b600067ffffffffffffffff8211156200023157620002306200031a565b5b6200023c826200035d565b9050602081019050919050565b60005b83811015620002695780820151818401526020810190506200024c565b8381111562000279576000848401525b50505050565b600060028204905060018216806200029857607f821691505b60208210811415620002af57620002ae620002eb565b5b50919050565b620002c0826200035d565b810181811067ffffffffffffffff82111715620002e257620002e16200031a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61255c806200037e6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f414610138578063a22cb46514610168578063e985e9c514610184578063f242432a146101b457610087565b8062fdd58e1461008c57806301ffc9a7146100bc5780630e89341c146100ec5780632eb2c2d61461011c575b600080fd5b6100a660048036038101906100a19190611727565b6101d0565b6040516100b39190611d3d565b60405180910390f35b6100d660048036038101906100d191906117df565b610299565b6040516100e39190611be0565b60405180910390f35b61010660048036038101906101019190611839565b61037b565b6040516101139190611bfb565b60405180910390f35b61013660048036038101906101319190611581565b61040f565b005b610152600480360381019061014d9190611767565b6104b0565b60405161015f9190611b87565b60405180910390f35b610182600480360381019061017d91906116e7565b6105c9565b005b61019e60048036038101906101999190611541565b6105df565b6040516101ab9190611be0565b60405180910390f35b6101ce60048036038101906101c99190611650565b610673565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610241576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023890611c7d565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061036457507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610374575061037382610714565b5b9050919050565b60606002805461038a90611fac565b80601f01602080910402602001604051908101604052809291908181526020018280546103b690611fac565b80156104035780601f106103d857610100808354040283529160200191610403565b820191906000526020600020905b8154815290600101906020018083116103e657829003601f168201915b50505050509050919050565b61041761077e565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061045d575061045c8561045761077e565b6105df565b5b61049c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049390611c3d565b60405180910390fd5b6104a98585858585610786565b5050505050565b606081518351146104f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ed90611cfd565b60405180910390fd5b6000835167ffffffffffffffff811115610513576105126120e5565b5b6040519080825280602002602001820160405280156105415781602001602082028036833780820191505090505b50905060005b84518110156105be5761058e858281518110610566576105656120b6565b5b6020026020010151858381518110610581576105806120b6565b5b60200260200101516101d0565b8282815181106105a1576105a06120b6565b5b602002602001018181525050806105b79061200f565b9050610547565b508091505092915050565b6105db6105d461077e565b8383610aa8565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61067b61077e565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806106c157506106c0856106bb61077e565b6105df565b5b610700576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f790611c3d565b60405180910390fd5b61070d8585858585610c15565b5050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b81518351146107ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c190611d1d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561083a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083190611c9d565b60405180910390fd5b600061084461077e565b9050610854818787878787610eb1565b60005b8451811015610a05576000858281518110610875576108746120b6565b5b602002602001015190506000858381518110610894576108936120b6565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610935576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092c90611cbd565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546109ea9190611ea0565b92505081905550505050806109fe9061200f565b9050610857565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610a7c929190611ba9565b60405180910390a4610a92818787878787610eb9565b610aa0818787878787610ec1565b505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0e90611cdd565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610c089190611be0565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610c85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7c90611c9d565b60405180910390fd5b6000610c8f61077e565b90506000610c9c856110a8565b90506000610ca9856110a8565b9050610cb9838989858589610eb1565b600080600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905085811015610d50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4790611cbd565b60405180910390fd5b85810360008089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560008089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e059190611ea0565b925050819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a8a604051610e82929190611d58565b60405180910390a4610e98848a8a86868a610eb9565b610ea6848a8a8a8a8a611122565b505050505050505050565b505050505050565b505050505050565b610ee08473ffffffffffffffffffffffffffffffffffffffff16611309565b156110a0578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401610f26959493929190611ac5565b602060405180830381600087803b158015610f4057600080fd5b505af1925050508015610f7157506040513d601f19601f82011682018060405250810190610f6e919061180c565b60015b61101757610f7d612114565b806308c379a01415610fda5750610f92612434565b80610f9d5750610fdc565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd19190611bfb565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100e90611c1d565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461109e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109590611c5d565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff8111156110c7576110c66120e5565b5b6040519080825280602002602001820160405280156110f55781602001602082028036833780820191505090505b509050828160008151811061110d5761110c6120b6565b5b60200260200101818152505080915050919050565b6111418473ffffffffffffffffffffffffffffffffffffffff16611309565b15611301578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611187959493929190611b2d565b602060405180830381600087803b1580156111a157600080fd5b505af19250505080156111d257506040513d601f19601f820116820180604052508101906111cf919061180c565b60015b611278576111de612114565b806308c379a0141561123b57506111f3612434565b806111fe575061123d565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112329190611bfb565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126f90611c1d565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146112ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f690611c5d565b60405180910390fd5b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061133f61133a84611da6565b611d81565b905080838252602082019050828560208602820111156113625761136161213b565b5b60005b858110156113925781611378888261144e565b845260208401935060208301925050600181019050611365565b5050509392505050565b60006113af6113aa84611dd2565b611d81565b905080838252602082019050828560208602820111156113d2576113d161213b565b5b60005b8581101561140257816113e8888261152c565b8452602084019350602083019250506001810190506113d5565b5050509392505050565b600061141f61141a84611dfe565b611d81565b90508281526020810184848401111561143b5761143a612140565b5b611446848285611f6a565b509392505050565b60008135905061145d816124ca565b92915050565b600082601f83011261147857611477612136565b5b813561148884826020860161132c565b91505092915050565b600082601f8301126114a6576114a5612136565b5b81356114b684826020860161139c565b91505092915050565b6000813590506114ce816124e1565b92915050565b6000813590506114e3816124f8565b92915050565b6000815190506114f8816124f8565b92915050565b600082601f83011261151357611512612136565b5b813561152384826020860161140c565b91505092915050565b60008135905061153b8161250f565b92915050565b600080604083850312156115585761155761214a565b5b60006115668582860161144e565b92505060206115778582860161144e565b9150509250929050565b600080600080600060a0868803121561159d5761159c61214a565b5b60006115ab8882890161144e565b95505060206115bc8882890161144e565b945050604086013567ffffffffffffffff8111156115dd576115dc612145565b5b6115e988828901611491565b935050606086013567ffffffffffffffff81111561160a57611609612145565b5b61161688828901611491565b925050608086013567ffffffffffffffff81111561163757611636612145565b5b611643888289016114fe565b9150509295509295909350565b600080600080600060a0868803121561166c5761166b61214a565b5b600061167a8882890161144e565b955050602061168b8882890161144e565b945050604061169c8882890161152c565b93505060606116ad8882890161152c565b925050608086013567ffffffffffffffff8111156116ce576116cd612145565b5b6116da888289016114fe565b9150509295509295909350565b600080604083850312156116fe576116fd61214a565b5b600061170c8582860161144e565b925050602061171d858286016114bf565b9150509250929050565b6000806040838503121561173e5761173d61214a565b5b600061174c8582860161144e565b925050602061175d8582860161152c565b9150509250929050565b6000806040838503121561177e5761177d61214a565b5b600083013567ffffffffffffffff81111561179c5761179b612145565b5b6117a885828601611463565b925050602083013567ffffffffffffffff8111156117c9576117c8612145565b5b6117d585828601611491565b9150509250929050565b6000602082840312156117f5576117f461214a565b5b6000611803848285016114d4565b91505092915050565b6000602082840312156118225761182161214a565b5b6000611830848285016114e9565b91505092915050565b60006020828403121561184f5761184e61214a565b5b600061185d8482850161152c565b91505092915050565b60006118728383611aa7565b60208301905092915050565b61188781611ef6565b82525050565b600061189882611e3f565b6118a28185611e6d565b93506118ad83611e2f565b8060005b838110156118de5781516118c58882611866565b97506118d083611e60565b9250506001810190506118b1565b5085935050505092915050565b6118f481611f08565b82525050565b600061190582611e4a565b61190f8185611e7e565b935061191f818560208601611f79565b6119288161214f565b840191505092915050565b600061193e82611e55565b6119488185611e8f565b9350611958818560208601611f79565b6119618161214f565b840191505092915050565b6000611979603483611e8f565b91506119848261216d565b604082019050919050565b600061199c602f83611e8f565b91506119a7826121bc565b604082019050919050565b60006119bf602883611e8f565b91506119ca8261220b565b604082019050919050565b60006119e2602a83611e8f565b91506119ed8261225a565b604082019050919050565b6000611a05602583611e8f565b9150611a10826122a9565b604082019050919050565b6000611a28602a83611e8f565b9150611a33826122f8565b604082019050919050565b6000611a4b602983611e8f565b9150611a5682612347565b604082019050919050565b6000611a6e602983611e8f565b9150611a7982612396565b604082019050919050565b6000611a91602883611e8f565b9150611a9c826123e5565b604082019050919050565b611ab081611f60565b82525050565b611abf81611f60565b82525050565b600060a082019050611ada600083018861187e565b611ae7602083018761187e565b8181036040830152611af9818661188d565b90508181036060830152611b0d818561188d565b90508181036080830152611b2181846118fa565b90509695505050505050565b600060a082019050611b42600083018861187e565b611b4f602083018761187e565b611b5c6040830186611ab6565b611b696060830185611ab6565b8181036080830152611b7b81846118fa565b90509695505050505050565b60006020820190508181036000830152611ba1818461188d565b905092915050565b60006040820190508181036000830152611bc3818561188d565b90508181036020830152611bd7818461188d565b90509392505050565b6000602082019050611bf560008301846118eb565b92915050565b60006020820190508181036000830152611c158184611933565b905092915050565b60006020820190508181036000830152611c368161196c565b9050919050565b60006020820190508181036000830152611c568161198f565b9050919050565b60006020820190508181036000830152611c76816119b2565b9050919050565b60006020820190508181036000830152611c96816119d5565b9050919050565b60006020820190508181036000830152611cb6816119f8565b9050919050565b60006020820190508181036000830152611cd681611a1b565b9050919050565b60006020820190508181036000830152611cf681611a3e565b9050919050565b60006020820190508181036000830152611d1681611a61565b9050919050565b60006020820190508181036000830152611d3681611a84565b9050919050565b6000602082019050611d526000830184611ab6565b92915050565b6000604082019050611d6d6000830185611ab6565b611d7a6020830184611ab6565b9392505050565b6000611d8b611d9c565b9050611d978282611fde565b919050565b6000604051905090565b600067ffffffffffffffff821115611dc157611dc06120e5565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611ded57611dec6120e5565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611e1957611e186120e5565b5b611e228261214f565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611eab82611f60565b9150611eb683611f60565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611eeb57611eea612058565b5b828201905092915050565b6000611f0182611f40565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611f97578082015181840152602081019050611f7c565b83811115611fa6576000848401525b50505050565b60006002820490506001821680611fc457607f821691505b60208210811415611fd857611fd7612087565b5b50919050565b611fe78261214f565b810181811067ffffffffffffffff82111715612006576120056120e5565b5b80604052505050565b600061201a82611f60565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561204d5761204c612058565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060033d11156121335760046000803e612130600051612160565b90505b90565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160e01c9050919050565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b7f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60008201527f6572206e6f7220617070726f7665640000000000000000000000000000000000602082015250565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2061646472657373207a65726f206973206e6f742061207660008201527f616c6964206f776e657200000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b600060443d1015612444576124c7565b61244c611d9c565b60043d036004823e80513d602482011167ffffffffffffffff821117156124745750506124c7565b808201805167ffffffffffffffff81111561249257505050506124c7565b80602083010160043d0385018111156124af5750505050506124c7565b6124be82602001850186611fde565b82955050505050505b90565b6124d381611ef6565b81146124de57600080fd5b50565b6124ea81611f08565b81146124f557600080fd5b50565b61250181611f14565b811461250c57600080fd5b50565b61251881611f60565b811461252357600080fd5b5056fea2646970667358221220d09a44d07e41d14462a0de71a3b4304e72329a9c6586409098b8d5b7c9124a5964736f6c63430008070033";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  override getDeployTransaction(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  override connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}