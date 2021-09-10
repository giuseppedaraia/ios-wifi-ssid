export interface iOSWifiSSIDPlugin {
  //echo(options: { value: string }): Promise<{ value: string }>;

  getWifiSSID(): Promise<{results: string | null}>;
}
