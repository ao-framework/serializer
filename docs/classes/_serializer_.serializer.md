[@ao-framework/serializer](../README.md) > ["serializer"](../modules/_serializer_.md) > [Serializer](../classes/_serializer_.serializer.md)

# Class: Serializer

Definition for the an instance of Serializer.

## Hierarchy

**Serializer**

## Index

### Constructors

* [constructor](_serializer_.serializer.md#constructor)

### Properties

* [models](_serializer_.serializer.md#models)
* [namespace](_serializer_.serializer.md#namespace)

### Methods

* [down](_serializer_.serializer.md#down)
* [up](_serializer_.serializer.md#up)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Serializer**(models?: *[ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md)*, namespace?: *`string`*): [Serializer](_serializer_.serializer.md)

*Defined in [serializer.ts:22](https://github.com/ao-framework/serializer/blob/0fbfd46/src/serializer.ts#L22)*

Creates an instance of Serializer

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` models | [ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md) |  {} |  Key, value pair of context for serialization. |
| `Default value` namespace | `string` | &quot;main&quot; |  the name for the instance of serializer |

**Returns:** [Serializer](_serializer_.serializer.md)

___

## Properties

<a id="models"></a>

### `<Private>` models

**● models**: *[ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md)*

*Defined in [serializer.ts:17](https://github.com/ao-framework/serializer/blob/0fbfd46/src/serializer.ts#L17)*

Holds context for custom types during serialization.

___
<a id="namespace"></a>

### `<Private>` namespace

**● namespace**: *`string`* = "@~serializer."

*Defined in [serializer.ts:22](https://github.com/ao-framework/serializer/blob/0fbfd46/src/serializer.ts#L22)*

the name for the instance of serializer

___

## Methods

<a id="down"></a>

###  down

▸ **down**(instance: *`any`*, spaces?: *`number`*): `string`

*Defined in [serializer.ts:48](https://github.com/ao-framework/serializer/blob/0fbfd46/src/serializer.ts#L48)*

Takes an instance of anything and serializes it down to a string.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| instance | `any` | - |   |
| `Default value` spaces | `number` |  null |

**Returns:** `string`

___
<a id="up"></a>

###  up

▸ **up**<`Context`>(data: *`string`*): `Context`

*Defined in [serializer.ts:61](https://github.com/ao-framework/serializer/blob/0fbfd46/src/serializer.ts#L61)*

Takes a string that what serialized, and given the same setup, will parse recursively back to its original state, all the while, remembering state.

**Type parameters:**

#### Context 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `string` |   |

**Returns:** `Context`

___

