# Group

A group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The group ID. | [default to undefined]
**name** | **string** | The group name. | [default to undefined]
**shortName** | **string** | The group short name. | [default to undefined]
**description** | **string** | The group description. | [default to undefined]
**roles** | [**Array&lt;Role&gt;**](Role.md) | The group roles. | [default to undefined]

## Example

```typescript
import { Group } from '@curvegrid/multibaas-sdk';

const instance: Group = {
    id,
    name,
    shortName,
    description,
    roles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
