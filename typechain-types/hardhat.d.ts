/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "AccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IAccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC4626",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4626__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Snapshot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Snapshot__factory>;
    getContractFactory(
      name: "ERC4626",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC4626__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "WETH9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETH9__factory>;
    getContractFactory(
      name: "BancorBondingCurve",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BancorBondingCurve__factory>;
    getContractFactory(
      name: "Power",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Power__factory>;
    getContractFactory(
      name: "EminenceCurrency",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EminenceCurrency__factory>;
    getContractFactory(
      name: "IEminenceCurrency",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEminenceCurrency__factory>;
    getContractFactory(
      name: "EminenceCurrencyBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EminenceCurrencyBase__factory>;
    getContractFactory(
      name: "BondingCurve",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BondingCurve__factory>;
    getContractFactory(
      name: "ContinuousToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContinuousToken__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Detailed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Detailed__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "FNFTHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FNFTHandler__factory>;
    getContractFactory(
      name: "LockManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LockManager__factory>;
    getContractFactory(
      name: "AddressRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AddressRegistry__factory>;
    getContractFactory(
      name: "RevestAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RevestAccessControl__factory>;
    getContractFactory(
      name: "IAddressRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAddressRegistry__factory>;
    getContractFactory(
      name: "IFNFTHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFNFTHandler__factory>;
    getContractFactory(
      name: "ILockManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILockManager__factory>;
    getContractFactory(
      name: "IRevest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRevest__factory>;
    getContractFactory(
      name: "ITokenVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenVault__factory>;
    getContractFactory(
      name: "Revest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Revest__factory>;
    getContractFactory(
      name: "TokenVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenVault__factory>;
    getContractFactory(
      name: "DutchAuction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DutchAuction__factory>;
    getContractFactory(
      name: "Multicall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall__factory>;
    getContractFactory(
      name: "FlashLoaner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlashLoaner__factory>;
    getContractFactory(
      name: "IFlashCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFlashCallback__factory>;
    getContractFactory(
      name: "FlashLoanerExploit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlashLoanerExploit__factory>;
    getContractFactory(
      name: "IFlashLoaner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFlashLoaner__factory>;
    getContractFactory(
      name: "ISafuFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISafuFactory__factory>;
    getContractFactory(
      name: "ISafuPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISafuPair__factory>;
    getContractFactory(
      name: "SafuMakerV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafuMakerV2__factory>;
    getContractFactory(
      name: "FreebieExploit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FreebieExploit__factory>;
    getContractFactory(
      name: "GovToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovToken__factory>;
    getContractFactory(
      name: "IAdvisor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdvisor__factory>;
    getContractFactory(
      name: "RewardsAdvisor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RewardsAdvisor__factory>;
    getContractFactory(
      name: "AssetHolder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetHolder__factory>;
    getContractFactory(
      name: "AssetWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetWrapper__factory>;
    getContractFactory(
      name: "IGameAsset",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGameAsset__factory>;
    getContractFactory(
      name: "GameAsset",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GameAsset__factory>;
    getContractFactory(
      name: "NotSushiToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NotSushiToken__factory>;
    getContractFactory(
      name: "IMuny",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMuny__factory>;
    getContractFactory(
      name: "MasterChef",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MasterChef__factory>;
    getContractFactory(
      name: "MulaToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MulaToken__factory>;
    getContractFactory(
      name: "BaseLaunchpegNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseLaunchpegNFT__factory>;
    getContractFactory(
      name: "FlatLaunchpeg",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlatLaunchpeg__factory>;
    getContractFactory(
      name: "TreasureVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TreasureVault__factory>;
    getContractFactory(
      name: "BonanzaMarketplace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BonanzaMarketplace__factory>;
    getContractFactory(
      name: "IMarketplace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMarketplace__factory>;
    getContractFactory(
      name: "OptionsContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OptionsContract__factory>;
    getContractFactory(
      name: "OptionsLogic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OptionsLogic__factory>;
    getContractFactory(
      name: "OptionsMarket",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OptionsMarket__factory>;
    getContractFactory(
      name: "Nft721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Nft721__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;
    getContractFactory(
      name: "IUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUtils__factory>;
    getContractFactory(
      name: "SafuPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafuPool__factory>;
    getContractFactory(
      name: "SafuUtils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafuUtils__factory>;
    getContractFactory(
      name: "SafuStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafuStrategy__factory>;
    getContractFactory(
      name: "IStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStrategy__factory>;
    getContractFactory(
      name: "SafuVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafuVault__factory>;
    getContractFactory(
      name: "SafuWallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafuWallet__factory>;
    getContractFactory(
      name: "SafuWalletLibrary",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafuWalletLibrary__factory>;
    getContractFactory(
      name: "CallOptions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallOptions__factory>;
    getContractFactory(
      name: "IUniswapFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapFactory__factory>;
    getContractFactory(
      name: "IUniswapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapRouter__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "Exploit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Exploit__factory>;
    getContractFactory(
      name: "TastyStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TastyStaking__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "AccessControlEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlEnumerable>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IAccessControlEnumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlEnumerable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC4626",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC4626>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "ERC20Snapshot",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Snapshot>;
    getContractAt(
      name: "ERC4626",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC4626>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "WETH9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETH9>;
    getContractAt(
      name: "BancorBondingCurve",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BancorBondingCurve>;
    getContractAt(
      name: "Power",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Power>;
    getContractAt(
      name: "EminenceCurrency",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EminenceCurrency>;
    getContractAt(
      name: "IEminenceCurrency",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEminenceCurrency>;
    getContractAt(
      name: "EminenceCurrencyBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EminenceCurrencyBase>;
    getContractAt(
      name: "BondingCurve",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BondingCurve>;
    getContractAt(
      name: "ContinuousToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContinuousToken>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Detailed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Detailed>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "FNFTHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FNFTHandler>;
    getContractAt(
      name: "LockManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LockManager>;
    getContractAt(
      name: "AddressRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AddressRegistry>;
    getContractAt(
      name: "RevestAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RevestAccessControl>;
    getContractAt(
      name: "IAddressRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAddressRegistry>;
    getContractAt(
      name: "IFNFTHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFNFTHandler>;
    getContractAt(
      name: "ILockManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILockManager>;
    getContractAt(
      name: "IRevest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRevest>;
    getContractAt(
      name: "ITokenVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokenVault>;
    getContractAt(
      name: "Revest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Revest>;
    getContractAt(
      name: "TokenVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenVault>;
    getContractAt(
      name: "DutchAuction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DutchAuction>;
    getContractAt(
      name: "Multicall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Multicall>;
    getContractAt(
      name: "FlashLoaner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlashLoaner>;
    getContractAt(
      name: "IFlashCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFlashCallback>;
    getContractAt(
      name: "FlashLoanerExploit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlashLoanerExploit>;
    getContractAt(
      name: "IFlashLoaner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFlashLoaner>;
    getContractAt(
      name: "ISafuFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISafuFactory>;
    getContractAt(
      name: "ISafuPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISafuPair>;
    getContractAt(
      name: "SafuMakerV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafuMakerV2>;
    getContractAt(
      name: "FreebieExploit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FreebieExploit>;
    getContractAt(
      name: "GovToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovToken>;
    getContractAt(
      name: "IAdvisor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdvisor>;
    getContractAt(
      name: "RewardsAdvisor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RewardsAdvisor>;
    getContractAt(
      name: "AssetHolder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetHolder>;
    getContractAt(
      name: "AssetWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetWrapper>;
    getContractAt(
      name: "IGameAsset",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGameAsset>;
    getContractAt(
      name: "GameAsset",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GameAsset>;
    getContractAt(
      name: "NotSushiToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NotSushiToken>;
    getContractAt(
      name: "IMuny",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMuny>;
    getContractAt(
      name: "MasterChef",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MasterChef>;
    getContractAt(
      name: "MulaToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MulaToken>;
    getContractAt(
      name: "BaseLaunchpegNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseLaunchpegNFT>;
    getContractAt(
      name: "FlatLaunchpeg",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlatLaunchpeg>;
    getContractAt(
      name: "TreasureVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TreasureVault>;
    getContractAt(
      name: "BonanzaMarketplace",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BonanzaMarketplace>;
    getContractAt(
      name: "IMarketplace",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMarketplace>;
    getContractAt(
      name: "OptionsContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OptionsContract>;
    getContractAt(
      name: "OptionsLogic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OptionsLogic>;
    getContractAt(
      name: "OptionsMarket",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OptionsMarket>;
    getContractAt(
      name: "Nft721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Nft721>;
    getContractAt(
      name: "Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token>;
    getContractAt(
      name: "IUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUtils>;
    getContractAt(
      name: "SafuPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafuPool>;
    getContractAt(
      name: "SafuUtils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafuUtils>;
    getContractAt(
      name: "SafuStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafuStrategy>;
    getContractAt(
      name: "IStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStrategy>;
    getContractAt(
      name: "SafuVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafuVault>;
    getContractAt(
      name: "SafuWallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafuWallet>;
    getContractAt(
      name: "SafuWalletLibrary",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafuWalletLibrary>;
    getContractAt(
      name: "CallOptions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CallOptions>;
    getContractAt(
      name: "IUniswapFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapFactory>;
    getContractAt(
      name: "IUniswapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapRouter>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "Exploit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Exploit>;
    getContractAt(
      name: "TastyStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TastyStaking>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
