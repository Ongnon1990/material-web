import{a as vt}from"../chunk-E4ZUVFT6.js";import"../chunk-AFGLDNBV.js";import{a as ht,b as K,d as W}from"../chunk-YFC4GHOP.js";import{a as ft}from"../chunk-UBLT4ER7.js";import{c as ut}from"../chunk-SC3Z35TP.js";import"../chunk-TZANKL32.js";import{c as f,e as C,f as _,g as x,i as lt,k as dt,n as w,o as k,p as pt}from"../chunk-6RJU4KXO.js";import{a as h,b as ct,d,g as S,h as R,i as X}from"../chunk-XCNF2U7M.js";import{a as b}from"../chunk-32HEDUCQ.js";function U(){throw new Error("Cycle detected")}function Q(){if(E>1)E--;else{for(var i,t=!1;M!==void 0;){var e=M;for(M=void 0,Y++;e!==void 0;){var o=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&yt(e))try{e.c()}catch(s){t||(i=s,t=!0)}e=o}}if(Y=0,E--,t)throw i}}var l=void 0,M=void 0,E=0,Y=0,N=0;function mt(i){if(l!==void 0){var t=i.n;if(t===void 0||t.t!==l)return t={i:0,S:i,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:t},l.s!==void 0&&(l.s.n=t),l.s=t,i.n=t,32&l.f&&i.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=l.s,t.n=void 0,l.s.n=t,l.s=t),t}}function u(i){this.v=i,this.i=0,this.n=void 0,this.t=void 0}u.prototype.h=function(){return!0};u.prototype.S=function(i){this.t!==i&&i.e===void 0&&(i.x=this.t,this.t!==void 0&&(this.t.e=i),this.t=i)};u.prototype.U=function(i){if(this.t!==void 0){var t=i.e,e=i.x;t!==void 0&&(t.x=e,i.e=void 0),e!==void 0&&(e.e=t,i.x=void 0),i===this.t&&(this.t=e)}};u.prototype.subscribe=function(i){var t=this;return J(function(){var e=t.value,o=32&this.f;this.f&=-33;try{i(e)}finally{this.f|=o}})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){return this.v};Object.defineProperty(u.prototype,"value",{get:function(){var i=mt(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(l instanceof A&&function(){throw new Error("Computed cannot have side-effects")}(),i!==this.v){Y>100&&U(),this.v=i,this.i++,N++,E++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Q()}}}});function O(i){return new u(i)}function yt(i){for(var t=i.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function gt(i){for(var t=i.s;t!==void 0;t=t.n){var e=t.S.n;if(e!==void 0&&(t.r=e),t.S.n=t,t.i=-1,t.n===void 0){i.s=t;break}}}function bt(i){for(var t=i.s,e=void 0;t!==void 0;){var o=t.p;t.i===-1?(t.S.U(t),o!==void 0&&(o.n=t.n),t.n!==void 0&&(t.n.p=o)):e=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=o}i.s=e}function A(i){u.call(this,void 0),this.x=i,this.s=void 0,this.g=N-1,this.f=4}(A.prototype=new u).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===N))return!0;if(this.g=N,this.f|=1,this.i>0&&!yt(this))return this.f&=-2,!0;var i=l;try{gt(this),l=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return l=i,bt(this),this.f&=-2,!0};A.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}u.prototype.S.call(this,i)};A.prototype.U=function(i){if(this.t!==void 0&&(u.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};A.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};A.prototype.peek=function(){if(this.h()||U(),16&this.f)throw this.v;return this.v};Object.defineProperty(A.prototype,"value",{get:function(){1&this.f&&U();var i=mt(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function _t(i){var t=i.u;if(i.u=void 0,typeof t=="function"){E++;var e=l;l=void 0;try{t()}catch(o){throw i.f&=-2,i.f|=8,G(i),o}finally{l=e,Q()}}}function G(i){for(var t=i.s;t!==void 0;t=t.n)t.S.U(t);i.x=void 0,i.s=void 0,_t(i)}function Ft(i){if(l!==this)throw new Error("Out-of-order effect");bt(this),l=i,this.f&=-2,8&this.f&&G(this),Q()}function z(i){this.x=i,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}z.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{i()}};z.prototype.S=function(){1&this.f&&U(),this.f|=1,this.f&=-9,_t(this),gt(this),E++;var i=l;return l=this,Ft.bind(this,i)};z.prototype.N=function(){2&this.f||(this.f|=2,this.o=M,M=this)};z.prototype.d=function(){this.f|=8,1&this.f||G(this)};function J(i){var t=new z(i);try{t.c()}catch(e){throw t.d(),e}return t.d.bind(t)}function D(i){return class extends i{performUpdate(){this.isUpdatePending&&(this._disposeEffect?.(),this._disposeEffect=J(()=>{this.isUpdatePending=!0,super.performUpdate()}))}}}var m=O(!1);var T=O(!1),L=O(!1);var q=(i,t)=>{var e,o;let s=i._$AN;if(s===void 0)return!1;for(let r of s)(o=(e=r)._$AO)===null||o===void 0||o.call(e,t,!1),q(r,t);return!0},j=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},xt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Dt(t)}};function Nt(i){this._$AN!==void 0?(j(this),this._$AM=i,xt(this)):this._$AM=i}function Ut(i,t=!1,e=0){let o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(o))for(let r=e;r<o.length;r++)q(o[r],!1),j(o[r]);else o!=null&&(q(o,!1),j(o));else q(this,i)}var Dt=i=>{var t,e,o,s;i.type==S.CHILD&&((t=(o=i)._$AP)!==null&&t!==void 0||(o._$AP=Ut),(e=(s=i)._$AQ)!==null&&e!==void 0||(s._$AQ=Nt))},I=class extends X{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),xt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var o,s;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)===null||o===void 0||o.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),e&&(q(this,t),j(this))}setValue(t){if(ut(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var tt=new WeakMap;var wt=0,et=new Map,$t=new WeakSet,it=()=>new Promise(i=>requestAnimationFrame(i));var ot=[{opacity:0}];var st=[{opacity:0},{opacity:1}];var St=(i,t)=>{let e=i-t;return e===0?void 0:e},At=(i,t)=>{let e=i/t;return e===1?void 0:e},B={left:(i,t)=>{let e=St(i,t);return{value:e,transform:e&&`translateX(${e}px)`}},top:(i,t)=>{let e=St(i,t);return{value:e,transform:e&&`translateY(${e}px)`}},width:(i,t)=>{let e=At(i,t);return{value:e,transform:e&&`scaleX(${e})`}},height:(i,t)=>{let e=At(i,t);return{value:e,transform:e&&`scaleY(${e})`}}},kt={duration:333,easing:"ease-in-out"},Et=["left","top","width","height","opacity","color","background"],Ct=new WeakMap,H=class extends I{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===S.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;(t=this.resolveFinished)===null||t===void 0||t.call(this),this.finished=new Promise(e=>{this.h=e})}async resolveFinished(){var t;(t=this.h)===null||t===void 0||t.call(this),this.h=void 0}render(t){return d}getController(){return tt.get(this.l)}isDisabled(){var t;return this.options.disabled||((t=this.getController())===null||t===void 0?void 0:t.disabled)}update(t,[e]){var o;let s=this.l===void 0;return s&&(this.l=(o=t.options)===null||o===void 0?void 0:o.host,this.l.addController(this),this.element=t.element,Ct.set(this.element,this)),this.optionsOrCallback=e,(s||typeof e!="function")&&this.u(e),this.render(e)}u(t){var e,o;t=t??{};let s=this.getController();s!==void 0&&((t={...s.defaultOptions,...t}).keyframeOptions={...s.defaultOptions.keyframeOptions,...t.keyframeOptions}),(e=(o=t).properties)!==null&&e!==void 0||(o.properties=Et),this.options=t}v(){let t={},e=this.element.getBoundingClientRect(),o=getComputedStyle(this.element);return this.options.properties.forEach(s=>{var r;let n=(r=e[s])!==null&&r!==void 0?r:B[s]?void 0:o[s],a=Number(n);t[s]=isNaN(a)?n+"":a}),t}p(){let t,e=!0;return this.options.guard&&(t=this.options.guard(),e=((o,s)=>{if(Array.isArray(o)){if(Array.isArray(s)&&s.length===o.length&&o.every((r,n)=>r===s[n]))return!1}else if(s===o)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&e&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;typeof this.optionsOrCallback=="function"&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=(t=this.t)!==null&&t!==void 0?t:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await it;let e=this._(),o=this.A(this.options.keyframeOptions,e),s=this.v();if(this.g!==void 0){let{from:r,to:n}=this.O(this.g,s,e);this.log("measured",[this.g,s,r,n]),t=this.calculateKeyframes(r,n)}else{let r=et.get(this.options.inId);if(r){et.delete(this.options.inId);let{from:n,to:a}=this.O(r,s,e);t=this.calculateKeyframes(n,a),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,wt++,t.forEach(v=>v.zIndex=wt)}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,o)}resetStyles(){var t;this.P!==void 0&&(this.element.setAttribute("style",(t=this.P)!==null&&t!==void 0?t:""),this.P=void 0)}commitStyles(){var t,e;this.P=this.element.getAttribute("style"),(t=this.webAnimation)===null||t===void 0||t.commitStyles(),(e=this.webAnimation)===null||e===void 0||e.cancel()}reconnected(){}async disconnected(){var t;if(!this.o||(this.options.id!==void 0&&et.set(this.options.id,this.g),this.options.out===void 0))return;if(this.prepare(),await it(),(t=this.t)===null||t===void 0?void 0:t.isConnected){let o=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,o),this.options.stabilizeOut){let s=this.v();this.log("stabilizing out");let r=this.g.left-s.left,n=this.g.top-s.top;getComputedStyle(this.element).position!=="static"||r===0&&n===0||(this.element.style.position="relative"),r!==0&&(this.element.style.left=r+"px"),n!==0&&(this.element.style.top=n+"px")}}let e=this.A(this.options.keyframeOptions);await this.animate(this.options.out,e),this.element.remove()}prepare(){this.createFinished()}start(){var t,e;(e=(t=this.options).onStart)===null||e===void 0||e.call(t,this)}didFinish(t){var e,o;t&&((o=(e=this.options).onComplete)===null||o===void 0||o.call(e,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}_(){let t=[];for(let e=this.element.parentNode;e;e=e?.parentNode){let o=Ct.get(e);o&&!o.isDisabled()&&o&&t.push(o)}return t}get isHostRendered(){let t=$t.has(this.l);return t||this.l.updateComplete.then(()=>{$t.add(this.l)}),t}A(t,e=this._()){let o={...kt};return e.forEach(s=>Object.assign(o,s.options.keyframeOptions)),Object.assign(o,t),o}O(t,e,o){t={...t},e={...e};let s=o.map(a=>a.animatingProperties).filter(a=>a!==void 0),r=1,n=1;return s!==void 0&&(s.forEach(a=>{a.width&&(r/=a.width),a.height&&(n/=a.height)}),t.left!==void 0&&e.left!==void 0&&(t.left=r*t.left,e.left=r*e.left),t.top!==void 0&&e.top!==void 0&&(t.top=n*t.top,e.top=n*e.top)),{from:t,to:e}}calculateKeyframes(t,e,o=!1){var s;let r={},n={},a=!1,v={};for(let c in e){let y=t[c],g=e[c];if(c in B){let qt=B[c];if(y===void 0||g===void 0)continue;let V=qt(y,g);V.transform!==void 0&&(v[c]=V.value,a=!0,r.transform=`${(s=r.transform)!==null&&s!==void 0?s:""} ${V.transform}`)}else y!==g&&y!==void 0&&g!==void 0&&(a=!0,r[c]=y,n[c]=g)}return r.transformOrigin=n.transformOrigin=o?"center center":"top left",this.animatingProperties=v,a?[r,n]:void 0}async animate(t,e=this.options.keyframeOptions){this.start(),this.frames=t;let o=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),t!==void 0)){this.log("animate",[t,e]),o=!0,this.webAnimation=this.element.animate(t,e);let s=this.getController();s?.add(this);try{await this.webAnimation.finished}catch{}s?.remove(this)}return this.didFinish(o),o}isAnimating(){var t,e;return((t=this.webAnimation)===null||t===void 0?void 0:t.playState)==="running"||((e=this.webAnimation)===null||e===void 0?void 0:e.pending)}log(t,e){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,e)}},F=R(H);var Bt=["top","right","bottom","left"],Z=class extends I{constructor(t){if(super(t),t.type!==S.ELEMENT)throw Error("The `position` directive must be used in attribute position.")}render(t,e){return d}update(t,[e,o]){var s;return this.l===void 0&&(this.l=(s=t.options)===null||s===void 0?void 0:s.host,this.l.addController(this)),this.j=t.element,this.S=e,this.C=o??["left","top","width","height"],this.render(e,o)}hostUpdated(){this.F()}F(){var t,e;let o=typeof this.S=="function"?this.S():(t=this.S)===null||t===void 0?void 0:t.value,s=o.offsetParent;if(o===void 0||!s)return;let r=o.getBoundingClientRect(),n=s.getBoundingClientRect();(e=this.C)===null||e===void 0||e.forEach(a=>{let v=Bt.includes(a)?r[a]-n[a]:r[a];this.j.style[a]=v+"px"})}},Ht=R(Z);var P=class extends D(k){constructor(){super(...arguments);this.isMobile=!1}render(){let e=this.isMobile&&m.value,o=500,s=300,r=150;return h`<div class="root"><slot name="top-app-bar"></slot><div class="body ${m.value?"open":""}"><div class="spacer" ?inert="${L.value}">${e?h`<div class="scrim" @click="${this.onScrimClick}" ${F({properties:["opacity"],keyframeOptions:{duration:150,easing:"linear"},in:st,out:ot})}></div>`:d}<aside ?inert="${this.isMobile&&!m.value}" ${F({properties:["transform"],keyframeOptions:{duration:e?o:r,easing:e?K.EMPHASIZED:K.EMPHASIZED_ACCELERATE}})}><slot ${F({properties:["opacity"],keyframeOptions:{duration:e?s:r,easing:"linear"}})}></slot></aside></div><div class="content" ?inert="${e||T.value}"><slot name="app-content"></slot></div></div></div>`}onScrimClick(){m.value=!1}firstUpdated(){let e=window.matchMedia("(max-width: 900px)");this.isMobile=e.matches,e.addEventListener("change",o=>{this.isMobile=o.matches})}};P.styles=w`:host{--_drawer-width:var(--drawer-width, 300px);--_item-border-radius:var(--md-dialog-container-shape, 28px);--_border-radius:calc(var(--_item-border-radius) + 12px);--_content-padding:24px;min-height:100dvh;display:flex;flex-direction:column}::slotted(*){--md-list-item-list-item-container-shape:var(--_item-border-radius);--md-focus-ring-shape:var(--_item-border-radius)}.body{display:flex;flex-grow:1}.spacer{position:relative;transition:min-width .5s cubic-bezier(.3,0,0,1)}.spacer,aside{min-width:var(--_drawer-width);max-width:var(--_drawer-width)}.content{flex-grow:1;padding-inline:var(--_content-padding);max-width:calc(100vw - var(--_drawer-width) - 2 * var(--_content-padding))}aside{transition:transform .5s cubic-bezier(.3,0,0,1);position:fixed;isolation:isolate;inset:calc(var(--top-app-bar-height) + 2 * var(--top-app-bar-padding-block)) 0 0 0;z-index:12;border-radius:0 var(--_border-radius) var(--_border-radius) 0;background-color:var(--md-sys-color-surface)}aside slot{display:block}.scrim{background-color:var(--md-dialog-scrim-color,rgba(0,0,0,.32))}@media (max-width:900px){.spacer{min-width:0}.content{max-width:calc(100vw - 2 * var(--_content-padding));padding-inline:var(--_content-padding)}.scrim{position:fixed;inset:0}aside{transition:unset;transform:translateX(-100%)}.open aside{transform:translateX(0)}aside slot{opacity:0}.open aside slot{opacity:1}.open .scrim{inset:0;z-index:11}.root:has(.open){--top-app-bar-color-background:var(
          --md-sys-color-surface-variant
        );--top-app-bar-color-on-background:var(
          --md-sys-color-on-surface-variant
        )}}@media (forced-colors:active){aside{box-sizing:border-box;border:1px solid CanvasText}}`,b([x()],P.prototype,"isMobile",2),P=b([C("nav-drawer")],P);var It=Symbol.for(""),Zt=i=>{if(i?.r===It)return i?._$litStatic$};var rt=(i,...t)=>({_$litStatic$:t.reduce((e,o,s)=>e+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+i[s+1],i[0]),r:It}),Ot=new Map,Pt=i=>(t,...e)=>{let o=e.length,s,r,n=[],a=[],v,c=0,y=!1;for(;c<o;){for(v=t[c];c<o&&(r=e[c],(s=Zt(r))!==void 0);)v+=s+t[++c],y=!0;c!==o&&a.push(r),n.push(v),c++}if(c===o&&n.push(t[o]),y){let g=n.join("$$lit$$");(t=Ot.get(g))===void 0&&(n.raw=n,Ot.set(g,t=n)),e=a}return i(t,...e)},Rt=Pt(h),De=Pt(ct);function nt(i,t=!0){return t&&getComputedStyle(i).getPropertyValue("direction").trim()==="rtl"}var Mt,p=class extends k{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.toggle=!1,this.selected=!1,this.showRipple=!1,this.flipIcon=nt(this,this.flipIconInRtl),this.getRipple=()=>(this.showRipple=!0,this.ripple),this.renderRipple=()=>h`<md-ripple ?disabled="${!this.href&&this.disabled}"></md-ripple>`}willUpdate(){this.href&&(this.disabled=!1)}render(){let t=this.href?rt`div`:rt`button`,{ariaLabel:e,ariaHasPopup:o,ariaExpanded:s}=this,r=e&&this.selectedAriaLabel,n=r?d:this.selected,a=d;return this.href||(a=r&&this.selected?this.selectedAriaLabel:e),Rt`<${t}
        class="icon-button ${pt(this.getRenderClasses())}"
        id="button"
        aria-label="${a||d}"
        aria-haspopup="${!this.href&&o||d}"
        aria-expanded="${!this.href&&s||d}"
        aria-pressed="${n}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}"
        ${W(this.getRipple)}>
        ${this.renderFocusRing()}
        ${vt(this.showRipple,this.renderRipple)}
        ${this.selected?d:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():d}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${t}>`}renderLink(){let{ariaLabel:t}=this;return h`<a class="link" id="link" href="${this.href}" target="${this.target||d}" aria-label="${t||d}" ${W(this.getRipple)}></a>`}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return h`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return h`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return h`<span class="touch"></span>`}renderFocusRing(){return h`<md-focus-ring for="${this.href?"link":"button"}"></md-focus-ring>`}connectedCallback(){this.flipIcon=nt(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}};Mt=p;ht(Mt);f([_({type:Boolean,reflect:!0})],p.prototype,"disabled",void 0);f([_({type:Boolean})],p.prototype,"flipIconInRtl",void 0);f([_()],p.prototype,"href",void 0);f([_()],p.prototype,"target",void 0);f([_({attribute:"selected-aria-label",reflect:!0})],p.prototype,"selectedAriaLabel",void 0);f([_({type:Boolean})],p.prototype,"toggle",void 0);f([_({type:Boolean,reflect:!0})],p.prototype,"selected",void 0);f([dt("md-ripple")],p.prototype,"ripple",void 0);f([x()],p.prototype,"showRipple",void 0);f([x()],p.prototype,"flipIcon",void 0);var zt=w`:host{display:inline-flex;outline:0;-webkit-tap-highlight-color:transparent;height:var(--_container-size);width:var(--_container-size);justify-content:center;--md-focus-ring-shape-start-start:var(--_container-shape-start-start);--md-focus-ring-shape-start-end:var(--_container-shape-start-end);--md-focus-ring-shape-end-end:var(--_container-shape-end-end);--md-focus-ring-shape-end-start:var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:0 0;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon{height:var(--_icon-size);width:var(--_icon-size);--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:0;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}`;var Tt=w`:host{--_disabled-icon-color:var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity:var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size:var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color:var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-color:var(--md-icon-button-selected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-opacity:var(--md-icon-button-selected-focus-state-layer-opacity, 0.12);--_selected-hover-icon-color:var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color:var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity:var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color:var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color:var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color:var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity:var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape:var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size:var(--md-icon-button-state-layer-size, 40px);--_unselected-focus-icon-color:var(--md-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-color:var(--md-icon-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-opacity:var(--md-icon-button-unselected-focus-state-layer-opacity, 0.12);--_unselected-hover-icon-color:var(--md-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color:var(--md-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-opacity:var(--md-icon-button-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color:var(--md-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color:var(--md-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-color:var(--md-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-opacity:var(--md-icon-button-unselected-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-focus-ring-shape:var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-focus-color:var(--_unselected-focus-state-layer-color);--md-ripple-focus-opacity:var(--_unselected-focus-state-layer-opacity);--md-ripple-hover-color:var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity:var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_unselected-pressed-state-layer-opacity);--md-ripple-shape:var(--_state-layer-shape)}.standard:hover{color:var(--_unselected-hover-icon-color)}.standard:focus{color:var(--_unselected-focus-icon-color)}.standard:active{color:var(--_unselected-pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-focus-color:var(--_selected-focus-state-layer-color);--md-ripple-focus-opacity:var(--_selected-focus-state-layer-opacity);--md-ripple-hover-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity:var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}`;var at=class extends p{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};at.styles=[zt,Tt];at=f([C("md-standard-icon-button")],at);function Lt(i=""){return h`<svg slot="${i||d}" viewBox="0 96 960 960" fill="currentColor"><path d="M480 1016q-91 0-171-34.5T169 887q-60-60-94.5-140T40 576q0-91 34.5-171T169 265q60-60 140-94.5T480 136q91 0 171 34.5T791 265q60 60 94.5 140T920 576q0 91-34.5 171T791 887q-60 60-140 94.5T480 1016ZM200 802V351q-38 47-59 104t-21 121q0 65 21 122t59 104Zm54-506h452q-47-38-104-59t-122-21q-65 0-122 21t-104 59Zm226 381 151-301H330l150 301Zm40 99h160V456L520 776Zm-240 0h160L280 456v320Zm200 160q64 0 121.5-21T706 856H254q47 38 104.5 59T480 936Zm280-134q38-47 59-104t21-122q0-64-21-121t-59-104v451Z"/></svg>`}var $=class extends D(k){constructor(){super(...arguments);this.showFocusRing=!1;this.menuOpen=!1}render(){return h`<header><section class="start"><md-standard-icon-button toggle .selected="${ft(m.value)}" @click="${this.onClick}" @input="${e=>{m.value=e.target.selected}}"><span><md-icon>menu</md-icon></span><span slot="selectedIcon"><md-icon>menu_open</md-icon></span></md-standard-icon-button><md-standard-icon-button href="/">${Lt()}</md-standard-icon-button></section><a href="/" @blur="${this.onBlur}">Material Web<md-focus-ring .visible="${this.showFocusRing}"></md-focus-ring></a><section class="end"><lit-island on:interaction="pointerenter,focusin,pointerdown" import="/js/hydration-entrypoints/menu.js" id="menu-island"><md-menu .anchor="${this.palleteButton}" menu-corner="START_END" anchor-corner="END_END" stay-open-on-focusout .open="${this.menuOpen}" @closed="${this.onMenuClosed}"><theme-changer></theme-changer></md-menu><md-standard-icon-button @click="${this.onPaletteClick}"><md-icon>palette</md-icon></md-standard-icon-button></lit-island></section></header>`}onClick(){m.subscribe}async onBlur(){this.showFocusRing=!1}onPaletteClick(){this.menuOpen=!0,T.value=!0,L.value=!0,m.value=!1}onMenuClosed(){this.menuOpen=!1,T.value=!1,L.value=!1}};$.styles=w`:host,header{display:block;height:var(--top-app-bar-height);padding:var(--top-app-bar-padding-block) 8px}header{position:fixed;inset:0 0 auto 0;padding-block-start:var(--top-app-bar-padding-block);background-color:var(--top-app-bar-color-background,var(--md-sys-color-background));color:var(--top-app-bar-color-on-background,var(--md-sys-color-on-background));transition:background .3s linear;z-index:12;display:flex;align-items:center}:host(.is-sticky) header{background-color:var(--top-app-bar-color-background,var(--md-sys-color-surface-container-highest));color:var(--top-app-bar-color-on-background,var(--md-sys-color-on-surface-container))}md-standard-icon-button:not(:defined){width:40px;height:40px;display:flex;visibility:hidden}md-standard-icon-button *{display:block}a{color:var(--md-sys-color-primary);font-size:var(--md-sys-typescale-title-large-size,22px);text-decoration:none;padding-inline:12px;position:relative;outline:0;vertical-align:middle}.start md-standard-icon-button[toggle]{display:none}.start md-standard-icon-button[href] *{color:var(--md-sys-color-primary)}.end{flex-grow:1;display:flex;justify-content:flex-end}#menu-island{position:relative}@media (max-width:900px){.start md-standard-icon-button[href]{display:none}.start md-standard-icon-button[toggle]{display:flex}}@media (forced-colors:active){header{border-block-end:1px solid CanvasText}}`,b([x()],$.prototype,"showFocusRing",2),b([x()],$.prototype,"menuOpen",2),b([lt(".end md-standard-icon-button")],$.prototype,"palleteButton",2),$=b([C("top-app-bar")],$);
