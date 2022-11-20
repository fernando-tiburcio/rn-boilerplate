import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { SafeAreaView } from 'react-native-safe-area-context'
import { Home } from "../screens/Home"
import { Resume } from "../screens/Resume"

const Root = createStackNavigator()

export function RootNavigator() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <NavigationContainer>
        <Root.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Root.Screen name="Resume" component={Resume} />
          <Root.Screen name="Home" component={Home} />
        </Root.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
