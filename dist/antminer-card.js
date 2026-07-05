function t(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,f=m.trustedTypes,g=f?f.emptyScript:"",_=m.reactiveElementPolyfillSupport,$=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);n?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i;const o=n.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const o=this.constructor;if(!1===i&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??v)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[$("elementProperties")]=new Map,y[$("finalized")]=new Map,_?.({ReactiveElement:y}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,S=t=>t,x=A.trustedTypes,C=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+k,N=`<${P}>`,U=document,O=()=>U.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,M="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,R=/>/g,z=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,D=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,J=U.createTreeWalker(U,129);function K(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const G=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=I;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,h=0;for(;h<s.length&&(r.lastIndex=h,c=r.exec(s),null!==c);)h=r.lastIndex,r===I?"!--"===c[1]?r=B:void 0!==c[1]?r=R:void 0!==c[2]?(D.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=z):void 0!==c[3]&&(r=z):r===z?">"===c[0]?(r=n??I,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?z:'"'===c[3]?j:L):r===j||r===L?r=z:r===B||r===R?r=I:(r=z,n=void 0);const d=r===z&&t[e+1].startsWith("/>")?" ":"";o+=r===I?s+N:l>=0?(i.push(a),s.slice(0,l)+E+s.slice(l)+k+d):s+k+(-2===l?e:d)}return[K(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[c,l]=G(t,e);if(this.el=Z.createElement(c,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[o++],s=i.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?et:"?"===r[1]?st:"@"===r[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(D.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),J.nextNode(),a.push({type:2,index:++n});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){if(e===W)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=T(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=Q(t,n._$AS(t,e.values),n,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);J.currentNode=i;let n=J.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new nt(n,this,t)),this._$AV.push(e),a=s[++r]}o!==a?.index&&(n=J.nextNode(),o++)}return J.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),T(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Y(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=S(t).nextSibling;S(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=Q(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Q(this,i[s+r],e,r),a===W&&(a=this._$AH[r]),o||=!T(a)||a!==this._$AH[r],a===V?t=V:t!==V&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends tt{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??V)===W)return;const s=this._$AH,i=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(Z,Y),(A.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new Y(e.insertBefore(O(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const ct=rt.litElementPolyfillSupport;ct?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},dt=(t=ht,e,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const ut="antminer-card-editor",mt="antminer-card";var ft;!function(t){t.hashrate="hashrate",t.ideal_hashrate="ideal_hashrate",t.temperature="temperature",t.miner_consumption="miner_consumption",t.power_limit="power_limit",t.efficiency="efficiency",t.active_preset_name="active_preset_name",t.cooling_mode="cooling_mode",t.active="active"}(ft||(ft={}));var gt={title:"Antminer Card",description:"A Home Assistant card for Antminer ASIC miners (hass-miner integration)",version:"Version"},_t={language:"Language",title:"Title",prefix:"Sensor prefix",minerName:"Miner name",model:"Model (override)",deviceId:"Device ID (optional)",webUrl:"Web UI URL (override)",powerSwitch:"Power switch / breaker (optional)",decimals:"Hashrate decimals",tempWarn:"Temp. warning (°C)",tempCrit:"Temp. critical (°C)",boardCount:"Hashboards (0 = auto)",fanCount:"Fans (0 = auto)",titleAction:"Title click action",manualAssignment:"Manual entity assignment",titleShowHide:"Show / Hide zones",showTitle:"Title",showButtons:"Buttons",showMain:"Main",showFans:"Fans",showBoards:"Boards",showCardVersion:"Version",hashrate:"Hashrate entity",ideal_hashrate:"Ideal hashrate entity",temperature:"Temperature entity",miner_consumption:"Power consumption entity",power_limit:"Power limit entity",efficiency:"Efficiency entity",active_preset_name:"Active preset entity",cooling_mode:"Cooling mode entity",active:"Mining switch entity",device_id:"Device ID"},$t={mining:"Mining",pause:"Pause",resume:"Resume",power:"Power",powerOn:"Power on",webui:"Web UI"},bt={hashrate:"Hashrate:",idealHashrate:"Ideal:",temperature:"Temperature:",power:"Power:",powerLimit:"Power limit:",efficiency:"Efficiency:",preset:"Preset:",cooling:"Cooling:",fan:"Fan",board:"Board",chip:"Chip:",boardTemp:"Board:"},vt={mining:"MINING",stopped:"STOPPED",offline:"OFFLINE",unknown:"UNKNOWN"},wt={boards:"Hashboards",fans:"Fans",firmware:"FW",offlineNote:"The breaker is off — the miner is not powered",immersion:"Immersion"},yt={common:gt,config:_t,buttons:$t,stats:bt,status:vt,html_texts:wt},At={title:"Antminer Card",description:"Карточка Home Assistant для ASIC-майнеров Antminer",version:"Версия"},St={language:"Язык",title:"Заголовок",prefix:"Префикс сенсоров",minerName:"Имя майнера",model:"Модель (вручную)",deviceId:"ID устройства (опционально)",webUrl:"URL веб-интерфейса",powerSwitch:"Выключатель питания / автомат (опционально)",decimals:"Знаков после запятой (хешрейт)",tempWarn:"Темп. предупреждение (°C)",tempCrit:"Темп. критическая (°C)",boardCount:"Хешплаты (0 = авто)",fanCount:"Кулеры (0 = авто)",titleAction:"Действие по клику на заголовок",manualAssignment:"Ручное назначение сущностей",titleShowHide:"Показать / Скрыть зоны",showTitle:"Заголовок",showButtons:"Кнопки",showMain:"Основное",showFans:"Кулеры",showBoards:"Платы",showCardVersion:"Версия",hashrate:"Сущность хешрейта",ideal_hashrate:"Сущность идеального хешрейта",temperature:"Сущность температуры",miner_consumption:"Сущность потребления",power_limit:"Сущность лимита мощности",efficiency:"Сущность эффективности",active_preset_name:"Сущность активного пресета",cooling_mode:"Сущность режима охлаждения",active:"Переключатель майнинга",device_id:"ID устройства"},xt={mining:"Возобновить",pause:"Пауза",resume:"Возобновить",power:"Питание",powerOn:"Включить питание",webui:"Веб-интерфейс"},Ct={hashrate:"Хешрейт:",idealHashrate:"Идеальный:",temperature:"Температура:",power:"Мощность:",powerLimit:"Лимит:",efficiency:"Эффективность:",preset:"Пресет:",cooling:"Охлаждение:",fan:"Кулер",board:"Плата",chip:"Чип:",boardTemp:"Плата:"},Et={mining:"Майнит",stopped:"Пауза",offline:"ОФФЛАЙН",unknown:"НЕИЗВЕСТНО"},kt={boards:"Хешплаты",fans:"Кулеры",firmware:"Прошивка",offlineNote:"Майнер отключен через автомат",immersion:"Иммерсия"},Pt={common:At,config:St,buttons:xt,stats:Ct,status:Et,html_texts:kt},Nt={title:"Antminer Card",description:"Картка Home Assistant для ASIC-майнерів Antminer (інтеграція hass-miner)",version:"Версія"},Ut={language:"Мова",title:"Заголовок",prefix:"Префікс сенсорів",minerName:"Ім'я майнера",model:"Модель (вручну)",deviceId:"ID пристрою (опційно)",webUrl:"URL веб-інтерфейсу (вручну)",powerSwitch:"Вимикач живлення / автомат (опційно)",decimals:"Знаків після коми (хешрейт)",tempWarn:"Темп. попередження (°C)",tempCrit:"Темп. критична (°C)",boardCount:"Хешплати (0 = авто)",fanCount:"Кулери (0 = авто)",titleAction:"Дія при кліку на заголовок",manualAssignment:"Ручне призначення сутностей",titleShowHide:"Показати / Сховати зони",showTitle:"Заголовок",showButtons:"Кнопки",showMain:"Основне",showFans:"Кулери",showBoards:"Плати",showCardVersion:"Версія",hashrate:"Сутність хешрейту",ideal_hashrate:"Сутність ідеального хешрейту",temperature:"Сутність температури",miner_consumption:"Сутність споживання",power_limit:"Сутність ліміту потужності",efficiency:"Сутність ефективності",active_preset_name:"Сутність активного пресету",cooling_mode:"Сутність режиму охолодження",active:"Перемикач майнінгу",device_id:"ID пристрою"},Ot={mining:"Майніти",pause:"Пауза",resume:"Поновити",power:"Живлення",powerOn:"Увімкнути живлення",webui:"Веб-інтерфейс"},Tt={hashrate:"Хешрейт:",idealHashrate:"Ідеальний:",temperature:"Температура:",power:"Потужність:",powerLimit:"Ліміт:",efficiency:"Ефективність:",preset:"Пресет:",cooling:"Охолодження:",fan:"Кулер",board:"Плата",chip:"Чип:",boardTemp:"Плата:"},Ht={mining:"Майнить",stopped:"Зупинений",offline:"ОФЛАЙН",unknown:"НЕВІДОМО"},Mt={boards:"Хешплати",fans:"Кулери",firmware:"Прошивка",offlineNote:"Майнер відключений від живлення через автомат",immersion:"Імерсія"},It={common:Nt,config:Ut,buttons:Ot,stats:Tt,status:Ht,html_texts:Mt};const Bt={hass:null},Rt={en:Object.freeze({__proto__:null,buttons:$t,common:gt,config:_t,default:yt,html_texts:wt,stats:bt,status:vt}),ru:Object.freeze({__proto__:null,buttons:xt,common:At,config:St,default:Pt,html_texts:kt,stats:Ct,status:Et}),uk:Object.freeze({__proto__:null,buttons:Ot,common:Nt,config:Ut,default:It,html_texts:Mt,stats:Tt,status:Ht})};function zt(t,e="",s=""){try{const i=Bt.cardConfig?.language;let n=localStorage.getItem("selectedLanguage");null===n&&(n=localStorage.getItem("editor-language")),null===n&&(n="en"),n=n.replace(/['"]+/g,"").replace("-","_");const o=Bt.hass?.selectedLanguage||Bt.hass?.locale?.language||Bt.hass?.language,r=i&&"auto"!==i?i:o||n;let a;try{a=t?.split(".").reduce((t,e)=>t[e],Rt[r])}catch(e){a=t?.split(".")?.reduce((t,e)=>t[e],Rt.en)}return void 0===a&&(a=t?.split(".")?.reduce((t,e)=>t[e],Rt.en)),""!==e&&""!==s&&(a=a.replace(e,s)),a}catch(e){return t}}var Lt,jt,Dt="1.0.1";!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Lt||(Lt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(jt||(jt={}));var Ft=function(t,e,s){void 0===s&&(s=!1),s?history.replaceState(null,"",e):history.pushState(null,"",e),function(t,e,s,i){i=i||{},s=null==s?{}:s;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=s,t.dispatchEvent(n)}(window,"location-changed",{replace:s})};const Wt=(t,e,s)=>`${s}.${t?.prefix}_${e}`,Vt=(t,e,s)=>{const i=t?.entities?.[e]?.toString()?.trim(),n=Wt(t,e,s),o=i&&i.length>1?[(r=i,r.includes(".")?i:Wt(t,i,s)),n]:[n];var r;return[...new Set(o)]},qt=(t,e,s,i="sensor")=>{for(const n of Vt(e,s,i)){const e=t?.states[n];if(e)return{...e,entity_id:n}}return null};function Jt(t,e,s,i){i=i||{},s=null==s?{}:s;const n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=s,t.dispatchEvent(n),n}const Kt=(t,e,s,i="sensor",n)=>{if(!t)return;t.stopPropagation();const o=n?qt(n,e,s,i):null,r=o?.entity_id??Vt(e,s,i)[0],a=new CustomEvent("hass-more-info",{detail:{entityId:r},composed:!0});t.target.dispatchEvent(a)},Gt=(t,e)=>{const s=e?.deviceId?.trim()||e?.entities?.device_id?.toString()?.trim();if(s)return s;for(const s of["hashrate","temperature","miner_consumption"]){const i=qt(t,e,s);if(!i)continue;const n=t?.entities?.[i.entity_id]?.device_id;if(n)return n}},Zt=(t,e)=>{const s=Gt(t,e);return s?t?.devices?.[s]:void 0},Qt=(t,e)=>{const s=e?.webUrl?.trim();return s||(Zt(t,e)?.configuration_url??void 0)};let Xt=class extends at{constructor(){super(...arguments),this.VERSION=Dt}_navigate(t,e,s="sensor"){Kt(t,this.config,e,s,this.hass)}_navigateTitle(t){((t,e,s)=>{if("device"!==s?.titleAction)return void Kt(t,s,"hashrate","sensor",e);t?.stopPropagation();const i=Gt(e,s);i?Ft(0,`/config/devices/device/${i}`):Kt(t,s,"hashrate","sensor",e)})(t,this.hass,this.config)}getState(t,e=2,s="",i="sensor"){return((t,e,s,i=2,n="",o="sensor")=>{const r=qt(t,e,s,o);if(!r)return n;const a=r.state;if("unknown"===a||"unavailable"===a)return n;const c=Number(a);return isNaN(c)?a??n:c.toFixed(i)})(this.hass,this.config,t,e,s,i)}getUnit(t){return((t,e,s,i="sensor")=>{const n=qt(t,e,s,i);return n?.attributes?.unit_of_measurement??""})(this.hass,this.config,t)}detectCount(t){const e="board"===t?this.config.boardCount:this.config.fanCount;if(e&&e>0)return e;let s=0;for(let e=0;e<8;e++){const i="board"===t?`board_${e}_board_temperature`:`fan_${e}_fan_speed`;qt(this.hass,this.config,i)&&(s=e+1)}return s}_openWebUi(t){t?.stopPropagation();const e=Qt(this.hass,this.config);e&&window.open(e,"_blank")}_tempClass(t){if(isNaN(t))return"";const e=this.config.tempWarn??85;return t>=(this.config.tempCrit??95)?"temp-crit":t>=e?"temp-warn":"temp-ok"}_powerEntityId(){const t=this.config.powerSwitch?.toString()?.trim();return t?t.includes(".")?t:`switch.${t}`:null}_powerState(){const t=this._powerEntityId();return t?this.hass?.states[t]?.state??null:null}_togglePower(t){t?.stopPropagation();const e=this._powerEntityId();e&&this.hass.callService("homeassistant","toggle",{entity_id:e})}_renderPowerButton(){const t=this._powerEntityId();if(!t)return F``;const e=this._powerState();return F`
            <div class="button-border button-padding center clickable" title="${t}" @click=${t=>this._togglePower(t)}>
                <ha-icon class="webui-icon" icon="mdi:power"></ha-icon>
                <span class="${"on"===e?"status-on":"off"===e?"status-off":"status-unknown"}">${zt("buttons.power")}</span>
            </div>
        `}_toggleMining(t){t?.stopPropagation();const e=this.getState("active",0,"","switch");if("on"!==e&&"off"!==e)return void Kt(t,this.config,"active","switch",this.hass);const s=((t,e,s,i="sensor")=>qt(t,e,s,i)?.entity_id??Vt(e,s,i)[0])(this.hass,this.config,"active","switch");this.hass.callService("switch","on"===e?"turn_off":"turn_on",{entity_id:s})}_renderPauseButton(){const t=this.getState("active",0,"","switch"),e="on"===t,s=e||"off"===t,i=e?"mdi:pause":"mdi:play",n=s?zt(e?"buttons.pause":"buttons.resume"):zt("buttons.mining")+": --";return F`
            <div class="button-border button-padding center clickable" @click=${t=>this._toggleMining(t)}>
                <ha-icon class="webui-icon" icon="${i}"></ha-icon>
                <span class="${e?"status-on":s?"status-off":"status-unknown"}">${n}</span>
            </div>
        `}_renderWebUiButton(){return Qt(this.hass,this.config)?F`
            <div class="button-border button-padding center clickable webui" @click=${t=>this._openWebUi(t)}>
                <ha-icon class="webui-icon" icon="mdi:open-in-new"></ha-icon>
                ${zt("buttons.webui")}
            </div>
        `:F``}_isImmersion(){return"immersion"===this.getState("cooling_mode",0,"").toLowerCase()}_renderFans(){if(this._isImmersion())return F``;const t=this.detectCount("fan");if(!t)return F``;const e=[];for(let s=0;s<t;s++){const t=`fan_${s}_fan_speed`,i=this.getState(t,0,"-"),n=this.getUnit(t)||"RPM";e.push(F`
                <div class="data-row">
                    <span class="name" title="${zt("stats.fan")} ${s}"><ha-icon class="fan-icon" icon="mdi:fan"></ha-icon> ${zt("stats.fan")} ${s}:</span>
                    <span class="label clickable" @click=${e=>this._navigate(e,t)}>${i} ${n}</span>
                </div>
            `)}return F`${e}`}_renderBoards(){const t=this.detectCount("board");if(!t)return F``;const e=this.getUnit("board_0_board_hashrate"),s=[];for(let i=0;i<t;i++){const t=`board_${i}_board_temperature`,n=`board_${i}_chip_temperature`,o=`board_${i}_board_hashrate`,r=parseFloat(this.getState(t,0,"NaN")),a=parseFloat(this.getState(n,0,"NaN")),c=this.getState(o,this.config.decimals??2,"-");s.push(F`
                <div class="board-row stats-border">
                    <span class="pill">${i.toString().padStart(2,"0")}</span>
                    <span class="label clickable ${this._tempClass(r)}" @click=${e=>this._navigate(e,t)}>
                        ${zt("stats.boardTemp")} ${isNaN(r)?"-":r+" °C"}
                    </span>
                    <span class="label clickable ${this._tempClass(a)}" @click=${t=>this._navigate(t,n)}>
                        ${zt("stats.chip")} ${isNaN(a)?"-":a+" °C"}
                    </span>
                    <span class="label clickable accent-blue" @click=${t=>this._navigate(t,o)}>
                        ${c} ${e}
                    </span>
                </div>
            `)}return F`
            <div class="section-title">${zt("html_texts.boards")}</div>
            <div class="grid grid-1">${s}</div>
        `}_renderOffline(t,e){const s=!1!==this.config.showTitle;return F`
        <ha-card>
            ${s?F`
            <div class="grid grid-1 section-padding">
                <div class="center clickable" @click=${t=>this._navigateTitle(t)}>
                    <b>${t}</b> <span class="status-off">● ${zt("status.offline")}</span><br/>
                    <span class="model-line">${e}</span>
                </div>
            </div>
            `:F``}
            <div class="offline-note">${zt("html_texts.offlineNote")}</div>
            <div class="grid grid-1">
                <div class="button-border button-padding center clickable" @click=${t=>this._togglePower(t)}>
                    <ha-icon class="webui-icon" icon="mdi:power"></ha-icon>
                    <span class="status-off">${zt("buttons.powerOn")}</span>
                </div>
            </div>
        </ha-card>
        `}render(){if(Bt.hass=this.hass,!this.hass||!this.config)return F``;const t=Zt(this.hass,this.config),e=this.config.model||[t?.manufacturer,t?.model].filter(Boolean).join(" ")||"",s=this.config.minerName||t?.name_by_user||t?.name||this.config.prefix||"",i=t?.sw_version;if("off"===this._powerState())return this._renderOffline(s,e);const n=this.getState("active",0,"","switch"),o="on"===n,r="on"===n||"off"===n,a=o?"status-on":r?"status-off":"status-unknown",c=zt(r?o?"status.mining":"status.stopped":"status.unknown"),l=this.config.decimals??2,h=this.getState("hashrate",l,"-"),d=this.getUnit("hashrate")||"TH/s",p=this.getState("ideal_hashrate",l),u=this.getUnit("ideal_hashrate"),m=parseFloat(this.getState("temperature",0,"NaN")),f=this.getUnit("temperature")||"°C",g=this._tempClass(m),_=this.getState("miner_consumption",0),$=this.getState("power_limit",0),b=this.getState("efficiency",1),v=this.getUnit("efficiency")||"J/TH",w=this.getState("active_preset_name",0),y=!1!==this.config.showTitle,A=!1!==this.config.showButtons,S=!1!==this.config.showMain,x=!1!==this.config.showFans,C=!1!==this.config.showBoards,E=!0===this.config.showCardVersion,k=1+(Qt(this.hass,this.config)?1:0)+(this._powerEntityId()?1:0),P=F`
            <b>${s}</b> <span class="${a}">● ${c}</span><br/>
            <span class="model-line">
                ${e}${i?F` | ${zt("html_texts.firmware")}: ${i}`:""}
            </span>
        `,N=this.config.title&&""!==this.config.title.trim()?F`<b>${this.config.title}</b> <span class="${a}">● ${c}</span><br/>
                <span class="model-line">${e}</span>`:P;return F`
        <ha-card>
            ${y?F`
            <div class="grid grid-1 section-padding">
                <div class="center clickable" @click=${t=>this._navigateTitle(t)}>
                    ${N}
                </div>
            </div>
            `:F``}

            ${A?F`
            <div class="grid grid-${k}">
                ${this._renderPauseButton()}
                ${this._renderPowerButton()}
                ${this._renderWebUiButton()}
            </div>
            `:F``}

            ${S?F`
            <div class="grid grid-2 section-padding">
                <div class="stats-padding stats-border">
                    <div class="clickable center" @click=${t=>this._navigate(t,"hashrate")}>
                        <span class="big-value">${h}</span> <span class="big-unit">${d}</span>
                    </div>
                    ${""!==p?F`
                    <div class="data-row"><span class="name" title="${zt("stats.idealHashrate")}">${zt("stats.idealHashrate")}</span>
                        <span class="label clickable" @click=${t=>this._navigate(t,"ideal_hashrate")}>${p} ${u}</span>
                    </div>`:""}
                    ${""!==b&&parseFloat(b)>0?F`
                    <div class="data-row"><span class="name" title="${zt("stats.efficiency")}">${zt("stats.efficiency")}</span>
                        <span class="label clickable" @click=${t=>this._navigate(t,"efficiency")}>${b} ${v}</span>
                    </div>`:""}
                    ${""!==w&&"unknown"!==w?F`
                    <div class="data-row"><span class="name" title="${zt("stats.preset")}">${zt("stats.preset")}</span>
                        <span class="label clickable" @click=${t=>this._navigate(t,"active_preset_name")}>${w}</span>
                    </div>`:""}
                </div>

                <div class="stats-padding stats-border">
                    <div class="clickable center" @click=${t=>this._navigate(t,"temperature")}>
                        <span class="big-value ${g}">${isNaN(m)?"-":m}</span>
                        <span class="big-unit ${g}">${f}</span>
                    </div>
                    ${""!==_&&parseFloat(_)>0?F`
                    <div class="data-row"><span class="name" title="${zt("stats.power")}">${zt("stats.power")}</span>
                        <span class="label clickable" @click=${t=>this._navigate(t,"miner_consumption")}>${_} W</span>
                    </div>`:""}
                    ${""!==$&&parseFloat($)>0?F`
                    <div class="data-row"><span class="name" title="${zt("stats.powerLimit")}">${zt("stats.powerLimit")}</span>
                        <span class="label clickable" @click=${t=>this._navigate(t,"power_limit")}>${$} W</span>
                    </div>`:""}
                    ${this._isImmersion()?F`
                    <div class="data-row"><span class="name" title="${zt("stats.cooling")}">${zt("stats.cooling")}</span>
                        <span class="label clickable accent-blue" @click=${t=>this._navigate(t,"cooling_mode")}>${zt("html_texts.immersion")}</span>
                    </div>`:""}
                    ${x?this._renderFans():""}
                </div>
            </div>
            `:F``}

            ${C?this._renderBoards():F``}

            ${E?F`
            <div class="cardVersion">
                <span class="version">v.${this.VERSION}</span>
            </div>
            `:F``}
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
            gap: 8px;
            padding: 0.35rem 0.75rem;
            min-width: 0;
        }

        .fan-icon {
            --mdc-icon-size: 16px;
            vertical-align: text-bottom;
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
    `,t([pt()],Xt.prototype,"hass",void 0),t([pt()],Xt.prototype,"config",void 0),Xt=t([lt("antminer-default-layout")],Xt);const te=Dt;console.groupCollapsed(`%c⛏️ Antminer Card%c   ready!  🚀 (v${te})`,"background: linear-gradient(to right, #ffc107, #42a5f5); color: black; font-weight: bold; padding: 2px 8px; border-radius: 6px;","background: none; color: #AAA; font-style: italic;"),console.groupEnd();let ee=Yt=class extends at{setConfig(t){this._config=Yt.getStubConfig(),this._config={...this._config,...t},Bt.cardConfig=this._config}static getStubConfig(){return{language:"auto",title:"",prefix:"miner",minerName:"",model:"",webUrl:"",powerSwitch:"",decimals:2,tempWarn:85,tempCrit:95,boardCount:0,fanCount:0,titleAction:"device",showTitle:!0,showButtons:!0,showMain:!0,showFans:!0,showBoards:!0,showCardVersion:!1,entities:Object.keys(ft).reduce((t,e)=>(t[e]="",t),{})}}static async getConfigElement(){return await Promise.resolve().then(function(){return ie}),document.createElement(ut)}getCardSize(){return 4}getGridOptions(){return{columns:12,min_columns:6}}render(){return Bt.hass=this.hass,this.hass&&this._config?F`
            <antminer-default-layout .hass=${this.hass} .config=${this._config}></antminer-default-layout>
        `:F``}};t([pt()],ee.prototype,"hass",void 0),t([pt()],ee.prototype,"_config",void 0),ee=Yt=t([lt(mt)],ee),window.customCards=window.customCards||[],window.customCards.push({type:mt,name:"Antminer Card",preview:!0,description:zt("common.description"),configurable:!0});let se=class extends at{constructor(){super(...arguments),this._computeLabelCallback=t=>zt(`config.${t.name}`)??t.name}static get styles(){return r`
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
        `}setConfig(t){this._config={...t}}renderBoolean(t,e){return F`
            <div class="boolean-row">
                <span class="label">${t}</span>
                <ha-switch
                    .checked=${!1!==this._config?.[e]}
                    @change=${t=>this._handleSwitchChange(e,t)}
                ></ha-switch>
            </div>
        `}_handleSwitchChange(t,e){const s=e.target,i={...this._config};i[t]=!!s.checked,this._config=i,Jt(this,"config-changed",{config:this._config})}render(){if(!this._config||!this.hass)return F``;const t=Object.values(ft).map(t=>({name:t,selector:{entity:{}}}));return F`
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
        `}_valueChanged(t){const e={...this._config};Object.assign(e,t.detail.value),this._config=e,Jt(this,"config-changed",{config:this._config})}};t([pt()],se.prototype,"hass",void 0),t([pt()],se.prototype,"_config",void 0),t([pt()],se.prototype,"lovelace",void 0),se=t([lt(ut)],se);var ie=Object.freeze({__proto__:null,get AntminerCardEditor(){return se}});export{ee as AntminerCard,te as CARD_VERSION};
