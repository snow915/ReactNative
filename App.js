import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
    const [name, setName] = useState("Augusto");
    const [person, setPerson] = useState({name:'Marigel', age:'55'});
    const clickHandler = () => {
        if (name === 'Augusto'){
            setName("Cristian");
        } else {
            setName("Augusto");
        }

    };
    const updateSecondLine = () => {
        setPerson({name : 'Marco', age : 52});
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>My name is {name}</Text>
            <Text style={styles.textStyle}>Her name is {person.name} and her age is {person.age}</Text>
            <View style={styles.buttonStyle}>
                <Button
                    title='Update first line'
                    onPress={clickHandler}
                />
            </View>

            <View style={styles.buttonStyle}>
                <Button
                    title='Update second line'
                    onPress={updateSecondLine}
                />
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
    textStyle : {
      color : 'white',
    },
    buttonStyle : {
      marginTop : 15,
    },

});
