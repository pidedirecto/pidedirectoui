export type ArrayElementType<T> = T extends Array<infer U> ? U : T;
