/**
 * @prettier
 */

export type OptionalKeys<Type> = {
    [Key in keyof Type]?: Type[Key];
};
