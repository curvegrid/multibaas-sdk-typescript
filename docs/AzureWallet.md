# AzureWallet

An HSM Wallet returned when a new key is created

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyName** | **string** | The name of the key. | [default to undefined]
**keyVersion** | **string** | The version of the key. | [default to undefined]
**publicAddress** | **string** | An ethereum address. | [default to undefined]

## Example

```typescript
import { AzureWallet } from '@curvegrid/multibaas-sdk';

const instance: AzureWallet = {
    keyName,
    keyVersion,
    publicAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
