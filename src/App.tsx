import { StatusBar } from 'expo-status-bar'
import React, { useCallback } from 'react'

import { ThemeProvider } from "styled-components"

import * as SplashScreen from "expo-splash-screen"
import theme from './styles/theme'
import { RootNavigator } from './navigation'
import { useFonts } from 'expo-font'

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
