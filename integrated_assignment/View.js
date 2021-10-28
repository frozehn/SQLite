//VIEW SCREEN
//Imports
import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Mytextinput from './Mytextinput';
import Mybutton from './mainButton';
import { openDatabase } from 'react-native-sqlite-storage';
//Variable for the database
var db = openDatabase({ name: 'UserDatabase.db' });
//Vaiable for visualising the data in the records entered by the user: name, contact and address
const ViewUser = () => {
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});
//Variable to look for a record based on the ID that was previously generated
  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',//SQLite code to look for a data in the table
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          //Condition to be met because the ID start with 1 in a database in SQLite
          if (len > 0) {
            setUserData(results.rows.item(0));//0 because an aaray commences in cero in VSC
          } else {
            alert('No user found');//An alerts displayed in case the user is not found
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
            placeholder="Enter User Id"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Search User" customClick={searchUser} />
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            }}>
            <Text>User Id: {userData.user_id}</Text>
            <Text>User Name: {userData.user_name}</Text>
            <Text>User Contact: {userData.user_contact}</Text>
            <Text>User Address: {userData.user_address}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ViewUser;