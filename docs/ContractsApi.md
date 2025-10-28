# ContractsApi

All URIs are relative to *https://your_deployment.multibaas.com/api/v0*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**callContractFunction**](#callcontractfunction) | **POST** /chains/{chain}/addresses/{address-or-alias}/contracts/{contract}/methods/{method} | Call a contract function|
|[**createContract**](#createcontract) | **POST** /contracts/{contract} | Create a contract|
|[**createContracts**](#createcontracts) | **POST** /contracts | Create multiple contracts|
|[**deleteContract**](#deletecontract) | **DELETE** /contracts/{contract} | Delete a contract|
|[**deleteContractVersion**](#deletecontractversion) | **DELETE** /contracts/{contract}/{version} | Delete a contract version|
|[**deployContract**](#deploycontract) | **POST** /contracts/{contract}/deploy | Deploy a contract|
|[**deployContractVersion**](#deploycontractversion) | **POST** /contracts/{contract}/{version}/deploy | Deploy a contract version|
|[**getContract**](#getcontract) | **GET** /contracts/{contract} | Get a contract|
|[**getContractVersion**](#getcontractversion) | **GET** /contracts/{contract}/{version} | Get a contract version|
|[**getContractVersions**](#getcontractversions) | **GET** /contracts/{contract}/all | Get all contract versions|
|[**getEventMonitorStatus**](#geteventmonitorstatus) | **GET** /chains/{chain}/addresses/{address-or-alias}/contracts/{contract}/status | Get event monitor status|
|[**getEventTypeConversions**](#geteventtypeconversions) | **GET** /contracts/{contract}/{version}/events/{event} | Get event type conversions|
|[**getFunctionTypeConversions**](#getfunctiontypeconversions) | **GET** /contracts/{contract}/{version}/methods/{method} | Get function type conversions|
|[**linkAddressContract**](#linkaddresscontract) | **POST** /chains/{chain}/addresses/{address-or-alias}/contracts | Link address and contract|
|[**listContractVersions**](#listcontractversions) | **GET** /contracts/{contract}/versions | List all contract versions|
|[**listContracts**](#listcontracts) | **GET** /contracts | List contracts|
|[**setEventTypeConversions**](#seteventtypeconversions) | **POST** /contracts/{contract}/{version}/events/{event} | Set event type conversions|
|[**setFunctionTypeConversions**](#setfunctiontypeconversions) | **POST** /contracts/{contract}/{version}/methods/{method} | Set function type conversions|
|[**unlinkAddressContract**](#unlinkaddresscontract) | **DELETE** /chains/{chain}/addresses/{address-or-alias}/contracts/{contract} | Unlink address and contract|

# **callContractFunction**
> CallContractFunction200Response callContractFunction(postMethodArgs)

Builds a transaction to call the given contract function. Returns a transaction to be signed and signs and submits to the blockchain it if the `signAndSubmit` flag is enabled.

### Example

```typescript
import {
    ContractsApi,
    Configuration,
    PostMethodArgs
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let addressOrAlias: string; //An address or the alias of an address. (default to undefined)
let contract: string; // (default to undefined)
let method: string; //Contract function. (default to undefined)
let postMethodArgs: PostMethodArgs; //

const { status, data } = await apiInstance.callContractFunction(
    chain,
    addressOrAlias,
    contract,
    method,
    postMethodArgs
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postMethodArgs** | **PostMethodArgs**|  | |
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **addressOrAlias** | [**string**] | An address or the alias of an address. | defaults to undefined|
| **contract** | [**string**] |  | defaults to undefined|
| **method** | [**string**] | Contract function. | defaults to undefined|


### Return type

**CallContractFunction200Response**

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

# **createContract**
> GetContract200Response createContract(baseContract)

Adds a contract.

### Example

```typescript
import {
    ContractsApi,
    Configuration,
    BaseContract
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)
let baseContract: BaseContract; //

const { status, data } = await apiInstance.createContract(
    contract,
    baseContract
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseContract** | **BaseContract**|  | |
| **contract** | [**string**] |  | defaults to undefined|


### Return type

**GetContract200Response**

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

# **createContracts**
> BaseResponse createContracts(baseContract)

Adds multiple contracts.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let baseContract: Array<BaseContract>; //

const { status, data } = await apiInstance.createContracts(
    baseContract
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseContract** | **Array<BaseContract>**|  | |


### Return type

**BaseResponse**

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

# **deleteContract**
> BaseResponse deleteContract()

Deletes a contract and all its versions.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)

const { status, data } = await apiInstance.deleteContract(
    contract
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contract** | [**string**] |  | defaults to undefined|


### Return type

**BaseResponse**

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

# **deleteContractVersion**
> BaseResponse deleteContractVersion()

Deletes a specific contract version.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)
let version: string; //Contract Version. (default to undefined)

const { status, data } = await apiInstance.deleteContractVersion(
    contract,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contract** | [**string**] |  | defaults to undefined|
| **version** | [**string**] | Contract Version. | defaults to undefined|


### Return type

**BaseResponse**

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

# **deployContract**
> DeployContract200Response deployContract(postMethodArgs)

Returns a transaction to deploy the given contract to the blockchain.

### Example

```typescript
import {
    ContractsApi,
    Configuration,
    PostMethodArgs
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)
let postMethodArgs: PostMethodArgs; //

const { status, data } = await apiInstance.deployContract(
    contract,
    postMethodArgs
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postMethodArgs** | **PostMethodArgs**|  | |
| **contract** | [**string**] |  | defaults to undefined|


### Return type

**DeployContract200Response**

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

# **deployContractVersion**
> DeployContract200Response deployContractVersion(postMethodArgs)

Returns a transaction to deploy the given contract version to the blockchain.

### Example

```typescript
import {
    ContractsApi,
    Configuration,
    PostMethodArgs
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)
let version: string; //Contract Version. (default to undefined)
let postMethodArgs: PostMethodArgs; //

const { status, data } = await apiInstance.deployContractVersion(
    contract,
    version,
    postMethodArgs
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postMethodArgs** | **PostMethodArgs**|  | |
| **contract** | [**string**] |  | defaults to undefined|
| **version** | [**string**] | Contract Version. | defaults to undefined|


### Return type

**DeployContract200Response**

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

# **getContract**
> GetContract200Response getContract()

Returns the given contract.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)

const { status, data } = await apiInstance.getContract(
    contract
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contract** | [**string**] |  | defaults to undefined|


### Return type

**GetContract200Response**

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

# **getContractVersion**
> GetContract200Response getContractVersion()

Returns a specific contract version.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)
let version: string; //Contract Version. (default to undefined)

const { status, data } = await apiInstance.getContractVersion(
    contract,
    version
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contract** | [**string**] |  | defaults to undefined|
| **version** | [**string**] | Contract Version. | defaults to undefined|


### Return type

**GetContract200Response**

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

# **getContractVersions**
> GetContractVersions200Response getContractVersions()

Returns all the versions of a contract.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)

const { status, data } = await apiInstance.getContractVersions(
    contract
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contract** | [**string**] |  | defaults to undefined|


### Return type

**GetContractVersions200Response**

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

# **getEventMonitorStatus**
> GetEventMonitorStatus200Response getEventMonitorStatus()

Returns the event monitor status for a given address and contract.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let addressOrAlias: string; //An address or the alias of an address. (default to undefined)
let contract: string; // (default to undefined)

const { status, data } = await apiInstance.getEventMonitorStatus(
    chain,
    addressOrAlias,
    contract
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **addressOrAlias** | [**string**] | An address or the alias of an address. | defaults to undefined|
| **contract** | [**string**] |  | defaults to undefined|


### Return type

**GetEventMonitorStatus200Response**

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

# **getEventTypeConversions**
> GetEventTypeConversions200Response getEventTypeConversions()

Returns the type conversion options for a given contract and event signature.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)
let version: string; //Contract Version. (default to undefined)
let event: string; //Contract Event. (default to undefined)

const { status, data } = await apiInstance.getEventTypeConversions(
    contract,
    version,
    event
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contract** | [**string**] |  | defaults to undefined|
| **version** | [**string**] | Contract Version. | defaults to undefined|
| **event** | [**string**] | Contract Event. | defaults to undefined|


### Return type

**GetEventTypeConversions200Response**

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

# **getFunctionTypeConversions**
> GetFunctionTypeConversions200Response getFunctionTypeConversions()

Returns the type conversion options for a given contract and function signature.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)
let version: string; //Contract Version. (default to undefined)
let method: string; //Contract function. (default to undefined)

const { status, data } = await apiInstance.getFunctionTypeConversions(
    contract,
    version,
    method
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contract** | [**string**] |  | defaults to undefined|
| **version** | [**string**] | Contract Version. | defaults to undefined|
| **method** | [**string**] | Contract function. | defaults to undefined|


### Return type

**GetFunctionTypeConversions200Response**

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

# **linkAddressContract**
> SetAddress201Response linkAddressContract(linkAddressContractRequest)

Links an address to a contract.

### Example

```typescript
import {
    ContractsApi,
    Configuration,
    LinkAddressContractRequest
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let addressOrAlias: string; //An address or the alias of an address. (default to undefined)
let linkAddressContractRequest: LinkAddressContractRequest; //

const { status, data } = await apiInstance.linkAddressContract(
    chain,
    addressOrAlias,
    linkAddressContractRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **linkAddressContractRequest** | **LinkAddressContractRequest**|  | |
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **addressOrAlias** | [**string**] | An address or the alias of an address. | defaults to undefined|


### Return type

**SetAddress201Response**

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

# **listContractVersions**
> ListContractVersions200Response listContractVersions()

Returns a list of the versions of a contract.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)

const { status, data } = await apiInstance.listContractVersions(
    contract
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contract** | [**string**] |  | defaults to undefined|


### Return type

**ListContractVersions200Response**

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

# **listContracts**
> ListContracts200Response listContracts()

Returns a list of contracts.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

const { status, data } = await apiInstance.listContracts();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListContracts200Response**

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

# **setEventTypeConversions**
> BaseResponse setEventTypeConversions(contractEventOptions)

Sets the type conversion options for a given contract and event signature.

### Example

```typescript
import {
    ContractsApi,
    Configuration,
    ContractEventOptions
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)
let version: string; //Contract Version. (default to undefined)
let event: string; //Contract Event. (default to undefined)
let contractEventOptions: ContractEventOptions; //

const { status, data } = await apiInstance.setEventTypeConversions(
    contract,
    version,
    event,
    contractEventOptions
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contractEventOptions** | **ContractEventOptions**|  | |
| **contract** | [**string**] |  | defaults to undefined|
| **version** | [**string**] | Contract Version. | defaults to undefined|
| **event** | [**string**] | Contract Event. | defaults to undefined|


### Return type

**BaseResponse**

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

# **setFunctionTypeConversions**
> BaseResponse setFunctionTypeConversions(contractMethodOptions)

Sets the type conversion options for a given contract and function signature.

### Example

```typescript
import {
    ContractsApi,
    Configuration,
    ContractMethodOptions
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let contract: string; // (default to undefined)
let version: string; //Contract Version. (default to undefined)
let method: string; //Contract function. (default to undefined)
let contractMethodOptions: ContractMethodOptions; //

const { status, data } = await apiInstance.setFunctionTypeConversions(
    contract,
    version,
    method,
    contractMethodOptions
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contractMethodOptions** | **ContractMethodOptions**|  | |
| **contract** | [**string**] |  | defaults to undefined|
| **version** | [**string**] | Contract Version. | defaults to undefined|
| **method** | [**string**] | Contract function. | defaults to undefined|


### Return type

**BaseResponse**

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

# **unlinkAddressContract**
> SetAddress201Response unlinkAddressContract()

Unlinks an address from a contract.

### Example

```typescript
import {
    ContractsApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new ContractsApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let addressOrAlias: string; //An address or the alias of an address. (default to undefined)
let contract: string; // (default to undefined)

const { status, data } = await apiInstance.unlinkAddressContract(
    chain,
    addressOrAlias,
    contract
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **addressOrAlias** | [**string**] | An address or the alias of an address. | defaults to undefined|
| **contract** | [**string**] |  | defaults to undefined|


### Return type

**SetAddress201Response**

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

