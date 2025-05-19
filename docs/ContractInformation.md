# ContractInformation

The contract information within the event or transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | An ethereum address. | [default to undefined]
**addressAlias** | **string** | An alias to easily identify and reference addresses. | [default to undefined]
**name** | **string** | The name of the contract. | [default to undefined]
**label** | **string** | An alias to easily identify and reference the entity in subsequent requests. | [default to undefined]

## Example

```typescript
import { ContractInformation } from '@curvegrid/multibaas-sdk';

const instance: ContractInformation = {
    address,
    addressAlias,
    name,
    label,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
