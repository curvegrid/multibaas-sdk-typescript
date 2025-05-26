# ChainsApi

All URIs are relative to *https://your_deployment.multibaas.com/api/v0*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBlock**](#getblock) | **GET** /chains/{chain}/blocks/{block} | Get a block|
|[**getChainStatus**](#getchainstatus) | **GET** /chains/{chain}/status | Get chain status|
|[**getTransaction**](#gettransaction) | **GET** /chains/{chain}/transactions/{hash} | Get transaction|
|[**getTransactionReceipt**](#gettransactionreceipt) | **GET** /chains/{chain}/transactions/receipt/{hash} | Get transaction receipt|
|[**submitSignedTransaction**](#submitsignedtransaction) | **POST** /chains/{chain}/transactions/submit | Submit signed transaction|
|[**transferEth**](#transfereth) | **POST** /chains/{chain}/transfers | Transfer ETH|

# **getBlock**
> GetBlock200Response getBlock()

Returns a block.

### Example

```typescript
import {
    ChainsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let block: string; //A block number, hash or \'latest\' for the latest block. (default to undefined)

const { status, data } = await apiInstance.getBlock(
    chain,
    block
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **block** | [**string**] | A block number, hash or \&#39;latest\&#39; for the latest block. | defaults to undefined|


### Return type

**GetBlock200Response**

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

# **getChainStatus**
> GetChainStatus200Response getChainStatus()

Returns the chain status.

### Example

```typescript
import {
    ChainsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)

const { status, data } = await apiInstance.getChainStatus(
    chain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|


### Return type

**GetChainStatus200Response**

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

# **getTransaction**
> GetTransaction200Response getTransaction()

Returns a transaction.

### Example

```typescript
import {
    ChainsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let hash: string; //A transaction hash. (default to undefined)
let include: 'contract'; //Include contract and method call details, if available. (optional) (default to undefined)

const { status, data } = await apiInstance.getTransaction(
    chain,
    hash,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **hash** | [**string**] | A transaction hash. | defaults to undefined|
| **include** | [**&#39;contract&#39;**]**Array<&#39;contract&#39;>** | Include contract and method call details, if available. | (optional) defaults to undefined|


### Return type

**GetTransaction200Response**

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

# **getTransactionReceipt**
> GetTransactionReceipt200Response getTransactionReceipt()

Returns the receipt of a transaction that\'s been successfully added to the blockchain.

### Example

```typescript
import {
    ChainsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let hash: string; //A transaction hash. (default to undefined)
let include: 'contract'; //Include contract and event details, if available. (optional) (default to undefined)

const { status, data } = await apiInstance.getTransactionReceipt(
    chain,
    hash,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **hash** | [**string**] | A transaction hash. | defaults to undefined|
| **include** | [**&#39;contract&#39;**]**Array<&#39;contract&#39;>** | Include contract and event details, if available. | (optional) defaults to undefined|


### Return type

**GetTransactionReceipt200Response**

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

# **submitSignedTransaction**
> SubmitSignedTransaction200Response submitSignedTransaction(signedTransactionSubmission)

Receives a pre-signed raw transaction and submits it to the blockchain.

### Example

```typescript
import {
    ChainsApi,
    Configuration,
    SignedTransactionSubmission
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let signedTransactionSubmission: SignedTransactionSubmission; //

const { status, data } = await apiInstance.submitSignedTransaction(
    chain,
    signedTransactionSubmission
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signedTransactionSubmission** | **SignedTransactionSubmission**|  | |
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|


### Return type

**SubmitSignedTransaction200Response**

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

# **transferEth**
> TransferEth200Response transferEth(postMethodArgs)

Returns a transaction for sending the native token between addresses.

### Example

```typescript
import {
    ChainsApi,
    Configuration,
    PostMethodArgs
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ChainsApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let postMethodArgs: PostMethodArgs; //

const { status, data } = await apiInstance.transferEth(
    chain,
    postMethodArgs
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postMethodArgs** | **PostMethodArgs**|  | |
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|


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

