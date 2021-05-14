import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Focus from './src/components/features/focus/focus.component';

export default function App() {
  return (
    <View style={styles.container}>
      <Focus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#252250'
  }
});
