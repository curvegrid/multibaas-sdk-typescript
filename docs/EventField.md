# EventField

Holds a field in the event\'s data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The input name. | [default to undefined]
**value** | **any** | The input value. | [default to undefined]
**hashed** | **boolean** | Has the value been hashed into a keccak256 string? | [default to undefined]
**type** | **string** | The type of the argument. | [default to undefined]

## Example

```typescript
import { EventField } from '@curvegrid/multibaas-sdk';

const instance: EventField = {
    name,
    value,
    hashed,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
