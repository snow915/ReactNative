import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
    const [name, setName] = useState("Augusto");
    const [age, setAge] = useState('55');
    return (
        <View style={styles.container}>
            <Text>Enter a name: </Text>
            <TextInput
                style={styles.input}
                placeholder='e.g Augusto Armenta'
                multiline //Le decimos que sea como un TextArea
                onChangeText={(val) => setName(val)}
                /*Lo ingresado en el TextInput sera pasado como parametro de la funcion flecha
                * y a su vez la funcion flecha pasa ese parametro a setName que lo recibe respectivamente el state*/
            />
            <Text>Enter age: </Text>
            <TextInput
                style={styles.input}
                placeholder='e.g 22'
                keyboardType='numeric' //De esta forma se especifica el tipo de input
                onChangeText={(val) => setAge(val)}
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
