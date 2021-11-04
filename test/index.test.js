const assert = require("assert");
const addFn = require("../index.js");

describe("TestAdd", function () {
    it("should return 10", function () {
        assert.equal(addFn.add(4, 6), 10);
    });
})