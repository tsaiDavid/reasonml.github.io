webpackJsonp([222],{"./node_modules/json-loader/index.js!./.cache/json/api-printexc-slot-html.json":function(e,o){e.exports={data:{file:{relativePath:"api/Printexc.Slot.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="Printexc.html" title="Printexc">Up</a>\n&#xA0;</div>\n<h1>Module <a href="type_Printexc.Slot.html">Printexc.Slot</a></h1>\n\n<pre><span class="keyword">module</span> Slot: sig .. end</pre><hr width="100%">\n\n<pre id="TYPEt"><span class="keyword">type</span> t = Printexc.backtrace_slot;\n</pre>\n\n\n<pre id="VALis_raise"><span class="keyword">let</span> is_raise: t =&gt; bool;\n</pre><div class="info ">\n<code class="code">is_raise slot</code> is <code class="code">true</code> when <code class="code">slot</code> refers to a raising\n      point in the code, and <code class="code">false</code> when it comes from a simple\n      function call.<br>\n<b>Since</b> 4.02<br>\n</div>\n\n<pre id="VALlocation"><span class="keyword">let</span> location: t =&gt; option Printexc.location;\n</pre><div class="info ">\n<code class="code">location slot</code> returns the location information of the slot,\n      if available, and <code class="code">None</code> otherwise.\n<p>\n\n      Some possible reasons for failing to return a location are as follow:</p><ul>\n<li>the slot corresponds to a compiler-inserted raise</li>\n<li>the slot corresponds to a part of the program that has not been\n      compiled with debug information (<code class="code">-g</code>)</li>\n</ul>\n<br>\n<b>Since</b> 4.02<br>\n</div>\n\n<pre id="VALformat"><span class="keyword">let</span> format: int =&gt; t =&gt; option string;\n</pre><div class="info ">\n<code class="code">format pos slot</code> returns the string representation of <code class="code">slot</code> as\n      <code class="code">raw_backtrace_to_string</code> would format it, assuming it is the\n      <code class="code">pos</code>-th element of the backtrace: the <code class="code">0</code>-th element is\n      pretty-printed differently than the others.\n<p>\n\n      Whole-backtrace printing functions also skip some uninformative\n      slots; in that case, <code class="code">format pos slot</code> returns <code class="code">None</code>.<br>\n<b>Since</b> 4.02<br>\n</p></div>\n</div>'}}},pathContext:{relativePath:"api/Printexc.Slot.html"}}}});
//# sourceMappingURL=path---api-printexc-slot-html-d898bdfe94236c5563d2.js.map