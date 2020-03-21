import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {name: 'shaun', key: '1'},
        {name: 'Augusto', key: '2'},
        {name: 'Cristian', key: '3'},
        {name: 'Marigel', key: '4'},
        {name: 'Ofelia', key: '5'},
        {name: 'Polo', key: '6'},
        {name: 'Pepito', key: '7'},
        {name: 'Juana', key: '8'},
        {name: 'Oscar', key: '9'},
    ]);
    return (
        <View style={styles.container}>
            <ScrollView>
                {people.map((item) => { //item hace referencia al objeto que va siendo iterado
                    return (
                        //Con key={item.key} cada iteración tendra un prop unico que sera key
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    item: {
        marginTop: 30,
        padding: 30,
        backgroundColor: 'purple',
        fontSize: 24,
        color: 'white',
    },
});
