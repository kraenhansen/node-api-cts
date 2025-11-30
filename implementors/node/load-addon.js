import { dlopen } from "node:process";
import { getCallSites } from "node:util";
import { constants } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url"

/** @type {typeof globalThis.loadAddon} */
const loadAddon = (addonFileName) => {
  const [, caller] = getCallSites();
  if (typeof addonFileName !== "string") {
    throw new Error("Expected a string as addon filename");
  }
  if (addonFileName.endsWith(".node")) {
    throw new Error("Expected addon filename without the .node extension");
  }
  const addonPath = path.join(path.dirname(fileURLToPath(caller.scriptName)), addonFileName + ".node");
  const addon = { exports: {} };
  dlopen(addon, addonPath, constants.dlopen.RTLD_NOW);
  return addon.exports;
};

Object.assign(globalThis, { loadAddon });
