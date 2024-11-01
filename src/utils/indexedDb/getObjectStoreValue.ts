export async function getObjectStoreValue(db: IDBDatabase, objectStoreName: string, key: string | number): Promise<any> {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(objectStoreName);
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.get(key);
        request.onerror = (event) => {
            reject((event.target as IDBTransaction).error);
        };
        request.onsuccess = (event) => {
            resolve(request.result);
        };
    });
}
