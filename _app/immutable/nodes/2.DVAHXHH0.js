import{a as d,n as se,t as y,d as ne}from"../chunks/CRecLwPA.js";import"../chunks/CVz5lsGT.js";import{aH as me,u as ge,m as he,h as _e,t as k,p as oe,z as X,A as r,ac as J,a as le,B as O,c,r as l,D as b,a5 as ee}from"../chunks/DjZWMejr.js";import{o as pe,e as L,s as ie,b as te,a as z}from"../chunks/BllYp7Ke.js";import{i as ce}from"../chunks/twKMz7VN.js";import{b as ue,c as ve,e as U,i as F,r as be,s as Y,a as xe}from"../chunks/CZGaQ8pL.js";import{i as fe}from"../chunks/Cv6weRxt.js";import{p as B}from"../chunks/bwnGCEpo.js";import{p as we,c as ae}from"../chunks/D_nkYteb.js";import{p as Pe}from"../chunks/Ec_rrCkL.js";import{f as ke}from"../chunks/vF5qEgqU.js";function ye(e,a,t=a){var s=me();pe(e,"input",n=>{var v=n?e.defaultValue:e.value;if(v=Z(e)?C(v):v,t(v),s&&v!==(v=a())){var x=e.selectionStart,o=e.selectionEnd;e.value=v??"",o!==null&&(e.selectionStart=x,e.selectionEnd=Math.min(o,e.value.length))}}),(_e&&e.defaultValue!==e.value||ge(a)==null&&e.value)&&t(Z(e)?C(e.value):e.value),he(()=>{var n=a();Z(e)&&n===C(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function Z(e){var a=e.type;return a==="number"||a==="range"}function C(e){return e===""?null:+e}function re(e,a){const t=[];if(a<=7){for(let s=0;s<a;s++)t.push(s);return t}if(t.push(0),e-2>1&&t.push(-1),e>a-4){let s=3-Math.max(a-e-1,0);for(;s>0;)t.push(e-2-s),s--}for(let s=2;s>=1;s--){const n=e-s;n<=0||n>=a||t.push(n)}e!==0&&t.push(e);for(let s=1;s<=2;s++){const n=e+s;n<=0||n>=a||t.push(n)}for(;t.length<6&&t[t.length-1]+1<a;)t.push(t[t.length-1]+1);return t[t.length-1]<a-2&&t.push(-1),t[t.length-1]<a-1&&t.push(a-1),t}var $e=se('<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>');function Me(e,a){let t=B(a,"className",8,"");var s=$e();k(()=>ue(s,ve(t()))),d(e,s)}var Ne=se('<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>');function Se(e,a){let t=B(a,"className",8,"");var s=Ne();k(()=>ue(s,ve(t()))),d(e,s)}var ze=y('<button class="btn btn-ghost btn-square">...</button>'),Ae=y("<button> </button>"),qe=y('<div class="text-sm hidden lg:block"> </div> <div class="scale-75 flex items-center"><button><!></button> <!> <button><!></button></div> <div class="items-center hidden lg:flex"><input placeholder="Go to Page" type="text" class="w-24 join-item input input-sm border-base-300 rounded text-xs"></div>',1);function Ie(e,a){oe(a,!1);const[t,s]=ie(),n=()=>te(we,"$pageSize",t);let v=B(a,"curPageIndex",8),x=B(a,"link2PostMeta",8),o=X(v()-1);const m=Math.ceil(Object.keys(x()).length/n());let A=X(re(r(o),m));function g(i){i<0||i>=m||(O(o,i),O(A,re(r(o),m)),history.replaceState(null,"",window.location.origin+`/?page=${i+1}`),ae.updateCurPageMeta(i+1,x()))}function E(){r(o)>0&&g(r(o)-1)}function D(){r(o)<m-1&&g(r(o)+1)}let $=X("");function K(i){if(i.key!=="Enter")return;const u=parseInt(r($));typeof u=="number"&&g(u-1),O($,"")}fe();var h=qe(),_=J(h),G=c(_);l(_);var w=b(_,2),P=c(w),R=c(P);const q=ee(()=>`${r(o)===0?"fill-neutral-content":"fill-accent"}`);Me(R,{get className(){return r(q)}}),l(P);var I=b(P,2);U(I,1,()=>r(A),F,(i,u)=>{var N=ne(),T=J(N);{var j=S=>{var p=ze();L("click",p,()=>g(r(u))),d(S,p)},W=S=>{var p=Ae(),de=c(p,!0);l(p),k(()=>{Y(p,`btn btn-ghost btn-square ${r(u)===r(o)?"bg-accent text-neutral-50 hover:bg-accent cursor-default":"cursor-pointer"}`),z(de,r(u)+1)}),L("click",p,()=>g(r(u))),d(S,p)};ce(T,S=>{r(u)==-1?S(j):S(W,!1)})}d(i,N)});var M=b(I,2),Q=c(M);const V=ee(()=>`${r(o)===m-1?"fill-neutral-content":"fill-accent"}`);Se(Q,{get className(){return r(V)}}),l(M),l(w);var H=b(w,2),f=c(H);be(f),l(H),k(()=>{z(G,`${n()??""} / page`),Y(P,`btn btn-ghost btn-square ${r(o)!==0?"cursor-pointer":"cursor-default hover:bg-transparent"}`),Y(M,`btn btn-ghost btn-square ${r(o)!==m-1?"cursor-pointer":"cursor-default hover:bg-transparent"}`)}),L("click",P,E),L("click",M,D),ye(f,()=>r($),i=>O($,i)),L("keyup",f,K),d(e,h),le(),s()}var je=y("<span> </span>"),Le=y('<span class="border rounded-full px-2 py-1 text-xs select-none cursor-pointer"> </span>'),Be=y('<a><div class="p-4 my-4 rounded-xl cursor-pointer hover:bg-base-200"><div class="text-xl font-bold"> </div> <div class="py-2 text-sm"><div class="inline-flex gap-4 items-center"><!> <!></div> <div class="py-2 text-sm"> </div></div></div></a>'),Ee=y('<div class="w-full max-w-full min-h-screen flex flex-col"><div class="w-[80ch] max-w-full mx-auto"></div></div> <div class="w-[80ch] max-w-full mx-auto p-4 flex justify-center lg:justify-between items-center mt-8 mb-16"><!></div>',1);function Te(e,a){oe(a,!1);const[t,s]=ie(),n=()=>te(Pe,"$page",t),v=()=>te(ae,"$curPageMeta",t);let x=B(a,"data",8);const o=new URLSearchParams(n().url.search),m=parseInt(o.get("page")??1);ae.updateCurPageMeta(m,x().link2PostMeta),fe();var A=Ee(),g=J(A),E=c(g);U(E,5,v,F,(K,h)=>{var _=Be(),G=c(_),w=c(G),P=c(w,!0);l(w);var R=b(w,2),q=c(R),I=c(q);{var M=f=>{var i=ne(),u=J(i);U(u,1,()=>r(h).categories,F,(N,T)=>{var j=je(),W=c(j,!0);l(j),k(()=>z(W,r(T))),d(N,j)}),d(f,i)};ce(I,f=>{r(h).categories&&f(M)})}var Q=b(I,2);U(Q,1,()=>r(h).tags,F,(f,i)=>{var u=Le(),N=c(u,!0);l(u),k(()=>z(N,r(i))),d(f,u)}),l(q);var V=b(q,2),H=c(V,!0);l(V),l(R),l(G),l(_),k(f=>{xe(_,"href",r(h).link),z(P,r(h).title),z(H,f)},[()=>ke(r(h).date)],ee),d(K,_)}),l(E),l(g);var D=b(g,2),$=c(D);Ie($,{curPageIndex:m,get link2PostMeta(){return x().link2PostMeta}}),l(D),d(e,A),le(),s()}export{Te as component};
