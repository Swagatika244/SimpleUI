import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import ButtomTabNavigator from './src/navigation/bottomTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Faq from './src/screens/faq';
import Quiz from './src/screens/quiz';
import People from './src/screens/people';
import Wallet from './src/screens/wallet';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name="ButtomTabNavigator"
          component={ButtomTabNavigator}
        />
        <Drawer.Screen name="Faq" component={Faq} />
        <Drawer.Screen name="Quiz" component={Quiz} />
        <Drawer.Screen name="People" component={People} />
        <Drawer.Screen name="Wallet" component={Wallet} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
