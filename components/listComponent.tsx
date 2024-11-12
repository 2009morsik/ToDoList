import React, {useState} from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";

const ListComponent = (props) => {
    return (
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <View style={styles.itemLeft}/>
                <Text style={styles.textButton}> {props.text} </Text>
            </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    itemLeft: {
        width:24,
        height:24,
        backgroundColor: '#55BCF6',
        opacity:0.4,
        borderRadius: 5,
        marginRight:15,
    },
    textButton: {
    },
})

export default ListComponent;