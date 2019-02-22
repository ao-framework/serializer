"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
var up_caster_1 = require("../../src/up.caster");
function contextInstancePointer() {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var user = new User();
    var serializer = new src_1.default({ User: User }, "something");
    var string = serializer.down({
        userone: user,
        settings: {
            usertwo: user
        }
    });
    var up = new up_caster_1.UpCaster("@~serializer.something", { User: User }, string).toInstance();
    expect(up.userone === up.settings.usertwo).toBe(true);
}
exports.contextInstancePointer = contextInstancePointer;
