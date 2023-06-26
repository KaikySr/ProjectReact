import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import List from './pages/List';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="List" component={List}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


