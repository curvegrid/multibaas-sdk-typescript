# AzureHardwareWallet

An HSM Wallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**azureAccountID** | **number** |  | [default to undefined]
**vaultName** | **string** | The name given to the vault your key is stored in. | [default to undefined]
**keyName** | **string** | The name of the key. | [default to undefined]
**keyVersion** | **string** | The version of the key. | [default to undefined]
**publicAddress** | **string** | An ethereum address. | [default to undefined]

## Example

```typescript
import { AzureHardwareWallet } from '@curvegrid/multibaas-sdk';

const instance: AzureHardwareWallet = {
    id,
    azureAccountID,
    vaultName,
    keyName,
    keyVersion,
    publicAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
