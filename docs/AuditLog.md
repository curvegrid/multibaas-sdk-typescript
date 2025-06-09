# AuditLog

An audit log entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionByID** | **number** | The ID of the user who performed the action. | [default to undefined]
**actionOnID** | **number** | The ID of the user who was acted upon. | [optional] [default to undefined]
**actionByUserEmail** | **string** | The email of the user who performed the action. | [default to undefined]
**actionOnUserEmail** | **string** | The email of the user who was acted upon. | [optional] [default to undefined]
**type** | **string** | The type of action that was performed. | [default to undefined]
**createdAt** | **string** | The time the action was performed. | [default to undefined]
**activityData** | **object** | The data associated with the action. | [default to undefined]

## Example

```typescript
import { AuditLog } from '@curvegrid/multibaas-sdk';

const instance: AuditLog = {
    actionByID,
    actionOnID,
    actionByUserEmail,
    actionOnUserEmail,
    type,
    createdAt,
    activityData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
