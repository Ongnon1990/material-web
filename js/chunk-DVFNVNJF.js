import{a,b as g}from"./chunk-PG6OKG6X.js";import{c as m}from"./chunk-UPS7OVEN.js";import{c as r,f as s,g as p,m as u,n as f,o as b}from"./chunk-IWKN7XWV.js";import{a as i,d as e}from"./chunk-F2UFI3JK.js";function o(d,n=!0){return n&&getComputedStyle(d).getPropertyValue("direction").trim()==="rtl"}var v,t=class extends f{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.toggle=!1,this.selected=!1,this.flipIcon=o(this,this.flipIconInRtl)}willUpdate(){this.href&&(this.disabled=!1)}render(){let n=this.href?a`div`:a`button`,{ariaLabel:l,ariaHasPopup:y,ariaExpanded:$}=this,c=l&&this.selectedAriaLabel,_=c?e:this.selected,h=e;return this.href||(h=c&&this.selected?this.selectedAriaLabel:l),g`<${n}
        class="icon-button ${b(this.getRenderClasses())}"
        id="button"
        aria-label="${h||e}"
        aria-haspopup="${!this.href&&y||e}"
        aria-expanded="${!this.href&&$||e}"
        aria-pressed="${_}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?e:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():e}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${n}>`}renderLink(){let{ariaLabel:n}=this;return i`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||e}"
        aria-label="${n||e}"
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return i`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return i`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return i`<span class="touch"></span>`}renderFocusRing(){return i`<md-focus-ring for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return i`<md-ripple
      for=${this.href?"link":e}
      ?disabled="${!this.href&&this.disabled}"
    ></md-ripple>`}connectedCallback(){this.flipIcon=o(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}};v=t;m(v);r([s({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);r([s({type:Boolean})],t.prototype,"flipIconInRtl",void 0);r([s()],t.prototype,"href",void 0);r([s()],t.prototype,"target",void 0);r([s({attribute:"selected-aria-label",reflect:!0})],t.prototype,"selectedAriaLabel",void 0);r([s({type:Boolean})],t.prototype,"toggle",void 0);r([s({type:Boolean,reflect:!0})],t.prototype,"selected",void 0);r([p()],t.prototype,"flipIcon",void 0);var P=u`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center;--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon{height:var(--_icon-size);width:var(--_icon-size);--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`;export{t as a,P as b};
