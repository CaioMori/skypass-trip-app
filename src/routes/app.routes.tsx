import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Loading from '../components/Loading'

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='home' component={Loading} />
      <Screen name='register' component={Loading} />
      <Screen name='details' component={Loading} />
    </Navigator>
  )
}
