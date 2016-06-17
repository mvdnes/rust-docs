var searchIndex = {};
searchIndex["spin"] = {"doc":"Synchronization primitives based on spinning","items":[[3,"Mutex","spin","This type provides MUTual EXclusion based on spinning.",null,null],[3,"MutexGuard","","A guard to which the protected data can be accessed",null,null],[3,"RwLock","","A reader-writer lock",null,null],[3,"RwLockReadGuard","","A guard to which the protected data can be read",null,null],[3,"RwLockWriteGuard","","A guard to which the protected data can be written",null,null],[3,"Once","","A synchronization primitive which can be used to run a one-time global\ninitialization. Unlike its std equivalent, this is generalized so that The\nclosure returns a value and it is stored. Once therefore acts something like\n1a future, too.",null,null],[11,"new","","Creates a new spinlock wrapping the supplied data.",0,{"inputs":[{"name":"t"}],"output":{"name":"mutex"}}],[11,"into_inner","","Consumes this mutex, returning the underlying data.",0,null],[11,"lock","","Locks the spinlock and returns a guard.",0,null],[11,"try_lock","","Tries to lock the mutex. If it is already locked, it will return None. Otherwise it returns\na guard within Some.",0,null],[11,"fmt","","",0,null],[11,"default","","",0,{"inputs":[],"output":{"name":"mutex"}}],[11,"deref","","",1,null],[11,"deref_mut","","",1,null],[11,"drop","","The dropping of the MutexGuard will release the lock it was created from.",1,null],[11,"new","","Creates a new spinlock wrapping the supplied data.",2,{"inputs":[{"name":"t"}],"output":{"name":"rwlock"}}],[11,"into_inner","","Consumes this `RwLock`, returning the underlying data.",2,null],[11,"read","","Locks this rwlock with shared read access, blocking the current thread\nuntil it can be acquired.",2,null],[11,"try_read","","Attempt to acquire this lock with shared read access.",2,null],[11,"write","","Lock this rwlock with exclusive write access, blocking the current\nthread until it can be acquired.",2,null],[11,"try_write","","Attempt to lock this rwlock with exclusive write access.",2,null],[11,"fmt","","",2,null],[11,"default","","",2,{"inputs":[],"output":{"name":"rwlock"}}],[11,"deref","","",3,null],[11,"deref","","",4,null],[11,"deref_mut","","",4,null],[11,"drop","","",3,null],[11,"drop","","",4,null],[11,"new","","Creates a new `Once` value.",5,{"inputs":[],"output":{"name":"once"}}],[11,"call_once","","Performs an initialization routine once and only once. The given closure\nwill be executed if this is the first time `call_once` has been called,\nand otherwise the routine will *not* be invoked.",5,null],[11,"try","","Returns a pointer iff the `Once` was previously initialized",5,null],[11,"wait","","Like try, but will spin if the `Once` is in the process of being\ninitialized",5,null]],"paths":[[3,"Mutex"],[3,"MutexGuard"],[3,"RwLock"],[3,"RwLockReadGuard"],[3,"RwLockWriteGuard"],[3,"Once"]]};
initSearch(searchIndex);
