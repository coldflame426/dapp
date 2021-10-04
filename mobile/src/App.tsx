import React from 'react';
import {
  Image,
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const dAppLink = 'https://metamask.app.link/dapp/stormx-test.surge.sh/';

const App = () => {
  const isDarkMode = useColorScheme() !== 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const handlePress = async () => {
    const supported = await Linking.canOpenURL(dAppLink);
    if (supported) {
      await Linking.openURL(dAppLink);
    } else {
      if (Platform.OS === 'android') {
        Linking.openURL('market://details?id=io.metamask');
      } else if (Platform.OS === 'ios') {
        Linking.openURL(
          'itms-apps://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202',
        );
      }
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.wrapper}>
        <Image style={styles.logo} source={require('./assets/img/logo.png')} />
        <TouchableOpacity style={styles.connectWallet} onPress={handlePress}>
          <Text style={styles.connectText}>Open Dapp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 200,
  },
  connectWallet: {
    backgroundColor: Colors.darker,
    borderRadius: 10,
    padding: 15,
  },
  connectText: {
    color: Colors.lighter,
  },
});

export default App;
