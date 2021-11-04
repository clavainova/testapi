const assert = require("assert");
const addFn = reqiure("../index.js");

describe("TestAdd", function () {
    it("should return 10"), function () {
        assert.equal(addFn.add(4, 6), 11);
    }
})