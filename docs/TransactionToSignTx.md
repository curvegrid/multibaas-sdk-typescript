# TransactionToSignTx

An Ethereum transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nonce** | **number** | Sender account nonce of the transaction | [default to undefined]
**gasPrice** | **string** | Gas price of the transaction | [optional] [default to undefined]
**gasFeeCap** | **string** | Fee cap per gas of the transaction | [optional] [default to undefined]
**gasTipCap** | **string** | GasTipCap per gas of the transaction | [optional] [default to undefined]
**gas** | **number** | Gas limit of the transaction | [default to undefined]
**from** | **string** | An ethereum address. | [default to undefined]
**to** | **string** | An ethereum address. | [optional] [default to undefined]
**value** | **string** | Amount (in wei) to send with the transaction. | [default to undefined]
**data** | **string** | A hex string. | [default to undefined]
**hash** | **string** | The keccak256 hash as a hex string of 256 bits. | [optional] [default to undefined]
**type** | **number** | Transaction type | [default to undefined]

## Example

```typescript
import { TransactionToSignTx } from '@curvegrid/multibaas-sdk';

const instance: TransactionToSignTx = {
    nonce,
    gasPrice,
    gasFeeCap,
    gasTipCap,
    gas,
    from,
    to,
    value,
    data,
    hash,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
