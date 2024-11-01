export async function getAllObjectStoreValues(db: IDBDatabase, objectStoreName: string): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(objectStoreName);
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.getAll();
        request.onerror = (event) => {
            reject((event.target as IDBTransaction).error);
        };
        request.onsuccess = () => {
            resolve(request.result);
        };
    });
}
