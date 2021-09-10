import { WebPlugin } from '@capacitor/core';

import type { iOSWifiSSIDPlugin } from './definitions';

export class iOSWifiSSIDWeb extends WebPlugin implements iOSWifiSSIDPlugin {

  /*
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  */

  async getWifiSSID(): Promise<{ results: string | null }> {
    return {
      results: "No WiFi detected"
    };
  }
}
