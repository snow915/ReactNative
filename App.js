import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {name: 'shaun', key: '1'},
        {name: 'Augusto', key: '2'},
        {name: 'Cristian', key: '3'},
        {name: 'Marigel', key: '4'},
        {name: 'Ofelia', key: '5'},
        {name: 'Polo', key: '6'},
        {name: 'Pepito', key: '7'},
    ]);
    return (
        <View style={styles.container}>
            {people.map((item) => { //item hace referencia al objeto que va siendo iterado
                return (
                    //Con key={item.key} cada iteración tendra un prop unico que sera key
                    <View key={item.key}>
                        <Text>{item.name}</Text>
                    </View>
                )
            })}
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
});
