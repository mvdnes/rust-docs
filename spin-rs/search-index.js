var N=null,E="",T="t",U="u",searchIndex={};
var R=["mutexguard","Creates a new spinlock wrapping the supplied data.","into_inner","option","rwlockreadguard","rwlockwriteguard","result","try_from","try_into","borrow","borrow_mut","type_id","typeid","formatter","deref_mut","MutexGuard","RwLockReadGuard","RwLockWriteGuard"];

searchIndex["spin"]={"doc":"Synchronization primitives based on spinning","i":[[3,"Mutex","spin","This type provides MUTual EXclusion based on spinning.",N,N],[3,R[15],E,"A guard to which the protected data can be accessed",N,N],[3,"RwLock",E,"A reader-writer lock",N,N],[3,R[16],E,"A guard from which the protected data can be read",N,N],[3,R[17],E,"A guard to which the protected data can be written",N,N],[3,"Once",E,"A synchronization primitive which can be used to run a…",N,N],[11,"new",E,R[1],0,[[[T]],["mutex"]]],[11,R[2],E,"Consumes this mutex, returning the underlying data.",0,[[["self"]],[T]]],[11,"lock",E,"Locks the spinlock and returns a guard.",0,[[["self"]],[R[0]]]],[11,"force_unlock",E,"Force unlock the spinlock.",0,[[["self"]]]],[11,"try_lock",E,"Tries to lock the mutex. If it is already locked, it will…",0,[[["self"]],[R[3],[R[0]]]]],[11,"new",E,R[1],1,[[[T]],["rwlock"]]],[11,R[2],E,"Consumes this `RwLock`, returning the underlying data.",1,[[["self"]],[T]]],[11,"read",E,"Locks this rwlock with shared read access, blocking the…",1,[[["self"]],[R[4]]]],[11,"try_read",E,"Attempt to acquire this lock with shared read access.",1,[[["self"]],[R[3],[R[4]]]]],[11,"force_read_decrement",E,"Force decrement the reader count.",1,[[["self"]]]],[11,"force_write_unlock",E,"Force unlock exclusive write access.",1,[[["self"]]]],[11,"write",E,"Lock this rwlock with exclusive write access, blocking the…",1,[[["self"]],[R[5]]]],[11,"try_write",E,"Attempt to lock this rwlock with exclusive write access.",1,[[["self"]],[R[3],[R[5]]]]],[18,"INIT",E,"Initialization constant of `Once`.",2,N],[11,"new",E,"Creates a new `Once` value.",2,[[],["once"]]],[11,"call_once",E,"Performs an initialization routine once and only once. The…",2,[[["self"],["f"]],[T]]],[11,"try",E,"Returns a pointer iff the `Once` was previously initialized",2,[[["self"]],[R[3]]]],[11,"wait",E,"Like try, but will spin if the `Once` is in the process of…",2,[[["self"]],[R[3]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[7],E,E,0,[[[U]],[R[6]]]],[11,R[8],E,E,0,[[["self"]],[R[6]]]],[11,"into",E,E,0,[[["self"]],[U]]],[11,R[9],E,E,0,[[["self"]],[T]]],[11,R[10],E,E,0,[[["self"]],[T]]],[11,R[11],E,E,0,[[["self"]],[R[12]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[7],E,E,3,[[[U]],[R[6]]]],[11,R[8],E,E,3,[[["self"]],[R[6]]]],[11,"into",E,E,3,[[["self"]],[U]]],[11,R[9],E,E,3,[[["self"]],[T]]],[11,R[10],E,E,3,[[["self"]],[T]]],[11,R[11],E,E,3,[[["self"]],[R[12]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[7],E,E,1,[[[U]],[R[6]]]],[11,R[8],E,E,1,[[["self"]],[R[6]]]],[11,"into",E,E,1,[[["self"]],[U]]],[11,R[9],E,E,1,[[["self"]],[T]]],[11,R[10],E,E,1,[[["self"]],[T]]],[11,R[11],E,E,1,[[["self"]],[R[12]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[7],E,E,4,[[[U]],[R[6]]]],[11,R[8],E,E,4,[[["self"]],[R[6]]]],[11,"into",E,E,4,[[["self"]],[U]]],[11,R[9],E,E,4,[[["self"]],[T]]],[11,R[10],E,E,4,[[["self"]],[T]]],[11,R[11],E,E,4,[[["self"]],[R[12]]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[7],E,E,5,[[[U]],[R[6]]]],[11,R[8],E,E,5,[[["self"]],[R[6]]]],[11,"into",E,E,5,[[["self"]],[U]]],[11,R[9],E,E,5,[[["self"]],[T]]],[11,R[10],E,E,5,[[["self"]],[T]]],[11,R[11],E,E,5,[[["self"]],[R[12]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[7],E,E,2,[[[U]],[R[6]]]],[11,R[8],E,E,2,[[["self"]],[R[6]]]],[11,"into",E,E,2,[[["self"]],[U]]],[11,R[9],E,E,2,[[["self"]],[T]]],[11,R[10],E,E,2,[[["self"]],[T]]],[11,R[11],E,E,2,[[["self"]],[R[12]]]],[11,"deref",E,E,3,[[["self"]],[T]]],[11,"deref",E,E,4,[[["self"]],[T]]],[11,"deref",E,E,5,[[["self"]],[T]]],[11,"fmt",E,E,3,[[["self"],[R[13]]],[R[6]]]],[11,"fmt",E,E,0,[[["self"],[R[13]]],[R[6]]]],[11,"fmt",E,E,4,[[["self"],[R[13]]],[R[6]]]],[11,"fmt",E,E,5,[[["self"],[R[13]]],[R[6]]]],[11,"fmt",E,E,1,[[["self"],[R[13]]],[R[6]]]],[11,"fmt",E,E,2,[[["self"],[R[13]]],[R[6]]]],[11,R[14],E,E,3,[[["self"]],[T]]],[11,R[14],E,E,5,[[["self"]],[T]]],[11,"drop",E,"The dropping of the MutexGuard will release the lock it…",3,[[["self"]]]],[11,"drop",E,E,4,[[["self"]]]],[11,"drop",E,E,5,[[["self"]]]],[11,"default",E,E,0,[[],["mutex"]]],[11,"default",E,E,1,[[],["rwlock"]]]],"p":[[3,"Mutex"],[3,"RwLock"],[3,"Once"],[3,R[15]],[3,R[16]],[3,R[17]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);