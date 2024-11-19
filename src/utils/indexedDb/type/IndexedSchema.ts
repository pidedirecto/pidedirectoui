export type IndexedSchemas<State> = {
    [ObjectStore in keyof State]: IndexedSchema;
};

export type IndexedSchema =
    | {
          type: 'primitive' | 'object';
      }
    | {
          type: 'array';
          key: string;
      };
