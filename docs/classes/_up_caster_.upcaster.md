[@ao-framework/serializer](../README.md) > ["up.caster"](../modules/_up_caster_.md) > [UpCaster](../classes/_up_caster_.upcaster.md)

# Class: UpCaster

Represents the upcaster...

## Hierarchy

**UpCaster**

## Index

### Constructors

* [constructor](_up_caster_.upcaster.md#constructor)

### Properties

* [instance](_up_caster_.upcaster.md#instance)
* [model](_up_caster_.upcaster.md#model)
* [namespace](_up_caster_.upcaster.md#namespace)
* [pointers](_up_caster_.upcaster.md#pointers)

### Methods

* [getDowncaster](_up_caster_.upcaster.md#getdowncaster)
* [getInstanceFromDowncaster](_up_caster_.upcaster.md#getinstancefromdowncaster)
* [toInstance](_up_caster_.upcaster.md#toinstance)
* [unGraphArray](_up_caster_.upcaster.md#ungrapharray)
* [unGraphDate](_up_caster_.upcaster.md#ungraphdate)
* [unGraphObject](_up_caster_.upcaster.md#ungraphobject)
* [unGraphPrimitives](_up_caster_.upcaster.md#ungraphprimitives)
* [ungraphData](_up_caster_.upcaster.md#ungraphdata)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UpCaster**(namespace: *`string`*, model: *[ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md)*, str: *`string`*): [UpCaster](_up_caster_.upcaster.md)

*Defined in [up.caster.ts:22](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L22)*

Creates an instance of UpCaster

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| namespace | `string` |  ' |
| model | [ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md) |  \- |
| str | `string` |   |

**Returns:** [UpCaster](_up_caster_.upcaster.md)

___

## Properties

<a id="instance"></a>

###  instance

**● instance**: *`any`*

*Defined in [up.caster.ts:17](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L17)*

Holds the instance as state is being pieced back together.

___
<a id="model"></a>

### `<Private>` model

**● model**: *[ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md)*

*Defined in [up.caster.ts:30](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L30)*

___
<a id="namespace"></a>

### `<Private>` namespace

**● namespace**: *`string`*

*Defined in [up.caster.ts:30](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L30)*

'

___
<a id="pointers"></a>

###  pointers

**● pointers**: *`any`[]* =  []

*Defined in [up.caster.ts:22](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L22)*

Holds the list of pointers

___

## Methods

<a id="getdowncaster"></a>

###  getDowncaster

▸ **getDowncaster**(str: *`string`*): `any`

*Defined in [up.caster.ts:40](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L40)*

Get the "rough" instance of Downcaster from JSON

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| str | `string` |   |

**Returns:** `any`

___
<a id="getinstancefromdowncaster"></a>

###  getInstanceFromDowncaster

▸ **getInstanceFromDowncaster**(downcaster: *[DownCaster](_down_caster_.downcaster.md)*): `any`

*Defined in [up.caster.ts:57](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L57)*

Once the downcaster is in place, this method will recursively return the pointers for the given graphs

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| downcaster | [DownCaster](_down_caster_.downcaster.md) |   |

**Returns:** `any`

___
<a id="toinstance"></a>

###  toInstance

▸ **toInstance**<`Context`>(): `any`

*Defined in [up.caster.ts:174](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L174)*

Returns the instance and handles garbage collection

**Type parameters:**

#### Context 

**Returns:** `any`

___
<a id="ungrapharray"></a>

###  unGraphArray

▸ **unGraphArray**(graph: *[Graphable](../interfaces/_interface_graphable_.graphable.md)*): `any`[]

*Defined in [up.caster.ts:91](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L91)*

Handles ungraphing arrays

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| graph | [Graphable](../interfaces/_interface_graphable_.graphable.md) |   |

**Returns:** `any`[]

___
<a id="ungraphdate"></a>

###  unGraphDate

▸ **unGraphDate**(graph: *[Graphable](../interfaces/_interface_graphable_.graphable.md)*): `any`

*Defined in [up.caster.ts:110](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L110)*

Handles ungraphing dates

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| graph | [Graphable](../interfaces/_interface_graphable_.graphable.md) |   |

**Returns:** `any`

___
<a id="ungraphobject"></a>

###  unGraphObject

▸ **unGraphObject**(graph: *[Graphable](../interfaces/_interface_graphable_.graphable.md)*): `any`

*Defined in [up.caster.ts:129](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L129)*

Handles ungraphing objects

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| graph | [Graphable](../interfaces/_interface_graphable_.graphable.md) |   |

**Returns:** `any`

___
<a id="ungraphprimitives"></a>

###  unGraphPrimitives

▸ **unGraphPrimitives**(graph: *[Graphable](../interfaces/_interface_graphable_.graphable.md)*): `any`

*Defined in [up.caster.ts:162](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L162)*

Handles ungraphing primitives

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| graph | [Graphable](../interfaces/_interface_graphable_.graphable.md) |   |

**Returns:** `any`

___
<a id="ungraphdata"></a>

###  ungraphData

▸ **ungraphData**(graph: *[Graphable](../interfaces/_interface_graphable_.graphable.md)*): `any`

*Defined in [up.caster.ts:67](https://github.com/ao-framework/serializer/blob/da19b8f/src/up.caster.ts#L67)*

Entry point for ungraphing

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| graph | [Graphable](../interfaces/_interface_graphable_.graphable.md) |   |

**Returns:** `any`

___

