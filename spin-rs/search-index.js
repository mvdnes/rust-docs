var searchIndex = JSON.parse('{\
"spin":{"doc":"This crate provides spin-based versions of the primitives …","i":[[0,"barrier","spin","Synchronization primitive allowing multiple threads to …",null,null],[3,"Barrier","spin::barrier","A primitive that synchronizes the execution of multiple …",null,null],[3,"BarrierWaitResult","","A <code>BarrierWaitResult</code> is returned by <code>wait</code> when all threads …",null,null],[11,"wait","","Blocks the current thread until all threads have …",0,[[],["barrierwaitresult",3]]],[11,"new","","Creates a new barrier that can block a given number of …",0,[[]]],[11,"is_leader","","Returns whether this thread from <code>wait</code> is the \\\"leader …",1,[[]]],[0,"lazy","spin","Synchronization primitives for lazy evaluation.",null,null],[3,"Lazy","spin::lazy","A value which is initialized on the first access.",null,null],[11,"new","","Creates a new lazy value with the given initializing …",2,[[]]],[11,"force","","Forces the evaluation of this lazy value and returns a …",2,[[]]],[0,"mutex","spin","Locks that have the same behaviour as a mutex.",null,null],[0,"spin","spin::mutex","A naïve spinning mutex.",null,null],[3,"SpinMutex","spin::mutex::spin","A spin lock providing mutually exclusive access to data.",null,null],[3,"SpinMutexGuard","","A guard that provides mutable data access.",null,null],[11,"new","","Creates a new [<code>SpinMutex</code>] wrapping the supplied data.",3,[[]]],[11,"into_inner","","Consumes this [<code>SpinMutex</code>] and unwraps the underlying data.",3,[[]]],[11,"lock","","Locks the [<code>SpinMutex</code>] and returns a guard that permits …",3,[[],["spinmutexguard",3]]],[11,"is_locked","","Returns <code>true</code> if the lock is currently held.",3,[[]]],[11,"force_unlock","","Force unlock this [<code>SpinMutex</code>].",3,[[]]],[11,"try_lock","","Try to lock this [<code>SpinMutex</code>], returning a lock guard if …",3,[[],[["spinmutexguard",3],["option",4]]]],[11,"get_mut","","Returns a mutable reference to the underlying data.",3,[[]]],[11,"leak","","Leak the lock guard, yielding a mutable reference to the …",4,[[]]],[3,"Mutex","spin::mutex","A spin-based lock providing mutually exclusive access to …",null,null],[3,"MutexGuard","","A generic guard that will protect some data access and …",null,null],[11,"new","","Creates a new [<code>Mutex</code>] wrapping the supplied data.",5,[[]]],[11,"into_inner","","Consumes this [<code>Mutex</code>] and unwraps the underlying data.",5,[[]]],[11,"lock","","Locks the [<code>Mutex</code>] and returns a guard that permits access …",5,[[],["mutexguard",3]]],[11,"is_locked","","Returns <code>true</code> if the lock is currently held.",5,[[]]],[11,"force_unlock","","Force unlock this [<code>Mutex</code>].",5,[[]]],[11,"try_lock","","Try to lock this [<code>Mutex</code>], returning a lock guard if …",5,[[],[["option",4],["mutexguard",3]]]],[11,"get_mut","","Returns a mutable reference to the underlying data.",5,[[]]],[11,"leak","","Leak the lock guard, yielding a mutable reference to the …",6,[[]]],[0,"once","spin","Synchronization primitives for one-time evaluation.",null,null],[3,"Once","spin::once","A primitive that provides lazy one-time initialization.",null,null],[11,"call_once","","Performs an initialization routine once and only once. …",7,[[["fnonce",8]]]],[11,"wait","","Spins until the [<code>Once</code>] contains a value.",7,[[]]],[11,"poll","","Like [<code>Once::get</code>], but will spin if the [<code>Once</code>] is in the …",7,[[],["option",4]]],[18,"INIT","","Initialization constant of [<code>Once</code>].",7,null],[11,"new","","Creates a new [<code>Once</code>].",7,[[]]],[11,"initialized","","Creates a new initialized [<code>Once</code>].",7,[[]]],[11,"get","","Returns a reference to the inner value if the [<code>Once</code>] has …",7,[[],["option",4]]],[11,"get_unchecked","","Returns a reference to the inner value on the unchecked …",7,[[]]],[11,"get_mut","","Returns a mutable reference to the inner value if the […",7,[[],["option",4]]],[11,"try_into_inner","","Returns a the inner value if the [<code>Once</code>] has been …",7,[[],["option",4]]],[11,"is_completed","","Returns a reference to the inner value if the [<code>Once</code>] has …",7,[[]]],[0,"rwlock","spin","A lock that provides data access to either one writer or …",null,null],[3,"RwLock","spin::rwlock","A lock that provides data access to either one writer or …",null,null],[3,"RwLockReadGuard","","A guard that provides immutable data access.",null,null],[3,"RwLockWriteGuard","","A guard that provides mutable data access.",null,null],[3,"RwLockUpgradableGuard","","A guard that provides immutable data access but can be …",null,null],[11,"new","","Creates a new spinlock wrapping the supplied data.",8,[[]]],[11,"into_inner","","Consumes this <code>RwLock</code>, returning the underlying data.",8,[[]]],[11,"read","","Locks this rwlock with shared read access, blocking the …",8,[[],["rwlockreadguard",3]]],[11,"write","","Lock this rwlock with exclusive write access, blocking …",8,[[],["rwlockwriteguard",3]]],[11,"upgradeable_read","","Obtain a readable lock guard that can later be upgraded …",8,[[],["rwlockupgradableguard",3]]],[11,"try_read","","Attempt to acquire this lock with shared read access.",8,[[],[["rwlockreadguard",3],["option",4]]]],[11,"reader_count","","Return the number of readers that currently hold the lock …",8,[[]]],[11,"writer_count","","Return the number of writers that currently hold the lock.",8,[[]]],[11,"force_read_decrement","","Force decrement the reader count.",8,[[]]],[11,"force_write_unlock","","Force unlock exclusive write access.",8,[[]]],[11,"try_write","","Attempt to lock this rwlock with exclusive write access.",8,[[],[["rwlockwriteguard",3],["option",4]]]],[11,"try_upgradeable_read","","Tries to obtain an upgradeable lock guard.",8,[[],[["option",4],["rwlockupgradableguard",3]]]],[11,"get_mut","","Returns a mutable reference to the underlying data.",8,[[]]],[11,"leak","","Leak the lock guard, yielding a reference to the …",9,[[]]],[11,"upgrade","","Upgrades an upgradeable lock guard to a writable lock …",10,[[],["rwlockwriteguard",3]]],[11,"try_upgrade","","Tries to upgrade an upgradeable lock guard to a writable …",10,[[],[["result",4],["rwlockwriteguard",3]]]],[11,"downgrade","","Downgrades the upgradeable lock guard to a readable, …",10,[[],["rwlockreadguard",3]]],[11,"leak","","Leak the lock guard, yielding a reference to the …",10,[[]]],[11,"downgrade","","Downgrades the writable lock guard to a readable, shared …",11,[[],["rwlockreadguard",3]]],[11,"downgrade_to_upgradeable","","Downgrades the writable lock guard to an upgradable, …",11,[[],["rwlockupgradableguard",3]]],[11,"leak","","Leak the lock guard, yielding a mutable reference to the …",11,[[]]],[0,"relax","spin","Strategies that determine the behaviour of locks when …",null,null],[8,"RelaxStrategy","spin::relax","A trait implemented by spinning relax strategies.",null,null],[10,"relax","","Perform the relaxing operation during a period of …",12,[[]]],[3,"Spin","","A strategy that rapidly spins while informing the CPU …",null,null],[3,"Loop","","A strategy that rapidly spins, without telling the CPU to …",null,null],[0,"lock_api","spin","Spin synchronisation primitives, but compatible with …",null,null],[6,"Mutex","spin::lock_api","A lock that provides mutually exclusive data access …",null,null],[6,"MutexGuard","","A guard that provides mutable data access (compatible …",null,null],[6,"RwLock","","A lock that provides data access to either one writer or …",null,null],[6,"RwLockReadGuard","","A guard that provides immutable data access (compatible …",null,null],[6,"RwLockWriteGuard","","A guard that provides mutable data access (compatible …",null,null],[6,"RwLockUpgradableReadGuard","","A guard that provides immutable data access but can be …",null,null],[6,"Barrier","spin","A primitive that synchronizes the execution of multiple …",null,null],[6,"Lazy","","A value which is initialized on the first access. See […",null,null],[6,"Mutex","","A primitive that synchronizes the execution of multiple …",null,null],[6,"Once","","A primitive that provides lazy one-time initialization. …",null,null],[6,"RwLock","","A lock that provides data access to either one writer or …",null,null],[6,"RwLockUpgradableGuard","","A guard that provides immutable data access but can be …",null,null],[6,"RwLockWriteGuard","","A guard that provides mutable data access. See […",null,null],[11,"from","spin::barrier","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"into","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"into","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","spin::lazy","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"into","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","spin::mutex::spin","",3,[[]]],[11,"from","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"into","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"into","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","spin::mutex","",5,[[]]],[11,"from","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"into","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"into","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","spin::once","",7,[[]]],[11,"from","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"into","","",7,[[]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","spin::rwlock","",8,[[]]],[11,"from","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"into","","",8,[[]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"into","","",9,[[]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"into","","",11,[[]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"into","","",10,[[]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","spin::relax","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"into","","",13,[[]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"into","","",14,[[]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"relax","","",13,[[]]],[11,"relax","","",14,[[]]],[11,"deref","spin::lazy","",2,[[]]],[11,"deref","spin::mutex::spin","",4,[[]]],[11,"deref","spin::mutex","",6,[[]]],[11,"deref","spin::rwlock","",9,[[]]],[11,"deref","","",10,[[]]],[11,"deref","","",11,[[]]],[11,"deref_mut","spin::mutex::spin","",4,[[]]],[11,"deref_mut","spin::mutex","",6,[[]]],[11,"deref_mut","spin::rwlock","",11,[[]]],[11,"from","spin::mutex::spin","",3,[[]]],[11,"from","spin::mutex","",5,[[]]],[11,"from","spin::once","",7,[[]]],[11,"from","spin::rwlock","",8,[[]]],[11,"fmt","spin::lazy","",2,[[["formatter",3]],["result",6]]],[11,"fmt","spin::mutex::spin","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","spin::mutex","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","spin::once","",7,[[["formatter",3]],["result",6]]],[11,"fmt","spin::rwlock","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","spin::mutex::spin","",4,[[["formatter",3]],["result",6]]],[11,"fmt","spin::mutex","",6,[[["formatter",3]],["result",6]]],[11,"fmt","spin::rwlock","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"drop","spin::mutex::spin","The dropping of the MutexGuard will release the lock it …",4,[[]]],[11,"drop","spin::once","",7,[[]]],[11,"drop","spin::rwlock","",9,[[]]],[11,"drop","","",10,[[]]],[11,"drop","","",11,[[]]],[11,"default","spin::lazy","Creates a new lazy value using <code>Default</code> as the …",2,[[]]],[11,"default","spin::mutex::spin","",3,[[]]],[11,"default","spin::mutex","",5,[[]]],[11,"default","spin::rwlock","",8,[[]]],[11,"lock","spin::mutex::spin","",3,[[]]],[11,"try_lock","","",3,[[]]],[11,"unlock","","",3,[[]]],[11,"is_locked","","",3,[[]]],[11,"lock","spin::mutex","",5,[[]]],[11,"try_lock","","",5,[[]]],[11,"unlock","","",5,[[]]],[11,"is_locked","","",5,[[]]],[11,"lock_exclusive","spin::rwlock","",8,[[]]],[11,"try_lock_exclusive","","",8,[[]]],[11,"unlock_exclusive","","",8,[[]]],[11,"lock_shared","","",8,[[]]],[11,"try_lock_shared","","",8,[[]]],[11,"unlock_shared","","",8,[[]]],[11,"is_locked","","",8,[[]]],[11,"downgrade","","",8,[[]]],[11,"lock_upgradable","","",8,[[]]],[11,"try_lock_upgradable","","",8,[[]]],[11,"unlock_upgradable","","",8,[[]]],[11,"upgrade","","",8,[[]]],[11,"try_upgrade","","",8,[[]]]],"p":[[3,"Barrier"],[3,"BarrierWaitResult"],[3,"Lazy"],[3,"SpinMutex"],[3,"SpinMutexGuard"],[3,"Mutex"],[3,"MutexGuard"],[3,"Once"],[3,"RwLock"],[3,"RwLockReadGuard"],[3,"RwLockUpgradableGuard"],[3,"RwLockWriteGuard"],[8,"RelaxStrategy"],[3,"Spin"],[3,"Loop"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);