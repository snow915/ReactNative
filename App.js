import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
    const [name, setName] = useState("Augusto");
    const [age, setPerson] = useState('55');
    return (
        <View style={styles.container}>
            <Text>Enter a name: </Text>
            <TextInput
                style={styles.input}
                placeholder='e.g Augusto Armenta'
            />
            <Text style={styles.textStyle}>Name: {name} age: {age}</Text>
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

    input: {
        borderWidth : 1,
        borderColor : "#777",
        padding: 8,
        margin: 10,
        width: 200,
    }

});
