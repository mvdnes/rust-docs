var searchIndex = {};
searchIndex['spin'] = {"items":[[0,"","spin","Synchronization primitives based on spinning",null,null],[3,"Mutex","","This type provides MUTual EXclusion based on spinning.",null,null],[3,"MutexGuard","","A guard to which the protected data can be accessed",null,null],[3,"RwLock","","A reader-writer lock",null,null],[3,"RwLockReadGuard","","A guard to which the protected data can be read",null,null],[3,"RwLockWriteGuard","","A guard to which the protected data can be written",null,null],[11,"new","","Creates a new spinlock wrapping the supplied data.",0,{"inputs":[{"name":"mutex"},{"name":"t"}],"output":{"name":"mutex"}}],[11,"lock","","Locks the spinlock and returns a guard.",0,{"inputs":[{"name":"mutex"}],"output":{"name":"mutexguard"}}],[11,"fmt","","",0,{"inputs":[{"name":"mutex"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",0,{"inputs":[{"name":"mutex"}],"output":{"name":"mutex"}}],[11,"deref","","",1,{"inputs":[{"name":"mutexguard"}],"output":{"name":"t"}}],[11,"deref_mut","","",1,{"inputs":[{"name":"mutexguard"}],"output":{"name":"t"}}],[11,"drop","","The dropping of the MutexGuard will release the lock it was created from.",1,{"inputs":[{"name":"mutexguard"}],"output":null}],[11,"new","","Creates a new spinlock wrapping the supplied data.",2,{"inputs":[{"name":"rwlock"},{"name":"t"}],"output":{"name":"rwlock"}}],[11,"read","","Locks this rwlock with shared read access, blocking the current thread\nuntil it can be acquired.",2,{"inputs":[{"name":"rwlock"}],"output":{"name":"rwlockreadguard"}}],[11,"try_read","","Attempt to acquire this lock with shared read access.",2,{"inputs":[{"name":"rwlock"}],"output":{"name":"option"}}],[11,"write","","Lock this rwlock with exclusive write access, blocking the current\nthread until it can be acquired.",2,{"inputs":[{"name":"rwlock"}],"output":{"name":"rwlockwriteguard"}}],[11,"try_write","","Attempt to lock this rwlock with exclusive write access.",2,{"inputs":[{"name":"rwlock"}],"output":{"name":"option"}}],[11,"fmt","","",2,{"inputs":[{"name":"rwlock"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",2,{"inputs":[{"name":"rwlock"}],"output":{"name":"rwlock"}}],[11,"deref","","",3,{"inputs":[{"name":"rwlockreadguard"}],"output":{"name":"t"}}],[11,"deref","","",4,{"inputs":[{"name":"rwlockwriteguard"}],"output":{"name":"t"}}],[11,"deref_mut","","",4,{"inputs":[{"name":"rwlockwriteguard"}],"output":{"name":"t"}}],[11,"drop","","",3,{"inputs":[{"name":"rwlockreadguard"}],"output":null}],[11,"drop","","",4,{"inputs":[{"name":"rwlockwriteguard"}],"output":null}]],"paths":[[3,"Mutex"],[3,"MutexGuard"],[3,"RwLock"],[3,"RwLockReadGuard"],[3,"RwLockWriteGuard"]]};
initSearch(searchIndex);
