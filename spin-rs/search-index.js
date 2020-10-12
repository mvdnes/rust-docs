var searchIndex = JSON.parse('{\
"spin":{"doc":"This crate provides spin-based versions of the primitives…","i":[[3,"Lazy","spin","A value which is initialized on the first access.",null,null],[3,"Once","","A primitive that provides lazy one-time initialization.",null,null],[3,"RwLock","","A lock that provides data access to either one writer or…",null,null],[3,"RwLockReadGuard","","A guard that provides immutable data access.",null,null],[3,"RwLockWriteGuard","","A guard that provides mutable data access.",null,null],[3,"RwLockUpgradableGuard","","A guard that provides immutable data access but can be…",null,null],[0,"mutex","","Implementation of two different Mutex versions,…",null,null],[3,"SpinMutex","spin::mutex","A lock that provides mutually exclusive data access based…",null,null],[3,"SpinMutexGuard","","A guard that provides mutable data access.",null,null],[3,"TicketMutex","","A ticket lock for mutual exclusion based on spinning.",null,null],[3,"TicketMutexGuard","","A guard that protects some data.",null,null],[3,"Mutex","","A generic `Mutex`, that will use either a fully spin-based…",null,null],[3,"MutexGuard","","A generic guard that will protect some data access and…",null,null],[11,"new","","Creates a new spinlock wrapping the supplied data.",0,[[],["spinmutex",3]]],[11,"into_inner","","Consumes this mutex, returning the underlying data.",0,[[]]],[11,"lock","","Locks the spinlock and returns a guard.",0,[[],["spinmutexguard",3]]],[11,"force_unlock","","Force unlock the spinlock.",0,[[]]],[11,"try_lock","","Tries to lock the mutex. If it is already locked, it will…",0,[[],[["spinmutexguard",3],["option",4]]]],[11,"get_mut","","Returns a mutable reference to the underlying data.",0,[[]]],[11,"leak","","Leak the lock guard, yielding a mutable reference to the…",1,[[]]],[11,"leak","","Leak the lock guard, yielding a mutable reference to the…",2,[[]]],[11,"new","","Creates a new `TicketMutex` that wraps the given value.",3,[[]]],[11,"into_inner","","Unwraps the inner value of this lock.",3,[[]]],[11,"lock","","Spins the thread until the value can be locked.",3,[[],["ticketmutexguard",3]]],[11,"force_unlock","","Force unlock the ticket lock, by serving the next ticket.",3,[[]]],[11,"try_lock","","Tries to lock this lock. If it\'s already locked, `None` is…",3,[[],[["option",4],["ticketmutexguard",3]]]],[11,"get_mut","","Returns a mutable reference to the underlying data.",3,[[]]],[11,"new","","Creates a new `Mutex`.",4,[[]]],[11,"into_inner","","Consumes this `Mutex` and unwraps the underlying data.",4,[[]]],[11,"lock","","Locks the spinlock and returns a guard.",4,[[],["mutexguard",3]]],[11,"force_unlock","","Force unlock the spinlock.",4,[[]]],[11,"try_lock","","Tries to lock the mutex. If it is already locked, it will…",4,[[],[["option",4],["mutexguard",3]]]],[11,"get_mut","","Returns a mutable reference to the underlying data.",4,[[]]],[11,"leak","","Leak the lock guard, yielding a mutable reference to the…",5,[[]]],[11,"new","spin","Creates a new lazy value with the given initializing…",6,[[],["lazy",3]]],[11,"force","","Forces the evaluation of this lazy value and returns a…",6,[[["lazy",3]]]],[18,"INIT","","Initialization constant of [`Once`].",7,null],[11,"new","","Creates a new [`Once`].",7,[[],["once",3]]],[11,"initialized","","Creates a new initialized [`Once`].",7,[[],["once",3]]],[11,"call_once","","Performs an initialization routine once and only once. The…",7,[[["fnonce",8]]]],[11,"get","","Returns a reference to the inner value if the [`Once`] has…",7,[[],["option",4]]],[11,"get_mut","","Returns a mutable reference to the inner value if the…",7,[[],["option",4]]],[11,"try_into_inner","","Returns a the inner value if the [`Once`] has been…",7,[[],["option",4]]],[11,"is_completed","","Returns a reference to the inner value if the [`Once`] has…",7,[[]]],[11,"wait","","Spins until the [`Once`] contains a value.",7,[[]]],[11,"poll","","Like [`Once::get`], but will spin if the [`Once`] is in…",7,[[],["option",4]]],[11,"new","","Creates a new spinlock wrapping the supplied data.",8,[[],["rwlock",3]]],[11,"into_inner","","Consumes this `RwLock`, returning the underlying data.",8,[[]]],[11,"read","","Locks this rwlock with shared read access, blocking the…",8,[[],["rwlockreadguard",3]]],[11,"try_read","","Attempt to acquire this lock with shared read access.",8,[[],[["option",4],["rwlockreadguard",3]]]],[11,"reader_count","","Return the number of readers that currently hold the lock…",8,[[]]],[11,"writer_count","","Return the number of writers that currently hold the lock.",8,[[]]],[11,"force_read_decrement","","Force decrement the reader count.",8,[[]]],[11,"force_write_unlock","","Force unlock exclusive write access.",8,[[]]],[11,"write","","Lock this rwlock with exclusive write access, blocking the…",8,[[],["rwlockwriteguard",3]]],[11,"try_write","","Attempt to lock this rwlock with exclusive write access.",8,[[],[["option",4],["rwlockwriteguard",3]]]],[11,"upgradeable_read","","Obtain a readable lock guard that can later be upgraded to…",8,[[],["rwlockupgradableguard",3]]],[11,"try_upgradeable_read","","Tries to obtain an upgradeable lock guard.",8,[[],[["rwlockupgradableguard",3],["option",4]]]],[11,"get_mut","","Returns a mutable reference to the underlying data.",8,[[]]],[11,"leak","","Leak the lock guard, yielding a reference to the…",9,[[]]],[11,"upgrade","","Upgrades an upgradeable lock guard to a writable lock guard.",10,[[],["rwlockwriteguard",3]]],[11,"try_upgrade","","Tries to upgrade an upgradeable lock guard to a writable…",10,[[],[["result",4],["rwlockwriteguard",3]]]],[11,"downgrade","","Downgrades the upgradeable lock guard to a readable,…",10,[[],["rwlockreadguard",3]]],[11,"leak","","Leak the lock guard, yielding a reference to the…",10,[[]]],[11,"downgrade","","Downgrades the writable lock guard to a readable, shared…",11,[[],["rwlockreadguard",3]]],[11,"downgrade_to_upgradeable","","Downgrades the writable lock guard to an upgradable,…",11,[[],["rwlockupgradableguard",3]]],[11,"leak","","Leak the lock guard, yielding a mutable reference to the…",11,[[]]],[11,"from","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"into","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"from","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"into","","",7,[[]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"from","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"into","","",8,[[]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"into","","",9,[[]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"into","","",11,[[]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"into","","",10,[[]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","spin::mutex","",0,[[]]],[11,"from","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"from","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"into","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"from","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"deref","","",1,[[]]],[11,"deref","","",2,[[]]],[11,"deref","","",5,[[]]],[11,"deref","spin","",6,[[]]],[11,"deref","","",9,[[]]],[11,"deref","","",10,[[]]],[11,"deref","","",11,[[]]],[11,"deref_mut","spin::mutex","",1,[[]]],[11,"deref_mut","","",2,[[]]],[11,"deref_mut","","",5,[[]]],[11,"deref_mut","spin","",11,[[]]],[11,"from","spin::mutex","",0,[[]]],[11,"from","","",3,[[]]],[11,"from","","",4,[[]]],[11,"from","spin","",7,[[]]],[11,"from","","",8,[[]]],[11,"fmt","spin::mutex","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","spin","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","spin::mutex","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","spin","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"drop","spin::mutex","The dropping of the MutexGuard will release the lock it…",1,[[]]],[11,"drop","","",2,[[]]],[11,"drop","spin","",9,[[]]],[11,"drop","","",10,[[]]],[11,"drop","","",11,[[]]],[11,"default","spin::mutex","",0,[[],["spinmutex",3]]],[11,"default","","",3,[[],["ticketmutex",3]]],[11,"default","","",4,[[],["mutex",3]]],[11,"default","spin","Creates a new lazy value using `Default` as the…",6,[[],["lazy",3]]],[11,"default","","",8,[[],["rwlock",3]]]],"p":[[3,"SpinMutex"],[3,"SpinMutexGuard"],[3,"TicketMutexGuard"],[3,"TicketMutex"],[3,"Mutex"],[3,"MutexGuard"],[3,"Lazy"],[3,"Once"],[3,"RwLock"],[3,"RwLockReadGuard"],[3,"RwLockUpgradableGuard"],[3,"RwLockWriteGuard"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);