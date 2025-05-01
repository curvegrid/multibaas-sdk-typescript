# ContractABIError

A contract error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**name** | **string** |  | [default to undefined]
**signature** | **string** |  | [default to undefined]
**inputs** | [**Array&lt;ContractABIErrorArgument&gt;**](ContractABIErrorArgument.md) | List of contract event\&#39;s input arguments. | [default to undefined]
**notes** | **string** | The developer documentation. | [optional] [default to undefined]
**description** | **string** | The user documentation. | [optional] [default to undefined]

## Example

```typescript
import { ContractABIError } from '@curvegrid/multibaas-sdk';

const instance: ContractABIError = {
    id,
    name,
    signature,
    inputs,
    notes,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
