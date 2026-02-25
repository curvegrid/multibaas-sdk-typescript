# Address

An address details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **string** | An alias to easily identify and reference addresses. | [default to undefined]
**address** | **string** | An ethereum address. | [default to undefined]
**balance** | **string** | The balance of the address in wei. | [optional] [default to undefined]
**chain** | **string** | The network ID. | [default to undefined]
**nonce** | **number** | The next transaction nonce for this address (obtained from the blockchain node). | [optional] [default to undefined]
**localNonce** | **number** | The next transaction nonce for this address when using the nonce management feature. | [optional] [default to undefined]
**codeAt** | **string** | The bytecode deployed at this address. | [optional] [default to undefined]
**contracts** | [**Array&lt;ContractMetadata&gt;**](ContractMetadata.md) | The list of contracts linked to this address. | [default to undefined]
**contractLookup** | [**Array&lt;ContractLookup&gt;**](ContractLookup.md) | The list of contracts discovered at this address. | [optional] [default to undefined]

## Example

```typescript
import { Address } from '@curvegrid/multibaas-sdk';

const instance: Address = {
    alias,
    address,
    balance,
    chain,
    nonce,
    localNonce,
    codeAt,
    contracts,
    contractLookup,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
