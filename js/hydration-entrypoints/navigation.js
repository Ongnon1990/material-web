import"../chunk-HICTBDKV.js";import{a as vt}from"../chunk-UBLT4ER7.js";import{a as ut,b as ft}from"../chunk-BOEKVLLC.js";import{a as pt,b as J,e as B}from"../chunk-VOP3EFYU.js";import"../chunk-TZANKL32.js";import{c as d,e as g,f as h,g as S,i as D,k as mt,n as u,o as k,p as z}from"../chunk-6RJU4KXO.js";import{c as ht}from"../chunk-SC3Z35TP.js";import{a as c,d as m,g as x,h as P,i as Q}from"../chunk-XCNF2U7M.js";import{a as b}from"../chunk-32HEDUCQ.js";var M=(e,t)=>{var i,o;let s=e._$AN;if(s===void 0)return!1;for(let r of s)(o=(i=r)._$AO)===null||o===void 0||o.call(i,t,!1),M(r,t);return!0},H=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},gt=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),qt(t)}};function Lt(e){this._$AN!==void 0?(H(this),this._$AM=e,gt(this)):this._$AM=e}function Ut(e,t=!1,i=0){let o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(o))for(let r=i;r<o.length;r++)M(o[r],!1),H(o[r]);else o!=null&&(M(o,!1),H(o));else M(this,e)}var qt=e=>{var t,i,o,s;e.type==x.CHILD&&((t=(o=e)._$AP)!==null&&t!==void 0||(o._$AP=Ut),(i=(s=e)._$AQ)!==null&&i!==void 0||(s._$AQ=Lt))},C=class extends Q{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),gt(this),this.isConnected=t._$AU}_$AO(t,i=!0){var o,s;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)===null||o===void 0||o.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),i&&(M(this,t),H(this))}setValue(t){if(ht(this._$Ct))this._$Ct._$AI(t,this);else{let i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}};var tt=new WeakMap;var yt=0,it=new Map,bt=new WeakSet,et=()=>new Promise(e=>requestAnimationFrame(e));var ot=[{opacity:0}];var st=[{opacity:0},{opacity:1}];var xt=(e,t)=>{let i=e-t;return i===0?void 0:i},_t=(e,t)=>{let i=e/t;return i===1?void 0:i},Z={left:(e,t)=>{let i=xt(e,t);return{value:i,transform:i&&`translateX(${i}px)`}},top:(e,t)=>{let i=xt(e,t);return{value:i,transform:i&&`translateY(${i}px)`}},width:(e,t)=>{let i=_t(e,t);return{value:i,transform:i&&`scaleX(${i})`}},height:(e,t)=>{let i=_t(e,t);return{value:i,transform:i&&`scaleY(${i})`}}},$t={duration:333,easing:"ease-in-out"},St=["left","top","width","height","opacity","color","background"],wt=new WeakMap,K=class extends C{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===x.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;(t=this.resolveFinished)===null||t===void 0||t.call(this),this.finished=new Promise(i=>{this.h=i})}async resolveFinished(){var t;(t=this.h)===null||t===void 0||t.call(this),this.h=void 0}render(t){return m}getController(){return tt.get(this.l)}isDisabled(){var t;return this.options.disabled||((t=this.getController())===null||t===void 0?void 0:t.disabled)}update(t,[i]){var o;let s=this.l===void 0;return s&&(this.l=(o=t.options)===null||o===void 0?void 0:o.host,this.l.addController(this),this.element=t.element,wt.set(this.element,this)),this.optionsOrCallback=i,(s||typeof i!="function")&&this.u(i),this.render(i)}u(t){var i,o;t=t??{};let s=this.getController();s!==void 0&&((t={...s.defaultOptions,...t}).keyframeOptions={...s.defaultOptions.keyframeOptions,...t.keyframeOptions}),(i=(o=t).properties)!==null&&i!==void 0||(o.properties=St),this.options=t}v(){let t={},i=this.element.getBoundingClientRect(),o=getComputedStyle(this.element);return this.options.properties.forEach(s=>{var r;let a=(r=i[s])!==null&&r!==void 0?r:Z[s]?void 0:o[s],n=Number(a);t[s]=isNaN(n)?a+"":n}),t}p(){let t,i=!0;return this.options.guard&&(t=this.options.guard(),i=((o,s)=>{if(Array.isArray(o)){if(Array.isArray(s)&&s.length===o.length&&o.every((r,a)=>r===s[a]))return!1}else if(s===o)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&i&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;typeof this.optionsOrCallback=="function"&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=(t=this.t)!==null&&t!==void 0?t:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await et;let i=this._(),o=this.A(this.options.keyframeOptions,i),s=this.v();if(this.g!==void 0){let{from:r,to:a}=this.O(this.g,s,i);this.log("measured",[this.g,s,r,a]),t=this.calculateKeyframes(r,a)}else{let r=it.get(this.options.inId);if(r){it.delete(this.options.inId);let{from:a,to:n}=this.O(r,s,i);t=this.calculateKeyframes(a,n),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,yt++,t.forEach($=>$.zIndex=yt)}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,o)}resetStyles(){var t;this.P!==void 0&&(this.element.setAttribute("style",(t=this.P)!==null&&t!==void 0?t:""),this.P=void 0)}commitStyles(){var t,i;this.P=this.element.getAttribute("style"),(t=this.webAnimation)===null||t===void 0||t.commitStyles(),(i=this.webAnimation)===null||i===void 0||i.cancel()}reconnected(){}async disconnected(){var t;if(!this.o||(this.options.id!==void 0&&it.set(this.options.id,this.g),this.options.out===void 0))return;if(this.prepare(),await et(),(t=this.t)===null||t===void 0?void 0:t.isConnected){let o=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,o),this.options.stabilizeOut){let s=this.v();this.log("stabilizing out");let r=this.g.left-s.left,a=this.g.top-s.top;getComputedStyle(this.element).position!=="static"||r===0&&a===0||(this.element.style.position="relative"),r!==0&&(this.element.style.left=r+"px"),a!==0&&(this.element.style.top=a+"px")}}let i=this.A(this.options.keyframeOptions);await this.animate(this.options.out,i),this.element.remove()}prepare(){this.createFinished()}start(){var t,i;(i=(t=this.options).onStart)===null||i===void 0||i.call(t,this)}didFinish(t){var i,o;t&&((o=(i=this.options).onComplete)===null||o===void 0||o.call(i,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}_(){let t=[];for(let i=this.element.parentNode;i;i=i?.parentNode){let o=wt.get(i);o&&!o.isDisabled()&&o&&t.push(o)}return t}get isHostRendered(){let t=bt.has(this.l);return t||this.l.updateComplete.then(()=>{bt.add(this.l)}),t}A(t,i=this._()){let o={...$t};return i.forEach(s=>Object.assign(o,s.options.keyframeOptions)),Object.assign(o,t),o}O(t,i,o){t={...t},i={...i};let s=o.map(n=>n.animatingProperties).filter(n=>n!==void 0),r=1,a=1;return s!==void 0&&(s.forEach(n=>{n.width&&(r/=n.width),n.height&&(a/=n.height)}),t.left!==void 0&&i.left!==void 0&&(t.left=r*t.left,i.left=r*i.left),t.top!==void 0&&i.top!==void 0&&(t.top=a*t.top,i.top=a*i.top)),{from:t,to:i}}calculateKeyframes(t,i,o=!1){var s;let r={},a={},n=!1,$={};for(let y in i){let I=t[y],R=i[y];if(y in Z){let Mt=Z[y];if(I===void 0||R===void 0)continue;let V=Mt(I,R);V.transform!==void 0&&($[y]=V.value,n=!0,r.transform=`${(s=r.transform)!==null&&s!==void 0?s:""} ${V.transform}`)}else I!==R&&I!==void 0&&R!==void 0&&(n=!0,r[y]=I,a[y]=R)}return r.transformOrigin=a.transformOrigin=o?"center center":"top left",this.animatingProperties=$,n?[r,a]:void 0}async animate(t,i=this.options.keyframeOptions){this.start(),this.frames=t;let o=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),t!==void 0)){this.log("animate",[t,i]),o=!0,this.webAnimation=this.element.animate(t,i);let s=this.getController();s?.add(this);try{await this.webAnimation.finished}catch{}s?.remove(this)}return this.didFinish(o),o}isAnimating(){var t,i;return((t=this.webAnimation)===null||t===void 0?void 0:t.playState)==="running"||((i=this.webAnimation)===null||i===void 0?void 0:i.pending)}log(t,i){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,i)}},L=P(K);var Nt=["top","right","bottom","left"],X=class extends C{constructor(t){if(super(t),t.type!==x.ELEMENT)throw Error("The `position` directive must be used in attribute position.")}render(t,i){return m}update(t,[i,o]){var s;return this.l===void 0&&(this.l=(s=t.options)===null||s===void 0?void 0:s.host,this.l.addController(this)),this.j=t.element,this.S=i,this.C=o??["left","top","width","height"],this.render(i,o)}hostUpdated(){this.F()}F(){var t,i;let o=typeof this.S=="function"?this.S():(t=this.S)===null||t===void 0?void 0:t.value,s=o.offsetParent;if(o===void 0||!s)return;let r=o.getBoundingClientRect(),a=s.getBoundingClientRect();(i=this.C)===null||i===void 0||i.forEach(n=>{let $=Nt.includes(n)?r[n]-a[n]:r[n];this.j.style[n]=$+"px"})}},jt=P(X);function W(){throw new Error("Cycle detected")}function at(){if(A>1)A--;else{for(var e,t=!1;U!==void 0;){var i=U;for(U=void 0,rt++;i!==void 0;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&Ct(i))try{i.c()}catch(s){t||(e=s,t=!0)}i=o}}if(rt=0,A--,t)throw e}}var l=void 0,U=void 0,A=0,rt=0,G=0;function kt(e){if(l!==void 0){var t=e.n;if(t===void 0||t.t!==l)return t={i:0,S:e,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:t},l.s!==void 0&&(l.s.n=t),l.s=t,e.n=t,32&l.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=l.s,t.n=void 0,l.s.n=t,l.s=t),t}}function v(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}v.prototype.h=function(){return!0};v.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};v.prototype.U=function(e){if(this.t!==void 0){var t=e.e,i=e.x;t!==void 0&&(t.x=i,e.e=void 0),i!==void 0&&(i.e=t,e.x=void 0),e===this.t&&(this.t=i)}};v.prototype.subscribe=function(e){var t=this;return lt(function(){var i=t.value,o=32&this.f;this.f&=-33;try{e(i)}finally{this.f|=o}})};v.prototype.valueOf=function(){return this.value};v.prototype.toString=function(){return this.value+""};v.prototype.toJSON=function(){return this.value};v.prototype.peek=function(){return this.v};Object.defineProperty(v.prototype,"value",{get:function(){var e=kt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(l instanceof _&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){rt>100&&W(),this.v=e,this.i++,G++,A++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{at()}}}});function T(e){return new v(e)}function Ct(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function At(e){for(var t=e.s;t!==void 0;t=t.n){var i=t.S.n;if(i!==void 0&&(t.r=i),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Tt(e){for(var t=e.s,i=void 0;t!==void 0;){var o=t.p;t.i===-1?(t.S.U(t),o!==void 0&&(o.n=t.n),t.n!==void 0&&(t.n.p=o)):i=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=o}e.s=i}function _(e){v.call(this,void 0),this.x=e,this.s=void 0,this.g=G-1,this.f=4}(_.prototype=new v).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===G))return!0;if(this.g=G,this.f|=1,this.i>0&&!Ct(this))return this.f&=-2,!0;var e=l;try{At(this),l=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return l=e,Tt(this),this.f&=-2,!0};_.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}v.prototype.S.call(this,e)};_.prototype.U=function(e){if(this.t!==void 0&&(v.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};_.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};_.prototype.peek=function(){if(this.h()||W(),16&this.f)throw this.v;return this.v};Object.defineProperty(_.prototype,"value",{get:function(){1&this.f&&W();var e=kt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Et(e){var t=e.u;if(e.u=void 0,typeof t=="function"){A++;var i=l;l=void 0;try{t()}catch(o){throw e.f&=-2,e.f|=8,nt(e),o}finally{l=i,at()}}}function nt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Et(e)}function Dt(e){if(l!==this)throw new Error("Out-of-order effect");Tt(this),l=e,this.f&=-2,8&this.f&&nt(this),at()}function q(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}q.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};q.prototype.S=function(){1&this.f&&W(),this.f|=1,this.f&=-9,Et(this),At(this),A++;var e=l;return l=this,Dt.bind(this,e)};q.prototype.N=function(){2&this.f||(this.f|=2,this.o=U,U=this)};q.prototype.d=function(){this.f|=8,1&this.f||nt(this)};function lt(e){var t=new q(e);try{t.c()}catch(i){throw t.d(),i}return t.d.bind(t)}function Y(e){return class extends e{performUpdate(){this.isUpdatePending&&(this._disposeEffect?.(),this._disposeEffect=lt(()=>{this.isUpdatePending=!0,super.performUpdate()}))}}}var f=T(!1);var F=T(!1),N=T(!1);var E=class extends Y(k){constructor(){super(...arguments);this.isCollapsible=!1}render(){let i=this.isCollapsible&&f.value,o=i?500:150,s=i?300:150,r=150,a=i?J.EMPHASIZED:J.EMPHASIZED_ACCELERATE;return c`
      <div class="root">
        <slot name="top-app-bar"></slot>
        <div class="body  ${f.value?"open":""}">
          <div class="spacer" ?inert=${N.value}>
            ${i?c`<div
                  class="scrim"
                  @click=${this.onScrimClick}
                  ${L({properties:["opacity"],keyframeOptions:{duration:r,easing:"linear"},in:st,out:ot})}
                ></div>`:m}
            <aside
              ?inert=${this.isCollapsible&&!f.value}
              ${L({properties:["transform"],keyframeOptions:{duration:o,easing:a}})}
            >
              <slot
                ${L({properties:["opacity"],keyframeOptions:{duration:s,easing:"linear"}})}
              ></slot>
            </aside>
          </div>
          <div class="content" ?inert=${i||F.value}>
            <slot name="app-content"></slot>
          </div>
        </div>
      </div>
    `}onScrimClick(){f.value=!1}firstUpdated(){let i=window.matchMedia("(max-width: 1500px)");this.isCollapsible=i.matches,i.addEventListener("change",o=>{this.isCollapsible=o.matches})}};E.styles=u`
    :host {
      --_max-width: 1760px;
      --_drawer-width: var(--catalog-drawer-width, 300px);
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
          var(--catalog-top-app-bar-height) + 2 * var(--catalog-top-app-bar-padding-block)
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

    @media (max-width: 1500px) {
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
  `,b([S()],E.prototype,"isCollapsible",2),E=b([g("nav-drawer")],E);var Ot=u`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-color: var(--md-icon-button-selected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-opacity: var(--md-icon-button-selected-focus-state-layer-opacity, 0.12);--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-color: var(--md-icon-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-opacity: var(--md-icon-button-unselected-focus-state-layer-opacity, 0.12);--_unselected-hover-icon-color: var(--md-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-opacity: var(--md-icon-button-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-color: var(--md-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-opacity: var(--md-icon-button-unselected-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-focus-ring-shape: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-focus-color:var(--_unselected-focus-state-layer-color);--md-ripple-focus-opacity:var(--_unselected-focus-state-layer-opacity);--md-ripple-hover-color:var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity:var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_unselected-pressed-state-layer-opacity);--md-ripple-shape:var(--_state-layer-shape)}.standard:hover{color:var(--_unselected-hover-icon-color)}.standard:focus{color:var(--_unselected-focus-icon-color)}.standard:active{color:var(--_unselected-pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-focus-color:var(--_selected-focus-state-layer-color);--md-ripple-focus-opacity:var(--_selected-focus-state-layer-opacity);--md-ripple-hover-color:var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity:var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;var dt=class extends ut{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};dt.styles=[ft,Ot];dt=d([g("md-standard-icon-button")],dt);function It(e=""){return c`<svg
    slot=${e||m}
    viewBox="0 96 960 960"
    fill="currentColor"
  >
    <path
      d="M480 1016q-91 0-171-34.5T169 887q-60-60-94.5-140T40 576q0-91 34.5-171T169 265q60-60 140-94.5T480 136q91 0 171 34.5T791 265q60 60 94.5 140T920 576q0 91-34.5 171T791 887q-60 60-140 94.5T480 1016ZM200 802V351q-38 47-59 104t-21 121q0 65 21 122t59 104Zm54-506h452q-47-38-104-59t-122-21q-65 0-122 21t-104 59Zm226 381 151-301H330l150 301Zm40 99h160V456L520 776Zm-240 0h160L280 456v320Zm200 160q64 0 121.5-21T706 856H254q47 38 104.5 59T480 936Zm280-134q38-47 59-104t21-122q0-64-21-121t-59-104v451Z"
    />
  </svg>`}var w=class extends Y(k){constructor(){super(...arguments);this.menuOpen=!1}render(){return c`
      <header>
        <div class="default-content">
          <section class="start">
            <md-standard-icon-button
              toggle
              class="menu-button"
              .selected=${vt(f.value)}
              @input=${this.onMenuIconToggle}
            >
              <span><md-icon>menu</md-icon></span>
              <span slot="selectedIcon"><md-icon>menu_open</md-icon></span>
            </md-standard-icon-button>
            <md-standard-icon-button href="/material-web/" class="home-button">
              ${It}
            </md-standard-icon-button>
          </section>

          <a href="/material-web/" id="home-link">
            Material Web
            <md-focus-ring for="home-link"></md-focus-ring>
          </a>

          <section class="end">
            <lit-island
              on:interaction="pointerenter,focusin,pointerdown"
              import="/material-web/js/hydration-entrypoints/menu.js"
              id="menu-island"
            >
              <md-menu
                .anchor=${this.paletteButton}
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
    `}onPaletteClick(){this.menuOpen=!0,F.value=!0,N.value=!0,f.value=!1}onMenuClosed(){this.menuOpen=!1,F.value=!1,N.value=!1}onMenuIconToggle(i){f.value=i.target.selected}};w.styles=u`
    :host,
    header {
      display: block;
      height: var(--catalog-top-app-bar-height);
      padding: var(--catalog-top-app-bar-padding-block) 8px;
    }

    header {
      position: fixed;
      inset: 0 0 auto 0;
      padding-block-start: var(--catalog-top-app-bar-padding-block);
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

    @media (max-width: 1500px) {
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
  `,b([S()],w.prototype,"menuOpen",2),b([D(".end md-standard-icon-button")],w.prototype,"paletteButton",2),w=b([g("top-app-bar")],w);var Rt=u`@media(forced-colors: active){:host{--md-list-item-list-item-disabled-label-text-color: GrayText;--md-list-item-list-item-disabled-label-text-opacity: 1;--md-list-item-list-item-disabled-leading-icon-color: GrayText;--md-list-item-list-item-disabled-leading-icon-opacity: 1;--md-list-item-list-item-disabled-trailing-icon-color: GrayText;--md-list-item-list-item-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;var Pt=u`:host{--_list-item-container-color: var(--md-list-item-list-item-container-color, var(--md-sys-color-surface, #fef7ff));--_list-item-container-shape: var(--md-list-item-list-item-container-shape, 0px);--_list-item-disabled-label-text-color: var(--md-list-item-list-item-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-label-text-opacity: var(--md-list-item-list-item-disabled-label-text-opacity, 0.3);--_list-item-disabled-leading-icon-color: var(--md-list-item-list-item-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-leading-icon-opacity: var(--md-list-item-list-item-disabled-leading-icon-opacity, 0.38);--_list-item-disabled-trailing-icon-color: var(--md-list-item-list-item-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-trailing-icon-opacity: var(--md-list-item-list-item-disabled-trailing-icon-opacity, 0.38);--_list-item-focus-label-text-color: var(--md-list-item-list-item-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-focus-leading-icon-icon-color: var(--md-list-item-list-item-focus-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-focus-state-layer-color: var(--md-list-item-list-item-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-focus-state-layer-opacity: var(--md-list-item-list-item-focus-state-layer-opacity, 0.12);--_list-item-focus-trailing-icon-icon-color: var(--md-list-item-list-item-focus-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-hover-label-text-color: var(--md-list-item-list-item-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-hover-leading-icon-icon-color: var(--md-list-item-list-item-hover-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-hover-state-layer-color: var(--md-list-item-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-hover-state-layer-opacity: var(--md-list-item-list-item-hover-state-layer-opacity, 0.08);--_list-item-hover-trailing-icon-icon-color: var(--md-list-item-list-item-hover-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-label-text-color: var(--md-list-item-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-label-text-line-height: var(--md-list-item-list-item-label-text-line-height, 1.5rem);--_list-item-label-text-type: var(--md-list-item-list-item-label-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_list-item-large-leading-video-height: var(--md-list-item-list-item-large-leading-video-height, 69px);--_list-item-leading-avatar-label-color: var(--md-list-item-list-item-leading-avatar-label-color, var(--md-sys-color-on-primary-container, #21005d));--_list-item-leading-avatar-label-type: var(--md-list-item-list-item-leading-avatar-label-type, var(--md-sys-typescale-title-medium, 500 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_list-item-leading-avatar-color: var(--md-list-item-list-item-leading-avatar-color, var(--md-sys-color-primary-container, #eaddff));--_list-item-leading-avatar-shape: var(--md-list-item-list-item-leading-avatar-shape, 9999px);--_list-item-leading-avatar-size: var(--md-list-item-list-item-leading-avatar-size, 40px);--_list-item-leading-icon-color: var(--md-list-item-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-leading-icon-size: var(--md-list-item-list-item-leading-icon-size, 18px);--_list-item-leading-image-height: var(--md-list-item-list-item-leading-image-height, 56px);--_list-item-leading-image-shape: var(--md-list-item-list-item-leading-image-shape, 0px);--_list-item-leading-image-width: var(--md-list-item-list-item-leading-image-width, 56px);--_list-item-leading-video-shape: var(--md-list-item-list-item-leading-video-shape, 0px);--_list-item-leading-video-width: var(--md-list-item-list-item-leading-video-width, 100px);--_list-item-one-line-container-height: var(--md-list-item-list-item-one-line-container-height, 56px);--_list-item-pressed-label-text-color: var(--md-list-item-list-item-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-pressed-leading-icon-icon-color: var(--md-list-item-list-item-pressed-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-pressed-state-layer-color: var(--md-list-item-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-pressed-state-layer-opacity: var(--md-list-item-list-item-pressed-state-layer-opacity, 0.12);--_list-item-pressed-trailing-icon-icon-color: var(--md-list-item-list-item-pressed-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-small-leading-video-height: var(--md-list-item-list-item-small-leading-video-height, 56px);--_list-item-supporting-text-color: var(--md-list-item-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-supporting-text-type: var(--md-list-item-list-item-supporting-text-type, var(--md-sys-typescale-body-medium, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_list-item-three-line-container-height: var(--md-list-item-list-item-three-line-container-height, 88px);--_list-item-trailing-icon-color: var(--md-list-item-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-trailing-icon-size: var(--md-list-item-list-item-trailing-icon-size, 24px);--_list-item-trailing-supporting-text-color: var(--md-list-item-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-trailing-supporting-text-line-height: var(--md-list-item-list-item-trailing-supporting-text-line-height, 1rem);--_list-item-trailing-supporting-text-type: var(--md-list-item-list-item-trailing-supporting-text-type, var(--md-sys-typescale-label-small, 500 0.688rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_list-item-two-line-container-height: var(--md-list-item-list-item-two-line-container-height, 72px);--_list-item-leading-element-leading-space: var(--md-list-item-list-item-leading-element-leading-space, 16px);--_list-item-leading-space: var(--md-list-item-list-item-leading-space, 16px);--_list-item-leading-video-leading-space: var(--md-list-item-list-item-leading-video-leading-space, 0px);--_list-item-trailing-element-headline-trailing-element-space: var(--md-list-item-list-item-trailing-element-headline-trailing-element-space, 16px);--_list-item-trailing-space: var(--md-list-item-list-item-trailing-space, 16px)}:host{color:unset;--md-focus-ring-offset: -3px;--md-focus-ring-shape: 4px;--md-ripple-hover-color:var(--_list-item-hover-state-layer-color);--md-ripple-hover-opacity:var(--_list-item-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_list-item-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_list-item-pressed-state-layer-opacity);--md-ripple-focus-color:var(--_list-item-focus-state-layer-color);--md-ripple-focus-opacity:var(--_list-item-focus-state-layer-opacity)}.list-item{align-items:center;box-sizing:border-box;display:flex;outline:none;position:relative;width:100%;text-decoration:none;background-color:var(--_list-item-container-color);border-radius:var(--_list-item-container-shape);-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled):not(.noninteractive){cursor:pointer}.list-item.disabled{pointer-events:none}.content-wrapper{display:flex;width:100%;border-radius:inherit}md-ripple{border-radius:inherit}.with-one-line{min-height:var(--_list-item-one-line-container-height)}.with-two-line{min-height:var(--_list-item-two-line-container-height)}.with-three-line{min-height:var(--_list-item-three-line-container-height)}.start{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;flex:0 0 auto;z-index:1}.with-three-line .start{justify-content:start}slot[name=start]::slotted([data-variant=icon]),slot[name=start]::slotted([data-variant=image]),slot[name=start]::slotted([data-variant=avatar]){margin-inline-start:var(--_list-item-leading-element-leading-space)}.body{display:inline-flex;justify-content:center;flex-direction:column;box-sizing:border-box;flex:1 0 0;padding-inline-start:var(--_list-item-leading-space);padding-inline-end:var(--_list-item-trailing-space);z-index:1}.end{display:inline-flex;flex-direction:column;justify-content:center;flex:0 0 auto;z-index:1}.with-three-line .end{justify-content:start}slot[name=end]::slotted(*),.trailing-supporting-text{margin-inline-end:var(--_list-item-trailing-element-headline-trailing-element-space)}.label-text{display:flex;color:var(--_list-item-label-text-color);font:var(--_list-item-label-text-type)}:hover .label-text{color:var(--_list-item-hover-label-text-color)}:focus .label-text{color:var(--_list-item-focus-label-text-color)}:active .label-text{color:var(--_list-item-pressed-label-text-color)}.disabled .label-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.supporting-text{text-overflow:ellipsis;white-space:normal;overflow:hidden;width:100%;color:var(--_list-item-supporting-text-color);font:var(--_list-item-supporting-text-type);-webkit-box-orient:vertical;-webkit-line-clamp:1;display:-webkit-box}.disabled .supporting-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.supporting-text--multi-line{-webkit-line-clamp:2}.trailing-supporting-text{padding-inline-start:16px;font:var(--_list-item-trailing-supporting-text-type)}.list-item:not(.disabled) .trailing-supporting-text{color:var(--_list-item-trailing-supporting-text-color)}.disabled .trailing-supporting-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.with-three-line .trailing-supporting-text{padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-trailing-supporting-text-line-height))/2)}.focus-ring{z-index:1}::slotted([data-variant=image]){display:inline-flex;height:var(--_list-item-leading-image-height);width:var(--_list-item-leading-image-width);border-radius:var(--_list-item-leading-image-shape);padding-block:calc((var(--_list-item-two-line-container-height) - var(--_list-item-leading-image-height))/2)}.with-three-line ::slotted([data-variant=image]){padding-block:0}slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-leading-icon-color);--md-icon-size:var(--_list-item-leading-icon-size)}.with-three-line slot[name=start]::slotted([data-variant=icon]){padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-leading-icon-size))/2)}slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-trailing-icon-color);--md-icon-size:var(--_list-item-trailing-icon-size)}.with-three-line slot[name=end]::slotted([data-variant=icon]){padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-trailing-icon-size))/2)}:hover slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-hover-leading-icon-icon-color)}:hover slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-hover-trailing-icon-icon-color)}:focus slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-focus-leading-icon-icon-color)}:focus slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-focus-trailing-icon-icon-color)}:active slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-pressed-leading-icon-icon-color)}:active slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-pressed-trailing-icon-icon-color)}.disabled slot[name=start]::slotted([data-variant=icon]){opacity:var(--_list-item-disabled-leading-icon-opacity);--md-icon-color:var(--_list-item-disabled-leading-icon-color)}.disabled slot[name=end]::slotted([data-variant=icon]){opacity:var(--_list-item-disabled-trailing-icon-opacity);--md-icon-color:var(--_list-item-disabled-trailing-icon-color)}::slotted([data-variant=avatar]){display:inline-flex;justify-content:center;align-items:center;background-color:var(--_list-item-leading-avatar-color);height:var(--_list-item-leading-avatar-size);width:var(--_list-item-leading-avatar-size);border-radius:var(--_list-item-leading-avatar-shape);color:var(--_list-item-leading-avatar-label-color);font:var(--_list-item-leading-avatar-label-type)}::slotted([data-variant=video]),::slotted([data-variant=video-large]){display:inline-flex;object-fit:cover;height:var(--_list-item-small-leading-video-height);width:var(--_list-item-leading-video-width);border-radius:var(--_list-item-leading-video-shape);margin-inline-start:var(--_list-item-leading-video-leading-space);padding-block:calc((var(--_list-item-three-line-container-height) - var(--_list-item-small-leading-video-height))/2)}.with-three-line ::slotted([data-variant=video]),.with-three-line ::slotted([data-variant=video-large]){padding-block:0}::slotted([data-variant=video-large]){padding-block:calc((var(--_list-item-three-line-container-height) - var(--_list-item-large-leading-video-height))/2);height:var(--_list-item-large-leading-video-height)}/*# sourceMappingURL=list-item-styles.css.map */
`;var zt,p=class extends k{constructor(){super(...arguments),this.headline="",this.supportingText="",this.multiLineSupportingText=!1,this.trailingSupportingText="",this.disabled=!1,this.itemTabIndex=-1,this.active=!1,this.isListItem=!0,this.listItemRole="listitem",this.showRipple=!1,this.focusOnActivation=!0,this.getRipple=()=>(this.showRipple=!0,this.ripple),this.isFirstUpdate=!0}willUpdate(t){t.has("active")&&!this.disabled&&(this.active?this.itemTabIndex=0:this.isFirstUpdate||(this.itemTabIndex=-1))}render(){return this.renderListItem(c`
      <div class="content-wrapper">
        ${this.renderStart()}
        ${this.renderBody()}
        ${this.renderEnd()}
        ${this.renderRipple()}
        ${this.renderFocusRing()}
      </div>`)}renderListItem(t){return c`
      <li
          id="item"
          tabindex=${this.disabled?-1:this.itemTabIndex}
          role=${this.listItemRole}
          aria-selected=${this.ariaSelected||m}
          aria-checked=${this.ariaChecked||m}
          class="list-item ${z(this.getRenderClasses())}"
          @click=${this.onClick}
          @pointerenter=${this.onPointerenter}
          @pointerleave=${this.onPointerleave}
          @keydown=${this.onKeydown}
          ${B(this.getRipple)}>${t}</li>`}renderRipple(){return this.showRipple?c`<md-ripple ?disabled="${this.disabled}"></md-ripple>`:m}renderFocusRing(){return c`<md-focus-ring class="focus-ring" for="item"></md-focus-ring>`}getRenderClasses(){return{"with-one-line":this.supportingText==="","with-two-line":this.supportingText!==""&&!this.multiLineSupportingText,"with-three-line":this.supportingText!==""&&this.multiLineSupportingText,disabled:this.disabled}}renderStart(){return c`<div class="start"><slot name="start"></slot></div>`}renderBody(){let t=this.supportingText!==""?this.renderSupportingText():"";return c`<div class="body"
      ><span class="label-text">${this.headline}</span>${t}</div>`}renderSupportingText(){return c`<span
        class="supporting-text ${z(this.getSupportingTextClasses())}"
      >${this.supportingText}</span>`}getSupportingTextClasses(){return{"supporting-text--multi-line":this.multiLineSupportingText}}renderEnd(){let t=this.trailingSupportingText!==""?this.renderTrailingSupportingText():"";return c`<div class="end"
      ><slot name="end">${t}</slot></div>`}renderTrailingSupportingText(){return c`<span class="trailing-supporting-text"
      >${this.trailingSupportingText}</span>`}updated(t){super.updated(t),t.has("active")&&!this.isFirstUpdate&&this.active&&this.focusOnActivation&&this.focus(),this.isFirstUpdate=!1}focus(){this.listItemRoot?.focus?.()}};zt=p;pt(zt);d([h()],p.prototype,"headline",void 0);d([h()],p.prototype,"supportingText",void 0);d([h({type:Boolean})],p.prototype,"multiLineSupportingText",void 0);d([h()],p.prototype,"trailingSupportingText",void 0);d([h({type:Boolean})],p.prototype,"disabled",void 0);d([h({type:Number})],p.prototype,"itemTabIndex",void 0);d([h({type:Boolean,reflect:!0})],p.prototype,"active",void 0);d([h({type:Boolean,attribute:"md-list-item",reflect:!0})],p.prototype,"isListItem",void 0);d([mt("md-ripple")],p.prototype,"ripple",void 0);d([D(".list-item")],p.prototype,"listItemRoot",void 0);d([S()],p.prototype,"showRipple",void 0);var O=class extends p{renderListItem(t){return c`
      <a
          id="item"
          tabindex=${this.disabled?-1:this.itemTabIndex}
          role=${this.listItemRole}
          aria-selected=${this.ariaSelected||m}
          aria-checked=${this.ariaChecked||m}
          class="list-item ${z(this.getRenderClasses())}"
          href=${this.href}
          target=${this.target||m}
          @click=${this.onClick}
          @pointerenter=${this.onPointerenter}
          @pointerleave=${this.onPointerleave}
          @keydown=${this.onKeydown}
          ${B(this.getRipple)}>${t}</a>`}};d([h()],O.prototype,"href",void 0);d([h()],O.prototype,"target",void 0);var j=class extends O{constructor(){super(...arguments),this.noninteractive=!1}getRenderClasses(){return{...super.getRenderClasses(),noninteractive:this.noninteractive}}renderRipple(){return this.noninteractive?m:super.renderRipple()}};d([h()],j.prototype,"noninteractive",void 0);var ct=class extends j{};ct.styles=[Pt,Rt];ct=d([g("md-list-item-link")],ct);
