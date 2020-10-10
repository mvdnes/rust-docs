var searchIndex = JSON.parse('{\
"spin":{"doc":"This crate provides spin-based versions of the primitives…","i":[[3,"Mutex","spin","A lock that provides mutually exclusive data access.",null,null],[3,"MutexGuard","","A guard that provides mutable data access.",null,null],[3,"RwLock","","A lock that provides data access to either one writer or…",null,null],[3,"RwLockReadGuard","","A guard that provides immutable data access.",null,null],[3,"RwLockWriteGuard","","A guard that provides mutable data access.",null,null],[3,"RwLockUpgradableGuard","","A guard that provides immutable data access but can be…",null,null],[3,"Once","","A primitive that provides lazy one-time initialization.",null,null],[11,"new","","Creates a new spinlock wrapping the supplied data.",0,[[],["mutex",3]]],[11,"into_inner","","Consumes this mutex, returning the underlying data.",0,[[]]],[11,"lock","","Locks the spinlock and returns a guard.",0,[[],["mutexguard",3]]],[11,"force_unlock","","Force unlock the spinlock.",0,[[]]],[11,"try_lock","","Tries to lock the mutex. If it is already locked, it will…",0,[[],[["mutexguard",3],["option",4]]]],[11,"get_mut","","Returns a mutable reference to the underlying data.",0,[[]]],[11,"leak","","Leak the lock guard, yielding a mutable reference to the…",1,[[]]],[11,"new","","Creates a new spinlock wrapping the supplied data.",2,[[],["rwlock",3]]],[11,"into_inner","","Consumes this `RwLock`, returning the underlying data.",2,[[]]],[11,"read","","Locks this rwlock with shared read access, blocking the…",2,[[],["rwlockreadguard",3]]],[11,"try_read","","Attempt to acquire this lock with shared read access.",2,[[],[["rwlockreadguard",3],["option",4]]]],[11,"reader_count","","Return the number of readers that currently hold the lock…",2,[[]]],[11,"writer_count","","Return the number of writers that currently hold the lock.",2,[[]]],[11,"force_read_decrement","","Force decrement the reader count.",2,[[]]],[11,"force_write_unlock","","Force unlock exclusive write access.",2,[[]]],[11,"write","","Lock this rwlock with exclusive write access, blocking the…",2,[[],["rwlockwriteguard",3]]],[11,"try_write","","Attempt to lock this rwlock with exclusive write access.",2,[[],[["option",4],["rwlockwriteguard",3]]]],[11,"upgradeable_read","","Obtain a readable lock guard that can later be upgraded to…",2,[[],["rwlockupgradableguard",3]]],[11,"try_upgradeable_read","","Tries to obtain an upgradeable lock guard.",2,[[],[["rwlockupgradableguard",3],["option",4]]]],[11,"get_mut","","Returns a mutable reference to the underlying data.",2,[[]]],[11,"leak","","Leak the lock guard, yielding a reference to the…",3,[[]]],[11,"upgrade","","Upgrades an upgradeable lock guard to a writable lock guard.",4,[[],["rwlockwriteguard",3]]],[11,"try_upgrade","","Tries to upgrade an upgradeable lock guard to a writable…",4,[[],[["rwlockwriteguard",3],["result",4]]]],[11,"downgrade","","Downgrades the upgradeable lock guard to a readable,…",4,[[],["rwlockreadguard",3]]],[11,"leak","","Leak the lock guard, yielding a reference to the…",4,[[]]],[11,"downgrade","","Downgrades the writable lock guard to a readable, shared…",5,[[],["rwlockreadguard",3]]],[11,"downgrade_to_upgradeable","","Downgrades the writable lock guard to an upgradable,…",5,[[],["rwlockupgradableguard",3]]],[11,"leak","","Leak the lock guard, yielding a mutable reference to the…",5,[[]]],[18,"INIT","","Initialization constant of [`Once`].",6,null],[11,"new","","Creates a new [`Once`].",6,[[],["once",3]]],[11,"initialized","","Creates a new initialized [`Once`].",6,[[],["once",3]]],[11,"call_once","","Performs an initialization routine once and only once. The…",6,[[["fnonce",8]]]],[11,"get","","Returns a reference to the inner value if the [`Once`] has…",6,[[],["option",4]]],[11,"get_mut","","Returns a mutable reference to the inner value if the…",6,[[],["option",4]]],[11,"try_into_inner","","Returns a the inner value if the [`Once`] has been…",6,[[],["option",4]]],[11,"is_completed","","Returns a reference to the inner value if the [`Once`] has…",6,[[]]],[11,"wait","","Spins until the [`Once`] contains a value.",6,[[]]],[11,"poll","","Like [`Once::get`], but will spin if the [`Once`] is in…",6,[[],["option",4]]],[11,"from","","",0,[[]]],[11,"from","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"from","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"into","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"into","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"deref","","",1,[[]]],[11,"deref","","",3,[[]]],[11,"deref","","",4,[[]]],[11,"deref","","",5,[[]]],[11,"deref_mut","","",1,[[]]],[11,"deref_mut","","",5,[[]]],[11,"from","","",0,[[]]],[11,"from","","",2,[[]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"drop","","The dropping of the MutexGuard will release the lock it…",1,[[]]],[11,"drop","","",3,[[]]],[11,"drop","","",4,[[]]],[11,"drop","","",5,[[]]],[11,"default","","",0,[[],["mutex",3]]],[11,"default","","",2,[[],["rwlock",3]]]],"p":[[3,"Mutex"],[3,"MutexGuard"],[3,"RwLock"],[3,"RwLockReadGuard"],[3,"RwLockUpgradableGuard"],[3,"RwLockWriteGuard"],[3,"Once"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);