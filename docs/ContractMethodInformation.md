# ContractMethodInformation

The contract method\'s information returned within the event or transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the method. | [default to undefined]
**signature** | **string** | The method signature. | [default to undefined]
**inputs** | [**Array&lt;MethodArg&gt;**](MethodArg.md) |  | [default to undefined]

## Example

```typescript
import { ContractMethodInformation } from '@curvegrid/multibaas-sdk';

const instance: ContractMethodInformation = {
    name,
    signature,
    inputs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
