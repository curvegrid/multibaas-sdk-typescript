# ContractABIEvent

A contract event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The keccak256 hash as a hex string of 256 bits. | [default to undefined]
**name** | **string** |  | [default to undefined]
**signature** | **string** |  | [default to undefined]
**anonymous** | **boolean** |  | [default to undefined]
**inputs** | [**Array&lt;ContractABIEventArgument&gt;**](ContractABIEventArgument.md) | List of contract event\&#39;s input arguments. | [default to undefined]
**notes** | **string** | The developer documentation. | [default to undefined]
**description** | **string** | The user documentation. | [default to undefined]

## Example

```typescript
import { ContractABIEvent } from '@curvegrid/multibaas-sdk';

const instance: ContractABIEvent = {
    id,
    name,
    signature,
    anonymous,
    inputs,
    notes,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
