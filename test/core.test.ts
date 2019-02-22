import "jest";
import { serializerTesting } from "./serializer/testing";
import { assignTesting } from "./assign/testing";
import { downcasterTesting } from "./down.caster/testing";
import { exceptionsTesting } from "./exceptions/testing";
import { upcasterTesting } from "./up.caster/testing";
import { isTesting } from "./@utils/is/testing";

describe("Serializer", () => {
    describe("serializer", serializerTesting);
    describe("assign", assignTesting);
    describe("down.caster", downcasterTesting);
    describe("exceptions", exceptionsTesting);
    describe("up.caster", upcasterTesting);
    describe("utils/is", isTesting);
})
