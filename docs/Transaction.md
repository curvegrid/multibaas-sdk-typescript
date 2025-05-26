# Transaction

A transaction from the Ethereum Blockchain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | A hex string. | [default to undefined]
**chainId** | **string** | A hex string or null. | [optional] [default to undefined]
**nonce** | **string** | A hex string. | [default to undefined]
**to** | **string** | An ethereum address. | [default to undefined]
**from** | **string** | An ethereum address. | [optional] [default to undefined]
**gas** | **string** | A hex string. | [default to undefined]
**gasPrice** | **string** | A hex string or null. | [optional] [default to undefined]
**maxPriorityFeePerGas** | **string** | A hex string or null. | [optional] [default to undefined]
**maxFeePerGas** | **string** | A hex string or null. | [optional] [default to undefined]
**maxFeePerBlobGas** | **string** | A hex string or null. | [optional] [default to undefined]
**value** | **string** | A hex string or null. | [default to undefined]
**input** | **string** | A hex string. | [default to undefined]
**accessList** | [**Array&lt;AccessTuple&gt;**](AccessTuple.md) |  | [optional] [default to undefined]
**blobVersionedHashes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**authorizationList** | [**Array&lt;SetCodeAuthorization&gt;**](SetCodeAuthorization.md) |  | [optional] [default to undefined]
**v** | **string** | A hex string. | [default to undefined]
**r** | **string** | A hex string. | [default to undefined]
**s** | **string** | A hex string. | [default to undefined]
**yParity** | **string** | A hex string or null. | [optional] [default to undefined]
**blobs** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**commitments** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**proofs** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**hash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]

## Example

```typescript
import { Transaction } from '@curvegrid/multibaas-sdk';

const instance: Transaction = {
    type,
    chainId,
    nonce,
    to,
    from,
    gas,
    gasPrice,
    maxPriorityFeePerGas,
    maxFeePerGas,
    maxFeePerBlobGas,
    value,
    input,
    accessList,
    blobVersionedHashes,
    authorizationList,
    v,
    r,
    s,
    yParity,
    blobs,
    commitments,
    proofs,
    hash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
