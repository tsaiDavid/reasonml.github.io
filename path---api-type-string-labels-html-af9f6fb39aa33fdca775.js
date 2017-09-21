webpackJsonp([75],{"./node_modules/json-loader/index.js!./.cache/json/api-type-string-labels-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_StringLabels.html",childRawHtml:{content:'<div class="ocamldoc"><pre>sig\n\n&#xA0;&#xA0;external&#xA0;length&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;=&#xA0;&quot;%string_length&quot;\n&#xA0;&#xA0;external&#xA0;get&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char&#xA0;=&#xA0;&quot;%string_safe_get&quot;\n&#xA0;&#xA0;external&#xA0;set&#xA0;:&#xA0;bytes&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;%string_safe_set&quot;\n&#xA0;&#xA0;external&#xA0;create&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;bytes&#xA0;=&#xA0;&quot;caml_create_string&quot;\n&#xA0;&#xA0;val&#xA0;make&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;init&#xA0;:&#xA0;int&#xA0;-&gt;&#xA0;f:(int&#xA0;-&gt;&#xA0;char)&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;copy&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;sub&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;pos:int&#xA0;-&gt;&#xA0;len:int&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;fill&#xA0;:&#xA0;bytes&#xA0;-&gt;&#xA0;pos:int&#xA0;-&gt;&#xA0;len:int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;blit&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;src:string&#xA0;-&gt;&#xA0;src_pos:int&#xA0;-&gt;&#xA0;dst:bytes&#xA0;-&gt;&#xA0;dst_pos:int&#xA0;-&gt;&#xA0;len:int&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;concat&#xA0;:&#xA0;sep:string&#xA0;-&gt;&#xA0;string&#xA0;list&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;iter&#xA0;:&#xA0;f:(char&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;iteri&#xA0;:&#xA0;f:(int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;val&#xA0;map&#xA0;:&#xA0;f:(char&#xA0;-&gt;&#xA0;char)&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;mapi&#xA0;:&#xA0;f:(int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;char)&#xA0;-&gt;&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;trim&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;escaped&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;index&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;rindex&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;index_from&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;rindex_from&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;val&#xA0;contains&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;contains_from&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;rcontains_from&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;val&#xA0;uppercase&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;lowercase&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;capitalize&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;val&#xA0;uncapitalize&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;string\n&#xA0;&#xA0;type&#xA0;t&#xA0;=&#xA0;string\n&#xA0;&#xA0;val&#xA0;compare&#xA0;:&#xA0;StringLabels.t&#xA0;-&gt;&#xA0;StringLabels.t&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;external&#xA0;unsafe_get&#xA0;:&#xA0;string&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char&#xA0;=&#xA0;&quot;%string_unsafe_get&quot;\n&#xA0;&#xA0;external&#xA0;unsafe_set&#xA0;:&#xA0;bytes&#xA0;-&gt;&#xA0;int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;unit&#xA0;=&#xA0;&quot;%string_unsafe_set&quot;\n&#xA0;&#xA0;external&#xA0;unsafe_blit&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;src:string&#xA0;-&gt;&#xA0;src_pos:int&#xA0;-&gt;&#xA0;dst:bytes&#xA0;-&gt;&#xA0;dst_pos:int&#xA0;-&gt;&#xA0;len:int&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_blit_string&quot;&#xA0;&quot;noalloc&quot;\n&#xA0;&#xA0;external&#xA0;unsafe_fill&#xA0;:&#xA0;bytes&#xA0;-&gt;&#xA0;pos:int&#xA0;-&gt;&#xA0;len:int&#xA0;-&gt;&#xA0;char&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;=&#xA0;&quot;caml_fill_string&quot;&#xA0;&quot;noalloc&quot;\nend</pre></div>'}}},pathContext:{relativePath:"api/type_StringLabels.html"}}}});
//# sourceMappingURL=path---api-type-string-labels-html-af9f6fb39aa33fdca775.js.map