
![](./assets/ao.logo.svg)  
**Serializer**

The serializer is a library used to convert an instance of anything to a string and a string to an instance of anything. It does so in such a way as to where all of the pointer references remain intact. It allows for a table of constructors to be presented so that context, on deserialization, could be remembered or changed. It’s an appropriate tool for cloning instances with deeply nested structures. **However, be advised serializing state to disk without encrypting and signing is a dangerous practice that should be avoided at all cost.**

#### Import the library

```ts
import Serializer from "@ao-framework/serializer"
```

#### Lets say we have a model

```ts
namespace Model {

  export class User {
      public self: User;
      public name: string;
      public email: string;
  }

  export class Note {
      public title: string;
      public content: string;
  }

}
```

#### Set up context

```ts
let serializer = new Serializer(Model, "name-of-context")
```

#### Work with your models

```ts
let user = new User();
user.self = user;
user.name = "Something";
user.email = "Something@gmail.com"
```

#### Serialize

```ts
let userString = serializer.down(user);
```

#### De-serialize

```ts
let newUser = serializer.up(userString);
```

#### Did it work?

```ts
console.log(newUser.self === newUser) //outputs: true
```

### Security Considerations

Serializing state down to a string and reviving it to its original state without validation raises strong security concerns. Encrypt and sign everything!

> "Be Kind and Please Rewind Encrypt Everything"

## Index

### External modules

* ["assign"](modules/_assign_.md)
* ["down.caster"](modules/_down_caster_.md)
* ["exceptions"](modules/_exceptions_.md)
* ["index"](modules/_index_.md)
* ["interface/graphable"](modules/_interface_graphable_.md)
* ["interface/model.collection"](modules/_interface_model_collection_.md)
* ["serializer"](modules/_serializer_.md)
* ["up.caster"](modules/_up_caster_.md)
* ["utils/is"](modules/_utils_is_.md)

---

