(function() {var implementors = {};
implementors["spin"] = [{"text":"impl&lt;R&gt; Send for Barrier&lt;R&gt;","synthetic":true,"types":[]},{"text":"impl Send for BarrierWaitResult","synthetic":true,"types":[]},{"text":"impl&lt;T, F, R&gt; Send for Lazy&lt;T, F, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized, R&gt; Send for SpinMutex&lt;T, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Send for SpinMutexGuard&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Send for MutexGuard&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Send for RwLockReadGuard&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized, R&gt; Send for RwLockWriteGuard&lt;'a, T, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized, R&gt; Send for RwLockUpgradableGuard&lt;'a, T, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Spin","synthetic":true,"types":[]},{"text":"impl Send for Loop","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized + Send&gt; Send for SpinMutex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized + Send, R&gt; Send for Mutex&lt;T, R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Send, R&gt; Send for Once&lt;T, R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized + Send, R&gt; Send for RwLock&lt;T, R&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()