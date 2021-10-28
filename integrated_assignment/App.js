import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import RegisterUser from './RegisterUser';
import ViewAllUser from './ViewAllUser';
import Update from './Update';
import Review from './View';
import Erase from './Erase';

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
        <Stack.Screen
          name="Update"
          component={Update}
          options={{
            title: 'Update User', //Set Header Title
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
          name="Review"
          component={Review}
          options={{
            title: 'Review User', //Set Header Title
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
          name="Erase"
          component={Erase}
          options={{
            title: 'Erase User', //Set Header Title
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
