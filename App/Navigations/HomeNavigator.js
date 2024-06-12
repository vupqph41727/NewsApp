import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ReadNews from '../Screens/ReadNews';

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='read-news' component={ReadNews} />
    </Stack.Navigator>
  )
}

export default HomeNavigator