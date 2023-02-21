import './shim';
import React, {useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import MetaMaskSDK from '@metamask/sdk';
import {Linking} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

// import { configure } from "@coinbase/wallet-mobile-sdk";
// import { WalletMobileSDKEVMProvider } from "@coinbase/wallet-mobile-sdk/build/WalletMobileSDKEVMProvider";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const provider = new WalletMobileSDKEVMProvider({
  //   jsonRpcUrl: "https://goerli.infura.io/v3/e43885183522441b846318ad8a3060ca",
  // });

  // configure({
  //   callbackURL: new URL("https://myappxyz.com/wsegue"),
  //   hostURL: new URL("https://wallet.coinbase.com/wsegue"),
  //   hostPackageName: "org.toshi",
  // });

  // const getCoinbase = async () => {
  //   const address = await provider.request({
  //     method: "eth_requestAccounts",
  //     params: [],
  //   });
  //   console.log(address);
  // };

  const MMSDK = new MetaMaskSDK({
    openDeeplink: link => {
      Linking.openURL(link); // Use React Native Linking method or your favourite way of opening deeplinks
    },
    timer: BackgroundTimer, // To keep the app alive once it goes to background
    dappMetadata: {
      name: 'My App', // The name of your application
      url: 'https://myapp.com', // The url of your website
    },
  });

  const ethereum = MMSDK.getProvider();

  const accounts = async () => {
    const res = await ethereum.request({method: 'eth_requestAccounts'});
    console.log(res);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title="metmask" onPress={() => accounts()} />
          {/* <Button title="coinbase" onPress={() => getCoinbase()} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
