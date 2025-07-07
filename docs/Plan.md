# Plan

A plan containing limits and features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the plan. | [default to undefined]
**updatedAt** | **string** | When the plan was last updated. | [default to undefined]
**limits** | [**Array&lt;PlanLimit&gt;**](PlanLimit.md) | The limits associated with the plan. | [default to undefined]
**features** | [**Array&lt;PlanFeature&gt;**](PlanFeature.md) | The features associated with the plan. | [default to undefined]

## Example

```typescript
import { Plan } from '@curvegrid/multibaas-sdk';

const instance: Plan = {
    name,
    updatedAt,
    limits,
    features,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
