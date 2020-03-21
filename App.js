import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {name: 'shaun', id: '1'},
        {name: 'Augusto', id: '2'},
        {name: 'Cristian', id: '3'},
        {name: 'Marigel', id: '4'},
        {name: 'Ofelia', id: '5'},
        {name: 'Polo', id: '6'},
        {name: 'Pepito', id: '7'},
        {name: 'Juana', id: '8'},
        {name: 'Oscar', id: '9'},
    ]);
    return (
        <FlatList
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={({item}) => (
                <Text style={styles.item}>{item.name}</Text>
            )}
        />
        //Esto ya trae ScrollView integrado
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
        padding: 50,
        backgroundColor: 'purple',
        fontSize: 24,
        color: 'white',
        marginHorizontal: 15,
    },
});
