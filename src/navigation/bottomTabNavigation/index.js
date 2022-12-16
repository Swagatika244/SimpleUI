/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Faq from '../../screens/faq';
import Home from '../../screens/home';
import People from '../../screens/people';
import Quiz from '../../screens/quiz';
import Wallet from '../../screens/wallet';

const BottomTab = createBottomTabNavigator();

export default function ButtomTabNavigator() {
  return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Faq" component={Faq} />
            <BottomTab.Screen name="People" component={People} />
            <BottomTab.Screen name="Quiz" component={Quiz} />
            <BottomTab.Screen name="Wallet" component={Wallet} />
        </BottomTab.Navigator>
  );
}