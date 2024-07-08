export type OptionalKeysOf<T extends object> = Exclude<
  {
    [K in keyof T]: T extends Record<K, T[K]> ? never : K;
  }[keyof T],
  undefined
>;

export type PickOptionalPropertiesOf<T extends object> = Pick<T, OptionalKeysOf<T>>;
