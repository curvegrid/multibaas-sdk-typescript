# Address

An address details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **string** | An alias to easily identify and reference addresses. | [default to undefined]
**address** | **string** | An ethereum address. | [default to undefined]
**balance** | **string** |  | [optional] [default to undefined]
**chain** | **string** |  | [default to undefined]
**modules** | **Array&lt;string&gt;** |  | [default to undefined]
**nonce** | **number** | The next transaction nonce for this address (obtained from the blockchain node). | [optional] [default to undefined]
**localNonce** | **number** | The next transaction nonce for this address when using the nonce management feature. | [optional] [default to undefined]
**codeAt** | **string** |  | [optional] [default to undefined]
**contracts** | [**Array&lt;ContractMetadata&gt;**](ContractMetadata.md) |  | [default to undefined]
**contractLookup** | [**Array&lt;ContractLookup&gt;**](ContractLookup.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Address } from '@curvegrid/multibaas-sdk';

const instance: Address = {
    alias,
    address,
    balance,
    chain,
    modules,
    nonce,
    localNonce,
    codeAt,
    contracts,
    contractLookup,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
