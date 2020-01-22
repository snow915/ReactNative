import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.body}>

          <View style={styles.eyes}>
            <View style={styles.eyeLeft}></View>
            <View style={styles.eyeRight}></View>
          </View>

          <View style={styles.mouth}>
            <View style={styles.mouth1}></View>
          </View>

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d0073',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'green',
    padding: 90,
    flexDirection: 'column',
  },
  eyes: {
    flexDirection: 'row',
  },
  eyeLeft: {
    backgroundColor: 'orange',
    padding: 30,
    marginRight: 10,
  },
  eyeRight: {
    backgroundColor: 'orange',
    padding: 30,
    marginLeft: 10,
  },
  mouth1 : {
    backgroundColor : 'orange',
    padding : 30,
    marginTop : 30,
  },
});
