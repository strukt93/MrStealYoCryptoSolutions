/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace IRevest {
  export type FNFTConfigStruct = {
    asset: PromiseOrValue<string>;
    depositAmount: PromiseOrValue<BigNumberish>;
    depositMul: PromiseOrValue<BigNumberish>;
  };

  export type FNFTConfigStructOutput = [string, BigNumber, BigNumber] & {
    asset: string;
    depositAmount: BigNumber;
    depositMul: BigNumber;
  };
}

export interface ITokenVaultInterface extends utils.Interface {
  functions: {
    "createFNFT(uint256,(address,uint256,uint256),uint256,address)": FunctionFragment;
    "depositToken(uint256,uint256,uint256)": FunctionFragment;
    "getFNFT(uint256)": FunctionFragment;
    "handleMultipleDeposits(uint256,uint256,uint256)": FunctionFragment;
    "mapFNFTToToken(uint256,(address,uint256,uint256))": FunctionFragment;
    "withdrawToken(uint256,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createFNFT"
      | "depositToken"
      | "getFNFT"
      | "handleMultipleDeposits"
      | "mapFNFTToToken"
      | "withdrawToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createFNFT",
    values: [
      PromiseOrValue<BigNumberish>,
      IRevest.FNFTConfigStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositToken",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getFNFT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "handleMultipleDeposits",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mapFNFTToToken",
    values: [PromiseOrValue<BigNumberish>, IRevest.FNFTConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "createFNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "handleMultipleDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mapFNFTToToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ITokenVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITokenVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createFNFT(
      fnftId: PromiseOrValue<BigNumberish>,
      fnftConfig: IRevest.FNFTConfigStruct,
      quantity: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositToken(
      fnftId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFNFT(
      fnftId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IRevest.FNFTConfigStructOutput]>;

    handleMultipleDeposits(
      fnftId: PromiseOrValue<BigNumberish>,
      newFNFTId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mapFNFTToToken(
      fnftId: PromiseOrValue<BigNumberish>,
      fnftConfig: IRevest.FNFTConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      fnftId: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createFNFT(
    fnftId: PromiseOrValue<BigNumberish>,
    fnftConfig: IRevest.FNFTConfigStruct,
    quantity: PromiseOrValue<BigNumberish>,
    from: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositToken(
    fnftId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    quantity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFNFT(
    fnftId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IRevest.FNFTConfigStructOutput>;

  handleMultipleDeposits(
    fnftId: PromiseOrValue<BigNumberish>,
    newFNFTId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mapFNFTToToken(
    fnftId: PromiseOrValue<BigNumberish>,
    fnftConfig: IRevest.FNFTConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    fnftId: PromiseOrValue<BigNumberish>,
    quantity: PromiseOrValue<BigNumberish>,
    user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createFNFT(
      fnftId: PromiseOrValue<BigNumberish>,
      fnftConfig: IRevest.FNFTConfigStruct,
      quantity: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositToken(
      fnftId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getFNFT(
      fnftId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IRevest.FNFTConfigStructOutput>;

    handleMultipleDeposits(
      fnftId: PromiseOrValue<BigNumberish>,
      newFNFTId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mapFNFTToToken(
      fnftId: PromiseOrValue<BigNumberish>,
      fnftConfig: IRevest.FNFTConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawToken(
      fnftId: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createFNFT(
      fnftId: PromiseOrValue<BigNumberish>,
      fnftConfig: IRevest.FNFTConfigStruct,
      quantity: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositToken(
      fnftId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFNFT(
      fnftId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handleMultipleDeposits(
      fnftId: PromiseOrValue<BigNumberish>,
      newFNFTId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mapFNFTToToken(
      fnftId: PromiseOrValue<BigNumberish>,
      fnftConfig: IRevest.FNFTConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      fnftId: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createFNFT(
      fnftId: PromiseOrValue<BigNumberish>,
      fnftConfig: IRevest.FNFTConfigStruct,
      quantity: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositToken(
      fnftId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFNFT(
      fnftId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handleMultipleDeposits(
      fnftId: PromiseOrValue<BigNumberish>,
      newFNFTId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mapFNFTToToken(
      fnftId: PromiseOrValue<BigNumberish>,
      fnftConfig: IRevest.FNFTConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      fnftId: PromiseOrValue<BigNumberish>,
      quantity: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
