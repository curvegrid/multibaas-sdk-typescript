# AddressesApi

All URIs are relative to *https://your_deployment.multibaas.com/api/v0*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAddress**](#deleteaddress) | **DELETE** /chains/{chain}/addresses/{address-or-alias} | Delete address|
|[**getAddress**](#getaddress) | **GET** /chains/{chain}/addresses/{address-or-alias} | Get address|
|[**listAddresses**](#listaddresses) | **GET** /chains/{chain}/addresses | List addresses|
|[**setAddress**](#setaddress) | **POST** /chains/{chain}/addresses | Create or update address|

# **deleteAddress**
> BaseResponse deleteAddress()

Deletes an address alias.

### Example

```typescript
import {
    AddressesApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AddressesApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let addressOrAlias: string; //An address or the alias of an address. (default to undefined)

const { status, data } = await apiInstance.deleteAddress(
    chain,
    addressOrAlias
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **addressOrAlias** | [**string**] | An address or the alias of an address. | defaults to undefined|


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

# **getAddress**
> SetAddress201Response getAddress()

Returns details about an address.

### Example

```typescript
import {
    AddressesApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AddressesApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let addressOrAlias: string; //An address or the alias of an address. (default to undefined)
let include: Array<'balance' | 'code' | 'nonce' | 'contractLookup'>; //Optional data to fetch from the blockchain: - `balance` to get the balance of this address. - `code` to get the code at this address. - `nonce` to get the next available transaction nonce for this address. - `contractLookup` to get the contract(s) details for this address.  (optional) (default to undefined)

const { status, data } = await apiInstance.getAddress(
    chain,
    addressOrAlias,
    include
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **addressOrAlias** | [**string**] | An address or the alias of an address. | defaults to undefined|
| **include** | **Array<&#39;balance&#39; &#124; &#39;code&#39; &#124; &#39;nonce&#39; &#124; &#39;contractLookup&#39;>** | Optional data to fetch from the blockchain: - &#x60;balance&#x60; to get the balance of this address. - &#x60;code&#x60; to get the code at this address. - &#x60;nonce&#x60; to get the next available transaction nonce for this address. - &#x60;contractLookup&#x60; to get the contract(s) details for this address.  | (optional) defaults to undefined|


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

# **listAddresses**
> ListAddresses200Response listAddresses()

Returns all the aliased addresses.

### Example

```typescript
import {
    AddressesApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AddressesApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)

const { status, data } = await apiInstance.listAddresses(
    chain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|


### Return type

**ListAddresses200Response**

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

# **setAddress**
> SetAddress201Response setAddress(addressAlias)

Associates an address with an alias.

### Example

```typescript
import {
    AddressesApi,
    Configuration,
    AddressAlias
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AddressesApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let addressAlias: AddressAlias; //

const { status, data } = await apiInstance.setAddress(
    chain,
    addressAlias
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addressAlias** | **AddressAlias**|  | |
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|


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
|**201** | OK |  -  |
|**4XX** | Client error. |  -  |
|**5XX** | Server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

