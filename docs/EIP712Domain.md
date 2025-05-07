# EIP712Domain

The domain fields for EIP-712. All fields are optional per the specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Human-readable name of the signing domain. | [optional] [default to undefined]
**version** | **string** | Current major version of the signing domain. | [optional] [default to undefined]
**chainId** | [**EIP712DomainChainId**](EIP712DomainChainId.md) |  | [optional] [default to undefined]
**verifyingContract** | **string** | An ethereum address. | [optional] [default to undefined]
**salt** | **string** | A hex string. | [optional] [default to undefined]

## Example

```typescript
import { EIP712Domain } from '@curvegrid/multibaas-sdk';

const instance: EIP712Domain = {
    name,
    version,
    chainId,
    verifyingContract,
    salt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
