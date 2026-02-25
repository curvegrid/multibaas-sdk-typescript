# ContractABI

The contract ABI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constructor** | [**ContractABIMethod**](ContractABIMethod.md) |  | [default to undefined]
**methods** | [**{ [key: string]: ContractABIMethod; }**](ContractABIMethod.md) | A mapping of function signatures to their method definitions. | [default to undefined]
**events** | [**{ [key: string]: ContractABIEvent; }**](ContractABIEvent.md) | A mapping of event signatures to their event definitions. | [default to undefined]
**errors** | [**{ [key: string]: ContractABIError; }**](ContractABIError.md) | A mapping of error signatures to their error definitions. | [optional] [default to undefined]
**fallback** | [**ContractABIMethod**](ContractABIMethod.md) |  | [default to undefined]
**receive** | [**ContractABIMethod**](ContractABIMethod.md) |  | [default to undefined]

## Example

```typescript
import { ContractABI } from '@curvegrid/multibaas-sdk';

const instance: ContractABI = {
    constructor,
    methods,
    events,
    errors,
    fallback,
    receive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
