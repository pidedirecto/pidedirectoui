export async function removeValueFromObjectStore(db: IDBDatabase, objectStoreName: string, key: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const request = db.transaction(objectStoreName, 'readwrite').objectStore(objectStoreName).delete(key);
        request.onsuccess = () => {
            resolve();
        };
        request.onerror = () => {
            reject(request.error);
        };
    });
}
