import {Center, Spinner} from 'native-base'

const Loading = () => {
  return (
    <Center flex={1} bg={'azulEscuro'}>
      <Spinner color={'claro'} />
    </Center>
  )
}

export default Loading
