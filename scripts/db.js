let openRequest = indexedDB.open('testData', 1);

// success (database is ready and database object exist in openRequest.result)

// error (opening of database fail)

// upgradeneeded (database is ready but version is old)
