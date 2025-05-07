# ContractABIEventArgument

A contract event argument.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**type** | [**ContractABIType**](ContractABIType.md) |  | [default to undefined]
**typeName** | **string** |  | [default to undefined]
**indexed** | **boolean** |  | [default to undefined]
**typeConversion** | [**ContractABITypeConversion**](ContractABITypeConversion.md) |  | [default to undefined]
**notes** | **string** | The developer documentation. | [default to undefined]

## Example

```typescript
import { ContractABIEventArgument } from '@curvegrid/multibaas-sdk';

const instance: ContractABIEventArgument = {
    name,
    type,
    typeName,
    indexed,
    typeConversion,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
