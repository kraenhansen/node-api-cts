declare interface Assert {
  /**
   * Asserts that a certain condition is true, throws otherwise.
   */
  (condition: boolean, message?: string): asserts condition;
  /**
   * Asserts that a certain values is an object indexable by strings.
   */
  isRecord(
    value: unknown,
    message?: string
  ): asserts value is Record<string, unknown>;
}

declare const assert: Assert;
