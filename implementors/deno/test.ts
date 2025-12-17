import { assert } from "@std/assert";
import { describe, test } from "@std/testing/bdd";
import path from "node:path";

import { listDirectoryEntries, runFileInSubprocess } from "../node/tests.ts";

assert(
  typeof import.meta.dirname === "string",
  "Expecting a recent Node.js runtime API version"
);

const ROOT_PATH = path.resolve(import.meta.dirname, "..", "..");
const TESTS_ROOT_PATH = path.join(ROOT_PATH, "tests");

function populateSuite(dir: string) {
  const { directories, files } = listDirectoryEntries(dir);

  for (const file of files) {
    test(file, () => runFileInSubprocess(dir, file));
  }

  for (const directory of directories) {
    describe(directory, () => {
      populateSuite(path.join(dir, directory));
    });
  }
}

populateSuite(TESTS_ROOT_PATH);
