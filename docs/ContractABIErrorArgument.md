# ContractABIErrorArgument

A contract error argument.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the argument. | [default to undefined]
**type** | [**ContractABIType**](ContractABIType.md) |  | [default to undefined]
**typeName** | **string** | The type name (e.g., uint256, address, string). | [default to undefined]
**indexed** | **boolean** | Whether this argument is indexed. | [default to undefined]
**notes** | **string** | The developer documentation. | [default to undefined]

## Example

```typescript
import { ContractABIErrorArgument } from '@curvegrid/multibaas-sdk';

const instance: ContractABIErrorArgument = {
    name,
    type,
    typeName,
    indexed,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
