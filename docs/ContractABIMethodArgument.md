# ContractABIMethodArgument

A contract function argument.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the argument. | [default to undefined]
**type** | [**ContractABIType**](ContractABIType.md) |  | [default to undefined]
**typeName** | **string** | The type name (e.g., uint256, address, string). | [default to undefined]
**typeConversion** | [**ContractABITypeConversion**](ContractABITypeConversion.md) |  | [default to undefined]
**notes** | **string** | The developer documentation. | [default to undefined]

## Example

```typescript
import { ContractABIMethodArgument } from '@curvegrid/multibaas-sdk';

const instance: ContractABIMethodArgument = {
    name,
    type,
    typeName,
    typeConversion,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
