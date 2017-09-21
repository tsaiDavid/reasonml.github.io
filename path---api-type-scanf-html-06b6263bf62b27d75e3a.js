webpackJsonp([91],{"./node_modules/json-loader/index.js!./.cache/json/api-type-scanf-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_Scanf.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;module&#xA0;Scanning&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;sig\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;type&#xA0;in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;type&#xA0;scanbuf&#xA0;=&#xA0;Scanf.Scanning.in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;stdin&#xA0;:&#xA0;Scanf.Scanning.in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;type&#xA0;file_name&#xA0;=&#xA0;string\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;open_in&#xA0;:&#xA0;Scanf.Scanning.file_name&#xA0;-&gt;&#xA0;Scanf.Scanning.in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;open_in_bin&#xA0;:&#xA0;Scanf.Scanning.file_name&#xA0;-&gt;&#xA0;Scanf.Scanning.in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;close_in&#xA0;:&#xA0;Scanf.Scanning.in_channel&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;from_file&#xA0;:&#xA0;Scanf.Scanning.file_name&#xA0;-&gt;&#xA0;Scanf.Scanning.in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;from_file_bin&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;Scanf.Scanning.in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;from_string&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;Scanf.Scanning.in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;from_function&#xA0;:&#xA0;(unit&#xA0;-&gt;&#xA0;char)&#xA0;-&gt;&#xA0;Scanf.Scanning.in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;from_channel&#xA0;:&#xA0;Pervasives.in_channel&#xA0;-&gt;&#xA0;Scanf.Scanning.in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;end_of_input&#xA0;:&#xA0;Scanf.Scanning.in_channel&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;beginning_of_input&#xA0;:&#xA0;Scanf.Scanning.in_channel&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;name_of_input&#xA0;:&#xA0;Scanf.Scanning.in_channel&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;stdib&#xA0;:&#xA0;Scanf.Scanning.in_channel\n&#xA0;&#xA0;&#xA0;&#xA0;end\n&#xA0;&#xA0;type&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d)&#xA0;scanner&#xA0;=\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;Scanf.Scanning.in_channel,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;d,&#xA0;&apos;d)\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Pervasives.format6&#xA0;-&gt;&#xA0;&apos;c\n&#xA0;&#xA0;exception&#xA0;Scan_failure&#xA0;of&#xA0;string\n&#xA0;&#xA0;val&#xA0;bscanf&#xA0;:&#xA0;Scanf.Scanning.in_channel&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d)&#xA0;Scanf.scanner\n&#xA0;&#xA0;val&#xA0;fscanf&#xA0;:&#xA0;Pervasives.in_channel&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d)&#xA0;Scanf.scanner\n&#xA0;&#xA0;val&#xA0;sscanf&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d)&#xA0;Scanf.scanner\n&#xA0;&#xA0;val&#xA0;scanf&#xA0;:&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d)&#xA0;Scanf.scanner\n&#xA0;&#xA0;val&#xA0;kscanf&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Scanf.Scanning.in_channel&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(Scanf.Scanning.in_channel&#xA0;-&gt;&#xA0;exn&#xA0;-&gt;&#xA0;&apos;d)&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d)&#xA0;Scanf.scanner\n&#xA0;&#xA0;val&#xA0;ksscanf&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;string&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(Scanf.Scanning.in_channel&#xA0;-&gt;&#xA0;exn&#xA0;-&gt;&#xA0;&apos;d)&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d)&#xA0;Scanf.scanner\n&#xA0;&#xA0;val&#xA0;kfscanf&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Pervasives.in_channel&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(Scanf.Scanning.in_channel&#xA0;-&gt;&#xA0;exn&#xA0;-&gt;&#xA0;&apos;d)&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d)&#xA0;Scanf.scanner\n&#xA0;&#xA0;val&#xA0;bscanf_format&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;Scanf.Scanning.in_channel&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d,&#xA0;&apos;e,&#xA0;&apos;f)&#xA0;Pervasives.format6&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;((&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d,&#xA0;&apos;e,&#xA0;&apos;f)&#xA0;Pervasives.format6&#xA0;-&gt;&#xA0;&apos;g)&#xA0;-&gt;&#xA0;&apos;g\n&#xA0;&#xA0;val&#xA0;sscanf_format&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;string&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d,&#xA0;&apos;e,&#xA0;&apos;f)&#xA0;Pervasives.format6&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;((&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d,&#xA0;&apos;e,&#xA0;&apos;f)&#xA0;Pervasives.format6&#xA0;-&gt;&#xA0;&apos;g)&#xA0;-&gt;&#xA0;&apos;g\n&#xA0;&#xA0;val&#xA0;format_from_string&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;string&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d,&#xA0;&apos;e,&#xA0;&apos;f)&#xA0;Pervasives.format6&#xA0;-&gt;\n&#xA0;&#xA0;&#xA0;&#xA0;(&apos;a,&#xA0;&apos;b,&#xA0;&apos;c,&#xA0;&apos;d,&#xA0;&apos;e,&#xA0;&apos;f)&#xA0;Pervasives.format6\n&#xA0;&#xA0;val&#xA0;unescaped&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\nend</pre></div>'}}},pathContext:{relativePath:"api/type_Scanf.html"}}}});
//# sourceMappingURL=path---api-type-scanf-html-06b6263bf62b27d75e3a.js.map