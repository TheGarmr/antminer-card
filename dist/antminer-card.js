function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,f=m.trustedTypes,g=f?f.emptyScript:"",_=m.reactiveElementPolyfillSupport,b=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const o=this.constructor;if(!1===s&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??$)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,_?.({ReactiveElement:y}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,x=t=>t,S=A.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+E,U=`<${P}>`,N=document,O=()=>N.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,B="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,R=/>/g,z=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,D=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,Z=N.createTreeWalker(N,129);function J(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===H?"!--"===l[1]?r=I:void 0!==l[1]?r=R:void 0!==l[2]?(D.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=z):void 0!==l[3]&&(r=z):r===z?">"===l[0]?(r=n??H,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?z:'"'===l[3]?j:L):r===j||r===L?r=z:r===I||r===R?r=H:(r=z,n=void 0);const d=r===z&&t[e+1].startsWith("/>")?" ":"";o+=r===H?i+U:c>=0?(s.push(a),i.slice(0,c)+k+i.slice(c)+E+d):i+E+(-2===c?e:d)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=G.createElement(l,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=c[o++],i=s.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(D.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),Z.nextNode(),a.push({type:2,index:++n});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)a.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===F)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=M(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Q(t,n._$AS(t,e.values),n,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);Z.currentNode=s;let n=Z.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new nt(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=Z.nextNode(),o++)}return Z.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),M(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new G(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Y(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Q(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Q(this,s[i+r],e,r),a===F&&(a=this._$AH[r]),o||=!M(a)||a!==this._$AH[r],a===V?t=V:t!==V&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??V)===F)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(G,Y),(A.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Y(e.insertBefore(O(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const lt=rt.litElementPolyfillSupport;lt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:$},dt=(t=ht,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const ut="antminer-card-editor",mt="antminer-card";var ft;!function(t){t.hashrate="hashrate",t.ideal_hashrate="ideal_hashrate",t.temperature="temperature",t.miner_consumption="miner_consumption",t.power_limit="power_limit",t.efficiency="efficiency",t.active_preset_name="active_preset_name",t.cooling_mode="cooling_mode",t.active="active"}(ft||(ft={}));var gt={title:"Antminer Card",description:"A Home Assistant card for Antminer ASIC miners (hass-miner integration)",version:"Version"},_t={language:"Language",title:"Title",prefix:"Sensor prefix",minerName:"Miner name",model:"Model (override)",deviceId:"Device ID (optional)",webUrl:"Web UI URL (override)",powerSwitch:"Power switch / breaker (optional)",decimals:"Hashrate decimals",tempWarn:"Temp. warning (°C)",tempCrit:"Temp. critical (°C)",boardCount:"Hashboards (0 = auto)",fanCount:"Cooling (0 = auto)",titleAction:"Title click action",manualAssignment:"Manual entity assignment",titleShowHide:"Show / Hide zones",showTitle:"Title",showButtons:"Buttons",showMain:"Main",showFans:"Cooling",showBoards:"Boards",showCardVersion:"Version",hashrate:"Hashrate entity",ideal_hashrate:"Ideal hashrate entity",temperature:"Temperature entity",miner_consumption:"Power consumption entity",power_limit:"Power limit entity",efficiency:"Efficiency entity",active_preset_name:"Active preset entity",cooling_mode:"Cooling mode entity",active:"Mining switch entity",device_id:"Device ID"},bt={mining:"Mining",pause:"Pause",resume:"Resume",power:"Power",powerOn:"Power on",webui:"Web UI"},vt={hashrate:"Hashrate:",idealHashrate:"Ideal:",temperature:"Temperature:",power:"Power:",powerLimit:"Power limit:",efficiency:"Efficiency:",preset:"Preset:",cooling:"Cooling:",fan:"Fan",block:"Block",inlet:"Inlet",outlet:"Outlet",board:"Board",chip:"Chip:",boardTemp:"Board:"},$t={mining:"MINING",stopped:"STOPPED",powerOff:"POWER OFF",offline:"OFFLINE",unknown:"UNKNOWN"},wt={boards:"Hashboards",fans:"Cooling",firmware:"FW",offlineNote:"The miner is offline",breakerOffNote:"The miner is powered off by the breaker",breakerUnavailableNote:"Breaker state is unavailable. Power control is blocked"},yt={common:gt,config:_t,buttons:bt,stats:vt,status:$t,html_texts:wt},At={title:"Antminer Card",description:"Карточка Home Assistant для ASIC-майнеров Antminer",version:"Версия"},xt={language:"Язык",title:"Заголовок",prefix:"Префикс сенсоров",minerName:"Имя майнера",model:"Модель (вручную)",deviceId:"ID устройства (опционально)",webUrl:"URL веб-интерфейса",powerSwitch:"Выключатель питания / автомат (опционально)",decimals:"Знаков после запятой (хешрейт)",tempWarn:"Темп. предупреждение (°C)",tempCrit:"Темп. критическая (°C)",boardCount:"Хешплаты (0 = авто)",fanCount:"Охлаждение (0 = авто)",titleAction:"Действие по клику на заголовок",manualAssignment:"Ручное назначение сущностей",titleShowHide:"Показать / Скрыть зоны",showTitle:"Заголовок",showButtons:"Кнопки",showMain:"Основное",showFans:"Охлаждение",showBoards:"Платы",showCardVersion:"Версия",hashrate:"Сущность хешрейта",ideal_hashrate:"Сущность идеального хешрейта",temperature:"Сущность температуры",miner_consumption:"Сущность потребления",power_limit:"Сущность лимита мощности",efficiency:"Сущность эффективности",active_preset_name:"Сущность активного пресета",cooling_mode:"Сущность режима охлаждения",active:"Переключатель майнинга",device_id:"ID устройства"},St={mining:"Возобновить",pause:"Пауза",resume:"Возобновить",power:"Питание",powerOn:"Включить питание",webui:"Веб-интерфейс"},Ct={hashrate:"Хешрейт:",idealHashrate:"Идеальный:",temperature:"Температура:",power:"Мощность:",powerLimit:"Лимит:",efficiency:"Эффективность:",preset:"Пресет:",cooling:"Охлаждение:",fan:"Вентилятор",block:"Блок",inlet:"Вход",outlet:"Выход",board:"Плата",chip:"Чип:",boardTemp:"Плата:"},kt={mining:"Майнит",stopped:"Пауза",powerOff:"ВЫКЛЮЧЕН",offline:"ОФФЛАЙН",unknown:"НЕИЗВЕСТНО"},Et={boards:"Хешплаты",fans:"Охлаждение",firmware:"Прошивка",offlineNote:"Майнер офлайн",breakerOffNote:"Майнер выключен через автомат",breakerUnavailableNote:"Автомат недоступен. Управление питанием заблокировано"},Pt={common:At,config:xt,buttons:St,stats:Ct,status:kt,html_texts:Et},Ut={title:"Antminer Card",description:"Картка Home Assistant для ASIC-майнерів Antminer (інтеграція hass-miner)",version:"Версія"},Nt={language:"Мова",title:"Заголовок",prefix:"Префікс сенсорів",minerName:"Ім'я майнера",model:"Модель (вручну)",deviceId:"ID пристрою (опційно)",webUrl:"URL веб-інтерфейсу (вручну)",powerSwitch:"Вимикач живлення / автомат (опційно)",decimals:"Знаків після коми (хешрейт)",tempWarn:"Темп. попередження (°C)",tempCrit:"Темп. критична (°C)",boardCount:"Хешплати (0 = авто)",fanCount:"Охолодження (0 = авто)",titleAction:"Дія при кліку на заголовок",manualAssignment:"Ручне призначення сутностей",titleShowHide:"Показати / Сховати зони",showTitle:"Заголовок",showButtons:"Кнопки",showMain:"Основне",showFans:"Охолодження",showBoards:"Плати",showCardVersion:"Версія",hashrate:"Сутність хешрейту",ideal_hashrate:"Сутність ідеального хешрейту",temperature:"Сутність температури",miner_consumption:"Сутність споживання",power_limit:"Сутність ліміту потужності",efficiency:"Сутність ефективності",active_preset_name:"Сутність активного пресету",cooling_mode:"Сутність режиму охолодження",active:"Перемикач майнінгу",device_id:"ID пристрою"},Ot={mining:"Майніти",pause:"Пауза",resume:"Поновити",power:"Живлення",powerOn:"Увімкнути живлення",webui:"Веб-інтерфейс"},Mt={hashrate:"Хешрейт:",idealHashrate:"Ідеальний:",temperature:"Температура:",power:"Потужність:",powerLimit:"Ліміт:",efficiency:"Ефективність:",preset:"Пресет:",cooling:"Охолодження:",fan:"Вентилятор",block:"Блок",inlet:"Вхід",outlet:"Вихід",board:"Плата",chip:"Чип:",boardTemp:"Плата:"},Tt={mining:"Майнить",stopped:"Зупинений",powerOff:"ВИМКНЕНО",offline:"ОФЛАЙН",unknown:"НЕВІДОМО"},Bt={boards:"Хешплати",fans:"Охолодження",firmware:"Прошивка",offlineNote:"Майнер офлайн",breakerOffNote:"Майнер вимкнений через автомат",breakerUnavailableNote:"Автомат недоступний. Керування живленням заблоковано"},Ht={common:Ut,config:Nt,buttons:Ot,stats:Mt,status:Tt,html_texts:Bt};const It={hass:null},Rt={en:Object.freeze({__proto__:null,buttons:bt,common:gt,config:_t,default:yt,html_texts:wt,stats:vt,status:$t}),ru:Object.freeze({__proto__:null,buttons:St,common:At,config:xt,default:Pt,html_texts:Et,stats:Ct,status:kt}),uk:Object.freeze({__proto__:null,buttons:Ot,common:Ut,config:Nt,default:Ht,html_texts:Bt,stats:Mt,status:Tt})};function zt(t,e="",i=""){try{const s=It.cardConfig?.language;let n=localStorage.getItem("selectedLanguage");null===n&&(n=localStorage.getItem("editor-language")),null===n&&(n="en"),n=n.replace(/['"]+/g,"").replace("-","_");const o=It.hass?.selectedLanguage||It.hass?.locale?.language||It.hass?.language,r=s&&"auto"!==s?s:o||n;let a;try{a=t?.split(".").reduce((t,e)=>t[e],Rt[r])}catch(e){a=t?.split(".")?.reduce((t,e)=>t[e],Rt.en)}return void 0===a&&(a=t?.split(".")?.reduce((t,e)=>t[e],Rt.en)),""!==e&&""!==i&&(a=a.replace(e,i)),a}catch(e){return t}}var Lt,jt,Dt="1.1.0";!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Lt||(Lt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(jt||(jt={}));var Wt=function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});n.detail=i,t.dispatchEvent(n)}(window,"location-changed",{replace:i})};const Ft=(t,e,i)=>`${i}.${t?.prefix}_${e}`,Vt=(t,e,i)=>{const s=t?.entities?.[e]?.toString()?.trim(),n=Ft(t,e,i),o=s&&s.length>1?[(r=s,r.includes(".")?s:Ft(t,s,i)),n]:[n];var r;return[...new Set(o)]},qt=(t,e,i,s="sensor")=>{for(const n of Vt(e,i,s)){const e=t?.states[n];if(e)return{...e,entity_id:n}}return null};function Zt(t,e,i,s){s=s||{},i=null==i?{}:i;const n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n}const Jt=(t,e,i,s="sensor",n)=>{if(!t)return;t.stopPropagation();const o=n?qt(n,e,i,s):null,r=o?.entity_id??Vt(e,i,s)[0],a=new CustomEvent("hass-more-info",{detail:{entityId:r},composed:!0});t.target.dispatchEvent(a)},Kt=(t,e)=>{const i=e?.deviceId?.trim()||e?.entities?.device_id?.toString()?.trim();if(i)return i;for(const i of["hashrate","temperature","miner_consumption"]){const s=qt(t,e,i);if(!s)continue;const n=t?.entities?.[s.entity_id]?.device_id;if(n)return n}},Gt=(t,e)=>{const i=Kt(t,e);return i?t?.devices?.[i]:void 0},Qt=(t,e)=>{const i=e?.webUrl?.trim();return i||(Gt(t,e)?.configuration_url??void 0)};let Xt=class extends at{constructor(){super(...arguments),this.VERSION=Dt}_navigate(t,e,i="sensor"){Jt(t,this.config,e,i,this.hass)}_navigateTitle(t){((t,e,i)=>{if("device"!==i?.titleAction)return void Jt(t,i,"hashrate","sensor",e);t?.stopPropagation();const s=Kt(e,i);s?Wt(0,`/config/devices/device/${s}`):Jt(t,i,"hashrate","sensor",e)})(t,this.hass,this.config)}getState(t,e=2,i="",s="sensor"){return((t,e,i,s=2,n="",o="sensor")=>{const r=qt(t,e,i,o);if(!r)return n;const a=r.state;if("unknown"===a||"unavailable"===a)return n;const l=Number(a);return isNaN(l)?a??n:l.toFixed(s)})(this.hass,this.config,t,e,i,s)}getUnit(t){return((t,e,i,s="sensor")=>{const n=qt(t,e,i,s);return n?.attributes?.unit_of_measurement??""})(this.hass,this.config,t)}_entityState(t,e="sensor"){return qt(this.hass,this.config,t,e)?.state??null}_isUnavailableState(t){return null===t||""===t||"unavailable"===t||"unknown"===t}_numericEntityState(t,e="sensor"){const i=this._entityState(t,e);if(this._isUnavailableState(i))return null;const s=Number(i);return Number.isFinite(s)?s:null}_minerEntitiesUnavailable(){const t=["hashrate","temperature","miner_consumption"].map(t=>this._entityState(t)).filter(t=>null!==t);return t.length>0&&t.every(t=>this._isUnavailableState(t))}_hasPositiveRuntimeTelemetry(){if(["temperature","miner_consumption"].some(t=>(this._numericEntityState(t)??0)>0))return!0;for(let t=0;t<8;t++)if((this._numericEntityState(`fan_${t}_fan_speed`)??0)>0)return!0;for(let t=0;t<8;t++){if([`board_${t}_board_temperature`,`board_${t}_chip_temperature`,`board_${t}_board_hashrate`,`board_${t}_board_power`,`board_${t}_inlet_water_temperature`,`board_${t}_outlet_water_temperature`].some(t=>(this._numericEntityState(t)??0)>0))return!0}return!1}_minerTelemetryLost(){if("on"===this._entityState("active","switch"))return!1;const t=this._entityState("hashrate"),e=this._numericEntityState("hashrate");return(this._isUnavailableState(t)||null!==e&&e<=0)&&!this._hasPositiveRuntimeTelemetry()}_offlineReason(){return"off"===this._powerState()?"breaker_off":this._minerEntitiesUnavailable()||this._minerTelemetryLost()?"miner_unavailable":null}detectCount(t){const e="board"===t?this.config.boardCount:this.config.fanCount;if(e&&e>0)return e;let i=0;for(let e=0;e<8;e++){const s="board"===t?`board_${e}_board_temperature`:`fan_${e}_fan_speed`;qt(this.hass,this.config,s)&&(i=e+1)}return i}_openWebUi(t){t?.stopPropagation();const e=Qt(this.hass,this.config);e&&window.open(e,"_blank")}_tempClass(t){if(isNaN(t))return"";const e=this.config.tempWarn??85;return t>=(this.config.tempCrit??95)?"temp-crit":t>=e?"temp-warn":"temp-ok"}_powerEntityId(){const t=this.config.powerSwitch?.toString()?.trim();return t?t.includes(".")?t:`switch.${t}`:null}_powerState(){const t=this._powerEntityId();return t?this.hass?.states[t]?.state??null:null}_powerControlDisabled(){if(!this._powerEntityId())return!1;const t=this._powerState();return"on"!==t&&"off"!==t}_togglePower(t){t?.stopPropagation();const e=this._powerEntityId();e&&!this._powerControlDisabled()&&this.hass.callService("homeassistant","toggle",{entity_id:e})}_renderPowerButton(t="buttons.power"){const e=this._powerEntityId();if(!e)return W``;const i=this._powerState(),s=this._powerControlDisabled(),n="on"===i?"status-on":"off"===i?"status-off":"status-unknown";return W`
            <div
                class="button-border button-padding center ${s?"button-disabled":"clickable"}"
                title="${s?zt("html_texts.breakerUnavailableNote"):e}"
                aria-disabled="${s?"true":"false"}"
                @click=${t=>this._togglePower(t)}
            >
                <ha-icon class="webui-icon" icon="mdi:power"></ha-icon>
                <span class="${n}">${zt(t)}</span>
            </div>
        `}_toggleMining(t){t?.stopPropagation();const e=this.getState("active",0,"","switch");if("on"!==e&&"off"!==e)return void Jt(t,this.config,"active","switch",this.hass);const i=((t,e,i,s="sensor")=>qt(t,e,i,s)?.entity_id??Vt(e,i,s)[0])(this.hass,this.config,"active","switch");this.hass.callService("switch","on"===e?"turn_off":"turn_on",{entity_id:i})}_renderPauseButton(){const t=this.getState("active",0,"","switch"),e="on"===t,i=e||"off"===t,s=e?"mdi:pause":"mdi:play",n=i?zt(e?"buttons.pause":"buttons.resume"):zt("buttons.mining")+": --";return W`
            <div class="button-border button-padding center clickable" @click=${t=>this._toggleMining(t)}>
                <ha-icon class="webui-icon" icon="${s}"></ha-icon>
                <span class="${e?"status-on":i?"status-off":"status-unknown"}">${n}</span>
            </div>
        `}_renderWebUiButton(){return Qt(this.hass,this.config)?W`
            <div class="button-border button-padding center clickable webui" @click=${t=>this._openWebUi(t)}>
                <ha-icon class="webui-icon" icon="mdi:open-in-new"></ha-icon>
                ${zt("buttons.webui")}
            </div>
        `:W``}_isImmersion(){const t=this.getState("cooling_mode",0,"").toLowerCase();return"immersion"===t||"immers"===t}_renderFans(){const t=this.detectCount("fan");if(!t)return W``;const e=[];for(let i=0;i<t;i++){const t=`fan_${i}_fan_speed`,s=this.getState(t,0,"-"),n=this.getUnit(t)||"RPM",o=i+1;e.push(W`
                <div class="data-row">
                    <span class="name icon-name" title="${zt("stats.fan")} ${o}">
                        <ha-icon class="fan-icon" icon="mdi:fan"></ha-icon>${o}
                    </span>
                    <span class="label clickable" @click=${e=>this._navigate(e,t)}>${s} ${n}</span>
                </div>
            `)}return W`${e}`}_waterBlockCount(){if(this.config.boardCount&&this.config.boardCount>0)return this.config.boardCount;let t=0;for(let e=0;e<8;e++){const i=`board_${e}_inlet_water_temperature`,s=`board_${e}_outlet_water_temperature`;(qt(this.hass,this.config,i)||qt(this.hass,this.config,s))&&(t=e+1)}return t}_renderWaterBlocks(){const t=this._waterBlockCount();if(!t)return W``;const e=[];for(let i=0;i<t;i++){const t=i+1,s=`board_${i}_inlet_water_temperature`,n=`board_${i}_outlet_water_temperature`,o=`board_${i}_water_temperature_delta`,r=this.getState(s,0,"-"),a=this.getState(n,0,"-"),l=this.getState(o,0,""),c=this.getUnit(s)||this.getUnit(n)||"°C";e.push(W`
                <div class="data-row">
                    <span class="name icon-name" title="${zt("stats.block")} ${t}">
                        <ha-icon class="water-icon" icon="mdi:water"></ha-icon>
                        ${t}
                    </span>
                    <span class="label water-value">
                        <span class="water-temp clickable" title="${zt("stats.inlet")}" @click=${t=>this._navigate(t,s)}>
                            <span class="flow-arrow">→</span>${r}${c}
                        </span>
                        <span>/</span>
                        <span class="water-temp clickable" title="${zt("stats.outlet")}" @click=${t=>this._navigate(t,n)}>
                            <span class="flow-arrow">←</span>${a}${c}
                        </span>
                        ${""!==l?W`
                            <span class="delta clickable" @click=${t=>this._navigate(t,o)}>Δ${l}${c}</span>
                        `:""}
                    </span>
                </div>
            `)}return W`${e}`}_renderCooling(){return this._isImmersion()?this._renderWaterBlocks():this._renderFans()}_renderMetricIcon(t){return"board"===t?W`
                <svg class="metric-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z"></path>
                    <path d="M12 8v8"></path>
                </svg>
            `:"chip"===t?W`
                <svg class="metric-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <rect x="7" y="7" width="10" height="10" rx="1.5"></rect>
                    <path d="M9 3v4M12 3v4M15 3v4M9 17v4M12 17v4M15 17v4"></path>
                    <path d="M3 9h4M3 12h4M3 15h4M17 9h4M17 12h4M17 15h4"></path>
                </svg>
            `:W`
            <svg class="metric-svg metric-svg-voltage" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z"></path>
            </svg>
        `}_renderBoards(){const t=this.detectCount("board");if(!t)return W``;const e=this.getUnit("board_0_board_hashrate"),i=[];for(let s=0;s<t;s++){const t=`board_${s}_board_temperature`,n=`board_${s}_chip_temperature`,o=`board_${s}_board_hashrate`,r=`board_${s}_board_voltage`,a=parseFloat(this.getState(t,0,"NaN")),l=parseFloat(this.getState(n,0,"NaN")),c=this.getState(o,this.config.decimals??2,"-"),h=this.getState(r,2,""),d=this.getUnit(r)||"V";i.push(W`
                <div class="board-row stats-border">
                    <span class="pill">${s.toString().padStart(2,"0")}</span>
                    <span class="label board-metric clickable ${this._tempClass(a)}" title="${zt("stats.boardTemp")}" @click=${e=>this._navigate(e,t)}>
                        ${this._renderMetricIcon("board")}${isNaN(a)?"-":a+" °C"}
                    </span>
                    <span class="label board-metric clickable ${this._tempClass(l)}" title="${zt("stats.chip")}" @click=${t=>this._navigate(t,n)}>
                        ${this._renderMetricIcon("chip")}${isNaN(l)?"-":l+" °C"}
                    </span>
                    <span class="label clickable accent-blue" @click=${t=>this._navigate(t,o)}>
                        ${c} ${e}
                    </span>
                    ${""!==h?W`
                    <span class="label board-metric clickable" title="${d}" @click=${t=>this._navigate(t,r)}>
                        ${this._renderMetricIcon("voltage")}${h} ${d}
                    </span>`:""}
                </div>
            `)}return W`
            <div class="section-title">${zt("html_texts.boards")}</div>
            <div class="grid grid-1">${i}</div>
        `}_renderOffline(t,e,i){const s=!1!==this.config.showTitle,n=this._powerEntityId(),o=zt("breaker_off"===i?"status.powerOff":"status.offline"),r=zt("breaker_off"===i?"html_texts.breakerOffNote":"html_texts.offlineNote"),a="breaker_off"===i?"buttons.powerOn":"buttons.power";return W`
        <ha-card>
            ${s?W`
            <div class="grid grid-1 section-padding">
                <div class="center clickable" @click=${t=>this._navigateTitle(t)}>
                    <b>${t}</b> <span class="status-off">● ${o}</span><br/>
                    <span class="model-line">${e}</span>
                </div>
            </div>
            `:W``}
            <div class="offline-note">${r}</div>
            ${n?W`
            <div class="grid grid-1">
                ${this._renderPowerButton(a)}
            </div>
            `:W``}
        </ha-card>
        `}render(){if(It.hass=this.hass,!this.hass||!this.config)return W``;const t=Gt(this.hass,this.config),e=this.config.model||[t?.manufacturer,t?.model].filter(Boolean).join(" ")||"",i=this.config.minerName||t?.name_by_user||t?.name||this.config.prefix||"",s=t?.sw_version,n=this._offlineReason();if(n)return this._renderOffline(i,e,n);const o=this.getState("active",0,"","switch"),r="on"===o,a="on"===o||"off"===o,l=r?"status-on":a?"status-off":"status-unknown",c=zt(a?r?"status.mining":"status.stopped":"status.unknown"),h=this.config.decimals??2,d=this.getState("hashrate",h,"-"),p=this.getUnit("hashrate")||"TH/s",u=this.getState("ideal_hashrate",h),m=this.getUnit("ideal_hashrate"),f=parseFloat(this.getState("temperature",0,"NaN")),g=this.getUnit("temperature")||"°C",_=this._tempClass(f),b=this.getState("miner_consumption",0),v=this.getState("power_limit",0),$=this.getState("efficiency",1),w=this.getUnit("efficiency")||"J/TH",y=this.getState("active_preset_name",0),A=!1!==this.config.showTitle,x=!1!==this.config.showButtons,S=!1!==this.config.showMain,C=!1!==this.config.showFans,k=!1!==this.config.showBoards,E=!0===this.config.showCardVersion,P=1+(Qt(this.hass,this.config)?1:0)+(this._powerEntityId()?1:0),U=W`
            <b>${i}</b> <span class="${l}">● ${c}</span><br/>
            <span class="model-line">
                ${e}${s?W` | ${zt("html_texts.firmware")}: ${s}`:""}
            </span>
        `,N=this.config.title&&""!==this.config.title.trim()?W`<b>${this.config.title}</b> <span class="${l}">● ${c}</span><br/>
                <span class="model-line">${e}</span>`:U;return W`
        <ha-card>
            ${A?W`
            <div class="grid grid-1 section-padding">
                <div class="center clickable" @click=${t=>this._navigateTitle(t)}>
                    ${N}
                </div>
            </div>
            `:W``}

            ${x?W`
            <div class="grid grid-${P}">
                ${this._renderPauseButton()}
                ${this._renderPowerButton()}
                ${this._renderWebUiButton()}
            </div>
            `:W``}

            ${S?W`
            <div class="grid grid-2 section-padding">
                <div class="stats-padding stats-border">
                    <div class="clickable center" @click=${t=>this._navigate(t,"hashrate")}>
                        <span class="big-value">${d}</span> <span class="big-unit">${p}</span>
                    </div>
                    ${""!==u?W`
                    <div class="data-row"><span class="name" title="${zt("stats.idealHashrate")}">${zt("stats.idealHashrate")}</span>
                        <span class="label clickable" @click=${t=>this._navigate(t,"ideal_hashrate")}>${u} ${m}</span>
                    </div>`:""}
                    ${""!==$&&parseFloat($)>0?W`
                    <div class="data-row"><span class="name" title="${zt("stats.efficiency")}">${zt("stats.efficiency")}</span>
                        <span class="label clickable" @click=${t=>this._navigate(t,"efficiency")}>${$} ${w}</span>
                    </div>`:""}
                    ${""!==y&&"unknown"!==y?W`
                    <div class="data-row"><span class="name" title="${zt("stats.preset")}">${zt("stats.preset")}</span>
                        <span class="label clickable" @click=${t=>this._navigate(t,"active_preset_name")}>${y}</span>
                    </div>`:""}
                </div>

                <div class="stats-padding stats-border">
                    <div class="clickable center" @click=${t=>this._navigate(t,"temperature")}>
                        <span class="big-value ${_}">${isNaN(f)?"-":f}</span>
                        <span class="big-unit ${_}">${g}</span>
                    </div>
                    ${""!==b&&parseFloat(b)>0?W`
                    <div class="data-row"><span class="name" title="${zt("stats.power")}">${zt("stats.power")}</span>
                        <span class="label clickable" @click=${t=>this._navigate(t,"miner_consumption")}>${b} W</span>
                    </div>`:""}
                    ${""!==v&&parseFloat(v)>0?W`
                    <div class="data-row"><span class="name" title="${zt("stats.powerLimit")}">${zt("stats.powerLimit")}</span>
                        <span class="label clickable" @click=${t=>this._navigate(t,"power_limit")}>${v} W</span>
                    </div>`:""}
                    ${C?this._renderCooling():""}
                </div>
            </div>
            `:W``}

            ${k?this._renderBoards():W``}

            ${E?W`
            <div class="cardVersion">
                <span class="version">v.${this.VERSION}</span>
            </div>
            `:W``}
        </ha-card>
        `}};var Yt;Xt.styles=r`
        :host {
            /* VNish-like palette: yellow / white / black / blue */
            --amc-yellow: #ffc107;
            --amc-blue: #42a5f5;
            --amc-red: #ef5350;
            --amc-text: var(--primary-text-color, #ffffff);
        }

        .grid {
            display: grid;
            gap: 4px;
            margin: 4px;
            align-content: center;
            min-width: 250px;
        }

        .grid-1 {
            grid-template-columns: 1fr;
        }

        .grid-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        .grid-3 {
            grid-template-columns: repeat(3, 1fr);
        }

        .grid > * {
            min-width: 0;
        }

        .center {
            text-align: center !important;
            align-content: center !important;
        }

        .clickable {
            cursor: pointer;
        }

        .section-padding {
            padding-top: 0.45rem;
            padding-bottom: 0.25rem;
        }

        .stats-padding {
            padding: 0.75rem 0.75rem 0.5rem 0.75rem;
            overflow: hidden;
        }

        .data-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 4px;
            margin-right: 4px;
            min-width: 0;
        }

        .data-row .name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            min-width: 0;
            flex: 1 1 auto;
        }

        .data-row .icon-name {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            gap: 3px;
        }

        .label {
            font-size: clamp(0.68rem, round(20cqi + 0.2rem, 0.1rem), 1rem) !important;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .stats-border {
            border-width: var(--ha-card-border-width, 1px);
            border-style: solid;
            border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        }

        .button-border {
            border-width: var(--ha-card-border-width, 1px);
            border-style: solid;
            border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        }

        .button-padding {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }

        .status-on {
            color: var(--amc-yellow);
        }

        .status-off {
            color: var(--amc-red);
        }

        .status-unknown {
            color: #808080;
        }

        .big-value {
            font-size: 1.7rem;
            font-weight: bold;
            color: var(--amc-yellow);
        }

        .big-unit {
            font-size: 1rem;
            font-weight: bold;
            color: var(--amc-yellow);
        }

        .temp-ok {
            color: var(--amc-text);
        }

        .temp-warn {
            color: var(--amc-yellow);
        }

        .temp-crit {
            color: var(--amc-red);
        }

        .accent-blue {
            color: var(--amc-blue);
        }

        .button-border:hover {
            border-color: var(--amc-yellow);
        }

        .button-disabled {
            cursor: not-allowed;
            opacity: 0.45;
        }

        .button-disabled:hover {
            border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        }

        .webui {
            color: var(--amc-blue);
        }

        .model-line {
            font-size: 0.85rem;
            color: var(--secondary-text-color, #808080);
        }

        .pill {
            display: inline-block;
            padding: 0.2rem 0.2rem;
            background-color: var(--amc-yellow);
            color: #111111;
            border-radius: 999px;
            font-weight: 500;
            font-family: sans-serif;
            font-size: clamp(0.8rem, round(10cqi + 0.2rem, 0.2rem), 0.9rem);
            min-width: 1.8rem;
            text-align: center;
        }

        .board-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 8px 12px;
            padding: 0.35rem 0.75rem;
            min-width: 0;
        }

        .board-metric {
            display: inline-flex;
            align-items: center;
            gap: 3px;
        }

        .metric-svg {
            width: 16px;
            height: 16px;
            flex: 0 0 16px;
            color: var(--secondary-text-color, #808080);
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2;
        }

        .metric-svg-fill {
            fill: currentColor;
            stroke: none;
        }

        .metric-svg-voltage {
            color: var(--amc-yellow);
            fill: currentColor;
            stroke: none;
        }

        .fan-icon {
            --mdc-icon-size: 16px;
            vertical-align: text-bottom;
        }

        .water-icon {
            --mdc-icon-size: 16px;
            vertical-align: text-bottom;
            color: var(--amc-blue);
        }

        .water-value {
            display: inline-flex;
            justify-content: flex-end;
            align-items: baseline;
            flex-wrap: wrap;
            gap: 4px;
            white-space: normal;
            text-align: right;
        }

        .water-temp {
            display: inline-flex;
            align-items: baseline;
            gap: 2px;
        }

        .flow-arrow {
            color: var(--amc-blue);
            font-weight: 700;
        }

        .delta {
            color: var(--secondary-text-color, #808080);
        }

        .webui-icon {
            --mdc-icon-size: 16px;
            vertical-align: text-bottom;
        }

        .offline-note {
            padding: 0.5rem 0.75rem 0.75rem 0.75rem;
            text-align: center;
            font-size: 0.85rem;
            color: var(--secondary-text-color, #808080);
        }

        .section-title {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--secondary-text-color, #808080);
            padding: 0.35rem 0.75rem 0 0.75rem;
        }

        .cardVersion {
            text-align: right;
            margin-right: 5px;
        }

        .version {
            font-style: italic;
            font-size: 0.8rem;
        }
    `,t([pt()],Xt.prototype,"hass",void 0),t([pt()],Xt.prototype,"config",void 0),Xt=t([ct("antminer-default-layout")],Xt);const te=Dt;console.groupCollapsed(`%c⛏️ Antminer Card%c   ready!  🚀 (v${te})`,"background: linear-gradient(to right, #ffc107, #42a5f5); color: black; font-weight: bold; padding: 2px 8px; border-radius: 6px;","background: none; color: #AAA; font-style: italic;"),console.groupEnd();let ee=Yt=class extends at{setConfig(t){this._config=Yt.getStubConfig(),this._config={...this._config,...t},It.cardConfig=this._config}static getStubConfig(){return{language:"auto",title:"",prefix:"miner",minerName:"",model:"",webUrl:"",powerSwitch:"",decimals:2,tempWarn:85,tempCrit:95,boardCount:0,fanCount:0,titleAction:"device",showTitle:!0,showButtons:!0,showMain:!0,showFans:!0,showBoards:!0,showCardVersion:!1,entities:Object.keys(ft).reduce((t,e)=>(t[e]="",t),{})}}static async getConfigElement(){return await Promise.resolve().then(function(){return se}),document.createElement(ut)}getCardSize(){return 4}getGridOptions(){return{columns:12,min_columns:6}}render(){return It.hass=this.hass,this.hass&&this._config?W`
            <antminer-default-layout .hass=${this.hass} .config=${this._config}></antminer-default-layout>
        `:W``}};t([pt()],ee.prototype,"hass",void 0),t([pt()],ee.prototype,"_config",void 0),ee=Yt=t([ct(mt)],ee),window.customCards=window.customCards||[],window.customCards.push({type:mt,name:"Antminer Card",preview:!0,description:zt("common.description"),configurable:!0});let ie=class extends at{constructor(){super(...arguments),this._computeLabelCallback=t=>zt(`config.${t.name}`)??t.name}static get styles(){return r`
            .boolean-row {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-bottom: 16px;
                gap: 6px;
            }
            .label {
                font-size: 14px;
                color: var(--primary-text-color);
                line-height: 1.3;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-word;
            }
        `}setConfig(t){this._config={...t}}renderBoolean(t,e){return W`
            <div class="boolean-row">
                <span class="label">${t}</span>
                <ha-switch
                    .checked=${!1!==this._config?.[e]}
                    @change=${t=>this._handleSwitchChange(e,t)}
                ></ha-switch>
            </div>
        `}_handleSwitchChange(t,e){const i=e.target,s={...this._config};s[t]=!!i.checked,this._config=s,Zt(this,"config-changed",{config:this._config})}render(){if(!this._config||!this.hass)return W``;const t=Object.values(ft).map(t=>({name:t,selector:{entity:{}}}));return W`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .computeLabel=${this._computeLabelCallback.bind(this)}
                .schema=${[{type:"grid",title:zt("config.language"),schema:[{type:"grid",schema:[{name:"language",selector:{select:{options:[{label:"Auto (follow HA)",value:"auto"},{label:"English",value:"en"},{label:"Русский",value:"ru"},{label:"Українська",value:"uk"}],mode:"dropdown"}}}]}]},{type:"grid",title:zt("config.title"),schema:[{type:"grid",schema:[{name:"title",selector:{text:{}}},{name:"titleAction",selector:{select:{options:[{label:"Device page",value:"device"},{label:"More info",value:"more-info"}]}}}]}]},{type:"grid",title:zt("config.prefix"),schema:[{type:"grid",column_min_width:"200px",schema:[{name:"prefix",selector:{text:{}}},{name:"minerName",selector:{text:{}}},{name:"model",selector:{text:{}}},{name:"webUrl",selector:{text:{}}},{name:"powerSwitch",selector:{entity:{domain:"switch"}}},{name:"deviceId",selector:{text:{}}}]}]},{type:"grid",title:zt("config.boardCount"),schema:[{type:"grid",schema:[{name:"boardCount",selector:{number:{min:0,max:8,step:1}}},{name:"fanCount",selector:{number:{min:0,max:8,step:1}}}]}]},{type:"grid",schema:[{type:"grid",column_min_width:"200px",schema:[{name:"tempWarn",selector:{number:{min:0,max:150,step:1,mode:"box"}}},{name:"tempCrit",selector:{number:{min:0,max:150,step:1,mode:"box"}}},{name:"decimals",selector:{number:{min:0,max:3,step:1}}}]}]},{type:"expandable",title:zt("config.manualAssignment"),schema:[{name:"entities",type:"grid",schema:t}]}]}
                @value-changed=${this._valueChanged.bind(this)}
            ></ha-form>

            <ha-expansion-panel outlined style="margin-top: 10px;">
                <div slot="header" style="padding: 8px 16px; font-weight: 500;">
                    ${zt("config.titleShowHide")}
                </div>
                <div style="padding: 16px;
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
                            gap: 16px;">
                    ${this.renderBoolean(zt("config.showTitle"),"showTitle")}
                    ${this.renderBoolean(zt("config.showButtons"),"showButtons")}
                    ${this.renderBoolean(zt("config.showMain"),"showMain")}
                    ${this.renderBoolean(zt("config.showFans"),"showFans")}
                    ${this.renderBoolean(zt("config.showBoards"),"showBoards")}
                    <div class="boolean-row">
                        <span class="label">${zt("config.showCardVersion")}</span>
                        <ha-switch
                            .checked=${!0===this._config?.showCardVersion}
                            @change=${t=>this._handleSwitchChange("showCardVersion",t)}
                        ></ha-switch>
                    </div>
                </div>
            </ha-expansion-panel>
        `}_valueChanged(t){const e={...this._config};Object.assign(e,t.detail.value),this._config=e,Zt(this,"config-changed",{config:this._config})}};t([pt()],ie.prototype,"hass",void 0),t([pt()],ie.prototype,"_config",void 0),t([pt()],ie.prototype,"lovelace",void 0),ie=t([ct(ut)],ie);var se=Object.freeze({__proto__:null,get AntminerCardEditor(){return ie}});export{ee as AntminerCard,te as CARD_VERSION};
