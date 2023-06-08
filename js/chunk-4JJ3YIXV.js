import{c as k}from"./chunk-F6QIDFPJ.js";import{c as o,f as h,g as $,m as _,n as x,o as I}from"./chunk-N7NMZY4C.js";import{a as l,b as y,d as r}from"./chunk-XCNF2U7M.js";var R=Symbol.for(""),C=t=>{if(t?.r===R)return t?._$litStatic$};var b=(t,...e)=>({_$litStatic$:e.reduce((a,n,p)=>a+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[p+1],t[0]),r:R}),w=new Map,S=t=>(e,...a)=>{let n=a.length,p,s,d=[],u=[],f,c=0,m=!1;for(;c<n;){for(f=e[c];c<n&&(s=a[c],(p=C(s))!==void 0);)f+=p+e[++c],m=!0;c!==n&&u.push(s),d.push(f),c++}if(c===n&&d.push(e[n]),m){let v=d.join("$$lit$$");(e=w.get(v))===void 0&&(d.raw=d,w.set(v,e=d)),a=u}return t(e,...a)},L=S(l),A=S(y);function g(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}var z,i=class extends x{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.toggle=!1,this.selected=!1,this.flipIcon=g(this,this.flipIconInRtl)}willUpdate(){this.href&&(this.disabled=!1)}render(){let e=this.href?b`div`:b`button`,{ariaLabel:a,ariaHasPopup:n,ariaExpanded:p}=this,s=a&&this.selectedAriaLabel,d=s?r:this.selected,u=r;return this.href||(u=s&&this.selected?this.selectedAriaLabel:a),L`<${e}
        class="icon-button ${I(this.getRenderClasses())}"
        id="button"
        aria-label="${u||r}"
        aria-haspopup="${!this.href&&n||r}"
        aria-expanded="${!this.href&&p||r}"
        aria-pressed="${d}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?r:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():r}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){let{ariaLabel:e}=this;return l`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||r}"
        aria-label="${e||r}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return l`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return l`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return l`<span class="touch"></span>`}renderFocusRing(){return l`<md-focus-ring for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return l`<md-ripple
      for=${this.href?"link":r}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=g(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}};z=i;k(z);o([h({type:Boolean,reflect:!0})],i.prototype,"disabled",void 0);o([h({type:Boolean})],i.prototype,"flipIconInRtl",void 0);o([h()],i.prototype,"href",void 0);o([h()],i.prototype,"target",void 0);o([h({attribute:"selected-aria-label",reflect:!0})],i.prototype,"selectedAriaLabel",void 0);o([h({type:Boolean})],i.prototype,"toggle",void 0);o([h({type:Boolean,reflect:!0})],i.prototype,"selected",void 0);o([$()],i.prototype,"flipIcon",void 0);var K=_`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center;--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon{height:var(--_icon-size);width:var(--_icon-size);--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`;export{i as a,K as b};
