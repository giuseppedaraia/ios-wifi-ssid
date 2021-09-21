import { WebPlugin } from '@capacitor/core';
import type { iOSWifiSSIDPlugin } from './definitions';
export declare class iOSWifiSSIDWeb extends WebPlugin implements iOSWifiSSIDPlugin {
    getWifiSSID(): Promise<{
        results: string | null;
    }>;
}
