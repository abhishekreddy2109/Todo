import*as K from"recipe@https://abhishekreddy2109.github.io/recipe/remoteEntry.js";var D={4429:(a,h,o)=>{o.e(438).then(o.bind(o,6438)).catch(d=>console.error(d))},448:a=>{a.exports=K}},$={};function e(a){var h=$[a];if(void 0!==h)return h.exports;var o=$[a]={exports:{}};return D[a](o,o.exports,e),o.exports}e.m=D,e.c=$,(()=>{var h,a=Object.getPrototypeOf?o=>Object.getPrototypeOf(o):o=>o.__proto__;e.t=function(o,d){if(1&d&&(o=this(o)),8&d||"object"==typeof o&&o&&(4&d&&o.__esModule||16&d&&"function"==typeof o.then))return o;var c=Object.create(null);e.r(c);var v={};h=h||[null,a({}),a([]),a(a)];for(var s=2&d&&o;"object"==typeof s&&!~h.indexOf(s);s=a(s))Object.getOwnPropertyNames(s).forEach(y=>v[y]=()=>o[y]);return v.default=()=>o,e.d(c,v),c}})(),e.d=(a,h)=>{for(var o in h)e.o(h,o)&&!e.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:h[o]})},e.f={},e.e=a=>Promise.all(Object.keys(e.f).reduce((h,o)=>(e.f[o](a,h),h),[])),e.u=a=>a+"."+{177:"05a058e6110ea5dd",181:"9f6fcab0b69081e2",282:"63c77a28e34054d4",438:"2cf0da8e008966cd",513:"407a12b64f91da3b",558:"367d502b8abd68ca",562:"21c573dcc3433744",598:"3346260b1b125f47",620:"ee1772f859d7159a",894:"bdf27eff19c7f622"}[a]+".js",e.miniCssF=a=>{},e.o=(a,h)=>Object.prototype.hasOwnProperty.call(a,h),(()=>{var a={},h="todoApp:";e.l=(o,d,c,v)=>{if(a[o])a[o].push(d);else{var s,y;if(void 0!==c)for(var g=document.getElementsByTagName("script"),w=0;w<g.length;w++){var b=g[w];if(b.getAttribute("src")==o||b.getAttribute("data-webpack")==h+c){s=b;break}}s||(y=!0,(s=document.createElement("script")).type="module",s.charset="utf-8",s.timeout=120,e.nc&&s.setAttribute("nonce",e.nc),s.setAttribute("data-webpack",h+c),s.src=e.tu(o)),a[o]=[d];var m=(j,E)=>{s.onerror=s.onload=null,clearTimeout(p);var O=a[o];if(delete a[o],s.parentNode&&s.parentNode.removeChild(s),O&&O.forEach(_=>_(E)),j)return j(E)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),y&&document.head.appendChild(s)}}})(),e.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},(()=>{var a={282:[6282]},h={6282:["default","./RecipeModule",448]};e.f.remotes=(o,d)=>{e.o(a,o)&&a[o].forEach(c=>{var v=e.R;v||(v=[]);var s=h[c];if(!(v.indexOf(s)>=0)){if(v.push(s),s.p)return d.push(s.p);var y=p=>{p||(p=new Error("Container missing")),"string"==typeof p.message&&(p.message+='\nwhile loading "'+s[1]+'" from '+s[2]),e.m[c]=()=>{throw p},s.p=0},g=(p,j,E,O,_,U)=>{try{var M=p(j,E);if(!M||!M.then)return _(M,O,U);var N=M.then(T=>_(T,O),y);if(!U)return N;d.push(s.p=N)}catch(T){y(T)}},b=(p,j,E)=>g(j.get,s[1],v,0,m,E),m=p=>{s.p=1,e.m[c]=j=>{j.exports=p()}};g(e,s[2],0,0,(p,j,E)=>p?g(e.I,s[0],0,p,b,E):y(),1)}})}})(),e.j=792,(()=>{e.S={};var a={},h={};e.I=(o,d)=>{d||(d=[]);var c=h[o];if(c||(c=h[o]={}),!(d.indexOf(c)>=0)){if(d.push(c),a[o])return a[o];e.o(e.S,o)||(e.S[o]={});var v=e.S[o],y="todoApp",g=(m,p,j,E)=>{var O=v[m]=v[m]||{},_=O[p];(!_||!_.loaded&&(!E!=!_.eager?E:y>_.from))&&(O[p]={get:j,from:y,eager:!!E})},b=[];return"default"===o&&(g("@angular/common/http","16.2.0",()=>e.e(562).then(()=>()=>e(1562))),g("@angular/common","16.2.0",()=>e.e(558).then(()=>()=>e(177))),g("@angular/core","16.2.0",()=>e.e(598).then(()=>()=>e(2598))),g("@angular/router","16.2.0",()=>e.e(513).then(()=>()=>e(3894))),(m=>{var p=_=>(m=>{typeof console<"u"&&console.warn&&console.warn(m)})("Initialization of sharing external failed: "+_);try{var j=e(448);if(!j)return;var E=_=>_&&_.init&&_.init(e.S[o],d);if(j.then)return b.push(j.then(E,p));var O=E(j);if(O&&O.then)return b.push(O.catch(p))}catch(_){p(_)}})()),a[o]=b.length?Promise.all(b).then(()=>a[o]=1):1}}})(),(()=>{var a;e.tt=()=>(void 0===a&&(a={createScriptURL:h=>h},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(a=trustedTypes.createPolicy("angular#bundler",a))),a)})(),e.tu=a=>e.tt().createScriptURL(a),e.p="https://abhishekreddy2109.github.io/Todo/",(()=>{var a=t=>{var n=i=>i.split(".").map(f=>+f==f?+f:f),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),u=r[1]?n(r[1]):[];return r[2]&&(u.length++,u.push.apply(u,n(r[2]))),r[3]&&(u.push([]),u.push.apply(u,n(r[3]))),u},o=t=>{var n=t[0],r="";if(1===t.length)return"*";if(n+.5){r+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var u=1,i=1;i<t.length;i++)u--,r+="u"==(typeof(l=t[i]))[0]?"-":(u>0?".":"")+(u=2,l);return r}var f=[];for(i=1;i<t.length;i++){var l=t[i];f.push(0===l?"not("+S()+")":1===l?"("+S()+" || "+S()+")":2===l?f.pop()+" "+f.pop():o(l))}return S();function S(){return f.pop().replace(/^\((.+)\)$/,"$1")}},d=(t,n)=>{if(0 in t){n=a(n);var r=t[0],u=r<0;u&&(r=-r-1);for(var i=0,f=1,l=!0;;f++,i++){var S,V,P=f<t.length?(typeof t[f])[0]:"";if(i>=n.length||"o"==(V=(typeof(S=n[i]))[0]))return!l||("u"==P?f>r&&!u:""==P!=u);if("u"==V){if(!l||"u"!=P)return!1}else if(l)if(P==V)if(f<=r){if(S!=t[f])return!1}else{if(u?S>t[f]:S<t[f])return!1;S!=t[f]&&(l=!1)}else if("s"!=P&&"n"!=P){if(u||f<=r)return!1;l=!1,f--}else{if(f<=r||V<P!=u)return!1;l=!1}else"s"!=P&&"n"!=P&&(l=!1,f--)}}var R=[],x=R.pop.bind(R);for(i=1;i<t.length;i++){var L=t[i];R.push(1==L?x()|x():2==L?x()&x():L?d(L,n):!x())}return!!x()},w=(t,n,r)=>{var u=r?(t=>Object.keys(t).reduce((n,r)=>(t[r].eager&&(n[r]=t[r]),n),{}))(t[n]):t[n];return Object.keys(u).reduce((i,f)=>!i||!u[i].loaded&&((t,n)=>{t=a(t),n=a(n);for(var r=0;;){if(r>=t.length)return r<n.length&&"u"!=(typeof n[r])[0];var u=t[r],i=(typeof u)[0];if(r>=n.length)return"u"==i;var f=n[r],l=(typeof f)[0];if(i!=l)return"o"==i&&"n"==l||"s"==l||"u"==i;if("o"!=i&&"u"!=i&&u!=f)return u<f;r++}})(i,f)?f:i,0)},p=t=>{throw new Error(t)},C=(t=>function(n,r,u,i,f){var l=e.I(n);return l&&l.then&&!u?l.then(t.bind(t,n,e.S[n],r,!1,i,f)):t(n,e.S[n],r,u,i,f)})((t,n,r,u,i,f)=>{if(!((t,n)=>t&&e.o(t,n))(n,r))return((t,n,r)=>r?r():((t,n)=>p("Shared module "+n+" doesn't exist in shared scope "+t))(t,n))(t,r,f);var l=w(n,r,u);return d(i,l)||p(((t,n,r,u)=>"Unsatisfied version "+r+" from "+(r&&t[n][r].from)+" of shared singleton module "+n+" (required "+o(u)+")")(n,r,l,i)),(t=>(t.loaded=1,t.get()))(n[r][l])}),A={},F={2533:()=>C("default","@angular/router",!1,[1,16,2,0],()=>e.e(894).then(()=>()=>e(3894))),5511:()=>C("default","@angular/common/http",!1,[1,16,2,0],()=>e.e(181).then(()=>()=>e(1562))),6903:()=>C("default","@angular/core",!1,[1,16,2,0],()=>e.e(598).then(()=>()=>e(2598))),7241:()=>C("default","@angular/common",!1,[1,16,2,0],()=>e.e(177).then(()=>()=>e(177)))},z={438:[2533,5511,6903,7241],513:[5511,6903,7241],558:[6903],562:[6903,7241]},B={};e.f.consumes=(t,n)=>{e.o(z,t)&&z[t].forEach(r=>{if(e.o(A,r))return n.push(A[r]);if(!B[r]){var u=l=>{A[r]=0,e.m[r]=S=>{delete e.c[r],S.exports=l()}};B[r]=!0;var i=l=>{delete A[r],e.m[r]=S=>{throw delete e.c[r],l}};try{var f=F[r]();f.then?n.push(A[r]=f.then(u).catch(i)):u(f)}catch(l){i(l)}}})}})(),(()=>{var a={792:0};e.f.j=(d,c)=>{var v=e.o(a,d)?a[d]:void 0;if(0!==v)if(v)c.push(v[2]);else if(282!=d){var s=new Promise((b,m)=>v=a[d]=[b,m]);c.push(v[2]=s);var y=e.p+e.u(d),g=new Error;e.l(y,b=>{if(e.o(a,d)&&(0!==(v=a[d])&&(a[d]=void 0),v)){var m=b&&("load"===b.type?"missing":b.type),p=b&&b.target&&b.target.src;g.message="Loading chunk "+d+" failed.\n("+m+": "+p+")",g.name="ChunkLoadError",g.type=m,g.request=p,v[1](g)}},"chunk-"+d,d)}else a[d]=0};var h=(d,c)=>{var g,w,[v,s,y]=c,b=0;if(v.some(p=>0!==a[p])){for(g in s)e.o(s,g)&&(e.m[g]=s[g]);y&&y(e)}for(d&&d(c);b<v.length;b++)e.o(a,w=v[b])&&a[w]&&a[w][0](),a[w]=0},o=self.webpackChunktodoApp=self.webpackChunktodoApp||[];o.forEach(h.bind(null,0)),o.push=h.bind(null,o.push.bind(o))})();var G=e(4429);