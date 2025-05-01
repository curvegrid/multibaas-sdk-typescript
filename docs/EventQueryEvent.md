# EventQueryEvent

A query on a single event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventName** | **string** | The name of an event. | [default to undefined]
**select** | [**Array&lt;EventQueryField&gt;**](EventQueryField.md) | The query information about all the fields to select from an event. | [default to undefined]
**filter** | [**EventQueryFilter**](EventQueryFilter.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EventQueryEvent } from '@curvegrid/multibaas-sdk';

const instance: EventQueryEvent = {
    eventName,
    select,
    filter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
