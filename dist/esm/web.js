import { WebPlugin } from '@capacitor/core';
export class iOSWifiSSIDWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map