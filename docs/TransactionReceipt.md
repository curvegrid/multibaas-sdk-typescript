# TransactionReceipt

Record of the transaction\'s outcome.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TransactionReceiptData**](TransactionReceiptData.md) |  | [default to undefined]
**events** | [**Array&lt;EventInformation&gt;**](EventInformation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionReceipt } from '@curvegrid/multibaas-sdk';

const instance: TransactionReceipt = {
    data,
    events,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
