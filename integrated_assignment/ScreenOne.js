//MAIN MENU
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function ScreenOne({navigation}) {
    return (
        <View>
         <Image
          source={{
            uri: 'https://secure.static.tumblr.com/3e40c90b1a9a790936be45a302b95239/eq7mdba/KUio4b2po/tumblr_static_tumblr_static_czlay74axmo0okkkw8oggwss4_640.gif',}}
            style={styles.animation}
          />
          <Button style = {styles.buttonStyle}
               onPress={() => {
                   navigation.navigate('Two')
               }}
               title= "Sign in"
            />
          <Button style = {styles.buttonStyle}
               onPress={() => {
                   navigation.navigate('Three')
               }}
               title= "Log in"
            />
          <Button style = {styles.buttonStyle}
               onPress={() => {
                   navigation.navigate('Four')
               }}
               title= "Newsletter"
            />                        
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
    backgroundColor: 'black',
  },
  textTitle1: {
    color: '#F8DE7E',
    fontSize: 30,
    margin: 8,
    alignItems: 'center'
  },
  textTitle2: {
      color: 'white',
      fontSize: 15,
      margin: 8,
      //alignItems: 'flex-start'
    },
    textTitle3: {
      color: '#F8DE7E',
      fontSize: 20,
      margin: 8,
      //alignItems: 'flex-start'
    },      
  textInputStyle: {
    borderWidth: 1,
    borderColor: 'yellow',
    backgroundColor: '#679BF1',
    margin: 8,
    //padding: 1,
    //flex: 2.5,
  },
  animation:{
    width: 400,
    height: 200,
    justifyContent: 'center',
  },
  buttonStyle2: {
    width: 200,
    margin: 20,
    borderWidth: 1,
    borderColor: 'yellow',
    backgroundColor: '#679BF1',      
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 10,
  },
    checkbox: {
    alignSelf: "center",
    borderColor: 'yellow',
  },  
    animation:{
      width: '100%',
      height: 200,
      justifyContent: 'center',
    },
    buttonStyle: {
      width: 200,
      margin: 10,
    }, 
  });