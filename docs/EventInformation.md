# EventInformation

The event information returned as part of an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the event. | [default to undefined]
**signature** | **string** | The event signature. | [default to undefined]
**inputs** | [**Array&lt;EventField&gt;**](EventField.md) | The list of input arguments for the event. | [default to undefined]
**rawFields** | **string** | The raw output from an event. Omitted when returned as part of a transaction receipt. | [optional] [default to undefined]
**contract** | [**ContractInformation**](ContractInformation.md) |  | [default to undefined]
**indexInLog** | **number** | The event\&#39;s index in the log. | [default to undefined]

## Example

```typescript
import { EventInformation } from '@curvegrid/multibaas-sdk';

const instance: EventInformation = {
    name,
    signature,
    inputs,
    rawFields,
    contract,
    indexInLog,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
