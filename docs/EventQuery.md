# EventQuery

An event query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**Array&lt;EventQueryEvent&gt;**](EventQueryEvent.md) |  | [default to undefined]
**groupBy** | **string** | The results will be grouped according to this field. An aggregator for non Group By fields must be specified if groupBy is specified. | [optional] [default to undefined]
**orderBy** | **string** | The results will be ordered according to this field. | [optional] [default to undefined]
**order** | **string** | Specify ascending or descending order, the default is \&quot;ASC\&quot;. | [optional] [default to undefined]

## Example

```typescript
import { EventQuery } from '@curvegrid/multibaas-sdk';

const instance: EventQuery = {
    events,
    groupBy,
    orderBy,
    order,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
