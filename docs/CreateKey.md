# CreateKey

Create Key request data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientID** | **string** | The Application ID that will be accessing the Key Vault. | [default to undefined]
**keyName** | **string** | The name of the key. | [default to undefined]
**vaultName** | **string** | The name given to the vault your key is stored in. | [default to undefined]
**useHardwareModule** | **boolean** |  | [default to undefined]

## Example

```typescript
import { CreateKey } from '@curvegrid/multibaas-sdk';

const instance: CreateKey = {
    clientID,
    keyName,
    vaultName,
    useHardwareModule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
