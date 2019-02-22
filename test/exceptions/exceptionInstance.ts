import Exceptions from "../../src/exceptions";
export function exceptionInstance() {
    let exception = new Exceptions.Exception("name", "message");
    expect(exception.toString()).toBe("[@ao-framework/serializer][name] message");
}
