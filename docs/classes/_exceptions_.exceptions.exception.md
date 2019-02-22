[@ao-framework/serializer](../README.md) > ["exceptions"](../modules/_exceptions_.md) > [Exceptions](../modules/_exceptions_.exceptions.md) > [Exception](../classes/_exceptions_.exceptions.exception.md)

# Class: Exception

Represents a core exception in Serializer.

## Hierarchy

**Exception**

## Index

### Constructors

* [constructor](_exceptions_.exceptions.exception.md#constructor)

### Properties

* [message](_exceptions_.exceptions.exception.md#message)
* [namespace](_exceptions_.exceptions.exception.md#namespace)

### Methods

* [toString](_exceptions_.exceptions.exception.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Exception**(namespace: *`string`*, message: *`string`*): [Exception](_exceptions_.exceptions.exception.md)

*Defined in [exceptions.ts:11](https://github.com/ao-framework/serializer/blob/da19b8f/src/exceptions.ts#L11)*

Creates an instance of an exception

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| namespace | `string` |  The namespace of the Serializer instance |
| message | `string` |  The exception message |

**Returns:** [Exception](_exceptions_.exceptions.exception.md)

___

## Properties

<a id="message"></a>

###  message

**● message**: *`string`*

*Defined in [exceptions.ts:20](https://github.com/ao-framework/serializer/blob/da19b8f/src/exceptions.ts#L20)*

The exception message

___
<a id="namespace"></a>

###  namespace

**● namespace**: *`string`*

*Defined in [exceptions.ts:19](https://github.com/ao-framework/serializer/blob/da19b8f/src/exceptions.ts#L19)*

The namespace of the Serializer instance

___

## Methods

<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [exceptions.ts:26](https://github.com/ao-framework/serializer/blob/da19b8f/src/exceptions.ts#L26)*

Handles toString() for the console.

**Returns:** `string`

___

