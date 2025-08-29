# AuthorizationExtraInfo

Additional information about any EIP-7702 authorizations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority** | **string** | An ethereum address. | [default to undefined]
**formatValid** | **boolean** | Indicates whether the format of the authorization is valid. | [default to undefined]
**notes** | **string** | Additional notes about the validity of the authorization. | [default to undefined]

## Example

```typescript
import { AuthorizationExtraInfo } from '@curvegrid/multibaas-sdk';

const instance: AuthorizationExtraInfo = {
    authority,
    formatValid,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
