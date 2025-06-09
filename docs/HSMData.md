# HSMData

Response body for returning HSM Data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**AzureAccount**](AzureAccount.md) |  | [default to undefined]
**wallets** | [**Array&lt;AzureHardwareWallet&gt;**](AzureHardwareWallet.md) | An array of Azure Hardware Wallets. | [default to undefined]

## Example

```typescript
import { HSMData } from '@curvegrid/multibaas-sdk';

const instance: HSMData = {
    configuration,
    wallets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
