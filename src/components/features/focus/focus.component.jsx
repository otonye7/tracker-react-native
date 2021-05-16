import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import RoundedButton from '../../RoundedButtons'
import {fontSizes, paddingSizes} from '../../utils/sizes';

const Focus = ({addSubject}) => {
   const [tmpItem, setTmpItem] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>What would you like to focus on ?</Text>
          <View style = {styles.inputContainer}>
               <TextInput onSubmitEditing={({nativeEvent}) => {
                   setTmpItem(nativeEvent.text)
               }} style={{flex: 1, marginRight: 20}}/>
               <RoundedButton onPress={() => {
                   addSubject(tmpItem)
               }} size={50} title='+'/>
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
      padding: paddingSizes.md,
      justifyContent: 'center'
  },
  title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: fontSizes.lg
  },
  inputContainer: {
      paddingTop: paddingSizes.md,
      flexDirection: 'row',
      alignItems: 'center'
  }
});

export default Focus;
