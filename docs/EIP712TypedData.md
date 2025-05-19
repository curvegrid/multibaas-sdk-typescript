# EIP712TypedData

EIP-712 structured typed data object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**types** | [**EIP712Types**](EIP712Types.md) |  | [default to undefined]
**primaryType** | **string** | The root type of the message object. Must correspond to a key in the &#x60;types&#x60; object. | [default to undefined]
**domain** | [**EIP712Domain**](EIP712Domain.md) |  | [default to undefined]
**message** | **object** | The actual data, conforming to the &#x60;primaryType&#x60; definition in &#x60;types&#x60;. | [default to undefined]

## Example

```typescript
import { EIP712TypedData } from '@curvegrid/multibaas-sdk';

const instance: EIP712TypedData = {
    types,
    primaryType,
    domain,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
