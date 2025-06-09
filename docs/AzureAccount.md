# AzureAccount

An Azure account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | An alias to easily identify and reference the entity in subsequent requests. | [default to undefined]
**clientID** | **string** | The Application ID that will be accessing the Key Vault. | [default to undefined]
**clientSecret** | **string** | The application’s secret key that you generate when you first register the application in Azure. | [default to undefined]
**tenantID** | **string** | Also known as Directory ID. | [default to undefined]
**subscriptionID** | **string** | The ID linked to your subscription to Azure services. | [default to undefined]
**baseGroupName** | **string** | The Resource Group Name for the resource being accessed. | [default to undefined]
**id** | **number** |  | [default to undefined]

## Example

```typescript
import { AzureAccount } from '@curvegrid/multibaas-sdk';

const instance: AzureAccount = {
    label,
    clientID,
    clientSecret,
    tenantID,
    subscriptionID,
    baseGroupName,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
