# ChainStatus

The status of the Chain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockNumber** | **number** |  | [default to undefined]
**version** | **string** | The client version for this chain node. | [default to undefined]
**chainID** | **number** |  | [default to undefined]
**networkID** | **number** |  | [default to undefined]
**baseFee** | **string** | The current base fee (only available for chains that support EIP-1559). | [optional] [default to undefined]

## Example

```typescript
import { ChainStatus } from '@curvegrid/multibaas-sdk';

const instance: ChainStatus = {
    blockNumber,
    version,
    chainID,
    networkID,
    baseFee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
