# SavedEventQuery

A saved event query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**label** | **string** | An event query label. | [default to undefined]
**query** | [**EventQuery**](EventQuery.md) |  | [default to undefined]
**isSystem** | **boolean** | Specifies if this a system-generated query which is not modifiable by the user. | [default to undefined]

## Example

```typescript
import { SavedEventQuery } from '@curvegrid/multibaas-sdk';

const instance: SavedEventQuery = {
    id,
    label,
    query,
    isSystem,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
