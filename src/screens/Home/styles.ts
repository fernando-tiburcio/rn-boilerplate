import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`

export const BigText = styled.Text`
    color: darkgray;
    font-size: 50px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const NavigationButton = styled.TouchableOpacity`
  min-width: 148px;
  height: 48px;

  padding: 0 16px;

  justify-content: center;
  align-items: center;

  background: blueviolet;
  border-radius: 8px;
`

export const TextButton = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.medium};
`
