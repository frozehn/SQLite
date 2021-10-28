//UPDATE SCREEN
//Imports
import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, SafeAreaView, } from 'react-native';
import Mytextinput from './Mytextinput';
import Mybutton from './mainButton';
import { openDatabase } from 'react-native-sqlite-storage';
//Variable for the database
var db = openDatabase({ name: 'UserDatabase.db' });
//Vaiable for updating the data in the records entered by the user: name, contact and address
const UpdateUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');//this variable was automatically generated
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');
//Sets for the variables previously mentioned
  let updateAllStates = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };
//Variable to look for a record based on the ID that was previously generated
  let searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',//SQLite code to look for a data in the table
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(
              res.user_name,
              res.user_contact,
              res.user_address
            );
          } else {
            alert('No user found');//Message to be displayed in case the user has not been found
            updateAllStates('', '', '');
          }
        }
      );
    });
  };
  //Alerts to pop up depending the options
  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);
//Pop ups an alert to let the user know they have to put an ID to be looked it up
    if (!inputUserId) {
      alert('Please fill User id');
      return;
    }
//Pop ups an alert to let the user know they have to write down a name
    if (!userName) {
      alert('Please fill name');
      return;
    }
//Pop ups an alert to let the user know they have to write down a number    
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
//Pop ups an alert to let the user know they have to write down an address    
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
//Execution of the updating
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [userName, userContact, userAddress, inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',//Message to be displayed in case the updating was a success
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');//Message to be displayed in case there was an error
        }
      );
    });
  };
//Styling of the the screen: background, padding, button, textinputs, etc.... Code for the style obtained from:
//https://www.codegrepper.com/code-examples/whatever/How+to+use+react+native+safe+area+view+for+ios
//https://www.tabnine.com/code/javascript/classes/react-navigation/SafeAreaView
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Enter User Id"
                style={{ padding: 10 }}
                onChangeText={
                  (inputUserId) => setInputUserId(inputUserId)
                }
              />
              <Mybutton
                title="Search User"
                customClick={searchUser} 
              />
              <Mytextinput
                placeholder="Enter Name"
                value={userName}
                style={{ padding: 10 }}
                onChangeText={
                  (userName) => setUserName(userName)
                }
              />
              <Mytextinput
                placeholder="Enter Contact No"
                value={'' + userContact}
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <Mytextinput
                value={userAddress}
                placeholder="Enter Address"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton
                title="Update User"
                customClick={updateUser}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UpdateUser;