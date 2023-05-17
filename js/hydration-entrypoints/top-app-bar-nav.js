import{b as M,c as $}from"../chunk-7DBPHKJI.js";import{a as R}from"../chunk-FW2K5BAH.js";import{a as F,d as S}from"../chunk-J67CB4W6.js";import"../chunk-TZANKL32.js";import{c as r,e as u,f as i,g as b,i as g,k as E,l as A,n as f,o as m,p as z}from"../chunk-6RJU4KXO.js";import{a as p,d as C}from"../chunk-XCNF2U7M.js";import"../chunk-32HEDUCQ.js";var O,s=class extends m{constructor(){super(),this.variant="primary",this.disabled=!1,this.selected=!1,this.focusable=!1,this.inlineIcon=!1,this.showRipple=!1,this.handleActivationClick=e=>{!$(e)||!this.button||(this.focus(),M(this.button))},this.getRipple=()=>(this.showRipple=!0,this.ripple),this.renderRipple=()=>p`<md-ripple ?disabled="${this.disabled}"></md-ripple>`,!1||this.addEventListener("click",this.handleActivationClick)}focus(){this.button?.focus()}blur(){this.button?.blur()}render(){let e={"inline-icon":this.inlineIcon};return p`<button class="button" role="tab" .tabIndex="${this.focusable&&!this.disabled?0:-1}" aria-selected="${this.selected?"true":"false"}" ?disabled="${this.disabled}" aria-label="${this.ariaLabel||C}" ${S(this.getRipple)}><md-focus-ring></md-focus-ring><md-elevation></md-elevation>${R(this.showRipple,this.renderRipple)} <span class="touch"></span><div class="content ${z(e)}"><slot name="icon"></slot><span class="label"><slot></slot></span><div class="indicator"></div></div></button>`}updated(e){e.has("selected")&&!this.disabled&&this.animateSelected()}get tabs(){return this.parentElement}animateSelected(){this.indicator.getAnimations().forEach(t=>{t.cancel()});let e=this.getKeyframes();e!==null&&this.indicator.animate(e,{duration:400,easing:"ease-out"})}getKeyframes(){let e=K();if(!this.selected)return e?[{opacity:1},{transform:"none"}]:null;let t={},a=this.variant.includes("vertical"),o=this.tabs?.previousSelectedItem?.indicator.getBoundingClientRect()??{},d=a?o.top:o.left,v=a?o.height:o.width,n=this.indicator.getBoundingClientRect(),l=a?n.top:n.left,h=a?n.height:n.width,y=a?"Y":"X",k=v/h;return!e&&d!==void 0&&l!==void 0&&!isNaN(k)?t.transform=`translate${y}(${(d-l).toFixed(4)}px) scale${y}(${k.toFixed(4)})`:t.opacity=0,[t,{transform:"none"}]}};O=s;F(O);s.shadowRootOptions={mode:"open",delegatesFocus:!0};r([i({reflect:!0})],s.prototype,"variant",void 0);r([i({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0);r([i({type:Boolean,reflect:!0})],s.prototype,"selected",void 0);r([i({type:Boolean})],s.prototype,"focusable",void 0);r([i({type:Boolean})],s.prototype,"inlineIcon",void 0);r([g(".button")],s.prototype,"button",void 0);r([E("md-ripple")],s.prototype,"ripple",void 0);r([g(".indicator")],s.prototype,"indicator",void 0);r([b()],s.prototype,"showRipple",void 0);function K(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}var P=f`:host{--_active-indicator-color:var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height:var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape:var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-focus-state-layer-color:var(--md-primary-tab-active-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-focus-state-layer-opacity:var(--md-primary-tab-active-focus-state-layer-opacity, 0.12);--_active-hover-state-layer-color:var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity:var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color:var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity:var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color:var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation:var(--md-primary-tab-container-elevation, 0);--_container-height:var(--md-primary-tab-container-height, 48px);--_container-shape:var(--md-primary-tab-container-shape, 0px);--_divider-color:var(--md-primary-tab-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_divider-thickness:var(--md-primary-tab-divider-thickness, 1px);--_label-text-type:var(--md-primary-tab-label-text-type, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto));--_focus-state-layer-color:var(--md-primary-tab-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-opacity:var(--md-primary-tab-focus-state-layer-opacity, 0.12);--_hover-state-layer-color:var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity:var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color:var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity:var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color:var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color:var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color:var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color:var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size:var(--md-primary-tab-icon-size, 24px);--_focus-icon-color:var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color:var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color:var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color:var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_active-focus-label-text-color:var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color:var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color:var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color:var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color:var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color:var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color:var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color:var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));display:inline-flex;outline:0;-webkit-tap-highlight-color:transparent;vertical-align:middle;--md-ripple-focus-color:var(--_focus-state-layer-color);--md-ripple-focus-opacity:var(--_focus-state-layer-opacity);--md-ripple-hover-color:var(--_hover-state-layer-color);--md-ripple-hover-opacity:var(--_hover-state-layer-opacity);--md-ripple-pressed-color:var(--_pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_pressed-state-layer-opacity);--md-focus-ring-shape:15px;--md-focus-ring-offset:-7px}.button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;border:none;outline:0;user-select:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;width:100%;position:relative;padding:0;margin:0;z-index:0;font:var(--_label-text-type);background-color:var(--_container-color);border-bottom:var(--_divider-thickness) solid var(--_divider-color);color:var(--_label-text-color)}.button::-moz-focus-inner{padding:0;border:0}.button,md-ripple{border-radius:var(--_container-shape)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;max-height:calc(var(--_container-height) + 16px);min-height:48px;padding:8px 16px;gap:4px}.content.inline-icon{flex-direction:row}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus{color:var(--_focus-label-text-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active{color:var(--_pressed-label-text-color);outline:0}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([selected]) .indicator{opacity:1}:host([selected]) .button{color:var(--_active-label-text-color);--md-elevation-level:var(--_container-elevation);--md-ripple-focus-color:var(--_active-focus-state-layer-color);--md-ripple-focus-opacity:var(--_active-focus-state-layer-opacity);--md-ripple-hover-color:var(--_active-hover-state-layer-color);--md-ripple-hover-opacity:var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color:var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity:var(--_active-pressed-state-layer-opacity)}:host([selected]) .button ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([selected]) .button:hover{color:var(--_active-hover-label-text-color)}:host([selected]) .button:hover ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([selected]) .button:focus{color:var(--_active-focus-label-text-color)}:host([selected]) .button:focus ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([selected]) .button:active{color:var(--_active-pressed-label-text-color)}:host([selected]) .button:active ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host([disabled]){cursor:default;pointer-events:none;opacity:.38}:host([variant~=secondary]){--_active-indicator-color:var(--md-secondary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height:var(--md-secondary-tab-active-indicator-height, 2px);--_active-label-text-color:var(--md-secondary-tab-active-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-color:var(--md-secondary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation:var(--md-secondary-tab-container-elevation, 0);--_container-height:var(--md-secondary-tab-container-height, 48px);--_container-shape:var(--md-secondary-tab-container-shape, 0px);--_focus-label-text-color:var(--md-secondary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-color:var(--md-secondary-tab-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-state-layer-opacity:var(--md-secondary-tab-focus-state-layer-opacity, 0.12);--_hover-label-text-color:var(--md-secondary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color:var(--md-secondary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity:var(--md-secondary-tab-hover-state-layer-opacity, 0.08);--_label-text-type:var(--md-secondary-tab-label-text-type, var(--md-sys-typescale-title-small, 500 0.875rem / 1.25rem var(--md-ref-typeface-plain, Roboto)));--_pressed-label-text-color:var(--md-secondary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color:var(--md-secondary-tab-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity:var(--md-secondary-tab-pressed-state-layer-opacity, 0.12);--_divider-color:var(--md-secondary-tab-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_divider-thickness:var(--md-secondary-tab-divider-thickness, 1px);--_active-focus-label-text-color:var(--md-secondary-tab-active-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-focus-state-layer-color:var(--md-secondary-tab-active-focus-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-focus-state-layer-opacity:var(--md-secondary-tab-active-focus-state-layer-opacity, 0.12);--_active-hover-label-text-color:var(--md-secondary-tab-active-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-color:var(--md-secondary-tab-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-opacity:var(--md-secondary-tab-active-hover-state-layer-opacity, 0.08);--_active-icon-color:var(--md-secondary-tab-active-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_active-indicator-shape:var(--md-secondary-tab-active-indicator-shape, 0);--_active-pressed-label-text-color:var(--md-secondary-tab-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-color:var(--md-secondary-tab-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-opacity:var(--md-secondary-tab-active-pressed-state-layer-opacity, 0.12);--_label-text-color:var(--md-secondary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color:var(--md-secondary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color:var(--md-secondary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-size:var(--md-secondary-tab-icon-size, 24px);--_icon-color:var(--md-secondary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color:var(--md-secondary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([variant~=secondary]) .content{width:100%}:host([variant~=secondary]) .indicator{min-width:100%}:host([variant~=vertical]){flex:0}:host([variant~=vertical]) .button{width:100%;flex-direction:row;border-bottom:none;border-right:var(--_divider-thickness) solid var(--_divider-color)}:host([variant~=vertical]) .content{width:100%}:host([variant~=vertical]) .indicator{height:100%;min-width:var(--_active-indicator-height);inset:0 0 0 auto}:host([variant~=vertical][variant~=primary]){--_active-indicator-shape:9999px 0 0 9999px}::slotted(*),:host{white-space:nowrap}@media(forced-colors:active){:host,:host([variant]){--_active-indicator-color:CanvasText}}`;var _=class extends s{};_.styles=[P];_=r([u("md-tab")],_);var T=new Map([["default",new Set(["Home","End"])],["horizontal",new Set(["ArrowLeft","ArrowRight"])],["vertical",new Set(["ArrowUp","ArrowDown"])]]),c=class extends m{get selectedItem(){return this.items[this.selected]}get previousSelectedItem(){return this.items[this.previousSelected]}get focusedItem(){return this.items.find(e=>e.matches(":focus-within"))}constructor(){super(),this.variant="primary",this.disabled=!1,this.selected=0,this.selectOnFocus=!1,this.previousSelected=-1,this.orientation="horizontal",this.scrollMargin=48,this.itemsDirty=!1,this.selectedAttribute="selected",this.handleKeydown=async e=>{let{key:t}=e;if(!(T.get("default").has(t)||T.get(this.orientation).has(t))||await this.wasEventPrevented(e,!0)||this.disabled)return;let o=-1,d=this.focusedItem??this.selectedItem,v=this.items.length,n=t==="ArrowLeft"||t==="ArrowUp";t==="Home"?o=0:t==="End"?o=v-1:(o=(this.items.indexOf(d)||0)+(n?-1:1),o=o<0?v-1:o%v);let l=this.findFocusableItem(o,t==="End"||n);o=this.items.indexOf(l),l!==null&&l!==d&&(this.updateFocusableItem(l),l.focus(),this.selectOnFocus&&(this.selected=o,await this.dispatchInteraction()))},this.handleKeyup=()=>{this.scrollItemIntoView(this.focusedItem??this.selectedItem)},this.handleFocusout=async()=>{await this.updateComplete;let e=this.getRootNode().activeElement;this.items.indexOf(e)===-1&&this.updateFocusableItem(this.selectedItem)},!1||(this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keyup",this.handleKeyup),this.addEventListener("focusout",this.handleFocusout))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tablist")}findFocusableItem(e=-1,t=!1,a=0){let o=this.items.length-1;for(;this.items[e]?.disabled&&a<=o;){if(a++,e=e+(t?-1:1),e>o)return this.findFocusableItem(0,!1,a);if(e<0)return this.findFocusableItem(o,!0,a)}return this.items[e]??null}async wasEventPrevented(e,t=!1){return t&&(e.preventDefault(),Object.defineProperties(e,{defaultPrevented:{value:!1,writable:!0,configurable:!0},preventDefault:{value(){this.defaultPrevented=!0},writable:!0,configurable:!0}})),await new Promise(requestAnimationFrame),e.defaultPrevented}async dispatchInteraction(){await new Promise(requestAnimationFrame);let e=new Event("change",{bubbles:!0});this.dispatchEvent(e)}willUpdate(e){e.has("selected")&&(this.previousSelected=e.get("selected")??-1),e.has("variant")&&(this.orientation=this.variant.includes("vertical")?"vertical":"horizontal"),this.itemsDirty&&(this.itemsDirty=!1,this.previousSelected=-1)}async updated(e){let t=e.has("itemsDirty")||e.has("variant");(t||e.has("disabled"))&&this.items.forEach((a,o)=>{a.selected=this.selected===o,a.variant=this.variant,a.disabled=this.disabled}),(t||e.has("selected"))&&(this.previousSelectedItem!==this.selectedItem&&(this.previousSelectedItem?.removeAttribute(this.selectedAttribute),this.selectedItem?.setAttribute(this.selectedAttribute,"")),this.selectedItem!==this.focusedItem&&this.updateFocusableItem(this.selectedItem),await this.scrollItemIntoView())}updateFocusableItem(e){for(let t of this.items)t.focusable=t===e}render(){return p`<slot @slotchange="${this.handleSlotChange}" @click="${this.handleItemClick}"></slot>`}async handleItemClick(e){let{target:t}=e;if(await this.wasEventPrevented(e))return;let a=t.closest(`${this.localName} > *`),o=this.items.indexOf(a);o>-1&&this.selected!==o&&(this.selected=o,this.updateFocusableItem(this.selectedItem),await this.dispatchInteraction())}handleSlotChange(){this.itemsDirty=!0}async itemsUpdateComplete(){for(let e of this.items)await e.updateComplete;return!0}async scrollItemIntoView(e=this.selectedItem){if(!e)return;await this.itemsUpdateComplete();let t=this.orientation==="vertical",a=t?e.offsetTop:e.offsetLeft,o=t?e.offsetHeight:e.offsetWidth,d=t?this.scrollTop:this.scrollLeft,v=t?this.offsetHeight:this.offsetWidth,n=a-this.scrollMargin,l=a+o-v+this.scrollMargin,h=Math.min(n,Math.max(l,d)),y=this.focusedItem!==void 0?"smooth":"instant";this.scrollTo({behavior:y,[t?"left":"top"]:0,[t?"top":"left"]:h})}};c.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};r([i({reflect:!0})],c.prototype,"variant",void 0);r([i({type:Boolean})],c.prototype,"disabled",void 0);r([i({type:Number})],c.prototype,"selected",void 0);r([i({type:Boolean})],c.prototype,"selectOnFocus",void 0);r([A({selector:"md-tab",flatten:!0})],c.prototype,"items",void 0);r([b()],c.prototype,"itemsDirty",void 0);var L=f`:host{box-sizing:border-box;display:flex;justify-content:space-between;align-items:end;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host([variant~=vertical]:not([hidden])){display:inline-flex;flex-direction:column;align-items:stretch;gap:0}:host::-webkit-scrollbar{display:none}::slotted(*){flex:1}::slotted([selected]){z-index:1}`;var I=class extends c{};I.styles=[L];I=r([u("md-tabs")],I);
