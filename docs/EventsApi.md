# EventsApi

All URIs are relative to *https://your_deployment.multibaas.com/api/v0*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getEventCount**](#geteventcount) | **GET** /events/count | Get event count|
|[**listEvents**](#listevents) | **GET** /events | List events|

# **getEventCount**
> GetEventCount200Response getEventCount()

Gets the number of events stored in the database.

### Example

```typescript
import {
    EventsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let blockHash: string; //Filter events by a block hash. (optional) (default to undefined)
let blockNumber: number; //Filter events by a block number. (optional) (default to undefined)
let txIndexInBlock: number; //Filter events by a transaction\'s index in the block. (optional) (default to undefined)
let eventIndexInLog: number; //Filter events by index in the log. (optional) (default to undefined)
let txHash: string; //Filter events by a transaction hash. (optional) (default to undefined)
let fromConstructor: boolean; //Filter events by whether they were emitted from the constructor function. (optional) (default to undefined)
let chain: ChainName; //Filter events by a chain name. (optional) (default to undefined)
let contractAddress: string; //Filter events by a contract address. (optional) (default to undefined)
let contractLabel: string; //Filter events by a contract label. (optional) (default to undefined)
let eventSignature: string; //Filter events by the signature. (optional) (default to undefined)
let limit: number; // (optional) (default to 10)
let offset: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getEventCount(
    blockHash,
    blockNumber,
    txIndexInBlock,
    eventIndexInLog,
    txHash,
    fromConstructor,
    chain,
    contractAddress,
    contractLabel,
    eventSignature,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **blockHash** | [**string**] | Filter events by a block hash. | (optional) defaults to undefined|
| **blockNumber** | [**number**] | Filter events by a block number. | (optional) defaults to undefined|
| **txIndexInBlock** | [**number**] | Filter events by a transaction\&#39;s index in the block. | (optional) defaults to undefined|
| **eventIndexInLog** | [**number**] | Filter events by index in the log. | (optional) defaults to undefined|
| **txHash** | [**string**] | Filter events by a transaction hash. | (optional) defaults to undefined|
| **fromConstructor** | [**boolean**] | Filter events by whether they were emitted from the constructor function. | (optional) defaults to undefined|
| **chain** | **ChainName** | Filter events by a chain name. | (optional) defaults to undefined|
| **contractAddress** | [**string**] | Filter events by a contract address. | (optional) defaults to undefined|
| **contractLabel** | [**string**] | Filter events by a contract label. | (optional) defaults to undefined|
| **eventSignature** | [**string**] | Filter events by the signature. | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **offset** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetEventCount200Response**

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

# **listEvents**
> ListEvents200Response listEvents()

Returns all events stored in the database.

### Example

```typescript
import {
    EventsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let blockHash: string; //Filter events by a block hash. (optional) (default to undefined)
let blockNumber: number; //Filter events by a block number. (optional) (default to undefined)
let txIndexInBlock: number; //Filter events by a transaction\'s index in the block. (optional) (default to undefined)
let eventIndexInLog: number; //Filter events by index in the log. (optional) (default to undefined)
let txHash: string; //Filter events by a transaction hash. (optional) (default to undefined)
let fromConstructor: boolean; //Filter events by whether they were emitted from the constructor function. (optional) (default to undefined)
let chain: ChainName; //Filter events by a chain name. (optional) (default to undefined)
let contractAddress: string; //Filter events by a contract address. (optional) (default to undefined)
let contractLabel: string; //Filter events by a contract label. (optional) (default to undefined)
let eventSignature: string; //Filter events by the signature. (optional) (default to undefined)
let limit: number; // (optional) (default to 10)
let offset: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.listEvents(
    blockHash,
    blockNumber,
    txIndexInBlock,
    eventIndexInLog,
    txHash,
    fromConstructor,
    chain,
    contractAddress,
    contractLabel,
    eventSignature,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **blockHash** | [**string**] | Filter events by a block hash. | (optional) defaults to undefined|
| **blockNumber** | [**number**] | Filter events by a block number. | (optional) defaults to undefined|
| **txIndexInBlock** | [**number**] | Filter events by a transaction\&#39;s index in the block. | (optional) defaults to undefined|
| **eventIndexInLog** | [**number**] | Filter events by index in the log. | (optional) defaults to undefined|
| **txHash** | [**string**] | Filter events by a transaction hash. | (optional) defaults to undefined|
| **fromConstructor** | [**boolean**] | Filter events by whether they were emitted from the constructor function. | (optional) defaults to undefined|
| **chain** | **ChainName** | Filter events by a chain name. | (optional) defaults to undefined|
| **contractAddress** | [**string**] | Filter events by a contract address. | (optional) defaults to undefined|
| **contractLabel** | [**string**] | Filter events by a contract label. | (optional) defaults to undefined|
| **eventSignature** | [**string**] | Filter events by the signature. | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **offset** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ListEvents200Response**

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

