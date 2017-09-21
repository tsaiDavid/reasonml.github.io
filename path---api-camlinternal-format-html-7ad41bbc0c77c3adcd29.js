webpackJsonp([296],{"./node_modules/json-loader/index.js!./.cache/json/api-camlinternal-format-html.json":function(a,t){a.exports={data:{file:{relativePath:"api/CamlinternalFormat.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Callback.html" title="Callback">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="CamlinternalFormatBasics.html" title="CamlinternalFormatBasics">Next</a>\n</div>\n<h1>Module <a href="type_CamlinternalFormat.html">CamlinternalFormat</a></h1>\n\n<pre><span class="keyword">module</span> CamlinternalFormat: sig .. end</pre><hr width="100%">\n\n<pre id="VALis_in_char_set"><span class="keyword">let</span> is_in_char_set: CamlinternalFormatBasics.char_set =&gt; char =&gt; bool;\n</pre>\n<pre id="VALrev_char_set"><span class="keyword">let</span> rev_char_set: CamlinternalFormatBasics.char_set =&gt; CamlinternalFormatBasics.char_set;\n</pre>\n<pre id="TYPEmutable_char_set"><span class="keyword">type</span> mutable_char_set = bytes;\n</pre>\n\n\n<pre id="VALcreate_char_set"><span class="keyword">let</span> create_char_set: unit =&gt; mutable_char_set;\n</pre>\n<pre id="VALadd_in_char_set"><span class="keyword">let</span> add_in_char_set: mutable_char_set =&gt; char =&gt; unit;\n</pre>\n<pre id="VALfreeze_char_set"><span class="keyword">let</span> freeze_char_set: mutable_char_set =&gt; CamlinternalFormatBasics.char_set;\n</pre>\n<pre><span class="keyword">type</span> (&apos;a, &apos;b, &apos;c, &apos;d, &apos;e, &apos;f) param_format_ebb = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Param_format_EBB : (&apos;x -&gt; &apos;a0, &apos;b0, &apos;c0, &apos;d0, &apos;e0, &apos;f0) CamlinternalFormatBasics.fmt -&gt; (&apos;a0, &apos;b0, &apos;c0, &apos;d0, &apos;e0, &apos;f0) param_format_ebb</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre id="VALparam_format_of_ignored_format"><span class="keyword">let</span> param_format_of_ignored_format:\n  CamlinternalFormatBasics.ignored &apos;a &apos;b &apos;c &apos;d &apos;y &apos;x =&gt;\n  CamlinternalFormatBasics.fmt &apos;x &apos;b &apos;c &apos;y &apos;e &apos;f =&gt;\n  param_format_ebb &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f;\n</pre>\n<pre><span class="keyword">type</span> (&apos;b, &apos;c) acc_formatting_gen = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_open_tag of (&apos;b, &apos;c) acc</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_open_box of (&apos;b, &apos;c) acc</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> (&apos;b, &apos;c) acc = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_formatting_lit of (&apos;b, &apos;c) acc * CamlinternalFormatBasics.formatting_lit</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_formatting_gen of (&apos;b, &apos;c) acc        * (&apos;b, &apos;c) acc_formatting_gen</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_string_literal of (&apos;b, &apos;c) acc * string</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_char_literal of (&apos;b, &apos;c) acc * char</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_data_string of (&apos;b, &apos;c) acc * string</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_data_char of (&apos;b, &apos;c) acc * char</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_delay of (&apos;b, &apos;c) acc * (&apos;b -&gt; &apos;c)</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_flush of (&apos;b, &apos;c) acc</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Acc_invalid_arg of (&apos;b, &apos;c) acc * string</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>End_of_acc</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> (&apos;a, &apos;b) heter_list = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Cons : &apos;c * (&apos;a0, &apos;b0) heter_list -&gt; (&apos;c -&gt; &apos;a0, &apos;b0) heter_list</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Nil : (&apos;b1, &apos;b1) heter_list</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre><span class="keyword">type</span> (&apos;b, &apos;c, &apos;e, &apos;f) fmt_ebb = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Fmt_EBB : (&apos;a, &apos;b0, &apos;c0, &apos;d, &apos;e0, &apos;f0) CamlinternalFormatBasics.fmt -&gt; (&apos;b0, &apos;c0, &apos;e0, &apos;f0) fmt_ebb</code></td>\n\n</tr></tbody></table>\n\n\n\n<pre id="VALmake_printf"><span class="keyword">let</span> make_printf:\n  (&apos;b =&gt; acc &apos;b &apos;c =&gt; &apos;d) =&gt;\n  &apos;b =&gt;\n  acc &apos;b &apos;c =&gt;\n  CamlinternalFormatBasics.fmt &apos;a &apos;b &apos;c &apos;c &apos;c &apos;d =&gt;\n  &apos;a;\n</pre>\n<pre id="VALoutput_acc"><span class="keyword">let</span> output_acc: Pervasives.out_channel =&gt; acc Pervasives.out_channel unit =&gt; unit;\n</pre>\n<pre id="VALbufput_acc"><span class="keyword">let</span> bufput_acc: Buffer.t =&gt; acc Buffer.t unit =&gt; unit;\n</pre>\n<pre id="VALstrput_acc"><span class="keyword">let</span> strput_acc: Buffer.t =&gt; acc unit string =&gt; unit;\n</pre>\n<pre id="VALtype_format"><span class="keyword">let</span> type_format:\n  CamlinternalFormatBasics.fmt &apos;x &apos;b &apos;c &apos;t &apos;u &apos;v =&gt;\n  CamlinternalFormatBasics.fmtty &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f =&gt;\n  CamlinternalFormatBasics.fmt &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f;\n</pre>\n<pre id="VALfmt_ebb_of_string"><span class="keyword">let</span> fmt_ebb_of_string: legacy_behavior::bool? =&gt; string =&gt; fmt_ebb &apos;b &apos;c &apos;e &apos;f;\n</pre>\n<pre id="VALformat_of_string_fmtty"><span class="keyword">let</span> format_of_string_fmtty:\n  string =&gt;\n  CamlinternalFormatBasics.fmtty &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f =&gt;\n  CamlinternalFormatBasics.format6 &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f;\n</pre>\n<pre id="VALformat_of_string_format"><span class="keyword">let</span> format_of_string_format:\n  string =&gt;\n  CamlinternalFormatBasics.format6 &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f =&gt;\n  CamlinternalFormatBasics.format6 &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f;\n</pre>\n<pre id="VALchar_of_iconv"><span class="keyword">let</span> char_of_iconv: CamlinternalFormatBasics.int_conv =&gt; char;\n</pre>\n<pre id="VALstring_of_formatting_lit"><span class="keyword">let</span> string_of_formatting_lit: CamlinternalFormatBasics.formatting_lit =&gt; string;\n</pre>\n<pre id="VALstring_of_formatting_gen"><span class="keyword">let</span> string_of_formatting_gen: CamlinternalFormatBasics.formatting_gen &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f =&gt; string;\n</pre>\n<pre id="VALstring_of_fmtty"><span class="keyword">let</span> string_of_fmtty: CamlinternalFormatBasics.fmtty &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f =&gt; string;\n</pre>\n<pre id="VALstring_of_fmt"><span class="keyword">let</span> string_of_fmt: CamlinternalFormatBasics.fmt &apos;a &apos;b &apos;c &apos;d &apos;e &apos;f =&gt; string;\n</pre>\n<pre id="VALopen_box_of_string"><span class="keyword">let</span> open_box_of_string: string =&gt; (int, CamlinternalFormatBasics.block_type);\n</pre>\n<pre id="VALsymm"><span class="keyword">let</span> symm:\n  CamlinternalFormatBasics.fmtty_rel &apos;a1 &apos;b1 &apos;c1 &apos;d1 &apos;e1 &apos;f1 &apos;a2 &apos;b2 &apos;c2 &apos;d2 &apos;e2 &apos;f2 =&gt;\n  CamlinternalFormatBasics.fmtty_rel &apos;a2 &apos;b2 &apos;c2 &apos;d2 &apos;e2 &apos;f2 &apos;a1 &apos;b1 &apos;c1 &apos;d1 &apos;e1 &apos;f1;\n</pre>\n<pre id="VALtrans"><span class="keyword">let</span> trans:\n  CamlinternalFormatBasics.fmtty_rel &apos;a1 &apos;b1 &apos;c1 &apos;d1 &apos;e1 &apos;f1 &apos;a2 &apos;b2 &apos;c2 &apos;d2 &apos;e2 &apos;f2 =&gt;\n  CamlinternalFormatBasics.fmtty_rel &apos;a2 &apos;b2 &apos;c2 &apos;d2 &apos;e2 &apos;f2 &apos;a3 &apos;b3 &apos;c3 &apos;d3 &apos;e3 &apos;f3 =&gt;\n  CamlinternalFormatBasics.fmtty_rel &apos;a1 &apos;b1 &apos;c1 &apos;d1 &apos;e1 &apos;f1 &apos;a3 &apos;b3 &apos;c3 &apos;d3 &apos;e3 &apos;f3;\n</pre>\n<pre id="VALrecast"><span class="keyword">let</span> recast:\n  CamlinternalFormatBasics.fmt &apos;a1 &apos;b1 &apos;c1 &apos;d1 &apos;e1 &apos;f1 =&gt;\n  CamlinternalFormatBasics.fmtty_rel &apos;a1 &apos;b1 &apos;c1 &apos;d1 &apos;e1 &apos;f1 &apos;a2 &apos;b2 &apos;c2 &apos;d2 &apos;e2 &apos;f2 =&gt;\n  CamlinternalFormatBasics.fmt &apos;a2 &apos;b2 &apos;c2 &apos;d2 &apos;e2 &apos;f2;\n</pre></div>'}}},pathContext:{relativePath:"api/CamlinternalFormat.html"}}}});
//# sourceMappingURL=path---api-camlinternal-format-html-7ad41bbc0c77c3adcd29.js.map