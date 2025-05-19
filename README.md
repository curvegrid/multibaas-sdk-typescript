## @curvegrid/multibaas-sdk@1.0.4

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @curvegrid/multibaas-sdk@1.0.4 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://your_deployment.multibaas.com/api/v0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AddressesApi* | [**deleteAddress**](docs/AddressesApi.md#deleteaddress) | **DELETE** /chains/{chain}/addresses/{address-or-alias} | Delete address
*AddressesApi* | [**getAddress**](docs/AddressesApi.md#getaddress) | **GET** /chains/{chain}/addresses/{address-or-alias} | Get address
*AddressesApi* | [**listAddresses**](docs/AddressesApi.md#listaddresses) | **GET** /chains/{chain}/addresses | List addresses
*AddressesApi* | [**setAddress**](docs/AddressesApi.md#setaddress) | **POST** /chains/{chain}/addresses | Create or update address
*AdminApi* | [**acceptInvite**](docs/AdminApi.md#acceptinvite) | **POST** /invites/{inviteID} | Accept invite
*AdminApi* | [**addCorsOrigin**](docs/AdminApi.md#addcorsorigin) | **POST** /cors | Add CORS origin
*AdminApi* | [**addGroupApiKey**](docs/AdminApi.md#addgroupapikey) | **PUT** /groups/{groupID}/api_keys/{apiKeyID} | Add API key to group
*AdminApi* | [**addGroupRole**](docs/AdminApi.md#addgrouprole) | **PUT** /groups/{groupID}/roles/{roleShortName} | Add role to group
*AdminApi* | [**addGroupUser**](docs/AdminApi.md#addgroupuser) | **PUT** /groups/{groupID}/users/{userID} | Add user to group
*AdminApi* | [**checkInvite**](docs/AdminApi.md#checkinvite) | **GET** /invites/{inviteID} | Check invite
*AdminApi* | [**createApiKey**](docs/AdminApi.md#createapikey) | **POST** /api_keys | Create API key
*AdminApi* | [**deleteApiKey**](docs/AdminApi.md#deleteapikey) | **DELETE** /api_keys/{apiKeyID} | Delete API key
*AdminApi* | [**deleteUser**](docs/AdminApi.md#deleteuser) | **DELETE** /users/{userID} | Delete user
*AdminApi* | [**getApiKey**](docs/AdminApi.md#getapikey) | **GET** /api_keys/{apiKeyID} | Get API Key
*AdminApi* | [**inviteUser**](docs/AdminApi.md#inviteuser) | **POST** /invites | Invite user
*AdminApi* | [**listApiKeys**](docs/AdminApi.md#listapikeys) | **GET** /api_keys | List API keys
*AdminApi* | [**listAuditLogs**](docs/AdminApi.md#listauditlogs) | **GET** /systemactivities | List audit logs
*AdminApi* | [**listCorsOrigins**](docs/AdminApi.md#listcorsorigins) | **GET** /cors | List CORS origins
*AdminApi* | [**listGroups**](docs/AdminApi.md#listgroups) | **GET** /groups | List groups
*AdminApi* | [**listUserSigners**](docs/AdminApi.md#listusersigners) | **GET** /users/{userID}/signers | List user signers
*AdminApi* | [**listUsers**](docs/AdminApi.md#listusers) | **GET** /users | List users
*AdminApi* | [**removeCorsOrigin**](docs/AdminApi.md#removecorsorigin) | **DELETE** /cors/{originID} | Remove CORS Origin
*AdminApi* | [**removeGroupApiKey**](docs/AdminApi.md#removegroupapikey) | **DELETE** /groups/{groupID}/api_keys/{apiKeyID} | Remove API key from group
*AdminApi* | [**removeGroupRole**](docs/AdminApi.md#removegrouprole) | **DELETE** /groups/{groupID}/roles/{roleShortName} | Remove role from group
*AdminApi* | [**removeGroupUser**](docs/AdminApi.md#removegroupuser) | **DELETE** /groups/{groupID}/users/{userID} | Remove user from group
*AdminApi* | [**removeUserSignerCloudWallet**](docs/AdminApi.md#removeusersignercloudwallet) | **DELETE** /users/{userID}/cloudwallets/{wallet_address} | Remove user cloud wallet signer
*AdminApi* | [**removeUserSignerSafeAccount**](docs/AdminApi.md#removeusersignersafeaccount) | **DELETE** /users/{userID}/safeaccounts/{wallet_address} | Remove user safe account signer
*AdminApi* | [**removeUserSignerWeb3Wallet**](docs/AdminApi.md#removeusersignerweb3wallet) | **DELETE** /users/{userID}/web3wallets/{wallet_address} | Remove user web3 wallet signer
*AdminApi* | [**setUserSignerCloudWallet**](docs/AdminApi.md#setusersignercloudwallet) | **PUT** /users/{userID}/cloudwallets/{wallet_address} | Add or update user cloud wallet signer
*AdminApi* | [**setUserSignerSafeAccount**](docs/AdminApi.md#setusersignersafeaccount) | **PUT** /users/{userID}/safeaccounts/{wallet_address} | Add or update user safe account signer
*AdminApi* | [**setUserSignerWeb3Wallet**](docs/AdminApi.md#setusersignerweb3wallet) | **PUT** /users/{userID}/web3wallets/{wallet_address} | Add or update user web3 wallet signer
*AdminApi* | [**updateApiKey**](docs/AdminApi.md#updateapikey) | **PUT** /api_keys/{apiKeyID} | Update API key
*ChainsApi* | [**getBlock**](docs/ChainsApi.md#getblock) | **GET** /chains/{chain}/blocks/{block} | Get a block
*ChainsApi* | [**getChainStatus**](docs/ChainsApi.md#getchainstatus) | **GET** /chains/{chain}/status | Get chain status
*ChainsApi* | [**getTransaction**](docs/ChainsApi.md#gettransaction) | **GET** /chains/{chain}/transactions/{hash} | Get transaction
*ChainsApi* | [**getTransactionReceipt**](docs/ChainsApi.md#gettransactionreceipt) | **GET** /chains/{chain}/transactions/receipt/{hash} | Get transaction receipt
*ChainsApi* | [**submitSignedTransaction**](docs/ChainsApi.md#submitsignedtransaction) | **POST** /chains/{chain}/transactions/submit | Submit signed transaction
*ChainsApi* | [**transferEth**](docs/ChainsApi.md#transfereth) | **POST** /chains/{chain}/transfers | Transfer ETH
*ContractsApi* | [**callContractFunction**](docs/ContractsApi.md#callcontractfunction) | **POST** /chains/{chain}/addresses/{address-or-alias}/contracts/{contract}/methods/{method} | Call a contract function
*ContractsApi* | [**createContract**](docs/ContractsApi.md#createcontract) | **POST** /contracts/{contract} | Create a contract
*ContractsApi* | [**createContracts**](docs/ContractsApi.md#createcontracts) | **POST** /contracts | Create multiple contracts
*ContractsApi* | [**deleteContract**](docs/ContractsApi.md#deletecontract) | **DELETE** /contracts/{contract} | Delete a contract
*ContractsApi* | [**deleteContractVersion**](docs/ContractsApi.md#deletecontractversion) | **DELETE** /contracts/{contract}/{version} | Delete a contract version
*ContractsApi* | [**deployContract**](docs/ContractsApi.md#deploycontract) | **POST** /contracts/{contract}/deploy | Deploy a contract
*ContractsApi* | [**deployContractVersion**](docs/ContractsApi.md#deploycontractversion) | **POST** /contracts/{contract}/{version}/deploy | Deploy a contract version
*ContractsApi* | [**getContract**](docs/ContractsApi.md#getcontract) | **GET** /contracts/{contract} | Get a contract
*ContractsApi* | [**getContractVersion**](docs/ContractsApi.md#getcontractversion) | **GET** /contracts/{contract}/{version} | Get a contract version
*ContractsApi* | [**getContractVersions**](docs/ContractsApi.md#getcontractversions) | **GET** /contracts/{contract}/all | Get all contract versions
*ContractsApi* | [**getEventMonitorStatus**](docs/ContractsApi.md#geteventmonitorstatus) | **GET** /chains/{chain}/addresses/{address-or-alias}/contracts/{contract}/status | Get event monitor status
*ContractsApi* | [**getEventTypeConversions**](docs/ContractsApi.md#geteventtypeconversions) | **GET** /contracts/{contract}/{version}/events/{event} | Get event type conversions
*ContractsApi* | [**getFunctionTypeConversions**](docs/ContractsApi.md#getfunctiontypeconversions) | **GET** /contracts/{contract}/{version}/methods/{method} | Get function type conversions
*ContractsApi* | [**linkAddressContract**](docs/ContractsApi.md#linkaddresscontract) | **POST** /chains/{chain}/addresses/{address-or-alias}/contracts | Link address and contract
*ContractsApi* | [**listContractVersions**](docs/ContractsApi.md#listcontractversions) | **GET** /contracts/{contract}/versions | List all contract versions
*ContractsApi* | [**listContracts**](docs/ContractsApi.md#listcontracts) | **GET** /contracts | List contracts
*ContractsApi* | [**setEventTypeConversions**](docs/ContractsApi.md#seteventtypeconversions) | **POST** /contracts/{contract}/{version}/events/{event} | Set event type conversions
*ContractsApi* | [**setFunctionTypeConversions**](docs/ContractsApi.md#setfunctiontypeconversions) | **POST** /contracts/{contract}/{version}/methods/{method} | Set function type conversions
*ContractsApi* | [**unlinkAddressContract**](docs/ContractsApi.md#unlinkaddresscontract) | **DELETE** /chains/{chain}/addresses/{address-or-alias}/contracts/{contract} | Unlink address and contract
*EventQueriesApi* | [**countEventQueryRecords**](docs/EventQueriesApi.md#counteventqueryrecords) | **GET** /queries/{event_query}/count | Count event query records
*EventQueriesApi* | [**deleteEventQuery**](docs/EventQueriesApi.md#deleteeventquery) | **DELETE** /queries/{event_query} | Delete event query
*EventQueriesApi* | [**executeArbitraryEventQuery**](docs/EventQueriesApi.md#executearbitraryeventquery) | **POST** /queries | Execute arbitrary event query
*EventQueriesApi* | [**executeEventQuery**](docs/EventQueriesApi.md#executeeventquery) | **GET** /queries/{event_query}/results | Execute event query
*EventQueriesApi* | [**getEventQuery**](docs/EventQueriesApi.md#geteventquery) | **GET** /queries/{event_query} | Get event query
*EventQueriesApi* | [**listEventQueries**](docs/EventQueriesApi.md#listeventqueries) | **GET** /queries | List event queries
*EventQueriesApi* | [**setEventQuery**](docs/EventQueriesApi.md#seteventquery) | **PUT** /queries/{event_query} | Create or update event query
*EventsApi* | [**getEventCount**](docs/EventsApi.md#geteventcount) | **GET** /events/count | Get event count
*EventsApi* | [**listEvents**](docs/EventsApi.md#listevents) | **GET** /events | List events
*HsmApi* | [**addHsmConfig**](docs/HsmApi.md#addhsmconfig) | **POST** /hsm/config | Add HSM config
*HsmApi* | [**addHsmKey**](docs/HsmApi.md#addhsmkey) | **POST** /hsm/key | Add HSM key
*HsmApi* | [**createHsmKey**](docs/HsmApi.md#createhsmkey) | **POST** /hsm/key/new | Create HSM key
*HsmApi* | [**listHsm**](docs/HsmApi.md#listhsm) | **GET** /hsm | List HSM configs and wallets
*HsmApi* | [**listHsmWallets**](docs/HsmApi.md#listhsmwallets) | **GET** /hsm/wallets | List HSM wallets
*HsmApi* | [**removeHsmConfig**](docs/HsmApi.md#removehsmconfig) | **DELETE** /hsm/config/{client_id} | Remove HSM config
*HsmApi* | [**removeHsmKey**](docs/HsmApi.md#removehsmkey) | **DELETE** /hsm/key/{wallet_address} | Remove HSM key
*HsmApi* | [**setLocalNonce**](docs/HsmApi.md#setlocalnonce) | **POST** /chains/{chain}/hsm/nonce/{wallet_address} | Set local nonce
*HsmApi* | [**signAndSubmitTransaction**](docs/HsmApi.md#signandsubmittransaction) | **POST** /chains/{chain}/hsm/submit | Sign and submit transaction
*HsmApi* | [**signData**](docs/HsmApi.md#signdata) | **POST** /chains/{chain}/hsm/sign | Sign data
*TxmApi* | [**cancelTransaction**](docs/TxmApi.md#canceltransaction) | **POST** /chains/{chain}/txm/{wallet_address}/nonce/{nonce}/cancel | Cancel transaction
*TxmApi* | [**countWalletTransactions**](docs/TxmApi.md#countwallettransactions) | **GET** /chains/{chain}/txm/{wallet_address}/count | Count all transactions for a wallet
*TxmApi* | [**listWalletTransactions**](docs/TxmApi.md#listwallettransactions) | **GET** /chains/{chain}/txm/{wallet_address} | List transactions for a wallet
*TxmApi* | [**speedUpTransaction**](docs/TxmApi.md#speeduptransaction) | **POST** /chains/{chain}/txm/{wallet_address}/nonce/{nonce}/speed_up | Speed up transaction
*WebhooksApi* | [**countWebhookEvents**](docs/WebhooksApi.md#countwebhookevents) | **GET** /webhooks/{webhookID}/events/count | Count webhook events
*WebhooksApi* | [**countWebhooks**](docs/WebhooksApi.md#countwebhooks) | **GET** /webhooks/count | Count webhooks
*WebhooksApi* | [**createWebhook**](docs/WebhooksApi.md#createwebhook) | **POST** /webhooks | Create webhook
*WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deletewebhook) | **DELETE** /webhooks/{webhookID} | Delete webhook
*WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getwebhook) | **GET** /webhooks/{webhookID} | Get webhook
*WebhooksApi* | [**listWebhookEvents**](docs/WebhooksApi.md#listwebhookevents) | **GET** /webhooks/{webhookID}/events | List webhook events
*WebhooksApi* | [**listWebhooks**](docs/WebhooksApi.md#listwebhooks) | **GET** /webhooks | List webhooks
*WebhooksApi* | [**updateWebhook**](docs/WebhooksApi.md#updatewebhook) | **PUT** /webhooks/{webhookID} | Update webhook


### Documentation For Models

 - [APIKey](docs/APIKey.md)
 - [APIKeyWithSecret](docs/APIKeyWithSecret.md)
 - [AcceptInvite200Response](docs/AcceptInvite200Response.md)
 - [AcceptInviteRequest](docs/AcceptInviteRequest.md)
 - [AccessTuple](docs/AccessTuple.md)
 - [AddKey](docs/AddKey.md)
 - [Address](docs/Address.md)
 - [AddressAlias](docs/AddressAlias.md)
 - [AuditLog](docs/AuditLog.md)
 - [AzureAccount](docs/AzureAccount.md)
 - [AzureHardwareWallet](docs/AzureHardwareWallet.md)
 - [AzureWallet](docs/AzureWallet.md)
 - [BaseAPIKey](docs/BaseAPIKey.md)
 - [BaseAzureAccount](docs/BaseAzureAccount.md)
 - [BaseContract](docs/BaseContract.md)
 - [BaseResponse](docs/BaseResponse.md)
 - [BaseUser](docs/BaseUser.md)
 - [BaseWebhookEndpoint](docs/BaseWebhookEndpoint.md)
 - [Block](docs/Block.md)
 - [CORSOrigin](docs/CORSOrigin.md)
 - [CallContractFunction200Response](docs/CallContractFunction200Response.md)
 - [CallContractFunction200ResponseAllOfResult](docs/CallContractFunction200ResponseAllOfResult.md)
 - [ChainName](docs/ChainName.md)
 - [ChainStatus](docs/ChainStatus.md)
 - [CloudWalletTXToSign](docs/CloudWalletTXToSign.md)
 - [CloudWalletTXToSignTx](docs/CloudWalletTXToSignTx.md)
 - [Contract](docs/Contract.md)
 - [ContractABI](docs/ContractABI.md)
 - [ContractABIError](docs/ContractABIError.md)
 - [ContractABIErrorArgument](docs/ContractABIErrorArgument.md)
 - [ContractABIEvent](docs/ContractABIEvent.md)
 - [ContractABIEventArgument](docs/ContractABIEventArgument.md)
 - [ContractABIMethod](docs/ContractABIMethod.md)
 - [ContractABIMethod1](docs/ContractABIMethod1.md)
 - [ContractABIMethodArgument](docs/ContractABIMethodArgument.md)
 - [ContractABIType](docs/ContractABIType.md)
 - [ContractABITypeConversion](docs/ContractABITypeConversion.md)
 - [ContractEventOptions](docs/ContractEventOptions.md)
 - [ContractInformation](docs/ContractInformation.md)
 - [ContractInstance](docs/ContractInstance.md)
 - [ContractLookup](docs/ContractLookup.md)
 - [ContractMetadata](docs/ContractMetadata.md)
 - [ContractMethodInformation](docs/ContractMethodInformation.md)
 - [ContractMethodOptions](docs/ContractMethodOptions.md)
 - [ContractOverview](docs/ContractOverview.md)
 - [ContractParameter](docs/ContractParameter.md)
 - [CountEventQueryRecords200Response](docs/CountEventQueryRecords200Response.md)
 - [CountWalletTransactions200Response](docs/CountWalletTransactions200Response.md)
 - [CountWebhookEvents200Response](docs/CountWebhookEvents200Response.md)
 - [CountWebhooks200Response](docs/CountWebhooks200Response.md)
 - [CreateApiKey200Response](docs/CreateApiKey200Response.md)
 - [CreateApiKeyRequest](docs/CreateApiKeyRequest.md)
 - [CreateHsmKey200Response](docs/CreateHsmKey200Response.md)
 - [CreateKey](docs/CreateKey.md)
 - [CreateWebhook200Response](docs/CreateWebhook200Response.md)
 - [DeployContract200Response](docs/DeployContract200Response.md)
 - [DeployContractTransaction](docs/DeployContractTransaction.md)
 - [EIP712Domain](docs/EIP712Domain.md)
 - [EIP712DomainChainId](docs/EIP712DomainChainId.md)
 - [EIP712TypeEntry](docs/EIP712TypeEntry.md)
 - [EIP712TypedData](docs/EIP712TypedData.md)
 - [EIP712Types](docs/EIP712Types.md)
 - [Event](docs/Event.md)
 - [EventField](docs/EventField.md)
 - [EventInformation](docs/EventInformation.md)
 - [EventMonitorStatus](docs/EventMonitorStatus.md)
 - [EventQuery](docs/EventQuery.md)
 - [EventQueryEvent](docs/EventQueryEvent.md)
 - [EventQueryField](docs/EventQueryField.md)
 - [EventQueryFilter](docs/EventQueryFilter.md)
 - [EventQueryResults](docs/EventQueryResults.md)
 - [EventTypeConversionOptions](docs/EventTypeConversionOptions.md)
 - [ExecuteArbitraryEventQuery200Response](docs/ExecuteArbitraryEventQuery200Response.md)
 - [FieldType](docs/FieldType.md)
 - [GasParams](docs/GasParams.md)
 - [GetApiKey200Response](docs/GetApiKey200Response.md)
 - [GetBlock200Response](docs/GetBlock200Response.md)
 - [GetChainStatus200Response](docs/GetChainStatus200Response.md)
 - [GetContract200Response](docs/GetContract200Response.md)
 - [GetContractVersions200Response](docs/GetContractVersions200Response.md)
 - [GetEventCount200Response](docs/GetEventCount200Response.md)
 - [GetEventMonitorStatus200Response](docs/GetEventMonitorStatus200Response.md)
 - [GetEventQuery200Response](docs/GetEventQuery200Response.md)
 - [GetEventTypeConversions200Response](docs/GetEventTypeConversions200Response.md)
 - [GetFunctionTypeConversions200Response](docs/GetFunctionTypeConversions200Response.md)
 - [GetTransaction200Response](docs/GetTransaction200Response.md)
 - [GetTransactionReceipt200Response](docs/GetTransactionReceipt200Response.md)
 - [Group](docs/Group.md)
 - [HSMData](docs/HSMData.md)
 - [HSMSignRequest](docs/HSMSignRequest.md)
 - [HSMSignRequestPersonalSign](docs/HSMSignRequestPersonalSign.md)
 - [HSMSignRequestPersonalSignChainId](docs/HSMSignRequestPersonalSignChainId.md)
 - [HSMSignRequestTypedData](docs/HSMSignRequestTypedData.md)
 - [HSMSignResponse](docs/HSMSignResponse.md)
 - [Invite](docs/Invite.md)
 - [LinkAddressContractRequest](docs/LinkAddressContractRequest.md)
 - [ListAddresses200Response](docs/ListAddresses200Response.md)
 - [ListApiKeys200Response](docs/ListApiKeys200Response.md)
 - [ListAuditLogs200Response](docs/ListAuditLogs200Response.md)
 - [ListContractVersions200Response](docs/ListContractVersions200Response.md)
 - [ListContractVersions200ResponseAllOfResult](docs/ListContractVersions200ResponseAllOfResult.md)
 - [ListContracts200Response](docs/ListContracts200Response.md)
 - [ListCorsOrigins200Response](docs/ListCorsOrigins200Response.md)
 - [ListEventQueries200Response](docs/ListEventQueries200Response.md)
 - [ListEvents200Response](docs/ListEvents200Response.md)
 - [ListGroups200Response](docs/ListGroups200Response.md)
 - [ListHsm200Response](docs/ListHsm200Response.md)
 - [ListHsmWallets200Response](docs/ListHsmWallets200Response.md)
 - [ListUserSigners200Response](docs/ListUserSigners200Response.md)
 - [ListUsers200Response](docs/ListUsers200Response.md)
 - [ListWalletTransactions200Response](docs/ListWalletTransactions200Response.md)
 - [ListWebhookEvents200Response](docs/ListWebhookEvents200Response.md)
 - [ListWebhooks200Response](docs/ListWebhooks200Response.md)
 - [Log](docs/Log.md)
 - [MethodArg](docs/MethodArg.md)
 - [MethodCallPreviewResponse](docs/MethodCallPreviewResponse.md)
 - [MethodCallResponse](docs/MethodCallResponse.md)
 - [MethodTypeConversionOptions](docs/MethodTypeConversionOptions.md)
 - [ModelError](docs/ModelError.md)
 - [PostMethodArgs](docs/PostMethodArgs.md)
 - [PostMethodResponse](docs/PostMethodResponse.md)
 - [PreviewArgs](docs/PreviewArgs.md)
 - [Role](docs/Role.md)
 - [SavedEventQuery](docs/SavedEventQuery.md)
 - [SetAddress201Response](docs/SetAddress201Response.md)
 - [SetCodeAuthorization](docs/SetCodeAuthorization.md)
 - [SetNonceRequest](docs/SetNonceRequest.md)
 - [SignData200Response](docs/SignData200Response.md)
 - [SignedTransactionResponse](docs/SignedTransactionResponse.md)
 - [SignedTransactionSubmission](docs/SignedTransactionSubmission.md)
 - [SignerLabel](docs/SignerLabel.md)
 - [SignerWallet](docs/SignerWallet.md)
 - [StandaloneWallet](docs/StandaloneWallet.md)
 - [SubmitSignedTransaction200Response](docs/SubmitSignedTransaction200Response.md)
 - [Transaction](docs/Transaction.md)
 - [TransactionData](docs/TransactionData.md)
 - [TransactionInformation](docs/TransactionInformation.md)
 - [TransactionReceipt](docs/TransactionReceipt.md)
 - [TransactionReceiptData](docs/TransactionReceiptData.md)
 - [TransactionStatus](docs/TransactionStatus.md)
 - [TransactionToSign](docs/TransactionToSign.md)
 - [TransactionToSignResponse](docs/TransactionToSignResponse.md)
 - [TransactionToSignTx](docs/TransactionToSignTx.md)
 - [TransferEth200Response](docs/TransferEth200Response.md)
 - [TypeConversionOptions](docs/TypeConversionOptions.md)
 - [User](docs/User.md)
 - [WalletTransaction](docs/WalletTransaction.md)
 - [WebhookEndpoint](docs/WebhookEndpoint.md)
 - [WebhookEvent](docs/WebhookEvent.md)
 - [WebhookEventsType](docs/WebhookEventsType.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearer"></a>
### bearer

- **Type**: Bearer authentication (JWT)

<a id="cookie"></a>
### cookie

- **Type**: API key
- **API key parameter name**: token
- **Location**: 

