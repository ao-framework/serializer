"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
function correctMethods() {
    var serializer = new src_1.default;
    expect(typeof serializer.up).toBe("function");
    expect(typeof serializer.down).toBe("function");
}
exports.correctMethods = correctMethods;
