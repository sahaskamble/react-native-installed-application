
import { NativeModules } from 'react-native';

const { RNInstalledApplication } = NativeModules;


const getApps = () => {
    return RNInstalledApplication.getApps();
}
const getNonSystemApps = () => {
    return RNInstalledApplication.getNonSystemApps();
}
const getSystemApps = () => {
    return RNInstalledApplication.getSystemApps();
}
const isPackageInstalled = () => {
    return RNInstalledApplication.isPackageInstalled();
}

export default {
    getApps,
    getNonSystemApps,
    getSystemApps,
    isPackageInstalled,
};
