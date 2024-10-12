const __vite__fileDeps=["assets/index-BinQVJoR.js","assets/index-B8EwGL3f.js","assets/index-DPgcePPB.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{an as y,ao as g,ap as l,aq as c,ar as p,as as v,at as C,au as x,av as m,aw as S,U as A,i as k,ax as E,ay as w,az as O,aA as h,c as _,aB as L}from"./index-B8EwGL3f.js";const N=y`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var d=function(u,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(u,e,t,o);else for(var r=u.length-1;r>=0;r--)(n=u[r])&&(i=(a<3?n(i):a>3?n(e,t,i):n(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};const f="scroll-lock";let s=class extends g{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=l.state.open,this.caipAddress=c.state.caipAddress,this.isSiweEnabled=p.state.isSiweEnabled,this.connected=c.state.isConnected,this.loading=l.state.loading,this.initializeTheming(),v.prefetch(),this.unsubscribe.push(l.subscribeKey("open",e=>e?this.onOpen():this.onClose()),l.subscribeKey("loading",e=>{this.loading=e,this.onNewAddress(c.state.caipAddress)}),c.subscribeKey("isConnected",e=>this.connected=e),c.subscribeKey("caipAddress",e=>this.onNewAddress(e)),p.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),C.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?x`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){const{SIWEController:e}=await m(async()=>{const{SIWEController:t}=await import("./index-BinQVJoR.js");return{SIWEController:t}},__vite__mapDeps([0,1,2]));e.state.status!=="success"&&this.connected&&await S.disconnect()}l.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=L.state,o=A.getColorTheme(t);k(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),E.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=f,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${f}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if(t.key==="Escape")this.handleClose();else if(t.key==="Tab"){const{tagName:o}=t.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){if(!this.connected||this.loading)return;const t=w.getPlainAddress(this.caipAddress),o=w.getPlainAddress(e),a=w.getNetworkId(this.caipAddress),i=w.getNetworkId(e);if(this.caipAddress=e,this.isSiweEnabled){const{SIWEController:n}=await m(async()=>{const{SIWEController:b}=await import("./index-BinQVJoR.js");return{SIWEController:b}},__vite__mapDeps([0,1,2])),r=await n.getSession();if(r&&t&&o&&t!==o){n.state._client?.options.signOutOnAccountChange&&(await n.signOut(),this.onSiweNavigation());return}if(r&&a&&i&&a!==i){n.state._client?.options.signOutOnNetworkChange&&(await n.signOut(),this.onSiweNavigation());return}this.onSiweNavigation()}}onSiweNavigation(){this.open?O.push("ConnectingSiwe"):l.open({view:"ConnectingSiwe"})}};s.styles=N;d([h()],s.prototype,"open",void 0);d([h()],s.prototype,"caipAddress",void 0);d([h()],s.prototype,"isSiweEnabled",void 0);d([h()],s.prototype,"connected",void 0);d([h()],s.prototype,"loading",void 0);s=d([_("w3m-modal")],s);export{s as W3mModal};
