import { test } from "node:test";
import assert from "node:assert/strict";
import { soma } from "./soma.js";

test("soma dois números positivos", () => {
  assert.equal(soma(2, 3), 5);
});
