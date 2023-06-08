import{e as o,f as i,g as r,l as c,m as l,n as d}from"./chunk-N7NMZY4C.js";import{a as n}from"./chunk-XCNF2U7M.js";import{a as e}from"./chunk-32HEDUCQ.js";var t=class extends d{constructor(){super(...arguments);this.showCheckmark=!1;this.label="Copy code";this.successLabel="Copy successful";this.buttonTitle="Copy code"}render(){let s=this.showCheckmark?this.successLabel:this.label,a=this.showCheckmark?"check":"content_copy";return n`
      <slot></slot>
      <md-standard-icon-button @click=${this.onClick} title=${this.buttonTitle}>
        <md-icon aria-live="polite" aria-label=${s}>
          <span aria-hidden="true">${a}</span>
        </md-icon>
      </md-standard-icon-button>
    `}async onClick(){await navigator.clipboard.writeText(this.getCopyText()),this.onCopySuccess()}getCopyText(){let s="";for(let a of this.slottedEls)s+=a.textContent;return s}onCopySuccess(){this.showCheckmark=!0,this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>{this.showCheckmark=!1},2e3)}};t.styles=l`
    :host {
      display: block;
      position: relative;
      --_border-radius: calc(var(--catalog-code-block-border-radius) / 4);
    }

    md-standard-icon-button {
      color: red;
      position: absolute;
      inset: var(--catalog-copy-code-button-inset, var(--_border-radius) var(--_border-radius) auto auto);
      --md-sys-color-on-surface-variant: var(--md-sys-color-on-surface);
    }
  `,e([r()],t.prototype,"showCheckmark",2),e([i()],t.prototype,"label",2),e([i({attribute:"success-label"})],t.prototype,"successLabel",2),e([i({attribute:"button-title"})],t.prototype,"buttonTitle",2),e([c({flatten:!0,selector:"*"})],t.prototype,"slottedEls",2),t=e([o("copy-code-button")],t);
