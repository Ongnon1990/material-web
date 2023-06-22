import"../chunk-5J4CJYVU.js";import{d as h}from"../chunk-7VE3HJJA.js";import"../chunk-DVFNVNJF.js";import"../chunk-PG6OKG6X.js";import"../chunk-UPS7OVEN.js";import"../chunk-IWKN7XWV.js";import"../chunk-F2UFI3JK.js";import"../chunk-32HEDUCQ.js";var d={origin:"*",inferTarget:!1,onMessage:()=>{}},a;(function(t){t.HANDSHAKE="_DOCTOR_HANDSHAKE",t.HANDSHAKE_ACK="_DOCTOR_HANDSHAKE_ACK"})(a||(a={}));var n=class{constructor(e){this._messageTarget=null,this._messageReceiver=null,this._resolveHandshake=()=>{},this._messageChannel=null,this._messagePort=null,this._handshakeComplete=!1,this._messagePortDirty=!1,this._inferTarget=!0,this._onMessageReceiverMessage=i=>{switch(i.data){case a.HANDSHAKE:this._onHandshake(i);break;case a.HANDSHAKE_ACK:this._onHandshakeAck(i);break;default:(_=>_)(i.data);break}};let{inferTarget:s,origin:r,messageTarget:o,messageReceiver:g,onMessage:m}={...d,...e};this._onMessage=m,this._origin=r,this._inferTarget=s,this._resetHandshake(!0),g&&(this.messageReceiver=g),o&&(this.messageTarget=o)}get handshake(){return this._handshake}get onMessage(){return this._onMessage}set onMessage(e){this._messagePort&&this._messagePort.removeEventListener("message",this._onMessage),this._onMessage=e,this._messagePort&&this._messagePort.addEventListener("message",e)}set messageReceiver(e){this._messageReceiver&&this._messageReceiver.removeEventListener("message",this._onMessageReceiverMessage),this._messageReceiver=e,e&&e.addEventListener("message",this._onMessageReceiverMessage)}get messageReceiver(){return this._messageReceiver}set messageTarget(e){this._messageTarget=e,this._messageTarget&&(this._destroyMessagePort(),this._resetHandshake(),this._postMessageToTarget(a.HANDSHAKE))}get messageTarget(){return this._messageTarget}_resetHandshake(e=!1){(e||this._handshakeComplete)&&(this._handshakeComplete=!1,this._handshake=new Promise(s=>{this._resolveHandshake=s}))}_postMessageToTarget(e,s){if(!this._messageTarget)throw new Error("messageTarget not defined");"window"in this._messageTarget?this._messageTarget.postMessage(e,this._origin,s):this._messageTarget.postMessage(e,{transfer:s})}_onHandshake(e){if(this._inferTarget&&!this.messageTarget&&e.source)this._messageTarget=e.source;else if(this.messageTarget&&e.source&&e.source!==this.messageTarget)return;this.messageTarget&&(this._resetHandshake(),this._messagePort&&this._destroyMessagePort(),this._messagePortDirty=!0,this._messageChannel=new MessageChannel,this._messagePort=this._messageChannel.port1,this._messagePort.addEventListener("message",this.onMessage),this._messagePort.start(),this._postMessageToTarget(a.HANDSHAKE_ACK,[this._messageChannel.port2]))}_onHandshakeAck(e){if(!(!this._inferTarget&&!this.messageTarget)){if(!this.messageTarget)throw new Error("messageTarget not defined");e.source&&e.source!==this.messageTarget||((!this._messagePort||this._messagePortDirty&&e.ports[0])&&(this._messagePort=e.ports[0],this._messagePort.addEventListener("message",this.onMessage),this._messagePort.start(),this._postMessageToTarget(a.HANDSHAKE_ACK)),this._messagePortDirty=!1,this._handshakeComplete=!0,this._resolveHandshake(this))}}_destroyMessagePort(){this._messageChannel?(this._messageChannel.port1.removeEventListener("message",this.onMessage),this._messageChannel.port1.close(),this._messageChannel.port2.removeEventListener("message",this.onMessage),this._messageChannel.port2.close()):this._messagePort&&(this._messagePort.removeEventListener("message",this.onMessage),this._messagePort.close()),this._messageChannel=null,this._messagePort=null}postMessage(e,s){if(!this._messagePort||!this._handshakeComplete)throw new Error("Handhsake not complete");this._messagePort.postMessage(e,s)}};async function l(t,e){await e.updateComplete;let s=e.iframe;s.addEventListener("load",r=>{t.messageTarget=s.contentWindow})}async function c(){async function t(r){r.data==="request-theme"&&(await e.handshake,e.postMessage(h()))}let e=new n({messageReceiver:window,onMessage:t}),s=document.querySelector("playground-preview");s&&(await customElements.whenDefined("playground-preview"),await l(e,s),await e.handshake,window.addEventListener("theme-changed",async()=>{await e.handshake,e.postMessage(localStorage.getItem("material-theme"))}))}function u(){let t=document.querySelector("details"),e=t?.querySelector("summary md-outlined-icon-button");t?.addEventListener("toggle",()=>{e.selected=t.open}),e?.addEventListener("click",()=>{setTimeout(()=>{t?.open!==e.selected&&t.toggleAttribute("open")})})}c();u();
