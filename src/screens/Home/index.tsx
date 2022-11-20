import React from 'react'

import {
  Container,
  BigText,
  NavigationButton,
  TextButton
} from './styles'

export function Home({ navigation }) {
  return (
    <Container>
      <BigText>
        Home
      </BigText>

      <NavigationButton onPress={() => navigation.navigate('Resume')}>
        <TextButton>Navigate to Resume</TextButton>
      </NavigationButton>
    </Container>
  )
}
