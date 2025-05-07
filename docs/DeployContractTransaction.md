# DeployContractTransaction

The transaction returned when you deploy a contracts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tx** | [**TransactionToSignTx**](TransactionToSignTx.md) |  | [default to undefined]
**submitted** | **boolean** |  | [default to undefined]
**deployAt** | **string** |  | [optional] [default to undefined]
**label** | **string** | An alias to easily identify and reference the entity in subsequent requests. | [optional] [default to undefined]

## Example

```typescript
import { DeployContractTransaction } from '@curvegrid/multibaas-sdk';

const instance: DeployContractTransaction = {
    tx,
    submitted,
    deployAt,
    label,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
