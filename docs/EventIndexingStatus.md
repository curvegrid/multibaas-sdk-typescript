# EventIndexingStatus

The status for a contract\'s event indexing at a specific address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isProcessingPastLogs** | **boolean** | When true, the event indexer is syncing historical events from past blocks in order to catch up to the current state. | [default to undefined]
**latestBlockNumber** | **number** | The most recent block number that has been processed for event indexing. | [default to undefined]
**latestBlockHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**startBlockNumber** | **number** | The block number from which event indexing began. | [default to undefined]
**startBlockHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**updatedAt** | **string** | The timestamp of the last update to the indexing status. | [default to undefined]

## Example

```typescript
import { EventIndexingStatus } from '@curvegrid/multibaas-sdk';

const instance: EventIndexingStatus = {
    isProcessingPastLogs,
    latestBlockNumber,
    latestBlockHash,
    startBlockNumber,
    startBlockHash,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
