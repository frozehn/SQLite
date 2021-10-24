import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mainbutton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.customClick}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#4d94ff",
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold'
  },
});

export default Mainbutton;