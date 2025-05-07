# SetCodeAuthorization

Authorization data for setCode operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chainId** | **string** | A hex string. | [default to undefined]
**address** | **string** | An ethereum address. | [default to undefined]
**nonce** | **string** | A hex string. | [default to undefined]
**yParity** | **string** | A hex string. | [default to undefined]
**r** | **string** | A hex string. | [default to undefined]
**s** | **string** | A hex string. | [default to undefined]

## Example

```typescript
import { SetCodeAuthorization } from '@curvegrid/multibaas-sdk';

const instance: SetCodeAuthorization = {
    chainId,
    address,
    nonce,
    yParity,
    r,
    s,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
