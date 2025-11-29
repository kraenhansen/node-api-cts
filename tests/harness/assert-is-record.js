if (typeof assert.isRecord !== 'function') {
  throw new Error('Expected a global assert.isRecord function');
}

try {
  assert.isRecord({}, 'assert.isRecord({}, message) should not throw');
} catch (error) {
  throw new Error(`Global assert.isRecord(true, message) must not throw: ${String(error)}`);
}

const failureMessage = 'assert.isRecord(false, message) should throw this message';
let threw = false;

try {
  assert.isRecord(false, failureMessage);
} catch (error) {
  threw = true;

  if (!(error instanceof Error)) {
    throw new Error(`Global assert.isRecord(false, message) must throw an Error instance but got: ${String(error)}`);
  }

  const actualMessage = error.message;
  if (actualMessage !== failureMessage) {
    throw new Error(
      `Global assert.isRecord(false, message) must throw message "${failureMessage}" but got "${actualMessage}"`,
    );
  }
}

if (!threw) {
  throw new Error('Global assert.isRecord(false, message) must throw');
}
