/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=window,_t=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),bt=new WeakMap;let kt=class{constructor(t,i,s){if(this._$cssResult$=!0,s!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(_t&&t===void 0){const s=i!==void 0&&i.length===1;s&&(t=bt.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&bt.set(i,t))}return t}toString(){return this.cssText}};const re=e=>new kt(typeof e=="string"?e:e+"",void 0,gt),ui=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((s,n,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1],e[0]);return new kt(i,e,gt)},oe=(e,t)=>{_t?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{const s=document.createElement("style"),n=Y.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=i.cssText,e.appendChild(s)})},wt=_t?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return re(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt;const Q=window,Tt=Q.trustedTypes,ae=Tt?Tt.emptyScript:"",Ct=Q.reactiveElementPolyfillSupport,pt={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},zt=(e,t)=>t!==e&&(t==t||e==e),ot={attribute:!0,type:String,converter:pt,reflect:!1,hasChanged:zt},ft="finalized";let j=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,s)=>{const n=this._$Ep(s,i);n!==void 0&&(this._$Ev.set(n,s),t.push(n))}),t}static createProperty(t,i=ot){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,i);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(n){const r=this[t];this[i]=n,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ot}static finalize(){if(this.hasOwnProperty(ft))return!1;this[ft]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,s=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const n of s)this.createProperty(n,i[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)i.unshift(wt(n))}else t!==void 0&&i.push(wt(t));return i}static _$Ep(t,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,s;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return oe(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostConnected)===null||s===void 0?void 0:s.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostDisconnected)===null||s===void 0?void 0:s.call(i)})}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=ot){var n;const r=this.constructor._$Ep(t,s);if(r!==void 0&&s.reflect===!0){const o=(((n=s.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?s.converter:pt).toAttribute(i,s.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,i){var s;const n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:pt;this._$El=r,this[r]=l.fromAttribute(i,o.type),this._$El=null}}requestUpdate(t,i,s){let n=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||zt)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(s)):this._$Ek()}catch(n){throw i=!1,this._$Ek(),n}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(s=>{var n;return(n=s.hostUpdated)===null||n===void 0?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,s)=>this._$EO(s,this[s],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};j[ft]=!0,j.elementProperties=new Map,j.elementStyles=[],j.shadowRootOptions={mode:"open"},Ct?.({ReactiveElement:j}),((rt=Q.reactiveElementVersions)!==null&&rt!==void 0?rt:Q.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at;const tt=window,M=tt.trustedTypes,Pt=M?M.createPolicy("lit-html",{createHTML:e=>e}):void 0,vt="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,Vt="?"+S,le=`<${Vt}>`,P=document,V=()=>P.createComment(""),B=e=>e===null||typeof e!="object"&&typeof e!="function",Bt=Array.isArray,ce=e=>Bt(e)||typeof e?.[Symbol.iterator]=="function",lt=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xt=/-->/g,Ot=/>/g,T=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,Mt=/"/g,Ft=/^(?:script|style|textarea|title)$/i,qt=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),pi=qt(1),fi=qt(2),R=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Rt=new WeakMap,C=P.createTreeWalker(P,129,null,!1);function Wt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pt!==void 0?Pt.createHTML(t):t}const he=(e,t)=>{const i=e.length-1,s=[];let n,r=t===2?"<svg>":"",o=L;for(let l=0;l<i;l++){const a=e[l];let c,u,d=-1,h=0;for(;h<a.length&&(o.lastIndex=h,u=o.exec(a),u!==null);)h=o.lastIndex,o===L?u[1]==="!--"?o=xt:u[1]!==void 0?o=Ot:u[2]!==void 0?(Ft.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=T):u[3]!==void 0&&(o=T):o===T?u[0]===">"?(o=n??L,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?T:u[3]==='"'?Mt:Ut):o===Mt||o===Ut?o=T:o===xt||o===Ot?o=L:(o=T,n=void 0);const $=o===T&&e[l+1].startsWith("/>")?" ":"";r+=o===L?a+le:d>=0?(s.push(c),a.slice(0,d)+vt+a.slice(d)+S+$):a+S+(d===-2?(s.push(void 0),l):$)}return[Wt(e,r+(e[i]||"<?>")+(t===2?"</svg>":"")),s]};class F{constructor({strings:t,_$litType$:i},s){let n;this.parts=[];let r=0,o=0;const l=t.length-1,a=this.parts,[c,u]=he(t,i);if(this.el=F.createElement(c,s),C.currentNode=this.el.content,i===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(n=C.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const h of n.getAttributeNames())if(h.endsWith(vt)||h.startsWith(S)){const $=u[o++];if(d.push(h),$!==void 0){const m=n.getAttribute($.toLowerCase()+vt).split(S),_=/([.?@])?(.*)/.exec($);a.push({type:1,index:r,name:_[2],strings:m,ctor:_[1]==="."?de:_[1]==="?"?fe:_[1]==="@"?ve:nt})}else a.push({type:6,index:r})}for(const h of d)n.removeAttribute(h)}if(Ft.test(n.tagName)){const d=n.textContent.split(S),h=d.length-1;if(h>0){n.textContent=M?M.emptyScript:"";for(let $=0;$<h;$++)n.append(d[$],V()),C.nextNode(),a.push({type:2,index:++r});n.append(d[h],V())}}}else if(n.nodeType===8)if(n.data===Vt)a.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(S,d+1))!==-1;)a.push({type:7,index:r}),d+=S.length-1}r++}}static createElement(t,i){const s=P.createElement("template");return s.innerHTML=t,s}}function N(e,t,i=e,s){var n,r,o,l;if(t===R)return t;let a=s!==void 0?(n=i._$Co)===null||n===void 0?void 0:n[s]:i._$Cl;const c=B(t)?void 0:t._$litDirective$;return a?.constructor!==c&&((r=a?._$AO)===null||r===void 0||r.call(a,!1),c===void 0?a=void 0:(a=new c(e),a._$AT(e,i,s)),s!==void 0?((o=(l=i)._$Co)!==null&&o!==void 0?o:l._$Co=[])[s]=a:i._$Cl=a),a!==void 0&&(t=N(e,a._$AS(e,t.values),a,s)),t}class ue{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:n}=this._$AD,r=((i=t?.creationScope)!==null&&i!==void 0?i:P).importNode(s,!0);C.currentNode=r;let o=C.nextNode(),l=0,a=0,c=n[0];for(;c!==void 0;){if(l===c.index){let u;c.type===2?u=new W(o,o.nextSibling,this,t):c.type===1?u=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(u=new $e(o,this,t)),this._$AV.push(u),c=n[++a]}l!==c?.index&&(o=C.nextNode(),l++)}return C.currentNode=P,r}v(t){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class W{constructor(t,i,s,n){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=n,this._$Cp=(r=n?.isConnected)===null||r===void 0||r}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),B(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ce(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&B(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=F.createElement(Wt(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===r)this._$AH.v(s);else{const o=new ue(r,this),l=o.u(this.options);o.v(s),this.$(l),this._$AH=o}}_$AC(t){let i=Rt.get(t.strings);return i===void 0&&Rt.set(t.strings,i=new F(t)),i}T(t){Bt(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const r of t)n===i.length?i.push(s=new W(this.k(V()),this.k(V()),this,this.options)):s=i[n],s._$AI(r),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,i);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var i;this._$AM===void 0&&(this._$Cp=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}}class nt{constructor(t,i,s,n,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,n){const r=this.strings;let o=!1;if(r===void 0)t=N(this,t,i,0),o=!B(t)||t!==this._$AH&&t!==R,o&&(this._$AH=t);else{const l=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=N(this,l[s+a],i,a),c===R&&(c=this._$AH[a]),o||(o=!B(c)||c!==this._$AH[a]),c===v?t=v:t!==v&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}o&&!n&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class de extends nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}const pe=M?M.emptyScript:"";class fe extends nt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,pe):this.element.removeAttribute(this.name)}}class ve extends nt{constructor(t,i,s,n,r){super(t,i,s,n,r),this.type=5}_$AI(t,i=this){var s;if((t=(s=N(this,t,i,0))!==null&&s!==void 0?s:v)===R)return;const n=this._$AH,r=t===v&&n!==v||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==v&&(n===v||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;typeof this._$AH=="function"?this._$AH.call((s=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class $e{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Nt=tt.litHtmlPolyfillSupport;Nt?.(F,W),((at=tt.litHtmlVersions)!==null&&at!==void 0?at:tt.litHtmlVersions=[]).push("2.8.0");const vi=(e,t,i)=>{var s,n;const r=(s=i?.renderBefore)!==null&&s!==void 0?s:t;let o=r._$litPart$;if(o===void 0){const l=(n=i?.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new W(t.insertBefore(V(),l),l,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=e=>t=>typeof t=="function"?((i,s)=>(customElements.define(i,s),s))(e,t):((i,s)=>{const{kind:n,elements:r}=s;return{kind:n,elements:r,finisher(o){customElements.define(i,o)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},ye=(e,t,i)=>{t.constructor.createProperty(i,e)};function _e(e){return(t,i)=>i!==void 0?ye(e,t,i):me(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mi(e){return _e({...e,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ct;((ct=window.HTMLSlotElement)===null||ct===void 0?void 0:ct.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ae=e=>(...t)=>({_$litDirective$:e,values:t});class Ee{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=Ae(class extends Ee{constructor(e){var t;if(super(e),e.type!==ge.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,s;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((i=this.nt)===null||i===void 0)&&i.has(r))&&this.it.add(r);return this.render(t)}const n=e.element.classList;this.it.forEach(r=>{r in t||(n.remove(r),this.it.delete(r))});for(const r in t){const o=!!t[r];o===this.it.has(r)||!((s=this.nt)===null||s===void 0)&&s.has(r)||(o?(n.add(r),this.it.add(r)):(n.remove(r),this.it.delete(r)))}return R}});function Se(e,t){e.indexOf(t)===-1&&e.push(t)}const Kt=(e,t,i)=>Math.min(Math.max(i,e),t),y={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},et=e=>typeof e=="number",U=e=>Array.isArray(e)&&!et(e[0]),be=(e,t,i)=>{const s=t-e;return((i-e)%s+s)%s+e};function we(e,t){return U(e)?e[be(0,e.length,t)]:e}const Zt=(e,t,i)=>-i*e+i*t+e,Jt=()=>{},b=e=>e,At=(e,t,i)=>t-e===0?1:(i-e)/(t-e);function Xt(e,t){const i=e[e.length-1];for(let s=1;s<=t;s++){const n=At(0,t,s);e.push(Zt(i,1,n))}}function Te(e){const t=[0];return Xt(t,e-1),t}function Ce(e,t=Te(e.length),i=b){const s=e.length,n=s-t.length;return n>0&&Xt(t,n),r=>{let o=0;for(;o<s-2&&!(r<t[o+1]);o++);let l=Kt(0,1,At(t[o],t[o+1],r));return l=we(i,o)(l),Zt(e[o],e[o+1],l)}}const Gt=e=>Array.isArray(e)&&et(e[0]),$t=e=>typeof e=="object"&&!!e.createAnimation,H=e=>typeof e=="function",Pe=e=>typeof e=="string",z={ms:e=>e*1e3,s:e=>e/1e3},Yt=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e,xe=1e-7,Oe=12;function Ue(e,t,i,s,n){let r,o,l=0;do o=t+(i-t)/2,r=Yt(o,s,n)-e,r>0?i=o:t=o;while(Math.abs(r)>xe&&++l<Oe);return o}function k(e,t,i,s){if(e===t&&i===s)return b;const n=r=>Ue(r,0,1,e,i);return r=>r===0||r===1?r:Yt(n(r),t,s)}const Me=(e,t="end")=>i=>{i=t==="end"?Math.min(i,.999):Math.max(i,.001);const s=i*e,n=t==="end"?Math.floor(s):Math.ceil(s);return Kt(0,1,n/e)},Re={ease:k(.25,.1,.25,1),"ease-in":k(.42,0,1,1),"ease-in-out":k(.42,0,.58,1),"ease-out":k(0,0,.58,1)},Ne=/\((.*?)\)/;function Ht(e){if(H(e))return e;if(Gt(e))return k(...e);const t=Re[e];if(t)return t;if(e.startsWith("steps")){const i=Ne.exec(e);if(i){const s=i[1].split(",");return Me(parseFloat(s[0]),s[1].trim())}}return b}class Qt{constructor(t,i=[0,1],{easing:s,duration:n=y.duration,delay:r=y.delay,endDelay:o=y.endDelay,repeat:l=y.repeat,offset:a,direction:c="normal",autoplay:u=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=b,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,$)=>{this.resolve=h,this.reject=$}),s=s||y.easing,$t(s)){const h=s.createAnimation(i);s=h.easing,i=h.keyframes||i,n=h.duration||n}this.repeat=l,this.easing=U(s)?b:Ht(s),this.updateDuration(n);const d=Ce(i,a,U(s)?s.map(Ht):b);this.tick=h=>{var $;r=r;let m=0;this.pauseTime!==void 0?m=this.pauseTime:m=(h-this.startTime)*this.rate,this.t=m,m/=1e3,m=Math.max(m-r,0),this.playState==="finished"&&this.pauseTime===void 0&&(m=this.totalDuration);const _=m/this.duration;let K=Math.floor(_),A=_%1;!A&&_>=1&&(A=1),A===1&&K--;const Z=K%2;(c==="reverse"||c==="alternate"&&Z||c==="alternate-reverse"&&!Z)&&(A=1-A);const D=m>=this.totalDuration?1:Math.min(A,1),x=d(this.easing(D));t(x),this.pauseTime===void 0&&(this.playState==="finished"||m>=this.totalDuration+o)?(this.playState="finished",($=this.resolve)===null||$===void 0||$.call(this,x)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},u&&this.play()}play(){const t=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(t=this.reject)===null||t===void 0||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){this.pauseTime!==void 0||this.rate===0?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}class He{setAnimation(t){this.animation=t,t?.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const ht=new WeakMap;function te(e){return ht.has(e)||ht.set(e,{transforms:[],values:new Map}),ht.get(e)}function De(e,t){return e.has(t)||e.set(t,new He),e.get(t)}const Ie=["","X","Y","Z"],je=["translate","scale","rotate","skew"],it={x:"translateX",y:"translateY",z:"translateZ"},Dt={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:e=>e+"deg"},Le={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:e=>e+"px"},rotate:Dt,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:b},skew:Dt},q=new Map,Et=e=>`--motion-${e}`,st=["x","y","z"];je.forEach(e=>{Ie.forEach(t=>{st.push(e+t),q.set(Et(e+t),Le[e])})});const ke=(e,t)=>st.indexOf(e)-st.indexOf(t),ze=new Set(st),ee=e=>ze.has(e),Ve=(e,t)=>{it[t]&&(t=it[t]);const{transforms:i}=te(e);Se(i,t),e.style.transform=Be(i)},Be=e=>e.sort(ke).reduce(Fe,"").trim(),Fe=(e,t)=>`${e} ${t}(var(${Et(t)}))`,mt=e=>e.startsWith("--"),It=new Set;function qe(e){if(!It.has(e)){It.add(e);try{const{syntax:t,initialValue:i}=q.has(e)?q.get(e):{};CSS.registerProperty({name:e,inherits:!1,syntax:t,initialValue:i})}catch{}}}const ut=(e,t)=>document.createElement("div").animate(e,t),jt={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{ut({opacity:[1]})}catch{return!1}return!0},finished:()=>!!ut({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{ut({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},dt={},O={};for(const e in jt)O[e]=()=>(dt[e]===void 0&&(dt[e]=jt[e]()),dt[e]);const We=.015,Ke=(e,t)=>{let i="";const s=Math.round(t/We);for(let n=0;n<s;n++)i+=e(At(0,s-1,n))+", ";return i.substring(0,i.length-2)},Lt=(e,t)=>H(e)?O.linearEasing()?`linear(${Ke(e,t)})`:y.easing:Gt(e)?Ze(e):e,Ze=([e,t,i,s])=>`cubic-bezier(${e}, ${t}, ${i}, ${s})`;function Je(e,t){for(let i=0;i<e.length;i++)e[i]===null&&(e[i]=i?e[i-1]:t());return e}const Xe=e=>Array.isArray(e)?e:[e];function yt(e){return it[e]&&(e=it[e]),ee(e)?Et(e):e}const G={get:(e,t)=>{t=yt(t);let i=mt(t)?e.style.getPropertyValue(t):getComputedStyle(e)[t];if(!i&&i!==0){const s=q.get(t);s&&(i=s.initialValue)}return i},set:(e,t,i)=>{t=yt(t),mt(t)?e.style.setProperty(t,i):e.style[t]=i}};function ie(e,t=!0){if(!(!e||e.playState==="finished"))try{e.stop?e.stop():(t&&e.commitStyles(),e.cancel())}catch{}}function Ge(e,t){var i;let s=t?.toDefaultUnit||b;const n=e[e.length-1];if(Pe(n)){const r=((i=n.match(/(-?[\d.]+)([a-z%]*)/))===null||i===void 0?void 0:i[2])||"";r&&(s=o=>o+r)}return s}function Ye(){return window.__MOTION_DEV_TOOLS_RECORD}function Qe(e,t,i,s={},n){const r=Ye(),o=s.record!==!1&&r;let l,{duration:a=y.duration,delay:c=y.delay,endDelay:u=y.endDelay,repeat:d=y.repeat,easing:h=y.easing,persist:$=!1,direction:m,offset:_,allowWebkitAcceleration:K=!1,autoplay:A=!0}=s;const Z=te(e),D=ee(t);let x=O.waapi();D&&Ve(e,t);const g=yt(t),J=De(Z.values,g),E=q.get(g);return ie(J.animation,!($t(h)&&J.generator)&&s.record!==!1),()=>{const X=()=>{var p,I;return(I=(p=G.get(e,g))!==null&&p!==void 0?p:E?.initialValue)!==null&&I!==void 0?I:0};let f=Je(Xe(i),X);const St=Ge(f,E);if($t(h)){const p=h.createAnimation(f,t!=="opacity",X,g,J);h=p.easing,f=p.keyframes||f,a=p.duration||a}if(mt(g)&&(O.cssRegisterProperty()?qe(g):x=!1),D&&!O.linearEasing()&&(H(h)||U(h)&&h.some(H))&&(x=!1),x){E&&(f=f.map(w=>et(w)?E.toDefaultUnit(w):w)),f.length===1&&(!O.partialKeyframes()||o)&&f.unshift(X());const p={delay:z.ms(c),duration:z.ms(a),endDelay:z.ms(u),easing:U(h)?void 0:Lt(h,a),direction:m,iterations:d+1,fill:"both"};l=e.animate({[g]:f,offset:_,easing:U(h)?h.map(w=>Lt(w,a)):void 0},p),l.finished||(l.finished=new Promise((w,ne)=>{l.onfinish=w,l.oncancel=ne}));const I=f[f.length-1];l.finished.then(()=>{$||(G.set(e,g,I),l.cancel())}).catch(Jt),K||(l.playbackRate=1.000001)}else if(n&&D)f=f.map(p=>typeof p=="string"?parseFloat(p):p),f.length===1&&f.unshift(parseFloat(X())),l=new n(p=>{G.set(e,g,St?St(p):p)},f,Object.assign(Object.assign({},s),{duration:a,easing:h}));else{const p=f[f.length-1];G.set(e,g,E&&et(p)?E.toDefaultUnit(p):p)}return o&&r(e,t,f,{duration:a,delay:c,easing:h,repeat:d,offset:_},"motion-one"),J.setAnimation(l),l&&!A&&l.pause(),l}}const ti=(e,t)=>e[t]?Object.assign(Object.assign({},e),e[t]):Object.assign({},e);function ei(e,t){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const ii=e=>e(),se=(e,t,i=y.duration)=>new Proxy({animations:e.map(ii).filter(Boolean),duration:i,options:t},ni),si=e=>e.animations[0],ni={get:(e,t)=>{const i=si(e);switch(t){case"duration":return e.duration;case"currentTime":return z.s(i?.[t]||0);case"playbackRate":case"playState":return i?.[t];case"finished":return e.finished||(e.finished=Promise.all(e.animations.map(ri)).catch(Jt)),e.finished;case"stop":return()=>{e.animations.forEach(s=>ie(s))};case"forEachNative":return s=>{e.animations.forEach(n=>s(n,e))};default:return typeof i?.[t]>"u"?void 0:()=>e.animations.forEach(s=>s[t]())}},set:(e,t,i)=>{switch(t){case"currentTime":i=z.ms(i);case"playbackRate":for(let s=0;s<e.animations.length;s++)e.animations[s][t]=i;return!0}return!1}},ri=e=>e.finished;function oi(e,t,i){return H(e)?e(t,i):e}function ai(e){return function(i,s,n={}){i=ei(i);const r=i.length,o=[];for(let l=0;l<r;l++){const a=i[l];for(const c in s){const u=ti(n,c);u.delay=oi(u.delay,l,r);const d=Qe(a,c,s[c],u,e);o.push(d)}}return se(o,n,n.duration)}}const li=ai(Qt);function ci(e,t={}){return se([()=>{const i=new Qt(e,[0,1],t);return i.finished.catch(()=>{}),i}],t,t.duration)}function _i(e,t,i){return(H(e)?ci:li)(e,t,i)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=e=>e??v;export{vi as D,R as T,_i as a,fi as b,$i as e,ui as i,gi as l,_e as n,yi as o,mi as t,j as u,pi as x};
