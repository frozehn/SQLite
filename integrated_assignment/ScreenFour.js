//NEWSLETTER SCREEN
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
//import {} from ""

export default function ScreenFour () {
    const [email, setEmail] = useState("Email Address");
    const [name, setName] = useState("Name");
    const [surname, setSurname] = useState("Surname");
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);

    return (
     <View style={styles.container}>
       <StatusBar backgroundColor="#F8DE7E"/> 
        
        <Text style= {styles.textTitle1}>
            Newsletter</Text>

        <Text style= {styles.textTitle2}>
            Email address</Text>        
        <TextInput style= {styles.textInputStyle}
            placeholder= "email@example.ie"
            onChangeText={setEmail}
        />

        <Text style= {styles.textTitle2}>
            Name</Text>
        <TextInput style= {styles.textInputStyle}
            placeholder= "Enter your name"
            onChangeText={setName}
        />

        <Text style= {styles.textTitle2}>
            Surname</Text>
        <TextInput style= {styles.textInputStyle}
            placeholder= "Enter your surname"
            onChangeText={setSurname}
        />

        <Text style= {styles.textTitle3}>
            Preferences</Text>

       <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox}
          value={isChecked1}
          onValueChange={setChecked1}
        />
        <Text style= {styles.textTitle2}>
        Launch of new products</Text> 
        </View>

        <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox}
          value={isChecked2}
          onValueChange={setChecked2}
        />
        <Text style= {styles.textTitle2}>
        Scientific articles</Text> 
        </View>

        <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox}
          value={isChecked3}
          onValueChange={setChecked3}
        />
        <Text style= {styles.textTitle2}>
        Organic chemistry</Text> 
        </View>

        <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox}
          value={isChecked4}
          onValueChange={setChecked4}
        />
        <Text style= {styles.textTitle2}>
        Electrochemistry</Text> 
        </View>

        <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox}
          value={isChecked5}
          onValueChange={setChecked5}
        />
        <Text style= {styles.textTitle2}>
        Nanotechnology</Text> 
        </View>

        <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox}
          value={isChecked6}
          onValueChange={setChecked6}
        />
        <Text style= {styles.textTitle2}>
        Pharmaceutical</Text> 
        </View>
     
        <Button title={"Subscribe"} 
            style={styles.buttonStyle2}
            //onPress={}
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
});