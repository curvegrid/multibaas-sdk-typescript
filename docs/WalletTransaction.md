# WalletTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tx** | [**Transaction**](Transaction.md) |  | [default to undefined]
**status** | [**TransactionStatus**](TransactionStatus.md) |  | [default to undefined]
**from** | **string** | An ethereum address. | [default to undefined]
**resubmissionAttempts** | **number** | The total number of resubmission attempts. | [default to undefined]
**successfulResubmissions** | **number** | The total number of successful resubmission (added into the transaction pool). | [default to undefined]
**createdAt** | **string** | The time the transaction was created. | [default to undefined]
**updatedAt** | **string** | The time the transaction was last updated. | [default to undefined]
**failed** | **boolean** | Whether the transaction failed when it was included in a block. | [optional] [default to undefined]
**blockNumber** | **number** | The block number that the transaction was included in. | [optional] [default to undefined]
**blockHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [optional] [default to undefined]

## Example

```typescript
import { WalletTransaction } from '@curvegrid/multibaas-sdk';

const instance: WalletTransaction = {
    tx,
    status,
    from,
    resubmissionAttempts,
    successfulResubmissions,
    createdAt,
    updatedAt,
    failed,
    blockNumber,
    blockHash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
