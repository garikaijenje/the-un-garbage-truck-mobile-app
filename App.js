import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Scan from './screens/Scan';
import Scan2 from './screens/Scan2';
import Settings from './screens/Settings';
import Shopping from './screens/Shopping';
import About from './screens/About';
import Login from './screens/Login';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Scan2" component={Scan2} />
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="Shopping" component={Shopping}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

