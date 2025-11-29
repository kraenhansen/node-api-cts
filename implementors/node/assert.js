
import { ok } from "node:assert/strict";

/** @type {Assert} */
const assert = (value, message) => {
  ok(value, message);
};

assert.isRecord = (value, message) => {
  ok(typeof value === "object" && value !== null, message);
};

Object.assign(globalThis, { assert });
