"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
function testObjectCreateInstance() {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    var user = new User("Something");
    var serializer = new src_1.default(Object.assign({ User: User }));
    var string = serializer.down(user);
    var newUser = serializer.up(string);
    expect(newUser.name === "Something").toBe(true);
    expect(newUser).toBeInstanceOf(User);
}
exports.testObjectCreateInstance = testObjectCreateInstance;
