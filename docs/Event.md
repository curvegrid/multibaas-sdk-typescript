# Event

An event returned by the API call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggeredAt** | **string** | The time at which the event was triggered. | [default to undefined]
**event** | [**EventInformation**](EventInformation.md) |  | [default to undefined]
**transaction** | [**TransactionInformation**](TransactionInformation.md) |  | [default to undefined]

## Example

```typescript
import { Event } from '@curvegrid/multibaas-sdk';

const instance: Event = {
    triggeredAt,
    event,
    transaction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
