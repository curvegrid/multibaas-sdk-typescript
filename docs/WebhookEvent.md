# WebhookEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The ID of the webhook event. | [default to undefined]
**eventType** | [**WebhookEventsType**](WebhookEventsType.md) |  | [default to undefined]
**data** | **object** | The data associated with the event. | [default to undefined]
**createdAt** | **string** | The time the webhook event was created. | [default to undefined]
**deliveredAt** | **string** | The time the webhook event was last updated. | [optional] [default to undefined]

## Example

```typescript
import { WebhookEvent } from '@curvegrid/multibaas-sdk';

const instance: WebhookEvent = {
    id,
    eventType,
    data,
    createdAt,
    deliveredAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
