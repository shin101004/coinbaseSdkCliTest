# coinbaseSdkCliTest
COINBASE_SDK_NATIVE_CLI_TEST

This is test repository for @coinbase/wallet-mobile-sdk library with react-native-cli

### environment

please refer package.json

watchman > 2023.01.30.00

ruby > 2.7.6p219 (2022-04-12 revision c9c2245c0a) [arm64-darwin21]

node > 16.19.0

npx > 8.13.0

device > Galaxy S10e, Android 11

### history

1. install @metamask/sdk library.

Reference: [Metamask Docs](https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/guide/metamask-sdk-js/metamask-sdk-react-native.html)

2. install @coinbase/wallet-mobile-sdk

### error shown
here is error i faced now

```shell
error: Error: Unable to resolve module expo-modules-core from /Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/@coinbase/wallet-mobile-sdk/build/CoinbaseWalletSDKModule.js: expo-modules-core could not be found within the project or in these directories:
  node_modules/@coinbase/wallet-mobile-sdk/node_modules
  node_modules
  ../../../node_modules
> 1 | import { requireNativeModule } from 'expo-modules-core';
    |                                      ^
  2 | // It loads the native module object from the JSI or falls back to
  3 | // the bridge module (from NativeModulesProxy) if the remote debugger is on.
  4 | export default requireNativeModule('CoinbaseWalletSDK');
    at ModuleResolver.resolveDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:162:15)
    at DependencyGraph.resolveDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/node-haste/DependencyGraph.js:260:43)
    at Object.resolve (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/lib/transformHelpers.js:177:21)
    at Graph._resolveDependencies (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:432:35)
    at Graph._processModule (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:218:38)
    at async Graph._addDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:314:20)
    at async Promise.all (index 2)
    at async Graph._processModule (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:263:5)
    at async Graph._addDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:314:20)
    at async Promise.all (index 9)
 BUNDLE  ./index.js 

error: Error: Unable to resolve module expo-modules-core from /Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/@coinbase/wallet-mobile-sdk/build/CoinbaseWalletSDKModule.js: expo-modules-core could not be found within the project or in these directories:
  node_modules/@coinbase/wallet-mobile-sdk/node_modules
  node_modules
  ../../../node_modules
> 1 | import { requireNativeModule } from 'expo-modules-core';
    |                                      ^
  2 | // It loads the native module object from the JSI or falls back to
  3 | // the bridge module (from NativeModulesProxy) if the remote debugger is on.
  4 | export default requireNativeModule('CoinbaseWalletSDK');
    at ModuleResolver.resolveDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:162:15)
    at DependencyGraph.resolveDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/node-haste/DependencyGraph.js:260:43)
    at Object.resolve (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/lib/transformHelpers.js:177:21)
    at Graph._resolveDependencies (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:432:35)
    at Graph._processModule (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:218:38)
    at async Graph._addDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:314:20)
    at async Promise.all (index 2)
    at async Graph._processModule (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:263:5)
    at async Graph._addDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:314:20)
    at async Promise.all (index 9)
 BUNDLE  ./index.js 

error: Error: Unable to resolve module expo-modules-core from /Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/@coinbase/wallet-mobile-sdk/build/CoinbaseWalletSDKModule.js: expo-modules-core could not be found within the project or in these directories:
  node_modules/@coinbase/wallet-mobile-sdk/node_modules
  node_modules
  ../../../node_modules
> 1 | import { requireNativeModule } from 'expo-modules-core';
    |                                      ^
  2 | // It loads the native module object from the JSI or falls back to
  3 | // the bridge module (from NativeModulesProxy) if the remote debugger is on.
  4 | export default requireNativeModule('CoinbaseWalletSDK');
    at ModuleResolver.resolveDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:162:15)
    at DependencyGraph.resolveDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/node-haste/DependencyGraph.js:260:43)
    at Object.resolve (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/lib/transformHelpers.js:177:21)
    at Graph._resolveDependencies (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:432:35)
    at Graph._processModule (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:218:38)
    at async Graph._addDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:314:20)
    at async Promise.all (index 2)
    at async Graph._processModule (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:263:5)
    at async Graph._addDependency (/Users/jerry/Documents/GitHub/coinbaseSdkCliTest/node_modules/metro/src/DeltaBundler/Graph.js:314:20)
    at async Promise.all (index 9)
```
