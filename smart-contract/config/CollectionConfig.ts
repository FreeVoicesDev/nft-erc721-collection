import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // testnet: Networks.ethereumTestnet,
  // mainnet: Networks.ethereumMainnet,
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'FVTestingNftV2',
  tokenName: 'Fv Testing V2',
  tokenSymbol: 'FVT',
  hiddenMetadataUri: 'ipfs://QmcfFTFuVn2fe6AQT17xbjwd6yWJnALjUzpaHGDBWMthNN/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.02,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.05,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x17219828CdEA6e9870076f74eAFbFD36e9F5A110",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
