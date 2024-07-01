import {
  require_react
} from "./chunk-OJK6TXMW.js";
import {
  ConstantsUtil,
  NetworkUtil,
  NumberUtil,
  erc20ABI,
  getW3mThemeVariables
} from "./chunk-Q6GHLW5B.js";
import {
  proxy,
  ref,
  snapshot,
  subscribe
} from "./chunk-RZICIBFF.js";
import {
  __commonJS,
  __toESM
} from "./chunk-256EKJAK.js";

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = require_react();
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x2, y2) {
          return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState = React.useState, useEffect2 = React.useEffect, useLayoutEffect2 = React.useLayoutEffect, useDebugValue2 = React.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe2, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect2(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe2, value, getSnapshot]);
          useEffect2(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe2(handleStoreChange);
          }, [subscribe2]);
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe2, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React.useSyncExternalStore !== void 0 ? React.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i2 = 0, len = code.length; i2 < len; ++i2) {
      lookup[i2] = code[i2];
      revLookup[code.charCodeAt(i2)] = i2;
    }
    var i2;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i3;
      for (i3 = 0; i3 < len2; i3 += 4) {
        tmp = revLookup[b64.charCodeAt(i3)] << 18 | revLookup[b64.charCodeAt(i3 + 1)] << 12 | revLookup[b64.charCodeAt(i3 + 2)] << 6 | revLookup[b64.charCodeAt(i3 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i3)] << 2 | revLookup[b64.charCodeAt(i3 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i3)] << 10 | revLookup[b64.charCodeAt(i3 + 1)] << 4 | revLookup[b64.charCodeAt(i3 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i3 = start; i3 < end; i3 += 3) {
        tmp = (uint8[i3] << 16 & 16711680) + (uint8[i3 + 1] << 8 & 65280) + (uint8[i3 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i3 = 0, len22 = len2 - extraBytes; i3 < len22; i3 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i3, i3 + maxChunkLength > len22 ? len22 : i3 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m2;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i2 = isLE ? nBytes - 1 : 0;
      var d2 = isLE ? -1 : 1;
      var s2 = buffer[offset + i2];
      i2 += d2;
      e = s2 & (1 << -nBits) - 1;
      s2 >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i2], i2 += d2, nBits -= 8) {
      }
      m2 = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m2 = m2 * 256 + buffer[offset + i2], i2 += d2, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m2 ? NaN : (s2 ? -1 : 1) * Infinity;
      } else {
        m2 = m2 + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s2 ? -1 : 1) * m2 * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m2, c2;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i2 = isLE ? 0 : nBytes - 1;
      var d2 = isLE ? 1 : -1;
      var s2 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m2 = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c2 = Math.pow(2, -e)) < 1) {
          e--;
          c2 *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c2;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c2 >= 2) {
          e++;
          c2 /= 2;
        }
        if (e + eBias >= eMax) {
          m2 = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m2 = (value * c2 - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m2 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i2] = m2 & 255, i2 += d2, m2 /= 256, mLen -= 8) {
      }
      e = e << mLen | m2;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i2] = e & 255, i2 += d2, e /= 256, eLen -= 8) {
      }
      buffer[offset + i2 - d2] |= s2 * 128;
    };
  }
});

// node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      const b2 = fromObject(value);
      if (b2) return b2;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i2 = 0; i2 < length; i2 += 1) {
        buf[i2] = array[i2] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b2) {
      return b2 != null && b2._isBuffer === true && b2 !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a2, b2) {
      if (isInstance(a2, Uint8Array)) a2 = Buffer2.from(a2, a2.offset, a2.byteLength);
      if (isInstance(b2, Uint8Array)) b2 = Buffer2.from(b2, b2.offset, b2.byteLength);
      if (!Buffer2.isBuffer(a2) || !Buffer2.isBuffer(b2)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a2 === b2) return 0;
      let x2 = a2.length;
      let y2 = b2.length;
      for (let i2 = 0, len = Math.min(x2, y2); i2 < len; ++i2) {
        if (a2[i2] !== b2[i2]) {
          x2 = a2[i2];
          y2 = b2[i2];
          break;
        }
      }
      if (x2 < y2) return -1;
      if (y2 < x2) return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      let i2;
      if (length === void 0) {
        length = 0;
        for (i2 = 0; i2 < list.length; ++i2) {
          length += list[i2].length;
        }
      }
      const buffer = Buffer2.allocUnsafe(length);
      let pos = 0;
      for (i2 = 0; i2 < list.length; ++i2) {
        let buf = list[i2];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer2.isBuffer(buf)) buf = Buffer2.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b2, n2, m2) {
      const i2 = b2[n2];
      b2[n2] = b2[m2];
      b2[m2] = i2;
    }
    Buffer2.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 2) {
        swap(this, i2, i2 + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 4) {
        swap(this, i2, i2 + 3);
        swap(this, i2 + 1, i2 + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i2 = 0; i2 < len; i2 += 8) {
        swap(this, i2, i2 + 7);
        swap(this, i2 + 1, i2 + 6);
        swap(this, i2 + 2, i2 + 5);
        swap(this, i2 + 3, i2 + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b2) {
      if (!Buffer2.isBuffer(b2)) throw new TypeError("Argument must be a Buffer");
      if (this === b2) return true;
      return Buffer2.compare(this, b2) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      let x2 = thisEnd - thisStart;
      let y2 = end - start;
      const len = Math.min(x2, y2);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i2 = 0; i2 < len; ++i2) {
        if (thisCopy[i2] !== targetCopy[i2]) {
          x2 = thisCopy[i2];
          y2 = targetCopy[i2];
          break;
        }
      }
      if (x2 < y2) return -1;
      if (y2 < x2) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i3) {
        if (indexSize === 1) {
          return buf[i3];
        } else {
          return buf.readUInt16BE(i3 * indexSize);
        }
      }
      let i2;
      if (dir) {
        let foundIndex = -1;
        for (i2 = byteOffset; i2 < arrLength; i2++) {
          if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i2;
            if (i2 - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i2 -= i2 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i2 = byteOffset; i2 >= 0; i2--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i2 + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i2;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i2;
      for (i2 = 0; i2 < length; ++i2) {
        const parsed = parseInt(string.substr(i2 * 2, 2), 16);
        if (numberIsNaN(parsed)) return i2;
        buf[offset + i2] = parsed;
      }
      return i2;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i2 = start;
      while (i2 < end) {
        const firstByte = buf[i2];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i2 + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i2 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              fourthByte = buf[i2 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i2 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i2 = 0;
      while (i2 < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      let out = "";
      for (let i2 = start; i2 < end; ++i2) {
        out += hexSliceLookupTable[buf[i2]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i2 = 0; i2 < bytes.length - 1; i2 += 2) {
        res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength2 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength2 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      let i2 = byteLength2;
      let mul = 1;
      let val = this[offset + --i2];
      while (i2 > 0 && (mul *= 256)) {
        val += this[offset + --i2] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i2 = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength2 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i2 = byteLength2 - 1;
      let mul = 1;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i2 = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i2 = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      let i2;
      if (typeof val === "number") {
        for (i2 = start; i2 < end; ++i2) {
          this[i2] = val;
        }
      } else {
        const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i2 = 0; i2 < end - start; ++i2) {
          this[i2 + start] = bytes[i2 % len];
        }
      }
      return this;
    };
    var errors = {};
    function E2(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E2(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      },
      RangeError
    );
    E2(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      },
      TypeError
    );
    E2(
      "ERR_OUT_OF_RANGE",
      function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      },
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i2 = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i2 >= start + 4; i2 -= 3) {
        res = `_${val.slice(i2 - 3, i2)}${res}`;
      }
      return `${val.slice(0, i2)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n2 = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n2} and < 2${n2} ** ${(byteLength2 + 1) * 8}${n2}`;
          } else {
            range = `>= -(2${n2} ** ${(byteLength2 + 1) * 8 - 1}${n2}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n2}`;
          }
        } else {
          range = `>= ${min}${n2} and <= ${max}${n2}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(
        type || "offset",
        `>= ${type ? 1 : 0} and <= ${length}`,
        value
      );
    }
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i2 = 0; i2 < length; ++i2) {
        codePoint = string.charCodeAt(i2);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i2 + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        byteArray.push(str.charCodeAt(i2) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c2, hi, lo;
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        if ((units -= 2) < 0) break;
        c2 = str.charCodeAt(i2);
        hi = c2 >> 8;
        lo = c2 % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i2;
      for (i2 = 0; i2 < length; ++i2) {
        if (i2 + offset >= dst.length || i2 >= src.length) break;
        dst[i2 + offset] = src[i2];
      }
      return i2;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i2 = 0; i2 < 16; ++i2) {
        const i16 = i2 * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i2] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  }
});

// node_modules/quick-format-unescaped/index.js
var require_quick_format_unescaped = __commonJS({
  "node_modules/quick-format-unescaped/index.js"(exports, module) {
    "use strict";
    function tryStringify(o) {
      try {
        return JSON.stringify(o);
      } catch (e) {
        return '"[Circular]"';
      }
    }
    module.exports = format;
    function format(f2, args, opts) {
      var ss = opts && opts.stringify || tryStringify;
      var offset = 1;
      if (typeof f2 === "object" && f2 !== null) {
        var len = args.length + offset;
        if (len === 1) return f2;
        var objects = new Array(len);
        objects[0] = ss(f2);
        for (var index = 1; index < len; index++) {
          objects[index] = ss(args[index]);
        }
        return objects.join(" ");
      }
      if (typeof f2 !== "string") {
        return f2;
      }
      var argLen = args.length;
      if (argLen === 0) return f2;
      var str = "";
      var a2 = 1 - offset;
      var lastPos = -1;
      var flen = f2 && f2.length || 0;
      for (var i2 = 0; i2 < flen; ) {
        if (f2.charCodeAt(i2) === 37 && i2 + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f2.charCodeAt(i2 + 1)) {
            case 100:
            case 102:
              if (a2 >= argLen)
                break;
              if (args[a2] == null) break;
              if (lastPos < i2)
                str += f2.slice(lastPos, i2);
              str += Number(args[a2]);
              lastPos = i2 + 2;
              i2++;
              break;
            case 105:
              if (a2 >= argLen)
                break;
              if (args[a2] == null) break;
              if (lastPos < i2)
                str += f2.slice(lastPos, i2);
              str += Math.floor(Number(args[a2]));
              lastPos = i2 + 2;
              i2++;
              break;
            case 79:
            case 111:
            case 106:
              if (a2 >= argLen)
                break;
              if (args[a2] === void 0) break;
              if (lastPos < i2)
                str += f2.slice(lastPos, i2);
              var type = typeof args[a2];
              if (type === "string") {
                str += "'" + args[a2] + "'";
                lastPos = i2 + 2;
                i2++;
                break;
              }
              if (type === "function") {
                str += args[a2].name || "<anonymous>";
                lastPos = i2 + 2;
                i2++;
                break;
              }
              str += ss(args[a2]);
              lastPos = i2 + 2;
              i2++;
              break;
            case 115:
              if (a2 >= argLen)
                break;
              if (lastPos < i2)
                str += f2.slice(lastPos, i2);
              str += String(args[a2]);
              lastPos = i2 + 2;
              i2++;
              break;
            case 37:
              if (lastPos < i2)
                str += f2.slice(lastPos, i2);
              str += "%";
              lastPos = i2 + 2;
              i2++;
              a2--;
              break;
          }
          ++a2;
        }
        ++i2;
      }
      if (lastPos === -1)
        return f2;
      else if (lastPos < flen) {
        str += f2.slice(lastPos);
      }
      return str;
    }
  }
});

// node_modules/pino/browser.js
var require_browser = __commonJS({
  "node_modules/pino/browser.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    module.exports = pino;
    var _console = pfGlobalThisOrFallback().console || {};
    var stdSerializers = {
      mapHttpRequest: mock,
      mapHttpResponse: mock,
      wrapRequestSerializer: passthrough,
      wrapResponseSerializer: passthrough,
      wrapErrorSerializer: passthrough,
      req: mock,
      res: mock,
      err: asErrValue
    };
    function shouldSerialize(serialize, serializers) {
      if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k2) {
          return k2 !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize === true) {
        return Object.keys(serializers);
      }
      return false;
    }
    function pino(opts) {
      opts = opts || {};
      opts.browser = opts.browser || {};
      const transmit2 = opts.browser.transmit;
      if (transmit2 && typeof transmit2.send !== "function") {
        throw Error("pino: transmit option must have a send function");
      }
      const proto = opts.browser.write || _console;
      if (opts.browser.write) opts.browser.asObject = true;
      const serializers = opts.serializers || {};
      const serialize = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
      if (typeof proto === "function") {
        proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
      }
      if (opts.enabled === false) opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto);
      if (!logger.log) logger.log = noop;
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = pino.levels;
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = child;
      if (transmit2) logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set(setOpts, logger, "error", "log");
        set(setOpts, logger, "fatal", "error");
        set(setOpts, logger, "warn", "error");
        set(setOpts, logger, "info", "log");
        set(setOpts, logger, "debug", "log");
        set(setOpts, logger, "trace", "log");
      }
      function child(bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent2) {
          this._childLevel = (parent2._childLevel | 0) + 1;
          this.error = bind(parent2, bindings, "error");
          this.fatal = bind(parent2, bindings, "fatal");
          this.warn = bind(parent2, bindings, "warn");
          this.info = bind(parent2, bindings, "info");
          this.debug = bind(parent2, bindings, "debug");
          this.trace = bind(parent2, bindings, "trace");
          if (childSerializers) {
            this.serializers = childSerializers;
            this._serialize = childSerialize;
          }
          if (transmit2) {
            this._logEvent = createLogEventShape(
              [].concat(parent2._logEvent.bindings, bindings)
            );
          }
        }
        Child.prototype = this;
        return new Child(this);
      }
      return logger;
    }
    pino.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    };
    pino.stdSerializers = stdSerializers;
    pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
    function set(opts, logger, level, fallback) {
      const proto = Object.getPrototypeOf(logger);
      logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
      wrap(opts, logger, level);
    }
    function wrap(opts, logger, level) {
      if (!opts.transmit && logger[level] === noop) return;
      logger[level] = /* @__PURE__ */ function(write) {
        return function LOG() {
          const ts = opts.timestamp();
          const args = new Array(arguments.length);
          const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i2 = 0; i2 < args.length; i2++) args[i2] = arguments[i2];
          if (opts.serialize && !opts.asObject) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
          }
          if (opts.asObject) write.call(proto, asObject(this, level, args, ts));
          else write.apply(proto, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || logger.level;
            const transmitValue = pino.levels.values[transmitLevel];
            const methodValue = pino.levels.values[level];
            if (methodValue < transmitValue) return;
            transmit(this, {
              ts,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: pino.levels.values[opts.transmit.level || logger.level],
              send: opts.transmit.send,
              val: logger.levelVal
            }, args);
          }
        };
      }(logger[level]);
    }
    function asObject(logger, level, args, ts) {
      if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const o = {};
      if (ts) {
        o.time = ts;
      }
      o.level = pino.levels.values[level];
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1) lvl = 1;
      if (msg !== null && typeof msg === "object") {
        while (lvl-- && typeof argsCloned[0] === "object") {
          Object.assign(o, argsCloned.shift());
        }
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
      } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
      if (msg !== void 0) o.msg = msg;
      return o;
    }
    function applySerializers(args, serialize, serializers, stdErrSerialize) {
      for (const i2 in args) {
        if (stdErrSerialize && args[i2] instanceof Error) {
          args[i2] = pino.stdSerializers.err(args[i2]);
        } else if (typeof args[i2] === "object" && !Array.isArray(args[i2])) {
          for (const k2 in args[i2]) {
            if (serialize && serialize.indexOf(k2) > -1 && k2 in serializers) {
              args[i2][k2] = serializers[k2](args[i2][k2]);
            }
          }
        }
      }
    }
    function bind(parent2, bindings, level) {
      return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for (var i2 = 1; i2 < args.length; i2++) {
          args[i2] = arguments[i2 - 1];
        }
        return parent2[level].apply(this, args);
      };
    }
    function transmit(logger, opts, args) {
      const send = opts.send;
      const ts = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      applySerializers(
        args,
        logger._serialize || Object.keys(logger.serializers),
        logger.serializers,
        logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
      );
      logger._logEvent.ts = ts;
      logger._logEvent.messages = args.filter(function(arg) {
        return bindings.indexOf(arg) === -1;
      });
      logger._logEvent.level.label = methodLevel;
      logger._logEvent.level.value = methodValue;
      send(methodLevel, logger._logEvent, val);
      logger._logEvent = createLogEventShape(bindings);
    }
    function createLogEventShape(bindings) {
      return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: { label: "", value: 0 }
      };
    }
    function asErrValue(err) {
      const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
      };
      for (const key in err) {
        if (obj[key] === void 0) {
          obj[key] = err[key];
        }
      }
      return obj;
    }
    function getTimeFunction(opts) {
      if (typeof opts.timestamp === "function") {
        return opts.timestamp;
      }
      if (opts.timestamp === false) {
        return nullTime;
      }
      return epochTime;
    }
    function mock() {
      return {};
    }
    function passthrough(a2) {
      return a2;
    }
    function noop() {
    }
    function nullTime() {
      return false;
    }
    function epochTime() {
      return Date.now();
    }
    function unixTime() {
      return Math.round(Date.now() / 1e3);
    }
    function isoTime() {
      return new Date(Date.now()).toISOString();
    }
    function pfGlobalThisOrFallback() {
      function defd(o) {
        return typeof o !== "undefined" && o;
      }
      try {
        if (typeof globalThis !== "undefined") return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            delete Object.prototype.globalThis;
            return this.globalThis = this;
          },
          configurable: true
        });
        return globalThis;
      } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
  }
});

// node_modules/valtio/esm/vanilla/utils.mjs
function subscribeKey(proxyObject, key, callback, notifyInSync) {
  let prevValue = proxyObject[key];
  return subscribe(
    proxyObject,
    () => {
      const nextValue = proxyObject[key];
      if (!Object.is(prevValue, nextValue)) {
        callback(prevValue = nextValue);
      }
    },
    notifyInSync
  );
}
var DEVTOOLS = Symbol();

// node_modules/@web3modal/core/dist/esm/src/utils/ConstantsUtil.js
var SECURE_SITE = "https://secure.walletconnect.com";
var ONRAMP_PROVIDERS = [
  {
    label: "Coinbase",
    name: "coinbase",
    feeRange: "1-2%",
    url: ""
  }
];
var ConstantsUtil2 = {
  FOUR_MINUTES_MS: 24e4,
  TEN_SEC_MS: 1e4,
  ONE_SEC_MS: 1e3,
  SECURE_SITE,
  SECURE_SITE_DASHBOARD: `${SECURE_SITE}/dashboard`,
  SECURE_SITE_FAVICON: `${SECURE_SITE}/images/favicon.png`,
  RESTRICTED_TIMEZONES: [
    "ASIA/SHANGHAI",
    "ASIA/URUMQI",
    "ASIA/CHONGQING",
    "ASIA/HARBIN",
    "ASIA/KASHGAR",
    "ASIA/MACAU",
    "ASIA/HONG_KONG",
    "ASIA/MACAO",
    "ASIA/BEIJING",
    "ASIA/HARBIN"
  ],
  WC_COINBASE_PAY_SDK_CHAINS: [
    "ethereum",
    "arbitrum",
    "polygon",
    "avalanche-c-chain",
    "optimism",
    "celo",
    "base"
  ],
  WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: "ethereum",
  WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
    Ethereum: "ethereum",
    "Arbitrum One": "arbitrum",
    Polygon: "polygon",
    Avalanche: "avalanche-c-chain",
    "OP Mainnet": "optimism",
    Celo: "celo",
    Base: "base"
  },
  WC_COINBASE_ONRAMP_APP_ID: "bf18c88d-495a-463b-b249-0b9d3656cf5e",
  SWAP_SUGGESTED_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP"
  ],
  SWAP_POPULAR_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP",
    "METAL",
    "DAI",
    "CHAMP",
    "WOLF",
    "SALE",
    "BAL",
    "BUSD",
    "MUST",
    "BTCpx",
    "ROUTE",
    "HEX",
    "WELT",
    "amDAI",
    "VSQ",
    "VISION",
    "AURUM",
    "pSP",
    "SNX",
    "VC",
    "LINK",
    "CHP",
    "amUSDT",
    "SPHERE",
    "FOX",
    "GIDDY",
    "GFC",
    "OMEN",
    "OX_OLD",
    "DE",
    "WNT"
  ],
  SWAP_SUPPORTED_NETWORKS: [
    "eip155:1",
    "eip155:42161",
    "eip155:10",
    "eip155:324",
    "eip155:8453",
    "eip155:56",
    "eip155:137",
    "eip155:100",
    "eip155:43114",
    "eip155:250",
    "eip155:8217",
    "eip155:1313161554"
  ],
  NATIVE_TOKEN_ADDRESS: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  CONVERT_SLIPPAGE_TOLERANCE: 1
};

// node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = {
  isMobile() {
    if (typeof window !== "undefined") {
      return Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
    }
    return false;
  },
  checkCaipNetwork(network, networkName = "") {
    return network == null ? void 0 : network.id.toLocaleLowerCase().includes(networkName.toLowerCase());
  },
  isAndroid() {
    const ua = window.navigator.userAgent.toLowerCase();
    return CoreHelperUtil.isMobile() && ua.includes("android");
  },
  isIos() {
    const ua = window.navigator.userAgent.toLowerCase();
    return CoreHelperUtil.isMobile() && (ua.includes("iphone") || ua.includes("ipad"));
  },
  isClient() {
    return typeof window !== "undefined";
  },
  isPairingExpired(expiry) {
    return expiry ? expiry - Date.now() <= ConstantsUtil2.TEN_SEC_MS : true;
  },
  isAllowedRetry(lastRetry) {
    return Date.now() - lastRetry >= ConstantsUtil2.ONE_SEC_MS;
  },
  copyToClopboard(text) {
    navigator.clipboard.writeText(text);
  },
  getPairingExpiry() {
    return Date.now() + ConstantsUtil2.FOUR_MINUTES_MS;
  },
  getNetworkId(caipAddress) {
    return caipAddress == null ? void 0 : caipAddress.split(":")[1];
  },
  getPlainAddress(caipAddress) {
    return caipAddress == null ? void 0 : caipAddress.split(":")[2];
  },
  async wait(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  },
  debounce(func, timeout = 500) {
    let timer = void 0;
    return (...args) => {
      function next() {
        func(...args);
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(next, timeout);
    };
  },
  isHttpUrl(url) {
    return url.startsWith("http://") || url.startsWith("https://");
  },
  formatNativeUrl(appUrl, wcUri) {
    if (CoreHelperUtil.isHttpUrl(appUrl)) {
      return this.formatUniversalUrl(appUrl, wcUri);
    }
    let safeAppUrl = appUrl;
    if (!safeAppUrl.includes("://")) {
      safeAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
      safeAppUrl = `${safeAppUrl}://`;
    }
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    const encodedWcUrl = encodeURIComponent(wcUri);
    return {
      redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
      href: safeAppUrl
    };
  },
  formatUniversalUrl(appUrl, wcUri) {
    if (!CoreHelperUtil.isHttpUrl(appUrl)) {
      return this.formatNativeUrl(appUrl, wcUri);
    }
    let safeAppUrl = appUrl;
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    const encodedWcUrl = encodeURIComponent(wcUri);
    return {
      redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
      href: safeAppUrl
    };
  },
  openHref(href, target, features) {
    window.open(href, target, features || "noreferrer noopener");
  },
  returnOpenHref(href, target, features) {
    return window.open(href, target, features || "noreferrer noopener");
  },
  async preloadImage(src) {
    const imagePromise = new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.crossOrigin = "anonymous";
      image.src = src;
    });
    return Promise.race([imagePromise, CoreHelperUtil.wait(2e3)]);
  },
  formatBalance(balance, symbol) {
    var _a2;
    let formattedBalance = void 0;
    if (balance === "0") {
      formattedBalance = "0.000";
    } else if (typeof balance === "string") {
      const number = Number(balance);
      if (number) {
        formattedBalance = (_a2 = number.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) == null ? void 0 : _a2[0];
      }
    }
    return formattedBalance ? `${formattedBalance} ${symbol ?? ""}` : `0.000 ${symbol ?? ""}`;
  },
  formatBalance2(balance, symbol) {
    var _a2;
    let formattedBalance = void 0;
    if (balance === "0") {
      formattedBalance = "0";
    } else if (typeof balance === "string") {
      const number = Number(balance);
      if (number) {
        formattedBalance = (_a2 = number.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) == null ? void 0 : _a2[0];
      }
    }
    return {
      value: formattedBalance ?? "0",
      rest: formattedBalance === "0" ? "000" : "",
      symbol
    };
  },
  getApiUrl() {
    return ConstantsUtil.W3M_API_URL;
  },
  getBlockchainApiUrl() {
    return ConstantsUtil.BLOCKCHAIN_API_RPC_URL;
  },
  getAnalyticsUrl() {
    return ConstantsUtil.PULSE_API_URL;
  },
  getUUID() {
    if (crypto == null ? void 0 : crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (c2) => {
      const r = Math.random() * 16 | 0;
      const v2 = c2 === "x" ? r : r & 3 | 8;
      return v2.toString(16);
    });
  },
  parseError(error) {
    var _a2, _b;
    if (typeof error === "string") {
      return error;
    } else if (typeof ((_b = (_a2 = error == null ? void 0 : error.issues) == null ? void 0 : _a2[0]) == null ? void 0 : _b.message) === "string") {
      return error.issues[0].message;
    } else if (error instanceof Error) {
      return error.message;
    }
    return "Unknown error";
  },
  sortRequestedNetworks(approvedIds, requestedNetworks = []) {
    const approvedIndexMap = {};
    if (requestedNetworks && approvedIds) {
      approvedIds.forEach((id, index) => {
        approvedIndexMap[id] = index;
      });
      requestedNetworks.sort((a2, b2) => {
        const indexA = approvedIndexMap[a2.id];
        const indexB = approvedIndexMap[b2.id];
        if (indexA !== void 0 && indexB !== void 0) {
          return indexA - indexB;
        } else if (indexA !== void 0) {
          return -1;
        } else if (indexB !== void 0) {
          return 1;
        }
        return 0;
      });
    }
    return requestedNetworks;
  },
  calculateBalance(array) {
    let sum = 0;
    for (const item of array) {
      sum += item.value ?? 0;
    }
    return sum;
  },
  formatTokenBalance(number) {
    const roundedNumber = number.toFixed(2);
    const [dollars, pennies] = roundedNumber.split(".");
    return { dollars, pennies };
  },
  isAddress(address) {
    if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) {
      return false;
    } else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) || /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) {
      return true;
    }
    return false;
  },
  uniqueBy(arr, key) {
    const set = /* @__PURE__ */ new Set();
    return arr.filter((item) => {
      const keyValue = item[key];
      if (set.has(keyValue)) {
        return false;
      }
      set.add(keyValue);
      return true;
    });
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/StorageUtil.js
var WC_DEEPLINK = "WALLETCONNECT_DEEPLINK_CHOICE";
var W3M_RECENT = "@w3m/recent";
var W3M_CONNECTED_WALLET_IMAGE_URL = "@w3m/connected_wallet_image_url";
var W3M_CONNECTED_CONNECTOR = "@w3m/connected_connector";
var W3M_CONNECTED_SOCIAL = "@w3m/connected_social";
var W3M_CONNECTED_SOCIAL_USERNAME = "@w3m-storage/SOCIAL_USERNAME";
var StorageUtil = {
  setWalletConnectDeepLink({ href, name }) {
    try {
      localStorage.setItem(WC_DEEPLINK, JSON.stringify({ href, name }));
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  getWalletConnectDeepLink() {
    try {
      const deepLink = localStorage.getItem(WC_DEEPLINK);
      if (deepLink) {
        return JSON.parse(deepLink);
      }
    } catch {
      console.info("Unable to get WalletConnect deep link");
    }
    return void 0;
  },
  deleteWalletConnectDeepLink() {
    try {
      localStorage.removeItem(WC_DEEPLINK);
    } catch {
      console.info("Unable to delete WalletConnect deep link");
    }
  },
  setWeb3ModalRecent(wallet) {
    try {
      const recentWallets = StorageUtil.getRecentWallets();
      const exists = recentWallets.find((w3) => w3.id === wallet.id);
      if (!exists) {
        recentWallets.unshift(wallet);
        if (recentWallets.length > 2) {
          recentWallets.pop();
        }
        localStorage.setItem(W3M_RECENT, JSON.stringify(recentWallets));
      }
    } catch {
      console.info("Unable to set Web3Modal recent");
    }
  },
  getRecentWallets() {
    try {
      const recent = localStorage.getItem(W3M_RECENT);
      return recent ? JSON.parse(recent) : [];
    } catch {
      console.info("Unable to get Web3Modal recent");
    }
    return [];
  },
  setConnectedWalletImageUrl(imageUrl) {
    try {
      localStorage.setItem(W3M_CONNECTED_WALLET_IMAGE_URL, imageUrl);
    } catch {
      console.info("Unable to set Connected Wallet Image Url");
    }
  },
  removeConnectedWalletImageUrl() {
    try {
      localStorage.removeItem(W3M_CONNECTED_WALLET_IMAGE_URL);
    } catch {
      console.info("Unable to remove Connected Wallet Image Url");
    }
  },
  getConnectedWalletImageUrl() {
    try {
      return localStorage.getItem(W3M_CONNECTED_WALLET_IMAGE_URL);
    } catch {
      console.info("Unable to set Connected Wallet Image Url");
    }
    return void 0;
  },
  setConnectedConnector(connectorType) {
    try {
      localStorage.setItem(W3M_CONNECTED_CONNECTOR, connectorType);
    } catch {
      console.info("Unable to set Connected Connector");
    }
  },
  getConnectedConnector() {
    try {
      return localStorage.getItem(W3M_CONNECTED_CONNECTOR);
    } catch {
      console.info("Unable to get Connected Connector");
    }
    return void 0;
  },
  setConnectedSocialProvider(socialProvider) {
    try {
      localStorage.setItem(W3M_CONNECTED_SOCIAL, socialProvider);
    } catch {
      console.info("Unable to set Connected Social Provider");
    }
  },
  getConnectedSocialProvider() {
    try {
      return localStorage.getItem(W3M_CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to get Connected Social Provider");
    }
    return void 0;
  },
  getConnectedSocialUsername() {
    try {
      return localStorage.getItem(W3M_CONNECTED_SOCIAL_USERNAME);
    } catch {
      console.info("Unable to get Connected Social Username");
    }
    return void 0;
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/FetchUtil.js
async function fetchData(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    const err = new Error(`HTTP status code: ${response.status}`, {
      cause: response
    });
    throw err;
  }
  return response;
}
var FetchUtil = class {
  constructor({ baseUrl: baseUrl4 }) {
    this.baseUrl = baseUrl4;
  }
  async get({ headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, { method: "GET", headers, signal, cache: "no-cache" });
    return response.json();
  }
  async getBlob({ headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, { method: "GET", headers, signal });
    return response.blob();
  }
  async post({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "POST",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  async put({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "PUT",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  async delete({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "DELETE",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  createUrl({ path, params }) {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          url.searchParams.append(key, value);
        }
      });
    }
    return url;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/AssetController.js
var state = proxy({
  walletImages: {},
  networkImages: {},
  connectorImages: {},
  tokenImages: {},
  currencyImages: {}
});
var AssetController = {
  state,
  subscribeNetworkImages(callback) {
    return subscribe(state.networkImages, () => callback(state.networkImages));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state, key, callback);
  },
  subscribe(callback) {
    return subscribe(state, () => callback(state));
  },
  setWalletImage(key, value) {
    state.walletImages[key] = value;
  },
  setNetworkImage(key, value) {
    state.networkImages[key] = value;
  },
  setConnectorImage(key, value) {
    state.connectorImages[key] = value;
  },
  setTokenImage(key, value) {
    state.tokenImages[key] = value;
  },
  setCurrencyImage(key, value) {
    state.currencyImages[key] = value;
  }
};

// node_modules/valtio/esm/react/utils.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/valtio/esm/react.mjs
var import_react = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);
var { use } = import_react.default;
var { useSyncExternalStore } = import_shim.default;

// node_modules/@web3modal/core/dist/esm/src/controllers/PublicStateController.js
var state2 = proxy({
  loading: false,
  open: false,
  selectedNetworkId: void 0
});
var PublicStateController = {
  state: state2,
  subscribe(callback) {
    return subscribe(state2, () => callback(state2));
  },
  set(newState) {
    Object.assign(state2, { ...state2, ...newState });
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/EventsController.js
var baseUrl = CoreHelperUtil.getAnalyticsUrl();
var api = new FetchUtil({ baseUrl });
var excluded = ["MODAL_CREATED"];
var state3 = proxy({
  timestamp: Date.now(),
  data: {
    type: "track",
    event: "MODAL_CREATED"
  }
});
var EventsController = {
  state: state3,
  subscribe(callback) {
    return subscribe(state3, () => callback(state3));
  },
  _getApiHeaders() {
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    return {
      "x-project-id": projectId,
      "x-sdk-type": sdkType,
      "x-sdk-version": sdkVersion
    };
  },
  async _sendAnalyticsEvent(payload) {
    try {
      if (excluded.includes(payload.data.event) || typeof window === "undefined") {
        return;
      }
      await api.post({
        path: "/e",
        headers: EventsController._getApiHeaders(),
        body: {
          eventId: CoreHelperUtil.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: payload.timestamp,
          props: payload.data
        }
      });
    } catch {
    }
  },
  sendEvent(data) {
    state3.timestamp = Date.now();
    state3.data = data;
    if (OptionsController.state.enableAnalytics) {
      EventsController._sendAnalyticsEvent(state3);
    }
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/BlockchainApiController.js
var DEFAULT_OPTIONS = {
  purchaseCurrencies: [
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "USD Coin",
      symbol: "USDC",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    },
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "Ether",
      symbol: "ETH",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    }
  ],
  paymentCurrencies: [
    {
      id: "USD",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    },
    {
      id: "EUR",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    }
  ]
};
var baseUrl2 = CoreHelperUtil.getBlockchainApiUrl();
var api2 = new FetchUtil({ baseUrl: baseUrl2 });
var BlockchainApiController = {
  fetchIdentity({ address }) {
    return api2.get({
      path: `/v1/identity/${address}`,
      params: {
        projectId: OptionsController.state.projectId
      }
    });
  },
  fetchTransactions({ account, projectId, cursor, onramp, signal }) {
    const queryParams = cursor ? { cursor } : {};
    return api2.get({
      path: `/v1/account/${account}/history?projectId=${projectId}${onramp ? `&onramp=${onramp}` : ""}`,
      params: queryParams,
      signal
    });
  },
  fetchSwapQuote({ projectId, amount, userAddress, from, to, gasPrice }) {
    return api2.get({
      path: `/v1/convert/quotes`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        projectId,
        amount,
        userAddress,
        from,
        to,
        gasPrice
      }
    });
  },
  fetchSwapTokens({ projectId, chainId }) {
    return api2.get({
      path: `/v1/convert/tokens?projectId=${projectId}&chainId=${chainId}`
    });
  },
  fetchTokenPrice({ projectId, addresses }) {
    return api2.post({
      path: "/v1/fungible/price",
      body: {
        projectId,
        currency: "usd",
        addresses
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  fetchSwapAllowance({ projectId, tokenAddress, userAddress }) {
    const { sdkType, sdkVersion } = OptionsController.state;
    return api2.get({
      path: `/v1/convert/allowance?projectId=${projectId}&tokenAddress=${tokenAddress}&userAddress=${userAddress}`,
      headers: {
        "Content-Type": "application/json",
        "x-sdk-type": sdkType,
        "x-sdk-version": sdkVersion
      }
    });
  },
  fetchGasPrice({ projectId, chainId }) {
    const { sdkType, sdkVersion } = OptionsController.state;
    return api2.get({
      path: `/v1/convert/gas-price`,
      headers: {
        "Content-Type": "application/json",
        "x-sdk-type": sdkType,
        "x-sdk-version": sdkVersion
      },
      params: {
        projectId,
        chainId
      }
    });
  },
  generateSwapCalldata({ amount, from, projectId, to, userAddress }) {
    return api2.post({
      path: "/v1/convert/build-transaction",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        amount,
        eip155: {
          slippage: ConstantsUtil2.CONVERT_SLIPPAGE_TOLERANCE
        },
        from,
        projectId,
        to,
        userAddress
      }
    });
  },
  generateApproveCalldata({ from, projectId, to, userAddress }) {
    const { sdkType, sdkVersion } = OptionsController.state;
    return api2.get({
      path: `/v1/convert/build-approve`,
      headers: {
        "Content-Type": "application/json",
        "x-sdk-type": sdkType,
        "x-sdk-version": sdkVersion
      },
      params: {
        projectId,
        userAddress,
        from,
        to
      }
    });
  },
  async getBalance(address, chainId, forceUpdate) {
    const { sdkType, sdkVersion } = OptionsController.state;
    return api2.get({
      path: `/v1/account/${address}/balance`,
      headers: {
        "x-sdk-type": sdkType,
        "x-sdk-version": sdkVersion
      },
      params: {
        currency: "usd",
        projectId: OptionsController.state.projectId,
        chainId,
        forceUpdate
      }
    });
  },
  async lookupEnsName(name) {
    return api2.get({
      path: `/v1/profile/account/${name}${ConstantsUtil.WC_NAME_SUFFIX}?projectId=${OptionsController.state.projectId}`
    });
  },
  async reverseLookupEnsName({ address }) {
    return api2.get({
      path: `/v1/profile/reverse/${address}?projectId=${OptionsController.state.projectId}`
    });
  },
  async getEnsNameSuggestions(name) {
    return api2.get({
      path: `/v1/profile/suggestions/${name}?projectId=${OptionsController.state.projectId}`
    });
  },
  async registerEnsName({ coinType, address, message, signature }) {
    return api2.post({
      path: `/v1/profile/account`,
      body: { coin_type: coinType, address, message, signature },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  async generateOnRampURL({ destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount }) {
    const response = await api2.post({
      path: `/v1/generators/onrampurl?projectId=${OptionsController.state.projectId}`,
      body: {
        destinationWallets,
        defaultNetwork,
        partnerUserId,
        defaultExperience: "buy",
        presetCryptoAmount: purchaseAmount,
        presetFiatAmount: paymentAmount
      }
    });
    return response.url;
  },
  async getOnrampOptions() {
    try {
      const response = await api2.get({
        path: `/v1/onramp/options?projectId=${OptionsController.state.projectId}`
      });
      return response;
    } catch (e) {
      return DEFAULT_OPTIONS;
    }
  },
  async getOnrampQuote({ purchaseCurrency, paymentCurrency, amount, network }) {
    try {
      const response = await api2.post({
        path: `/v1/onramp/quote?projectId=${OptionsController.state.projectId}`,
        body: {
          purchaseCurrency,
          paymentCurrency,
          amount,
          network
        }
      });
      return response;
    } catch (e) {
      return {
        coinbaseFee: { amount, currency: paymentCurrency.id },
        networkFee: { amount, currency: paymentCurrency.id },
        paymentSubtotal: { amount, currency: paymentCurrency.id },
        paymentTotal: { amount, currency: paymentCurrency.id },
        purchaseAmount: { amount, currency: paymentCurrency.id },
        quoteId: "mocked-quote-id"
      };
    }
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/SnackController.js
var state4 = proxy({
  message: "",
  variant: "success",
  open: false
});
var SnackController = {
  state: state4,
  subscribeKey(key, callback) {
    return subscribeKey(state4, key, callback);
  },
  showLoading(message) {
    state4.message = message;
    state4.variant = "loading";
    state4.open = true;
  },
  showSuccess(message) {
    state4.message = message;
    state4.variant = "success";
    state4.open = true;
  },
  showError(message) {
    const errorMessage = CoreHelperUtil.parseError(message);
    state4.message = errorMessage;
    state4.variant = "error";
    state4.open = true;
  },
  hide() {
    state4.open = false;
  }
};

// node_modules/@web3modal/polyfills/dist/esm/index.js
var import_buffer = __toESM(require_buffer());
var _a;
if (typeof window !== "undefined") {
  if (!window.Buffer) {
    window.Buffer = import_buffer.Buffer;
  }
  if (!window.global) {
    window.global = window;
  }
  if (!window.process) {
    window.process = {};
  }
  if (!((_a = window.process) == null ? void 0 : _a.env)) {
    window.process = { env: {} };
  }
}

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js
var SECURE_SITE_SDK = process.env["NEXT_PUBLIC_SECURE_SITE_SDK_URL"] || "https://secure.walletconnect.com/sdk";
var DEFAULT_LOG_LEVEL = process.env["NEXT_PUBLIC_DEFAULT_LOG_LEVEL"] || "error";
var W3mFrameConstants = {
  APP_EVENT_KEY: "@w3m-app/",
  FRAME_EVENT_KEY: "@w3m-frame/",
  RPC_METHOD_KEY: "RPC_",
  STORAGE_KEY: "@w3m-storage/",
  SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
  EMAIL_LOGIN_USED_KEY: "EMAIL_LOGIN_USED_KEY",
  LAST_USED_CHAIN_KEY: "LAST_USED_CHAIN_KEY",
  LAST_EMAIL_LOGIN_TIME: "LAST_EMAIL_LOGIN_TIME",
  EMAIL: "EMAIL",
  PREFERRED_ACCOUNT_TYPE: "PREFERRED_ACCOUNT_TYPE",
  SMART_ACCOUNT_ENABLED: "SMART_ACCOUNT_ENABLED",
  SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS",
  SOCIAL_USERNAME: "SOCIAL_USERNAME",
  SOCIAL: "@w3m/connected_social",
  APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
  APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
  APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
  APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
  APP_CONNECT_SOCIAL: "@w3m-app/CONNECT_SOCIAL",
  APP_GET_SOCIAL_REDIRECT_URI: "@w3m-app/GET_SOCIAL_REDIRECT_URI",
  APP_GET_USER: "@w3m-app/GET_USER",
  APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
  APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
  APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
  APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
  APP_UPDATE_EMAIL: "@w3m-app/UPDATE_EMAIL",
  APP_UPDATE_EMAIL_PRIMARY_OTP: "@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",
  APP_UPDATE_EMAIL_SECONDARY_OTP: "@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",
  APP_AWAIT_UPDATE_EMAIL: "@w3m-app/AWAIT_UPDATE_EMAIL",
  APP_SYNC_THEME: "@w3m-app/SYNC_THEME",
  APP_SYNC_DAPP_DATA: "@w3m-app/SYNC_DAPP_DATA",
  APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS: "@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",
  APP_INIT_SMART_ACCOUNT: "@w3m-app/INIT_SMART_ACCOUNT",
  APP_SET_PREFERRED_ACCOUNT: "@w3m-app/SET_PREFERRED_ACCOUNT",
  FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
  FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
  FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
  FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
  FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
  FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
  FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
  FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
  FRAME_CONNECT_SOCIAL_SUCCESS: "@w3m-frame/CONNECT_SOCIAL_SUCCESS",
  FRAME_CONNECT_SOCIAL_ERROR: "@w3m-frame/CONNECT_SOCIAL_ERROR",
  FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS: "@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",
  FRAME_GET_SOCIAL_REDIRECT_URI_ERROR: "@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",
  FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
  FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
  FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
  FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
  FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
  FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
  FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
  FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
  FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
  FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
  FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE",
  FRAME_UPDATE_EMAIL_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SUCCESS",
  FRAME_UPDATE_EMAIL_ERROR: "@w3m-frame/UPDATE_EMAIL_ERROR",
  FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS: "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",
  FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR: "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",
  FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",
  FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR: "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",
  FRAME_SYNC_THEME_SUCCESS: "@w3m-frame/SYNC_THEME_SUCCESS",
  FRAME_SYNC_THEME_ERROR: "@w3m-frame/SYNC_THEME_ERROR",
  FRAME_SYNC_DAPP_DATA_SUCCESS: "@w3m-frame/SYNC_DAPP_DATA_SUCCESS",
  FRAME_SYNC_DAPP_DATA_ERROR: "@w3m-frame/SYNC_DAPP_DATA_ERROR",
  FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS: "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",
  FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR: "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",
  FRAME_INIT_SMART_ACCOUNT_SUCCESS: "@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",
  FRAME_INIT_SMART_ACCOUNT_ERROR: "@w3m-frame/INIT_SMART_ACCOUNT_ERROR",
  FRAME_SET_PREFERRED_ACCOUNT_SUCCESS: "@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",
  FRAME_SET_PREFERRED_ACCOUNT_ERROR: "@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",
  RPC_RESPONSE_TYPE_ERROR: "RPC_RESPONSE_ERROR",
  RPC_RESPONSE_TYPE_TX: "RPC_RESPONSE_TRANSACTION_HASH",
  RPC_RESPONSE_TYPE_OBJECT: "RPC_RESPONSE_OBJECT"
};
var W3mFrameRpcConstants = {
  SAFE_RPC_METHODS: [
    "eth_accounts",
    "eth_blockNumber",
    "eth_call",
    "eth_chainId",
    "eth_estimateGas",
    "eth_feeHistory",
    "eth_gasPrice",
    "eth_getAccount",
    "eth_getBalance",
    "eth_getBlockByHash",
    "eth_getBlockByNumber",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
    "eth_getCode",
    "eth_getFilterChanges",
    "eth_getFilterLogs",
    "eth_getLogs",
    "eth_getProof",
    "eth_getStorageAt",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
    "eth_getTransactionByHash",
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleCountByBlockNumber",
    "eth_maxPriorityFeePerGas",
    "eth_newBlockFilter",
    "eth_newFilter",
    "eth_newPendingTransactionFilter",
    "eth_sendRawTransaction",
    "eth_syncing",
    "eth_uninstallFilter"
  ],
  NOT_SAFE_RPC_METHODS: ["personal_sign", "eth_signTypedData_v4", "eth_sendTransaction"],
  GET_CHAIN_ID: "eth_chainId",
  RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
  RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
  ACCOUNT_TYPES: {
    EOA: "eoa",
    SMART_ACCOUNT: "smartAccount"
  }
};

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
    const filtered = {};
    for (const k2 of validKeys) {
      filtered[k2] = obj[k2];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_2, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i2 = 0;
          while (i2 < issue.path.length) {
            const el = issue.path[i2];
            const terminal = i2 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i2++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x2) => !!x2)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s2 of results) {
      if (s2.status === "aborted")
        return INVALID;
      if (s2.status === "dirty")
        status.dirty();
      arrayValue.push(s2.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x2) => x2.status === "aborted";
var isDirty = (x2) => x2.status === "dirty";
var isValid = (x2) => x2.status === "valid";
var isAsync = (x2) => typeof Promise !== "undefined" && x2 instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent2, value, path, key) {
    this._cachedPath = [];
    this.parent = parent2;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a2;
    const ctx = {
      common: {
        issues: [],
        async: (_a2 = params === null || params === void 0 ? void 0 : params.async) !== null && _a2 !== void 0 ? _a2 : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a2) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a2;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a2 = options === null || options === void 0 ? void 0 : options.offset) !== null && _a2 !== void 0 ? _a2 : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a2;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a2;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i2) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i2) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a2, _b, _c, _d;
          const defaultError = (_c = (_b = (_a2 = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a2, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a2, b2) {
  const aType = getParsedType(a2);
  const bType = getParsedType(b2);
  if (a2 === b2) {
    return { valid: true, data: a2 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b2);
    const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b2 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b2[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b2.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b2[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b2) {
    return { valid: true, data: a2 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x2) => !!x2);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return _ZodEnum.create(values);
  }
  exclude(values) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a2, b2) {
    return new _ZodPipeline({
      in: a2,
      out: b2,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a2, _b;
      if (!check(data)) {
        const p3 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a2 = p3.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b !== void 0 ? _b : true;
        const p22 = typeof p3 === "string" ? { message: p3 } : p3;
        ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameSchema.js
var zError = z.object({ message: z.string() });
function zType(key) {
  return z.literal(W3mFrameConstants[key]);
}
var GetTransactionByHashResponse = z.object({
  accessList: z.array(z.string()),
  blockHash: z.string().nullable(),
  blockNumber: z.string().nullable(),
  chainId: z.string(),
  from: z.string(),
  gas: z.string(),
  hash: z.string(),
  input: z.string().nullable(),
  maxFeePerGas: z.string(),
  maxPriorityFeePerGas: z.string(),
  nonce: z.string(),
  r: z.string(),
  s: z.string(),
  to: z.string(),
  transactionIndex: z.string().nullable(),
  type: z.string(),
  v: z.string(),
  value: z.string()
});
var AppSwitchNetworkRequest = z.object({ chainId: z.number() });
var AppConnectEmailRequest = z.object({ email: z.string().email() });
var AppConnectOtpRequest = z.object({ otp: z.string() });
var AppConnectSocialRequest = z.object({ uri: z.string() });
var AppGetUserRequest = z.object({
  chainId: z.optional(z.number()),
  preferredAccountType: z.optional(z.string())
});
var AppGetSocialRedirectUriRequest = z.object({
  provider: z.enum(["google", "github", "apple", "facebook", "x", "discord"])
});
var AppUpdateEmailRequest = z.object({ email: z.string().email() });
var AppUpdateEmailPrimaryOtpRequest = z.object({ otp: z.string() });
var AppUpdateEmailSecondaryOtpRequest = z.object({ otp: z.string() });
var AppSyncThemeRequest = z.object({
  themeMode: z.optional(z.enum(["light", "dark"])),
  themeVariables: z.optional(z.record(z.string(), z.string().or(z.number()))),
  w3mThemeVariables: z.optional(z.record(z.string(), z.string()))
});
var AppSyncDappDataRequest = z.object({
  metadata: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
    icons: z.array(z.string())
  }).optional(),
  sdkVersion: z.string(),
  projectId: z.string()
});
var AppSetPreferredAccountRequest = z.object({ type: z.string() });
var FrameConnectEmailResponse = z.object({
  action: z.enum(["VERIFY_DEVICE", "VERIFY_OTP"])
});
var FrameConnectSocialResponse = z.object({
  email: z.string(),
  address: z.string(),
  chainId: z.number(),
  userName: z.string().optional()
});
var FrameUpdateEmailResponse = z.object({
  action: z.enum(["VERIFY_PRIMARY_OTP", "VERIFY_SECONDARY_OTP"])
});
var FrameGetUserResponse = z.object({
  email: z.string().email(),
  address: z.string(),
  chainId: z.number(),
  smartAccountDeployed: z.optional(z.boolean()),
  preferredAccountType: z.optional(z.string())
});
var FrameGetSocialRedirectUriResponse = z.object({ uri: z.string() });
var FrameIsConnectedResponse = z.object({ isConnected: z.boolean() });
var FrameGetChainIdResponse = z.object({ chainId: z.number() });
var FrameSwitchNetworkResponse = z.object({ chainId: z.number() });
var FrameUpdateEmailSecondaryOtpResolver = z.object({ newEmail: z.string().email() });
var FrameGetSmartAccountEnabledNetworksResponse = z.object({
  smartAccountEnabledNetworks: z.array(z.number())
});
var FrameInitSmartAccountResponse = z.object({
  address: z.string(),
  isDeployed: z.boolean()
});
var FrameSetPreferredAccountResponse = z.object({ type: z.string(), address: z.string() });
var RpcResponse = z.any();
var RpcEthAccountsRequest = z.object({
  method: z.literal("eth_accounts")
});
var RpcEthBlockNumber = z.object({
  method: z.literal("eth_blockNumber")
});
var RpcEthCall = z.object({
  method: z.literal("eth_call"),
  params: z.array(z.any())
});
var RpcEthChainId = z.object({
  method: z.literal("eth_chainId")
});
var RpcEthEstimateGas = z.object({
  method: z.literal("eth_estimateGas"),
  params: z.array(z.any())
});
var RpcEthFeeHistory = z.object({
  method: z.literal("eth_feeHistory"),
  params: z.array(z.any())
});
var RpcEthGasPrice = z.object({
  method: z.literal("eth_gasPrice")
});
var RpcEthGetAccount = z.object({
  method: z.literal("eth_getAccount"),
  params: z.array(z.any())
});
var RpcEthGetBalance = z.object({
  method: z.literal("eth_getBalance"),
  params: z.array(z.any())
});
var RpcEthGetBlockyByHash = z.object({
  method: z.literal("eth_getBlockByHash"),
  params: z.array(z.any())
});
var RpcEthGetBlockByNumber = z.object({
  method: z.literal("eth_getBlockByNumber"),
  params: z.array(z.any())
});
var RpcEthGetBlockReceipts = z.object({
  method: z.literal("eth_getBlockReceipts"),
  params: z.array(z.any())
});
var RcpEthGetBlockTransactionCountByHash = z.object({
  method: z.literal("eth_getBlockTransactionCountByHash"),
  params: z.array(z.any())
});
var RcpEthGetBlockTransactionCountByNumber = z.object({
  method: z.literal("eth_getBlockTransactionCountByNumber"),
  params: z.array(z.any())
});
var RpcEthGetCode = z.object({
  method: z.literal("eth_getCode"),
  params: z.array(z.any())
});
var RpcEthGetFilter = z.object({
  method: z.literal("eth_getFilterChanges"),
  params: z.array(z.any())
});
var RpcEthGetFilterLogs = z.object({
  method: z.literal("eth_getFilterLogs"),
  params: z.array(z.any())
});
var RpcEthGetLogs = z.object({
  method: z.literal("eth_getLogs"),
  params: z.array(z.any())
});
var RpcEthGetProof = z.object({
  method: z.literal("eth_getProof"),
  params: z.array(z.any())
});
var RpcEthGetStorageAt = z.object({
  method: z.literal("eth_getStorageAt"),
  params: z.array(z.any())
});
var RpcEthGetTransactionByBlockHashAndIndex = z.object({
  method: z.literal("eth_getTransactionByBlockHashAndIndex"),
  params: z.array(z.any())
});
var RpcEthGetTransactionByBlockNumberAndIndex = z.object({
  method: z.literal("eth_getTransactionByBlockNumberAndIndex"),
  params: z.array(z.any())
});
var RpcEthGetTransactionByHash = z.object({
  method: z.literal("eth_getTransactionByHash"),
  params: z.array(z.any())
});
var RpcEthGetTransactionCount = z.object({
  method: z.literal("eth_getTransactionCount"),
  params: z.array(z.any())
});
var RpcEthGetTransactionReceipt = z.object({
  method: z.literal("eth_getTransactionReceipt"),
  params: z.array(z.any())
});
var RpcEthGetUncleCountByBlockHash = z.object({
  method: z.literal("eth_getUncleCountByBlockHash"),
  params: z.array(z.any())
});
var RpcEthGetUncleCountByBlockNumber = z.object({
  method: z.literal("eth_getUncleCountByBlockNumber"),
  params: z.array(z.any())
});
var RpcEthMaxPriorityFeePerGas = z.object({
  method: z.literal("eth_maxPriorityFeePerGas")
});
var RpcEthNewBlockFilter = z.object({
  method: z.literal("eth_newBlockFilter")
});
var RpcEthNewFilter = z.object({
  method: z.literal("eth_newFilter"),
  params: z.array(z.any())
});
var RpcEthNewPendingTransactionFilter = z.object({
  method: z.literal("eth_newPendingTransactionFilter")
});
var RpcEthSendRawTransaction = z.object({
  method: z.literal("eth_sendRawTransaction"),
  params: z.array(z.any())
});
var RpcEthSyncing = z.object({
  method: z.literal("eth_syncing"),
  params: z.array(z.any())
});
var RpcUnistallFilter = z.object({
  method: z.literal("eth_uninstallFilter"),
  params: z.array(z.any())
});
var RpcPersonalSignRequest = z.object({
  method: z.literal("personal_sign"),
  params: z.array(z.any())
});
var RpcEthSignTypedDataV4 = z.object({
  method: z.literal("eth_signTypedData_v4"),
  params: z.array(z.any())
});
var RpcEthSendTransactionRequest = z.object({
  method: z.literal("eth_sendTransaction"),
  params: z.array(z.any())
});
var FrameSession = z.object({
  token: z.string()
});
var W3mFrameSchema = {
  appEvent: z.object({ type: zType("APP_SWITCH_NETWORK"), payload: AppSwitchNetworkRequest }).or(z.object({ type: zType("APP_CONNECT_EMAIL"), payload: AppConnectEmailRequest })).or(z.object({ type: zType("APP_CONNECT_DEVICE") })).or(z.object({ type: zType("APP_CONNECT_OTP"), payload: AppConnectOtpRequest })).or(z.object({ type: zType("APP_CONNECT_SOCIAL"), payload: AppConnectSocialRequest })).or(z.object({ type: zType("APP_GET_USER"), payload: z.optional(AppGetUserRequest) })).or(z.object({
    type: zType("APP_GET_SOCIAL_REDIRECT_URI"),
    payload: AppGetSocialRedirectUriRequest
  })).or(z.object({ type: zType("APP_SIGN_OUT") })).or(z.object({ type: zType("APP_IS_CONNECTED"), payload: z.optional(FrameSession) })).or(z.object({ type: zType("APP_GET_CHAIN_ID") })).or(z.object({ type: zType("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS") })).or(z.object({ type: zType("APP_INIT_SMART_ACCOUNT") })).or(z.object({ type: zType("APP_SET_PREFERRED_ACCOUNT"), payload: AppSetPreferredAccountRequest })).or(z.object({
    type: zType("APP_RPC_REQUEST"),
    payload: RpcPersonalSignRequest.or(RpcEthSendTransactionRequest).or(RpcEthAccountsRequest).or(RpcEthBlockNumber).or(RpcEthCall).or(RpcEthChainId).or(RpcEthEstimateGas).or(RpcEthFeeHistory).or(RpcEthGasPrice).or(RpcEthGetAccount).or(RpcEthGetBalance).or(RpcEthGetBlockyByHash).or(RpcEthGetBlockByNumber).or(RpcEthGetBlockReceipts).or(RcpEthGetBlockTransactionCountByHash).or(RcpEthGetBlockTransactionCountByNumber).or(RpcEthGetCode).or(RpcEthGetFilter).or(RpcEthGetFilterLogs).or(RpcEthGetLogs).or(RpcEthGetProof).or(RpcEthGetStorageAt).or(RpcEthGetTransactionByBlockHashAndIndex).or(RpcEthGetTransactionByBlockNumberAndIndex).or(RpcEthGetTransactionByHash).or(RpcEthGetTransactionCount).or(RpcEthGetTransactionReceipt).or(RpcEthGetUncleCountByBlockHash).or(RpcEthGetUncleCountByBlockNumber).or(RpcEthMaxPriorityFeePerGas).or(RpcEthNewBlockFilter).or(RpcEthNewFilter).or(RpcEthNewPendingTransactionFilter).or(RpcEthSendRawTransaction).or(RpcEthSyncing).or(RpcUnistallFilter).or(RpcPersonalSignRequest).or(RpcEthSignTypedDataV4).or(RpcEthSendTransactionRequest)
  })).or(z.object({ type: zType("APP_UPDATE_EMAIL"), payload: AppUpdateEmailRequest })).or(z.object({
    type: zType("APP_UPDATE_EMAIL_PRIMARY_OTP"),
    payload: AppUpdateEmailPrimaryOtpRequest
  })).or(z.object({
    type: zType("APP_UPDATE_EMAIL_SECONDARY_OTP"),
    payload: AppUpdateEmailSecondaryOtpRequest
  })).or(z.object({ type: zType("APP_SYNC_THEME"), payload: AppSyncThemeRequest })).or(z.object({ type: zType("APP_SYNC_DAPP_DATA"), payload: AppSyncDappDataRequest })),
  frameEvent: z.object({ type: zType("FRAME_SWITCH_NETWORK_ERROR"), payload: zError }).or(z.object({ type: zType("FRAME_SWITCH_NETWORK_SUCCESS"), payload: FrameSwitchNetworkResponse })).or(z.object({ type: zType("FRAME_CONNECT_EMAIL_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_CONNECT_EMAIL_SUCCESS"), payload: FrameConnectEmailResponse })).or(z.object({ type: zType("FRAME_CONNECT_OTP_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_CONNECT_OTP_SUCCESS") })).or(z.object({ type: zType("FRAME_CONNECT_DEVICE_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_CONNECT_DEVICE_SUCCESS") })).or(z.object({
    type: zType("FRAME_CONNECT_SOCIAL_SUCCESS"),
    payload: FrameConnectSocialResponse
  })).or(z.object({
    type: zType("FRAME_CONNECT_SOCIAL_ERROR"),
    payload: zError
  })).or(z.object({ type: zType("FRAME_GET_USER_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_GET_USER_SUCCESS"), payload: FrameGetUserResponse })).or(z.object({ type: zType("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"), payload: zError })).or(z.object({
    type: zType("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),
    payload: FrameGetSocialRedirectUriResponse
  })).or(z.object({ type: zType("FRAME_SIGN_OUT_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_SIGN_OUT_SUCCESS") })).or(z.object({ type: zType("FRAME_IS_CONNECTED_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_IS_CONNECTED_SUCCESS"), payload: FrameIsConnectedResponse })).or(z.object({ type: zType("FRAME_GET_CHAIN_ID_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_GET_CHAIN_ID_SUCCESS"), payload: FrameGetChainIdResponse })).or(z.object({ type: zType("FRAME_RPC_REQUEST_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_RPC_REQUEST_SUCCESS"), payload: RpcResponse })).or(z.object({ type: zType("FRAME_SESSION_UPDATE"), payload: FrameSession })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_SUCCESS"), payload: FrameUpdateEmailResponse })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS") })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"), payload: zError })).or(z.object({
    type: zType("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),
    payload: FrameUpdateEmailSecondaryOtpResolver
  })).or(z.object({ type: zType("FRAME_SYNC_THEME_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_SYNC_THEME_SUCCESS") })).or(z.object({ type: zType("FRAME_SYNC_DAPP_DATA_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_SYNC_DAPP_DATA_SUCCESS") })).or(z.object({
    type: zType("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),
    payload: FrameGetSmartAccountEnabledNetworksResponse
  })).or(z.object({
    type: zType("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),
    payload: zError
  })).or(z.object({ type: zType("FRAME_INIT_SMART_ACCOUNT_ERROR"), payload: zError })).or(z.object({
    type: zType("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),
    payload: FrameSetPreferredAccountResponse
  })).or(z.object({ type: zType("FRAME_SET_PREFERRED_ACCOUNT_ERROR"), payload: zError }))
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameStorage.js
var W3mFrameStorage = {
  set(key, value) {
    if (W3mFrameHelpers.isClient) {
      localStorage.setItem(`${W3mFrameConstants.STORAGE_KEY}${key}`, value);
    }
  },
  get(key) {
    if (W3mFrameHelpers.isClient) {
      return localStorage.getItem(`${W3mFrameConstants.STORAGE_KEY}${key}`);
    }
    return null;
  },
  delete(key, social) {
    if (W3mFrameHelpers.isClient) {
      if (social) {
        localStorage.removeItem(key);
      } else {
        localStorage.removeItem(`${W3mFrameConstants.STORAGE_KEY}${key}`);
      }
    }
  }
};

// node_modules/@web3modal/wallet/dist/esm/src/RegexUtil.js
var RegexUtil = {
  address: /^0x(?:[A-Fa-f0-9]{40})$/u,
  transactionHash: /^0x(?:[A-Fa-f0-9]{64})$/u,
  signedMessage: /^0x(?:[a-fA-F0-9]{62,})$/u
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameHelpers.js
var EMAIL_MINIMUM_TIMEOUT = 30 * 1e3;
var W3mFrameHelpers = {
  checkIfAllowedToTriggerEmail() {
    const lastEmailLoginTime = W3mFrameStorage.get(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
    if (lastEmailLoginTime) {
      const difference = Date.now() - Number(lastEmailLoginTime);
      if (difference < EMAIL_MINIMUM_TIMEOUT) {
        const cooldownSec = Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1e3);
        throw new Error(`Please try again after ${cooldownSec} seconds`);
      }
    }
  },
  getTimeToNextEmailLogin() {
    const lastEmailLoginTime = W3mFrameStorage.get(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
    if (lastEmailLoginTime) {
      const difference = Date.now() - Number(lastEmailLoginTime);
      if (difference < EMAIL_MINIMUM_TIMEOUT) {
        return Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1e3);
      }
    }
    return 0;
  },
  checkIfRequestExists(request) {
    const method = this.getRequestMethod(request);
    return W3mFrameRpcConstants.NOT_SAFE_RPC_METHODS.includes(method) || W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(method);
  },
  getRequestMethod(request) {
    var _a2;
    return (_a2 = request == null ? void 0 : request.payload) == null ? void 0 : _a2.method;
  },
  getResponseType(response) {
    const { type, payload } = response;
    const isError = type === W3mFrameConstants.FRAME_RPC_REQUEST_ERROR;
    if (isError) {
      return W3mFrameConstants.RPC_RESPONSE_TYPE_ERROR;
    }
    const isPayloadString = typeof payload === "string";
    const isTransactionHash = isPayloadString && (payload.match(RegexUtil.transactionHash) || payload.match(RegexUtil.signedMessage));
    if (isTransactionHash) {
      return W3mFrameConstants.RPC_RESPONSE_TYPE_TX;
    }
    return W3mFrameConstants.RPC_RESPONSE_TYPE_OBJECT;
  },
  checkIfRequestIsAllowed(request) {
    const method = this.getRequestMethod(request);
    return W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(method);
  },
  isClient: typeof window !== "undefined"
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrame.js
var W3mFrame = class {
  constructor(projectId, isAppClient = false) {
    this.iframe = null;
    this.rpcUrl = ConstantsUtil.BLOCKCHAIN_API_RPC_URL;
    this.events = {
      onFrameEvent: (callback) => {
        if (W3mFrameHelpers.isClient) {
          window.addEventListener("message", ({ data }) => {
            var _a2;
            if (!((_a2 = data.type) == null ? void 0 : _a2.includes(W3mFrameConstants.FRAME_EVENT_KEY))) {
              return;
            }
            const frameEvent = W3mFrameSchema.frameEvent.parse(data);
            callback(frameEvent);
          });
        }
      },
      onAppEvent: (callback) => {
        if (W3mFrameHelpers.isClient) {
          window.addEventListener("message", ({ data }) => {
            var _a2;
            if (!((_a2 = data.type) == null ? void 0 : _a2.includes(W3mFrameConstants.APP_EVENT_KEY))) {
              return;
            }
            const appEvent = W3mFrameSchema.appEvent.parse(data);
            callback(appEvent);
          });
        }
      },
      postAppEvent: (event) => {
        var _a2;
        if (W3mFrameHelpers.isClient) {
          if (!((_a2 = this.iframe) == null ? void 0 : _a2.contentWindow)) {
            throw new Error("W3mFrame: iframe is not set");
          }
          W3mFrameSchema.appEvent.parse(event);
          window.postMessage(event);
          this.iframe.contentWindow.postMessage(event, "*");
        }
      },
      postFrameEvent: (event) => {
        if (W3mFrameHelpers.isClient) {
          if (!parent) {
            throw new Error("W3mFrame: parent is not set");
          }
          W3mFrameSchema.frameEvent.parse(event);
          parent.postMessage(event, "*");
        }
      }
    };
    this.projectId = projectId;
    this.frameLoadPromise = new Promise((resolve, reject) => {
      this.frameLoadPromiseResolver = { resolve, reject };
    });
    if (isAppClient) {
      this.frameLoadPromise = new Promise((resolve, reject) => {
        this.frameLoadPromiseResolver = { resolve, reject };
      });
      if (W3mFrameHelpers.isClient) {
        const iframe = document.createElement("iframe");
        iframe.id = "w3m-iframe";
        iframe.src = `${SECURE_SITE_SDK}?projectId=${projectId}`;
        iframe.style.position = "fixed";
        iframe.style.zIndex = "999999";
        iframe.style.display = "none";
        iframe.style.opacity = "0";
        iframe.style.borderBottomLeftRadius = `clamp(0px, var(--wui-border-radius-l), 44px)`;
        iframe.style.borderBottomRightRadius = `clamp(0px, var(--wui-border-radius-l), 44px)`;
        document.body.appendChild(iframe);
        this.iframe = iframe;
        this.iframe.onload = () => {
          var _a2;
          (_a2 = this.frameLoadPromiseResolver) == null ? void 0 : _a2.resolve(void 0);
        };
        this.iframe.onerror = () => {
          var _a2;
          (_a2 = this.frameLoadPromiseResolver) == null ? void 0 : _a2.reject("Unable to load email login dependency");
        };
      }
    }
  }
  get networks() {
    const data = [
      1,
      5,
      11155111,
      10,
      420,
      42161,
      421613,
      137,
      80001,
      42220,
      1313161554,
      1313161555,
      56,
      97,
      43114,
      43113,
      324,
      280,
      100,
      8453,
      84531,
      7777777,
      999
    ].map((id) => ({
      [id]: {
        rpcUrl: `${this.rpcUrl}/v1/?chainId=eip155:${id}&projectId=${this.projectId}`,
        chainId: id
      }
    }));
    return Object.assign({}, ...data);
  }
};

// node_modules/@walletconnect/logger/dist/index.es.js
var import_pino = __toESM(require_browser());
var import_pino2 = __toESM(require_browser());

// node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify = (data) => JSON.stringify(data, (_2, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_2, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}

// node_modules/@walletconnect/logger/dist/index.es.js
var c = { level: "info" };
var n = "custom_context";
var l = 1e3 * 1024;
var O = class {
  constructor(e) {
    this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
var d = class {
  constructor(e) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
  }
  append(e) {
    const t = new O(e);
    if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
    for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
  }
  shift() {
    if (!this.head) return;
    const e = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
  }
  toArray() {
    const e = [];
    let t = this.head;
    for (; t !== null; ) e.push(t.value), t = t.next;
    return e;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e = this.head;
    return { next: () => {
      if (!e) return { done: true, value: null };
      const t = e.value;
      return e = e.next, { done: false, value: t };
    } };
  }
};
var L = class {
  constructor(e, t = l) {
    this.level = e ?? "error", this.levelValue = import_pino.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e, t) {
    t === import_pino.levels.values.error ? console.error(e) : t === import_pino.levels.values.warn ? console.warn(e) : t === import_pino.levels.values.debug ? console.debug(e) : t === import_pino.levels.values.trace ? console.trace(e) : console.log(e);
  }
  appendToLogs(e) {
    this.logs.append(safeJsonStringify({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e }));
    const t = typeof e == "string" ? JSON.parse(e).level : e.level;
    t >= this.levelValue && this.forwardToConsole(e, t);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e) {
    const t = this.getLogArray();
    return t.push(safeJsonStringify({ extraMetadata: e })), new Blob(t, { type: "application/json" });
  }
};
var m = class {
  constructor(e, t = l) {
    this.baseChunkLogger = new L(e, t);
  }
  write(e) {
    this.baseChunkLogger.appendToLogs(e);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e) {
    return this.baseChunkLogger.logsToBlob(e);
  }
  downloadLogsBlobInBrowser(e) {
    const t = URL.createObjectURL(this.logsToBlob(e)), o = document.createElement("a");
    o.href = t, o.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(t);
  }
};
var B = class {
  constructor(e, t = l) {
    this.baseChunkLogger = new L(e, t);
  }
  write(e) {
    this.baseChunkLogger.appendToLogs(e);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e) {
    return this.baseChunkLogger.logsToBlob(e);
  }
};
var x = Object.defineProperty;
var S = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var p2 = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty;
var z2 = Object.prototype.propertyIsEnumerable;
var f = (r, e, t) => e in r ? x(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
var i = (r, e) => {
  for (var t in e || (e = {})) T.call(e, t) && f(r, t, e[t]);
  if (p2) for (var t of p2(e)) z2.call(e, t) && f(r, t, e[t]);
  return r;
};
var g = (r, e) => S(r, _(e));
function k(r) {
  return g(i({}, r), { level: (r == null ? void 0 : r.level) || c.level });
}
function v(r, e = n) {
  return r[e] || "";
}
function b(r, e, t = n) {
  return r[t] = e, r;
}
function y(r, e = n) {
  let t = "";
  return typeof r.bindings > "u" ? t = v(r, e) : t = r.bindings().context || "", t;
}
function w2(r, e, t = n) {
  const o = y(r, t);
  return o.trim() ? `${o}/${e}` : e;
}
function E(r, e, t = n) {
  const o = w2(r, e, t), a2 = r.child({ context: o });
  return b(a2, o, t);
}
function C(r) {
  var e, t;
  const o = new m((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g(i({}, r.opts), { level: "trace", browser: g(i({}, (t = r.opts) == null ? void 0 : t.browser), { write: (a2) => o.write(a2) }) })), chunkLoggerController: o };
}
function I(r) {
  var e;
  const t = new B((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g(i({}, r.opts), { level: "trace" }), t), chunkLoggerController: t };
}
function A(r) {
  return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? { logger: r.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C(r) : I(r);
}

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameProvider.js
var W3mFrameProvider = class {
  constructor(projectId) {
    var _a2;
    this.connectEmailResolver = void 0;
    this.connectDeviceResolver = void 0;
    this.connectOtpResolver = void 0;
    this.connectResolver = void 0;
    this.connectSocialResolver = void 0;
    this.disconnectResolver = void 0;
    this.isConnectedResolver = void 0;
    this.getChainIdResolver = void 0;
    this.getSocialRedirectUriResolver = void 0;
    this.switchChainResolver = void 0;
    this.rpcRequestResolver = void 0;
    this.updateEmailResolver = void 0;
    this.updateEmailPrimaryOtpResolver = void 0;
    this.updateEmailSecondaryOtpResolver = void 0;
    this.syncThemeResolver = void 0;
    this.syncDappDataResolver = void 0;
    this.smartAccountEnabledNetworksResolver = void 0;
    this.setPreferredAccountResolver = void 0;
    const loggerOptions = k({
      level: DEFAULT_LOG_LEVEL
    });
    const { logger, chunkLoggerController } = A({
      opts: loggerOptions
    });
    this.logger = E(logger, this.constructor.name);
    this.chunkLoggerController = chunkLoggerController;
    if (typeof window !== "undefined" && ((_a2 = this.chunkLoggerController) == null ? void 0 : _a2.downloadLogsBlobInBrowser)) {
      if (!window.dowdownloadAppKitLogsBlob) {
        window.downloadAppKitLogsBlob = {};
      }
      window.downloadAppKitLogsBlob["sdk"] = () => {
        var _a3;
        if ((_a3 = this.chunkLoggerController) == null ? void 0 : _a3.downloadLogsBlobInBrowser) {
          this.chunkLoggerController.downloadLogsBlobInBrowser({
            projectId
          });
        }
      };
    }
    this.w3mFrame = new W3mFrame(projectId, true);
    this.w3mFrame.events.onFrameEvent((event) => {
      this.logger.info({ event }, "Event received");
      switch (event.type) {
        case W3mFrameConstants.FRAME_CONNECT_EMAIL_SUCCESS:
          return this.onConnectEmailSuccess(event);
        case W3mFrameConstants.FRAME_CONNECT_EMAIL_ERROR:
          return this.onConnectEmailError(event);
        case W3mFrameConstants.FRAME_CONNECT_DEVICE_SUCCESS:
          return this.onConnectDeviceSuccess();
        case W3mFrameConstants.FRAME_CONNECT_DEVICE_ERROR:
          return this.onConnectDeviceError(event);
        case W3mFrameConstants.FRAME_CONNECT_OTP_SUCCESS:
          return this.onConnectOtpSuccess();
        case W3mFrameConstants.FRAME_CONNECT_OTP_ERROR:
          return this.onConnectOtpError(event);
        case W3mFrameConstants.FRAME_CONNECT_SOCIAL_SUCCESS:
          return this.onConnectSocialSuccess(event);
        case W3mFrameConstants.FRAME_CONNECT_SOCIAL_ERROR:
          return this.onConnectSocialError(event);
        case W3mFrameConstants.FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:
          return this.onGetSocialRedirectUriSuccess(event);
        case W3mFrameConstants.FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:
          return this.onGetSocialRedirectUriError(event);
        case W3mFrameConstants.FRAME_GET_USER_SUCCESS:
          return this.onConnectSuccess(event);
        case W3mFrameConstants.FRAME_GET_USER_ERROR:
          return this.onConnectError(event);
        case W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS:
          return this.onIsConnectedSuccess(event);
        case W3mFrameConstants.FRAME_IS_CONNECTED_ERROR:
          return this.onIsConnectedError(event);
        case W3mFrameConstants.FRAME_GET_CHAIN_ID_SUCCESS:
          return this.onGetChainIdSuccess(event);
        case W3mFrameConstants.FRAME_GET_CHAIN_ID_ERROR:
          return this.onGetChainIdError(event);
        case W3mFrameConstants.FRAME_SIGN_OUT_SUCCESS:
          return this.onSignOutSuccess();
        case W3mFrameConstants.FRAME_SIGN_OUT_ERROR:
          return this.onSignOutError(event);
        case W3mFrameConstants.FRAME_SWITCH_NETWORK_SUCCESS:
          return this.onSwitchChainSuccess(event);
        case W3mFrameConstants.FRAME_SWITCH_NETWORK_ERROR:
          return this.onSwitchChainError(event);
        case W3mFrameConstants.FRAME_RPC_REQUEST_SUCCESS:
          return this.onRpcRequestSuccess(event);
        case W3mFrameConstants.FRAME_RPC_REQUEST_ERROR:
          return this.onRpcRequestError(event);
        case W3mFrameConstants.FRAME_SESSION_UPDATE:
          return this.onSessionUpdate(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_SUCCESS:
          return this.onUpdateEmailSuccess(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_ERROR:
          return this.onUpdateEmailError(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:
          return this.onUpdateEmailPrimaryOtpSuccess();
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:
          return this.onUpdateEmailPrimaryOtpError(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:
          return this.onUpdateEmailSecondaryOtpSuccess(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:
          return this.onUpdateEmailSecondaryOtpError(event);
        case W3mFrameConstants.FRAME_SYNC_THEME_SUCCESS:
          return this.onSyncThemeSuccess();
        case W3mFrameConstants.FRAME_SYNC_THEME_ERROR:
          return this.onSyncThemeError(event);
        case W3mFrameConstants.FRAME_SYNC_DAPP_DATA_SUCCESS:
          return this.onSyncDappDataSuccess();
        case W3mFrameConstants.FRAME_SYNC_DAPP_DATA_ERROR:
          return this.onSyncDappDataError(event);
        case W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
          return this.onSmartAccountEnabledNetworksSuccess(event);
        case W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
          return this.onSmartAccountEnabledNetworksError(event);
        case W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:
          return this.onSetPreferredAccountSuccess();
        case W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_ERROR:
          return this.onSetPreferredAccountError();
        default:
          return null;
      }
    });
  }
  getLoginEmailUsed() {
    return Boolean(W3mFrameStorage.get(W3mFrameConstants.EMAIL_LOGIN_USED_KEY));
  }
  getEmail() {
    return W3mFrameStorage.get(W3mFrameConstants.EMAIL);
  }
  rejectRpcRequest() {
    var _a2;
    (_a2 = this.rpcRequestResolver) == null ? void 0 : _a2.reject();
  }
  async connectEmail(payload) {
    await this.w3mFrame.frameLoadPromise;
    W3mFrameHelpers.checkIfAllowedToTriggerEmail();
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_EMAIL, payload });
    return new Promise((resolve, reject) => {
      this.connectEmailResolver = { resolve, reject };
    });
  }
  async connectDevice() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_DEVICE });
    return new Promise((resolve, reject) => {
      this.connectDeviceResolver = { resolve, reject };
    });
  }
  async connectOtp(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_OTP, payload });
    return new Promise((resolve, reject) => {
      this.connectOtpResolver = { resolve, reject };
    });
  }
  async isConnected() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_IS_CONNECTED,
      payload: void 0
    });
    return new Promise((resolve, reject) => {
      this.isConnectedResolver = { resolve, reject };
    });
  }
  async getChainId() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_GET_CHAIN_ID });
    return new Promise((resolve, reject) => {
      this.getChainIdResolver = { resolve, reject };
    });
  }
  async getSocialRedirectUri(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_GET_SOCIAL_REDIRECT_URI,
      payload
    });
    return new Promise((resolve, reject) => {
      this.getSocialRedirectUriResolver = { resolve, reject };
    });
  }
  async updateEmail(payload) {
    await this.w3mFrame.frameLoadPromise;
    W3mFrameHelpers.checkIfAllowedToTriggerEmail();
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_UPDATE_EMAIL, payload });
    return new Promise((resolve, reject) => {
      this.updateEmailResolver = { resolve, reject };
    });
  }
  async updateEmailPrimaryOtp(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_UPDATE_EMAIL_PRIMARY_OTP,
      payload
    });
    return new Promise((resolve, reject) => {
      this.updateEmailPrimaryOtpResolver = { resolve, reject };
    });
  }
  async updateEmailSecondaryOtp(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_UPDATE_EMAIL_SECONDARY_OTP,
      payload
    });
    return new Promise((resolve, reject) => {
      this.updateEmailSecondaryOtpResolver = { resolve, reject };
    });
  }
  async syncTheme(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SYNC_THEME, payload });
    return new Promise((resolve, reject) => {
      this.syncThemeResolver = { resolve, reject };
    });
  }
  async syncDappData(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SYNC_DAPP_DATA, payload });
    return new Promise((resolve, reject) => {
      this.syncDappDataResolver = { resolve, reject };
    });
  }
  async getSmartAccountEnabledNetworks() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS
    });
    return new Promise((resolve, reject) => {
      this.smartAccountEnabledNetworksResolver = { resolve, reject };
    });
  }
  async setPreferredAccount(type) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_SET_PREFERRED_ACCOUNT,
      payload: { type }
    });
    return new Promise((resolve, reject) => {
      this.setPreferredAccountResolver = { resolve, reject };
    });
  }
  async connect(payload) {
    const chainId = (payload == null ? void 0 : payload.chainId) ?? this.getLastUsedChainId() ?? 1;
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_GET_USER,
      payload: { chainId }
    });
    return new Promise((resolve, reject) => {
      this.connectResolver = { resolve, reject };
    });
  }
  async connectSocial(uri) {
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_CONNECT_SOCIAL,
      payload: { uri }
    });
    return new Promise((resolve, reject) => {
      this.connectSocialResolver = { resolve, reject };
    });
  }
  async switchNetwork(chainId) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_SWITCH_NETWORK,
      payload: { chainId }
    });
    return new Promise((resolve, reject) => {
      this.switchChainResolver = { resolve, reject };
    });
  }
  async disconnect() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SIGN_OUT });
    return new Promise((resolve, reject) => {
      this.disconnectResolver = { resolve, reject };
    });
  }
  async request(req) {
    await this.w3mFrame.frameLoadPromise;
    if (W3mFrameRpcConstants.GET_CHAIN_ID === req.method) {
      return this.getLastUsedChainId();
    }
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_RPC_REQUEST,
      payload: req
    });
    return new Promise((resolve, reject) => {
      this.rpcRequestResolver = { resolve, reject };
    });
  }
  onRpcRequest(callback) {
    this.w3mFrame.events.onAppEvent((event) => {
      if (event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)) {
        callback(event);
      }
    });
  }
  onRpcResponse(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)) {
        callback(event);
      }
    });
  }
  onIsConnected(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_GET_USER_SUCCESS) {
        callback(event.payload);
      }
    });
  }
  onNotConnected(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_IS_CONNECTED_ERROR) {
        callback();
      }
      if (event.type === W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS && !event.payload.isConnected) {
        callback();
      }
    });
  }
  onSetPreferredAccount(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS) {
        callback(event.payload);
      } else if (event.type === W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_ERROR) {
        callback({ type: W3mFrameRpcConstants.ACCOUNT_TYPES.EOA });
      }
    });
  }
  onGetSmartAccountEnabledNetworks(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS) {
        callback(event.payload.smartAccountEnabledNetworks);
      } else if (event.type === W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR) {
        callback([]);
      }
    });
  }
  onConnectEmailSuccess(event) {
    var _a2;
    (_a2 = this.connectEmailResolver) == null ? void 0 : _a2.resolve(event.payload);
    this.setNewLastEmailLoginTime();
  }
  onConnectEmailError(event) {
    var _a2;
    (_a2 = this.connectEmailResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectDeviceSuccess() {
    var _a2;
    (_a2 = this.connectDeviceResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onConnectDeviceError(event) {
    var _a2;
    (_a2 = this.connectDeviceResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectOtpSuccess() {
    var _a2;
    (_a2 = this.connectOtpResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onConnectOtpError(event) {
    var _a2;
    (_a2 = this.connectOtpResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectSuccess(event) {
    var _a2;
    this.setEmailLoginSuccess(event.payload.email);
    this.setLastUsedChainId(event.payload.chainId);
    (_a2 = this.connectResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onConnectError(event) {
    var _a2;
    (_a2 = this.connectResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectSocialSuccess(event) {
    var _a2;
    if (event.payload.userName) {
      this.setSocialLoginSuccess(event.payload.userName);
    }
    (_a2 = this.connectSocialResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onConnectSocialError(event) {
    var _a2;
    (_a2 = this.connectSocialResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onIsConnectedSuccess(event) {
    var _a2;
    if (!event.payload.isConnected) {
      this.deleteAuthLoginCache();
    }
    (_a2 = this.isConnectedResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onIsConnectedError(event) {
    var _a2;
    (_a2 = this.isConnectedResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onGetChainIdSuccess(event) {
    var _a2;
    this.setLastUsedChainId(event.payload.chainId);
    (_a2 = this.getChainIdResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onGetChainIdError(event) {
    var _a2;
    (_a2 = this.getChainIdResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onGetSocialRedirectUriSuccess(event) {
    var _a2;
    (_a2 = this.getSocialRedirectUriResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onGetSocialRedirectUriError(event) {
    var _a2;
    (_a2 = this.getSocialRedirectUriResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSignOutSuccess() {
    var _a2;
    (_a2 = this.disconnectResolver) == null ? void 0 : _a2.resolve(void 0);
    this.deleteAuthLoginCache();
  }
  onSignOutError(event) {
    var _a2;
    (_a2 = this.disconnectResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSwitchChainSuccess(event) {
    var _a2;
    this.setLastUsedChainId(event.payload.chainId);
    (_a2 = this.switchChainResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onSwitchChainError(event) {
    var _a2;
    (_a2 = this.switchChainResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onRpcRequestSuccess(event) {
    var _a2;
    (_a2 = this.rpcRequestResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onRpcRequestError(event) {
    var _a2;
    (_a2 = this.rpcRequestResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSessionUpdate(event) {
    const { payload } = event;
    if (payload) {
    }
  }
  onUpdateEmailSuccess(event) {
    var _a2;
    (_a2 = this.updateEmailResolver) == null ? void 0 : _a2.resolve(event.payload);
    this.setNewLastEmailLoginTime();
  }
  onUpdateEmailError(event) {
    var _a2;
    (_a2 = this.updateEmailResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onUpdateEmailPrimaryOtpSuccess() {
    var _a2;
    (_a2 = this.updateEmailPrimaryOtpResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onUpdateEmailPrimaryOtpError(event) {
    var _a2;
    (_a2 = this.updateEmailPrimaryOtpResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onUpdateEmailSecondaryOtpSuccess(event) {
    var _a2;
    const { newEmail } = event.payload;
    this.setEmailLoginSuccess(newEmail);
    (_a2 = this.updateEmailSecondaryOtpResolver) == null ? void 0 : _a2.resolve({ newEmail });
  }
  onUpdateEmailSecondaryOtpError(event) {
    var _a2;
    (_a2 = this.updateEmailSecondaryOtpResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSyncThemeSuccess() {
    var _a2;
    (_a2 = this.syncThemeResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onSyncThemeError(event) {
    var _a2;
    (_a2 = this.syncThemeResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSyncDappDataSuccess() {
    var _a2;
    (_a2 = this.syncDappDataResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onSyncDappDataError(event) {
    var _a2;
    (_a2 = this.syncDappDataResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSmartAccountEnabledNetworksSuccess(event) {
    var _a2;
    this.persistSmartAccountEnabledNetworks(event.payload.smartAccountEnabledNetworks);
    (_a2 = this.smartAccountEnabledNetworksResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onSmartAccountEnabledNetworksError(event) {
    var _a2;
    this.persistSmartAccountEnabledNetworks([]);
    (_a2 = this.smartAccountEnabledNetworksResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSetPreferredAccountSuccess() {
    var _a2;
    (_a2 = this.setPreferredAccountResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onSetPreferredAccountError() {
    var _a2;
    (_a2 = this.setPreferredAccountResolver) == null ? void 0 : _a2.reject();
  }
  setNewLastEmailLoginTime() {
    W3mFrameStorage.set(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME, Date.now().toString());
  }
  setSocialLoginSuccess(username) {
    W3mFrameStorage.set(W3mFrameConstants.SOCIAL_USERNAME, username);
  }
  setEmailLoginSuccess(email) {
    W3mFrameStorage.set(W3mFrameConstants.EMAIL, email);
    W3mFrameStorage.set(W3mFrameConstants.EMAIL_LOGIN_USED_KEY, "true");
    W3mFrameStorage.delete(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
  }
  deleteAuthLoginCache() {
    W3mFrameStorage.delete(W3mFrameConstants.EMAIL_LOGIN_USED_KEY);
    W3mFrameStorage.delete(W3mFrameConstants.EMAIL);
    W3mFrameStorage.delete(W3mFrameConstants.LAST_USED_CHAIN_KEY);
    W3mFrameStorage.delete(W3mFrameConstants.SOCIAL_USERNAME);
    W3mFrameStorage.delete(W3mFrameConstants.SOCIAL, true);
  }
  setLastUsedChainId(chainId) {
    W3mFrameStorage.set(W3mFrameConstants.LAST_USED_CHAIN_KEY, String(chainId));
  }
  getLastUsedChainId() {
    return Number(W3mFrameStorage.get(W3mFrameConstants.LAST_USED_CHAIN_KEY));
  }
  persistSmartAccountEnabledNetworks(networks) {
    W3mFrameStorage.set(W3mFrameConstants.SMART_ACCOUNT_ENABLED_NETWORKS, networks.join(","));
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/TransactionsController.js
var state5 = proxy({
  transactions: [],
  coinbaseTransactions: {},
  transactionsByYear: {},
  loading: false,
  empty: false,
  next: void 0
});
var TransactionsController = {
  state: state5,
  subscribe(callback) {
    return subscribe(state5, () => callback(state5));
  },
  async fetchTransactions(accountAddress, onramp) {
    const { projectId } = OptionsController.state;
    if (!projectId || !accountAddress) {
      throw new Error("Transactions can't be fetched without a projectId and an accountAddress");
    }
    state5.loading = true;
    try {
      const response = await BlockchainApiController.fetchTransactions({
        account: accountAddress,
        projectId,
        cursor: state5.next,
        onramp
      });
      const nonSpamTransactions = this.filterSpamTransactions(response.data);
      const filteredTransactions = [...state5.transactions, ...nonSpamTransactions];
      state5.loading = false;
      if (onramp === "coinbase") {
        state5.coinbaseTransactions = this.groupTransactionsByYearAndMonth(state5.coinbaseTransactions, response.data);
      } else {
        state5.transactions = filteredTransactions;
        state5.transactionsByYear = this.groupTransactionsByYearAndMonth(state5.transactionsByYear, nonSpamTransactions);
      }
      state5.empty = filteredTransactions.length === 0;
      state5.next = response.next ? response.next : void 0;
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "ERROR_FETCH_TRANSACTIONS",
        properties: {
          address: accountAddress,
          projectId,
          cursor: state5.next,
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      SnackController.showError("Failed to fetch transactions");
      state5.loading = false;
      state5.empty = true;
      state5.next = void 0;
    }
  },
  groupTransactionsByYearAndMonth(transactionsMap = {}, transactions = []) {
    const grouped = transactionsMap;
    transactions.forEach((transaction) => {
      const year = new Date(transaction.metadata.minedAt).getFullYear();
      const month = new Date(transaction.metadata.minedAt).getMonth();
      const yearTransactions = grouped[year] ?? {};
      const monthTransactions = yearTransactions[month] ?? [];
      const newMonthTransactions = monthTransactions.filter((tx) => tx.id !== transaction.id);
      grouped[year] = {
        ...yearTransactions,
        [month]: [...newMonthTransactions, transaction].sort((a2, b2) => new Date(b2.metadata.minedAt).getTime() - new Date(a2.metadata.minedAt).getTime())
      };
    });
    return grouped;
  },
  filterSpamTransactions(transactions) {
    return transactions.filter((transaction) => {
      const isAllSpam = transaction.transfers.every((transfer) => {
        var _a2;
        return ((_a2 = transfer.nft_info) == null ? void 0 : _a2.flags.is_spam) === true;
      });
      return !isAllSpam;
    });
  },
  clearCursor() {
    state5.next = void 0;
  },
  resetTransactions() {
    state5.transactions = [];
    state5.transactionsByYear = {};
    state5.loading = false;
    state5.empty = false;
    state5.next = void 0;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ConnectionController.js
var state6 = proxy({
  wcError: false,
  buffering: false
});
var ConnectionController = {
  state: state6,
  subscribeKey(key, callback) {
    return subscribeKey(state6, key, callback);
  },
  _getClient() {
    if (!state6._client) {
      throw new Error("ConnectionController client not set");
    }
    return state6._client;
  },
  setClient(client) {
    state6._client = ref(client);
  },
  connectWalletConnect() {
    state6.wcPromise = this._getClient().connectWalletConnect((uri) => {
      state6.wcUri = uri;
      state6.wcPairingExpiry = CoreHelperUtil.getPairingExpiry();
    });
    StorageUtil.setConnectedConnector("WALLET_CONNECT");
  },
  async connectExternal(options) {
    var _a2, _b;
    await ((_b = (_a2 = this._getClient()).connectExternal) == null ? void 0 : _b.call(_a2, options));
    StorageUtil.setConnectedConnector(options.type);
  },
  async reconnectExternal(options) {
    var _a2, _b;
    await ((_b = (_a2 = this._getClient()).reconnectExternal) == null ? void 0 : _b.call(_a2, options));
    StorageUtil.setConnectedConnector(options.type);
  },
  async setPreferredAccountType(accountType) {
    var _a2;
    ModalController.setLoading(true);
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector) {
      return;
    }
    await (authConnector == null ? void 0 : authConnector.provider.setPreferredAccount(accountType));
    await this.reconnectExternal(authConnector);
    ModalController.setLoading(false);
    EventsController.sendEvent({
      type: "track",
      event: "SET_PREFERRED_ACCOUNT_TYPE",
      properties: { accountType, network: ((_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id) || "" }
    });
  },
  async signMessage(message) {
    return this._getClient().signMessage(message);
  },
  parseUnits(value, decimals) {
    return this._getClient().parseUnits(value, decimals);
  },
  formatUnits(value, decimals) {
    return this._getClient().formatUnits(value, decimals);
  },
  async sendTransaction(args) {
    return this._getClient().sendTransaction(args);
  },
  async estimateGas(args) {
    return this._getClient().estimateGas(args);
  },
  async writeContract(args) {
    return this._getClient().writeContract(args);
  },
  async getEnsAddress(value) {
    return this._getClient().getEnsAddress(value);
  },
  async getEnsAvatar(value) {
    return this._getClient().getEnsAvatar(value);
  },
  checkInstalled(ids) {
    var _a2, _b;
    return (_b = (_a2 = this._getClient()).checkInstalled) == null ? void 0 : _b.call(_a2, ids);
  },
  resetWcConnection() {
    state6.wcUri = void 0;
    state6.wcPairingExpiry = void 0;
    state6.wcPromise = void 0;
    state6.wcLinking = void 0;
    state6.recentWallet = void 0;
    TransactionsController.resetTransactions();
    StorageUtil.deleteWalletConnectDeepLink();
  },
  setWcLinking(wcLinking) {
    state6.wcLinking = wcLinking;
  },
  setWcError(wcError) {
    state6.wcError = wcError;
    state6.buffering = false;
  },
  setRecentWallet(wallet) {
    state6.recentWallet = wallet;
  },
  setBuffering(buffering) {
    state6.buffering = buffering;
  },
  async disconnect() {
    await this._getClient().disconnect();
    StorageUtil.removeConnectedWalletImageUrl();
    this.resetWcConnection();
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/SwapApiUtil.js
var SwapApiUtil = {
  async getTokenList() {
    var _a2, _b;
    const response = await BlockchainApiController.fetchSwapTokens({
      chainId: (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id,
      projectId: OptionsController.state.projectId
    });
    const tokens = ((_b = response == null ? void 0 : response.tokens) == null ? void 0 : _b.map((token) => ({
      ...token,
      eip2612: false,
      quantity: {
        decimals: "0",
        numeric: "0"
      },
      price: 0,
      value: 0
    }))) || [];
    return tokens;
  },
  async fetchGasPrice() {
    const projectId = OptionsController.state.projectId;
    const caipNetwork = NetworkController.state.caipNetwork;
    if (!caipNetwork) {
      return null;
    }
    return await BlockchainApiController.fetchGasPrice({
      projectId,
      chainId: caipNetwork.id
    });
  },
  async fetchSwapAllowance({ tokenAddress, userAddress, sourceTokenAmount, sourceTokenDecimals }) {
    const projectId = OptionsController.state.projectId;
    const response = await BlockchainApiController.fetchSwapAllowance({
      projectId,
      tokenAddress,
      userAddress
    });
    if ((response == null ? void 0 : response.allowance) && sourceTokenAmount && sourceTokenDecimals) {
      const parsedValue = ConnectionController.parseUnits(sourceTokenAmount, sourceTokenDecimals);
      const hasAllowance = BigInt(response.allowance) >= parsedValue;
      return hasAllowance;
    }
    return false;
  },
  async getMyTokensWithBalance(forceUpdate) {
    const address = AccountController.state.address;
    const caipNetwork = NetworkController.state.caipNetwork;
    if (!address || !caipNetwork) {
      return [];
    }
    const response = await BlockchainApiController.getBalance(address, caipNetwork.id, forceUpdate);
    const balances = response.balances.filter((balance) => balance.quantity.decimals !== "0");
    AccountController.setTokenBalance(balances);
    return this.mapBalancesToSwapTokens(balances);
  },
  mapBalancesToSwapTokens(balances) {
    return (balances == null ? void 0 : balances.map((token) => ({
      ...token,
      address: (token == null ? void 0 : token.address) ? token.address : `${token.chainId}:${ConstantsUtil2.NATIVE_TOKEN_ADDRESS}`,
      decimals: parseInt(token.quantity.decimals, 10),
      logoUri: token.iconUrl,
      eip2612: false
    }))) || [];
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/RouterController.js
var state7 = proxy({
  view: "Connect",
  history: ["Connect"],
  transactionStack: []
});
var RouterController = {
  state: state7,
  subscribeKey(key, callback) {
    return subscribeKey(state7, key, callback);
  },
  pushTransactionStack(action) {
    state7.transactionStack.push(action);
  },
  popTransactionStack(cancel) {
    var _a2, _b;
    const action = state7.transactionStack.pop();
    if (!action) {
      return;
    }
    if (cancel) {
      this.goBack();
      (_a2 = action == null ? void 0 : action.onCancel) == null ? void 0 : _a2.call(action);
    } else {
      if (action.goBack) {
        this.goBack();
      } else if (action.view) {
        this.reset(action.view);
      }
      (_b = action == null ? void 0 : action.onSuccess) == null ? void 0 : _b.call(action);
    }
  },
  push(view, data) {
    if (view !== state7.view) {
      state7.view = view;
      state7.history.push(view);
      state7.data = data;
    }
  },
  reset(view) {
    state7.view = view;
    state7.history = [view];
  },
  replace(view, data) {
    if (state7.history.length >= 1 && state7.history.at(-1) !== view) {
      state7.view = view;
      state7.history[state7.history.length - 1] = view;
      state7.data = data;
    }
  },
  goBack() {
    if (state7.history.length > 1) {
      state7.history.pop();
      const [last] = state7.history.slice(-1);
      if (last) {
        state7.view = last;
      }
    }
  },
  goBackToIndex(historyIndex) {
    if (state7.history.length > 1) {
      state7.history = state7.history.slice(0, historyIndex + 1);
      const [last] = state7.history.slice(-1);
      if (last) {
        state7.view = last;
      }
    }
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/SwapCalculationUtil.js
var SwapCalculationUtil = {
  getGasPriceInEther(gas, gasPrice) {
    const totalGasCostInWei = gasPrice * gas;
    const totalGasCostInEther = Number(totalGasCostInWei) / 1e18;
    return totalGasCostInEther;
  },
  getGasPriceInUSD(networkPrice, gas, gasPrice) {
    const totalGasCostInEther = SwapCalculationUtil.getGasPriceInEther(gas, gasPrice);
    const networkPriceInUSD = NumberUtil.bigNumber(networkPrice);
    const gasCostInUSD = networkPriceInUSD.multipliedBy(totalGasCostInEther);
    return gasCostInUSD.toNumber();
  },
  getPriceImpact({ sourceTokenAmount, sourceTokenPriceInUSD, toTokenPriceInUSD, toTokenAmount }) {
    const inputValue = NumberUtil.bigNumber(sourceTokenAmount).multipliedBy(sourceTokenPriceInUSD);
    const outputValue = NumberUtil.bigNumber(toTokenAmount).multipliedBy(toTokenPriceInUSD);
    const priceImpact = inputValue.minus(outputValue).dividedBy(inputValue).multipliedBy(100);
    return priceImpact.toNumber();
  },
  getMaxSlippage(slippage, toTokenAmount) {
    const slippageToleranceDecimal = NumberUtil.bigNumber(slippage).dividedBy(100);
    const maxSlippageAmount = NumberUtil.multiply(toTokenAmount, slippageToleranceDecimal);
    return maxSlippageAmount.toNumber();
  },
  getProviderFee(sourceTokenAmount, feePercentage = 85e-4) {
    const providerFee = NumberUtil.bigNumber(sourceTokenAmount).multipliedBy(feePercentage);
    return providerFee.toString();
  },
  isInsufficientNetworkTokenForGas(networkBalanceInUSD, gasPriceInUSD) {
    const gasPrice = gasPriceInUSD || "0";
    if (NumberUtil.bigNumber(networkBalanceInUSD).isZero()) {
      return true;
    }
    return NumberUtil.bigNumber(NumberUtil.bigNumber(gasPrice)).isGreaterThan(networkBalanceInUSD);
  },
  isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, balance) {
    var _a2, _b;
    const sourceTokenBalance = (_b = (_a2 = balance == null ? void 0 : balance.find((token) => token.address === sourceTokenAddress)) == null ? void 0 : _a2.quantity) == null ? void 0 : _b.numeric;
    const isInSufficientBalance = NumberUtil.bigNumber(sourceTokenBalance || "0").isLessThan(sourceTokenAmount);
    return isInSufficientBalance;
  },
  getToTokenAmount({ sourceToken, toToken, sourceTokenPrice, toTokenPrice, sourceTokenAmount }) {
    if (sourceTokenAmount === "0") {
      return "0";
    }
    if (!sourceToken || !toToken) {
      return "0";
    }
    const sourceTokenDecimals = sourceToken.decimals;
    const sourceTokenPriceInUSD = sourceTokenPrice;
    const toTokenDecimals = toToken.decimals;
    const toTokenPriceInUSD = toTokenPrice;
    if (toTokenPriceInUSD <= 0) {
      return "0";
    }
    const providerFee = NumberUtil.bigNumber(sourceTokenAmount).multipliedBy(85e-4);
    const adjustedSourceTokenAmount = NumberUtil.bigNumber(sourceTokenAmount).minus(providerFee);
    const sourceAmountInSmallestUnit = adjustedSourceTokenAmount.multipliedBy(NumberUtil.bigNumber(10).pow(sourceTokenDecimals));
    const priceRatio = NumberUtil.bigNumber(sourceTokenPriceInUSD).dividedBy(toTokenPriceInUSD);
    const decimalDifference = sourceTokenDecimals - toTokenDecimals;
    const toTokenAmountInSmallestUnit = sourceAmountInSmallestUnit.multipliedBy(priceRatio).dividedBy(NumberUtil.bigNumber(10).pow(decimalDifference));
    const toTokenAmount = toTokenAmountInSmallestUnit.dividedBy(NumberUtil.bigNumber(10).pow(toTokenDecimals));
    const amount = toTokenAmount.toFixed(toTokenDecimals).toString();
    return amount;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/SwapController.js
var INITIAL_GAS_LIMIT = 15e4;
var TO_AMOUNT_DECIMALS = 6;
var initialState = {
  initializing: false,
  initialized: false,
  loadingPrices: false,
  loadingQuote: false,
  loadingApprovalTransaction: false,
  loadingBuildTransaction: false,
  loadingTransaction: false,
  fetchError: false,
  approvalTransaction: void 0,
  swapTransaction: void 0,
  transactionError: void 0,
  sourceToken: void 0,
  sourceTokenAmount: "",
  sourceTokenPriceInUSD: 0,
  toToken: void 0,
  toTokenAmount: "",
  toTokenPriceInUSD: 0,
  networkPrice: "0",
  networkBalanceInUSD: "0",
  networkTokenSymbol: "",
  inputError: void 0,
  slippage: ConstantsUtil2.CONVERT_SLIPPAGE_TOLERANCE,
  tokens: void 0,
  popularTokens: void 0,
  suggestedTokens: void 0,
  foundTokens: void 0,
  myTokensWithBalance: void 0,
  tokensPriceMap: {},
  gasFee: "0",
  gasPriceInUSD: 0,
  priceImpact: void 0,
  maxSlippage: void 0,
  providerFee: void 0
};
var state8 = proxy(initialState);
var SwapController = {
  state: state8,
  subscribe(callback) {
    return subscribe(state8, () => callback(state8));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state8, key, callback);
  },
  getParams() {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
    const { address } = AccountController.state;
    const networkAddress = `${(_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id}:${ConstantsUtil2.NATIVE_TOKEN_ADDRESS}`;
    if (!address) {
      throw new Error("No address found to swap the tokens from.");
    }
    const caipAddress = AccountController.state.caipAddress;
    const invalidToToken = !((_b = state8.toToken) == null ? void 0 : _b.address) || !((_c = state8.toToken) == null ? void 0 : _c.decimals);
    const invalidSourceToken = !((_d = state8.sourceToken) == null ? void 0 : _d.address) || !((_e = state8.sourceToken) == null ? void 0 : _e.decimals) || !NumberUtil.bigNumber(state8.sourceTokenAmount).isGreaterThan(0);
    const invalidSourceTokenAmount = !state8.sourceTokenAmount;
    return {
      networkAddress,
      fromAddress: address,
      fromCaipAddress: AccountController.state.caipAddress,
      sourceTokenAddress: (_f = state8.sourceToken) == null ? void 0 : _f.address,
      toTokenAddress: (_g = state8.toToken) == null ? void 0 : _g.address,
      toTokenAmount: state8.toTokenAmount,
      toTokenDecimals: (_h = state8.toToken) == null ? void 0 : _h.decimals,
      sourceTokenAmount: state8.sourceTokenAmount,
      sourceTokenDecimals: (_i = state8.sourceToken) == null ? void 0 : _i.decimals,
      invalidToToken,
      invalidSourceToken,
      invalidSourceTokenAmount,
      availableToSwap: caipAddress && !invalidToToken && !invalidSourceToken && !invalidSourceTokenAmount
    };
  },
  setSourceToken(sourceToken) {
    if (!sourceToken) {
      state8.sourceToken = sourceToken;
      state8.sourceTokenAmount = "";
      state8.sourceTokenPriceInUSD = 0;
      return;
    }
    state8.sourceToken = sourceToken;
    this.setTokenPrice(sourceToken.address, "sourceToken");
  },
  setSourceTokenAmount(amount) {
    state8.sourceTokenAmount = amount;
  },
  setToToken(toToken) {
    if (!toToken) {
      state8.toToken = toToken;
      state8.toTokenAmount = "";
      state8.toTokenPriceInUSD = 0;
      return;
    }
    state8.toToken = toToken;
    this.setTokenPrice(toToken.address, "toToken");
  },
  setToTokenAmount(amount) {
    state8.toTokenAmount = amount ? NumberUtil.formatNumberToLocalString(amount, TO_AMOUNT_DECIMALS) : "";
  },
  async setTokenPrice(address, target) {
    const { availableToSwap } = this.getParams();
    let price = state8.tokensPriceMap[address] || 0;
    if (!price) {
      state8.loadingPrices = true;
      price = await this.getAddressPrice(address);
    }
    if (target === "sourceToken") {
      state8.sourceTokenPriceInUSD = price;
    } else if (target === "toToken") {
      state8.toTokenPriceInUSD = price;
    }
    if (state8.loadingPrices) {
      state8.loadingPrices = false;
      if (availableToSwap) {
        this.swapTokens();
      }
    }
  },
  switchTokens() {
    if (state8.initializing || !state8.initialized) {
      return;
    }
    const newSourceToken = state8.toToken ? { ...state8.toToken } : void 0;
    const newToToken = state8.sourceToken ? { ...state8.sourceToken } : void 0;
    const newSourceTokenAmount = newSourceToken && state8.toTokenAmount === "" ? "1" : state8.toTokenAmount;
    this.setSourceToken(newSourceToken);
    this.setToToken(newToToken);
    this.setSourceTokenAmount(newSourceTokenAmount);
    this.setToTokenAmount("");
    this.swapTokens();
  },
  resetState() {
    state8.myTokensWithBalance = initialState.myTokensWithBalance;
    state8.tokensPriceMap = initialState.tokensPriceMap;
    state8.initialized = initialState.initialized;
    state8.sourceToken = initialState.sourceToken;
    state8.sourceTokenAmount = initialState.sourceTokenAmount;
    state8.sourceTokenPriceInUSD = initialState.sourceTokenPriceInUSD;
    state8.toToken = initialState.toToken;
    state8.toTokenAmount = initialState.toTokenAmount;
    state8.toTokenPriceInUSD = initialState.toTokenPriceInUSD;
    state8.networkPrice = initialState.networkPrice;
    state8.networkTokenSymbol = initialState.networkTokenSymbol;
    state8.networkBalanceInUSD = initialState.networkBalanceInUSD;
    state8.inputError = initialState.inputError;
  },
  resetValues() {
    var _a2;
    const { networkAddress } = this.getParams();
    const networkToken = (_a2 = state8.tokens) == null ? void 0 : _a2.find((token) => token.address === networkAddress);
    this.setSourceToken(networkToken);
    this.setToToken(void 0);
  },
  getApprovalLoadingState() {
    return state8.loadingApprovalTransaction;
  },
  clearError() {
    state8.transactionError = void 0;
  },
  async initializeState() {
    if (state8.initializing) {
      return;
    }
    state8.initializing = true;
    if (!state8.initialized) {
      try {
        await this.fetchTokens();
        state8.initialized = true;
      } catch (error) {
        state8.initialized = false;
        SnackController.showError("Failed to initialize swap");
        RouterController.goBack();
      }
    }
    state8.initializing = false;
  },
  async fetchTokens() {
    var _a2;
    const { networkAddress } = this.getParams();
    await this.getTokenList();
    await this.getNetworkTokenPrice();
    await this.getMyTokensWithBalance();
    const networkToken = (_a2 = state8.tokens) == null ? void 0 : _a2.find((token) => token.address === networkAddress);
    if (networkToken) {
      state8.networkTokenSymbol = networkToken.symbol;
      this.setSourceToken(networkToken);
      this.setSourceTokenAmount("1");
    }
  },
  async getTokenList() {
    const tokens = await SwapApiUtil.getTokenList();
    state8.tokens = tokens;
    state8.popularTokens = tokens.sort((aTokenInfo, bTokenInfo) => {
      if (aTokenInfo.symbol < bTokenInfo.symbol) {
        return -1;
      }
      if (aTokenInfo.symbol > bTokenInfo.symbol) {
        return 1;
      }
      return 0;
    });
    state8.suggestedTokens = tokens.filter((token) => {
      if (ConstantsUtil2.SWAP_SUGGESTED_TOKENS.includes(token.symbol)) {
        return true;
      }
      return false;
    }, {});
  },
  async getAddressPrice(address) {
    var _a2, _b;
    const existPrice = state8.tokensPriceMap[address];
    if (existPrice) {
      return existPrice;
    }
    const response = await BlockchainApiController.fetchTokenPrice({
      projectId: OptionsController.state.projectId,
      addresses: [address]
    });
    const fungibles = response.fungibles || [];
    const allTokens = [...state8.tokens || [], ...state8.myTokensWithBalance || []];
    const symbol = (_a2 = allTokens == null ? void 0 : allTokens.find((token) => token.address === address)) == null ? void 0 : _a2.symbol;
    const price = ((_b = fungibles.find((p3) => p3.symbol.toLowerCase() === (symbol == null ? void 0 : symbol.toLowerCase()))) == null ? void 0 : _b.price) || 0;
    const priceAsFloat = parseFloat(price.toString());
    state8.tokensPriceMap[address] = priceAsFloat;
    return priceAsFloat;
  },
  async getNetworkTokenPrice() {
    var _a2;
    const { networkAddress } = this.getParams();
    const response = await BlockchainApiController.fetchTokenPrice({
      projectId: OptionsController.state.projectId,
      addresses: [networkAddress]
    });
    const token = (_a2 = response.fungibles) == null ? void 0 : _a2[0];
    const price = (token == null ? void 0 : token.price.toString()) || "0";
    state8.tokensPriceMap[networkAddress] = parseFloat(price);
    state8.networkTokenSymbol = (token == null ? void 0 : token.symbol) || "";
    state8.networkPrice = price;
  },
  async getMyTokensWithBalance(forceUpdate) {
    const balances = await SwapApiUtil.getMyTokensWithBalance(forceUpdate);
    if (!balances) {
      return;
    }
    await this.getInitialGasPrice();
    this.setBalances(balances);
  },
  setBalances(balances) {
    const { networkAddress } = this.getParams();
    const caipNetwork = NetworkController.state.caipNetwork;
    if (!caipNetwork) {
      return;
    }
    const networkToken = balances.find((token) => token.address === networkAddress);
    balances.forEach((token) => {
      state8.tokensPriceMap[token.address] = token.price || 0;
    });
    state8.myTokensWithBalance = balances.filter((token) => token.address.startsWith(caipNetwork.id));
    state8.networkBalanceInUSD = networkToken ? NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString() : "0";
  },
  async getInitialGasPrice() {
    const res = await SwapApiUtil.fetchGasPrice();
    if (!res) {
      return { gasPrice: null, gasPriceInUsd: null };
    }
    const value = res.standard;
    const gasFee = BigInt(value);
    const gasLimit = BigInt(INITIAL_GAS_LIMIT);
    const gasPrice = SwapCalculationUtil.getGasPriceInUSD(state8.networkPrice, gasLimit, gasFee);
    state8.gasFee = value;
    state8.gasPriceInUSD = gasPrice;
    return { gasPrice: gasFee, gasPriceInUSD: state8.gasPriceInUSD };
  },
  async swapTokens() {
    var _a2, _b;
    const address = AccountController.state.address;
    const sourceToken = state8.sourceToken;
    const toToken = state8.toToken;
    const haveSourceTokenAmount = NumberUtil.bigNumber(state8.sourceTokenAmount).isGreaterThan(0);
    if (!toToken || !sourceToken || state8.loadingPrices || !haveSourceTokenAmount) {
      return;
    }
    state8.loadingQuote = true;
    const amountDecimal = NumberUtil.bigNumber(state8.sourceTokenAmount).multipliedBy(10 ** sourceToken.decimals);
    const quoteResponse = await BlockchainApiController.fetchSwapQuote({
      userAddress: address,
      projectId: OptionsController.state.projectId,
      from: sourceToken.address,
      to: toToken.address,
      gasPrice: state8.gasFee,
      amount: amountDecimal.toString()
    });
    state8.loadingQuote = false;
    const quoteToAmount = (_b = (_a2 = quoteResponse == null ? void 0 : quoteResponse.quotes) == null ? void 0 : _a2[0]) == null ? void 0 : _b.toAmount;
    if (!quoteToAmount) {
      return;
    }
    const toTokenAmount = NumberUtil.bigNumber(quoteToAmount).dividedBy(10 ** toToken.decimals).toString();
    this.setToTokenAmount(toTokenAmount);
    const isInsufficientToken = this.hasInsufficientToken(state8.sourceTokenAmount, sourceToken.address);
    if (isInsufficientToken) {
      state8.inputError = "Insufficient balance";
    } else {
      state8.inputError = void 0;
      this.setTransactionDetails();
    }
  },
  async getTransaction() {
    const { fromCaipAddress, availableToSwap } = this.getParams();
    const sourceToken = state8.sourceToken;
    const toToken = state8.toToken;
    if (!fromCaipAddress || !availableToSwap || !sourceToken || !toToken || state8.loadingQuote) {
      return void 0;
    }
    try {
      state8.loadingBuildTransaction = true;
      const hasAllowance = await SwapApiUtil.fetchSwapAllowance({
        userAddress: fromCaipAddress,
        tokenAddress: sourceToken.address,
        sourceTokenAmount: state8.sourceTokenAmount,
        sourceTokenDecimals: sourceToken.decimals
      });
      let transaction = void 0;
      if (hasAllowance) {
        transaction = await this.createSwapTransaction();
      } else {
        transaction = await this.createAllowanceTransaction();
      }
      state8.loadingBuildTransaction = false;
      state8.fetchError = false;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to check allowance");
      state8.loadingBuildTransaction = false;
      state8.approvalTransaction = void 0;
      state8.swapTransaction = void 0;
      state8.fetchError = true;
      return void 0;
    }
  },
  async createAllowanceTransaction() {
    const { fromCaipAddress, fromAddress, sourceTokenAddress, toTokenAddress } = this.getParams();
    if (!fromCaipAddress || !toTokenAddress) {
      return void 0;
    }
    if (!sourceTokenAddress) {
      throw new Error(">>> createAllowanceTransaction - No source token address found.");
    }
    try {
      const response = await BlockchainApiController.generateApproveCalldata({
        projectId: OptionsController.state.projectId,
        from: sourceTokenAddress,
        to: toTokenAddress,
        userAddress: fromCaipAddress
      });
      const gasLimit = await ConnectionController.estimateGas({
        address: fromAddress,
        to: CoreHelperUtil.getPlainAddress(response.tx.to),
        data: response.tx.data
      });
      const transaction = {
        data: response.tx.data,
        to: CoreHelperUtil.getPlainAddress(response.tx.from),
        gas: gasLimit,
        gasPrice: BigInt(response.tx.eip155.gasPrice),
        value: BigInt(response.tx.value),
        toAmount: state8.toTokenAmount
      };
      state8.swapTransaction = void 0;
      state8.approvalTransaction = transaction;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to create approval transaction");
      state8.approvalTransaction = void 0;
      state8.swapTransaction = void 0;
      state8.fetchError = true;
      return void 0;
    }
  },
  async createSwapTransaction() {
    const { networkAddress, fromCaipAddress, sourceTokenAmount } = this.getParams();
    const sourceToken = state8.sourceToken;
    const toToken = state8.toToken;
    if (!fromCaipAddress || !sourceTokenAmount || !sourceToken || !toToken) {
      return void 0;
    }
    const amount = ConnectionController.parseUnits(sourceTokenAmount, sourceToken.decimals).toString();
    try {
      const response = await BlockchainApiController.generateSwapCalldata({
        projectId: OptionsController.state.projectId,
        userAddress: fromCaipAddress,
        from: sourceToken.address,
        to: toToken.address,
        amount
      });
      const isSourceTokenIsNetworkToken = sourceToken.address === networkAddress;
      const gas = BigInt(response.tx.eip155.gas);
      const gasPrice = BigInt(response.tx.eip155.gasPrice);
      const transaction = {
        data: response.tx.data,
        to: CoreHelperUtil.getPlainAddress(response.tx.to),
        gas,
        gasPrice,
        value: isSourceTokenIsNetworkToken ? BigInt(amount) : BigInt("0"),
        toAmount: state8.toTokenAmount
      };
      state8.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state8.networkPrice, gas, gasPrice);
      state8.approvalTransaction = void 0;
      state8.swapTransaction = transaction;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to create transaction");
      state8.approvalTransaction = void 0;
      state8.swapTransaction = void 0;
      state8.fetchError = true;
      return void 0;
    }
  },
  async sendTransactionForApproval(data) {
    const { fromAddress } = this.getParams();
    state8.loadingApprovalTransaction = true;
    RouterController.pushTransactionStack({
      view: null,
      goBack: true,
      onSuccess() {
        SnackController.showLoading("Approving transaction...");
      }
    });
    try {
      await ConnectionController.sendTransaction({
        address: fromAddress,
        to: data.to,
        data: data.data,
        value: BigInt(data.value),
        gasPrice: BigInt(data.gasPrice)
      });
      await this.swapTokens();
      await this.getTransaction();
      state8.approvalTransaction = void 0;
      state8.loadingApprovalTransaction = false;
    } catch (err) {
      const error = err;
      state8.transactionError = error == null ? void 0 : error.shortMessage;
      state8.loadingTransaction = false;
    }
  },
  async sendTransactionForSwap(data) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (!data) {
      return void 0;
    }
    const { fromAddress, toTokenAmount } = this.getParams();
    state8.loadingTransaction = true;
    const snackbarPendingMessage = `Swapping ${(_a2 = state8.sourceToken) == null ? void 0 : _a2.symbol} to ${NumberUtil.formatNumberToLocalString(toTokenAmount, 3)} ${(_b = state8.toToken) == null ? void 0 : _b.symbol}`;
    const snackbarSuccessMessage = `Swapped ${(_c = state8.sourceToken) == null ? void 0 : _c.symbol} to ${NumberUtil.formatNumberToLocalString(toTokenAmount, 3)} ${(_d = state8.toToken) == null ? void 0 : _d.symbol}`;
    RouterController.pushTransactionStack({
      view: "Account",
      goBack: false,
      onSuccess() {
        SnackController.showLoading(snackbarPendingMessage);
        SwapController.resetState();
      }
    });
    try {
      const forceUpdateAddresses = [(_e = state8.sourceToken) == null ? void 0 : _e.address, (_f = state8.toToken) == null ? void 0 : _f.address].join(",");
      const transactionHash = await ConnectionController.sendTransaction({
        address: fromAddress,
        to: data.to,
        data: data.data,
        gas: data.gas,
        gasPrice: BigInt(data.gasPrice),
        value: data.value
      });
      state8.loadingTransaction = false;
      SnackController.showSuccess(snackbarSuccessMessage);
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_SUCCESS",
        properties: {
          network: ((_g = NetworkController.state.caipNetwork) == null ? void 0 : _g.id) || "",
          swapFromToken: ((_h = this.state.sourceToken) == null ? void 0 : _h.symbol) || "",
          swapToToken: ((_i = this.state.toToken) == null ? void 0 : _i.symbol) || "",
          swapfromAmount: this.state.sourceTokenAmount || "",
          swapToAmount: this.state.toTokenAmount || "",
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      SwapController.resetState();
      SwapController.getMyTokensWithBalance(forceUpdateAddresses);
      return transactionHash;
    } catch (err) {
      const error = err;
      state8.transactionError = error == null ? void 0 : error.shortMessage;
      state8.loadingTransaction = false;
      SnackController.showError((error == null ? void 0 : error.shortMessage) || "Transaction error");
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_ERROR",
        properties: {
          network: ((_j = NetworkController.state.caipNetwork) == null ? void 0 : _j.id) || "",
          swapFromToken: ((_k = this.state.sourceToken) == null ? void 0 : _k.symbol) || "",
          swapToToken: ((_l = this.state.toToken) == null ? void 0 : _l.symbol) || "",
          swapfromAmount: this.state.sourceTokenAmount || "",
          swapToAmount: this.state.toTokenAmount || "",
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      return void 0;
    }
  },
  hasInsufficientToken(sourceTokenAmount, sourceTokenAddress) {
    const isInsufficientSourceTokenForSwap = SwapCalculationUtil.isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, state8.myTokensWithBalance);
    const insufficientNetworkTokenForGas = SwapCalculationUtil.isInsufficientNetworkTokenForGas(state8.networkBalanceInUSD, state8.gasPriceInUSD);
    return insufficientNetworkTokenForGas || isInsufficientSourceTokenForSwap;
  },
  setTransactionDetails() {
    const { toTokenAddress, toTokenDecimals } = this.getParams();
    if (!toTokenAddress || !toTokenDecimals) {
      return;
    }
    state8.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state8.networkPrice, BigInt(state8.gasFee), BigInt(INITIAL_GAS_LIMIT));
    state8.priceImpact = SwapCalculationUtil.getPriceImpact({
      sourceTokenAmount: state8.sourceTokenAmount,
      sourceTokenPriceInUSD: state8.sourceTokenPriceInUSD,
      toTokenPriceInUSD: state8.toTokenPriceInUSD,
      toTokenAmount: state8.toTokenAmount
    });
    state8.maxSlippage = SwapCalculationUtil.getMaxSlippage(state8.slippage, state8.toTokenAmount);
    state8.providerFee = SwapCalculationUtil.getProviderFee(state8.sourceTokenAmount);
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/AccountController.js
var state9 = proxy({
  isConnected: false,
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: false
});
var AccountController = {
  state: state9,
  subscribe(callback) {
    return subscribe(state9, () => callback(state9));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state9, key, callback);
  },
  setIsConnected(isConnected) {
    state9.isConnected = isConnected;
  },
  setCaipAddress(caipAddress) {
    state9.caipAddress = caipAddress;
    state9.address = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
  },
  setBalance(balance, balanceSymbol) {
    state9.balance = balance;
    state9.balanceSymbol = balanceSymbol;
  },
  setProfileName(profileName) {
    state9.profileName = profileName;
  },
  setProfileImage(profileImage) {
    state9.profileImage = profileImage;
  },
  setAddressExplorerUrl(explorerUrl) {
    state9.addressExplorerUrl = explorerUrl;
  },
  setSmartAccountDeployed(isDeployed) {
    state9.smartAccountDeployed = isDeployed;
  },
  setCurrentTab(currentTab) {
    state9.currentTab = currentTab;
  },
  setTokenBalance(tokenBalance) {
    if (tokenBalance) {
      state9.tokenBalance = ref(tokenBalance);
    }
  },
  setConnectedWalletInfo(connectedWalletInfo) {
    state9.connectedWalletInfo = connectedWalletInfo;
  },
  setPreferredAccountType(preferredAccountType) {
    state9.preferredAccountType = preferredAccountType;
  },
  setSocialProvider(socialProvider) {
    if (socialProvider) {
      state9.socialProvider = socialProvider;
    }
  },
  setSocialWindow(socialWindow) {
    if (socialWindow) {
      state9.socialWindow = ref(socialWindow);
    }
  },
  async fetchTokenBalance() {
    var _a2;
    const chainId = (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id;
    try {
      if (state9.address && chainId) {
        const response = await BlockchainApiController.getBalance(state9.address, chainId);
        const filteredBalances = response.balances.filter((balance) => balance.quantity.decimals !== "0");
        this.setTokenBalance(filteredBalances);
        SwapController.setBalances(SwapApiUtil.mapBalancesToSwapTokens(response.balances));
      }
    } catch (error) {
      SnackController.showError("Failed to fetch token balance");
    }
  },
  resetAccount() {
    state9.isConnected = false;
    state9.smartAccountDeployed = false;
    state9.currentTab = 0;
    state9.caipAddress = void 0;
    state9.address = void 0;
    state9.balance = void 0;
    state9.balanceSymbol = void 0;
    state9.profileName = void 0;
    state9.profileImage = void 0;
    state9.addressExplorerUrl = void 0;
    state9.tokenBalance = [];
    state9.connectedWalletInfo = void 0;
    state9.preferredAccountType = void 0;
    state9.socialProvider = void 0;
    state9.socialWindow = void 0;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ModalController.js
var state10 = proxy({
  loading: false,
  open: false
});
var ModalController = {
  state: state10,
  subscribe(callback) {
    return subscribe(state10, () => callback(state10));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state10, key, callback);
  },
  async open(options) {
    await ApiController.state.prefetchPromise;
    const connected = AccountController.state.isConnected;
    if (options == null ? void 0 : options.view) {
      RouterController.reset(options.view);
    } else if (connected) {
      RouterController.reset("Account");
    } else {
      RouterController.reset("Connect");
    }
    state10.open = true;
    PublicStateController.set({ open: true });
    EventsController.sendEvent({
      type: "track",
      event: "MODAL_OPEN",
      properties: { connected }
    });
  },
  close() {
    const connected = AccountController.state.isConnected;
    state10.open = false;
    PublicStateController.set({ open: false });
    EventsController.sendEvent({
      type: "track",
      event: "MODAL_CLOSE",
      properties: { connected }
    });
  },
  setLoading(loading) {
    state10.loading = loading;
    PublicStateController.set({ loading });
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/NetworkController.js
var state11 = proxy({
  supportsAllNetworks: true,
  isDefaultCaipNetwork: false,
  smartAccountEnabledNetworks: []
});
var NetworkController = {
  state: state11,
  subscribe(callback) {
    return subscribe(state11, () => callback(state11));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state11, key, callback);
  },
  _getClient() {
    if (!state11._client) {
      throw new Error("NetworkController client not set");
    }
    return state11._client;
  },
  setClient(client) {
    state11._client = ref(client);
  },
  setCaipNetwork(caipNetwork) {
    state11.caipNetwork = caipNetwork;
    PublicStateController.set({ selectedNetworkId: caipNetwork == null ? void 0 : caipNetwork.id });
    if (!this.state.allowUnsupportedChain) {
      this.checkIfSupportedNetwork();
    }
  },
  setDefaultCaipNetwork(caipNetwork) {
    state11.caipNetwork = caipNetwork;
    PublicStateController.set({ selectedNetworkId: caipNetwork == null ? void 0 : caipNetwork.id });
    state11.isDefaultCaipNetwork = true;
  },
  setRequestedCaipNetworks(requestedNetworks) {
    state11.requestedCaipNetworks = requestedNetworks;
  },
  setAllowUnsupportedChain(allowUnsupportedChain) {
    state11.allowUnsupportedChain = allowUnsupportedChain;
  },
  setSmartAccountEnabledNetworks(smartAccountEnabledNetworks) {
    state11.smartAccountEnabledNetworks = smartAccountEnabledNetworks;
  },
  getRequestedCaipNetworks() {
    const { approvedCaipNetworkIds, requestedCaipNetworks } = state11;
    const approvedIds = approvedCaipNetworkIds;
    const requestedNetworks = requestedCaipNetworks;
    return CoreHelperUtil.sortRequestedNetworks(approvedIds, requestedNetworks);
  },
  async getApprovedCaipNetworksData() {
    const data = await this._getClient().getApprovedCaipNetworksData();
    state11.supportsAllNetworks = data.supportsAllNetworks;
    state11.approvedCaipNetworkIds = data.approvedCaipNetworkIds;
  },
  async switchActiveNetwork(network) {
    await this._getClient().switchCaipNetwork(network);
    state11.caipNetwork = network;
    if (network) {
      EventsController.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: { network: network.id }
      });
    }
  },
  checkIfSupportedNetwork() {
    var _a2;
    state11.isUnsupportedChain = !((_a2 = state11.requestedCaipNetworks) == null ? void 0 : _a2.some((network) => {
      var _a3;
      return network.id === ((_a3 = state11.caipNetwork) == null ? void 0 : _a3.id);
    }));
    if (state11.isUnsupportedChain) {
      this.showUnsupportedChainUI();
    }
  },
  checkIfSmartAccountEnabled() {
    var _a2, _b;
    const networkId = NetworkUtil.caipNetworkIdToNumber((_a2 = state11.caipNetwork) == null ? void 0 : _a2.id);
    if (!networkId) {
      return false;
    }
    return Boolean((_b = state11.smartAccountEnabledNetworks) == null ? void 0 : _b.includes(networkId));
  },
  resetNetwork() {
    if (!state11.isDefaultCaipNetwork) {
      state11.caipNetwork = void 0;
    }
    state11.approvedCaipNetworkIds = void 0;
    state11.supportsAllNetworks = true;
    state11.smartAccountEnabledNetworks = [];
  },
  showUnsupportedChainUI() {
    setTimeout(() => {
      ModalController.open({ view: "UnsupportedChain" });
    }, 300);
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ApiController.js
var baseUrl3 = CoreHelperUtil.getApiUrl();
var api3 = new FetchUtil({ baseUrl: baseUrl3 });
var entries = "40";
var recommendedEntries = "4";
var state12 = proxy({
  page: 1,
  count: 0,
  featured: [],
  recommended: [],
  wallets: [],
  search: [],
  isAnalyticsEnabled: false,
  excludedRDNS: []
});
var ApiController = {
  state: state12,
  subscribeKey(key, callback) {
    return subscribeKey(state12, key, callback);
  },
  _getApiHeaders() {
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    return {
      "x-project-id": projectId,
      "x-sdk-type": sdkType,
      "x-sdk-version": sdkVersion
    };
  },
  async _fetchWalletImage(imageId) {
    const imageUrl = `${api3.baseUrl}/getWalletImage/${imageId}`;
    const blob = await api3.getBlob({ path: imageUrl, headers: ApiController._getApiHeaders() });
    AssetController.setWalletImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchNetworkImage(imageId) {
    const imageUrl = `${api3.baseUrl}/public/getAssetImage/${imageId}`;
    const blob = await api3.getBlob({ path: imageUrl, headers: ApiController._getApiHeaders() });
    AssetController.setNetworkImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchConnectorImage(imageId) {
    const imageUrl = `${api3.baseUrl}/public/getAssetImage/${imageId}`;
    const blob = await api3.getBlob({ path: imageUrl, headers: ApiController._getApiHeaders() });
    AssetController.setConnectorImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchCurrencyImage(countryCode) {
    const imageUrl = `${api3.baseUrl}/public/getCurrencyImage/${countryCode}`;
    const blob = await api3.getBlob({ path: imageUrl, headers: ApiController._getApiHeaders() });
    AssetController.setCurrencyImage(countryCode, URL.createObjectURL(blob));
  },
  async _fetchTokenImage(symbol) {
    const imageUrl = `${api3.baseUrl}/public/getTokenImage/${symbol}`;
    const blob = await api3.getBlob({ path: imageUrl, headers: ApiController._getApiHeaders() });
    AssetController.setTokenImage(symbol, URL.createObjectURL(blob));
  },
  async fetchNetworkImages() {
    const { requestedCaipNetworks } = NetworkController.state;
    const ids = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.map(({ imageId }) => imageId).filter(Boolean);
    if (ids) {
      await Promise.allSettled(ids.map((id) => ApiController._fetchNetworkImage(id)));
    }
  },
  async fetchConnectorImages() {
    const { connectors } = ConnectorController.state;
    const ids = connectors.map(({ imageId }) => imageId).filter(Boolean);
    await Promise.allSettled(ids.map((id) => ApiController._fetchConnectorImage(id)));
  },
  async fetchCurrencyImages(currencies = []) {
    await Promise.allSettled(currencies.map((currency) => ApiController._fetchCurrencyImage(currency)));
  },
  async fetchTokenImages(tokens = []) {
    await Promise.allSettled(tokens.map((token) => ApiController._fetchTokenImage(token)));
  },
  async fetchFeaturedWallets() {
    const { featuredWalletIds } = OptionsController.state;
    if (featuredWalletIds == null ? void 0 : featuredWalletIds.length) {
      const { data } = await api3.get({
        path: "/getWallets",
        headers: ApiController._getApiHeaders(),
        params: {
          page: "1",
          entries: (featuredWalletIds == null ? void 0 : featuredWalletIds.length) ? String(featuredWalletIds.length) : recommendedEntries,
          include: featuredWalletIds == null ? void 0 : featuredWalletIds.join(",")
        }
      });
      data.sort((a2, b2) => featuredWalletIds.indexOf(a2.id) - featuredWalletIds.indexOf(b2.id));
      const images = data.map((d2) => d2.image_id).filter(Boolean);
      await Promise.allSettled(images.map((id) => ApiController._fetchWalletImage(id)));
      state12.featured = data;
    }
  },
  async fetchRecommendedWallets() {
    var _a2;
    const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
    const exclude = [...excludeWalletIds ?? [], ...featuredWalletIds ?? []].filter(Boolean);
    const { data, count } = await api3.get({
      path: "/getWallets",
      headers: ApiController._getApiHeaders(),
      params: {
        page: "1",
        chains: (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id,
        entries: recommendedEntries,
        include: includeWalletIds == null ? void 0 : includeWalletIds.join(","),
        exclude: exclude == null ? void 0 : exclude.join(",")
      }
    });
    const recent = StorageUtil.getRecentWallets();
    const recommendedImages = data.map((d2) => d2.image_id).filter(Boolean);
    const recentImages = recent.map((r) => r.image_id).filter(Boolean);
    await Promise.allSettled([...recommendedImages, ...recentImages].map((id) => ApiController._fetchWalletImage(id)));
    state12.recommended = data;
    state12.count = count ?? 0;
  },
  async fetchWallets({ page }) {
    var _a2;
    const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
    const exclude = [
      ...state12.recommended.map(({ id }) => id),
      ...excludeWalletIds ?? [],
      ...featuredWalletIds ?? []
    ].filter(Boolean);
    const { data, count } = await api3.get({
      path: "/getWallets",
      headers: ApiController._getApiHeaders(),
      params: {
        page: String(page),
        entries,
        chains: (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id,
        include: includeWalletIds == null ? void 0 : includeWalletIds.join(","),
        exclude: exclude.join(",")
      }
    });
    const images = data.map((w3) => w3.image_id).filter(Boolean);
    await Promise.allSettled([
      ...images.map((id) => ApiController._fetchWalletImage(id)),
      CoreHelperUtil.wait(300)
    ]);
    state12.wallets = CoreHelperUtil.uniqueBy([...state12.wallets, ...data], "id");
    state12.count = count > state12.count ? count : state12.count;
    state12.page = page;
  },
  async searchWalletByIds({ ids }) {
    var _a2;
    const { data } = await api3.get({
      path: "/getWallets",
      headers: ApiController._getApiHeaders(),
      params: {
        page: "1",
        entries: String(ids.length),
        chains: (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id,
        include: ids == null ? void 0 : ids.join(",")
      }
    });
    if (data) {
      data.forEach((wallet) => {
        if (wallet == null ? void 0 : wallet.rdns) {
          state12.excludedRDNS.push(wallet.rdns);
        }
      });
    }
  },
  async searchWallet({ search }) {
    var _a2;
    const { includeWalletIds, excludeWalletIds } = OptionsController.state;
    state12.search = [];
    const { data } = await api3.get({
      path: "/getWallets",
      headers: ApiController._getApiHeaders(),
      params: {
        page: "1",
        entries: "100",
        search: search == null ? void 0 : search.trim(),
        chains: (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id,
        include: includeWalletIds == null ? void 0 : includeWalletIds.join(","),
        exclude: excludeWalletIds == null ? void 0 : excludeWalletIds.join(",")
      }
    });
    const images = data.map((w3) => w3.image_id).filter(Boolean);
    await Promise.allSettled([
      ...images.map((id) => ApiController._fetchWalletImage(id)),
      CoreHelperUtil.wait(300)
    ]);
    state12.search = data;
  },
  async reFetchWallets() {
    state12.page = 1;
    state12.wallets = [];
    await ApiController.fetchFeaturedWallets();
    await ApiController.fetchRecommendedWallets();
  },
  prefetch() {
    const promises = [
      ApiController.fetchFeaturedWallets(),
      ApiController.fetchRecommendedWallets(),
      ApiController.fetchNetworkImages(),
      ApiController.fetchConnectorImages()
    ];
    if (OptionsController.state.enableAnalytics === void 0) {
      promises.push(ApiController.fetchAnalyticsConfig());
    }
    state12.prefetchPromise = Promise.race([Promise.allSettled(promises), CoreHelperUtil.wait(3e3)]);
  },
  async fetchAnalyticsConfig() {
    const { isAnalyticsEnabled } = await api3.get({
      path: "/getAnalyticsConfig",
      headers: ApiController._getApiHeaders()
    });
    OptionsController.setEnableAnalytics(isAnalyticsEnabled);
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js
var state13 = proxy({
  projectId: "",
  sdkType: "w3m",
  sdkVersion: "html-wagmi-undefined"
});
var OptionsController = {
  state: state13,
  subscribeKey(key, callback) {
    return subscribeKey(state13, key, callback);
  },
  setProjectId(projectId) {
    state13.projectId = projectId;
  },
  setAllWallets(allWallets) {
    state13.allWallets = allWallets;
  },
  setIncludeWalletIds(includeWalletIds) {
    state13.includeWalletIds = includeWalletIds;
  },
  setExcludeWalletIds(excludeWalletIds) {
    state13.excludeWalletIds = excludeWalletIds;
    if (excludeWalletIds) {
      ApiController.searchWalletByIds({ ids: excludeWalletIds });
    }
  },
  setFeaturedWalletIds(featuredWalletIds) {
    state13.featuredWalletIds = featuredWalletIds;
  },
  setTokens(tokens) {
    state13.tokens = tokens;
  },
  setTermsConditionsUrl(termsConditionsUrl) {
    state13.termsConditionsUrl = termsConditionsUrl;
  },
  setPrivacyPolicyUrl(privacyPolicyUrl) {
    state13.privacyPolicyUrl = privacyPolicyUrl;
  },
  setCustomWallets(customWallets) {
    state13.customWallets = customWallets;
  },
  setIsSiweEnabled(isSiweEnabled) {
    state13.isSiweEnabled = isSiweEnabled;
  },
  setEnableAnalytics(enableAnalytics) {
    state13.enableAnalytics = enableAnalytics;
  },
  setSdkVersion(sdkVersion) {
    state13.sdkVersion = sdkVersion;
  },
  setMetadata(metadata) {
    state13.metadata = metadata;
  },
  setOnrampEnabled(enableOnramp) {
    state13.enableOnramp = enableOnramp;
  },
  setDisableAppend(disableAppend) {
    state13.disableAppend = disableAppend;
  },
  setEIP6963Enabled(enableEIP6963) {
    state13.enableEIP6963 = enableEIP6963;
  },
  getSnapshot() {
    return snapshot(state13);
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ConnectorController.js
var state14 = proxy({
  connectors: []
});
var ConnectorController = {
  state: state14,
  subscribeKey(key, callback) {
    return subscribeKey(state14, key, callback);
  },
  setConnectors(connectors) {
    state14.connectors = connectors.map((c2) => ref(c2));
  },
  addConnector(connector) {
    var _a2, _b;
    state14.connectors.push(ref(connector));
    if (connector.id === "w3mAuth") {
      const authConnector = connector;
      const optionsState = snapshot(OptionsController.state);
      const themeMode = ThemeController.getSnapshot().themeMode;
      const themeVariables = ThemeController.getSnapshot().themeVariables;
      (_b = (_a2 = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b.call(_a2, {
        metadata: optionsState.metadata,
        sdkVersion: optionsState.sdkVersion,
        projectId: optionsState.projectId
      });
      authConnector.provider.syncTheme({
        themeMode,
        themeVariables,
        w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
      });
    }
  },
  getAuthConnector() {
    return state14.connectors.find((c2) => c2.type === "AUTH");
  },
  getAnnouncedConnectorRdns() {
    return state14.connectors.filter((c2) => c2.type === "ANNOUNCED").map((c2) => {
      var _a2;
      return (_a2 = c2.info) == null ? void 0 : _a2.rdns;
    });
  },
  getConnectors() {
    return state14.connectors;
  },
  getConnector(id, rdns) {
    return state14.connectors.find((c2) => {
      var _a2;
      return c2.explorerId === id || ((_a2 = c2.info) == null ? void 0 : _a2.rdns) === rdns;
    });
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ThemeController.js
var state15 = proxy({
  themeMode: "dark",
  themeVariables: {},
  w3mThemeVariables: void 0
});
var ThemeController = {
  state: state15,
  subscribe(callback) {
    return subscribe(state15, () => callback(state15));
  },
  setThemeMode(themeMode) {
    state15.themeMode = themeMode;
    try {
      const authConnector = ConnectorController.getAuthConnector();
      if (authConnector) {
        const themeVariables = ThemeController.getSnapshot().themeVariables;
        authConnector.provider.syncTheme({
          themeMode,
          themeVariables,
          w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  setThemeVariables(themeVariables) {
    state15.themeVariables = { ...state15.themeVariables, ...themeVariables };
    try {
      const authConnector = ConnectorController.getAuthConnector();
      if (authConnector) {
        const themeVariablesSnapshot = ThemeController.getSnapshot().themeVariables;
        authConnector.provider.syncTheme({
          themeVariables: themeVariablesSnapshot,
          w3mThemeVariables: getW3mThemeVariables(state15.themeVariables, state15.themeMode)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  getSnapshot() {
    return snapshot(state15);
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/RouterUtil.js
var RouterUtil = {
  goBackOrCloseModal() {
    if (RouterController.state.history.length > 1) {
      RouterController.goBack();
    } else {
      ModalController.close();
    }
  },
  navigateAfterNetworkSwitch() {
    const { history } = RouterController.state;
    const networkSelectIndex = history.findIndex((name) => name === "Networks");
    if (networkSelectIndex >= 1) {
      RouterController.goBackToIndex(networkSelectIndex - 1);
    } else {
      ModalController.close();
    }
  },
  navigateAfterPreferredAccountTypeSelect() {
    const { isSiweEnabled } = OptionsController.state;
    if (isSiweEnabled) {
      RouterController.push("ConnectingSiwe");
    } else {
      RouterController.push("Account");
    }
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/OnRampController.js
var USDC_CURRENCY_DEFAULT = {
  id: "2b92315d-eab7-5bef-84fa-089a131333f5",
  name: "USD Coin",
  symbol: "USDC",
  networks: [
    {
      name: "ethereum-mainnet",
      display_name: "Ethereum",
      chain_id: "1",
      contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    {
      name: "polygon-mainnet",
      display_name: "Polygon",
      chain_id: "137",
      contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    }
  ]
};
var USD_CURRENCY_DEFAULT = {
  id: "USD",
  payment_method_limits: [
    {
      id: "card",
      min: "10.00",
      max: "7500.00"
    },
    {
      id: "ach_bank_account",
      min: "10.00",
      max: "25000.00"
    }
  ]
};
var defaultState = {
  providers: ONRAMP_PROVIDERS,
  selectedProvider: null,
  error: null,
  purchaseCurrency: USDC_CURRENCY_DEFAULT,
  paymentCurrency: USD_CURRENCY_DEFAULT,
  purchaseCurrencies: [USDC_CURRENCY_DEFAULT],
  paymentCurrencies: [],
  quotesLoading: false
};
var state16 = proxy(defaultState);
var OnRampController = {
  state: state16,
  subscribe(callback) {
    return subscribe(state16, () => callback(state16));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state16, key, callback);
  },
  setSelectedProvider(provider) {
    state16.selectedProvider = provider;
  },
  setPurchaseCurrency(currency) {
    state16.purchaseCurrency = currency;
  },
  setPaymentCurrency(currency) {
    state16.paymentCurrency = currency;
  },
  setPurchaseAmount(amount) {
    this.state.purchaseAmount = amount;
  },
  setPaymentAmount(amount) {
    this.state.paymentAmount = amount;
  },
  async getAvailableCurrencies() {
    const options = await BlockchainApiController.getOnrampOptions();
    state16.purchaseCurrencies = options.purchaseCurrencies;
    state16.paymentCurrencies = options.paymentCurrencies;
    state16.paymentCurrency = options.paymentCurrencies[0] || USD_CURRENCY_DEFAULT;
    state16.purchaseCurrency = options.purchaseCurrencies[0] || USDC_CURRENCY_DEFAULT;
    await ApiController.fetchCurrencyImages(options.paymentCurrencies.map((currency) => currency.id));
    await ApiController.fetchTokenImages(options.purchaseCurrencies.map((currency) => currency.symbol));
  },
  async getQuote() {
    var _a2, _b;
    state16.quotesLoading = true;
    try {
      const quote = await BlockchainApiController.getOnrampQuote({
        purchaseCurrency: state16.purchaseCurrency,
        paymentCurrency: state16.paymentCurrency,
        amount: ((_a2 = state16.paymentAmount) == null ? void 0 : _a2.toString()) || "0",
        network: (_b = state16.purchaseCurrency) == null ? void 0 : _b.symbol
      });
      state16.quotesLoading = false;
      state16.purchaseAmount = Number(quote.purchaseAmount.amount);
      return quote;
    } catch (error) {
      state16.error = error.message;
      state16.quotesLoading = false;
      return null;
    } finally {
      state16.quotesLoading = false;
    }
  },
  resetState() {
    state16.providers = ONRAMP_PROVIDERS;
    state16.selectedProvider = null;
    state16.error = null;
    state16.purchaseCurrency = USDC_CURRENCY_DEFAULT;
    state16.paymentCurrency = USD_CURRENCY_DEFAULT;
    state16.purchaseCurrencies = [USDC_CURRENCY_DEFAULT];
    state16.paymentCurrencies = [];
    state16.paymentAmount = void 0;
    state16.purchaseAmount = void 0;
    state16.quotesLoading = false;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/SendController.js
var state17 = proxy({
  loading: false
});
var SendController = {
  state: state17,
  subscribe(callback) {
    return subscribe(state17, () => callback(state17));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state17, key, callback);
  },
  setToken(token) {
    if (token) {
      state17.token = ref(token);
    }
  },
  setTokenAmount(sendTokenAmount) {
    state17.sendTokenAmount = sendTokenAmount;
  },
  setReceiverAddress(receiverAddress) {
    state17.receiverAddress = receiverAddress;
  },
  setReceiverProfileImageUrl(receiverProfileImageUrl) {
    state17.receiverProfileImageUrl = receiverProfileImageUrl;
  },
  setReceiverProfileName(receiverProfileName) {
    state17.receiverProfileName = receiverProfileName;
  },
  setGasPrice(gasPrice) {
    state17.gasPrice = gasPrice;
  },
  setGasPriceInUsd(gasPriceInUSD) {
    state17.gasPriceInUSD = gasPriceInUSD;
  },
  setLoading(loading) {
    state17.loading = loading;
  },
  sendToken() {
    var _a2, _b, _c, _d, _e;
    if (((_a2 = this.state.token) == null ? void 0 : _a2.address) && this.state.sendTokenAmount && this.state.receiverAddress) {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: this.state.token.address,
          amount: this.state.sendTokenAmount,
          network: ((_b = NetworkController.state.caipNetwork) == null ? void 0 : _b.id) || ""
        }
      });
      this.sendERC20Token({
        receiverAddress: this.state.receiverAddress,
        tokenAddress: this.state.token.address,
        sendTokenAmount: this.state.sendTokenAmount,
        decimals: this.state.token.quantity.decimals
      });
    } else if (this.state.receiverAddress && this.state.sendTokenAmount && this.state.gasPrice && ((_c = this.state.token) == null ? void 0 : _c.quantity.decimals)) {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: (_d = this.state.token) == null ? void 0 : _d.symbol,
          amount: this.state.sendTokenAmount,
          network: ((_e = NetworkController.state.caipNetwork) == null ? void 0 : _e.id) || ""
        }
      });
      this.sendNativeToken({
        receiverAddress: this.state.receiverAddress,
        sendTokenAmount: this.state.sendTokenAmount,
        gasPrice: this.state.gasPrice,
        decimals: this.state.token.quantity.decimals
      });
    }
  },
  async sendNativeToken(params) {
    var _a2, _b, _c, _d;
    RouterController.pushTransactionStack({
      view: "Account",
      goBack: false
    });
    const to = params.receiverAddress;
    const address = AccountController.state.address;
    const value = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
    const data = "0x";
    try {
      await ConnectionController.sendTransaction({
        to,
        address,
        data,
        value,
        gasPrice: params.gasPrice
      });
      SnackController.showSuccess("Transaction started");
      EventsController.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_a2 = this.state.token) == null ? void 0 : _a2.symbol) || "",
          amount: params.sendTokenAmount,
          network: ((_b = NetworkController.state.caipNetwork) == null ? void 0 : _b.id) || ""
        }
      });
      this.resetSend();
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_ERROR",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_c = this.state.token) == null ? void 0 : _c.symbol) || "",
          amount: params.sendTokenAmount,
          network: ((_d = NetworkController.state.caipNetwork) == null ? void 0 : _d.id) || ""
        }
      });
      SnackController.showError("Something went wrong");
    }
  },
  async sendERC20Token(params) {
    RouterController.pushTransactionStack({
      view: "Account",
      goBack: false
    });
    const amount = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
    try {
      if (AccountController.state.address && params.sendTokenAmount && params.receiverAddress && params.tokenAddress) {
        await ConnectionController.writeContract({
          fromAddress: AccountController.state.address,
          tokenAddress: CoreHelperUtil.getPlainAddress(params.tokenAddress),
          receiverAddress: params.receiverAddress,
          tokenAmount: amount,
          method: "transfer",
          abi: erc20ABI
        });
        SnackController.showSuccess("Transaction started");
        this.resetSend();
      }
    } catch (error) {
      SnackController.showError("Something went wrong");
    }
  },
  resetSend() {
    state17.token = void 0;
    state17.sendTokenAmount = void 0;
    state17.receiverAddress = void 0;
    state17.receiverProfileImageUrl = void 0;
    state17.receiverProfileName = void 0;
    state17.loading = false;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/TooltipController.js
var state18 = proxy({
  message: "",
  open: false,
  triggerRect: {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  },
  variant: "shade"
});
var TooltipController = {
  state: state18,
  subscribe(callback) {
    return subscribe(state18, () => callback(state18));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state18, key, callback);
  },
  showTooltip({ message, triggerRect, variant }) {
    state18.open = true;
    state18.message = message;
    state18.triggerRect = triggerRect;
    state18.variant = variant;
  },
  hide() {
    state18.open = false;
    state18.message = "";
    state18.triggerRect = {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/EnsUtil.js
var SLIP44_MSB = 2147483648;
var EnsUtil = {
  convertEVMChainIdToCoinType(chainId) {
    if (chainId >= SLIP44_MSB) {
      throw new Error("Invalid chainId");
    }
    return (SLIP44_MSB | chainId) >>> 0;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/EnsController.js
var state19 = proxy({
  suggestions: [],
  loading: false
});
var EnsController = {
  state: state19,
  subscribe(callback) {
    return subscribe(state19, () => callback(state19));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state19, key, callback);
  },
  async resolveName(name) {
    var _a2, _b;
    try {
      return await BlockchainApiController.lookupEnsName(name);
    } catch (e) {
      const error = e;
      throw new Error(((_b = (_a2 = error == null ? void 0 : error.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b.description) || "Error resolving name");
    }
  },
  async isNameRegistered(name) {
    try {
      await BlockchainApiController.lookupEnsName(name);
      return true;
    } catch {
      return false;
    }
  },
  async getSuggestions(name) {
    try {
      state19.loading = true;
      state19.suggestions = [];
      const response = await BlockchainApiController.getEnsNameSuggestions(name);
      state19.suggestions = response.suggestions.map((suggestion) => ({
        ...suggestion,
        name: suggestion.name.replace(ConstantsUtil.WC_NAME_SUFFIX, "")
      })) || [];
      return state19.suggestions;
    } catch (e) {
      const errorMessage = this.parseEnsApiError(e, "Error fetching name suggestions");
      throw new Error(errorMessage);
    } finally {
      state19.loading = false;
    }
  },
  async getNamesForAddress(address) {
    try {
      const network = NetworkController.state.caipNetwork;
      if (!network) {
        return [];
      }
      const response = await BlockchainApiController.reverseLookupEnsName({ address });
      return response;
    } catch (e) {
      const errorMessage = this.parseEnsApiError(e, "Error fetching names for address");
      throw new Error(errorMessage);
    }
  },
  async registerName(name) {
    const network = NetworkController.state.caipNetwork;
    if (!network) {
      throw new Error("Network not found");
    }
    const address = AccountController.state.address;
    const emailConnector = ConnectorController.getAuthConnector();
    if (!address || !emailConnector) {
      throw new Error("Address or auth connector not found");
    }
    state19.loading = true;
    try {
      const message = JSON.stringify({
        name: `${name}${ConstantsUtil.WC_NAME_SUFFIX}`,
        attributes: {},
        timestamp: Math.floor(Date.now() / 1e3)
      });
      RouterController.pushTransactionStack({
        view: "RegisterAccountNameSuccess",
        goBack: false,
        replace: true,
        onCancel() {
          state19.loading = false;
        }
      });
      const signature = await ConnectionController.signMessage(message);
      const networkId = NetworkUtil.caipNetworkIdToNumber(network.id);
      if (!networkId) {
        throw new Error("Network not found");
      }
      const coinType = EnsUtil.convertEVMChainIdToCoinType(networkId);
      await BlockchainApiController.registerEnsName({
        coinType,
        address,
        signature,
        message
      });
      AccountController.setProfileName(`${name}${ConstantsUtil.WC_NAME_SUFFIX}`);
      RouterController.replace("RegisterAccountNameSuccess");
    } catch (e) {
      const errorMessage = this.parseEnsApiError(e, `Error registering name ${name}`);
      RouterController.replace("RegisterAccountName");
      throw new Error(errorMessage);
    } finally {
      state19.loading = false;
    }
  },
  validateName(name) {
    return /^[a-zA-Z0-9-]{4,}$/u.test(name);
  },
  parseEnsApiError(error, defaultError) {
    var _a2, _b;
    const ensError = error;
    return ((_b = (_a2 = ensError == null ? void 0 : ensError.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b.description) || defaultError;
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/AssetUtil.js
var AssetUtil = {
  getWalletImage(wallet) {
    if (wallet == null ? void 0 : wallet.image_url) {
      return wallet == null ? void 0 : wallet.image_url;
    }
    if (wallet == null ? void 0 : wallet.image_id) {
      return AssetController.state.walletImages[wallet.image_id];
    }
    return void 0;
  },
  getNetworkImage(network) {
    if (network == null ? void 0 : network.imageUrl) {
      return network == null ? void 0 : network.imageUrl;
    }
    if (network == null ? void 0 : network.imageId) {
      return AssetController.state.networkImages[network.imageId];
    }
    return void 0;
  },
  getConnectorImage(connector) {
    if (connector == null ? void 0 : connector.imageUrl) {
      return connector.imageUrl;
    }
    if (connector == null ? void 0 : connector.imageId) {
      return AssetController.state.connectorImages[connector.imageId];
    }
    return void 0;
  }
};

export {
  subscribeKey,
  ConstantsUtil2 as ConstantsUtil,
  CoreHelperUtil,
  StorageUtil,
  AssetController,
  ThemeController,
  ConnectorController,
  PublicStateController,
  EventsController,
  NetworkController,
  ApiController,
  OptionsController,
  BlockchainApiController,
  SnackController,
  require_buffer,
  W3mFrameConstants,
  W3mFrameRpcConstants,
  W3mFrameHelpers,
  safeJsonParse,
  safeJsonStringify,
  import_pino2 as import_pino,
  k,
  y,
  E,
  A,
  W3mFrameProvider,
  TransactionsController,
  ConnectionController,
  RouterController,
  SwapController,
  AccountController,
  ModalController,
  OnRampController,
  SendController,
  TooltipController,
  EnsController,
  AssetUtil,
  RouterUtil
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=chunk-JHDKIVEA.js.map
