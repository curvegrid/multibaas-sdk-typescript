# WebhookEndpoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The URL to send the webhook to. | [default to undefined]
**label** | **string** | An alias to easily identify and reference the entity in subsequent requests. | [default to undefined]
**subscriptions** | [**Array&lt;WebhookEventsType&gt;**](WebhookEventsType.md) | The events to subscribe to. | [default to undefined]
**id** | **number** |  | [default to undefined]
**nextAttempt** | **string** | The time the next attempt will be made. | [optional] [default to undefined]
**lastAttempt** | **string** | The time the last attempt was made. | [optional] [default to undefined]
**failedCalls** | **number** | The number of failed webhook endpoint calls since the last successful call. | [default to undefined]
**lastError** | **string** | The last error received from the webhook endpoint. | [optional] [default to undefined]
**createdAt** | **string** | The time the webhook was created. | [default to undefined]
**updatedAt** | **string** | The time the webhook was last updated. | [default to undefined]
**secret** | **string** | The secret key used to sign the webhook. | [default to undefined]

## Example

```typescript
import { WebhookEndpoint } from '@curvegrid/multibaas-sdk';

const instance: WebhookEndpoint = {
    url,
    label,
    subscriptions,
    id,
    nextAttempt,
    lastAttempt,
    failedCalls,
    lastError,
    createdAt,
    updatedAt,
    secret,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
