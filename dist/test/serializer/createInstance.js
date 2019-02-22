"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
var model_1 = require("../model");
function createInstance() {
    var serializer = new src_1.default();
    var core = new src_1.default({ User: model_1.default.User }, "core");
    var sub = new src_1.default({}, "sub-main");
    expect(serializer).toBeInstanceOf(src_1.default);
    expect(core).toBeInstanceOf(src_1.default);
    expect(sub).toBeInstanceOf(src_1.default);
    expect(typeof serializer["models"]).toBe("object");
    expect(typeof serializer["namespace"]).toBe("string");
    expect(function () { new src_1.default(null); }).toThrow();
}
exports.createInstance = createInstance;
