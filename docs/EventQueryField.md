# EventQueryField

A single event field\'s query information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**FieldType**](FieldType.md) |  | [default to undefined]
**name** | **string** | The field name. Either &#x60;name&#x60; or &#x60;inputIndex&#x60; is required if &#x60;fieldType &#x3D;&#x3D; \&quot;input\&quot;&#x60;. | [optional] [default to undefined]
**inputIndex** | **number** | The field\&#39;s index, can be used in place of &#x60;name&#x60;. | [optional] [default to undefined]
**alias** | **string** | The name that will be used to return the field. | [optional] [default to undefined]
**aggregator** | **string** | The type of aggregation to perform on the field. | [optional] [default to undefined]

## Example

```typescript
import { EventQueryField } from '@curvegrid/multibaas-sdk';

const instance: EventQueryField = {
    type,
    name,
    inputIndex,
    alias,
    aggregator,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
