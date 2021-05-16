import React, {useState} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Focus from './src/components/features/focus/focus.component';
import Timer from './src/components/features/timer/timer.component';
import {fontSizes, paddingSizes} from './src/components/utils/sizes';

export default function App() {
  const [focusSubject, setFocusSubject] = useState('spading');
  return (
    <View style={styles.container}>
     
      {
        focusSubject ? 
          <Timer focusSubject={focusSubject}/>
        
        :
           <Focus addSubject={setFocusSubject}/>  
        }
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? paddingSizes.md : paddingSizes.lg,
    backgroundColor: '#252250'
  }
});
