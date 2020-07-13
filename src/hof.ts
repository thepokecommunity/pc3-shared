/** Calls `callback` with `value`, then returns `value` unmodified. */
export function tap<T>(value: T, callback: (value: T) => void): T {
  callback(value);
  return value;
}

/** Passes `value` to `callback` and returns the result. */
export function yieldSelf<T, R>(value: T, callback: (value: T) => R): R {
  return callback(value);
}