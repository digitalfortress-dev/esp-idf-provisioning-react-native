import { NativeModules } from 'react-native';

interface EspIdfBleProvisioningRnType {
  create(): void;
  scanBleDevices(prefix: string): Promise<Array<Object>>;
  setProofOfPossession(proof: string): Promise<void>;
  getProofOfPossession(): Promise<string>;
  connectToBLEDevice(name: string): Promise<Object>;
  disconnectBLEDevice(): Promise<void>;
  scanNetworks(): Promise<Array<Object>>;
  sendCustomData(customEndPoint: string, customData: string): Promise<Object>;
  sendCustomDataWithByteData(
    customEndPoint: string,
    customData: any // this must be an array of strings, where each string is a hexidecial value ie ["0", "FF", "52"] FF is max, unsigned
  ): Promise<Object>;
  provisionNetwork(ssid: string, password: string): Promise<Object>;
};

const { EspIdfProvisioningReactNative } = NativeModules;

export default EspIdfProvisioningReactNative as EspIdfBleProvisioningRnType;
