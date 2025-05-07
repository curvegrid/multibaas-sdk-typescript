# Block

A block in the Ethereum blockchain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**difficulty** | **string** |  | [default to undefined]
**gasLimit** | **number** |  | [default to undefined]
**number** | **string** |  | [default to undefined]
**timestamp** | **number** |  | [default to undefined]
**transactions** | [**Array&lt;Transaction&gt;**](Transaction.md) |  | [default to undefined]
**receiptsRoot** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**parentHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**sha3Uncles** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**miner** | **string** | An ethereum address. | [default to undefined]
**stateRoot** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**transactionsRoot** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**logsBloom** | **string** | A hex string. | [default to undefined]
**gasUsed** | **number** |  | [default to undefined]
**nonce** | **string** | A hex string. | [default to undefined]
**mixHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**extraData** | **string** |  | [default to undefined]
**baseFeePerGas** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Block } from '@curvegrid/multibaas-sdk';

const instance: Block = {
    hash,
    difficulty,
    gasLimit,
    number,
    timestamp,
    transactions,
    receiptsRoot,
    parentHash,
    sha3Uncles,
    miner,
    stateRoot,
    transactionsRoot,
    logsBloom,
    gasUsed,
    nonce,
    mixHash,
    extraData,
    baseFeePerGas,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
