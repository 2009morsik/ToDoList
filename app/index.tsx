import React, {useState} from "react";
import { Text, View, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import {useRouter} from "expo-router";
//import {Picker} from "@react-native-picker/picker"

export default function Index() {
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.heading}>
          <Text style={styles.headingText}>
              Список задач:
          </Text>
          </View>
            <TouchableOpacity style={styles.addButton}>

            </TouchableOpacity>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 60,
        backgroundColor: "grey",
    },
    addButton:{
        height: 50,
        width: 50,
        backgroundColor: "blue",
        borderRadius: 50,
    },
    headingText:{
        fontSize: 25,
        fontWeight: "bold",
    },
    heading:{
        flex:1,
    }
})
