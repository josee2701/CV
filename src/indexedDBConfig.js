export const DBConfig = {
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
      {
        store: 'requests',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'data', keypath: 'data', options: { unique: false } },
        ]
      }
    ]
  };
  