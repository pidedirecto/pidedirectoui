export async function addValueToObjectStore<T>(db: IDBDatabase, objectStoreName: string, value: T): Promise<void> {
    return new Promise((resolve, reject) => {
        const objectStore = db.transaction(objectStoreName, 'readwrite').objectStore(objectStoreName);
        const request = objectStore.add(value);

        request.onsuccess = (event) => {
            resolve();
        };

        request.onerror = () => {
            reject(request.error);
        };
    });
}
