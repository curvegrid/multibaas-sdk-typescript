# ContractABITypeConversion

Type conversion object for an input or an output of a function or an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **string** | The type conversion mode to apply: &#x60;decimals&#x60; (for converting integer wei values to fixed-point decimal strings, e.g., wei to ether), &#x60;timestamp&#x60; (converts Unix timestamp integers to RFC 3339 formatted time strings), &#x60;stringBytes&#x60; (converts byte arrays to UTF-8 strings), &#x60;base64Bytes&#x60; (converts byte arrays to base64-encoded strings). | [default to undefined]
**decimalsAbsolute** | **number** | The fixed number of decimal places to use for &#x60;decimals&#x60; mode conversion. Must be between 0-255. | [default to undefined]
**decimalsFunction** | **string** | The name of a contract function that dynamically determines decimal places for &#x60;decimals&#x60; mode conversion (e.g., &#x60;decimals()&#x60; for ERC-20 tokens). The function must take no parameters and return a uint value between 0-255. Mutually exclusive with &#x60;decimalsAbsolute&#x60;. | [default to undefined]

## Example

```typescript
import { ContractABITypeConversion } from '@curvegrid/multibaas-sdk';

const instance: ContractABITypeConversion = {
    mode,
    decimalsAbsolute,
    decimalsFunction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
