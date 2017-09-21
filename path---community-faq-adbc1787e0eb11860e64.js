webpackJsonp([57],{"./node_modules/json-loader/index.js!./.cache/json/community-faq.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"community/articles-and-videos.md",childMarkdownRemark:{frontmatter:{title:"Articles & Videos",order:10}}}},{node:{relativePath:"community/companies.md",childMarkdownRemark:{frontmatter:{title:"Companies",order:60}}}},{node:{relativePath:"community/blog.md",childMarkdownRemark:{frontmatter:{title:"Blog",order:0}}}},{node:{relativePath:"community/faq.md",childMarkdownRemark:{frontmatter:{title:"Frequently Asked Questions",order:40}}}},{node:{relativePath:"community/events.md",childMarkdownRemark:{frontmatter:{title:"Events",order:30}}}},{node:{relativePath:"community/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"community/index.md",childMarkdownRemark:{frontmatter:{title:"Community",order:0}}}},{node:{relativePath:"community/roadmap.md",childMarkdownRemark:{frontmatter:{title:"Roadmap & Contribution",order:50}}}}]},file:{relativePath:"community/faq.md",childMarkdownRemark:{html:'<h1 id="frequently-asked-questions"><a href="#frequently-asked-questions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Frequently Asked Questions</h1>\n<h4 id="should-i-learn-reason-or-ocaml-first"><a href="#should-i-learn-reason-or-ocaml-first" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Should I learn Reason or OCaml first?</h4>\n<p>There\'s no need to pick! Reason and OCaml share the exact same semantics (i.e. how the code runs). Only the syntax differ. Carry <a href="https://github.com/reasonml/reason-tools">Reason-tools</a> around so that you can freely convert between the two syntaxes. A Reason tutorial is an OCaml tutorial, vice-versa. In the terminal, you can have these alises:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code><span class="hljs-comment"># converts ocaml code into reason</span>\n<span class="hljs-built_in">alias</span> mlre=<span class="hljs-string">"pbpaste | refmt --parse ml --print re --interface false | pbcopy"</span>\n<span class="hljs-comment"># converts reason code into ocaml</span>\n<span class="hljs-built_in">alias</span> reml=<span class="hljs-string">"pbpaste | refmt --parse re --print ml --interface false | pbcopy"</span></code></pre>\n      </div>\n<p>They\'ll take your code from the (macOS) clipboard, convert it, and paste it back into your clipboard! Swap out pbpaste/pbcopy with your system\'s clipboard functions.</p>\n<h4 id="im-not-sure-what-to-do-with-reason"><a href="#im-not-sure-what-to-do-with-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>I\'m not sure what to do with Reason</h4>\n<p><a href="/guide/javascript">We compile to JS very well</a>. Think of what project you\'d usually make if it was pure JavaScript; try porting/writing that in Reason + BuckleScript instead! We recommend trying to make concrete, end-user projects (e.g. a little command line util) rather than infra-level projects (e.g. a boilerplate generator). The latter category requires expertise and understanding idiomatic Reason code.</p>\n<h4 id="whats-the-relation-between-reason-bucklescript-and-ocaml"><a href="#whats-the-relation-between-reason-bucklescript-and-ocaml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s the relation between Reason, BuckleScript and OCaml?</h4>\n<p>See <a href="/guide/javascript">here</a>. Reason\'s a syntax for OCaml and supports all its features. BuckleScript compiles OCaml/Reason code into JavaScript.</p>\n<h4 id="where-do-all-these-print_endline-string_of_int-functions-come-from"><a href="#where-do-all-these-print_endline-string_of_int-functions-come-from" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where do all these <code>print_endline</code>, <code>string_of_int</code> functions come from?</h4>\n<p>They\'re from the standard library, pre-<code>open</code>ed during the compilation of your file. This is why you see them in scope.</p>\n<h4 id="can-i-have-a-function-to-print-arbitrary-data-structures"><a href="#can-i-have-a-function-to-print-arbitrary-data-structures" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Can I have a function to print arbitrary data structures?</h4>\n<p>If you\'re compiling to JavaScript through BuckleScript, you can use the JS <code>console.log</code> through <a href="https://bucklescript.github.io/bucklescript/api/Js.html#VALlog"><code>Js.log</code></a>. If you\'re compiling to native, you\'ll need something like <a href="https://github.com/diml/ppx_show">ppx_show</a>. A future OCaml feature (called modular implicit) will solve this directly in the language.</p>\n<h4 id="why-is-there-a--for-adding-ints-and--for-adding-floats-etc"><a href="#why-is-there-a--for-adding-ints-and--for-adding-floats-etc" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why is there a + for adding ints and +. for adding floats, etc.?</h4>\n<p>See <a href="/guide/language/integer-and-float#design-decisions">here</a>.</p>\n<h4 id="does-library-___-work-with-reason"><a href="#does-library-___-work-with-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Does library ___ work with Reason?</h4>\n<p>Most JS libraries should easily work under Reason + BuckleScript. On the native side, since Reason\'s just a syntax transform: yes, they work with Reason too. But the native workflow is currently work-in-progress and needs polish.</p>\n<h4 id="whats-the-server-side-story-should-i-compile-to-native-or-to-js-and-use-nodejs"><a href="#whats-the-server-side-story-should-i-compile-to-native-or-to-js-and-use-nodejs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s the server-side story? Should I compile to native or to JS and use node.js?</h4>\n<p>We do compile to native, but the native workflow is currently work-in-progress. At this time, we recommend compiling to JS through BuckleScript and use the bindings at <a href="https://github.com/reasonml-community">reasonml-community</a> or somewhere else.</p>\n<h4 id="whats-bucklescripts-async-story"><a href="#whats-bucklescripts-async-story" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s BuckleScript\'s async story?</h4>\n<p>First, if you\'re not interfacing with any library that uses promises, you can simply use callbacks. Everyone gets them and they\'re performant.</p>\n<p>If you need to bind to a JS library that uses promises, or communicate with such library, you can use BS\'s <a href="http://bucklescript.github.io/bucklescript/api/Js.Promise.html">bindings to promises</a>. There\'s also potential to have some syntactic sugar in the future. In the long run, we\'d like to implement a spec-compliant promises implementation in OCaml/Reason proper, so that the compiler optimizations could kick in.</p>\n<p>For a more idiomatic OCaml solution: on the native OCaml side, we have <a href="http://ocsigen.org/lwt/">lwt</a> and <a href="https://ocaml.janestreet.com/ocaml-core/111.03.00/doc/async/#Std">Async</a>. We don\'t use them in web right now, but we might in the future.</p>\n<h4 id="whats-the-unit-test-story"><a href="#whats-the-unit-test-story" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s the (unit) test story?</h4>\n<p>Some of OCaml\'s language features (not just types) might be able to defer the need for unit testing until later. In the meantime, for compilation to JS, we\'re working on <a href="https://github.com/BuckleTypes/bs-jest">Jest bindings</a>. We\'ll look into using Jest for native too, if Jest is written using Reason in the future (no concrete plan yet). <a href="http://ounit.forge.ocamlcore.org">OUnit</a> is a good, small native OCaml testing library right now.</p>\n<h4 id="whats-the-merlin-file-at-the-root-of-my-project"><a href="#whats-the-merlin-file-at-the-root-of-my-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s the <code>.merlin</code> file at the root of my project?</h4>\n<p>That\'s the metadata file for <a href="/guide/editor-tools/extra-goodies#merlin">Merlin</a>, the shared editor integration backend for autocomplete, jump-to-definition, etc. For the <a href="/guide/javascript">JavaScript Workflow</a>, <code>bsb</code> the build system generates the <code>.merlin</code> for you; You don\'t need to check that into your version control and don\'t have to manually modify it.</p>\n<h4 id="i-dont-see-any-import-or-require-in-my-file-how-does-module-resolution-work"><a href="#i-dont-see-any-import-or-require-in-my-file-how-does-module-resolution-work" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>I don\'t see any <code>import</code> or <code>require</code> in my file; how does module resolution work?</h4>\n<p>Reason/OCaml doesn\'t require you to write any import; modules being referred to in the file are automatically searched in the project. Specifically, a module <code>Hello</code> asks the compiler to look for the file <code>hello.re</code> or <code>hello.ml</code> (and their corresponding <a href="/guide/language/module#signatures">interface file</a>, <code>hello.rei</code> or <code>hello.mli</code>, if available).</p>\n<p>A module name is the file name, capitalized. It has to be unique per project; this abstracts away the file system and allows you to move files around without changing code.</p>\n<h4 id="bucklescript-is-there-a-generic-way-to-transform-a-record-into-a-js-object"><a href="#bucklescript-is-there-a-generic-way-to-transform-a-record-into-a-js-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>BuckleScript: Is there a generic way to transform a record into a JS object?</h4>\n<p>Not currently. You\'d have to do the manual translation. Alternatively, try <a href="http://bucklescript.github.io/bucklescript/Manual.html#_create_js_objects_using_bs_obj">using JS objects directly</a></p>\n<p>Generally speaking, we recommend binding to the JS library thinly rather than thickly and idiomatically; better stay lightweight and catch conversion mistakes.</p>\n<p>See also our <a href="/guide/javascript/interop">JS interop guide</a>.</p>\n<h4 id="bsb-is-there-a-way-to-configure-the-output-directory"><a href="#bsb-is-there-a-way-to-configure-the-output-directory" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bsb: is there a way to configure the output directory?</h4>\n<p>Not currently. Though you can output JS artifacts alongside your Reason files. See the <code>in-source</code> option <a href="https://bucklescript.github.io/bucklescript/docson/#build-schema.json">here</a>, in package-specs -> package-spec -> module-format-object.</p>\n<h4 id="the-compiler-says-the-module-cant-be-found"><a href="#the-compiler-says-the-module-cant-be-found" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The compiler says the module can\'t be found.</h4>\n<p>Are you using a third-party module? If you\'re compiling to JS, did you add the dependency in your <a href="http://bucklescript.github.io/bucklescript/Manual.html#_get_started"><code>bsconfig.json</code></a>\'s <code>bs-dependencies</code> field? Also, did you do <code>bsb -make-world</code>? <code>bsb</code> by default only build the root project itself for performance.</p>\n<p>Additionally, don\'t forget to add the source folders into your <code>bsconfig.json</code>! For performance, <code>bsb</code> doesn\'t automatically and recursively build nested folders.</p>\n<h4 id="is-some--none-contents-array-list-and-all-of-these-special-where-do-they-come-from"><a href="#is-some--none-contents-array-list-and-all-of-these-special-where-do-they-come-from" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Is <code>Some | None</code>, <code>contents</code>, <code>Array</code>, <code>List</code> and all of these special? Where do they come from?</h4>\n<p>They\'re ordinary variants/records/module definitions that comes with the <a href="/api/index.html">standard library</a>, <code>open</code>ed by default during compilation out of convenience.</p>\n<h4 id="what-does-an-argument-with-a-prepended-underscore-eg-_-or-_foo-mean"><a href="#what-does-an-argument-with-a-prepended-underscore-eg-_-or-_foo-mean" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What does an argument with a prepended underscore (e.g. <code>_</code> or <code>_foo</code>) mean?</h4>\n<p>Say you have <code>List.map (fun item => 1) myList</code>. The argument <code>item</code> isn\'t used and will generate a compiler warning. Using <code>fun _ => 1</code> instead indicates that you\'re intentionally receiving and ignoring the argument, therefore bypassing the warning. Alternatively, <code>fun _item => 1</code> has the same effect, but indicates more descriptively what you\'re ignoring.</p>\n<h4 id="whats-this-mymodulet-i-keep-seeing"><a href="#whats-this-mymodulet-i-keep-seeing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s this <code>MyModule.t</code> I keep seeing?</h4>\n<p>Assuming <code>MyModule</code> is a module\'s name, <code>t</code> is a community convention that indicates "the type that represents that module, whatever that means". For example, for the <a href="http://bucklescript.github.io/bucklescript/api/Js.String.html"><code>Js.String</code></a> module, <a href="http://bucklescript.github.io/bucklescript/api/Js.String.html#TYPEt"><code>String.t</code></a> is the type carried around and representing "a string".</p>\n<h4 id="why-is-there-a-js_promise-and-then-a-jspromise-what-about-js_array-js_string-and-whatever-else"><a href="#why-is-there-a-js_promise-and-then-a-jspromise-what-about-js_array-js_string-and-whatever-else" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why is there a <a href="http://bucklescript.github.io/bucklescript/api/Js_promise.html"><code>Js_promise</code></a> and then a <a href="http://bucklescript.github.io/bucklescript/api/Js.Promise.html"><code>Js.Promise</code></a>? What about <a href="http://bucklescript.github.io/bucklescript/api/Js_array.html"><code>Js_array</code></a>, <a href="http://bucklescript.github.io/bucklescript/api/Js_string.html"><code>Js_string</code></a> and whatever else?</h4>\n<p>As a convention, <code>Js_foo</code> is the actual module, and <code>Js.Foo</code> is just an alias for it. They\'re <a href="https://github.com/bloomberg/bucklescript/blob/7bc37f387a726ba1ae4afeefe02b9c82577d9e10/jscomp/runtime/js.ml#L124-L138">equivalent</a>. Prefer <code>Js.Foo</code>, because that\'s the official, public module name.</p>\n<h4 id="when-will-modular-implicit--multicore--algebraic-effects-be-ready"><a href="#when-will-modular-implicit--multicore--algebraic-effects-be-ready" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>When will modular implicit &#x26; multicore &#x26; algebraic effects be ready?</h4>\n<p>They will one day. In the meantime, help us ship more Reason code! The popularity will help funnel more OCaml contributions. The less the OCaml folks need to worry about low-hanging fruits, the more they can focus on great research and execution!</p>\n<h4 id="why-are-bucklescript-and-bsb-so-fast-how-can-i-slow-it-down"><a href="#why-are-bucklescript-and-bsb-so-fast-how-can-i-slow-it-down" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why are BuckleScript and bsb so fast? How can I slow it down?</h4>\n<p>BuckleScript is optimized for performance across the whole stack. You can try slowing it down by adding a dozen layers of indirections and metaprogramming. Try:</p>\n<ul>\n<li>Adding a few infinite loops here and there.</li>\n<li>Stuffing a JavaScript build tool in the pipeline.</li>\n<li>Dragging in more dependencies for writing a hello world.</li>\n</ul>\n<h4 id="im-seeing-a-weird-cmicmxcmjcma-file-referenced-in-a-compiler-error-where-do-these-files-come-from"><a href="#im-seeing-a-weird-cmicmxcmjcma-file-referenced-in-a-compiler-error-where-do-these-files-come-from" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>I\'m seeing a weird .cmi/.cmx/.cmj/.cma file referenced in a compiler error. Where do these files come from?</h4>\n<p>The OCaml community frequently uses file extensions to distinguish between types of source, artifacts, and metadata, depending on your build target (native/bytecode/JavaScript). The following is a overview of some of the file extensions you may come across:</p>\n<h5 id="source-files"><a href="#source-files" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Source files</h5>\n<ul>\n<li><code>.ml</code>: OCaml source file</li>\n<li><code>.mli</code>: OCaml interface file; determines which parts of the matching <code>.ml</code> file are visible to the outside world</li>\n<li><code>.re</code>: Reason source file. Like <code>.ml</code>, but for Reason</li>\n<li><code>.rei</code>: Reason interface file. Like <code>.mli</code>, but for Reason</li>\n</ul>\n<h5 id="compiled-files"><a href="#compiled-files" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Compiled files</h5>\n<ul>\n<li><code>.cmi</code>: Compiled interface (.rei/mli) file</li>\n<li><code>.cmx</code>: Compiled object file for native output (via ocamlopt)</li>\n<li><code>.cmo</code>: Compiled object file for bytecode output</li>\n<li><code>.cmj</code>: Compiled object file for web (via BuckleScript)</li>\n<li><code>.cma</code>: Library file for bytecode output (equivalent to C\'s .a files)</li>\n<li><code>.cmxa</code>: Library file for native output</li>\n<li><code>.cmt</code>: Contains a "Typedtree" – basically the AST with all type info</li>\n<li><code>.cmti</code>: Just like a .cmt file, but for interface files</li>\n<li><code>.cmxs</code>: Dynamically loaded plugin (for native compilation)</li>\n<li><code>.o</code>: Compiled native object file</li>\n<li><code>.out</code>: Conventional name/extension for final output produced by ocamlc/ocamlopt (e.g. <code>ocamlc -o myExecutable.out</code>)</li>\n</ul>\n<h5 id="other-ocaml-ecosystem-files"><a href="#other-ocaml-ecosystem-files" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Other OCaml ecosystem files</h5>\n<ul>\n<li><code>.mll</code>: ocamllex lexical analyzer definition file</li>\n<li><code>.mly</code>: ocamlyacc parser generator definition file</li>\n<li><code>.mldylib</code>: Contains a list of module paths that will be compiled and archived together to build a corresponding <code>.cmxs</code> target (native plugin)</li>\n<li><code>.mliv</code>: Batteries-specific files for some <a href="https://github.com/ocaml-batteries-team/batteries-included/blob/f019927b9503ec65ef816f02315de78d4bae3481/src/batArray.mliv">custom preprocessing</a>.</li>\n<li><code>.mllib</code>: Ocaml library (cma and cmxa)</li>\n<li><code>.mlpack</code>: Ocaml package (cmo built with the -pack flag)</li>\n<li><code>.mlpp</code>: <a href="https://github.com/ygrek/ocaml-extlib">Extlib</a>-specific files for some custom preprocessing</li>\n<li><code>.mltop</code>: <a href="https://shonkychef.wordpress.com/2009/07/28/making-an-ocaml-toplevel-with-ocamlbuild/">OCamlbuild top-level file</a>, used by OCamlbuild to generate a .top file</li>\n<li><code>.odocl</code>: OCaml documentation file</li>\n</ul>\n<p>If some of those explanations are still a bit cryptic, here are expansions on some of the terms used above:</p>\n<ul>\n<li><a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree">AST</a>: Abstract Syntax Tree. The data structure coming from the source code, that the compiler operates on.</li>\n<li><a href="https://en.wikipedia.org/wiki/Linker_(computing)">Linking</a>: The step where the compiler takes many intermediate compiled files and assembles them together. E.g. linking A with B, because A\'s original source file referred to B.</li>\n<li>Native: Builds that run on bare metal assembly instructions of the platform in question.</li>\n<li><a href="https://en.wikipedia.org/wiki/Bytecode">Bytecode</a>: Like native code, but more portable and less performant</li>\n<li><a href="https://en.wikipedia.org/wiki/Object_file">Object file</a>: Contains machine code that is not directly runnable.</li>\n</ul>\n<p>There is more information and context for many of these file extensions <a href="https://ocaml.org/learn/tutorials/filenames.html">on the OCaml site</a> and in <a href="http://caml.inria.fr/pub/ml-archives/caml-list/2008/09/2bc9b38171177af5dc0d832a365d290d.en.html">this mailing list post</a>. There are also deeper dives on <a href="https://caml.inria.fr/pub/docs/manual-ocaml/native.html">native</a> and <a href="http://caml.inria.fr/pub/docs/manual-ocaml/comp.html">bytecode</a> compilation that contain more detailed descriptions in the OCaml manual.</p>',
frontmatter:{title:"Frequently Asked Questions"}}}},pathContext:{section:"community",sectionTitle:"Community",relativePath:"community/faq.md",relatedFiles:"/^community\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---community-faq-adbc1787e0eb11860e64.js.map