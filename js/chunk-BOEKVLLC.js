import{a as I,d as S,e as b}from"./chunk-VOP3EFYU.js";import{c as i,f as c,g as m,k as _,n as R,o as w,p as k}from"./chunk-6RJU4KXO.js";import{a as l,b as x,d as a}from"./chunk-XCNF2U7M.js";var z=Symbol.for(""),T=r=>{if(r?.r===z)return r?._$litStatic$};var g=(r,...e)=>({_$litStatic$:e.reduce((n,o,h)=>n+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+r[h+1],r[0]),r:z}),L=new Map,C=r=>(e,...n)=>{let o=n.length,h,s,d=[],u=[],f,p=0,$=!1;for(;p<o;){for(f=e[p];p<o&&(s=n[p],(h=T(s))!==void 0);)f+=h+e[++p],$=!0;p!==o&&u.push(s),d.push(f),p++}if(p===o&&d.push(e[o]),$){let y=d.join("$$lit$$");(e=L.get(y))===void 0&&(d.raw=d,L.set(y,e=d)),n=u}return r(e,...n)},E=C(l),V=C(x);function v(r,e=!0){return e&&getComputedStyle(r).getPropertyValue("direction").trim()==="rtl"}var A,t=class extends w{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.toggle=!1,this.selected=!1,this.showRipple=!1,this.flipIcon=v(this,this.flipIconInRtl),this.getRipple=()=>(this.showRipple=!0,this.ripple),this.renderRipple=()=>l`<md-ripple ?disabled="${!this.href&&this.disabled}"></md-ripple>`}willUpdate(){this.href&&(this.disabled=!1)}render(){let e=this.href?g`div`:g`button`,{ariaLabel:n,ariaHasPopup:o,ariaExpanded:h}=this,s=n&&this.selectedAriaLabel,d=s?a:this.selected,u=a;return this.href||(u=s&&this.selected?this.selectedAriaLabel:n),E`<${e}
        class="icon-button ${k(this.getRenderClasses())}"
        id="button"
        aria-label="${u||a}"
        aria-haspopup="${!this.href&&o||a}"
        aria-expanded="${!this.href&&h||a}"
        aria-pressed="${d}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}"
        ${b(this.getRipple)}>
        ${this.renderFocusRing()}
        ${S(this.showRipple,this.renderRipple)}
        ${this.selected?a:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():a}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){let{ariaLabel:e}=this;return l`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||a}"
        aria-label="${e||a}"
        ${b(this.getRipple)}
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return l`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return l`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return l`<span class="touch"></span>`}renderFocusRing(){return l`<md-focus-ring for=${this.href?"link":"button"}></md-focus-ring>`}connectedCallback(){this.flipIcon=v(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}};A=t;I(A);i([c({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);i([c({type:Boolean})],t.prototype,"flipIconInRtl",void 0);i([c()],t.prototype,"href",void 0);i([c()],t.prototype,"target",void 0);i([c({attribute:"selected-aria-label",reflect:!0})],t.prototype,"selectedAriaLabel",void 0);i([c({type:Boolean})],t.prototype,"toggle",void 0);i([c({type:Boolean,reflect:!0})],t.prototype,"selected",void 0);i([_("md-ripple")],t.prototype,"ripple",void 0);i([m()],t.prototype,"showRipple",void 0);i([m()],t.prototype,"flipIcon",void 0);var Z=R`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center;--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon{height:var(--_icon-size);width:var(--_icon-size);--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`;export{t as a,Z as b};
