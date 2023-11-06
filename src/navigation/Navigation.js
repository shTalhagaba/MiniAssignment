import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/splash/SplashScreen';
import Colors from '../common/Colors';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import PhotoScreen from '../screens/photo/PhotoScreen';
import TextScreen from '../screens/text/TextScreen';
import CalculatorScreen from '../screens/calculator/CalculatorScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = props => {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator screenOptions={{headerShown: false}}>
          <MainStack.Screen name="SplashScreen" component={SplashScreen} />
          <MainStack.Screen name="LoginScreen" component={LoginScreen} />
          <MainStack.Screen name="NotificationScreen">
            {props => <MyTabs {...props} />}
          </MainStack.Screen>
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="notifications"
              color={Colors.primaryBlack}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PhotoScreen"
        component={PhotoScreen}
        options={{
          tabBarLabel: 'Photo',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="add-a-photo"
              color={Colors.primaryBlack}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TextScreen"
        component={TextScreen}
        options={{
          tabBarLabel: 'Text',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="textsms"
              color={Colors.primaryBlack}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CalculatorScreen"
        component={CalculatorScreen}
        options={{
          tabBarLabel: 'Text',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="calculate"
              color={Colors.primaryBlack}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
