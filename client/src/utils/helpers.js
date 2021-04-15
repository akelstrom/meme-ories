export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
        // Open connection to the database 'game-project' with the version of 1
        const request = window.indexedDB.open('game-project', 1);

        // Create variables to hold reference to the database, transaction (tx), and object store
        let db, tx, store;

        // If version has changed (or if this is the first time using the database), fun this method and create the object stores
        request.onupgradeneeded = function(e) {
            const db = request.result;

            // Create object store for each type of data and set 'primary' key index to be the '_id' of the data
            db.createObjectStore('score', { keyPath: '' });
            db.createObjectStore('friends', { keyPath: '_id' });
        };

        // Handle any errors with connecting
        request.onerror = function(e) {
            console.log('There was an error');
        };

        // On database open success
        request.onsuccess = function(e) {
            // Save a reference of the database to the 'db' variable
            db = request.result;
            // Open a transaction for whatever we pass into 'storeName' (must match one of the object store names)
            tx = db.transaction(storeName, 'readwrite');
            // Save a reference to that object store
            store = tx.objectStore(storeName);

            // If there are any errors, let us know
            db.onerror = function(e) {
                console.log('Error', e);
            };

            switch (method) {
                case 'put':
                    store.put(object);
                    resolve(object);
                    break;
                case 'get':
                    const all = store.getAll();
                    all.onsuccess = function() {
                        resolve(all.result);
                    };
                    break;
                default:
                    console.log('No valid method');
                    break;
            }

            // When the transaction is complete, close the connection
            tx.oncomplete = function() {
                db.close();
            };
        };
    });
}