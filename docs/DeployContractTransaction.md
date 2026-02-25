# DeployContractTransaction

The transaction returned when you deploy a contracts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tx** | [**TransactionToSignTx**](TransactionToSignTx.md) |  | [default to undefined]
**submitted** | **boolean** | Indicates whether the transaction has been submitted to the blockchain. | [default to undefined]
**deployAt** | **string** | The address where the contract will be deployed once the transaction is confirmed. | [optional] [default to undefined]
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
