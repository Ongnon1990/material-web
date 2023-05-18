import"../chunk-HICTBDKV.js";import"../chunk-2OZZ2C3J.js";import{a as nt}from"../chunk-UBLT4ER7.js";import{c as rt}from"../chunk-SC3Z35TP.js";import{a as at,b as lt}from"../chunk-7APOB5SJ.js";import"../chunk-FW2K5BAH.js";import{b as Z}from"../chunk-WHNABECT.js";import"../chunk-TZANKL32.js";import{c as it,e as g,f as ot,g as $,i as st,n as x,o as N}from"../chunk-6RJU4KXO.js";import{a as v,d as u,g as m,h as E,i as B}from"../chunk-XCNF2U7M.js";import{a as h}from"../chunk-32HEDUCQ.js";function q(){throw new Error("Cycle detected")}function K(){if(_>1)_--;else{for(var i,t=!1;O!==void 0;){var e=O;for(O=void 0,X++;e!==void 0;){var o=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&ct(e))try{e.c()}catch(s){t||(i=s,t=!0)}e=o}}if(X=0,_--,t)throw i}}var l=void 0,O=void 0,_=0,X=0,R=0;function dt(i){if(l!==void 0){var t=i.n;if(t===void 0||t.t!==l)return t={i:0,S:i,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:t},l.s!==void 0&&(l.s.n=t),l.s=t,i.n=t,32&l.f&&i.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=l.s,t.n=void 0,l.s.n=t,l.s=t),t}}function d(i){this.v=i,this.i=0,this.n=void 0,this.t=void 0}d.prototype.h=function(){return!0};d.prototype.S=function(i){this.t!==i&&i.e===void 0&&(i.x=this.t,this.t!==void 0&&(this.t.e=i),this.t=i)};d.prototype.U=function(i){if(this.t!==void 0){var t=i.e,e=i.x;t!==void 0&&(t.x=e,i.e=void 0),e!==void 0&&(e.e=t,i.x=void 0),i===this.t&&(this.t=e)}};d.prototype.subscribe=function(i){var t=this;return Y(function(){var e=t.value,o=32&this.f;this.f&=-33;try{i(e)}finally{this.f|=o}})};d.prototype.valueOf=function(){return this.value};d.prototype.toString=function(){return this.value+""};d.prototype.toJSON=function(){return this.value};d.prototype.peek=function(){return this.v};Object.defineProperty(d.prototype,"value",{get:function(){var i=dt(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(l instanceof y&&function(){throw new Error("Computed cannot have side-effects")}(),i!==this.v){X>100&&q(),this.v=i,this.i++,R++,_++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{K()}}}});function w(i){return new d(i)}function ct(i){for(var t=i.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function ht(i){for(var t=i.s;t!==void 0;t=t.n){var e=t.S.n;if(e!==void 0&&(t.r=e),t.S.n=t,t.i=-1,t.n===void 0){i.s=t;break}}}function pt(i){for(var t=i.s,e=void 0;t!==void 0;){var o=t.p;t.i===-1?(t.S.U(t),o!==void 0&&(o.n=t.n),t.n!==void 0&&(t.n.p=o)):e=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=o}i.s=e}function y(i){d.call(this,void 0),this.x=i,this.s=void 0,this.g=R-1,this.f=4}(y.prototype=new d).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===R))return!0;if(this.g=R,this.f|=1,this.i>0&&!ct(this))return this.f&=-2,!0;var i=l;try{ht(this),l=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return l=i,pt(this),this.f&=-2,!0};y.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}d.prototype.S.call(this,i)};y.prototype.U=function(i){if(this.t!==void 0&&(d.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};y.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};y.prototype.peek=function(){if(this.h()||q(),16&this.f)throw this.v;return this.v};Object.defineProperty(y.prototype,"value",{get:function(){1&this.f&&q();var i=dt(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function ut(i){var t=i.u;if(i.u=void 0,typeof t=="function"){_++;var e=l;l=void 0;try{t()}catch(o){throw i.f&=-2,i.f|=8,W(i),o}finally{l=e,K()}}}function W(i){for(var t=i.s;t!==void 0;t=t.n)t.S.U(t);i.x=void 0,i.s=void 0,ut(i)}function Ct(i){if(l!==this)throw new Error("Out-of-order effect");pt(this),l=i,this.f&=-2,8&this.f&&W(this),K()}function P(i){this.x=i,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}P.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{i()}};P.prototype.S=function(){1&this.f&&q(),this.f|=1,this.f&=-9,ut(this),ht(this),_++;var i=l;return l=this,Ct.bind(this,i)};P.prototype.N=function(){2&this.f||(this.f|=2,this.o=O,O=this)};P.prototype.d=function(){this.f|=8,1&this.f||W(this)};function Y(i){var t=new P(i);try{t.c()}catch(e){throw t.d(),e}return t.d.bind(t)}function F(i){return class extends i{performUpdate(){this.isUpdatePending&&(this._disposeEffect?.(),this._disposeEffect=Y(()=>{this.isUpdatePending=!0,super.performUpdate()}))}}}var c=w(!1);var M=w(!1),I=w(!1);var T=(i,t)=>{var e,o;let s=i._$AN;if(s===void 0)return!1;for(let r of s)(o=(e=r)._$AO)===null||o===void 0||o.call(e,t,!1),T(r,t);return!0},U=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},ft=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Et(t)}};function kt(i){this._$AN!==void 0?(U(this),this._$AM=i,ft(this)):this._$AM=i}function $t(i,t=!1,e=0){let o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(o))for(let r=e;r<o.length;r++)T(o[r],!1),U(o[r]);else o!=null&&(T(o,!1),U(o));else T(this,i)}var Et=i=>{var t,e,o,s;i.type==m.CHILD&&((t=(o=i)._$AP)!==null&&t!==void 0||(o._$AP=$t),(e=(s=i)._$AQ)!==null&&e!==void 0||(s._$AQ=kt))},A=class extends B{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),ft(this),this.isConnected=t._$AU}_$AO(t,e=!0){var o,s;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)===null||o===void 0||o.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),e&&(T(this,t),U(this))}setValue(t){if(rt(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var V=new WeakMap;var vt=0,Q=new Map,mt=new WeakSet,G=()=>new Promise(i=>requestAnimationFrame(i));var J=[{opacity:0}];var tt=[{opacity:0},{opacity:1}];var yt=(i,t)=>{let e=i-t;return e===0?void 0:e},bt=(i,t)=>{let e=i/t;return e===1?void 0:e},D={left:(i,t)=>{let e=yt(i,t);return{value:e,transform:e&&`translateX(${e}px)`}},top:(i,t)=>{let e=yt(i,t);return{value:e,transform:e&&`translateY(${e}px)`}},width:(i,t)=>{let e=bt(i,t);return{value:e,transform:e&&`scaleX(${e})`}},height:(i,t)=>{let e=bt(i,t);return{value:e,transform:e&&`scaleY(${e})`}}},xt={duration:333,easing:"ease-in-out"},_t=["left","top","width","height","opacity","color","background"],gt=new WeakMap,L=class extends A{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===m.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;(t=this.resolveFinished)===null||t===void 0||t.call(this),this.finished=new Promise(e=>{this.h=e})}async resolveFinished(){var t;(t=this.h)===null||t===void 0||t.call(this),this.h=void 0}render(t){return u}getController(){return V.get(this.l)}isDisabled(){var t;return this.options.disabled||((t=this.getController())===null||t===void 0?void 0:t.disabled)}update(t,[e]){var o;let s=this.l===void 0;return s&&(this.l=(o=t.options)===null||o===void 0?void 0:o.host,this.l.addController(this),this.element=t.element,gt.set(this.element,this)),this.optionsOrCallback=e,(s||typeof e!="function")&&this.u(e),this.render(e)}u(t){var e,o;t=t??{};let s=this.getController();s!==void 0&&((t={...s.defaultOptions,...t}).keyframeOptions={...s.defaultOptions.keyframeOptions,...t.keyframeOptions}),(e=(o=t).properties)!==null&&e!==void 0||(o.properties=_t),this.options=t}v(){let t={},e=this.element.getBoundingClientRect(),o=getComputedStyle(this.element);return this.options.properties.forEach(s=>{var r;let n=(r=e[s])!==null&&r!==void 0?r:D[s]?void 0:o[s],a=Number(n);t[s]=isNaN(a)?n+"":a}),t}p(){let t,e=!0;return this.options.guard&&(t=this.options.guard(),e=((o,s)=>{if(Array.isArray(o)){if(Array.isArray(s)&&s.length===o.length&&o.every((r,n)=>r===s[n]))return!1}else if(s===o)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&e&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;typeof this.optionsOrCallback=="function"&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=(t=this.t)!==null&&t!==void 0?t:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await G;let e=this._(),o=this.A(this.options.keyframeOptions,e),s=this.v();if(this.g!==void 0){let{from:r,to:n}=this.O(this.g,s,e);this.log("measured",[this.g,s,r,n]),t=this.calculateKeyframes(r,n)}else{let r=Q.get(this.options.inId);if(r){Q.delete(this.options.inId);let{from:n,to:a}=this.O(r,s,e);t=this.calculateKeyframes(n,a),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,vt++,t.forEach(b=>b.zIndex=vt)}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,o)}resetStyles(){var t;this.P!==void 0&&(this.element.setAttribute("style",(t=this.P)!==null&&t!==void 0?t:""),this.P=void 0)}commitStyles(){var t,e;this.P=this.element.getAttribute("style"),(t=this.webAnimation)===null||t===void 0||t.commitStyles(),(e=this.webAnimation)===null||e===void 0||e.cancel()}reconnected(){}async disconnected(){var t;if(!this.o||(this.options.id!==void 0&&Q.set(this.options.id,this.g),this.options.out===void 0))return;if(this.prepare(),await G(),(t=this.t)===null||t===void 0?void 0:t.isConnected){let o=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,o),this.options.stabilizeOut){let s=this.v();this.log("stabilizing out");let r=this.g.left-s.left,n=this.g.top-s.top;getComputedStyle(this.element).position!=="static"||r===0&&n===0||(this.element.style.position="relative"),r!==0&&(this.element.style.left=r+"px"),n!==0&&(this.element.style.top=n+"px")}}let e=this.A(this.options.keyframeOptions);await this.animate(this.options.out,e),this.element.remove()}prepare(){this.createFinished()}start(){var t,e;(e=(t=this.options).onStart)===null||e===void 0||e.call(t,this)}didFinish(t){var e,o;t&&((o=(e=this.options).onComplete)===null||o===void 0||o.call(e,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}_(){let t=[];for(let e=this.element.parentNode;e;e=e?.parentNode){let o=gt.get(e);o&&!o.isDisabled()&&o&&t.push(o)}return t}get isHostRendered(){let t=mt.has(this.l);return t||this.l.updateComplete.then(()=>{mt.add(this.l)}),t}A(t,e=this._()){let o={...xt};return e.forEach(s=>Object.assign(o,s.options.keyframeOptions)),Object.assign(o,t),o}O(t,e,o){t={...t},e={...e};let s=o.map(a=>a.animatingProperties).filter(a=>a!==void 0),r=1,n=1;return s!==void 0&&(s.forEach(a=>{a.width&&(r/=a.width),a.height&&(n/=a.height)}),t.left!==void 0&&e.left!==void 0&&(t.left=r*t.left,e.left=r*e.left),t.top!==void 0&&e.top!==void 0&&(t.top=n*t.top,e.top=n*e.top)),{from:t,to:e}}calculateKeyframes(t,e,o=!1){var s;let r={},n={},a=!1,b={};for(let f in e){let C=t[f],k=e[f];if(f in D){let St=D[f];if(C===void 0||k===void 0)continue;let H=St(C,k);H.transform!==void 0&&(b[f]=H.value,a=!0,r.transform=`${(s=r.transform)!==null&&s!==void 0?s:""} ${H.transform}`)}else C!==k&&C!==void 0&&k!==void 0&&(a=!0,r[f]=C,n[f]=k)}return r.transformOrigin=n.transformOrigin=o?"center center":"top left",this.animatingProperties=b,a?[r,n]:void 0}async animate(t,e=this.options.keyframeOptions){this.start(),this.frames=t;let o=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),t!==void 0)){this.log("animate",[t,e]),o=!0,this.webAnimation=this.element.animate(t,e);let s=this.getController();s?.add(this);try{await this.webAnimation.finished}catch{}s?.remove(this)}return this.didFinish(o),o}isAnimating(){var t,e;return((t=this.webAnimation)===null||t===void 0?void 0:t.playState)==="running"||((e=this.webAnimation)===null||e===void 0?void 0:e.pending)}log(t,e){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,e)}},z=E(L);var Pt=["top","right","bottom","left"],j=class extends A{constructor(t){if(super(t),t.type!==m.ELEMENT)throw Error("The `position` directive must be used in attribute position.")}render(t,e){return u}update(t,[e,o]){var s;return this.l===void 0&&(this.l=(s=t.options)===null||s===void 0?void 0:s.host,this.l.addController(this)),this.j=t.element,this.S=e,this.C=o??["left","top","width","height"],this.render(e,o)}hostUpdated(){this.F()}F(){var t,e;let o=typeof this.S=="function"?this.S():(t=this.S)===null||t===void 0?void 0:t.value,s=o.offsetParent;if(o===void 0||!s)return;let r=o.getBoundingClientRect(),n=s.getBoundingClientRect();(e=this.C)===null||e===void 0||e.forEach(a=>{let b=Pt.includes(a)?r[a]-n[a]:r[a];this.j.style[a]=b+"px"})}},Mt=E(j);var S=class extends F(N){constructor(){super(...arguments);this.isMobile=!1}render(){let e=this.isMobile&&c.value,o=500,s=300,r=150;return v`
      <div class="root">
        <slot name="top-app-bar"></slot>
        <div class="body  ${c.value?"open":""}">
          <div class="spacer" ?inert=${I.value}>
            ${e?v`<div
                  class="scrim"
                  @click=${this.onScrimClick}
                  ${z({properties:["opacity"],keyframeOptions:{duration:150,easing:"linear"},in:tt,out:J})}
                ></div>`:u}
            <aside
              ?inert=${this.isMobile&&!c.value}
              ${z({properties:["transform"],keyframeOptions:{duration:e?o:r,easing:e?Z.EMPHASIZED:Z.EMPHASIZED_ACCELERATE}})}
            >
              <slot
                ${z({properties:["opacity"],keyframeOptions:{duration:e?s:r,easing:"linear"}})}
              ></slot>
            </aside>
          </div>
          <div class="content" ?inert=${e||M.value}>
            <slot name="app-content"></slot>
          </div>
        </div>
      </div>
    `}onScrimClick(){c.value=!1}firstUpdated(){let e=window.matchMedia("(max-width: 900px)");this.isMobile=e.matches,e.addEventListener("change",o=>{this.isMobile=o.matches})}};S.styles=x`
    :host {
      --_max-width: 1760px;
      --_drawer-width: var(--drawer-width, 300px);
      --_item-border-radius: var(--md-dialog-container-shape, 28px);
      --_border-radius: calc(var(--_item-border-radius) + 12px);
      --_content-padding: 24px;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
    }

    ::slotted(*) {
      --md-list-item-list-item-container-shape: var(--_item-border-radius);
      --md-focus-ring-shape: var(--_item-border-radius);
    }

    .body {
      display: flex;
      flex-grow: 1;
    }

    .spacer {
      position: relative;
      transition: min-width 0.5s cubic-bezier(0.3, 0, 0, 1);
    }

    .spacer,
    aside {
      min-width: var(--_drawer-width);
      max-width: var(--_drawer-width);
    }

    .content {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      padding-inline: var(--_content-padding);
      max-width: calc(100vw - var(--_drawer-width));
    }

    .content slot {
      display: block;
      width: 100%;
      max-width: min(100%, var(--_max-width));
    }

    aside {
      transition: transform 0.5s cubic-bezier(0.3, 0, 0, 1);
      position: fixed;
      isolation: isolate;
      inset: calc(
          var(--top-app-bar-height) + 2 * var(--top-app-bar-padding-block)
        )
        0 0 0;
      z-index: 12;
      border-radius: 0 var(--_border-radius) var(--_border-radius) 0;
      background-color: var(--md-sys-color-surface);
    }

    aside slot {
      display: block;
    }

    .scrim {
      background-color: var(--md-dialog-scrim-color, rgba(0, 0, 0, 0.32));
    }

    @media (max-width: 600px) {
      :host {
        --_content-padding: 8px;
      }
    }

    @media (max-width: 900px) {
      .spacer {
        min-width: 0px;
      }

      .content {
        max-width: 100vw;
        padding-inline: var(--_content-padding);
      }

      .scrim {
        position: fixed;
        inset: 0;
      }

      aside {
        transition: unset;
        transform: translateX(-100%);
      }

      .open aside {
        transform: translateX(0);
      }

      aside slot {
        opacity: 0;
      }

      .open aside slot {
        opacity: 1;
      }

      .open .scrim {
        inset: 0;
        z-index: 11;
      }

      .root:has(.open) {
        --top-app-bar-color-background: var(--md-sys-color-surface-variant);
        --top-app-bar-color-on-background: var(
          --md-sys-color-on-surface-variant
        );
      }
    }

    @media (forced-colors: active) {
      aside {
        box-sizing: border-box;
        border: 1px solid CanvasText;
      }
    }
  `,h([$()],S.prototype,"isMobile",2),S=h([g("nav-drawer")],S);var wt=x`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-color: var(--md-icon-button-selected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-opacity: var(--md-icon-button-selected-focus-state-layer-opacity, 0.12);--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-color: var(--md-icon-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-opacity: var(--md-icon-button-unselected-focus-state-layer-opacity, 0.12);--_unselected-hover-icon-color: var(--md-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-opacity: var(--md-icon-button-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-color: var(--md-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-opacity: var(--md-icon-button-unselected-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-focus-ring-shape: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-focus-color:var(--_unselected-focus-state-layer-color);--md-ripple-focus-opacity:var(--_unselected-focus-state-layer-opacity);--md-ripple-hover-color:var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity:var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_unselected-pressed-state-layer-opacity);--md-ripple-shape:var(--_state-layer-shape)}.standard:hover{color:var(--_unselected-hover-icon-color)}.standard:focus{color:var(--_unselected-focus-icon-color)}.standard:active{color:var(--_unselected-pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-focus-color:var(--_selected-focus-state-layer-color);--md-ripple-focus-opacity:var(--_selected-focus-state-layer-opacity);--md-ripple-hover-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity:var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;var et=class extends at{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};et.styles=[lt,wt];et=it([g("md-standard-icon-button")],et);function At(i=""){return v`<svg
    slot=${i||u}
    viewBox="0 96 960 960"
    fill="currentColor"
  >
    <path
      d="M480 1016q-91 0-171-34.5T169 887q-60-60-94.5-140T40 576q0-91 34.5-171T169 265q60-60 140-94.5T480 136q91 0 171 34.5T791 265q60 60 94.5 140T920 576q0 91-34.5 171T791 887q-60 60-140 94.5T480 1016ZM200 802V351q-38 47-59 104t-21 121q0 65 21 122t59 104Zm54-506h452q-47-38-104-59t-122-21q-65 0-122 21t-104 59Zm226 381 151-301H330l150 301Zm40 99h160V456L520 776Zm-240 0h160L280 456v320Zm200 160q64 0 121.5-21T706 856H254q47 38 104.5 59T480 936Zm280-134q38-47 59-104t21-122q0-64-21-121t-59-104v451Z"
    />
  </svg>`}var p=class extends F(N){constructor(){super(...arguments);this.showFocusRing=!1;this.menuOpen=!1;this.baseURI=""}render(){return v`
      <header>
        <div class="default-content">
          <section class="start">
            <md-standard-icon-button
              toggle
              class="menu-button"
              .selected=${nt(c.value)}
              @click=${this.onClick}
              @input=${e=>{c.value=e.target.selected}}
            >
              <span><md-icon>menu</md-icon></span>
              <span slot="selectedIcon"><md-icon>menu_open</md-icon></span>
            </md-standard-icon-button>
            <md-standard-icon-button href="/material-web/" class="home-button">
              ${At()}
            </md-standard-icon-button>
          </section>
          <a href="/material-web/" @blur=${this.onBlur}>
            Material Web
            <md-focus-ring .visible=${this.showFocusRing}></md-focus-ring>
          </a>

          <section class="end">
            <lit-island
              on:interaction="pointerenter,focusin,pointerdown"
              import="/material-web/js/hydration-entrypoints/menu.js"
              id="menu-island"
            >
              <md-menu
                .anchor=${this.palleteButton}
                menu-corner="START_END"
                anchor-corner="END_END"
                stay-open-on-focusout
                .open=${this.menuOpen}
                @closed=${this.onMenuClosed}
              >
                <theme-changer></theme-changer>
              </md-menu>
              <md-standard-icon-button @click="${this.onPaletteClick}">
                <md-icon>palette</md-icon>
              </md-standard-icon-button>
            </lit-island>
          </section>
        </div>
        <slot></slot>
      </header>
    `}onClick(){c.subscribe}async onBlur(){this.showFocusRing=!1}onPaletteClick(){this.menuOpen=!0,M.value=!0,I.value=!0,c.value=!1}onMenuClosed(){this.menuOpen=!1,M.value=!1,I.value=!1}};p.styles=x`
    :host,
    header {
      display: block;
      height: var(--top-app-bar-height);
      padding: var(--top-app-bar-padding-block) 8px;
    }

    header {
      position: fixed;
      inset: 0 0 auto 0;
      padding-block-start: var(--top-app-bar-padding-block);
      background-color: var(
        --top-app-bar-color-background,
        var(--md-sys-color-background)
      );
      color: var(
        --top-app-bar-color-on-background,
        var(--md-sys-color-on-background)
      );
      transition: background 0.3s linear;
      z-index: 12;
    }

    .default-content {
      display: flex;
      align-items: center;
    }

    :host(.is-sticky) header {
      background-color: var(
        --top-app-bar-color-background,
        var(--md-sys-color-surface-container-highest)
      );
      color: var(
        --top-app-bar-color-on-background,
        var(--md-sys-color-on-surface-container)
      );
    }

    md-standard-icon-button:not(:defined) {
      width: 40px;
      height: 40px;
      display: flex;
      visibility: hidden;
    }

    md-standard-icon-button * {
      display: block;
    }

    a {
      color: var(--md-sys-color-primary);
      font-size: max(var(--catalog-title-l-font-size), 22px);
      text-decoration: none;
      padding-inline: 12px;
      position: relative;
      outline: none;
      vertical-align: middle;
    }

    .start .menu-button {
      display: none;
    }

    .start .home-button * {
      color: var(--md-sys-color-primary);
    }

    .end {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
    }

    #menu-island {
      position: relative;
    }

    @media (max-width: 900px) {
      .start .home-button {
        display: none;
      }

      .start .menu-button {
        display: flex;
      }
    }

    @media (forced-colors: active) {
      header {
        border-block-end: 1px solid CanvasText;
      }
    }
  `,h([$()],p.prototype,"showFocusRing",2),h([$()],p.prototype,"menuOpen",2),h([ot()],p.prototype,"baseURI",2),h([st(".end md-standard-icon-button")],p.prototype,"palleteButton",2),p=h([g("top-app-bar")],p);
