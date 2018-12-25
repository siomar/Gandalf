import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Login: {
            screen: LoginScreen
        }
    },{
        headerMode: 'none',
        mode: 'modal',
    }
);

export default createAppContainer(AppNavigator);
