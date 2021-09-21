import { registerPlugin } from '@capacitor/core';
const iOSWifiSSID = registerPlugin('iOSWifiSSID', {
    web: () => import('./web').then(m => new m.iOSWifiSSIDWeb()),
});
export * from './definitions';
export { iOSWifiSSID };
//# sourceMappingURL=index.js.map