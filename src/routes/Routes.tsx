import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Map from '../pages/Map';
import Services from '../pages/Services';
import Signup from '../pages/Signup';

const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontFamily: 'Archivo_700Bold',
        },
        headerShadowVisible: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

export default Routes;
