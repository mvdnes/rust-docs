(function() {var implementors = {};
implementors["spin"] = [{"text":"impl&lt;T&gt; !Freeze for Mutex&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Freeze for MutexGuard&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Freeze for RwLock&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Freeze for RwLockReadGuard&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Freeze for RwLockWriteGuard&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Freeze for RwLockUpgradableGuard&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Freeze for Once&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, F&nbsp;=&nbsp;fn() -&gt; T&gt; !Freeze for Lazy&lt;T, F&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()