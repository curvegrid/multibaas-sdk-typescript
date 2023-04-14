import * as MultiBaas from '@curvegrid/multibaas-sdk-typescript';
import { isAxiosError } from 'axios';

// chainIDToERC20Addr maps chain IDs to random ERC20 contract addresses for the purpose of this example
const chainIDToERC20Addr = new Map<number, string>([
  [1, '0x6B175474E89094C44Da98b954EedeAC495271d0F'], // Ethereum Mainnet
  [5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'], // Ethereum Goerli
  [11155111, '0x969D499507B4f437953Db24A4980FdEEDa6Db8a1'], // Ethereum Sepolia
  [137, '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'], // Polygon Mainnet
  [80001, '0x3C0d2375d317092F530caFb440337b4E88163f29'], // Polygon Mumbai
  [43114, '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70'], // Avalanche Mainnet
  [43113, '0x12C135a68b7B3Cd006eDb785cB53398a5DA59613'], // Avalanche Fuji
  [2017072401, '0x8a58447d8AE49b6Ac6cf773B11a3981C46a6D89D'] // Curvegrid Testnet
]);

/* Initializing the SDK */

// Configure the SDK using environment variables
const basePath = new URL('/api/v0', process.env.MB_BASE_URL);
const config = new MultiBaas.Configuration({
  basePath: basePath.toString(),
  accessToken: process.env.MB_API_KEY
});

const chain = 'ethereum';

/* Example 1: getting blockchain details */

// First let's get the chain ID of the blockchain MultiBaas is connected to
const chainsApi = new MultiBaas.ChainsApi(config);
const resp1 = await chainsApi.getChainStatus(chain);

const chainId = resp1.data.result.chainID;
const latestBlock = resp1.data.result.blockNumber;

console.log(
  `Example 1: MultiBaas is connected to the chain ID #${chainId} and the latest block number is #${latestBlock}`
);

/* Example 2: calling a smart contract function */

// Now let's call an ERC20 contract to get the balance of an address
const walletAddr = '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B'; // Vitalik Buterin's wallet
const contractLabel = 'erc20interface';
const contractMethod = 'balanceOf';

const contractAddr = chainIDToERC20Addr.get(chainId);
if (contractAddr === undefined) {
  throw new Error(`This code example is missing an ERC20 contract address for the chain ID ${chainId}`);
}

const payload: MultiBaas.PostMethodArgs = {
  args: [walletAddr],
  contractOverride: true
};

const contractsApi = new MultiBaas.ContractsApi(config);
const resp2 = await contractsApi.callContractFunction(chain, contractAddr, contractLabel, contractMethod, payload);

if (resp2.data.result.kind === 'MethodCallResponse') {
  const balance = resp2.data.result.output;
  console.log(`Example 2: The wallet ${walletAddr} balance on the ERC20 contract ${contractAddr} is: ${balance}`);
} else {
  throw new Error(`Example 2: Unexpected response type: ${resp2.data.result.kind}`);
}

/* Example 3: handling errors */

// Intentionally calling a contract method that doesn't exist to trigger an error
try {
  const resp3 = await contractsApi.callContractFunction(
    chain,
    contractAddr,
    contractLabel,
    'thisMethodDoNotExist',
    payload
  );
} catch (e) {
  if (isAxiosError(e)) {
    console.log(`Example 3: The callContractFunction method correctly threw an error: ${e.response.data.message}`);
  }
}
