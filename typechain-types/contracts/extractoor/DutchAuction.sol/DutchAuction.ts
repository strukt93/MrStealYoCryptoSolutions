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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface DutchAuctionInterface extends utils.Interface {
  functions: {
    "auctionEnded()": FunctionFragment;
    "auctionSuccessful()": FunctionFragment;
    "auctionToken()": FunctionFragment;
    "calculateCommitment(uint256)": FunctionFragment;
    "cancelAuction()": FunctionFragment;
    "claimed(address)": FunctionFragment;
    "clearingPrice()": FunctionFragment;
    "commitEth(address)": FunctionFragment;
    "commitments(address)": FunctionFragment;
    "finalize()": FunctionFragment;
    "finalizeTimeExpired()": FunctionFragment;
    "finalized()": FunctionFragment;
    "initAuction(address,address,uint256,uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "marketInfo()": FunctionFragment;
    "marketPrice()": FunctionFragment;
    "marketStatus()": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "priceDrop()": FunctionFragment;
    "priceFunction()": FunctionFragment;
    "tokenPrice()": FunctionFragment;
    "tokensClaimable(address)": FunctionFragment;
    "wallet()": FunctionFragment;
    "withdrawTokens(address)": FunctionFragment;
    "withdrawTokens()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "auctionEnded"
      | "auctionSuccessful"
      | "auctionToken"
      | "calculateCommitment"
      | "cancelAuction"
      | "claimed"
      | "clearingPrice"
      | "commitEth"
      | "commitments"
      | "finalize"
      | "finalizeTimeExpired"
      | "finalized"
      | "initAuction"
      | "marketInfo"
      | "marketPrice"
      | "marketStatus"
      | "multicall"
      | "priceDrop"
      | "priceFunction"
      | "tokenPrice"
      | "tokensClaimable"
      | "wallet"
      | "withdrawTokens(address)"
      | "withdrawTokens()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "auctionEnded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auctionSuccessful",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auctionToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateCommitment",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelAuction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "clearingPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commitEth",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "commitments",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "finalize", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "finalizeTimeExpired",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "finalized", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initAuction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "marketInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: "priceDrop", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceFunction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokensClaimable",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "wallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "auctionEnded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionSuccessful",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateCommitment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clearingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "commitEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "commitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finalizeTimeExpired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finalized", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "marketInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceDrop", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensClaimable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens()",
    data: BytesLike
  ): Result;

  events: {
    "AddedCommitment(address,uint256)": EventFragment;
    "AuctionCancelled()": EventFragment;
    "AuctionFinalized()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedCommitment"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionFinalized"): EventFragment;
}

export interface AddedCommitmentEventObject {
  addr: string;
  commitment: BigNumber;
}
export type AddedCommitmentEvent = TypedEvent<
  [string, BigNumber],
  AddedCommitmentEventObject
>;

export type AddedCommitmentEventFilter = TypedEventFilter<AddedCommitmentEvent>;

export interface AuctionCancelledEventObject {}
export type AuctionCancelledEvent = TypedEvent<[], AuctionCancelledEventObject>;

export type AuctionCancelledEventFilter =
  TypedEventFilter<AuctionCancelledEvent>;

export interface AuctionFinalizedEventObject {}
export type AuctionFinalizedEvent = TypedEvent<[], AuctionFinalizedEventObject>;

export type AuctionFinalizedEventFilter =
  TypedEventFilter<AuctionFinalizedEvent>;

export interface DutchAuction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DutchAuctionInterface;

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
    auctionEnded(overrides?: CallOverrides): Promise<[boolean]>;

    auctionSuccessful(overrides?: CallOverrides): Promise<[boolean]>;

    auctionToken(overrides?: CallOverrides): Promise<[string]>;

    calculateCommitment(
      _commitment: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { committed: BigNumber }>;

    cancelAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    clearingPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    commitEth(
      _beneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    commitments(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    finalize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeTimeExpired(overrides?: CallOverrides): Promise<[boolean]>;

    finalized(overrides?: CallOverrides): Promise<[boolean]>;

    initAuction(
      _funder: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _totalTokens: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _startPrice: PromiseOrValue<BigNumberish>,
      _minimumPrice: PromiseOrValue<BigNumberish>,
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    marketInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        startTime: BigNumber;
        endTime: BigNumber;
        totalTokens: BigNumber;
      }
    >;

    marketPrice(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        startPrice: BigNumber;
        minimumPrice: BigNumber;
      }
    >;

    marketStatus(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { commitmentsTotal: BigNumber; finalized: boolean }
    >;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    priceDrop(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceFunction(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokensClaimable(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { claimerCommitment: BigNumber }>;

    wallet(overrides?: CallOverrides): Promise<[string]>;

    "withdrawTokens(address)"(
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdrawTokens()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  auctionEnded(overrides?: CallOverrides): Promise<boolean>;

  auctionSuccessful(overrides?: CallOverrides): Promise<boolean>;

  auctionToken(overrides?: CallOverrides): Promise<string>;

  calculateCommitment(
    _commitment: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cancelAuction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimed(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  clearingPrice(overrides?: CallOverrides): Promise<BigNumber>;

  commitEth(
    _beneficiary: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  commitments(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  finalize(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeTimeExpired(overrides?: CallOverrides): Promise<boolean>;

  finalized(overrides?: CallOverrides): Promise<boolean>;

  initAuction(
    _funder: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _totalTokens: PromiseOrValue<BigNumberish>,
    _startTime: PromiseOrValue<BigNumberish>,
    _endTime: PromiseOrValue<BigNumberish>,
    _startPrice: PromiseOrValue<BigNumberish>,
    _minimumPrice: PromiseOrValue<BigNumberish>,
    _wallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  marketInfo(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      startTime: BigNumber;
      endTime: BigNumber;
      totalTokens: BigNumber;
    }
  >;

  marketPrice(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { startPrice: BigNumber; minimumPrice: BigNumber }
  >;

  marketStatus(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean] & { commitmentsTotal: BigNumber; finalized: boolean }
  >;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  priceDrop(overrides?: CallOverrides): Promise<BigNumber>;

  priceFunction(overrides?: CallOverrides): Promise<BigNumber>;

  tokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

  tokensClaimable(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wallet(overrides?: CallOverrides): Promise<string>;

  "withdrawTokens(address)"(
    beneficiary: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdrawTokens()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    auctionEnded(overrides?: CallOverrides): Promise<boolean>;

    auctionSuccessful(overrides?: CallOverrides): Promise<boolean>;

    auctionToken(overrides?: CallOverrides): Promise<string>;

    calculateCommitment(
      _commitment: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelAuction(overrides?: CallOverrides): Promise<void>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    clearingPrice(overrides?: CallOverrides): Promise<BigNumber>;

    commitEth(
      _beneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    commitments(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    finalize(overrides?: CallOverrides): Promise<void>;

    finalizeTimeExpired(overrides?: CallOverrides): Promise<boolean>;

    finalized(overrides?: CallOverrides): Promise<boolean>;

    initAuction(
      _funder: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _totalTokens: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _startPrice: PromiseOrValue<BigNumberish>,
      _minimumPrice: PromiseOrValue<BigNumberish>,
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    marketInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        startTime: BigNumber;
        endTime: BigNumber;
        totalTokens: BigNumber;
      }
    >;

    marketPrice(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        startPrice: BigNumber;
        minimumPrice: BigNumber;
      }
    >;

    marketStatus(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { commitmentsTotal: BigNumber; finalized: boolean }
    >;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    priceDrop(overrides?: CallOverrides): Promise<BigNumber>;

    priceFunction(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    tokensClaimable(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<string>;

    "withdrawTokens(address)"(
      beneficiary: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawTokens()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AddedCommitment(address,uint256)"(
      addr?: null,
      commitment?: null
    ): AddedCommitmentEventFilter;
    AddedCommitment(addr?: null, commitment?: null): AddedCommitmentEventFilter;

    "AuctionCancelled()"(): AuctionCancelledEventFilter;
    AuctionCancelled(): AuctionCancelledEventFilter;

    "AuctionFinalized()"(): AuctionFinalizedEventFilter;
    AuctionFinalized(): AuctionFinalizedEventFilter;
  };

  estimateGas: {
    auctionEnded(overrides?: CallOverrides): Promise<BigNumber>;

    auctionSuccessful(overrides?: CallOverrides): Promise<BigNumber>;

    auctionToken(overrides?: CallOverrides): Promise<BigNumber>;

    calculateCommitment(
      _commitment: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    clearingPrice(overrides?: CallOverrides): Promise<BigNumber>;

    commitEth(
      _beneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    commitments(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    finalize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeTimeExpired(overrides?: CallOverrides): Promise<BigNumber>;

    finalized(overrides?: CallOverrides): Promise<BigNumber>;

    initAuction(
      _funder: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _totalTokens: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _startPrice: PromiseOrValue<BigNumberish>,
      _minimumPrice: PromiseOrValue<BigNumberish>,
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    marketInfo(overrides?: CallOverrides): Promise<BigNumber>;

    marketPrice(overrides?: CallOverrides): Promise<BigNumber>;

    marketStatus(overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    priceDrop(overrides?: CallOverrides): Promise<BigNumber>;

    priceFunction(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    tokensClaimable(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<BigNumber>;

    "withdrawTokens(address)"(
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdrawTokens()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    auctionEnded(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auctionSuccessful(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auctionToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateCommitment(
      _commitment: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    clearingPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    commitEth(
      _beneficiary: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    commitments(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finalize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeTimeExpired(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finalized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initAuction(
      _funder: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _totalTokens: PromiseOrValue<BigNumberish>,
      _startTime: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      _startPrice: PromiseOrValue<BigNumberish>,
      _minimumPrice: PromiseOrValue<BigNumberish>,
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    marketInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    priceDrop(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFunction(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokensClaimable(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "withdrawTokens(address)"(
      beneficiary: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawTokens()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
