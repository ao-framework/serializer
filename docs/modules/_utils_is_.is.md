[@ao-framework/serializer](../README.md) > ["utils/is"](../modules/_utils_is_.md) > [Is](../modules/_utils_is_.is.md)

# Module: Is

Handles assertions and a few standstills

## Index

### Functions

* [builtFromModel](_utils_is_.is.md#builtfrommodel)
* [date](_utils_is_.is.md#date)
* [everyPropertyConstructable](_utils_is_.is.md#everypropertyconstructable)
* [obj](_utils_is_.is.md#obj)

---

## Functions

<a id="builtfrommodel"></a>

###  builtFromModel

▸ **builtFromModel**(namespace: *`string`*, models: *[ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md)*, instance: *`object`*): `boolean`

*Defined in [utils/is.ts:54](https://github.com/ao-framework/serializer/blob/da19b8f/src/utils/is.ts#L54)*

Determines if an instance of an object was created using a model that its reference exists in our Serializer instance.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| namespace | `string` |  \- |
| models | [ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md) |  \- |
| instance | `object` |   |

**Returns:** `boolean`

___
<a id="date"></a>

###  date

▸ **date**(date: *`Date`*): `boolean`

*Defined in [utils/is.ts:25](https://github.com/ao-framework/serializer/blob/da19b8f/src/utils/is.ts#L25)*

Determines whether or not a variable is an instance of the Date object

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| date | `Date` |   |

**Returns:** `boolean`

___
<a id="everypropertyconstructable"></a>

###  everyPropertyConstructable

▸ **everyPropertyConstructable**(namespace: *`string`*, models: *[ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md)*): `void`

*Defined in [utils/is.ts:35](https://github.com/ao-framework/serializer/blob/da19b8f/src/utils/is.ts#L35)*

Blows and exception if the models object is not a perfect key value pair of constructables.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| namespace | `string` |  \- |
| models | [ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md) |   |

**Returns:** `void`

___
<a id="obj"></a>

###  obj

▸ **obj**(obj: *`object`*): `boolean`

*Defined in [utils/is.ts:15](https://github.com/ao-framework/serializer/blob/da19b8f/src/utils/is.ts#L15)*

Determines whether or not a variable is an object or not.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| obj | `object` |   |

**Returns:** `boolean`

___

