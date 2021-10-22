import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';
import ScreenFour from './ScreenFour';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <View style={styles.container}>
   <NavigationContainer style={styles.container2}>
    <Stack.Navigator style={styles.stack}>
     <Stack.Screen style={styles.stack}/////////////////////////////////////
      name="One"
      component={ScreenOne}
      options={{ title: 'EireChemApp' }}
      />
      <Stack.Screen
       name="Two"
       component={ScreenTwo}
       options={{ title: 'Back' }}
      />
      <Stack.Screen
       name="Three"
       component={ScreenThree}
       options={{ title: 'Back' }}
      />
      <Stack.Screen
       name="Four"
       component={ScreenFour}
       options={{ title: 'Back' }}
      />            
     </Stack.Navigator>
    </NavigationContainer>
  </View>
  );
 }

 const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'yellow',
    padding: 20,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'black',//'#2F2E2C'
  },
  container2: {
    borderWidth: 3,
    borderColor: 'yellow',
    padding: 20,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'black',//'#2F2E2C'
    margin: 20,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#679BF1',
    margin: 20,
    padding: 20,
    flex: 2.5,
  },
  buttonStyle: {
    width: 200,
    margin: 10,
  },
  stack: {
    margin: 20,
    padding: 10,
  },
});