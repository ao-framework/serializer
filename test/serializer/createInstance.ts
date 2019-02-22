import Serializer from "../../src";
import Model from "../model";
export function createInstance() {
    let serializer = new Serializer();
    let core = new Serializer({ User: Model.User }, "core");
    let sub = new Serializer({}, "sub-main");
    expect(serializer).toBeInstanceOf(Serializer);
    expect(core).toBeInstanceOf(Serializer);
    expect(sub).toBeInstanceOf(Serializer);
    expect(typeof serializer["models"]).toBe("object");
    expect(typeof serializer["namespace"]).toBe("string");
    expect(() => { new Serializer(null); }).toThrow();
}
