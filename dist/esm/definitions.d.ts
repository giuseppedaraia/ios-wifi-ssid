export interface iOSWifiSSIDPlugin {
    getWifiSSID(): Promise<{
        results: string | null;
    }>;
}
