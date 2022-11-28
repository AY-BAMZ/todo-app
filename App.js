import 'react-native-gesture-handler';
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './routes/Tabs';
import { Provider as PaperProvider } from 'react-native-paper';

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/font/Poppins-Regular.ttf"),
    "poppins-semibold": require("./assets/font/Poppins-SemiBold.ttf"),
    "poppins-medium": require("./assets/font/Poppins-Medium.ttf"),
    "poppins-bold": require("./assets/font/Poppins-Bold.ttf"),
    "poppins-light": require("./assets/font/Poppins-Light.ttf"),
  });


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (<PaperProvider>
      <Tabs />
      </PaperProvider>
      );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
