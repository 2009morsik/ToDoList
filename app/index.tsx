import React, {useState} from "react";
import {Text, View, SafeAreaView, TouchableOpacity, StyleSheet} from "react-native";
import {useRouter} from "expo-router";
import ListComponent from "@/components/listComponent";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Index() {
    const router = useRouter();

    const [listOfTasks, setListOfTasks] = useState([]);
    const [listOfKeys, setListOfKeys] = useState([]);

    const getTasks = async () => {
        try{ const keys = await AsyncStorage.getAllKeys();
            const allData = await AsyncStorage.multiGet(keys);



            const result = allData.map(([key, value]) => ({key, value,}));
            console.log('Это результат:  ',result);
        }     catch (error) {
        }
    };





    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headingText}>
                Список задач:
            </Text>
            <View style={styles.items}>
                {/*<ListComponent text={"Text1"}/>*/}
                {/*{return <ListComponent/ text=>}*/}
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => router.push('/addNewTaskPage')}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={getTasks}>
                <Text style={styles.buttonText}>?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
        paddingHorizontal: 15,
        paddingTop: 70,
    },
    addButton: {
        height: 60,
        width: 60,
        backgroundColor: '#55BCF6',
        borderRadius: 50,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    buttonText: {
        fontSize: 35,
        color: 'white',
    },
    items: {
        marginTop: 20,
    }
})
