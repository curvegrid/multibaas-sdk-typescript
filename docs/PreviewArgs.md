# PreviewArgs

Ephemeral configuration for previewing the effect of a Type Conversion on a contract function call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputsOnly** | **boolean** | Only preview the effect of a Type Conversion on the inputs. Only applicable for write function calls, where the output is an unsigned transaction. | [default to undefined]
**inputs** | [**Array&lt;ContractABIMethodArgument&gt;**](ContractABIMethodArgument.md) | Type Conversion information for the function inputs. The number of inputs must match that of the actual function inputs. The parameter is a contract function argument where only the type conversion information is used. | [default to undefined]
**outputs** | [**Array&lt;ContractABIMethodArgument&gt;**](ContractABIMethodArgument.md) | Type Conversion information for the function outputs. The number of outputs must match that of the actual function outputs. The parameter is a contract function argument where only the type conversion information is used. | [default to undefined]

## Example

```typescript
import { PreviewArgs } from '@curvegrid/multibaas-sdk';

const instance: PreviewArgs = {
    inputsOnly,
    inputs,
    outputs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
