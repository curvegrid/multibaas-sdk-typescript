# ContractOverview

A contract overview.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | An alias to easily identify and reference the entity in subsequent requests. | [default to undefined]
**contractName** | **string** | The name of the contract in MultiBaas. | [default to undefined]
**version** | **string** | The version of the contract in MultiBaas. | [default to undefined]
**isFavorite** | **boolean** | Whether the user has marked this contract as a favorite. | [optional] [default to undefined]
**deployable** | **boolean** | Whether this contract has deployable bytecode and can be deployed to the blockchain. | [default to undefined]
**instances** | [**Array&lt;ContractInstance&gt;**](ContractInstance.md) | List of addresses where this contract has been deployed and linked. | [default to undefined]

## Example

```typescript
import { ContractOverview } from '@curvegrid/multibaas-sdk';

const instance: ContractOverview = {
    label,
    contractName,
    version,
    isFavorite,
    deployable,
    instances,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
