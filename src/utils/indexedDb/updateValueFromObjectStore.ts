export async function updateValueFromObjectStore<T>(db: IDBDatabase, objectStoreName: string, value: T, key?: number): Promise<void> {
    return new Promise((resolve, reject) => {
        const objectStore = db.transaction(objectStoreName, 'readwrite').objectStore(objectStoreName);
        const request = objectStore.put(value, key);

        request.onsuccess = (event) => {
            resolve();
        };

        request.onerror = () => {
            reject(request.error);
        };
    });
}
