export async function objectStoreHasData(db: IDBDatabase, objectStoreName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(objectStoreName);
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.count();

        request.onsuccess = () => {
            resolve(request.result > 0);
        };

        request.onerror = (event) => {
            reject((event.target as IDBTransaction).error);
        };
    });
}
