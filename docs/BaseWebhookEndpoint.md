# BaseWebhookEndpoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The URL to send the webhook to. | [default to undefined]
**label** | **string** | An alias to easily identify and reference the entity in subsequent requests. | [default to undefined]
**subscriptions** | [**Array&lt;WebhookEventsType&gt;**](WebhookEventsType.md) | The events to subscribe to. | [default to undefined]

## Example

```typescript
import { BaseWebhookEndpoint } from '@curvegrid/multibaas-sdk';

const instance: BaseWebhookEndpoint = {
    url,
    label,
    subscriptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
