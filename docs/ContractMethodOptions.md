# ContractMethodOptions

Type conversion options for a function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **string** | The function signature. | [optional] [default to undefined]
**inputs** | [**Array&lt;ContractParameter&gt;**](ContractParameter.md) | List of function input parameters. | [default to undefined]
**outputs** | [**Array&lt;ContractParameter&gt;**](ContractParameter.md) | List of function output parameters. | [optional] [default to undefined]

## Example

```typescript
import { ContractMethodOptions } from '@curvegrid/multibaas-sdk';

const instance: ContractMethodOptions = {
    signature,
    inputs,
    outputs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
