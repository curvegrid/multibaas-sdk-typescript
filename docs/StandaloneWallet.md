# StandaloneWallet

An object containing an HSM wallet\'s details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientID** | **string** | The Application ID that accesses the Key Vault. | [optional] [default to undefined]
**baseGroupName** | **string** | The Resource Group Name for the resource being accessed. | [default to undefined]
**vaultName** | **string** | The name given to the vault your key is stored in. | [optional] [default to undefined]
**keyName** | **string** | The name of the key. | [default to undefined]
**keyVersion** | **string** | The version of the key. | [optional] [default to undefined]
**publicAddress** | **string** | An ethereum address. | [default to undefined]

## Example

```typescript
import { StandaloneWallet } from '@curvegrid/multibaas-sdk';

const instance: StandaloneWallet = {
    clientID,
    baseGroupName,
    vaultName,
    keyName,
    keyVersion,
    publicAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
