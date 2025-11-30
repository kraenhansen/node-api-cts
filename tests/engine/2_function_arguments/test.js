const addon = loadAddon('2_function_arguments');
assert.isRecord(addon);

const { add } = addon;

assert(typeof add === "function");
assert(add(3, 5) === 8);
