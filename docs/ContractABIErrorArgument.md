# ContractABIErrorArgument

A contract error argument.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**type** | [**ContractABIType**](ContractABIType.md) |  | [default to undefined]
**typeName** | **string** |  | [default to undefined]
**indexed** | **boolean** |  | [default to undefined]
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
