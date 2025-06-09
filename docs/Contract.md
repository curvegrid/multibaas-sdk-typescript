# Contract

A returned contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | An alias to easily identify and reference the entity in subsequent requests. | [default to undefined]
**contractName** | **string** | The name of the contract. | [default to undefined]
**version** | **string** | The contract version. | [default to undefined]
**bin** | **string** | The smart-contract bytecode. | [optional] [default to undefined]
**rawAbi** | **string** | The contract raw ABI JSON string. | [default to undefined]
**userDoc** | **string** | The user documentation JSON string. | [optional] [default to undefined]
**developerDoc** | **string** | The developer documentation JSON string. | [optional] [default to undefined]
**metadata** | **string** | The contract metadata JSON string. | [optional] [default to undefined]
**isFavorite** | **boolean** |  | [optional] [default to undefined]
**abi** | [**ContractABI**](ContractABI.md) |  | [default to undefined]
**instances** | [**Array&lt;ContractInstance&gt;**](ContractInstance.md) | List of the contract instances. | [optional] [default to undefined]

## Example

```typescript
import { Contract } from '@curvegrid/multibaas-sdk';

const instance: Contract = {
    label,
    contractName,
    version,
    bin,
    rawAbi,
    userDoc,
    developerDoc,
    metadata,
    isFavorite,
    abi,
    instances,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
