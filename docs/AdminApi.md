# AdminApi

All URIs are relative to *https://your_deployment.multibaas.com/api/v0*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptInvite**](#acceptinvite) | **POST** /invites/{inviteID} | Accept invite|
|[**addCorsOrigin**](#addcorsorigin) | **POST** /cors | Add CORS origin|
|[**addGroupApiKey**](#addgroupapikey) | **PUT** /groups/{groupID}/api_keys/{apiKeyID} | Add API key to group|
|[**addGroupRole**](#addgrouprole) | **PUT** /groups/{groupID}/roles/{roleShortName} | Add role to group|
|[**addGroupUser**](#addgroupuser) | **PUT** /groups/{groupID}/users/{userID} | Add user to group|
|[**checkInvite**](#checkinvite) | **GET** /invites/{inviteID} | Check invite|
|[**createApiKey**](#createapikey) | **POST** /api_keys | Create API key|
|[**deleteApiKey**](#deleteapikey) | **DELETE** /api_keys/{apiKeyID} | Delete API key|
|[**deleteInvite**](#deleteinvite) | **DELETE** /invites/{email}/delete | Delete invite|
|[**deleteUser**](#deleteuser) | **DELETE** /users/{userID} | Delete user|
|[**getApiKey**](#getapikey) | **GET** /api_keys/{apiKeyID} | Get API Key|
|[**inviteUser**](#inviteuser) | **POST** /invites | Invite user|
|[**listApiKeys**](#listapikeys) | **GET** /api_keys | List API keys|
|[**listAuditLogs**](#listauditlogs) | **GET** /systemactivities | List audit logs|
|[**listCorsOrigins**](#listcorsorigins) | **GET** /cors | List CORS origins|
|[**listGroups**](#listgroups) | **GET** /groups | List groups|
|[**listInvites**](#listinvites) | **GET** /invites | List invites|
|[**listUserSigners**](#listusersigners) | **GET** /users/{userID}/signers | List user signers|
|[**listUsers**](#listusers) | **GET** /users | List users|
|[**removeCorsOrigin**](#removecorsorigin) | **DELETE** /cors/{originID} | Remove CORS Origin|
|[**removeGroupApiKey**](#removegroupapikey) | **DELETE** /groups/{groupID}/api_keys/{apiKeyID} | Remove API key from group|
|[**removeGroupRole**](#removegrouprole) | **DELETE** /groups/{groupID}/roles/{roleShortName} | Remove role from group|
|[**removeGroupUser**](#removegroupuser) | **DELETE** /groups/{groupID}/users/{userID} | Remove user from group|
|[**removeUserSignerCloudWallet**](#removeusersignercloudwallet) | **DELETE** /users/{userID}/cloudwallets/{wallet_address} | Remove user cloud wallet signer|
|[**removeUserSignerSafeAccount**](#removeusersignersafeaccount) | **DELETE** /users/{userID}/safeaccounts/{wallet_address} | Remove user safe account signer|
|[**removeUserSignerWeb3Wallet**](#removeusersignerweb3wallet) | **DELETE** /users/{userID}/web3wallets/{wallet_address} | Remove user web3 wallet signer|
|[**setUserSignerCloudWallet**](#setusersignercloudwallet) | **PUT** /users/{userID}/cloudwallets/{wallet_address} | Add or update user cloud wallet signer|
|[**setUserSignerSafeAccount**](#setusersignersafeaccount) | **PUT** /users/{userID}/safeaccounts/{wallet_address} | Add or update user safe account signer|
|[**setUserSignerWeb3Wallet**](#setusersignerweb3wallet) | **PUT** /users/{userID}/web3wallets/{wallet_address} | Add or update user web3 wallet signer|
|[**updateApiKey**](#updateapikey) | **PUT** /api_keys/{apiKeyID} | Update API key|

# **acceptInvite**
> AcceptInvite200Response acceptInvite(acceptInviteRequest)

Accepts a user invite.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    AcceptInviteRequest
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let inviteID: string; // (default to undefined)
let acceptInviteRequest: AcceptInviteRequest; //

const { status, data } = await apiInstance.acceptInvite(
    inviteID,
    acceptInviteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptInviteRequest** | **AcceptInviteRequest**|  | |
| **inviteID** | [**string**] |  | defaults to undefined|


### Return type

**AcceptInvite200Response**

### Authorization

[bearer](../README.md#bearer)

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

# **addCorsOrigin**
> BaseResponse addCorsOrigin(cORSOrigin)

Adds a CORS origin.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    CORSOrigin
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let cORSOrigin: CORSOrigin; //

const { status, data } = await apiInstance.addCorsOrigin(
    cORSOrigin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cORSOrigin** | **CORSOrigin**|  | |


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

# **addGroupApiKey**
> BaseResponse addGroupApiKey()

Adds an API key to a group.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let groupID: number; // (default to undefined)
let apiKeyID: number; // (default to undefined)

const { status, data } = await apiInstance.addGroupApiKey(
    groupID,
    apiKeyID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupID** | [**number**] |  | defaults to undefined|
| **apiKeyID** | [**number**] |  | defaults to undefined|


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

# **addGroupRole**
> BaseResponse addGroupRole()

Adds a role to a group.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let groupID: number; // (default to undefined)
let roleShortName: string; // (default to undefined)

const { status, data } = await apiInstance.addGroupRole(
    groupID,
    roleShortName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupID** | [**number**] |  | defaults to undefined|
| **roleShortName** | [**string**] |  | defaults to undefined|


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

# **addGroupUser**
> BaseResponse addGroupUser()

Adds a user to a group.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let groupID: number; // (default to undefined)
let userID: number; // (default to undefined)

const { status, data } = await apiInstance.addGroupUser(
    groupID,
    userID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupID** | [**number**] |  | defaults to undefined|
| **userID** | [**number**] |  | defaults to undefined|


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

# **checkInvite**
> BaseResponse checkInvite()

Checks if a user invite is valid.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let inviteID: string; // (default to undefined)

const { status, data } = await apiInstance.checkInvite(
    inviteID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteID** | [**string**] |  | defaults to undefined|


### Return type

**BaseResponse**

### Authorization

No authorization required

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

# **createApiKey**
> CreateApiKey200Response createApiKey(createApiKeyRequest)

Creates an API key and adds it to group IDs.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    CreateApiKeyRequest
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let createApiKeyRequest: CreateApiKeyRequest; //

const { status, data } = await apiInstance.createApiKey(
    createApiKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createApiKeyRequest** | **CreateApiKeyRequest**|  | |


### Return type

**CreateApiKey200Response**

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

# **deleteApiKey**
> BaseResponse deleteApiKey()

Deletes an API key.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let apiKeyID: number; // (default to undefined)

const { status, data } = await apiInstance.deleteApiKey(
    apiKeyID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyID** | [**number**] |  | defaults to undefined|


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

# **deleteInvite**
> deleteInvite()

Deletes a user invite.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let email: string; // (default to undefined)

const { status, data } = await apiInstance.deleteInvite(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**4XX** | Client error. |  -  |
|**5XX** | Server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUser**
> BaseResponse deleteUser()

Deletes a user.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let userID: number; // (default to undefined)

const { status, data } = await apiInstance.deleteUser(
    userID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userID** | [**number**] |  | defaults to undefined|


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

# **getApiKey**
> GetApiKey200Response getApiKey()

Returns an API key.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let apiKeyID: number; // (default to undefined)

const { status, data } = await apiInstance.getApiKey(
    apiKeyID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyID** | [**number**] |  | defaults to undefined|


### Return type

**GetApiKey200Response**

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

# **inviteUser**
> BaseResponse inviteUser(inviteRequest)

Invites a new user.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    InviteRequest
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let inviteRequest: InviteRequest; //

const { status, data } = await apiInstance.inviteUser(
    inviteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteRequest** | **InviteRequest**|  | |


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

# **listApiKeys**
> ListApiKeys200Response listApiKeys()

Returns all the API keys.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let all: boolean; //If true, returns all API keys on the system, otherwise, returns only the API keys owned by the calling user. (optional) (default to undefined)

const { status, data } = await apiInstance.listApiKeys(
    all
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **all** | [**boolean**] | If true, returns all API keys on the system, otherwise, returns only the API keys owned by the calling user. | (optional) defaults to undefined|


### Return type

**ListApiKeys200Response**

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

# **listAuditLogs**
> ListAuditLogs200Response listAuditLogs()

Returns the audit logs.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.listAuditLogs();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListAuditLogs200Response**

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

# **listCorsOrigins**
> ListCorsOrigins200Response listCorsOrigins()

Returns a list of CORS origins.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.listCorsOrigins();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListCorsOrigins200Response**

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

# **listGroups**
> ListGroups200Response listGroups()

Returns all the groups.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let userID: number; // (optional) (default to undefined)
let apiKeyID: number; // (optional) (default to undefined)
let assignable: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.listGroups(
    userID,
    apiKeyID,
    assignable
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userID** | [**number**] |  | (optional) defaults to undefined|
| **apiKeyID** | [**number**] |  | (optional) defaults to undefined|
| **assignable** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**ListGroups200Response**

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

# **listInvites**
> ListInvites200Response listInvites()

Returns all the user invites.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

const { status, data } = await apiInstance.listInvites();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListInvites200Response**

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

# **listUserSigners**
> ListUserSigners200Response listUserSigners()

Returns all the signers for a user.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let userID: number; // (default to undefined)

const { status, data } = await apiInstance.listUserSigners(
    userID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userID** | [**number**] |  | defaults to undefined|


### Return type

**ListUserSigners200Response**

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

# **listUsers**
> ListUsers200Response listUsers()

Returns all the users.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let groupID: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.listUsers(
    groupID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupID** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ListUsers200Response**

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

# **removeCorsOrigin**
> BaseResponse removeCorsOrigin()

Removes a CORS origin.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let originID: number; // (default to undefined)

const { status, data } = await apiInstance.removeCorsOrigin(
    originID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **originID** | [**number**] |  | defaults to undefined|


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

# **removeGroupApiKey**
> BaseResponse removeGroupApiKey()

Removes an API key from a group.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let groupID: number; // (default to undefined)
let apiKeyID: number; // (default to undefined)

const { status, data } = await apiInstance.removeGroupApiKey(
    groupID,
    apiKeyID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupID** | [**number**] |  | defaults to undefined|
| **apiKeyID** | [**number**] |  | defaults to undefined|


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

# **removeGroupRole**
> BaseResponse removeGroupRole()

Removes a role from a group.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let groupID: number; // (default to undefined)
let roleShortName: string; // (default to undefined)

const { status, data } = await apiInstance.removeGroupRole(
    groupID,
    roleShortName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupID** | [**number**] |  | defaults to undefined|
| **roleShortName** | [**string**] |  | defaults to undefined|


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

# **removeGroupUser**
> BaseResponse removeGroupUser()

Removes a user from a group.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let groupID: number; // (default to undefined)
let userID: number; // (default to undefined)

const { status, data } = await apiInstance.removeGroupUser(
    groupID,
    userID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupID** | [**number**] |  | defaults to undefined|
| **userID** | [**number**] |  | defaults to undefined|


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

# **removeUserSignerCloudWallet**
> BaseResponse removeUserSignerCloudWallet()

Removes a cloud wallet signer from a user.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let userID: number; // (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)

const { status, data } = await apiInstance.removeUserSignerCloudWallet(
    userID,
    walletAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userID** | [**number**] |  | defaults to undefined|
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

# **removeUserSignerSafeAccount**
> BaseResponse removeUserSignerSafeAccount()

Removes a safe account signer from a user.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let userID: number; // (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)

const { status, data } = await apiInstance.removeUserSignerSafeAccount(
    userID,
    walletAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userID** | [**number**] |  | defaults to undefined|
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

# **removeUserSignerWeb3Wallet**
> BaseResponse removeUserSignerWeb3Wallet()

Removes a web3 wallet signer from a user.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let userID: number; // (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)

const { status, data } = await apiInstance.removeUserSignerWeb3Wallet(
    userID,
    walletAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userID** | [**number**] |  | defaults to undefined|
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

# **setUserSignerCloudWallet**
> BaseResponse setUserSignerCloudWallet()

Adds or updates a user\'s cloud wallet signer.

### Example

```typescript
import {
    AdminApi,
    Configuration
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let userID: number; // (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)

const { status, data } = await apiInstance.setUserSignerCloudWallet(
    userID,
    walletAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userID** | [**number**] |  | defaults to undefined|
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

# **setUserSignerSafeAccount**
> BaseResponse setUserSignerSafeAccount(signerLabel)

Adds or updates a user\'s safe account signer.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    SignerLabel
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let userID: number; // (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)
let signerLabel: SignerLabel; //

const { status, data } = await apiInstance.setUserSignerSafeAccount(
    userID,
    walletAddress,
    signerLabel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signerLabel** | **SignerLabel**|  | |
| **userID** | [**number**] |  | defaults to undefined|
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

# **setUserSignerWeb3Wallet**
> BaseResponse setUserSignerWeb3Wallet(signerLabel)

Adds or updates a user\'s web3 wallet signer.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    SignerLabel
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let userID: number; // (default to undefined)
let walletAddress: string; //An Ethereum address. (default to undefined)
let signerLabel: SignerLabel; //

const { status, data } = await apiInstance.setUserSignerWeb3Wallet(
    userID,
    walletAddress,
    signerLabel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signerLabel** | **SignerLabel**|  | |
| **userID** | [**number**] |  | defaults to undefined|
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

# **updateApiKey**
> BaseResponse updateApiKey(baseAPIKey)

Updates an API key.

### Example

```typescript
import {
    AdminApi,
    Configuration,
    BaseAPIKey
} from '@curvegrid/multibaas-sdk';

const configuration = new Configuration();
const apiInstance = new AdminApi(configuration);

let apiKeyID: number; // (default to undefined)
let baseAPIKey: BaseAPIKey; //

const { status, data } = await apiInstance.updateApiKey(
    apiKeyID,
    baseAPIKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baseAPIKey** | **BaseAPIKey**|  | |
| **apiKeyID** | [**number**] |  | defaults to undefined|


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

