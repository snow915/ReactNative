import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddTodo({submitHandler}){ //RECIBE COMO PARAMETRO LA FUNCION submitHandler

    const [text,setText] = useState('');

    /*RECIBE EL TEXTO INGRESADO EN EL INPUT Y LO PASA AL STATE*/
    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={(value) => changeHandler(value)} //El texto ingresado se pasa a la funcion changeHandler
            />
            <Button
                onPress={() => submitHandler(text)} //CUANDO PRESIONAMOS EL BOTON OBTIENE EL TEXTO DEL STATE Y LO PASA A LA FUNCION submitHandler
                title='add todo'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical : 6,
        borderBottomWidth: 1,
        borderBottomColor : '#ddd',
    },
});