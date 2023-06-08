import"../chunk-LYNMPIFB.js";import"../chunk-W3WXIWI4.js";import"../chunk-4JJ3YIXV.js";import"../chunk-F6QIDFPJ.js";import{e as i,g as a,l as r,m as c,n as l}from"../chunk-N7NMZY4C.js";import{a as n}from"../chunk-XCNF2U7M.js";import{a as o}from"../chunk-32HEDUCQ.js";var t=class extends l{constructor(){super(...arguments);this.showCheckmark=!1}render(){let e=this.showCheckmark?"copy successful":"copy code",s=this.showCheckmark?"check":"content_copy";return n`
      <slot></slot>
      <md-standard-icon-button @click=${this.onClick} title="copy code">
        <md-icon aria-live="polite" aria-label=${e}>
          <span aria-hidden="true">${s}</span>
        </md-icon>
      </md-standard-icon-button>
    `}async onClick(){let e="";for(let s of this.slottedEls)e+=s.textContent;await navigator.clipboard.writeText(e),this.onCopySuccess()}onCopySuccess(){this.showCheckmark=!0,this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>{this.showCheckmark=!1},2e3)}};t.styles=c`
    :host {
      display: block;
      position: relative;
      --_border-radius: calc(var(--catalog-code-block-border-radius) / 4);
    }

    md-standard-icon-button {
      color: red;
      position: absolute;
      inset: var(--_border-radius) var(--_border-radius) auto auto;
      --md-sys-color-on-surface-variant: var(--md-sys-color-on-surface);
    }
  `,o([a()],t.prototype,"showCheckmark",2),o([r({flatten:!0,selector:"*"})],t.prototype,"slottedEls",2),t=o([i("copy-code-button")],t);
