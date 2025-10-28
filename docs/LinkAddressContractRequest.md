# LinkAddressContractRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | An alias to easily identify and reference the entity in subsequent requests. | [default to undefined]
**version** | **string** | The contract version. | [optional] [default to undefined]
**startingBlock** | **string** | The block number from which to start syncing events. The value can be &#x60;latest&#x60; for the latest block number, an absolute block number (e.g. &#x60;123&#x60; for the block number 123), or a relative block number (e.g. &#x60;-100&#x60; for 100 blocks before the latest block). If absent, the event monitor will be disabled for this contract and events won\&#39;t be synced. | [optional] [default to undefined]

## Example

```typescript
import { LinkAddressContractRequest } from '@curvegrid/multibaas-sdk';

const instance: LinkAddressContractRequest = {
    label,
    version,
    startingBlock,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
