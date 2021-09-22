export interface iOSWifiSSIDPlugin {
  //echo(options: { value: string }): Promise<{ value: string }>;

  getWifiSSID(): Promise<string | null>;
}
