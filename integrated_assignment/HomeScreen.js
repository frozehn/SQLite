import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Mainbutton from './mainButton';
import Mytext from './Mytext';
import * as SQLite from 'expo-sqlite';

var db = SQLite.openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View>
         <Image style={styles.image} source={require("/assets/logo-social.png")} />
          <Mainbutton
            title="Register"
            customClick={() => navigation.navigate('Register')}
          />
          <Mainbutton
            title="Update"
            customClick={() => navigation.navigate('Update')}
          />
          <Mainbutton
            title="Review"
            customClick={() => navigation.navigate('Review')}
          />
          <Mainbutton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mainbutton
            title="Erase"
            customClick={() => navigation.navigate('Erase')}
          />
        </View>
      </View>
    </View>
  );
};
//Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    height: 200,
    width: 200,
    marginBottom: 0,
  },
});
export default HomeScreen;
