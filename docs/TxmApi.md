# TxmApi

All URIs are relative to *https://your_deployment.multibaas.com/api/v0*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelTransaction**](#canceltransaction) | **POST** /chains/{chain}/txm/{wallet_address}/nonce/{nonce}/cancel | Cancel transaction|
|[**countWalletTransactions**](#countwallettransactions) | **GET** /chains/{chain}/txm/{wallet_address}/count | Count all transactions for a wallet|
|[**listWalletTransactions**](#listwallettransactions) | **GET** /chains/{chain}/txm/{wallet_address} | List transactions for a wallet|
|[**speedUpTransaction**](#speeduptransaction) | **POST** /chains/{chain}/txm/{wallet_address}/nonce/{nonce}/speed_up | Speed up transaction|

# **cancelTransaction**
> TransferEth200Response cancelTransaction(gasParams)

Cancels a transaction by resubmitting it as no-op transaction and with a higher gas price.

### Example

```typescript
import {
    TxmApi,
    Configuration,
    GasParams
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new TxmApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)
let nonce: number; //Transaction nonce. (default to undefined)
let gasParams: GasParams; //

const { status, data } = await apiInstance.cancelTransaction(
    chain,
    walletAddress,
    nonce,
    gasParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gasParams** | **GasParams**|  | |
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **walletAddress** | [**string**] | An Ethereum address. | defaults to undefined|
| **nonce** | [**number**] | Transaction nonce. | defaults to undefined|


### Return type

**TransferEth200Response**

### Authorization

[cookie](../README.md#cookie), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Client error. |  -  |
|**5XX** | Server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **countWalletTransactions**
> CountWalletTransactions200Response countWalletTransactions()

Count all transactions for the given wallet address.

### Example

```typescript
import {
    TxmApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new TxmApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)

const { status, data } = await apiInstance.countWalletTransactions(
    chain,
    walletAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **walletAddress** | [**string**] | An Ethereum address. | defaults to undefined|


### Return type

**CountWalletTransactions200Response**

### Authorization

[cookie](../README.md#cookie), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Client error. |  -  |
|**5XX** | Server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWalletTransactions**
> ListWalletTransactions200Response listWalletTransactions()

List the transactions submitted by the given wallet address.

### Example

```typescript
import {
    TxmApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new TxmApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)
let hash: string; //Filter transactions by transaction hash. To filter for multiple hashes, use ampersands: `?hash=HASH1&hash=HASH2&hash=HASH3` (optional) (default to undefined)
let nonce: number; //Filter transactions by nonce (optional) (default to undefined)
let status: TransactionStatus; //Filter transactions by status (optional) (default to undefined)
let limit: number; // (optional) (default to 10)
let offset: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.listWalletTransactions(
    chain,
    walletAddress,
    hash,
    nonce,
    status,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **walletAddress** | [**string**] | An Ethereum address. | defaults to undefined|
| **hash** | [**string**] | Filter transactions by transaction hash. To filter for multiple hashes, use ampersands: &#x60;?hash&#x3D;HASH1&amp;hash&#x3D;HASH2&amp;hash&#x3D;HASH3&#x60; | (optional) defaults to undefined|
| **nonce** | [**number**] | Filter transactions by nonce | (optional) defaults to undefined|
| **status** | **TransactionStatus** | Filter transactions by status | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **offset** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ListWalletTransactions200Response**

### Authorization

[cookie](../README.md#cookie), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Client error. |  -  |
|**5XX** | Server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **speedUpTransaction**
> TransferEth200Response speedUpTransaction(gasParams)

Speeds up a transaction by resubmitting it with a higher gas price.

### Example

```typescript
import {
    TxmApi,
    Configuration,
    GasParams
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new TxmApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)
let nonce: number; //Transaction nonce. (default to undefined)
let gasParams: GasParams; //

const { status, data } = await apiInstance.speedUpTransaction(
    chain,
    walletAddress,
    nonce,
    gasParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gasParams** | **GasParams**|  | |
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **walletAddress** | [**string**] | An Ethereum address. | defaults to undefined|
| **nonce** | [**number**] | Transaction nonce. | defaults to undefined|


### Return type

**TransferEth200Response**

### Authorization

[cookie](../README.md#cookie), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**4XX** | Client error. |  -  |
|**5XX** | Server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

