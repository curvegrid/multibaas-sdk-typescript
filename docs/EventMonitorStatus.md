# EventMonitorStatus

Status of an Event Monitor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contractId** | **number** |  | [optional] [default to undefined]
**addressId** | **number** |  | [optional] [default to undefined]
**isProcessingPastLogs** | **boolean** |  | [default to undefined]
**idealBlockRange** | **number** |  | [optional] [default to undefined]
**latestBlockNumber** | **number** |  | [default to undefined]
**latestBlockHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**startBlockNumber** | **number** |  | [default to undefined]
**startBlockHash** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { EventMonitorStatus } from '@curvegrid/multibaas-sdk';

const instance: EventMonitorStatus = {
    contractId,
    addressId,
    isProcessingPastLogs,
    idealBlockRange,
    latestBlockNumber,
    latestBlockHash,
    startBlockNumber,
    startBlockHash,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
