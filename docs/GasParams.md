# GasParams

Specify custom gas parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gasPrice** | **string** | Gas price to use for the cancel/resubmit. | [optional] [default to undefined]
**gasFeeCap** | **string** | Gas fee cap to use for the EIP-1559 cancel/resubmit. | [optional] [default to undefined]
**gasTipCap** | **string** | Gas priority fee cap to use for the EIP-1559 cancel/resubmit. | [optional] [default to undefined]
**gas** | **number** | Gas limit to set for the cancel/resubmit. | [optional] [default to undefined]

## Example

```typescript
import { GasParams } from '@curvegrid/multibaas-sdk';

const instance: GasParams = {
    gasPrice,
    gasFeeCap,
    gasTipCap,
    gas,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
