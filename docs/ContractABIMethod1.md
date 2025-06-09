# ContractABIMethod1

A contract function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | A hex string. | [default to undefined]
**name** | **string** | Name of the function. | [default to undefined]
**signature** | **string** | The function signature. | [default to undefined]
**_const** | **boolean** |  | [default to undefined]
**payable** | **boolean** |  | [default to undefined]
**inputs** | [**Array&lt;ContractABIMethodArgument&gt;**](ContractABIMethodArgument.md) | List of function arguments. | [default to undefined]
**outputs** | [**Array&lt;ContractABIMethodArgument&gt;**](ContractABIMethodArgument.md) | List of function outputs. | [default to undefined]
**author** | **string** |  | [default to undefined]
**notes** | **string** |  | [default to undefined]
**description** | **string** | The function description. | [default to undefined]

## Example

```typescript
import { ContractABIMethod1 } from '@curvegrid/multibaas-sdk';

const instance: ContractABIMethod1 = {
    id,
    name,
    signature,
    _const,
    payable,
    inputs,
    outputs,
    author,
    notes,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
