webpackJsonp([286],{"./node_modules/json-loader/index.js!./.cache/json/api-gc-html.json":function(e,t){e.exports={data:{file:{relativePath:"api/Gc.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Format.html" title="Format">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Genlex.html" title="Genlex">Next</a>\n</div>\n<h1>Module <a href="type_Gc.html">Gc</a></h1>\n\n<pre><span class="keyword">module</span> Gc: sig .. end</pre><div class="info module top">\nMemory management control and statistics; finalised values.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> stat = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>minor_words&#xA0;: float;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of words allocated in the minor heap since\n       the program was started.  This number is accurate in\n       byte-code programs, but only an approximation in programs\n       compiled to native code.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>promoted_words&#xA0;: float;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of words allocated in the minor heap that\n       survived a minor collection and were moved to the major heap\n       since the program was started.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>major_words&#xA0;: float;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of words allocated in the major heap, including\n       the promoted words, since the program was started.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>minor_collections&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of minor collections since the program was started.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>major_collections&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of major collection cycles completed since the program\n        was started.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>heap_words&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nTotal size of the major heap, in words.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>heap_chunks&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of contiguous pieces of memory that make up the major heap.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>live_words&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of words of live data in the major heap, including the header\n       words.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>live_blocks&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of live blocks in the major heap.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>free_words&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of words in the free list.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>free_blocks&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of blocks in the free list.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>largest_free&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nSize (in words) of the largest block in the free list.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>fragments&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of wasted words due to fragmentation.  These are\n       1-words free blocks placed between two live blocks.  They\n       are not available for allocation.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>compactions&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nNumber of heap compactions since the program was started.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>top_heap_words&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nMaximum size reached by the major heap, in words.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>stack_size&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nCurrent size of the stack, in words.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr></tbody></table>\n}\n\n<div class="info ">\nThe memory management counters are returned in a <code class="code">stat</code> record.\n<p>\n\n   The total amount of memory allocated by the program since it was started\n   is (in words) <code class="code">minor_words + major_words - promoted_words</code>.  Multiply by\n   the word size (4 on a 32-bit machine, 8 on a 64-bit machine) to get\n   the number of bytes.<br>\n</p></div>\n\n\n<pre><span class="keyword">type</span> control = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;minor_heap_size&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nThe size (in words) of the minor heap.  Changing\n       this parameter will trigger a minor collection.  Default: 256k.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;major_heap_increment&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nHow much to add to the major heap when increasing it. If this\n        number is less than or equal to 1000, it is a percentage of\n        the current heap size (i.e. setting it to 100 will double the heap\n        size at each increase). If it is more than 1000, it is a fixed\n        number of words that will be added to the heap. Default: 15.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;space_overhead&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nThe major GC speed is computed from this parameter.\n       This is the memory that will be &quot;wasted&quot; because the GC does not\n       immediatly collect unreachable blocks.  It is expressed as a\n       percentage of the memory used for live data.\n       The GC will work more (use more CPU time and collect\n       blocks more eagerly) if <code class="code">space_overhead</code> is smaller.\n       Default: 80.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;verbose&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nThis value controls the GC messages on standard error output.\n       It is a sum of some of the following flags, to print messages\n       on the corresponding events:<ul>\n<li><code class="code">0x001</code> Start of major GC cycle.</li>\n<li><code class="code">0x002</code> Minor collection and major GC slice.</li>\n<li><code class="code">0x004</code> Growing and shrinking of the heap.</li>\n<li><code class="code">0x008</code> Resizing of stacks and memory manager tables.</li>\n<li><code class="code">0x010</code> Heap compaction.</li>\n<li><code class="code">0x020</code> Change of GC parameters.</li>\n<li><code class="code">0x040</code> Computation of major GC slice size.</li>\n<li><code class="code">0x080</code> Calling of finalisation functions.</li>\n<li><code class="code">0x100</code> Bytecode executable and shared library search at start-up.</li>\n<li><code class="code">0x200</code> Computation of compaction-triggering condition.\n       Default: 0.</li>\n</ul>\n<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;max_overhead&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nHeap compaction is triggered when the estimated amount\n       of &quot;wasted&quot; memory is more than <code class="code">max_overhead</code> percent of the\n       amount of live data.  If <code class="code">max_overhead</code> is set to 0, heap\n       compaction is triggered at the end of each major GC cycle\n       (this setting is intended for testing purposes only).\n       If <code class="code">max_overhead &gt;= 1000000</code>, compaction is never triggered.\n       If compaction is permanently disabled, it is strongly suggested\n       to set <code class="code">allocation_policy</code> to 1.\n       Default: 500.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;stack_limit&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nThe maximum size of the stack (in words).  This is only\n       relevant to the byte-code runtime, as the native code runtime\n       uses the operating system&apos;s stack.  Default: 1024k.<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>mutable&#xA0;allocation_policy&#xA0;: int;</code></td>\n<td class="typefieldcomment" align="left" valign="top"><code>(*</code></td><td class="typefieldcomment" align="left" valign="top"><div class="info ">\nThe policy used for allocating in the heap.  Possible\n        values are 0 and 1.  0 is the next-fit policy, which is\n        quite fast but can result in fragmentation.  1 is the\n        first-fit policy, which can be slower in some cases but\n        can be better for programs with fragmentation problems.\n        Default: 0.<br>\n<b>Since</b> 3.11.0<br>\n</div>\n</td><td class="typefieldcomment" align="left" valign="bottom"><code>*)</code></td>\n</tr></tbody></table>\n}\n\n<div class="info ">\nThe GC parameters are given as a <code class="code">control</code> record.  Note that\n    these parameters can also be initialised by setting the\n    OCAMLRUNPARAM environment variable.  See the documentation of\n    <code class="code">ocamlrun</code>.<br>\n</div>\n\n\n<pre id="VALstat"><span class="keyword">let</span> stat: unit =&gt; stat;\n</pre><div class="info ">\nReturn the current values of the memory management counters in a\n   <code class="code">stat</code> record.  This function examines every heap block to get the\n   statistics.<br>\n</div>\n\n<pre id="VALquick_stat"><span class="keyword">let</span> quick_stat: unit =&gt; stat;\n</pre><div class="info ">\nSame as <code class="code">stat</code> except that <code class="code">live_words</code>, <code class="code">live_blocks</code>, <code class="code">free_words</code>,\n    <code class="code">free_blocks</code>, <code class="code">largest_free</code>, and <code class="code">fragments</code> are set to 0.  This\n    function is much faster than <code class="code">stat</code> because it does not need to go\n    through the heap.<br>\n</div>\n\n<pre id="VALcounters"><span class="keyword">let</span> counters: unit =&gt; (float, float, float);\n</pre><div class="info ">\nReturn <code class="code">(minor_words, promoted_words, major_words)</code>.  This function\n    is as fast as <code class="code">quick_stat</code>.<br>\n</div>\n\n<pre id="VALget"><span class="keyword">let</span> get: unit =&gt; control;\n</pre><div class="info ">\nReturn the current values of the GC parameters in a <code class="code">control</code> record.<br>\n</div>\n\n<pre id="VALset"><span class="keyword">let</span> set: control =&gt; unit;\n</pre><div class="info ">\n<code class="code">set r</code> changes the GC parameters according to the <code class="code">control</code> record <code class="code">r</code>.\n   The normal usage is: <code class="code">Gc.set { (Gc.get()) with Gc.verbose = 0x00d }</code><br>\n</div>\n\n<pre id="VALminor"><span class="keyword">let</span> minor: unit =&gt; unit;\n</pre><div class="info ">\nTrigger a minor collection.<br>\n</div>\n\n<pre id="VALmajor_slice"><span class="keyword">let</span> major_slice: int =&gt; int;\n</pre><div class="info ">\nDo a minor collection and a slice of major collection.  The argument\n    is the size of the slice, 0 to use the automatically-computed\n    slice size.  In all cases, the result is the computed slice size.<br>\n</div>\n\n<pre id="VALmajor"><span class="keyword">let</span> major: unit =&gt; unit;\n</pre><div class="info ">\nDo a minor collection and finish the current major collection cycle.<br>\n</div>\n\n<pre id="VALfull_major"><span class="keyword">let</span> full_major: unit =&gt; unit;\n</pre><div class="info ">\nDo a minor collection, finish the current major collection cycle,\n   and perform a complete new cycle.  This will collect all currently\n   unreachable blocks.<br>\n</div>\n\n<pre id="VALcompact"><span class="keyword">let</span> compact: unit =&gt; unit;\n</pre><div class="info ">\nPerform a full major collection and compact the heap.  Note that heap\n   compaction is a lengthy operation.<br>\n</div>\n\n<pre id="VALprint_stat"><span class="keyword">let</span> print_stat: Pervasives.out_channel =&gt; unit;\n</pre><div class="info ">\nPrint the current values of the memory management counters (in\n   human-readable form) into the channel argument.<br>\n</div>\n\n<pre id="VALallocated_bytes"><span class="keyword">let</span> allocated_bytes: unit =&gt; float;\n</pre><div class="info ">\nReturn the total number of bytes allocated since the program was\n   started.  It is returned as a <code class="code">float</code> to avoid overflow problems\n   with <code class="code">int</code> on 32-bit machines.<br>\n</div>\n\n<pre id="VALfinalise"><span class="keyword">let</span> finalise: (&apos;a =&gt; unit) =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">finalise f v</code> registers <code class="code">f</code> as a finalisation function for <code class="code">v</code>.\n   <code class="code">v</code> must be heap-allocated.  <code class="code">f</code> will be called with <code class="code">v</code> as\n   argument at some point between the first time <code class="code">v</code> becomes unreachable\n   and the time <code class="code">v</code> is collected by the GC.  Several functions can\n   be registered for the same value, or even several instances of the\n   same function.  Each instance will be called once (or never,\n   if the program terminates before <code class="code">v</code> becomes unreachable).\n<p>\n\n   The GC will call the finalisation functions in the order of\n   deallocation.  When several values become unreachable at the\n   same time (i.e. during the same GC cycle), the finalisation\n   functions will be called in the reverse order of the corresponding\n   calls to <code class="code">finalise</code>.  If <code class="code">finalise</code> is called in the same order\n   as the values are allocated, that means each value is finalised\n   before the values it depends upon.  Of course, this becomes\n   false if additional dependencies are introduced by assignments.\n</p><p>\n\n   In the presence of multiple OCaml threads it should be assumed that\n   any particular finaliser may be executed in any of the threads.\n</p><p>\n\n   Anything reachable from the closure of finalisation functions\n   is considered reachable, so the following code will not work\n   as expected:</p><ul>\n<li><code class="code"> let v = ... in Gc.finalise (fun x -&gt; ... v ...) v </code></li>\n</ul>\n\n   Instead you should make sure that <code class="code">v</code> is not in the closure of\n   the finalisation function by writing:<ul>\n<li><code class="code"> let f = fun x -&gt; ... ;; let v = ... in Gc.finalise f v </code></li>\n</ul>\n\n   The <code class="code">f</code> function can use all features of OCaml, including\n   assignments that make the value reachable again.  It can also\n   loop forever (in this case, the other\n   finalisation functions will not be called during the execution of f,\n   unless it calls <code class="code">finalise_release</code>).\n   It can call <code class="code">finalise</code> on <code class="code">v</code> or other values to register other\n   functions or even itself.  It can raise an exception; in this case\n   the exception will interrupt whatever the program was doing when\n   the function was called.\n<p>\n\n   <code class="code">finalise</code> will raise <code class="code">Invalid_argument</code> if <code class="code">v</code> is not\n   heap-allocated.  Some examples of values that are not\n   heap-allocated are integers, constant constructors, booleans,\n   the empty array, the empty list, the unit value.  The exact list\n   of what is heap-allocated or not is implementation-dependent.\n   Some constant values can be heap-allocated but never deallocated\n   during the lifetime of the program, for example a list of integer\n   constants; this is also implementation-dependent.\n   You should also be aware that compiler optimisations may duplicate\n   some immutable values, for example floating-point numbers when\n   stored into arrays, so they can be finalised and collected while\n   another copy is still in use by the program.\n</p><p>\n\n   The results of calling <a href="String.html#VALmake"><code class="code">String.make</code></a>, <a href="Bytes.html#VALmake"><code class="code">Bytes.make</code></a>, <a href="Bytes.html#VALcreate"><code class="code">Bytes.create</code></a>,\n   <a href="Array.html#VALmake"><code class="code">Array.make</code></a>, and <a href="Pervasives.html#VALref"><code class="code">Pervasives.ref</code></a> are guaranteed to be\n   heap-allocated and non-constant except when the length argument is <code class="code">0</code>.<br>\n</p></div>\n\n<pre id="VALfinalise_release"><span class="keyword">let</span> finalise_release: unit =&gt; unit;\n</pre><div class="info ">\nA finalisation function may call <code class="code">finalise_release</code> to tell the\n    GC that it can launch the next finalisation function without waiting\n    for the current one to return.<br>\n</div>\n\n<pre id="TYPEalarm"><span class="keyword">type</span> alarm;\n</pre>\n<div class="info ">\nAn alarm is a piece of data that calls a user function at the end of\n   each major GC cycle.  The following functions are provided to create\n   and delete alarms.<br>\n</div>\n\n\n<pre id="VALcreate_alarm"><span class="keyword">let</span> create_alarm: (unit =&gt; unit) =&gt; alarm;\n</pre><div class="info ">\n<code class="code">create_alarm f</code> will arrange for <code class="code">f</code> to be called at the end of each\n   major GC cycle, starting with the current cycle or the next one.\n   A value of type <code class="code">alarm</code> is returned that you can\n   use to call <code class="code">delete_alarm</code>.<br>\n</div>\n\n<pre id="VALdelete_alarm"><span class="keyword">let</span> delete_alarm: alarm =&gt; unit;\n</pre><div class="info ">\n<code class="code">delete_alarm a</code> will stop the calls to the function associated\n   to <code class="code">a</code>.  Calling <code class="code">delete_alarm a</code> again has no effect.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Gc.html"}}}});
//# sourceMappingURL=path---api-gc-html-b96e3a0716e6334baff8.js.map