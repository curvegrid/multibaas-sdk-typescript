# ContractABIType

A contract function or event argument type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**size** | **number** |  | [optional] [default to undefined]
**tupleElems** | [**Array&lt;ContractABIType&gt;**](ContractABIType.md) |  | [optional] [default to undefined]
**tupleRawNames** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
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
