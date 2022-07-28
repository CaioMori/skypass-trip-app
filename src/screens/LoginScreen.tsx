import React from 'react'
import {VStack, Heading, Text, useTheme} from 'native-base'

export function LoginScreen() {
  return (
    <VStack flex={1} bg={'azulEscuro'}>
      <Heading color='claro' bg='azulClaro' fontSize='xl' height={16} style={{textAlignVertical: 'center'}}>
        <Text>Login</Text>
      </Heading>

      <Text color='chumboClaro' fontSize='md'>
        LoginScreen
      </Text>
    </VStack>
  )
}
