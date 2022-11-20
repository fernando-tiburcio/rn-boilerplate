import React from 'react'
import { Text } from 'react-native'

import {
  Container,
  BigText,
  NavigationButton,
  TextButton,
} from './styles'

export function Resume({ navigation }) {
  return (
    <Container>
      <BigText>
        Resume
      </BigText>

      <NavigationButton onPress={() => navigation.navigate('Home')}>
        <TextButton>
          Navigate to Home
        </TextButton>
      </NavigationButton>
    </Container>
  )
}
