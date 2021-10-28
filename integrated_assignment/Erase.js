//ERASE SCREEN
//Imports
import React, { useState } from 'react';
import { View, Alert, SafeAreaView } from 'react-native';
import Mytextinput from './Mytextinput';
import Mybutton from './mainButton';
import { openDatabase } from 'react-native-sqlite-storage';
//Variable for the database
var db = openDatabase({ name: 'UserDatabase.db' });
//Variable to look for a record based on the ID that was previously generated
const DeleteUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');
//Execution of the erasing of the file
  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',//SQLite code to erase data in the table of a database
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',//An alerts displayed in case the erasing was success
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),//Go to main menu
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Please insert a valid User Id');//An alerts displayed in case the user is not found or the ID entered is invalid
          }
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
          <Mytextinput
            placeholder="Enter User Id"//Place holder to previsualise the content to be in the text box
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Delete User" customClick={deleteUser} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DeleteUser;