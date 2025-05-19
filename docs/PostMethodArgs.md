# PostMethodArgs

Arguments to be passed into a contract function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **string** |  | [optional] [default to undefined]
**args** | **Array&lt;any&gt;** | List of the function arguments. | [optional] [default to undefined]
**from** | **string** | An ethereum address. | [optional] [default to undefined]
**nonce** | **number** | Nonce to use for the transaction execution. | [optional] [default to undefined]
**gasPrice** | **number** | Gas price to use for the transaction execution. | [optional] [default to undefined]
**gasFeeCap** | **number** | Gas fee cap to use for the 1559 transaction execution. | [optional] [default to undefined]
**gasTipCap** | **number** | Gas priority fee cap to use for the 1559 transaction execution. | [optional] [default to undefined]
**gas** | **number** | Gas limit to set for the transaction execution. | [optional] [default to undefined]
**to** | **string** | An ethereum address. | [optional] [default to undefined]
**value** | **string** | Amount (in wei) to send with the transaction. | [optional] [default to undefined]
**signAndSubmit** | **boolean** | If the &#x60;from&#x60; address is an HSM address and this flag is set to &#x60;true&#x60;, the transaction will be automatically signed and submitted to the blockchain. | [optional] [default to false]
**nonceManagement** | **boolean** | If the &#x60;from&#x60; address is an HSM address and this flag is set to &#x60;true&#x60;, MultiBaas will keep track of the nonce and set it accordingly. This is particularly useful when submitting multiple transactions concurrently or in a very short period of time. If this flag is set to &#x60;true&#x60; and a &#x60;nonce&#x60; is provided, it will reset the nonce tracker to the given nonce (useful if the nonce tracker is out of sync). | [optional] [default to false]
**preEIP1559** | **boolean** | If set to &#x60;true&#x60;, forces a legacy type transaction. Otherwise an EIP-1559 transaction will created if the network supports it. | [optional] [default to false]
**signer** | **string** | An ethereum address. | [optional] [default to undefined]
**formatInts** | **string** | Mode to format integer outputs in the function call\&#39;s responses. There are 3 possible modes:   - &#x60;auto&#x60; (the default option), where number format is decided by its type:     - If the type has size at most 32 bits, then the number is returned verbatim.     - If the type has size larger than 32 bits, then the number is returned as a string.   - &#x60;as_numbers&#x60;, where all numbers are returned verbatim.   - &#x60;as_strings&#x60;, where all numbers are returned as strings.  | [optional] [default to 'auto']
**timestamp** | **string** | Call the function at a specific timestamp. Only available for read functions calls and if the &#x60;historical_blocks_feature&#x60; is enabled (see the plan endpoint). Mutually exclusive with the &#x60;blockNumber&#x60; parameter. | [optional] [default to undefined]
**blockNumber** | **string** | Call the function at a specific block. Only available for read functions calls and if the &#x60;historical_blocks_feature&#x60; is enabled (see the plan endpoint). Mutually exclusive with the &#x60;timestamp&#x60; parameter. | [optional] [default to undefined]
**contractOverride** | **boolean** | If set to true the given address and contract don\&#39;t need to be linked for the function to be called. | [optional] [default to undefined]
**preview** | [**PreviewArgs**](PreviewArgs.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PostMethodArgs } from '@curvegrid/multibaas-sdk';

const instance: PostMethodArgs = {
    signature,
    args,
    from,
    nonce,
    gasPrice,
    gasFeeCap,
    gasTipCap,
    gas,
    to,
    value,
    signAndSubmit,
    nonceManagement,
    preEIP1559,
    signer,
    formatInts,
    timestamp,
    blockNumber,
    contractOverride,
    preview,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
