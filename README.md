
# react-native-installed-application

## Getting started

`$ npm install react-native-installed-application --save`

## Methods

#### 1 - getApps()
#### 2 - getNonSystemApps()
#### 3 - getSystemApps()

## Return Result 

- packageName
- versionName
- versionCode
- firstInstallTime
- lastUpdateTime
- appName
- icon // Base64
- apkDir
- size // Bytes


## Usage
```javascript
import RNAndroidInstalledApps from 'react-native-installed-application';


RNAndroidInstalledApps.getApps()
      .then(apps => {
        this.setState({apps})
      })
      .catch(error => {
        alert(error);
      });

```
