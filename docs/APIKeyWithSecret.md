# APIKeyWithSecret

A freshly created API key with its secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | An alias to easily identify and reference the entity in subsequent requests. | [default to undefined]
**id** | **number** |  | [default to undefined]
**createdAt** | **string** | The time the API key was created. | [default to undefined]
**lastUsedAt** | **string** | The time the API key was last used. | [optional] [default to undefined]
**createdBy** | **number** | The ID of the user that created the API key. | [default to undefined]
**signature** | **string** | The signature of the API key. | [default to undefined]
**key** | **string** | The secret key of the API key. | [default to undefined]

## Example

```typescript
import { APIKeyWithSecret } from '@curvegrid/multibaas-sdk';

const instance: APIKeyWithSecret = {
    label,
    id,
    createdAt,
    lastUsedAt,
    createdBy,
    signature,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
