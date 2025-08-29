# TransactionData

The transaction data returned from a call to get transaction by hash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Transaction**](Transaction.md) |  | [default to undefined]
**isPending** | **boolean** | Whether the transaction has been included yet. | [default to undefined]
**from** | **string** | An ethereum address. | [default to undefined]
**blockHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [optional] [default to undefined]
**blockNumber** | **string** | The transaction block number. | [optional] [default to undefined]
**contract** | [**ContractInformation**](ContractInformation.md) |  | [optional] [default to undefined]
**method** | [**ContractMethodInformation**](ContractMethodInformation.md) |  | [optional] [default to undefined]
**authorizationExtraInfo** | [**Array&lt;AuthorizationExtraInfo&gt;**](AuthorizationExtraInfo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionData } from '@curvegrid/multibaas-sdk';

const instance: TransactionData = {
    data,
    isPending,
    from,
    blockHash,
    blockNumber,
    contract,
    method,
    authorizationExtraInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
