# Log

A contract log event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | An ethereum address. | [default to undefined]
**topics** | **Array&lt;string&gt;** | A list of topics provided by the contract. | [default to undefined]
**data** | **string** | A hex string. | [default to undefined]
**blockNumber** | **string** | A hex string. | [default to undefined]
**transactionHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**transactionIndex** | **string** | A hex string. | [default to undefined]
**blockHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**logIndex** | **string** | A hex string. | [default to undefined]
**removed** | **boolean** | True if this log was reverted due to a chain reorganization. | [default to undefined]

## Example

```typescript
import { Log } from '@curvegrid/multibaas-sdk';

const instance: Log = {
    address,
    topics,
    data,
    blockNumber,
    transactionHash,
    transactionIndex,
    blockHash,
    logIndex,
    removed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
