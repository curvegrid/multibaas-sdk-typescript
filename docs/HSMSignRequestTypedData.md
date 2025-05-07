# HSMSignRequestTypedData

Request to sign typed data using a cloud wallet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **string** | The signing method to use. | [default to undefined]
**address** | **string** | An ethereum address. | [default to undefined]
**data** | [**EIP712TypedData**](EIP712TypedData.md) |  | [default to undefined]

## Example

```typescript
import { HSMSignRequestTypedData } from '@curvegrid/multibaas-sdk';

const instance: HSMSignRequestTypedData = {
    method,
    address,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
