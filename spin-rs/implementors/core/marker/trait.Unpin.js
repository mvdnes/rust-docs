(function() {var implementors = {};
implementors["spin"] = [{"text":"impl&lt;T, F&gt; Unpin for Lazy&lt;T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Unpin for SpinMutex&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Unpin for SpinMutexGuard&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Unpin for TicketMutex&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Unpin for TicketMutexGuard&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Unpin for Mutex&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Unpin for MutexGuard&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Once&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Unpin for RwLock&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Unpin for RwLockReadGuard&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Unpin for RwLockWriteGuard&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Unpin for RwLockUpgradableGuard&lt;'a, T&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()