import {
  ne,
  p,
  se,
  y
} from "./chunk-IBHPKUMD.js";
import "./chunk-RZICIBFF.js";
import "./chunk-256EKJAK.js";

// node_modules/@walletconnect/modal/dist/index.js
var d = class {
  constructor(e) {
    this.openModal = se.open, this.closeModal = se.close, this.subscribeModal = se.subscribe, this.setTheme = ne.setThemeConfig, ne.setThemeConfig(e), y.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./dist-BRUU7NJ7.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), p.setIsUiLoaded(true);
    }
  }
};
export {
  d as WalletConnectModal
};
//# sourceMappingURL=dist-NF744F5J.js.map
