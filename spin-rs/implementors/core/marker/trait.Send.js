(function() {var implementors = {};
implementors["spin"] = [{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Send for MutexGuard&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Send for RwLockReadGuard&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Send for RwLockWriteGuard&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Send for RwLockUpgradableGuard&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized + Send&gt; Send for Mutex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized + Send&gt; Send for RwLock&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Send&gt; Send for Once&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()