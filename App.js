import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I am a boy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    padding: 50,
  }
});
