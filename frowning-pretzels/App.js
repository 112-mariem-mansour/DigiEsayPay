
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Subscribe from "./screens/Subscribe";
import LoginScreen from "./screens/LoginScreen";
import Navig from "./screens/Navig";
const Stack = createStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Subscribe" component={Subscribe} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="nav" component={Navig} />


      </Stack.Navigator>
    </NavigationContainer>


  );
}