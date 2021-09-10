import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(iOSWifiSSIDPlugin)
public class iOSWifiSSIDPlugin: CAPPlugin {
    private let implementation = iOSWifiSSID()

    /*
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    */

    @objc func getWifiSSID() -> String {
        return implementation.getWifiSSID()
    }
}
