# ContractLookup

The contract lookup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | An ethereum address. | [default to undefined]
**name** | **string** | The name of the contract. | [optional] [default to undefined]
**abi** | **string** | The contract ABI JSON string. | [default to undefined]
**bytecode** | **string** | The smart-contract bytecode. | [optional] [default to undefined]
**source** | **string** | The contract\&#39;s source code. | [optional] [default to undefined]
**userdoc** | **string** | The user documentation JSON string. | [optional] [default to undefined]
**devdoc** | **string** | The developer documentation JSON string. | [optional] [default to undefined]
**verified** | **boolean** | Indicates whether the contract has been verified. | [default to undefined]
**verifiedSource** | **string** | The name of the service that provided the contract verification. | [optional] [default to undefined]
**verifiedLink** | **string** | The URL to the contract\&#39;s verification details on the verification service. | [optional] [default to undefined]
**proxy** | **boolean** | Indicates whether the contract is a proxy contract. | [default to undefined]

## Example

```typescript
import { ContractLookup } from '@curvegrid/multibaas-sdk';

const instance: ContractLookup = {
    address,
    name,
    abi,
    bytecode,
    source,
    userdoc,
    devdoc,
    verified,
    verifiedSource,
    verifiedLink,
    proxy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
