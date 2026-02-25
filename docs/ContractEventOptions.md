# ContractEventOptions

Type conversion options for an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **string** | The event signature in the format &#x60;EventName(type1,type2,...)&#x60;, for example foo(uint32,int256). | [optional] [default to undefined]
**inputs** | [**Array&lt;ContractParameter&gt;**](ContractParameter.md) | List of type conversion configurations for each event input parameter. | [default to undefined]

## Example

```typescript
import { ContractEventOptions } from '@curvegrid/multibaas-sdk';

const instance: ContractEventOptions = {
    signature,
    inputs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
