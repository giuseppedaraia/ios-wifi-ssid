import { registerPlugin } from '@capacitor/core';

import type { iOSWifiSSIDPlugin } from './definitions';

const iOSWifiSSID = registerPlugin<iOSWifiSSIDPlugin>('iOSWifiSSID', {
  web: () => import('./web').then(m => new m.iOSWifiSSIDWeb()),
});

export * from './definitions';
export { iOSWifiSSID };
