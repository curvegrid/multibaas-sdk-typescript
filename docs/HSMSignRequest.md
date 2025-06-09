# HSMSignRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **string** | The signing method to use. | [default to undefined]
**address** | **string** | An ethereum address. | [default to undefined]
**data** | [**EIP712TypedData**](EIP712TypedData.md) |  | [default to undefined]
**chainId** | [**HSMSignRequestPersonalSignChainId**](HSMSignRequestPersonalSignChainId.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HSMSignRequest } from '@curvegrid/multibaas-sdk';

const instance: HSMSignRequest = {
    method,
    address,
    data,
    chainId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
