# TransactionReceiptData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | A hex string. | [optional] [default to undefined]
**root** | **string** | A hex string. | [default to undefined]
**status** | **string** | A hex string. | [default to undefined]
**cumulativeGasUsed** | **string** | A hex string. | [default to undefined]
**logsBloom** | **string** | A hex string. | [default to undefined]
**logs** | [**Array&lt;Log&gt;**](Log.md) |  | [default to undefined]
**transactionHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**contractAddress** | **string** | An ethereum address. | [default to undefined]
**gasUsed** | **string** | A hex string. | [default to undefined]
**effectiveGasPrice** | **string** | A hex string. | [default to undefined]
**blockNumber** | **string** | A hex string. | [default to undefined]
**transactionIndex** | **string** | A hex string. | [default to undefined]
**blockHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]

## Example

```typescript
import { TransactionReceiptData } from '@curvegrid/multibaas-sdk';

const instance: TransactionReceiptData = {
    type,
    root,
    status,
    cumulativeGasUsed,
    logsBloom,
    logs,
    transactionHash,
    contractAddress,
    gasUsed,
    effectiveGasPrice,
    blockNumber,
    transactionIndex,
    blockHash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
