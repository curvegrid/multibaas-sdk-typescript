# SetNonceRequest

Request body representing a set local nonce request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nonce** | **number** | If nonce is specified the provided value is set, otherwise the value is read from the blockchain. | [optional] [default to undefined]

## Example

```typescript
import { SetNonceRequest } from '@curvegrid/multibaas-sdk';

const instance: SetNonceRequest = {
    nonce,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
