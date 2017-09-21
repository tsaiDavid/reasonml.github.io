webpackJsonp([264],{"./node_modules/json-loader/index.js!./.cache/json/api-lazy-html.json":function(e,o){e.exports={data:{file:{relativePath:"api/Lazy.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Int64.html" title="Int64">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Lexing.html" title="Lexing">Next</a>\n</div>\n<h1>Module <a href="type_Lazy.html">Lazy</a></h1>\n\n<pre><span class="keyword">module</span> Lazy: sig .. end</pre><div class="info module top">\nDeferred computations.<br>\n</div>\n<hr width="100%">\n\n<pre id="TYPEt"><span class="keyword">type</span> t &apos;a = lazy_t &apos;a;\n</pre>\n<div class="info ">\nA value of type <code class="code">&apos;a Lazy.t</code> is a deferred computation, called\n   a suspension, that has a result of type <code class="code">&apos;a</code>.  The special\n   expression syntax <code class="code">lazy (expr)</code> makes a suspension of the\n   computation of <code class="code">expr</code>, without computing <code class="code">expr</code> itself yet.\n   &quot;Forcing&quot; the suspension will then compute <code class="code">expr</code> and return its\n   result.\n<p>\n\n   Note: <code class="code">lazy_t</code> is the built-in type constructor used by the compiler\n   for the <code class="code">lazy</code> keyword.  You should not use it directly.  Always use\n   <code class="code">Lazy.t</code> instead.\n</p><p>\n\n   Note: <code class="code">Lazy.force</code> is not thread-safe.  If you use this module in\n   a multi-threaded program, you will need to add some locks.\n</p><p>\n\n   Note: if the program is compiled with the <code class="code">-rectypes</code> option,\n   ill-founded recursive definitions of the form <code class="code">let rec x = lazy x</code>\n   or <code class="code">let rec x = lazy(lazy(...(lazy x)))</code> are accepted by the type-checker\n   and lead, when forced, to ill-formed values that trigger infinite\n   loops in the garbage collector and other parts of the run-time system.\n   Without the <code class="code">-rectypes</code> option, such ill-founded recursive definitions\n   are rejected by the type-checker.<br>\n</p></div>\n\n\n<pre id="EXCEPTIONUndefined"><span class="keyword">exception</span> Undefined;\n</pre>\n\n<pre id="VALforce"><span class="keyword">let</span> force: t &apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">force x</code> forces the suspension <code class="code">x</code> and returns its result.\n   If <code class="code">x</code> has already been forced, <code class="code">Lazy.force x</code> returns the\n   same value again without recomputing it.  If it raised an exception,\n   the same exception is raised again.\n   Raise <code class="code">Undefined</code> if the forcing of <code class="code">x</code> tries to force <code class="code">x</code> itself\n   recursively.<br>\n</div>\n\n<pre id="VALforce_val"><span class="keyword">let</span> force_val: t &apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">force_val x</code> forces the suspension <code class="code">x</code> and returns its\n    result.  If <code class="code">x</code> has already been forced, <code class="code">force_val x</code>\n    returns the same value again without recomputing it.\n    Raise <code class="code">Undefined</code> if the forcing of <code class="code">x</code> tries to force <code class="code">x</code> itself\n    recursively.\n    If the computation of <code class="code">x</code> raises an exception, it is unspecified\n    whether <code class="code">force_val x</code> raises the same exception or <code class="code">Undefined</code>.<br>\n</div>\n\n<pre id="VALfrom_fun"><span class="keyword">let</span> from_fun: (unit =&gt; &apos;a) =&gt; t &apos;a;\n</pre><div class="info ">\n<code class="code">from_fun f</code> is the same as <code class="code">lazy (f ())</code> but slightly more efficient.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre id="VALfrom_val"><span class="keyword">let</span> from_val: &apos;a =&gt; t &apos;a;\n</pre><div class="info ">\n<code class="code">from_val v</code> returns an already-forced suspension of <code class="code">v</code>.\n    This is for special purposes only and should not be confused with\n    <code class="code">lazy (v)</code>.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre id="VALis_val"><span class="keyword">let</span> is_val: t &apos;a =&gt; bool;\n</pre><div class="info ">\n<code class="code">is_val x</code> returns <code class="code">true</code> if <code class="code">x</code> has already been forced and\n    did not raise an exception.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre id="VALlazy_from_fun"><span class="keyword">let</span> lazy_from_fun: (unit =&gt; &apos;a) =&gt; t &apos;a;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>synonym for <code class="code">from_fun</code>.<br>\n</div>\n\n<pre id="VALlazy_from_val"><span class="keyword">let</span> lazy_from_val: &apos;a =&gt; t &apos;a;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>synonym for <code class="code">from_val</code>.<br>\n</div>\n\n<pre id="VALlazy_is_val"><span class="keyword">let</span> lazy_is_val: t &apos;a =&gt; bool;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>synonym for <code class="code">is_val</code>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Lazy.html"}}}});
//# sourceMappingURL=path---api-lazy-html-53c4dd23f7f51ecb8a71.js.map