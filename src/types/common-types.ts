export type OptionalKeysOf<T extends object> = Exclude<
  {
    [K in keyof T]: T extends Record<K, T[K]> ? never : K;
  }[keyof T],
  undefined
>;

// type OptionalKeysOf<T extends object> = keyof {
//   [K in keyof T]: {} extends Pick<T, K> ? T[K] : never;
// };

export type PickOptionalPropertiesOf<T extends object> = Pick<T, OptionalKeysOf<T>>;
