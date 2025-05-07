# EventQueryFilter

A event query filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule** | **string** | The rule type, can be omitted if this is the last filter to be applied. | [optional] [default to undefined]
**fieldType** | [**FieldType**](FieldType.md) |  | [optional] [default to undefined]
**inputIndex** | **number** | The field\&#39;s index, can be used in place of &#x60;name&#x60;. | [optional] [default to undefined]
**operator** | **string** | The operator on the filter. | [optional] [default to undefined]
**value** | **string** | The value to be compared with. | [optional] [default to undefined]
**children** | [**Array&lt;EventQueryFilter&gt;**](EventQueryFilter.md) | Other filters to be applied in succession with the rule specified. | [optional] [default to undefined]

## Example

```typescript
import { EventQueryFilter } from '@curvegrid/multibaas-sdk';

const instance: EventQueryFilter = {
    rule,
    fieldType,
    inputIndex,
    operator,
    value,
    children,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
