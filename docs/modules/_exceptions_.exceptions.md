[@ao-framework/serializer](../README.md) > ["exceptions"](../modules/_exceptions_.md) > [Exceptions](../modules/_exceptions_.exceptions.md)

# Module: Exceptions

Namespace to hold all exception behavior and classes

## Index

### Classes

* [Exception](../classes/_exceptions_.exceptions.exception.md)

### Functions

* [blow](_exceptions_.exceptions.md#blow)
* [invalidGraph](_exceptions_.exceptions.md#invalidgraph)
* [invalidPointer](_exceptions_.exceptions.md#invalidpointer)
* [invalidPointerSet](_exceptions_.exceptions.md#invalidpointerset)

---

## Functions

<a id="blow"></a>

###  blow

▸ **blow**(namespace: *`string`*, message: *`string`*): `void`

*Defined in [exceptions.ts:38](https://github.com/ao-framework/serializer/blob/0fbfd46/src/exceptions.ts#L38)*

Quick factory for creating an exception. This helps with testing. and getting coverage.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| namespace | `string` |  \- |
| message | `string` |   |

**Returns:** `void`

___
<a id="invalidgraph"></a>

###  invalidGraph

▸ **invalidGraph**(namespace: *`string`*): `void`

*Defined in [exceptions.ts:48](https://github.com/ao-framework/serializer/blob/0fbfd46/src/exceptions.ts#L48)*

Throws an exception any time there is problem with graph in deserialization.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| namespace | `string` |   |

**Returns:** `void`

___
<a id="invalidpointer"></a>

###  invalidPointer

▸ **invalidPointer**(namespace: *`string`*): `void`

*Defined in [exceptions.ts:66](https://github.com/ao-framework/serializer/blob/0fbfd46/src/exceptions.ts#L66)*

Throws an error when deserialization can not find a pointer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| namespace | `string` |   |

**Returns:** `void`

___
<a id="invalidpointerset"></a>

###  invalidPointerSet

▸ **invalidPointerSet**(namespace: *`string`*): `void`

*Defined in [exceptions.ts:57](https://github.com/ao-framework/serializer/blob/0fbfd46/src/exceptions.ts#L57)*

Throws an error when the pointers property, in deserialization is not an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| namespace | `string` |   |

**Returns:** `void`

___

