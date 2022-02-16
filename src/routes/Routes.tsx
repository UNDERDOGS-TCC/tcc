import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Signup from '../pages/Signup';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'rgba(0, 52, 107, 1)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Roboto',
          fontWeight: '400',
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Services" component={Services} />
    </Stack.Navigator>
  );
};

export default Routes;
