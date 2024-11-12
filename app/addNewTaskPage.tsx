import React, {useState} from "react";
import {Text, View, SafeAreaView, TouchableOpacity, StyleSheet, TextInput} from "react-native";
import {useRouter} from "expo-router";
import ListComponent from "@/components/listComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddTaskPage = () => {
    const router = useRouter();
    const [inputHeaderValue, setInputHeaderValue] = useState("");
    const [inputDescriptionValue, setInputDescriptionValue] = useState("");

    const [data, setData] = useState(null);

    const [] = useState("");
    const [] = useState("");

    const test = () =>{
        console.log('Заголовок сейчас ',inputHeaderValue);
        console.log('Описание сейчас ',inputDescriptionValue);
    }


    const saveData = async () => {
        try {
            await AsyncStorage.setItem("testHeadingKey", inputHeaderValue);
            alert("Успешно сохранено");
        } catch (error) {
            console.error("Ошибка сохранения", error);
        }
        try {
            await AsyncStorage.setItem("testDescriptionKey", inputDescriptionValue);
            alert("Успешно сохранено");
        } catch (error) {
            console.error("Ошибка сохранения", error);
        }
    };
    const loadData = async () => {
        try {
            const value = await AsyncStorage.getItem("testDescriptionKey");
            if (value !== null) {
                console.log('Вывод из сейва: ',value);
            } else {
                alert("No data");
            }
        } catch (error) {
            console.error("Error loading data", error);
        }
    };
    const deleteData = async () => {
        try {
            await AsyncStorage.removeItem("testDescriptionKey");
            alert("Успешно удалено");
        } catch (error) {
            console.error("Ошибка удаления", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={styles.buttonBack}>
                <Text style={styles.textBack}>←</Text>
            </TouchableOpacity>
            <TextInput style={styles.inputHeading}
                       placeholderTextColor='black'
                       placeholder="Введите текст заголовка"
                       keyboardType='default'
                       value={inputHeaderValue}
                       onChangeText={setInputHeaderValue}
                       multiline={true}/>
            <TextInput style={styles.inputDescription}
                       placeholderTextColor='black'
                       placeholder="Введите описание"
                       keyboardType='default'
                       value={inputDescriptionValue}
                       onChangeText={setInputDescriptionValue}
                       multiline={true}/>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {saveData(); test();loadData()}}>
                    <Text style={styles.textButton}>Сохранить</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={deleteData}>
                    <Text style={styles.textButton}>Удалить</Text>
                </TouchableOpacity>
            </View>

            {/*
            <TouchableOpacity onPress={loadData} style={styles.button}><Text>test load</Text></TouchableOpacity>
            {data && <Text>Загруженные данные: {data}</Text>}
            */}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        backgroundColor: "#E8EAED",
        paddingHorizontal: 15,
        paddingTop: 70,
    },
    inputHeading: {
        fontSize: 24,
        backgroundColor: 'white',
        borderRadius: 15,
        height: 45,
        paddingHorizontal: 10,
    },
    inputDescription: {
        fontSize: 24,
        backgroundColor: 'white',
        borderRadius: 15,
        height: 500,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        padding: 10,
    },
    button: {
        backgroundColor: '#55BCF6',
        height: 60,
        width: 170,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 30,
        color: 'white',
        textAlign:"center"
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    buttonBack:{
        height: 60,
        width: 60,
        backgroundColor: '#55BCF6',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBack:{
        fontSize: 35,
        color: 'white',
        marginBottom:15,
    }
})

export default AddTaskPage;