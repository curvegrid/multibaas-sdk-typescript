# ContractABIType

A contract function or event argument type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type name (e.g., uint256, address, string). | [default to undefined]
**size** | **number** | The size of the type in bits, if applicable. | [optional] [default to undefined]
**tupleElems** | [**Array&lt;ContractABIType&gt;**](ContractABIType.md) | For tuple types, the list of element types within the tuple. | [optional] [default to undefined]
**tupleRawNames** | **Array&lt;string&gt;** | For tuple types, the original names of the tuple elements as defined in the contract. | [optional] [default to undefined]
**elem** | [**ContractABIType**](ContractABIType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ContractABIType } from '@curvegrid/multibaas-sdk';

const instance: ContractABIType = {
    type,
    size,
    tupleElems,
    tupleRawNames,
    elem,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
