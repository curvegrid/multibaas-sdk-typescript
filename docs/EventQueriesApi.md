# EventQueriesApi

All URIs are relative to *https://your_deployment.multibaas.com/api/v0*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**countEventQueryRecords**](#counteventqueryrecords) | **GET** /queries/{event_query}/count | Count event query records|
|[**deleteEventQuery**](#deleteeventquery) | **DELETE** /queries/{event_query} | Delete event query|
|[**executeArbitraryEventQuery**](#executearbitraryeventquery) | **POST** /queries | Execute arbitrary event query|
|[**executeEventQuery**](#executeeventquery) | **GET** /queries/{event_query}/results | Execute event query|
|[**getEventQuery**](#geteventquery) | **GET** /queries/{event_query} | Get event query|
|[**listEventQueries**](#listeventqueries) | **GET** /queries | List event queries|
|[**setEventQuery**](#seteventquery) | **PUT** /queries/{event_query} | Create or update event query|

# **countEventQueryRecords**
> CountEventQueryRecords200Response countEventQueryRecords()

Returns the record count of the given saved event query.

### Example

```typescript
import {
    EventQueriesApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new EventQueriesApi(configuration);

let eventQuery: string; //An event query label. (default to undefined)

const { status, data } = await apiInstance.countEventQueryRecords(
    eventQuery
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventQuery** | [**string**] | An event query label. | defaults to undefined|


### Return type

**CountEventQueryRecords200Response**

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

# **deleteEventQuery**
> BaseResponse deleteEventQuery()

Deletes the given saved event query.

### Example

```typescript
import {
    EventQueriesApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new EventQueriesApi(configuration);

let eventQuery: string; //An event query label. (default to undefined)

const { status, data } = await apiInstance.deleteEventQuery(
    eventQuery
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventQuery** | [**string**] | An event query label. | defaults to undefined|


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

# **executeArbitraryEventQuery**
> ExecuteArbitraryEventQuery200Response executeArbitraryEventQuery(eventQuery)

Executes an arbitrary event query.

### Example

```typescript
import {
    EventQueriesApi,
    Configuration,
    EventQuery
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new EventQueriesApi(configuration);

let eventQuery: EventQuery; //
let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to 10)

const { status, data } = await apiInstance.executeArbitraryEventQuery(
    eventQuery,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventQuery** | **EventQuery**|  | |
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 10|


### Return type

**ExecuteArbitraryEventQuery200Response**

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

# **executeEventQuery**
> ExecuteArbitraryEventQuery200Response executeEventQuery()

Executes the given saved event query.

### Example

```typescript
import {
    EventQueriesApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new EventQueriesApi(configuration);

let eventQuery: string; //An event query label. (default to undefined)
let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to 10)

const { status, data } = await apiInstance.executeEventQuery(
    eventQuery,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventQuery** | [**string**] | An event query label. | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 10|


### Return type

**ExecuteArbitraryEventQuery200Response**

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

# **getEventQuery**
> GetEventQuery200Response getEventQuery()

Returns the given saved event query.

### Example

```typescript
import {
    EventQueriesApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new EventQueriesApi(configuration);

let eventQuery: string; //An event query label. (default to undefined)

const { status, data } = await apiInstance.getEventQuery(
    eventQuery
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventQuery** | [**string**] | An event query label. | defaults to undefined|


### Return type

**GetEventQuery200Response**

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

# **listEventQueries**
> ListEventQueries200Response listEventQueries()

Returns a list of saved event queries.

### Example

```typescript
import {
    EventQueriesApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new EventQueriesApi(configuration);

const { status, data } = await apiInstance.listEventQueries();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListEventQueries200Response**

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

# **setEventQuery**
> BaseResponse setEventQuery(eventQuery2)

Creates or updates the given saved event query.

### Example

```typescript
import {
    EventQueriesApi,
    Configuration,
    EventQuery
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new EventQueriesApi(configuration);

let eventQuery: string; //An event query label. (default to undefined)
let eventQuery2: EventQuery; //

const { status, data } = await apiInstance.setEventQuery(
    eventQuery,
    eventQuery2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventQuery2** | **EventQuery**|  | |
| **eventQuery** | [**string**] | An event query label. | defaults to undefined|


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

