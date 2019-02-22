import Serializer from "../../src";
export function correctMethods() {
    let serializer = new Serializer;
    expect(typeof serializer.up).toBe("function");
    expect(typeof serializer.down).toBe("function");
}
