import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import RegisterUser from './Screens/RegisterUser';
import ViewAllUser from './Screens/ViewAllUser';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#4d94ff', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllUser}
          options={{
            title: 'View Users', //Set Header Title
            headerStyle: {
              backgroundColor: '#4d94ff', //Set Header color
             },
             headerTintColor: '#000000', //Set Header text color
             headerTitleStyle: {
               fontWeight: 'bold', //Set Header text style
             },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: 'Register User', //Set Header Title
             headerStyle: {
               backgroundColor: '#4d94ff', //Set Header color
             },
             headerTintColor: '#fff', //Set Header text color
             headerTitleStyle: {
               fontWeight: 'bold', //Set Header text style
             },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d94ff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
