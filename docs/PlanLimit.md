# PlanLimit

A limit on plan usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the limit. | [default to undefined]
**limit** | **number** | The limit value. Null means unlimited. | [default to undefined]
**count** | **number** | The current count for this limit. | [optional] [default to undefined]

## Example

```typescript
import { PlanLimit } from '@curvegrid/multibaas-sdk';

const instance: PlanLimit = {
    name,
    limit,
    count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
