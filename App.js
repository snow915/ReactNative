import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textBold}>Hello world</Text>
      </View>
      <View style={styles.body}>
          <Text style={styles.textBold}>Lorem ipsu dolro sit amet. <Text>Jajaja</Text></Text>
          <Text>Lorem ipsu dolro sit amet.</Text>
          <Text>Lorem ipsu dolro sit amet.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor : 'purple',
    padding : 20,
  },
  textBold: {
    fontWeight : 'bold',
    color : 'white',
  },
  body: {
    backgroundColor : 'green',
    padding : 50,
  },
});
