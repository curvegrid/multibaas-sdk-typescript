# WebhooksApi

All URIs are relative to *https://your_deployment.multibaas.com/api/v0*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**countWebhookEvents**](#countwebhookevents) | **GET** /webhooks/{webhookID}/events/count | Count webhook events|
|[**countWebhooks**](#countwebhooks) | **GET** /webhooks/count | Count webhooks|
|[**createWebhook**](#createwebhook) | **POST** /webhooks | Create webhook|
|[**deleteWebhook**](#deletewebhook) | **DELETE** /webhooks/{webhookID} | Delete webhook|
|[**getWebhook**](#getwebhook) | **GET** /webhooks/{webhookID} | Get webhook|
|[**listWebhookEvents**](#listwebhookevents) | **GET** /webhooks/{webhookID}/events | List webhook events|
|[**listWebhooks**](#listwebhooks) | **GET** /webhooks | List webhooks|
|[**updateWebhook**](#updatewebhook) | **PUT** /webhooks/{webhookID} | Update webhook|

# **countWebhookEvents**
> CountWebhookEvents200Response countWebhookEvents()

Count the events for the given webhook endpoint.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookID: number; // (default to undefined)

const { status, data } = await apiInstance.countWebhookEvents(
    webhookID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookID** | [**number**] |  | defaults to undefined|


### Return type

**CountWebhookEvents200Response**

### Authorization

[cookie](../README.md#cookie), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **countWebhooks**
> CountWebhooks200Response countWebhooks()

Count all webhook endpoints.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

const { status, data } = await apiInstance.countWebhooks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CountWebhooks200Response**

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

# **createWebhook**
> CreateWebhook200Response createWebhook(baseWebhookEndpoint)

Create a webhook.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    BaseWebhookEndpoint
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let baseWebhookEndpoint: BaseWebhookEndpoint; //

const { status, data } = await apiInstance.createWebhook(
    baseWebhookEndpoint
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseWebhookEndpoint** | **BaseWebhookEndpoint**|  | |


### Return type

**CreateWebhook200Response**

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

# **deleteWebhook**
> BaseResponse deleteWebhook()

Delete a webhook endpoint.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookID: number; // (default to undefined)

const { status, data } = await apiInstance.deleteWebhook(
    webhookID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookID** | [**number**] |  | defaults to undefined|


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

# **getWebhook**
> CreateWebhook200Response getWebhook()

Get a webhook endpoint.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookID: number; // (default to undefined)

const { status, data } = await apiInstance.getWebhook(
    webhookID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookID** | [**number**] |  | defaults to undefined|


### Return type

**CreateWebhook200Response**

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

# **listWebhookEvents**
> ListWebhookEvents200Response listWebhookEvents()

List events for the given webhook endpoint.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookID: number; // (default to undefined)
let limit: number; // (optional) (default to 10)
let offset: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.listWebhookEvents(
    webhookID,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookID** | [**number**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **offset** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ListWebhookEvents200Response**

### Authorization

[cookie](../README.md#cookie), [bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWebhooks**
> ListWebhooks200Response listWebhooks()

List all webhook endpoints.

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let limit: number; // (optional) (default to 10)
let offset: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.listWebhooks(
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **offset** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ListWebhooks200Response**

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

# **updateWebhook**
> CreateWebhook200Response updateWebhook(baseWebhookEndpoint)

Update a webhook endpoint.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    BaseWebhookEndpoint
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookID: number; // (default to undefined)
let baseWebhookEndpoint: BaseWebhookEndpoint; //

const { status, data } = await apiInstance.updateWebhook(
    webhookID,
    baseWebhookEndpoint
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseWebhookEndpoint** | **BaseWebhookEndpoint**|  | |
| **webhookID** | [**number**] |  | defaults to undefined|


### Return type

**CreateWebhook200Response**

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

