[@ao-framework/serializer](../README.md) > ["assign"](../modules/_assign_.md) > [Assign](../modules/_assign_.assign.md)

# Module: Assign

Anything that has to do with assigning anything.

## Index

### Functions

* [namespaceToModels](_assign_.assign.md#namespacetomodels)

---

## Functions

<a id="namespacetomodels"></a>

###  namespaceToModels

▸ **namespaceToModels**(namespace: *`string`*, models: *[ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md)*): `void`

*Defined in [assign.ts:18](https://github.com/ao-framework/serializer/blob/da19b8f/src/assign.ts#L18)*

Since the constructor may be used in multiple instances of Serializer by another name, we need to assign a namespace with the value set to the same value as the key on the model collection

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| namespace | `string` |  \- |
| models | [ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md) |   |

**Returns:** `void`

___

