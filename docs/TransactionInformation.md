# TransactionInformation

The transaction information returned as part of an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **string** | An ethereum address. | [default to undefined]
**txData** | **string** | A hex string. | [default to undefined]
**txHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**txIndexInBlock** | **number** | The location of the transaction in the block. | [default to undefined]
**blockHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**blockNumber** | **number** | The transaction block number. | [default to undefined]
**contract** | [**ContractInformation**](ContractInformation.md) |  | [default to undefined]
**method** | [**ContractMethodInformation**](ContractMethodInformation.md) |  | [default to undefined]

## Example

```typescript
import { TransactionInformation } from '@curvegrid/multibaas-sdk';

const instance: TransactionInformation = {
    from,
    txData,
    txHash,
    txIndexInBlock,
    blockHash,
    blockNumber,
    contract,
    method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
