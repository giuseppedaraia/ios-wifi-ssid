'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const iOSWifiSSID = core.registerPlugin('iOSWifiSSID', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.iOSWifiSSIDWeb()),
});

class iOSWifiSSIDWeb extends core.WebPlugin {
    /*
    async echo(options: { value: string }): Promise<{ value: string }> {
      console.log('ECHO', options);
      return options;
    }
    */
    async getWifiSSID() {
        return {
            results: "No WiFi detected"
        };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    iOSWifiSSIDWeb: iOSWifiSSIDWeb
});

exports.iOSWifiSSID = iOSWifiSSID;
//# sourceMappingURL=plugin.cjs.js.map
