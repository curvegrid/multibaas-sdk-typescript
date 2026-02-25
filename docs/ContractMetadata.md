# ContractMetadata

Lightweight reference information for a contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | An alias to easily identify and reference the entity in subsequent requests. | [default to undefined]
**name** | **string** | The name of the contract in MultiBaas. | [default to undefined]
**version** | **string** | The version of the contract in MultiBaas. | [default to undefined]

## Example

```typescript
import { ContractMetadata } from '@curvegrid/multibaas-sdk';

const instance: ContractMetadata = {
    label,
    name,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
