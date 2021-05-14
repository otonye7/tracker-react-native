import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {TextInput} from 'react-native-paper';
import RoundedButton from '../../RoundedButtons'

const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>What would you like to focus on ?</Text>
          <View style = {styles.inputContainer}>
               <TextInput />
               <RoundedButton title='+'/>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1
  },
  titleContainer: {
      flex: 0.5,
      padding: 16,
      justifyContent: 'center'
  },
  title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
  },
  inputContainer: {
      paddingTop: 20
  }
});

export default Focus;