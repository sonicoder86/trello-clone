const zo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};zo();function Pr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Do="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ho=Pr(Do);function pi(e){return!!e||e===""}function Ir(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?Yo(r):Ir(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(te(e))return e}}const Bo=/;(?![^(]*\))/g,Uo=/:(.+)/;function Yo(e){const t={};return e.split(Bo).forEach(n=>{if(n){const r=n.split(Uo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Tr(e){let t="";if(ee(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Tr(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const W={},pt=[],Pe=()=>{},Wo=()=>!1,Ko=/^on[^a-z]/,An=e=>Ko.test(e),Sr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Nr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},qo=Object.prototype.hasOwnProperty,z=(e,t)=>qo.call(e,t),R=Array.isArray,St=e=>Cn(e)==="[object Map]",Xo=e=>Cn(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",Mr=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",hi=e=>te(e)&&L(e.then)&&L(e.catch),Vo=Object.prototype.toString,Cn=e=>Vo.call(e),Jo=e=>Cn(e).slice(8,-1),Go=e=>Cn(e)==="[object Object]",Fr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,nn=Pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zo=/-(\w)/g,Ie=On(e=>e.replace(Zo,(t,n)=>n?n.toUpperCase():"")),Qo=/\B([A-Z])/g,yt=On(e=>e.replace(Qo,"-$1").toLowerCase()),En=On(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=On(e=>e?`on${En(e)}`:""),dn=(e,t)=>!Object.is(e,t),Wn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},es=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ha;const ts=()=>ha||(ha=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ae;class ns{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ae&&(this.parent=Ae,this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ae;try{return Ae=this,t()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function rs(e,t=Ae){t&&t.active&&t.effects.push(e)}const Lr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},gi=e=>(e.w&qe)>0,vi=e=>(e.n&qe)>0,as=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},is=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];gi(a)&&!vi(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},er=new WeakMap;let Pt=0,qe=1;const tr=30;let ge;const tt=Symbol(""),nr=Symbol("");class Rr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rs(this,r)}run(){if(!this.active)return this.fn();let t=ge,n=We;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ge,ge=this,We=!0,qe=1<<++Pt,Pt<=tr?as(this):ga(this),this.fn()}finally{Pt<=tr&&is(this),qe=1<<--Pt,ge=this.parent,We=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ge===this?this.deferStop=!0:this.active&&(ga(this),this.onStop&&this.onStop(),this.active=!1)}}function ga(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let We=!0;const bi=[];function xt(){bi.push(We),We=!1}function _t(){const e=bi.pop();We=e===void 0?!0:e}function de(e,t,n){if(We&&ge){let r=er.get(e);r||er.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Lr()),yi(a)}}function yi(e,t){let n=!1;Pt<=tr?vi(e)||(e.n|=qe,n=!gi(e)):n=!e.has(ge),n&&(e.add(ge),ge.deps.push(e))}function Fe(e,t,n,r,a,i){const o=er.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Fr(n)&&s.push(o.get("length")):(s.push(o.get(tt)),St(e)&&s.push(o.get(nr)));break;case"delete":R(e)||(s.push(o.get(tt)),St(e)&&s.push(o.get(nr)));break;case"set":St(e)&&s.push(o.get(tt));break}if(s.length===1)s[0]&&rr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);rr(Lr(l))}}function rr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&va(r);for(const r of n)r.computed||va(r)}function va(e,t){(e!==ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const os=Pr("__proto__,__v_isRef,__isVue"),xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mr)),ss=$r(),ls=$r(!1,!0),fs=$r(!0),ba=cs();function cs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){xt();const r=H(this)[t].apply(this,n);return _t(),r}}),e}function $r(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Os:Ci:t?Ai:ki).get(r))return r;const o=R(r);if(!e&&o&&z(ba,a))return Reflect.get(ba,a,i);const s=Reflect.get(r,a,i);return(Mr(a)?xi.has(a):os(a))||(e||de(r,"get",a),t)?s:Q(s)?o&&Fr(a)?s:s.value:te(s)?e?Oi(s):Dr(s):s}}const us=_i(),ds=_i(!0);function _i(e=!1){return function(n,r,a,i){let o=n[r];if(jt(o)&&Q(o)&&!Q(a))return!1;if(!e&&!jt(a)&&(ar(a)||(a=H(a),o=H(o)),!R(n)&&Q(o)&&!Q(a)))return o.value=a,!0;const s=R(n)&&Fr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?dn(a,o)&&Fe(n,"set",r,a):Fe(n,"add",r,a)),l}}function ms(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Fe(e,"delete",t,void 0),r}function ps(e,t){const n=Reflect.has(e,t);return(!Mr(t)||!xi.has(t))&&de(e,"has",t),n}function hs(e){return de(e,"iterate",R(e)?"length":tt),Reflect.ownKeys(e)}const wi={get:ss,set:us,deleteProperty:ms,has:ps,ownKeys:hs},gs={get:fs,set(e,t){return!0},deleteProperty(e,t){return!0}},vs=ae({},wi,{get:ls,set:ds}),jr=e=>e,Pn=e=>Reflect.getPrototypeOf(e);function Jt(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=Pn(a),s=r?jr:n?Ur:Br;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Gt(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Zt(e,t=!1){return e=e.__v_raw,!t&&de(H(e),"iterate",tt),Reflect.get(e,"size",e)}function ya(e){e=H(e);const t=H(this);return Pn(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function xa(e,t){t=H(t);const n=H(this),{has:r,get:a}=Pn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?dn(t,o)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function _a(e){const t=H(this),{has:n,get:r}=Pn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function wa(){const e=H(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function Qt(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?jr:e?Ur:Br;return!e&&de(s,"iterate",tt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function en(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=St(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?jr:t?Ur:Br;return!t&&de(i,"iterate",l?nr:tt),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return e==="delete"?!1:this}}function bs(){const e={get(i){return Jt(this,i)},get size(){return Zt(this)},has:Gt,add:ya,set:xa,delete:_a,clear:wa,forEach:Qt(!1,!1)},t={get(i){return Jt(this,i,!1,!0)},get size(){return Zt(this)},has:Gt,add:ya,set:xa,delete:_a,clear:wa,forEach:Qt(!1,!0)},n={get(i){return Jt(this,i,!0)},get size(){return Zt(this,!0)},has(i){return Gt.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Qt(!0,!1)},r={get(i){return Jt(this,i,!0,!0)},get size(){return Zt(this,!0)},has(i){return Gt.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Qt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=en(i,!1,!1),n[i]=en(i,!0,!1),t[i]=en(i,!1,!0),r[i]=en(i,!0,!0)}),[e,n,t,r]}const[ys,xs,_s,ws]=bs();function zr(e,t){const n=t?e?ws:_s:e?xs:ys;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const ks={get:zr(!1,!1)},As={get:zr(!1,!0)},Cs={get:zr(!0,!1)},ki=new WeakMap,Ai=new WeakMap,Ci=new WeakMap,Os=new WeakMap;function Es(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ps(e){return e.__v_skip||!Object.isExtensible(e)?0:Es(Jo(e))}function Dr(e){return jt(e)?e:Hr(e,!1,wi,ks,ki)}function Is(e){return Hr(e,!1,vs,As,Ai)}function Oi(e){return Hr(e,!0,gs,Cs,Ci)}function Hr(e,t,n,r,a){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ps(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function ht(e){return jt(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function jt(e){return!!(e&&e.__v_isReadonly)}function ar(e){return!!(e&&e.__v_isShallow)}function Ei(e){return ht(e)||jt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Pi(e){return mn(e,"__v_skip",!0),e}const Br=e=>te(e)?Dr(e):e,Ur=e=>te(e)?Oi(e):e;function Ts(e){We&&ge&&(e=H(e),yi(e.dep||(e.dep=Lr())))}function Ss(e,t){e=H(e),e.dep&&rr(e.dep)}function Q(e){return!!(e&&e.__v_isRef===!0)}function rn(e){return Q(e)?e.value:e}const Ns={get:(e,t,n)=>rn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Q(a)&&!Q(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ii(e){return ht(e)?e:new Proxy(e,Ns)}class Ms{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Rr(t,()=>{this._dirty||(this._dirty=!0,Ss(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return Ts(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Fs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Pe):(r=e.get,a=e.set),new Ms(r,a,i||!a,n)}function Ke(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){In(i,t,n)}return a}function xe(e,t,n,r){if(L(e)){const i=Ke(e,t,n,r);return i&&hi(i)&&i.catch(o=>{In(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(xe(e[i],t,n,r));return a}function In(e,t,n,r){if(t&&t.vnode,t){let a=t.parent;const i=t.proxy,o=n;for(;a;){const l=a.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,i,o)===!1)return}a=a.parent}const s=t.appContext.config.errorHandler;if(s){Ke(s,null,10,[e,i,o]);return}}Ls(e)}function Ls(e,t,n,r){console.error(e)}let pn=!1,ir=!1;const ue=[];let Me=0;const Nt=[];let It=null,ft=0;const Mt=[];let Ue=null,ct=0;const Ti=Promise.resolve();let Yr=null,or=null;function Rs(e){const t=Yr||Ti;return e?t.then(this?e.bind(this):e):t}function $s(e){let t=Me+1,n=ue.length;for(;t<n;){const r=t+n>>>1;zt(ue[r])<e?t=r+1:n=r}return t}function Si(e){(!ue.length||!ue.includes(e,pn&&e.allowRecurse?Me+1:Me))&&e!==or&&(e.id==null?ue.push(e):ue.splice($s(e.id),0,e),Ni())}function Ni(){!pn&&!ir&&(ir=!0,Yr=Ti.then(Li))}function js(e){const t=ue.indexOf(e);t>Me&&ue.splice(t,1)}function Mi(e,t,n,r){R(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ni()}function zs(e){Mi(e,It,Nt,ft)}function Ds(e){Mi(e,Ue,Mt,ct)}function Tn(e,t=null){if(Nt.length){for(or=t,It=[...new Set(Nt)],Nt.length=0,ft=0;ft<It.length;ft++)It[ft]();It=null,ft=0,or=null,Tn(e,t)}}function Fi(e){if(Tn(),Mt.length){const t=[...new Set(Mt)];if(Mt.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>zt(n)-zt(r)),ct=0;ct<Ue.length;ct++)Ue[ct]();Ue=null,ct=0}}const zt=e=>e.id==null?1/0:e.id;function Li(e){ir=!1,pn=!0,Tn(e),ue.sort((n,r)=>zt(n)-zt(r));const t=Pe;try{for(Me=0;Me<ue.length;Me++){const n=ue[Me];n&&n.active!==!1&&Ke(n,null,14)}}finally{Me=0,ue.length=0,Fi(),pn=!1,Yr=null,(ue.length||Nt.length||Mt.length)&&Li(e)}}function Hs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||W;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||W;b&&(a=n.map(C=>C.trim())),m&&(a=n.map(es))}let s,l=r[s=Yn(t)]||r[s=Yn(Ie(t))];!l&&i&&(l=r[s=Yn(yt(t))]),l&&xe(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,xe(u,e,6,a)}}function Ri(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=Ri(u,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ae(o,i),r.set(e,o),o)}function Sn(e,t){return!e||!An(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,yt(t))||z(e,t))}let Oe=null,$i=null;function hn(e){const t=Oe;return Oe=e,$i=e&&e.type.__scopeId||null,t}function ji(e,t=Oe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Na(-1);const i=hn(t),o=e(...a);return hn(i),r._d&&Na(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Kn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:C,ctx:F,inheritAttrs:$}=e;let S,y;const O=hn(e);try{if(n.shapeFlag&4){const j=a||r;S=Ce(d.call(j,j,m,i,C,b,F)),y=l}else{const j=t;S=Ce(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=t.props?l:Bs(l)}}catch(j){Ft.length=0,In(j,e,1),S=G(Dt)}let N=S;if(y&&$!==!1){const j=Object.keys(y),{shapeFlag:Y}=N;j.length&&Y&7&&(o&&j.some(Sr)&&(y=Us(y,o)),N=vt(N,y))}return n.dirs&&(N=vt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),S=N,hn(O),S}const Bs=e=>{let t;for(const n in e)(n==="class"||n==="style"||An(n))&&((t||(t={}))[n]=e[n]);return t},Us=(e,t)=>{const n={};for(const r in e)(!Sr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ys(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ka(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Sn(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ka(r,o,u):!0:!!o;return!1}function ka(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Sn(n,i))return!0}return!1}function Ws({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ks=e=>e.__isSuspense;function qs(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Ds(e)}function Xs(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function qn(e,t,n=!1){const r=Z||Oe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const Aa={};function an(e,t,n){return zi(e,t,n)}function zi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=Z;let l,u=!1,d=!1;if(Q(e)?(l=()=>e.value,u=ar(e)):ht(e)?(l=()=>e,r=!0):R(e)?(d=!0,u=e.some(y=>ht(y)||ar(y)),l=()=>e.map(y=>{if(Q(y))return y.value;if(ht(y))return ut(y);if(L(y))return Ke(y,s,2)})):L(e)?t?l=()=>Ke(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),xe(e,s,3,[b])}:l=Pe,t&&r){const y=l;l=()=>ut(y())}let m,b=y=>{m=S.onStop=()=>{Ke(y,s,4)}};if(Bt)return b=Pe,t?n&&xe(t,s,3,[l(),d?[]:void 0,b]):l(),Pe;let C=d?[]:Aa;const F=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((O,N)=>dn(O,C[N])):dn(y,C)))&&(m&&m(),xe(t,s,3,[y,C===Aa?void 0:C,b]),C=y)}else S.run()};F.allowRecurse=!!t;let $;a==="sync"?$=F:a==="post"?$=()=>le(F,s&&s.suspense):$=()=>zs(F);const S=new Rr(l,$);return t?n?F():C=S.run():a==="post"?le(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Nr(s.scope.effects,S)}}function Vs(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?Di(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=Z;bt(this);const s=zi(a,i.bind(r),n);return o?bt(o):nt(),s}function Di(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ut(e,t){if(!te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Q(e))ut(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)ut(e[n],t);else if(Xo(e)||St(e))e.forEach(n=>{ut(n,t)});else if(Go(e))for(const n in e)ut(e[n],t);return e}function Yt(e){return L(e)?{setup:e,name:e.name}:e}const on=e=>!!e.type.__asyncLoader,Hi=e=>e.type.__isKeepAlive;function Js(e,t){Bi(e,"a",t)}function Gs(e,t){Bi(e,"da",t)}function Bi(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Nn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Hi(a.parent.vnode)&&Zs(r,t,n,a),a=a.parent}}function Zs(e,t,n,r){const a=Nn(t,e,r,!0);Ui(()=>{Nr(r[t],a)},n)}function Nn(e,t,n=Z,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;xt(),bt(n);const s=xe(t,n,e,o);return nt(),_t(),s});return r?a.unshift(i):a.push(i),i}}const je=e=>(t,n=Z)=>(!Bt||e==="sp")&&Nn(e,t,n),Qs=je("bm"),el=je("m"),tl=je("bu"),nl=je("u"),rl=je("bum"),Ui=je("um"),al=je("sp"),il=je("rtg"),ol=je("rtc");function sl(e,t=Z){Nn("ec",e,t)}function Je(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(xt(),xe(l,n,8,[e.el,s,e,t]),_t())}}const Yi="components";function sn(e,t){return fl(Yi,e,!0,t)||e}const ll=Symbol();function fl(e,t,n,r=!1){const a=Oe||Z;if(a){const i=a.type;if(e===Yi){const s=Dl(i);if(s&&(s===t||s===Ie(t)||s===En(Ie(t))))return i}const o=Ca(a[e]||i[e],t)||Ca(a.appContext[e],t);return!o&&r?i:o}}function Ca(e,t){return e&&(e[t]||e[Ie(t)]||e[En(Ie(t))])}const sr=e=>e?to(e)?Xr(e)||e.proxy:sr(e.parent):null,gn=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>sr(e.parent),$root:e=>sr(e.root),$emit:e=>e.emit,$options:e=>Ki(e),$forceUpdate:e=>e.f||(e.f=()=>Si(e.update)),$nextTick:e=>e.n||(e.n=Rs.bind(e.proxy)),$watch:e=>Vs.bind(e)}),cl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const C=o[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==W&&z(r,t))return o[t]=1,r[t];if(a!==W&&z(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&z(u,t))return o[t]=3,i[t];if(n!==W&&z(n,t))return o[t]=4,n[t];lr&&(o[t]=0)}}const d=gn[t];let m,b;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==W&&z(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,z(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==W&&z(a,t)?(a[t]=n,!0):r!==W&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==W&&z(e,o)||t!==W&&z(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(gn,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let lr=!0;function ul(e){const t=Ki(e),n=e.proxy,r=e.ctx;lr=!1,t.beforeCreate&&Oa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:C,updated:F,activated:$,deactivated:S,beforeDestroy:y,beforeUnmount:O,destroyed:N,unmounted:j,render:Y,renderTracked:ne,renderTriggered:fe,errorCaptured:_e,serverPrefetch:ie,expose:kt,inheritAttrs:it,components:At,directives:Xt,filters:fa}=t;if(u&&dl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const V in o){const K=o[V];L(K)&&(r[V]=K.bind(n))}if(a){const V=a.call(n,n);te(V)&&(e.data=Dr(V))}if(lr=!0,i)for(const V in i){const K=i[V],Te=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):Pe,Hn=!L(K)&&L(K.set)?K.set.bind(n):Pe,Ct=pe({get:Te,set:Hn});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:ot=>Ct.value=ot})}if(s)for(const V in s)Wi(s[V],r,n,V);if(l){const V=L(l)?l.call(n):l;Reflect.ownKeys(V).forEach(K=>{Xs(K,V[K])})}d&&Oa(d,e,"c");function oe(V,K){R(K)?K.forEach(Te=>V(Te.bind(n))):K&&V(K.bind(n))}if(oe(Qs,m),oe(el,b),oe(tl,C),oe(nl,F),oe(Js,$),oe(Gs,S),oe(sl,_e),oe(ol,ne),oe(il,fe),oe(rl,O),oe(Ui,j),oe(al,ie),R(kt))if(kt.length){const V=e.exposed||(e.exposed={});kt.forEach(K=>{Object.defineProperty(V,K,{get:()=>n[K],set:Te=>n[K]=Te})})}else e.exposed||(e.exposed={});Y&&e.render===Pe&&(e.render=Y),it!=null&&(e.inheritAttrs=it),At&&(e.components=At),Xt&&(e.directives=Xt)}function dl(e,t,n,r=!1){R(e)&&(e=fr(e));for(const a in e){const i=e[a];let o;te(i)?"default"in i?o=qn(i.from||a,i.default,!0):o=qn(i.from||a):o=qn(i),Q(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Oa(e,t,n){xe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wi(e,t,n,r){const a=r.includes(".")?Di(n,r):()=>n[r];if(ee(e)){const i=t[e];L(i)&&an(a,i)}else if(L(e))an(a,e.bind(n));else if(te(e))if(R(e))e.forEach(i=>Wi(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&an(a,i,e)}}function Ki(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>vn(l,u,o,!0)),vn(l,t,o)),i.set(t,l),l}function vn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&vn(e,i,n,!0),a&&a.forEach(o=>vn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=ml[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const ml={data:Ea,props:Ze,emits:Ze,methods:Ze,computed:Ze,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:Ze,directives:Ze,watch:hl,provide:Ea,inject:pl};function Ea(e,t){return t?e?function(){return ae(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function pl(e,t){return Ze(fr(e),fr(t))}function fr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function re(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?ae(ae(Object.create(null),e),t):t}function hl(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=re(e[r],t[r]);return n}function gl(e,t,n,r=!1){const a={},i={};mn(i,Mn,1),e.propsDefaults=Object.create(null),qi(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Is(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function vl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Sn(e.emitsOptions,b))continue;const C=t[b];if(l)if(z(i,b))C!==i[b]&&(i[b]=C,u=!0);else{const F=Ie(b);a[F]=cr(l,s,F,C,e,!1)}else C!==i[b]&&(i[b]=C,u=!0)}}}else{qi(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=yt(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=cr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m)&&!0)&&(delete i[m],u=!0)}u&&Fe(e,"set","$attrs")}function qi(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(nn(l))continue;const u=t[l];let d;a&&z(a,d=Ie(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Sn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=H(n),u=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=cr(a,l,m,u[m],e,!z(u,m))}}return o}function cr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(bt(a),r=u[n]=l.call(null,t),nt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===yt(n))&&(r=!0))}return r}function Xi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[b,C]=Xi(m,t,!0);ae(o,b),C&&s.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,pt),pt;if(R(i))for(let d=0;d<i.length;d++){const m=Ie(i[d]);Pa(m)&&(o[m]=W)}else if(i)for(const d in i){const m=Ie(d);if(Pa(m)){const b=i[d],C=o[m]=R(b)||L(b)?{type:b}:b;if(C){const F=Sa(Boolean,C.type),$=Sa(String,C.type);C[0]=F>-1,C[1]=$<0||F<$,(F>-1||z(C,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Pa(e){return e[0]!=="$"}function Ia(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ta(e,t){return Ia(e)===Ia(t)}function Sa(e,t){return R(t)?t.findIndex(n=>Ta(n,e)):L(t)&&Ta(t,e)?0:-1}const Vi=e=>e[0]==="_"||e==="$stable",Wr=e=>R(e)?e.map(Ce):[Ce(e)],bl=(e,t,n)=>{if(t._n)return t;const r=ji((...a)=>Wr(t(...a)),n);return r._c=!1,r},Ji=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Vi(a))continue;const i=e[a];if(L(i))t[a]=bl(a,i,r);else if(i!=null){const o=Wr(i);t[a]=()=>o}}},Gi=(e,t)=>{const n=Wr(t);e.slots.default=()=>n},yl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),mn(t,"_",n)):Ji(t,e.slots={})}else e.slots={},t&&Gi(e,t);mn(e.slots,Mn,1)},xl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=W;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Ji(t,a)),o=t}else t&&(Gi(e,t),o={default:1});if(i)for(const s in a)!Vi(s)&&!(s in o)&&delete a[s]};function Zi(){return{app:null,config:{isNativeTag:Wo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _l=0;function wl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!te(a)&&(a=null);const i=Zi(),o=new Set;let s=!1;const l=i.app={_uid:_l++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Bl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=G(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,Xr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function ur(e,t,n,r,a=!1){if(R(e)){e.forEach((b,C)=>ur(b,t&&(R(t)?t[C]:t),n,r,a));return}if(on(r)&&!a)return;const i=r.shapeFlag&4?Xr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ee(u)?(d[u]=null,z(m,u)&&(m[u]=null)):Q(u)&&(u.value=null)),L(l))Ke(l,s,12,[o,d]);else{const b=ee(l),C=Q(l);if(b||C){const F=()=>{if(e.f){const $=b?d[l]:l.value;a?R($)&&Nr($,i):R($)?$.includes(i)||$.push(i):b?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,z(m,l)&&(m[l]=o)):Q(l)&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,le(F,n)):F()}}}const le=qs;function kl(e){return Al(e)}function Al(e,t){const n=ts();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:C=Pe,cloneNode:F,insertStaticContent:$}=e,S=(f,c,p,g=null,h=null,_=null,k=!1,x=null,w=!!c.dynamicChildren)=>{if(f===c)return;f&&!Et(f,c)&&(g=Vt(f),De(f,h,_,!0),f=null),c.patchFlag===-2&&(w=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:E}=c;switch(v){case Kr:y(f,c,p,g);break;case Dt:O(f,c,p,g);break;case Xn:f==null&&N(c,p,g,k);break;case Ne:Xt(f,c,p,g,h,_,k,x,w);break;default:E&1?ne(f,c,p,g,h,_,k,x,w):E&6?fa(f,c,p,g,h,_,k,x,w):(E&64||E&128)&&v.process(f,c,p,g,h,_,k,x,w,st)}P!=null&&h&&ur(P,f&&f.ref,_,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},O=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=$(f.children,c,p,g,f.el,f.anchor)},j=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},Y=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},ne=(f,c,p,g,h,_,k,x,w)=>{k=k||c.type==="svg",f==null?fe(c,p,g,h,_,k,x,w):kt(f,c,h,_,k,x,w)},fe=(f,c,p,g,h,_,k,x)=>{let w,v;const{type:P,props:E,shapeFlag:I,transition:M,patchFlag:D,dirs:B}=f;if(f.el&&F!==void 0&&D===-1)w=f.el=F(f.el);else{if(w=f.el=o(f.type,_,E&&E.is,E),I&8?d(w,f.children):I&16&&ie(f.children,w,null,g,h,_&&P!=="foreignObject",k,x),B&&Je(f,null,g,"created"),E){for(const q in E)q!=="value"&&!nn(q)&&i(w,q,null,E[q],_,f.children,g,h,Se);"value"in E&&i(w,"value",null,E.value),(v=E.onVnodeBeforeMount)&&ke(v,g,f)}_e(w,f,f.scopeId,k,g)}B&&Je(f,null,g,"beforeMount");const U=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;U&&M.beforeEnter(w),r(w,c,p),((v=E&&E.onVnodeMounted)||U||B)&&le(()=>{v&&ke(v,g,f),U&&M.enter(w),B&&Je(f,null,g,"mounted")},h)},_e=(f,c,p,g,h)=>{if(p&&C(f,p),g)for(let _=0;_<g.length;_++)C(f,g[_]);if(h){let _=h.subTree;if(c===_){const k=h.vnode;_e(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},ie=(f,c,p,g,h,_,k,x,w=0)=>{for(let v=w;v<f.length;v++){const P=f[v]=x?Ye(f[v]):Ce(f[v]);S(null,P,c,p,g,h,_,k,x)}},kt=(f,c,p,g,h,_,k)=>{const x=c.el=f.el;let{patchFlag:w,dynamicChildren:v,dirs:P}=c;w|=f.patchFlag&16;const E=f.props||W,I=c.props||W;let M;p&&Ge(p,!1),(M=I.onVnodeBeforeUpdate)&&ke(M,p,c,f),P&&Je(c,f,p,"beforeUpdate"),p&&Ge(p,!0);const D=h&&c.type!=="foreignObject";if(v?it(f.dynamicChildren,v,x,p,g,D,_):k||Te(f,c,x,null,p,g,D,_,!1),w>0){if(w&16)At(x,c,E,I,p,g,h);else if(w&2&&E.class!==I.class&&i(x,"class",null,I.class,h),w&4&&i(x,"style",E.style,I.style,h),w&8){const B=c.dynamicProps;for(let U=0;U<B.length;U++){const q=B[U],he=E[q],lt=I[q];(lt!==he||q==="value")&&i(x,q,he,lt,h,f.children,p,g,Se)}}w&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&At(x,c,E,I,p,g,h);((M=I.onVnodeUpdated)||P)&&le(()=>{M&&ke(M,p,c,f),P&&Je(c,f,p,"updated")},g)},it=(f,c,p,g,h,_,k)=>{for(let x=0;x<c.length;x++){const w=f[x],v=c[x],P=w.el&&(w.type===Ne||!Et(w,v)||w.shapeFlag&70)?m(w.el):p;S(w,v,P,null,g,h,_,k,!0)}},At=(f,c,p,g,h,_,k)=>{if(p!==g){for(const x in g){if(nn(x))continue;const w=g[x],v=p[x];w!==v&&x!=="value"&&i(f,x,v,w,k,c.children,h,_,Se)}if(p!==W)for(const x in p)!nn(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,_,Se);"value"in g&&i(f,"value",p.value,g.value)}},Xt=(f,c,p,g,h,_,k,x,w)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,p,g),r(P,p,g),ie(c.children,p,P,h,_,k,x,w)):E>0&&E&64&&I&&f.dynamicChildren?(it(f.dynamicChildren,I,p,h,_,k,x),(c.key!=null||h&&c===h.subTree)&&Qi(f,c,!0)):Te(f,c,p,P,h,_,k,x,w)},fa=(f,c,p,g,h,_,k,x,w)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,w):Dn(c,p,g,h,_,k,w):oe(f,c,w)},Dn=(f,c,p,g,h,_,k)=>{const x=f.component=Ll(f,g,h);if(Hi(f)&&(x.ctx.renderer=st),Rl(x),x.asyncDep){if(h&&h.registerDep(x,V),!f.el){const w=x.subTree=G(Dt);O(null,w,c,p)}return}V(x,f,c,p,h,_,k)},oe=(f,c,p)=>{const g=c.component=f.component;if(Ys(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,js(g.update),g.update();else c.el=f.el,g.vnode=c},V=(f,c,p,g,h,_,k)=>{const x=()=>{if(f.isMounted){let{next:P,bu:E,u:I,parent:M,vnode:D}=f,B=P,U;Ge(f,!1),P?(P.el=D.el,K(f,P,k)):P=D,E&&Wn(E),(U=P.props&&P.props.onVnodeBeforeUpdate)&&ke(U,M,P,D),Ge(f,!0);const q=Kn(f),he=f.subTree;f.subTree=q,S(he,q,m(he.el),Vt(he),f,h,_),P.el=q.el,B===null&&Ws(f,q.el),I&&le(I,h),(U=P.props&&P.props.onVnodeUpdated)&&le(()=>ke(U,M,P,D),h)}else{let P;const{el:E,props:I}=c,{bm:M,m:D,parent:B}=f,U=on(c);if(Ge(f,!1),M&&Wn(M),!U&&(P=I&&I.onVnodeBeforeMount)&&ke(P,B,c),Ge(f,!0),E&&Un){const q=()=>{f.subTree=Kn(f),Un(E,f.subTree,f,h,null)};U?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=Kn(f);S(null,q,p,g,f,h,_),c.el=q.el}if(D&&le(D,h),!U&&(P=I&&I.onVnodeMounted)){const q=c;le(()=>ke(P,B,q),h)}(c.shapeFlag&256||B&&on(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&le(f.a,h),f.isMounted=!0,c=p=g=null}},w=f.effect=new Rr(x,()=>Si(v),f.scope),v=f.update=()=>w.run();v.id=f.uid,Ge(f,!0),v()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,vl(f,c.props,g,p),xl(f,c.children,p),xt(),Tn(void 0,f.update),_t()},Te=(f,c,p,g,h,_,k,x,w=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,E=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){Ct(v,E,p,g,h,_,k,x,w);return}else if(I&256){Hn(v,E,p,g,h,_,k,x,w);return}}M&8?(P&16&&Se(v,h,_),E!==v&&d(p,E)):P&16?M&16?Ct(v,E,p,g,h,_,k,x,w):Se(v,h,_,!0):(P&8&&d(p,""),M&16&&ie(E,p,g,h,_,k,x,w))},Hn=(f,c,p,g,h,_,k,x,w)=>{f=f||pt,c=c||pt;const v=f.length,P=c.length,E=Math.min(v,P);let I;for(I=0;I<E;I++){const M=c[I]=w?Ye(c[I]):Ce(c[I]);S(f[I],M,p,null,h,_,k,x,w)}v>P?Se(f,h,_,!0,!1,E):ie(c,p,g,h,_,k,x,w,E)},Ct=(f,c,p,g,h,_,k,x,w)=>{let v=0;const P=c.length;let E=f.length-1,I=P-1;for(;v<=E&&v<=I;){const M=f[v],D=c[v]=w?Ye(c[v]):Ce(c[v]);if(Et(M,D))S(M,D,p,null,h,_,k,x,w);else break;v++}for(;v<=E&&v<=I;){const M=f[E],D=c[I]=w?Ye(c[I]):Ce(c[I]);if(Et(M,D))S(M,D,p,null,h,_,k,x,w);else break;E--,I--}if(v>E){if(v<=I){const M=I+1,D=M<P?c[M].el:g;for(;v<=I;)S(null,c[v]=w?Ye(c[v]):Ce(c[v]),p,D,h,_,k,x,w),v++}}else if(v>I)for(;v<=E;)De(f[v],h,_,!0),v++;else{const M=v,D=v,B=new Map;for(v=D;v<=I;v++){const ce=c[v]=w?Ye(c[v]):Ce(c[v]);ce.key!=null&&B.set(ce.key,v)}let U,q=0;const he=I-D+1;let lt=!1,da=0;const Ot=new Array(he);for(v=0;v<he;v++)Ot[v]=0;for(v=M;v<=E;v++){const ce=f[v];if(q>=he){De(ce,h,_,!0);continue}let we;if(ce.key!=null)we=B.get(ce.key);else for(U=D;U<=I;U++)if(Ot[U-D]===0&&Et(ce,c[U])){we=U;break}we===void 0?De(ce,h,_,!0):(Ot[we-D]=v+1,we>=da?da=we:lt=!0,S(ce,c[we],p,null,h,_,k,x,w),q++)}const ma=lt?Cl(Ot):pt;for(U=ma.length-1,v=he-1;v>=0;v--){const ce=D+v,we=c[ce],pa=ce+1<P?c[ce+1].el:g;Ot[v]===0?S(null,we,p,pa,h,_,k,x,w):lt&&(U<0||v!==ma[U]?ot(we,p,pa,2):U--)}}},ot=(f,c,p,g,h=null)=>{const{el:_,type:k,transition:x,children:w,shapeFlag:v}=f;if(v&6){ot(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,st);return}if(k===Ne){r(_,c,p);for(let E=0;E<w.length;E++)ot(w[E],c,p,g);r(f.anchor,c,p);return}if(k===Xn){j(f,c,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(_),r(_,c,p),le(()=>x.enter(_),h);else{const{leave:E,delayLeave:I,afterLeave:M}=x,D=()=>r(_,c,p),B=()=>{E(_,()=>{D(),M&&M()})};I?I(_,D,B):B()}else r(_,c,p)},De=(f,c,p,g=!1,h=!1)=>{const{type:_,props:k,ref:x,children:w,dynamicChildren:v,shapeFlag:P,patchFlag:E,dirs:I}=f;if(x!=null&&ur(x,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&I,D=!on(f);let B;if(D&&(B=k&&k.onVnodeBeforeUnmount)&&ke(B,c,f),P&6)jo(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}M&&Je(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,h,st,g):v&&(_!==Ne||E>0&&E&64)?Se(v,c,p,!1,!0):(_===Ne&&E&384||!h&&P&16)&&Se(w,c,p),g&&ca(f)}(D&&(B=k&&k.onVnodeUnmounted)||M)&&le(()=>{B&&ke(B,c,f),M&&Je(f,null,c,"unmounted")},p)},ca=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Ne){$o(p,g);return}if(c===Xn){Y(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,w=()=>k(p,_);x?x(f.el,_,w):w()}else _()},$o=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},jo=(f,c,p)=>{const{bum:g,scope:h,update:_,subTree:k,um:x}=f;g&&Wn(g),h.stop(),_&&(_.active=!1,De(k,f,c,p)),x&&le(x,c),le(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Se=(f,c,p,g=!1,h=!1,_=0)=>{for(let k=_;k<f.length;k++)De(f[k],c,p,g,h)},Vt=f=>f.shapeFlag&6?Vt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ua=(f,c,p)=>{f==null?c._vnode&&De(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,p),Fi(),c._vnode=f},st={p:S,um:De,m:ot,r:ca,mt:Dn,mc:ie,pc:Te,pbc:it,n:Vt,o:e};let Bn,Un;return t&&([Bn,Un]=t(st)),{render:ua,hydrate:Bn,createApp:wl(ua,Bn)}}function Ge({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Qi(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ye(a[i]),s.el=o.el),n||Qi(o,s))}}function Cl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ol=e=>e.__isTeleport,Ne=Symbol(void 0),Kr=Symbol(void 0),Dt=Symbol(void 0),Xn=Symbol(void 0),Ft=[];let be=null;function Wt(e=!1){Ft.push(be=e?null:[])}function El(){Ft.pop(),be=Ft[Ft.length-1]||null}let Ht=1;function Na(e){Ht+=e}function Pl(e){return e.dynamicChildren=Ht>0?be||pt:null,El(),Ht>0&&be&&be.push(e),e}function Kt(e,t,n,r,a,i){return Pl(J(e,t,n,r,a,i,!0))}function dr(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const Mn="__vInternal",eo=({key:e})=>e!=null?e:null,ln=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||Q(e)||L(e)?{i:Oe,r:e,k:t,f:!!n}:e:null;function J(e,t=null,n=null,r=0,a=null,i=e===Ne?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&eo(t),ref:t&&ln(t),scopeId:$i,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(qr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Ht>0&&!o&&be&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&be.push(l),l}const G=Il;function Il(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===ll)&&(e=Dt),dr(e)){const s=vt(e,t,!0);return n&&qr(s,n),Ht>0&&!i&&be&&(s.shapeFlag&6?be[be.indexOf(e)]=s:be.push(s)),s.patchFlag|=-2,s}if(Hl(e)&&(e=e.__vccOpts),t){t=Tl(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=Tr(s)),te(l)&&(Ei(l)&&!R(l)&&(l=ae({},l)),t.style=Ir(l))}const o=ee(e)?1:Ks(e)?128:Ol(e)?64:te(e)?4:L(e)?2:0;return J(e,t,n,r,a,o,i,!0)}function Tl(e){return e?Ei(e)||Mn in e?ae({},e):e:null}function vt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Nl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&eo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(ln(t)):[a,ln(t)]:ln(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&vt(e.ssContent),ssFallback:e.ssFallback&&vt(e.ssFallback),el:e.el,anchor:e.anchor}}function Sl(e=" ",t=0){return G(Kr,null,e,t)}function Ce(e){return e==null||typeof e=="boolean"?G(Dt):R(e)?G(Ne,null,e.slice()):typeof e=="object"?Ye(e):G(Kr,null,String(e))}function Ye(e){return e.el===null||e.memo?e:vt(e)}function qr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),qr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Mn in t)?t._ctx=Oe:a===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),r&64?(n=16,t=[Sl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Nl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Tr([t.class,r.class]));else if(a==="style")t.style=Ir([t.style,r.style]);else if(An(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function ke(e,t,n,r=null){xe(e,t,7,[n,r])}const Ml=Zi();let Fl=0;function Ll(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Ml,i={uid:Fl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ns(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xi(r,a),emitsOptions:Ri(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Hs.bind(null,i),e.ce&&e.ce(i),i}let Z=null;const bt=e=>{Z=e,e.scope.on()},nt=()=>{Z&&Z.scope.off(),Z=null};function to(e){return e.vnode.shapeFlag&4}let Bt=!1;function Rl(e,t=!1){Bt=t;const{props:n,children:r}=e.vnode,a=to(e);gl(e,n,a,t),yl(e,r);const i=a?$l(e,t):void 0;return Bt=!1,i}function $l(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Pi(new Proxy(e.ctx,cl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?zl(e):null;bt(e),xt();const i=Ke(r,e,0,[e.props,a]);if(_t(),nt(),hi(i)){if(i.then(nt,nt),t)return i.then(o=>{Ma(e,o,t)}).catch(o=>{In(o,e,0)});e.asyncDep=i}else Ma(e,i,t)}else no(e,t)}function Ma(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=Ii(t)),no(e,n)}let Fa;function no(e,t,n){const r=e.type;if(!e.render){if(!t&&Fa&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=Fa(a,u)}}e.render=r.render||Pe}bt(e),xt(),ul(e),_t(),nt()}function jl(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function zl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=jl(e))},slots:e.slots,emit:e.emit,expose:t}}function Xr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ii(Pi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gn)return gn[n](e)}}))}function Dl(e){return L(e)&&e.displayName||e.name}function Hl(e){return L(e)&&"__vccOpts"in e}const pe=(e,t)=>Fs(e,t,Bt);function ro(e,t,n){const r=arguments.length;return r===2?te(t)&&!R(t)?dr(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&dr(n)&&(n=[n]),G(e,t,n))}const Bl="3.2.36",Ul="http://www.w3.org/2000/svg",Qe=typeof document!="undefined"?document:null,La=Qe&&Qe.createElement("template"),Yl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Qe.createElementNS(Ul,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{La.innerHTML=r?`<svg>${e}</svg>`:e;const s=La.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Wl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Kl(e,t,n){const r=e.style,a=ee(n);if(n&&!a){for(const i in n)mr(r,i,n[i]);if(t&&!ee(t))for(const i in t)n[i]==null&&mr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ra=/\s*!important$/;function mr(e,t,n){if(R(n))n.forEach(r=>mr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ql(e,t);Ra.test(n)?e.setProperty(yt(r),n.replace(Ra,""),"important"):e[r]=n}}const $a=["Webkit","Moz","ms"],Vn={};function ql(e,t){const n=Vn[t];if(n)return n;let r=Ie(t);if(r!=="filter"&&r in e)return Vn[t]=r;r=En(r);for(let a=0;a<$a.length;a++){const i=$a[a]+r;if(i in e)return Vn[t]=i}return t}const ja="http://www.w3.org/1999/xlink";function Xl(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ja,t.slice(6,t.length)):e.setAttributeNS(ja,t,n);else{const i=Ho(t);n==null||i&&!pi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Vl(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=pi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[ao,Jl]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let pr=0;const Gl=Promise.resolve(),Zl=()=>{pr=0},Ql=()=>pr||(Gl.then(Zl),pr=ao());function ef(e,t,n,r){e.addEventListener(t,n,r)}function tf(e,t,n,r){e.removeEventListener(t,n,r)}function nf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=rf(t);if(r){const u=i[t]=af(r,a);ef(e,s,u,l)}else o&&(tf(e,s,o,l),i[t]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function rf(e){let t;if(za.test(e)){t={};let n;for(;n=e.match(za);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[yt(e.slice(2)),t]}function af(e,t){const n=r=>{const a=r.timeStamp||ao();(Jl||a>=n.attached-1)&&xe(of(r,n.value),t,5,[r])};return n.value=e,n.attached=Ql(),n}function of(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Da=/^on[a-z]/,sf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Wl(e,r,a):t==="style"?Kl(e,n,r):An(t)?Sr(t)||nf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lf(e,t,r,a))?Vl(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Xl(e,t,r,a))};function lf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Da.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Da.test(t)&&ee(n)?!1:t in e}const ff=ae({patchProp:sf},Yl);let Ha;function cf(){return Ha||(Ha=kl(ff))}const uf=(...e)=>{const t=cf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=df(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function df(e){return ee(e)?document.querySelector(e):e}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ba(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ba(Object(n),!0).forEach(function(r){hf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ba(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bn(e){return bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bn(e)}function mf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ua(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pf(e,t,n){return t&&Ua(e.prototype,t),n&&Ua(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function hf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vr(e,t){return vf(e)||yf(e,t)||io(e,t)||_f()}function Fn(e){return gf(e)||bf(e)||io(e)||xf()}function gf(e){if(Array.isArray(e))return hr(e)}function vf(e){if(Array.isArray(e))return e}function bf(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yf(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function io(e,t){if(!!e){if(typeof e=="string")return hr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hr(e,t)}}function hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ya=function(){},Jr={},oo={},so=null,lo={mark:Ya,measure:Ya};try{typeof window!="undefined"&&(Jr=window),typeof document!="undefined"&&(oo=document),typeof MutationObserver!="undefined"&&(so=MutationObserver),typeof performance!="undefined"&&(lo=performance)}catch{}var wf=Jr.navigator||{},Wa=wf.userAgent,Ka=Wa===void 0?"":Wa,Xe=Jr,X=oo,qa=so,tn=lo;Xe.document;var ze=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",fo=~Ka.indexOf("MSIE")||~Ka.indexOf("Trident/"),Le="___FONT_AWESOME___",gr=16,co="fa",uo="svg-inline--fa",rt="data-fa-i2svg",vr="data-fa-pseudo-element",kf="data-fa-pseudo-element-pending",Gr="data-prefix",Zr="data-icon",Xa="fontawesome-i2svg",Af="async",Cf=["HTML","HEAD","STYLE","SCRIPT"],mo=function(){try{return!0}catch{return!1}}(),Qr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},yn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},po={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Of={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Ef=/fa[srltdbk\-\ ]/,ho="fa-layers-text",Pf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,If={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},go=[1,2,3,4,5,6,7,8,9,10],Tf=go.concat([11,12,13,14,15,16,17,18,19,20]),Sf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nf=[].concat(Fn(Object.keys(yn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(go.map(function(e){return"".concat(e,"x")})).concat(Tf.map(function(e){return"w-".concat(e)})),vo=Xe.FontAwesomeConfig||{};function Mf(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ff(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Lf=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Lf.forEach(function(e){var t=Vr(e,2),n=t[0],r=t[1],a=Ff(Mf(n));a!=null&&(vo[r]=a)})}var Rf={familyPrefix:co,styleDefault:"solid",replacementClass:uo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Lt=A(A({},Rf),vo);Lt.autoReplaceSvg||(Lt.observeMutations=!1);var T={};Object.keys(Lt).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Lt[e]=n,fn.forEach(function(r){return r(T)})},get:function(){return Lt[e]}})});Xe.FontAwesomeConfig=T;var fn=[];function $f(e){return fn.push(e),function(){fn.splice(fn.indexOf(e),1)}}var Be=gr,Ee={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jf(e){if(!(!e||!ze)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var zf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ut(){for(var e=12,t="";e-- >0;)t+=zf[Math.random()*62|0];return t}function wt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ea(e){return e.classList?wt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function bo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Df(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(bo(e[n]),'" ')},"").trim()}function Ln(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ta(e){return e.size!==Ee.size||e.x!==Ee.x||e.y!==Ee.y||e.rotate!==Ee.rotate||e.flipX||e.flipY}function Hf(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Bf(e){var t=e.transform,n=e.width,r=n===void 0?gr:n,a=e.height,i=a===void 0?gr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&fo?l+="translate(".concat(t.x/Be-r/2,"em, ").concat(t.y/Be-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Be,"em), calc(-50% + ").concat(t.y/Be,"em)) "):l+="translate(".concat(t.x/Be,"em, ").concat(t.y/Be,"em) "),l+="scale(".concat(t.size/Be*(t.flipX?-1:1),", ").concat(t.size/Be*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Uf=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function yo(){var e=co,t=uo,n=T.familyPrefix,r=T.replacementClass,a=Uf;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Va=!1;function Jn(){T.autoAddCss&&!Va&&(jf(yo()),Va=!0)}var Yf={mixout:function(){return{dom:{css:yo,insertCss:Jn}}},hooks:function(){return{beforeDOMElementCreation:function(){Jn()},beforeI2svg:function(){Jn()}}}},Re=Xe||{};Re[Le]||(Re[Le]={});Re[Le].styles||(Re[Le].styles={});Re[Le].hooks||(Re[Le].hooks={});Re[Le].shims||(Re[Le].shims=[]);var ye=Re[Le],xo=[],Wf=function e(){X.removeEventListener("DOMContentLoaded",e),xn=1,xo.map(function(t){return t()})},xn=!1;ze&&(xn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),xn||X.addEventListener("DOMContentLoaded",Wf));function Kf(e){!ze||(xn?setTimeout(e,0):xo.push(e))}function qt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?bo(e):"<".concat(t," ").concat(Df(r),">").concat(i.map(qt).join(""),"</").concat(t,">")}function Ja(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var qf=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Gn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?qf(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Xf(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function br(e){var t=Xf(e);return t.length===1?t[0].toString(16):null}function Vf(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ga(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function yr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ga(t);typeof ye.hooks.addPack=="function"&&!a?ye.hooks.addPack(e,Ga(t)):ye.styles[e]=A(A({},ye.styles[e]||{}),i),e==="fas"&&yr("fa",t)}var Rt=ye.styles,Jf=ye.shims,Gf=Object.values(po),na=null,_o={},wo={},ko={},Ao={},Co={},Zf=Object.keys(Qr);function Qf(e){return~Nf.indexOf(e)}function ec(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Qf(a)?a:null}var Oo=function(){var t=function(i){return Gn(Rt,function(o,s,l){return o[l]=Gn(s,i,{}),o},{})};_o=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),wo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Co=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Rt||T.autoFetchSvg,r=Gn(Jf,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ko=r.names,Ao=r.unicodes,na=Rn(T.styleDefault)};$f(function(e){na=Rn(e.styleDefault)});Oo();function ra(e,t){return(_o[e]||{})[t]}function tc(e,t){return(wo[e]||{})[t]}function dt(e,t){return(Co[e]||{})[t]}function Eo(e){return ko[e]||{prefix:null,iconName:null}}function nc(e){var t=Ao[e],n=ra("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return na}var aa=function(){return{prefix:null,iconName:null,rest:[]}};function Rn(e){var t=Qr[e],n=yn[e]||yn[t],r=e in ye.styles?e:null;return n||r||null}function $n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=ec(T.familyPrefix,s);if(Rt[s]?(s=Gf.includes(s)?Of[s]:s,a=s,o.prefix=s):Zf.indexOf(s)>-1?(a=s,o.prefix=Rn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Eo(o.iconName):{},d=dt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Rt.far&&Rt.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},aa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ve()||"fas"),i}var rc=function(){function e(){mf(this,e),this.definitions={}}return pf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),yr(s,o[s]);var l=po[s];l&&yr(l,o[s]),Oo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),Za=[],mt={},gt={},ac=Object.keys(gt);function ic(e,t){var n=t.mixoutsTo;return Za=e,mt={},Object.keys(gt).forEach(function(r){ac.indexOf(r)===-1&&delete gt[r]}),Za.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),bn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){mt[o]||(mt[o]=[]),mt[o].push(i[o])})}r.provides&&r.provides(gt)}),n}function xr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=mt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function at(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=mt[e]||[];a.forEach(function(i){i.apply(null,n)})}function $e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return gt[e]?gt[e].apply(null,t):void 0}function _r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ve();if(!!t)return t=dt(n,t)||t,Ja(Po.definitions,n,t)||Ja(ye.styles,n,t)}var Po=new rc,oc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,at("noAuto")},sc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ze?(at("beforeI2svg",t),$e("pseudoElements2svg",t),$e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Kf(function(){fc({autoReplaceSvgRoot:n}),at("watch",t)})}},lc={icon:function(t){if(t===null)return null;if(bn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Rn(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(Ef))){var a=$n(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ve(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ve();return{prefix:i,iconName:dt(i,t)||t}}}},me={noAuto:oc,config:T,dom:sc,parse:lc,library:Po,findIconDefinition:_r,toHtml:qt},fc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ye.styles).length>0||T.autoFetchSvg)&&ze&&T.autoReplaceSvg&&me.dom.i2svg({node:r})};function jn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return qt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ze){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function cc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ta(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Ln(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function uc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function ia(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,C=b===void 0?!1:b,F=r.found?r:n,$=F.width,S=F.height,y=a==="fak",O=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(ie){return m.classes.indexOf(ie)===-1}).filter(function(ie){return ie!==""||!!ie}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat($," ").concat(S)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat($/S*16*.0625,"em")}:{};C&&(N.attributes[rt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Ut())},children:[l]}),delete N.attributes.title);var Y=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},j),m.styles)}),ne=r.found&&n.found?$e("generateAbstractMask",Y)||{children:[],attributes:{}}:$e("generateAbstractIcon",Y)||{children:[],attributes:{}},fe=ne.children,_e=ne.attributes;return Y.children=fe,Y.attributes=_e,s?uc(Y):cc(Y)}function Qa(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[rt]="");var d=A({},o.styles);ta(a)&&(d.transform=Bf({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Ln(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function dc(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ln(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zn=ye.styles;function wr(e){var t=e[0],n=e[1],r=e.slice(4),a=Vr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var mc={found:!1,width:512,height:512};function pc(e,t){!mo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function kr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Ve()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var i=Eo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Zn[t]&&Zn[t][e]){var o=Zn[t][e];return r(wr(o))}pc(e,t),r(A(A({},mc),{},{icon:T.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}}))})}var ei=function(){},Ar=T.measurePerformance&&tn&&tn.mark&&tn.measure?tn:{mark:ei,measure:ei},Tt='FA "6.1.1"',hc=function(t){return Ar.mark("".concat(Tt," ").concat(t," begins")),function(){return Io(t)}},Io=function(t){Ar.mark("".concat(Tt," ").concat(t," ends")),Ar.measure("".concat(Tt," ").concat(t),"".concat(Tt," ").concat(t," begins"),"".concat(Tt," ").concat(t," ends"))},oa={begin:hc,end:Io},cn=function(){};function ti(e){var t=e.getAttribute?e.getAttribute(rt):null;return typeof t=="string"}function gc(e){var t=e.getAttribute?e.getAttribute(Gr):null,n=e.getAttribute?e.getAttribute(Zr):null;return t&&n}function vc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function bc(){if(T.autoReplaceSvg===!0)return un.replace;var e=un[T.autoReplaceSvg];return e||un.replace}function yc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function xc(e){return X.createElement(e)}function To(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?yc:xc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(To(o,{ceFn:r}))}),a}function _c(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(To(a),n)}),n.getAttribute(rt)===null&&T.keepOriginalSource){var r=X.createComment(_c(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ea(n).indexOf(T.replacementClass))return un.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return qt(s)}).join(`
`);n.setAttribute(rt,""),n.innerHTML=o}};function ni(e){e()}function So(e,t){var n=typeof t=="function"?t:cn;if(e.length===0)n();else{var r=ni;T.mutateApproach===Af&&(r=Xe.requestAnimationFrame||ni),r(function(){var a=bc(),i=oa.begin("mutate");e.map(a),i(),n()})}}var sa=!1;function No(){sa=!0}function Cr(){sa=!1}var _n=null;function ri(e){if(!!qa&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?cn:t,r=e.nodeCallback,a=r===void 0?cn:r,i=e.pseudoElementsCallback,o=i===void 0?cn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;_n=new qa(function(u){if(!sa){var d=Ve();wt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ti(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ti(m.target)&&~Sf.indexOf(m.attributeName))if(m.attributeName==="class"&&gc(m.target)){var b=$n(ea(m.target)),C=b.prefix,F=b.iconName;m.target.setAttribute(Gr,C||d),F&&m.target.setAttribute(Zr,F)}else vc(m.target)&&a(m.target)})}}),ze&&_n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wc(){!_n||_n.disconnect()}function kc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ac(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=$n(ea(e));return a.prefix||(a.prefix=Ve()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=tc(a.prefix,e.innerText)||ra(a.prefix,br(e.innerText))),a}function Cc(e){var t=wt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Ut()):(t["aria-hidden"]="true",t.focusable="false")),t}function Oc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ee,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ac(e),r=n.iconName,a=n.prefix,i=n.rest,o=Cc(e),s=xr("parseNodeAttributes",{},e),l=t.styleParser?kc(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ee,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ec=ye.styles;function Mo(e){var t=T.autoReplaceSvg==="nest"?ai(e,{styleParser:!1}):ai(e);return~t.extra.classes.indexOf(ho)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ze)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Xa,"-").concat(m))},a=function(m){return n.remove("".concat(Xa,"-").concat(m))},i=T.autoFetchSvg?Object.keys(Qr):Object.keys(Ec),o=[".".concat(ho,":not([").concat(rt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=wt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=oa.begin("onTree"),u=s.reduce(function(d,m){try{var b=Mo(m);b&&d.push(b)}catch(C){mo||C.name==="MissingIcon"&&console.error(C)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){So(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Pc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Mo(e).then(function(n){n&&So([n],t)})}function Ic(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_r(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:_r(a||{})),e(r,A(A({},n),{},{mask:a}))}}var Tc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ee:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,C=n.titleId,F=C===void 0?null:C,$=n.classes,S=$===void 0?[]:$,y=n.attributes,O=y===void 0?{}:y,N=n.styles,j=N===void 0?{}:N;if(!!t){var Y=t.prefix,ne=t.iconName,fe=t.icon;return jn(A({type:"icon"},t),function(){return at("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(b?O["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(F||Ut()):(O["aria-hidden"]="true",O.focusable="false")),ia({icons:{main:wr(fe),mask:l?wr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ne,transform:A(A({},Ee),a),symbol:o,title:b,maskId:d,titleId:F,extra:{attributes:O,styles:j,classes:S}})})}},Sc={mixout:function(){return{icon:Ic(Tc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ii,n.nodeCallback=Pc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ii(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(C,F){Promise.all([kr(a,s),d.iconName?kr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function($){var S=Vr($,2),y=S[0],O=S[1];C([n,ia({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ln(s);l.length>0&&(a.style=l);var u;return ta(o)&&(u=$e("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Nc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return jn({type:"layer"},function(){at("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(Fn(i)).join(" ")},children:o}]})}}}},Mc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return jn({type:"counter",content:n},function(){return at("beforeDOMElementCreation",{content:n,params:r}),dc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(Fn(s))}})})}}}},Fc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ee:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,C=b===void 0?{}:b;return jn({type:"text",content:n},function(){return at("beforeDOMElementCreation",{content:n,params:r}),Qa({content:n,transform:A(A({},Ee),i),title:s,extra:{attributes:m,styles:C,classes:["".concat(T.familyPrefix,"-layers-text")].concat(Fn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(fo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qa({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Lc=new RegExp('"',"ug"),oi=[1105920,1112319];function Rc(e){var t=e.replace(Lc,""),n=Vf(t,0),r=n>=oi[0]&&n<=oi[1],a=t.length===2?t[0]===t[1]:!1;return{value:br(a?t[0]:t),isSecondary:r||a}}function si(e,t){var n="".concat(kf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=wt(e.children),o=i.filter(function(ne){return ne.getAttribute(vr)===t})[0],s=Xe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Pf),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?yn[l[2].toLowerCase()]:If[u],C=Rc(m),F=C.value,$=C.isSecondary,S=l[0].startsWith("FontAwesome"),y=ra(b,F),O=y;if(S){var N=nc(F);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!$&&(!o||o.getAttribute(Gr)!==b||o.getAttribute(Zr)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var j=Oc(),Y=j.extra;Y.attributes[vr]=t,kr(y,b).then(function(ne){var fe=ia(A(A({},j),{},{icons:{main:ne,mask:aa()},prefix:b,iconName:O,extra:Y,watchable:!0})),_e=X.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=fe.map(function(ie){return qt(ie)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function $c(e){return Promise.all([si(e,"::before"),si(e,"::after")])}function jc(e){return e.parentNode!==document.head&&!~Cf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function li(e){if(!!ze)return new Promise(function(t,n){var r=wt(e.querySelectorAll("*")).filter(jc).map($c),a=oa.begin("searchPseudoElements");No(),Promise.all(r).then(function(){a(),Cr(),t()}).catch(function(){a(),Cr(),n()})})}var zc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=li,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&li(a)}}},fi=!1,Dc={mixout:function(){return{dom:{unwatch:function(){No(),fi=!0}}}},hooks:function(){return{bootstrap:function(){ri(xr("mutationObserverCallbacks",{}))},noAuto:function(){wc()},watch:function(n){var r=n.observeMutationsRoot;fi?Cr():ri(xr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ci=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Hc={mixout:function(){return{parse:{transform:function(n){return ci(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ci(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},C={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},C.outer),children:[{tag:"g",attributes:A({},C.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),C.path)}]}]}}}},Qn={x:0,y:0,width:"100%",height:"100%"};function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bc(e){return e.tag==="g"?e.children:[e]}var Uc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?$n(a.split(" ").map(function(o){return o.trim()})):aa();return i.prefix||(i.prefix=Ve()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,C=Hf({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:A(A({},Qn),{},{fill:"white"})},$=d.children?{children:d.children.map(ui)}:{},S={tag:"g",attributes:A({},C.inner),children:[ui(A({tag:d.tag,attributes:A(A({},d.attributes),C.path)},$))]},y={tag:"g",attributes:A({},C.outer),children:[S]},O="mask-".concat(s||Ut()),N="clip-".concat(s||Ut()),j={tag:"mask",attributes:A(A({},Qn),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Bc(b)},j]};return r.push(Y,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(O,")")},Qn)}),{children:r,attributes:a}}}},Yc={provides:function(t){var n=!1;Xe.matchMedia&&(n=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Wc={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Kc=[Yf,Sc,Nc,Mc,Fc,zc,Dc,Hc,Uc,Yc,Wc];ic(Kc,{mixoutsTo:me});me.noAuto;var Fo=me.config,qc=me.library;me.dom;var wn=me.parse;me.findIconDefinition;me.toHtml;var Xc=me.icon;me.layer;var Vc=me.text;me.counter;function di(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?di(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):di(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kn(e){return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kn(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Gc(e,t){if(e==null)return{};var n=Jc(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Or(e){return Zc(e)||Qc(e)||eu(e)||tu()}function Zc(e){if(Array.isArray(e))return Er(e)}function Qc(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eu(e,t){if(!!e){if(typeof e=="string")return Er(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Er(e,t)}}function Er(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Lo={exports:{}};(function(e){(function(t){var n=function(y,O,N){if(!u(O)||m(O)||b(O)||C(O)||l(O))return O;var j,Y=0,ne=0;if(d(O))for(j=[],ne=O.length;Y<ne;Y++)j.push(n(y,O[Y],N));else{j={};for(var fe in O)Object.prototype.hasOwnProperty.call(O,fe)&&(j[y(fe,N)]=n(y,O[fe],N))}return j},r=function(y,O){O=O||{};var N=O.separator||"_",j=O.split||/(?=[A-Z])/;return y.split(j).join(N)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},C=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},$=function(y,O){var N=O&&"process"in O?O.process:O;return typeof N!="function"?y:function(j,Y){return N(j,y,Y)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n($(a,O),y)},decamelizeKeys:function(y,O){return n($(o,O),y,O)},pascalizeKeys:function(y,O){return n($(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(nu)})(Lo);var ru=Lo.exports,au=["class","style"];function iu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ru.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ou(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function la(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return la(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=ou(d);break;case"style":l.style=iu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Gc(n,au);return ro(e.tag,ve(ve(ve({},t),{},{class:a.class,style:ve(ve({},a.style),o)},a.attrs),s),r)}var Ro=!1;try{Ro=!0}catch{}function su(){if(!Ro&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function $t(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}function lu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},se(t,"fa-".concat(e.size),e.size!==null),se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),se(t,"fa-pull-".concat(e.pull),e.pull!==null),se(t,"fa-swap-opacity",e.swapOpacity),se(t,"fa-bounce",e.bounce),se(t,"fa-shake",e.shake),se(t,"fa-beat",e.beat),se(t,"fa-fade",e.fade),se(t,"fa-beat-fade",e.beatFade),se(t,"fa-flash",e.flash),se(t,"fa-spin-pulse",e.spinPulse),se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function mi(e){if(e&&kn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(wn.icon)return wn.icon(e);if(e===null)return null;if(kn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var fu=Yt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=pe(function(){return mi(t.icon)}),i=pe(function(){return $t("classes",lu(t))}),o=pe(function(){return $t("transform",typeof t.transform=="string"?wn.transform(t.transform):t.transform)}),s=pe(function(){return $t("mask",mi(t.mask))}),l=pe(function(){return Xc(a.value,ve(ve(ve(ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});an(l,function(d){if(!d)return su("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=pe(function(){return l.value?la(l.value.abstract[0],{},r):null});return function(){return u.value}}});Yt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Fo.familyPrefix,i=pe(function(){return["".concat(a,"-layers")].concat(Or(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ro("div",{class:i.value},r.default?r.default():[])}}});Yt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Fo.familyPrefix,i=pe(function(){return $t("classes",[].concat(Or(t.counter?["".concat(a,"-layers-counter")]:[]),Or(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=pe(function(){return $t("transform",typeof t.transform=="string"?wn.transform(t.transform):t.transform)}),s=pe(function(){var u=Vc(t.value.toString(),ve(ve({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=pe(function(){return la(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var cu={prefix:"fas",iconName:"feather-pointed",icon:[512,512,["feather-alt"],"f56b","M467.1 241.1L351.1 288h94.34c-7.711 14.85-16.29 29.28-25.87 43.01l-132.5 52.99h85.65c-59.34 52.71-144.1 80.34-264.5 52.82l-68.13 68.13c-9.38 9.38-24.56 9.374-33.94 0c-9.375-9.375-9.375-24.56 0-33.94l253.4-253.4c4.846-6.275 4.643-15.19-1.113-20.95c-6.25-6.25-16.38-6.25-22.62 0l-168.6 168.6C24.56 58 366.9 8.118 478.9 .0846c18.87-1.354 34.41 14.19 33.05 33.05C508.7 78.53 498.5 161.8 467.1 241.1z"]},uu=cu,du={prefix:"fas",iconName:"house",icon:[576,512,[63498,63500,127968,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"]},mu=du,pu={prefix:"fas",iconName:"star",icon:[576,512,[61446,11088],"f005","M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"]},hu={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"]},zn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const gu={},vu={id:"header",class:"container-fluid bg-blue p-1"},bu={class:"row mx-0 align-items-center"},yu={class:"col-4 px-0"},xu={class:"btn header bg-trans bg-trans-hover p-1",href:"#/home"},_u={class:"col-4"},wu={class:"row justify-content-center"},ku={class:"btn header text-trans text-trans-hover d-flex p-0",href:"#/home",style:{"font-family":"'Pacifico', cursive"}},Au=J("h1",{class:"header ml-1 my-0"},"ReacTrello",-1);function Cu(e,t){const n=sn("font-awesome-icon");return Wt(),Kt("div",vu,[J("div",bu,[J("div",yu,[J("a",xu,[G(n,{class:"text-light header-icon",icon:"fa-home"})])]),J("div",_u,[J("div",wu,[J("a",ku,[G(n,{icon:"fa-feather-alt"}),Au])])])])])}var Ou=zn(gu,[["render",Cu]]);const Eu={},Pu={id:"footer",class:"container-fluid bg-blue"},Iu=J("div",{class:"row justify-content-end mr-3"},[J("h6",null,"Lorem Ipsum")],-1),Tu=[Iu];function Su(e,t){return Wt(),Kt("footer",Pu,Tu)}var Nu=zn(Eu,[["render",Su]]);const Mu={},Fu={type:"button",class:"btn bg-blue bg-blue-hover text-left text-light list-add"};function Lu(e,t){return Wt(),Kt("button",Fu," + Add a list ")}var Ru=zn(Mu,[["render",Lu]]);const $u=Yt({name:"Board",components:{ListAddButton:Ru}}),ju={class:"d-flex flex-column w-100 h-100 position-absolute pb-4 px-2"},zu={class:"row mx-0 mb-3 align-items-center"},Du=J("div",{class:"col-auto"},[J("h3",{class:"board-header-title"},"Test Board")],-1),Hu={class:"col-auto px-0"},Bu={type:"button",class:"btn bg-trans-dark-hover board-header-icon"},Uu={class:"col-autol ml-auto"},Yu={class:"btn bg-trans-dark-hover board-header-icon",href:"#/home"},Wu={class:"d-flex flex-row h-100"},Ku={class:"col-auto ml-0 mr-2 px-0",key:"add"};function qu(e,t,n,r,a,i){const o=sn("font-awesome-icon"),s=sn("ListAddButton"),l=sn("ScrollX");return Wt(),Kt("div",ju,[J("div",zu,[Du,J("div",Hu,[J("button",Bu,[G(o,{icon:"fa-star"})])]),J("div",Uu,[J("a",Yu,[G(o,{icon:"fa-trash"})])])]),G(l,null,{default:ji(()=>[J("div",Wu,[J("div",Ku,[G(s)])])]),_:1})])}var Xu=zn($u,[["render",qu]]);const Vu={id:"app",class:"d-flex flex-column text-light"},Ju={id:"content",class:"container-fluid py-2 px-0 bg-light-blue"},Gu=Yt({name:"App",setup(e){return(t,n)=>(Wt(),Kt("div",Vu,[G(rn(Ou)),J("div",Ju,[G(rn(Xu))]),G(rn(Nu))]))}});qc.add(mu,uu,hu,pu);uf(Gu).component("font-awesome-icon",fu).mount("#root");
