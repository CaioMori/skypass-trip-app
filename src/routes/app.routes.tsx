import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Loading from '../components/Loading'
import {LoginScreen} from '../screens/LoginScreen'

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='login' component={LoginScreen} />
      <Screen name='home' component={Loading} />
      <Screen name='registration' component={Loading} />
      <Screen name='conclusion' component={Loading} />
    </Navigator>
  )
}
