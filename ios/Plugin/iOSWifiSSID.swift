import Foundation
import SystemConfiguration.CaptiveNetwork
import CoreLocation
import NetworkExtension
import Capacitor

@objc public class iOSWifiSSID: CAPPlugin, CLLocationManagerDelegate  {
    /*
    @objc public func echo(_ value: String) -> String {
        return value
    }
    */
    
    
    
    public override func load() {
        if #available(iOS 13.0, *) {
            let status = CLLocationManager.authorizationStatus()
            if status == .authorizedWhenInUse {
                self.updateWiFi()
            } else {
                self.locationManager.delegate = self
                self.locationManager.requestWhenInUseAuthorization()
            }
        } else {
            self.updateWiFi()
        }
    }

    public func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
        if status == .authorizedWhenInUse {
            updateWiFi();
        }
    }

    @objc func getWifiSSID(_ call: CAPPluginCall){
        call.resolve([
            "ssid": updateWiFi(),
        ]);
    }

    var locationManager = CLLocationManager()

    var currentNetworkInfos: Array<WifiInfo>? {
        get {
            return SSID.fetchNetworkInfo()
        }
    }

    func updateWiFi()->String {
        if let ssid = currentNetworkInfos?.first?.ssid {
            return ssid;
        } else {
            return "null";
        }
    }


    public class SSID {
        class func fetchNetworkInfo() -> [WifiInfo]? {
             if let interfaces: NSArray = CNCopySupportedInterfaces() {
                 var wifiInfos = [WifiInfo]()
                 for interface in interfaces {
                     let interfaceName = interface as! String
                     var wifiInfo = WifiInfo(interface: interfaceName,success: false,ssid: nil)
                     if let dict = CNCopyCurrentNetworkInfo(interfaceName as CFString) as NSDictionary? {
                        wifiInfo.success = true
                        wifiInfo.ssid = dict[kCNNetworkInfoKeySSID as String] as? String
                     }
                    wifiInfos.append(wifiInfo)
                 }
            return wifiInfos
         }
         return nil
        }
    }

    struct WifiInfo {
        var interface: String
        var success: Bool = false
        var ssid: String?
    }
}
