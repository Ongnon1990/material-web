import"../chunk-ZAJOTXZH.js";import"../chunk-63USNPPY.js";import{a as mt}from"../chunk-EXR72FYD.js";import{c as ct}from"../chunk-B4IYD527.js";import"../chunk-QUAI4GJF.js";import"../chunk-PG6OKG6X.js";import{a as Q,c as dt}from"../chunk-UPS7OVEN.js";import{c,e as k,f as m,g as N,i as D,m as g,n as S,o as L}from"../chunk-IWKN7XWV.js";import{a as d,d as p,g as x,h as I,i as V}from"../chunk-F2UFI3JK.js";import{a as f}from"../chunk-32HEDUCQ.js";var M=(e,t)=>{var i,o;let s=e._$AN;if(s===void 0)return!1;for(let a of s)(o=(i=a)._$AO)===null||o===void 0||o.call(i,t,!1),M(a,t);return!0},B=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},pt=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Pt(t)}};function Ot(e){this._$AN!==void 0?(B(this),this._$AM=e,pt(this)):this._$AM=e}function zt(e,t=!1,i=0){let o=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(o))for(let a=i;a<o.length;a++)M(o[a],!1),B(o[a]);else o!=null&&(M(o,!1),B(o));else M(this,e)}var Pt=e=>{var t,i,o,s;e.type==x.CHILD&&((t=(o=e)._$AP)!==null&&t!==void 0||(o._$AP=zt),(i=(s=e)._$AQ)!==null&&i!==void 0||(s._$AQ=Ot))},C=class extends V{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),pt(this),this.isConnected=t._$AU}_$AO(t,i=!0){var o,s;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)===null||o===void 0||o.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),i&&(M(this,t),B(this))}setValue(t){if(ct(this._$Ct))this._$Ct._$AI(t,this);else{let i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}};var J=new WeakMap;var ht=0,tt=new Map,vt=new WeakSet,it=()=>new Promise(e=>requestAnimationFrame(e));var et=[{opacity:0}];var ot=[{opacity:0},{opacity:1}];var ft=(e,t)=>{let i=e-t;return i===0?void 0:i},ut=(e,t)=>{let i=e/t;return i===1?void 0:i},H={left:(e,t)=>{let i=ft(e,t);return{value:i,transform:i&&`translateX(${i}px)`}},top:(e,t)=>{let i=ft(e,t);return{value:i,transform:i&&`translateY(${i}px)`}},width:(e,t)=>{let i=ut(e,t);return{value:i,transform:i&&`scaleX(${i})`}},height:(e,t)=>{let i=ut(e,t);return{value:i,transform:i&&`scaleY(${i})`}}},yt={duration:333,easing:"ease-in-out"},bt=["left","top","width","height","opacity","color","background"],gt=new WeakMap,Z=class extends C{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===x.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;(t=this.resolveFinished)===null||t===void 0||t.call(this),this.finished=new Promise(i=>{this.h=i})}async resolveFinished(){var t;(t=this.h)===null||t===void 0||t.call(this),this.h=void 0}render(t){return p}getController(){return J.get(this.l)}isDisabled(){var t;return this.options.disabled||((t=this.getController())===null||t===void 0?void 0:t.disabled)}update(t,[i]){var o;let s=this.l===void 0;return s&&(this.l=(o=t.options)===null||o===void 0?void 0:o.host,this.l.addController(this),this.element=t.element,gt.set(this.element,this)),this.optionsOrCallback=i,(s||typeof i!="function")&&this.u(i),this.render(i)}u(t){var i,o;t=t??{};let s=this.getController();s!==void 0&&((t={...s.defaultOptions,...t}).keyframeOptions={...s.defaultOptions.keyframeOptions,...t.keyframeOptions}),(i=(o=t).properties)!==null&&i!==void 0||(o.properties=bt),this.options=t}v(){let t={},i=this.element.getBoundingClientRect(),o=getComputedStyle(this.element);return this.options.properties.forEach(s=>{var a;let r=(a=i[s])!==null&&a!==void 0?a:H[s]?void 0:o[s],n=Number(r);t[s]=isNaN(n)?r+"":n}),t}p(){let t,i=!0;return this.options.guard&&(t=this.options.guard(),i=((o,s)=>{if(Array.isArray(o)){if(Array.isArray(s)&&s.length===o.length&&o.every((a,r)=>a===s[r]))return!1}else if(s===o)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&i&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;typeof this.optionsOrCallback=="function"&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=(t=this.t)!==null&&t!==void 0?t:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await it;let i=this._(),o=this.A(this.options.keyframeOptions,i),s=this.v();if(this.g!==void 0){let{from:a,to:r}=this.O(this.g,s,i);this.log("measured",[this.g,s,a,r]),t=this.calculateKeyframes(a,r)}else{let a=tt.get(this.options.inId);if(a){tt.delete(this.options.inId);let{from:r,to:n}=this.O(a,s,i);t=this.calculateKeyframes(r,n),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,ht++,t.forEach($=>$.zIndex=ht)}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,o)}resetStyles(){var t;this.P!==void 0&&(this.element.setAttribute("style",(t=this.P)!==null&&t!==void 0?t:""),this.P=void 0)}commitStyles(){var t,i;this.P=this.element.getAttribute("style"),(t=this.webAnimation)===null||t===void 0||t.commitStyles(),(i=this.webAnimation)===null||i===void 0||i.cancel()}reconnected(){}async disconnected(){var t;if(!this.o||(this.options.id!==void 0&&tt.set(this.options.id,this.g),this.options.out===void 0))return;if(this.prepare(),await it(),(t=this.t)===null||t===void 0?void 0:t.isConnected){let o=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,o),this.options.stabilizeOut){let s=this.v();this.log("stabilizing out");let a=this.g.left-s.left,r=this.g.top-s.top;getComputedStyle(this.element).position!=="static"||a===0&&r===0||(this.element.style.position="relative"),a!==0&&(this.element.style.left=a+"px"),r!==0&&(this.element.style.top=r+"px")}}let i=this.A(this.options.keyframeOptions);await this.animate(this.options.out,i),this.element.remove()}prepare(){this.createFinished()}start(){var t,i;(i=(t=this.options).onStart)===null||i===void 0||i.call(t,this)}didFinish(t){var i,o;t&&((o=(i=this.options).onComplete)===null||o===void 0||o.call(i,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}_(){let t=[];for(let i=this.element.parentNode;i;i=i?.parentNode){let o=gt.get(i);o&&!o.isDisabled()&&o&&t.push(o)}return t}get isHostRendered(){let t=vt.has(this.l);return t||this.l.updateComplete.then(()=>{vt.add(this.l)}),t}A(t,i=this._()){let o={...yt};return i.forEach(s=>Object.assign(o,s.options.keyframeOptions)),Object.assign(o,t),o}O(t,i,o){t={...t},i={...i};let s=o.map(n=>n.animatingProperties).filter(n=>n!==void 0),a=1,r=1;return s!==void 0&&(s.forEach(n=>{n.width&&(a/=n.width),n.height&&(r/=n.height)}),t.left!==void 0&&i.left!==void 0&&(t.left=a*t.left,i.left=a*i.left),t.top!==void 0&&i.top!==void 0&&(t.top=r*t.top,i.top=r*i.top)),{from:t,to:i}}calculateKeyframes(t,i,o=!1){var s;let a={},r={},n=!1,$={};for(let b in i){let z=t[b],P=i[b];if(b in H){let Et=H[b];if(z===void 0||P===void 0)continue;let Y=Et(z,P);Y.transform!==void 0&&($[b]=Y.value,n=!0,a.transform=`${(s=a.transform)!==null&&s!==void 0?s:""} ${Y.transform}`)}else z!==P&&z!==void 0&&P!==void 0&&(n=!0,a[b]=z,r[b]=P)}return a.transformOrigin=r.transformOrigin=o?"center center":"top left",this.animatingProperties=$,n?[a,r]:void 0}async animate(t,i=this.options.keyframeOptions){this.start(),this.frames=t;let o=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),t!==void 0)){this.log("animate",[t,i]),o=!0,this.webAnimation=this.element.animate(t,i);let s=this.getController();s?.add(this);try{await this.webAnimation.finished}catch{}s?.remove(this)}return this.didFinish(o),o}isAnimating(){var t,i;return((t=this.webAnimation)===null||t===void 0?void 0:t.playState)==="running"||((i=this.webAnimation)===null||i===void 0?void 0:i.pending)}log(t,i){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,i)}},R=I(Z);var Lt=["top","right","bottom","left"],K=class extends C{constructor(t){if(super(t),t.type!==x.ELEMENT)throw Error("The `position` directive must be used in attribute position.")}render(t,i){return p}update(t,[i,o]){var s;return this.l===void 0&&(this.l=(s=t.options)===null||s===void 0?void 0:s.host,this.l.addController(this)),this.j=t.element,this.S=i,this.C=o??["left","top","width","height"],this.render(i,o)}hostUpdated(){this.F()}F(){var t,i;let o=typeof this.S=="function"?this.S():(t=this.S)===null||t===void 0?void 0:t.value,s=o.offsetParent;if(o===void 0||!s)return;let a=o.getBoundingClientRect(),r=s.getBoundingClientRect();(i=this.C)===null||i===void 0||i.forEach(n=>{let $=Lt.includes(n)?a[n]-r[n]:a[n];this.j.style[n]=$+"px"})}},Mt=I(K);function W(){throw new Error("Cycle detected")}function at(){if(A>1)A--;else{for(var e,t=!1;U!==void 0;){var i=U;for(U=void 0,st++;i!==void 0;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&_t(i))try{i.c()}catch(s){t||(e=s,t=!0)}i=o}}if(st=0,A--,t)throw e}}var l=void 0,U=void 0,A=0,st=0,X=0;function xt(e){if(l!==void 0){var t=e.n;if(t===void 0||t.t!==l)return t={i:0,S:e,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:t},l.s!==void 0&&(l.s.n=t),l.s=t,e.n=t,32&l.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=l.s,t.n=void 0,l.s.n=t,l.s=t),t}}function v(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}v.prototype.h=function(){return!0};v.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};v.prototype.U=function(e){if(this.t!==void 0){var t=e.e,i=e.x;t!==void 0&&(t.x=i,e.e=void 0),i!==void 0&&(i.e=t,e.x=void 0),e===this.t&&(this.t=i)}};v.prototype.subscribe=function(e){var t=this;return nt(function(){var i=t.value,o=32&this.f;this.f&=-33;try{e(i)}finally{this.f|=o}})};v.prototype.valueOf=function(){return this.value};v.prototype.toString=function(){return this.value+""};v.prototype.toJSON=function(){return this.value};v.prototype.peek=function(){return this.v};Object.defineProperty(v.prototype,"value",{get:function(){var e=xt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(l instanceof _&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){st>100&&W(),this.v=e,this.i++,X++,A++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{at()}}}});function T(e){return new v(e)}function _t(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function wt(e){for(var t=e.s;t!==void 0;t=t.n){var i=t.S.n;if(i!==void 0&&(t.r=i),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function $t(e){for(var t=e.s,i=void 0;t!==void 0;){var o=t.p;t.i===-1?(t.S.U(t),o!==void 0&&(o.n=t.n),t.n!==void 0&&(t.n.p=o)):i=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=o}e.s=i}function _(e){v.call(this,void 0),this.x=e,this.s=void 0,this.g=X-1,this.f=4}(_.prototype=new v).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===X))return!0;if(this.g=X,this.f|=1,this.i>0&&!_t(this))return this.f&=-2,!0;var e=l;try{wt(this),l=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return l=e,$t(this),this.f&=-2,!0};_.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}v.prototype.S.call(this,e)};_.prototype.U=function(e){if(this.t!==void 0&&(v.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};_.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};_.prototype.peek=function(){if(this.h()||W(),16&this.f)throw this.v;return this.v};Object.defineProperty(_.prototype,"value",{get:function(){1&this.f&&W();var e=xt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function kt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){A++;var i=l;l=void 0;try{t()}catch(o){throw e.f&=-2,e.f|=8,rt(e),o}finally{l=i,at()}}}function rt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,kt(e)}function Rt(e){if(l!==this)throw new Error("Out-of-order effect");$t(this),l=e,this.f&=-2,8&this.f&&rt(this),at()}function q(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}q.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};q.prototype.S=function(){1&this.f&&W(),this.f|=1,this.f&=-9,kt(this),wt(this),A++;var e=l;return l=this,Rt.bind(this,e)};q.prototype.N=function(){2&this.f||(this.f|=2,this.o=U,U=this)};q.prototype.d=function(){this.f|=8,1&this.f||rt(this)};function nt(e){var t=new q(e);try{t.c()}catch(i){throw t.d(),i}return t.d.bind(t)}function G(e){return class extends e{performUpdate(){if(!this.isUpdatePending)return;this._disposeEffect?.();let o=!0;this._disposeEffect=nt(()=>{o?(o=!1,super.performUpdate()):this.requestUpdate()})}}}var u=T(!1);var E=T(!1),j=T(!1);var y=class extends G(S){constructor(){super(...arguments);this.isCollapsible=!1;this.hasToc=!1;this.pageTitle=""}render(){let i=this.isCollapsible&&u.value,o=i?500:150,s=i?300:150,a=150,r=i?Q.EMPHASIZED:Q.EMPHASIZED_ACCELERATE;return d`
      <div class="root">
        <slot name="top-app-bar"></slot>
        <div class="body  ${u.value?"open":""}">
          <div class="spacer" ?inert=${j.value}>
            ${i?d`<div
                  class="scrim"
                  @click=${this.onScrimClick}
                  ${R({properties:["opacity"],keyframeOptions:{duration:a,easing:"linear"},in:ot,out:et})}
                ></div>`:p}
            <aside
              ?inert=${this.isCollapsible&&!u.value}
              ${R({properties:["transform"],keyframeOptions:{duration:o,easing:r}})}
            >
              <slot
                ${R({properties:["opacity"],keyframeOptions:{duration:s,easing:"linear"}})}
              ></slot>
            </aside>
          </div>
          <div class="panes">
            ${this.renderTocPane(i)}
            ${this.renderContent(i)}
          </div>
        </div>
      </div>
    `}renderContent(i){return d`
      <div
          class="pane content-pane"
          ?inert=${i||E.value}>
        <div class="content">
          <slot name="app-content"></slot>
        </div>
      </div>`}renderTocPane(i){return this.hasToc?d`
      <div class="pane toc" ?inert=${i||E.value}>
        <p>On this page:</p>
        <h2>${this.pageTitle}</h2>
        <slot name="toc"></slot>
      </div>`:p}onScrimClick(){u.value=!1}firstUpdated(){let i=window.matchMedia("(max-width: 1500px)");this.isCollapsible=i.matches,i.addEventListener("change",o=>{this.isCollapsible=o.matches})}};y.styles=g`
    :host {
      --_drawer-width: var(--catalog-drawer-width, 300px);
      /* When in wide mode inline start margin is handled by the sidebar */
      --_pane-margin-inline-start: 0px;
      --_pane-margin-inline-end: var(--catalog-spacing-xl);
      --_pane-margin-block-end: var(--catalog-spacing-xl);
      --_toc-pane-width: 250px;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
    }

    ::slotted(*) {
      --md-list-item-list-item-container-shape: var(--catalog-shape-xl);
      --md-focus-ring-shape: var(--catalog-shape-xl);
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

    .pane {
      box-sizing: border-box;
      overflow: auto;
      width: 100%;
      /* Explicit height to make overflow work */
      height: calc(
        100dvh - var(--catalog-top-app-bar-height) -
          var(--_pane-margin-block-end)
      );
      background-color: var(--md-sys-color-surface);
      border-radius: var(--catalog-shape-xl);
      padding-block: var(--catalog-spacing-xl);
    }

    .pane,
    .panes {
      /* emphasized – duration matching render fn for sidebar */
      transition: 0.5s cubic-bezier(0.3, 0, 0, 1);
      transition-property: margin, height, border-radius, max-width, width;;
    }

    .panes {
      display: flex;
      justify-content: start;
      flex-direction: row-reverse;
      gap: var(--_pane-margin-inline-end);
      margin-inline: var(--_pane-margin-inline-start) var(--_pane-margin-inline-end);
      width: 100%;
      max-width: calc(100% - var(--_drawer-width) - var(--_pane-margin-inline-start) - var(--_pane-margin-inline-end));
    }

    .pane.content-pane {
      flex-grow: 1;
    }

    .pane.toc {
      width: auto;
      box-sizing: border-box;
      padding-inline: var(--catalog-spacing-xl);
      width: var(--_toc-pane-width);
    }

    .pane.toc p {
      margin-block: 0;
      font-size: var(--catalog-label-s-font-size);
    }

    .pane.toc h2 {
      margin-block: var(--catalog-spacing-s) var(--catalog-spacing-m);
      font-size: var(--catalog-headline-s-font-size);
    }

    .content {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      padding-inline: var(--catalog-spacing-xl);
      width: 100%;
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
      inset: var(--catalog-top-app-bar-height) 0 0 0;
      z-index: 12;
      background-color: var(--md-sys-color-surface-container);
    }

    aside slot {
      display: block;
    }

    .scrim {
      background-color: var(--md-dialog-scrim-color, rgba(0, 0, 0, 0.32));
    }

    @media (max-width: 900px) {
      .pane.toc {
        display: none;
      }
    }

    @media (max-width: 1500px) {
      .spacer {
        min-width: 0px;
      }

      .panes {

      max-width: calc(100% - var(--_pane-margin-inline-start) - var(--_pane-margin-inline-end));
      }

      .content {
        max-width: 100vw;
        padding-inline: var(--catalog-spacing-xl);
      }

      .scrim {
        position: fixed;
        inset: 0;
      }

      aside {
        transition: unset;
        transform: translateX(-100%);
        border-radius: 0 var(--catalog-shape-xl) var(--catalog-shape-xl) 0;
      }

      :host {
        --_pane-margin-inline-start: var(--catalog-spacing-xl);
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
    }

    @media (max-width: 600px) {
      .pane {
        border-end-start-radius: 0;
        border-end-end-radius: 0;
      }

      :host {
        --_pane-margin-block-end: 0px;
        --_pane-margin-inline-start: 0px;
        --_pane-margin-inline-end: 0px;
      }
    }

    /* On desktop, make the scrollbars less blocky so you can see the border
     * radius of the pane. On most mobile platforms, these scrollbars are hidden
     * by default. It'll still unfortunately render on top of the border radius.
     */
    @media (pointer: fine) {
      :host {
        --_scrollbar-width: 8px;
      }

      .pane {
        /* firefox */
        scrollbar-color: var(--md-sys-color-primary) transparent;
        scrollbar-width: thin;
      }

      .content {
        /* adjust for the scrollbar width */
        padding-inline-end: calc(
          var(--catalog-spacing-xl) - var(--_scrollbar-width)
        );
      }

      /* Chromium + Safari */
      .pane::-webkit-scrollbar {
        background-color: transparent;
        width: var(--_scrollbar-width);
      }

      .pane::-webkit-scrollbar-thumb {
        background-color: var(--md-sys-color-primary);
        border-radius: calc(var(--_scrollbar-width) / 2);
      }
    }

    @media (forced-colors: active) {
      .pane {
        border: 1px solid CanvasText;
      }

      @media (max-width: 1500px) {
        aside {
          box-sizing: border-box;
          border: 1px solid CanvasText;
        }

        .scrim {
          background-color: var(--md-dialog-scrim-color, rgba(0, 0, 0, 0.75));
        }
      }

      @media (pointer: fine) {
        .pane {
          /* firefox */
          scrollbar-color: CanvasText transparent;
        }

        .pane::-webkit-scrollbar-thumb {
          /* Chromium + Safari */
          background-color: CanvasText;
        }
      }
    }
  `,f([N()],y.prototype,"isCollapsible",2),f([m({type:Boolean,attribute:"has-toc"})],y.prototype,"hasToc",2),f([m({attribute:"page-title"})],y.prototype,"pageTitle",2),y=f([k("nav-drawer")],y);var St=d`
<svg
  viewBox="0 96 960 960"
  fill="currentColor">
  <path
    d="M480 1016q-91 0-171-34.5T169 887q-60-60-94.5-140T40 576q0-91 34.5-171T169 265q60-60 140-94.5T480 136q91 0 171 34.5T791 265q60 60 94.5 140T920 576q0 91-34.5 171T791 887q-60 60-140 94.5T480 1016ZM200 802V351q-38 47-59 104t-21 121q0 65 21 122t59 104Zm54-506h452q-47-38-104-59t-122-21q-65 0-122 21t-104 59Zm226 381 151-301H330l150 301Zm40 99h160V456L520 776Zm-240 0h160L280 456v320Zm200 160q64 0 121.5-21T706 856H254q47 38 104.5 59T480 936Zm280-134q38-47 59-104t21-122q0-64-21-121t-59-104v451Z" />
</svg>`;var w=class extends G(S){constructor(){super(...arguments);this.menuOpen=!1}render(){return d`
      <header>
        <div class="default-content">
          <section class="start">
            <md-standard-icon-button
              toggle
              class="menu-button"
              .selected=${mt(u.value)}
              @input=${this.onMenuIconToggle}
            >
              <span><md-icon>menu</md-icon></span>
              <span slot="selectedIcon"><md-icon>menu_open</md-icon></span>
            </md-standard-icon-button>
            <md-standard-icon-button href="/material-web/" class="home-button">
              ${St}
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
    `}onPaletteClick(){this.menuOpen=!0,E.value=!0,j.value=!0,u.value=!1}onMenuClosed(){this.menuOpen=!1,E.value=!1,j.value=!1}onMenuIconToggle(i){u.value=i.target.selected}};w.styles=g`
    :host,
    header {
      display: block;
      height: var(--catalog-top-app-bar-height);
    }

    header {
      position: fixed;
      inset: 0 0 auto 0;
      display: flex;
      align-items: center;
      padding-block-start: var(--catalog-spacing-m);
      box-sizing: border-box;
      padding: var(--catalog-spacing-m) var(--catalog-spacing-s);
      background-color: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
      z-index: 12;
    }

    .default-content {
      width: 100%;
      display: flex;
      align-items: center;
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
  `,f([N()],w.prototype,"menuOpen",2),f([D(".end md-standard-icon-button")],w.prototype,"paletteButton",2),w=f([k("top-app-bar")],w);var Ct=g`@media(forced-colors: active){:host{--md-list-item-list-item-disabled-label-text-color: GrayText;--md-list-item-list-item-disabled-label-text-opacity: 1;--md-list-item-list-item-disabled-leading-icon-color: GrayText;--md-list-item-list-item-disabled-leading-icon-opacity: 1;--md-list-item-list-item-disabled-trailing-icon-color: GrayText;--md-list-item-list-item-disabled-trailing-icon-opacity: 1}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;var At=g`:host{--_list-item-container-color: var(--md-list-item-list-item-container-color, var(--md-sys-color-surface, #fef7ff));--_list-item-container-shape: var(--md-list-item-list-item-container-shape, 0px);--_list-item-disabled-label-text-color: var(--md-list-item-list-item-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-label-text-opacity: var(--md-list-item-list-item-disabled-label-text-opacity, 0.3);--_list-item-disabled-leading-icon-color: var(--md-list-item-list-item-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-leading-icon-opacity: var(--md-list-item-list-item-disabled-leading-icon-opacity, 0.38);--_list-item-disabled-trailing-icon-color: var(--md-list-item-list-item-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-disabled-trailing-icon-opacity: var(--md-list-item-list-item-disabled-trailing-icon-opacity, 0.38);--_list-item-focus-label-text-color: var(--md-list-item-list-item-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-focus-leading-icon-icon-color: var(--md-list-item-list-item-focus-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-focus-trailing-icon-icon-color: var(--md-list-item-list-item-focus-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-hover-label-text-color: var(--md-list-item-list-item-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-hover-leading-icon-icon-color: var(--md-list-item-list-item-hover-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-hover-state-layer-color: var(--md-list-item-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-hover-state-layer-opacity: var(--md-list-item-list-item-hover-state-layer-opacity, 0.08);--_list-item-hover-trailing-icon-icon-color: var(--md-list-item-list-item-hover-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-label-text-color: var(--md-list-item-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-label-text-line-height: var(--md-list-item-list-item-label-text-line-height, 1.5rem);--_list-item-label-text-type: var(--md-list-item-list-item-label-text-type, var(--md-sys-typescale-body-large, 400 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_list-item-large-leading-video-height: var(--md-list-item-list-item-large-leading-video-height, 69px);--_list-item-leading-avatar-label-color: var(--md-list-item-list-item-leading-avatar-label-color, var(--md-sys-color-on-primary-container, #21005d));--_list-item-leading-avatar-label-type: var(--md-list-item-list-item-leading-avatar-label-type, var(--md-sys-typescale-title-medium, 500 1rem / 1.5rem var(--md-ref-typeface-plain, Roboto)));--_list-item-leading-avatar-color: var(--md-list-item-list-item-leading-avatar-color, var(--md-sys-color-primary-container, #eaddff));--_list-item-leading-avatar-shape: var(--md-list-item-list-item-leading-avatar-shape, 9999px);--_list-item-leading-avatar-size: var(--md-list-item-list-item-leading-avatar-size, 40px);--_list-item-leading-icon-color: var(--md-list-item-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-leading-icon-size: var(--md-list-item-list-item-leading-icon-size, 18px);--_list-item-leading-image-height: var(--md-list-item-list-item-leading-image-height, 56px);--_list-item-leading-image-shape: var(--md-list-item-list-item-leading-image-shape, 0px);--_list-item-leading-image-width: var(--md-list-item-list-item-leading-image-width, 56px);--_list-item-leading-video-shape: var(--md-list-item-list-item-leading-video-shape, 0px);--_list-item-leading-video-width: var(--md-list-item-list-item-leading-video-width, 100px);--_list-item-one-line-container-height: var(--md-list-item-list-item-one-line-container-height, 56px);--_list-item-pressed-label-text-color: var(--md-list-item-list-item-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-pressed-leading-icon-icon-color: var(--md-list-item-list-item-pressed-leading-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-pressed-state-layer-color: var(--md-list-item-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_list-item-pressed-state-layer-opacity: var(--md-list-item-list-item-pressed-state-layer-opacity, 0.12);--_list-item-pressed-trailing-icon-icon-color: var(--md-list-item-list-item-pressed-trailing-icon-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-small-leading-video-height: var(--md-list-item-list-item-small-leading-video-height, 56px);--_list-item-supporting-text-color: var(--md-list-item-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-supporting-text-type: var(--md-list-item-list-item-supporting-text-type, var(--md-sys-typescale-body-medium, 400 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_list-item-three-line-container-height: var(--md-list-item-list-item-three-line-container-height, 88px);--_list-item-trailing-icon-color: var(--md-list-item-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-trailing-icon-size: var(--md-list-item-list-item-trailing-icon-size, 24px);--_list-item-trailing-supporting-text-color: var(--md-list-item-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_list-item-trailing-supporting-text-line-height: var(--md-list-item-list-item-trailing-supporting-text-line-height, 1rem);--_list-item-trailing-supporting-text-type: var(--md-list-item-list-item-trailing-supporting-text-type, var(--md-sys-typescale-label-small, 500 0.688rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_list-item-two-line-container-height: var(--md-list-item-list-item-two-line-container-height, 72px);--_list-item-leading-element-leading-space: var(--md-list-item-list-item-leading-element-leading-space, 16px);--_list-item-leading-space: var(--md-list-item-list-item-leading-space, 16px);--_list-item-leading-video-leading-space: var(--md-list-item-list-item-leading-video-leading-space, 0px);--_list-item-trailing-element-headline-trailing-element-space: var(--md-list-item-list-item-trailing-element-headline-trailing-element-space, 16px);--_list-item-trailing-space: var(--md-list-item-list-item-trailing-space, 16px)}:host{color:unset;--md-focus-ring-shape: 8px;--md-ripple-hover-color: var(--_list-item-hover-state-layer-color);--md-ripple-hover-opacity: var(--_list-item-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_list-item-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_list-item-pressed-state-layer-opacity)}.list-item{align-items:center;box-sizing:border-box;display:flex;outline:none;position:relative;width:100%;text-decoration:none;background-color:var(--_list-item-container-color);border-radius:var(--_list-item-container-shape);-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled):not(.noninteractive){cursor:pointer}.list-item.disabled{pointer-events:none}.content-wrapper{display:flex;width:100%;border-radius:inherit}md-ripple{border-radius:inherit}.with-one-line{min-height:var(--_list-item-one-line-container-height)}.with-two-line{min-height:var(--_list-item-two-line-container-height)}.with-three-line{min-height:var(--_list-item-three-line-container-height)}.start{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;flex:0 0 auto;z-index:1}.with-three-line .start{justify-content:start}slot[name=start]::slotted([data-variant=icon]),slot[name=start]::slotted([data-variant=image]),slot[name=start]::slotted([data-variant=avatar]){margin-inline-start:var(--_list-item-leading-element-leading-space)}.body{display:inline-flex;justify-content:center;flex-direction:column;box-sizing:border-box;flex:1 0 0;padding-inline-start:var(--_list-item-leading-space);padding-inline-end:var(--_list-item-trailing-space);z-index:1}.end{display:inline-flex;flex-direction:column;justify-content:center;flex:0 0 auto;z-index:1}.with-three-line .end{justify-content:start}slot[name=end]::slotted(*),.trailing-supporting-text{margin-inline-end:var(--_list-item-trailing-element-headline-trailing-element-space)}.label-text{display:flex;text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;color:var(--_list-item-label-text-color);font:var(--_list-item-label-text-type)}:hover .label-text{color:var(--_list-item-hover-label-text-color)}:focus .label-text{color:var(--_list-item-focus-label-text-color)}:active .label-text{color:var(--_list-item-pressed-label-text-color)}.disabled .label-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.supporting-text{text-overflow:ellipsis;white-space:normal;overflow:hidden;width:100%;color:var(--_list-item-supporting-text-color);font:var(--_list-item-supporting-text-type);-webkit-box-orient:vertical;-webkit-line-clamp:1;display:-webkit-box}.disabled .supporting-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.supporting-text--multi-line{-webkit-line-clamp:2}.trailing-supporting-text{padding-inline-start:16px;font:var(--_list-item-trailing-supporting-text-type)}.list-item:not(.disabled) .trailing-supporting-text{color:var(--_list-item-trailing-supporting-text-color)}.disabled .trailing-supporting-text{color:var(--_list-item-disabled-label-text-color);opacity:var(--_list-item-disabled-label-text-opacity)}.with-three-line .trailing-supporting-text{padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-trailing-supporting-text-line-height))/2)}.focus-ring{z-index:1}::slotted([data-variant=image]){display:inline-flex;height:var(--_list-item-leading-image-height);width:var(--_list-item-leading-image-width);border-radius:var(--_list-item-leading-image-shape);padding-block:calc((var(--_list-item-two-line-container-height) - var(--_list-item-leading-image-height))/2)}.with-three-line ::slotted([data-variant=image]){padding-block:0}slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-leading-icon-color);--md-icon-size:var(--_list-item-leading-icon-size)}.with-three-line slot[name=start]::slotted([data-variant=icon]){padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-leading-icon-size))/2)}slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-trailing-icon-color);--md-icon-size:var(--_list-item-trailing-icon-size)}.with-three-line slot[name=end]::slotted([data-variant=icon]){padding-block-start:calc((var(--_list-item-label-text-line-height) - var(--_list-item-trailing-icon-size))/2)}:hover slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-hover-leading-icon-icon-color)}:hover slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-hover-trailing-icon-icon-color)}:focus slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-focus-leading-icon-icon-color)}:focus slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-focus-trailing-icon-icon-color)}:active slot[name=start]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-pressed-leading-icon-icon-color)}:active slot[name=end]::slotted([data-variant=icon]){--md-icon-color:var(--_list-item-pressed-trailing-icon-icon-color)}.disabled slot[name=start]::slotted([data-variant=icon]){opacity:var(--_list-item-disabled-leading-icon-opacity);--md-icon-color:var(--_list-item-disabled-leading-icon-color)}.disabled slot[name=end]::slotted([data-variant=icon]){opacity:var(--_list-item-disabled-trailing-icon-opacity);--md-icon-color:var(--_list-item-disabled-trailing-icon-color)}::slotted([data-variant=avatar]){display:inline-flex;justify-content:center;align-items:center;background-color:var(--_list-item-leading-avatar-color);height:var(--_list-item-leading-avatar-size);width:var(--_list-item-leading-avatar-size);border-radius:var(--_list-item-leading-avatar-shape);color:var(--_list-item-leading-avatar-label-color);font:var(--_list-item-leading-avatar-label-type)}::slotted([data-variant=video]),::slotted([data-variant=video-large]){display:inline-flex;object-fit:cover;height:var(--_list-item-small-leading-video-height);width:var(--_list-item-leading-video-width);border-radius:var(--_list-item-leading-video-shape);margin-inline-start:var(--_list-item-leading-video-leading-space);padding-block:calc((var(--_list-item-three-line-container-height) - var(--_list-item-small-leading-video-height))/2)}.with-three-line ::slotted([data-variant=video]),.with-three-line ::slotted([data-variant=video-large]){padding-block:0}::slotted([data-variant=video-large]){padding-block:calc((var(--_list-item-three-line-container-height) - var(--_list-item-large-leading-video-height))/2);height:var(--_list-item-large-leading-video-height)}/*# sourceMappingURL=list-item-styles.css.map */
`;var Tt,h=class extends S{constructor(){super(...arguments),this.headline="",this.supportingText="",this.multiLineSupportingText=!1,this.trailingSupportingText="",this.disabled=!1,this.itemTabIndex=-1,this.active=!1,this.type="listitem",this.isListItem=!0,this.focusOnActivation=!0,this.isFirstUpdate=!0}willUpdate(t){t.has("active")&&!this.disabled&&(this.active?this.itemTabIndex=0:this.isFirstUpdate||(this.itemTabIndex=-1))}render(){return this.renderListItem(d`
      <div class="content-wrapper">
        ${this.renderStart()}
        ${this.renderBody()}
        ${this.renderEnd()}
        ${this.renderRipple()}
        ${this.renderFocusRing()}
      </div>
    `)}renderListItem(t){return d`
      <li
        id="item"
        tabindex=${this.disabled?-1:this.itemTabIndex}
        role=${this.type==="none"?p:this.type}
        aria-selected=${this.ariaSelected||p}
        aria-checked=${this.ariaChecked||p}
        class="list-item ${L(this.getRenderClasses())}"
        @click=${this.onClick}
        @pointerenter=${this.onPointerenter}
        @pointerleave=${this.onPointerleave}
        @keydown=${this.onKeydown}
      >${t}</li>
    `}renderRipple(){return d`<md-ripple for="item" ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return d`<md-focus-ring class="focus-ring" for="item" inward></md-focus-ring>`}getRenderClasses(){return{"with-one-line":this.supportingText==="","with-two-line":this.supportingText!==""&&!this.multiLineSupportingText,"with-three-line":this.supportingText!==""&&this.multiLineSupportingText,disabled:this.disabled}}renderStart(){return d`<div class="start"><slot name="start"></slot></div>`}renderBody(){let t=this.supportingText!==""?this.renderSupportingText():"";return d`<div class="body"
      ><span class="label-text">${this.headline}</span>${t}</div>`}renderSupportingText(){return d`<span
        class="supporting-text ${L(this.getSupportingTextClasses())}"
      >${this.supportingText}</span>`}getSupportingTextClasses(){return{"supporting-text--multi-line":this.multiLineSupportingText}}renderEnd(){let t=this.trailingSupportingText!==""?this.renderTrailingSupportingText():"";return d`<div class="end"
      ><slot name="end">${t}</slot></div>`}renderTrailingSupportingText(){return d`<span class="trailing-supporting-text"
      >${this.trailingSupportingText}</span>`}updated(t){super.updated(t),t.has("active")&&!this.isFirstUpdate&&this.active&&this.focusOnActivation&&this.focus(),this.isFirstUpdate=!1}focus(){this.listItemRoot?.focus?.()}};Tt=h;dt(Tt);c([m()],h.prototype,"headline",void 0);c([m({attribute:"supporting-text"})],h.prototype,"supportingText",void 0);c([m({type:Boolean,attribute:"multi-line-supporting-text"})],h.prototype,"multiLineSupportingText",void 0);c([m({attribute:"trailing-supporting-text"})],h.prototype,"trailingSupportingText",void 0);c([m({type:Boolean})],h.prototype,"disabled",void 0);c([m({type:Number,attribute:"item-tabindex"})],h.prototype,"itemTabIndex",void 0);c([m({type:Boolean,reflect:!0})],h.prototype,"active",void 0);c([m()],h.prototype,"type",void 0);c([m({type:Boolean,attribute:"md-list-item",reflect:!0})],h.prototype,"isListItem",void 0);c([D(".list-item")],h.prototype,"listItemRoot",void 0);var O=class extends h{constructor(){super(...arguments),this.type="none"}renderListItem(t){return d`
      <a
        id="item"
        tabindex=${this.disabled?-1:this.itemTabIndex}
        role=${this.type==="none"?p:this.type}
        aria-selected=${this.ariaSelected||p}
        aria-checked=${this.ariaChecked||p}
        class="list-item ${L(this.getRenderClasses())}"
        href=${this.href}
        target=${this.target||p}
        @click=${this.onClick}
        @pointerenter=${this.onPointerenter}
        @pointerleave=${this.onPointerleave}
        @keydown=${this.onKeydown}
      >${t}</a>
    `}};c([m()],O.prototype,"href",void 0);c([m()],O.prototype,"target",void 0);var F=class extends O{constructor(){super(...arguments),this.noninteractive=!1}getRenderClasses(){return{...super.getRenderClasses(),noninteractive:this.noninteractive}}renderRipple(){return this.noninteractive?p:super.renderRipple()}};c([m()],F.prototype,"noninteractive",void 0);var lt=class extends F{};lt.styles=[At,Ct];lt=c([k("md-list-item-link")],lt);
