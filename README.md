<p align="center">
<img width="150" src="./assets/ao.logo.svg"><br>
<b>Serializer</b>
</p>

Import the library
```ts
import Serializer from "@ao-framework/serializer"
```
Lets say we have a model 
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

Set up context
```ts
let serializer = new Serializer(Model, "name-of-context")
```

Work with your models
```ts
let user = new User();
user.self = user;
user.name = "Something";
user.email = "Something@gmail.com"
```

Serialize
```ts
let userString = serializer.down(user);
```

De-serialize
```ts
let newUser = serializer.up(userString);
```

Did it work?
```ts
console.log(newUser.self === newUser) //outputs: true
```

### Security Considerations
Serializing state down to a string and reviving it to its original state
without validation raises strong security concerns. Encrypt and sign everything!

<blockquote>
    "Be Kind and <strike>Please Rewind</strike> Encrypt Everything"
</blockquote>
