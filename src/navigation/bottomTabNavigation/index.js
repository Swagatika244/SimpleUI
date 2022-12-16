/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Faq from '../../screens/faq';
import Home from '../../screens/home';
import People from '../../screens/people';
import Quiz from '../../screens/quiz';
import Wallet from '../../screens/wallet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator();

export default function ButtomTabNavigator() {
  const navigation = useNavigation();
  return (
        <BottomTab.Navigator
          screenOptions={{
            tabBarStyle: { 
              position: 'absolute',
              backgroundColor: '#6607b9',
              height: 60
            },
            tabBarShowLabel: false,
            headerTitleStyle: {
              color: '#6607b9',
              fontWeight: '900',
              fontSize: 27
            },
            headerLeft : ()=> {
              return(
                <Ionicons.Button name = 'ios-reorder-three-outline' size = {40} color = "#6607b9"
                  style = {{backgroundColor: '#ffffff'}}
                  onPress = {()=> {navigation.openDrawer()}}
                  activeOpacity = {1}
                />
              )
            },
            headerRight : ()=> {
              return(
                <Ionicons
                      name="ios-notifications"
                      size={30}
                      color={"#6607b9" }
                      style = {{marginRight: 10}}
                    />
              )
            }
          }}
        >
            <BottomTab.Screen name="Home" component={Home} options = {{
                tabBarIcon: (tabInfo) => {
                  return (
                    <Ionicons
                      name="md-home"
                      size={24}
                      color={tabInfo.focused ? "#fff44f" : "#ffffff"}
                    />
                  );
                },
            }}/>
            <BottomTab.Screen name="Faq" component={Faq} options = {{
                tabBarIcon: (tabInfo) => {
                  return (
                    <Ionicons
                      name="ios-construct-sharp"
                      size={25}
                      color={tabInfo.focused ? "#fff44f" : "#ffffff"}
                    />
                  );
                },
            }}/>
            <BottomTab.Screen name="People" component={People} options = {{
                tabBarIcon: (tabInfo) => {
                  return (
                    <Ionicons
                      name="ios-game-controller"
                      size={25}
                      color={tabInfo.focused ? "#fff44f" : "#ffffff"}
                    />
                  );
                },
            }}/>
            <BottomTab.Screen name="Quiz" component={Quiz} options = {{
                tabBarIcon: (tabInfo) => {
                  return (
                    <Ionicons
                      name="ios-reader"
                      size={24}
                      color={tabInfo.focused ? "#fff44f" : "#ffffff"}
                    />
                  );
                },
            }}/>
            <BottomTab.Screen name="Wallet" component={Wallet} options = {{
                tabBarIcon: (tabInfo) => {
                  return (
                    <Ionicons
                      name="ios-wallet"
                      size={24}
                      color={tabInfo.focused ? "#fff44f" : "#ffffff"}
                    />
                  );
                },
            }}/>
        </BottomTab.Navigator>
  );
}