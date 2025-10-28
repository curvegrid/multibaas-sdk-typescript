# HsmApi

All URIs are relative to *https://your_deployment.multibaas.com/api/v0*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addHsmConfig**](#addhsmconfig) | **POST** /hsm/config | Add HSM config|
|[**addHsmKey**](#addhsmkey) | **POST** /hsm/key | Add HSM key|
|[**createHsmKey**](#createhsmkey) | **POST** /hsm/key/new | Create HSM key|
|[**listHsm**](#listhsm) | **GET** /hsm | List HSM configs and wallets|
|[**listHsmWallets**](#listhsmwallets) | **GET** /hsm/wallets | List HSM wallets|
|[**removeHsmConfig**](#removehsmconfig) | **DELETE** /hsm/config/{client_id} | Remove HSM config|
|[**removeHsmKey**](#removehsmkey) | **DELETE** /hsm/key/{wallet_address} | Remove HSM key|
|[**setLocalNonce**](#setlocalnonce) | **POST** /chains/{chain}/hsm/nonce/{wallet_address} | Set local nonce|
|[**signAndSubmitTransaction**](#signandsubmittransaction) | **POST** /chains/{chain}/hsm/submit | Sign and submit transaction|
|[**signData**](#signdata) | **POST** /chains/{chain}/hsm/sign | Sign data|

# **addHsmConfig**
> BaseResponse addHsmConfig(baseAzureAccount)

Adds a new Azure account configuration.

### Example

```typescript
import {
    HsmApi,
    Configuration,
    BaseAzureAccount
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new HsmApi(configuration);

let baseAzureAccount: BaseAzureAccount; //

const { status, data } = await apiInstance.addHsmConfig(
    baseAzureAccount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseAzureAccount** | **BaseAzureAccount**|  | |


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

# **addHsmKey**
> BaseResponse addHsmKey(addKey)

Adds an existing key configuration.

### Example

```typescript
import {
    HsmApi,
    Configuration,
    AddKey
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new HsmApi(configuration);

let addKey: AddKey; //

const { status, data } = await apiInstance.addHsmKey(
    addKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addKey** | **AddKey**|  | |


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

# **createHsmKey**
> CreateHsmKey200Response createHsmKey(createKey)

Creates a new key in the Azure KeyVault.

### Example

```typescript
import {
    HsmApi,
    Configuration,
    CreateKey
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new HsmApi(configuration);

let createKey: CreateKey; //

const { status, data } = await apiInstance.createHsmKey(
    createKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createKey** | **CreateKey**|  | |


### Return type

**CreateHsmKey200Response**

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

# **listHsm**
> ListHsm200Response listHsm()

Returns a list of HSM configs and their associated wallets.

### Example

```typescript
import {
    HsmApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new HsmApi(configuration);

const { status, data } = await apiInstance.listHsm();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListHsm200Response**

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

# **listHsmWallets**
> ListHsmWallets200Response listHsmWallets()

Returns a list of HSM wallets.

### Example

```typescript
import {
    HsmApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new HsmApi(configuration);

let keyName: string; //Filter wallets by a key name. (optional) (default to undefined)
let keyVersion: string; //Filter wallets by a key version. (optional) (default to undefined)
let vaultName: string; //Filter wallets by a vault name. (optional) (default to undefined)
let baseGroupName: string; //Filter wallets by a base group name. (optional) (default to undefined)
let clientId: string; //Filter wallets by a client ID. (optional) (default to undefined)
let publicAddress: string; //Filter wallets by a public address. (optional) (default to undefined)
let limit: number; // (optional) (default to 10)
let offset: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.listHsmWallets(
    keyName,
    keyVersion,
    vaultName,
    baseGroupName,
    clientId,
    publicAddress,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyName** | [**string**] | Filter wallets by a key name. | (optional) defaults to undefined|
| **keyVersion** | [**string**] | Filter wallets by a key version. | (optional) defaults to undefined|
| **vaultName** | [**string**] | Filter wallets by a vault name. | (optional) defaults to undefined|
| **baseGroupName** | [**string**] | Filter wallets by a base group name. | (optional) defaults to undefined|
| **clientId** | [**string**] | Filter wallets by a client ID. | (optional) defaults to undefined|
| **publicAddress** | [**string**] | Filter wallets by a public address. | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **offset** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ListHsmWallets200Response**

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

# **removeHsmConfig**
> BaseResponse removeHsmConfig()

Removes the specified Azure account configuration and its associated keys.

### Example

```typescript
import {
    HsmApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new HsmApi(configuration);

let clientId: string; //The HSM client ID. (default to undefined)

const { status, data } = await apiInstance.removeHsmConfig(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] | The HSM client ID. | defaults to undefined|


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

# **removeHsmKey**
> BaseResponse removeHsmKey()

Removes the specified key configuration.

### Example

```typescript
import {
    HsmApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new HsmApi(configuration);

let walletAddress: string; //An Ethereum address. (default to undefined)

const { status, data } = await apiInstance.removeHsmKey(
    walletAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **walletAddress** | [**string**] | An Ethereum address. | defaults to undefined|


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

# **setLocalNonce**
> BaseResponse setLocalNonce(setNonceRequest)

Sets the next transaction nonce for the given HSM address that will be used with the nonce management feature.

### Example

```typescript
import {
    HsmApi,
    Configuration,
    SetNonceRequest
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new HsmApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)
let setNonceRequest: SetNonceRequest; //

const { status, data } = await apiInstance.setLocalNonce(
    chain,
    walletAddress,
    setNonceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setNonceRequest** | **SetNonceRequest**|  | |
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|
| **walletAddress** | [**string**] | An Ethereum address. | defaults to undefined|


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

# **signAndSubmitTransaction**
> TransferEth200Response signAndSubmitTransaction(cloudWalletTXToSign)

Signs and submits the given transaction using an HSM address.

### Example

```typescript
import {
    HsmApi,
    Configuration,
    CloudWalletTXToSign
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new HsmApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let cloudWalletTXToSign: CloudWalletTXToSign; //

const { status, data } = await apiInstance.signAndSubmitTransaction(
    chain,
    cloudWalletTXToSign
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cloudWalletTXToSign** | **CloudWalletTXToSign**|  | |
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

# **signData**
> SignData200Response signData(hSMSignRequest)

Signs the given data using the given HSM address.

### Example

```typescript
import {
    HsmApi,
    Configuration,
    HSMSignRequest
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new HsmApi(configuration);

let chain: ChainName; //The blockchain chain label. (default to undefined)
let hSMSignRequest: HSMSignRequest; //

const { status, data } = await apiInstance.signData(
    chain,
    hSMSignRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hSMSignRequest** | **HSMSignRequest**|  | |
| **chain** | **ChainName** | The blockchain chain label. | defaults to undefined|


### Return type

**SignData200Response**

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

