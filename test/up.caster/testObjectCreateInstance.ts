import Serializer from "../../src";
export function testObjectCreateInstance() {
    class User {
        public constructor(public name: string) {
        }
    }
    let user = new User("Something");
    let serializer = new Serializer(Object.assign({ User }));
    let string = serializer.down(user);
    let newUser = serializer.up<User>(string);
    expect(newUser.name === "Something").toBe(true);
    expect(newUser).toBeInstanceOf(User);
}
