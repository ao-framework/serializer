"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
var model_1 = require("../model");
function serialize() {
    var core = new src_1.default({ User: model_1.default.User }, "core");
    var user = new model_1.default.User();
    var plain = core.down(user);
    var withSpaces = core.down(user, 4);
    expect(typeof plain).toBe("string");
    expect(typeof withSpaces).toBe("string");
    expect(withSpaces.indexOf("\n")).toBeGreaterThan(-1);
}
exports.serialize = serialize;
