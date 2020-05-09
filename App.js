import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Alert} from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {

    const [todos,setTodos] = useState([
        {text: 'buy coffee', key: '1'},
        {text: 'create an app', key: '2'},
        {text: 'play on the switch', key: '3'}
    ]);

    /*ESTA ES LA FUNCION QUE VA A AÑADIR EL NUEVO OBJETO AL STATE, QUE ES EL QUE SE ITERA PARA MOSTRAR LOS ELEMENTOS*/
    const submitHandler = (text) => {
        //RECIBE UN PARAMETRO, QUE ES EL TEXTO INGRESADO EN EL INPUT DESDE addTodo.js

        if(text.length > 3){
            setTodos((prevTodos) => {
                return [
                    {text : text, key : Math.random().toString()}, /*AQUI AÑADIMOS EL NUEVO OBJETO*/
                    ...prevTodos //Operador de propagación
                ]
            })
        } else {
            Alert.alert("Ops", "Todos must be over 3 chars long", [
                {text: "Understood", onPress: () => console.log("alert closed")}
            ]);
        }
    }

    /*ESTA FUNCION ELIMINA EL ELEMENTO DEL STATE QUE LE DEMOS CLICK*/
    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        });
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                {/*LE PASAMOS LA FUNCION submitHandler a la funcion AddTodo en addTodo.js
                QUE ES LA QUE TRATA AL INPUT Y EL BOTON PARA AGREGAR EL NUEVO ELEMENTO*/}
                <AddTodo submitHandler={submitHandler}/>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <TodoItem
                                item={item}
                                pressHandler={pressHandler}
                            />
                        )}
                    />
                </View>
            </View>
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
      padding: 40,
    },
    list: {
        marginTop: 20,
    },
});
