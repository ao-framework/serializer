[@ao-framework/serializer](../README.md) > ["down.caster"](../modules/_down_caster_.md) > [DownCaster](../classes/_down_caster_.downcaster.md)

# Class: DownCaster

Represents the downcaster...

## Hierarchy

**DownCaster**

## Index

### Constructors

* [constructor](_down_caster_.downcaster.md#constructor)

### Properties

* [graph](_down_caster_.downcaster.md#graph)
* [models](_down_caster_.downcaster.md#models)
* [namespace](_down_caster_.downcaster.md#namespace)
* [pointers](_down_caster_.downcaster.md#pointers)

### Methods

* [graphArray](_down_caster_.downcaster.md#grapharray)
* [graphData](_down_caster_.downcaster.md#graphdata)
* [graphDate](_down_caster_.downcaster.md#graphdate)
* [graphObject](_down_caster_.downcaster.md#graphobject)
* [graphPrimitives](_down_caster_.downcaster.md#graphprimitives)
* [makeGraphable](_down_caster_.downcaster.md#makegraphable)
* [stripPointersOfResponsibility](_down_caster_.downcaster.md#strippointersofresponsibility)
* [toString](_down_caster_.downcaster.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DownCaster**(namespace: *`any`*, models: *[ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md)*, data: *`any`*): [DownCaster](_down_caster_.downcaster.md)

*Defined in [down.caster.ts:20](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L20)*

Create an instance of Downcaster

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| namespace | `any` |  \- |
| models | [ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md) |  \- |
| data | `any` |   |

**Returns:** [DownCaster](_down_caster_.downcaster.md)

___

## Properties

<a id="graph"></a>

###  graph

**● graph**: *[Graphable](../interfaces/_interface_graphable_.graphable.md)*

*Defined in [down.caster.ts:20](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L20)*

Holds the graph, of the instance for the serialization.

___
<a id="models"></a>

### `<Private>` models

**● models**: *[ModelCollection](../interfaces/_interface_model_collection_.modelcollection.md)*

*Defined in [down.caster.ts:29](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L29)*

___
<a id="namespace"></a>

### `<Private>` namespace

**● namespace**: *`any`*

*Defined in [down.caster.ts:29](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L29)*

___
<a id="pointers"></a>

###  pointers

**● pointers**: *`any`[]* =  []

*Defined in [down.caster.ts:14](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L14)*

Holds all the pointers for whatever is beings serialized, ensuring that all references a correctly allocated.

___

## Methods

<a id="grapharray"></a>

###  graphArray

▸ **graphArray**(arr: *`any`[]*): [Graphable](../interfaces/_interface_graphable_.graphable.md)

*Defined in [down.caster.ts:80](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L80)*

Holds graphing arrays

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| arr | `any`[] |   |

**Returns:** [Graphable](../interfaces/_interface_graphable_.graphable.md)

___
<a id="graphdata"></a>

###  graphData

▸ **graphData**(data: *`any`*): [Graphable](../interfaces/_interface_graphable_.graphable.md)

*Defined in [down.caster.ts:61](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L61)*

Entry point to recursively look through the data provide and assign a graphable.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `any` |   |

**Returns:** [Graphable](../interfaces/_interface_graphable_.graphable.md)

___
<a id="graphdate"></a>

###  graphDate

▸ **graphDate**(date: *`Date`*): [Graphable](../interfaces/_interface_graphable_.graphable.md)

*Defined in [down.caster.ts:98](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L98)*

Handles graphing dates

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| date | `Date` |   |

**Returns:** [Graphable](../interfaces/_interface_graphable_.graphable.md)

___
<a id="graphobject"></a>

###  graphObject

▸ **graphObject**(obj: *`object`*): [Graphable](../interfaces/_interface_graphable_.graphable.md)

*Defined in [down.caster.ts:114](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L114)*

Handles graphing objects

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| obj | `object` |   |

**Returns:** [Graphable](../interfaces/_interface_graphable_.graphable.md)

___
<a id="graphprimitives"></a>

###  graphPrimitives

▸ **graphPrimitives**(value: *`any`*): [Graphable](../interfaces/_interface_graphable_.graphable.md)

*Defined in [down.caster.ts:138](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L138)*

Handles graphing primitives

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `any` |   |

**Returns:** [Graphable](../interfaces/_interface_graphable_.graphable.md)

___
<a id="makegraphable"></a>

###  makeGraphable

▸ **makeGraphable**(): [Graphable](../interfaces/_interface_graphable_.graphable.md)

*Defined in [down.caster.ts:153](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L153)*

Helper method to make as instance of graphable

**Returns:** [Graphable](../interfaces/_interface_graphable_.graphable.md)

___
<a id="strippointersofresponsibility"></a>

###  stripPointersOfResponsibility

▸ **stripPointersOfResponsibility**(): `void`

*Defined in [down.caster.ts:40](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L40)*

This makes it more optimized in the upcaster and doesn't hold on to pointers of a developer's instance for garbage collection purposes.

**Returns:** `void`

___
<a id="tostring"></a>

###  toString

▸ **toString**(spaces?: *`number`*): `string`

*Defined in [down.caster.ts:160](https://github.com/ao-framework/serializer/blob/da19b8f/src/down.caster.ts#L160)*

Stringifies the graph and pointers

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` spaces | `number` |  null |

**Returns:** `string`

___

