import Serializer from "../../src";
import { UpCaster } from "../../src/up.caster";
export function contextInstancePointer() {
    class User {
    }
    let user = new User();
    let serializer = new Serializer({ User }, "something");
    let string = serializer.down({
        userone: user,
        settings: {
            usertwo: user
        }
    });
    let up = new UpCaster("@~serializer.something", { User }, string).toInstance();
    expect(up.userone === up.settings.usertwo).toBe(true);
}
