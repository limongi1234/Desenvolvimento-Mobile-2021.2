import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default  function Header ()
{
    return (
    <View style = {styles.container}>
        <View>
           <MaterialCommunityIcons name = "microphone-outline" size = {30} color = "#303030" style = {styles.mic}/>
        </View>
        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.text} > Entrar </Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    button : {
        height : 30,
        width : 60,
        borderRadius : 16, 
        borderWidth : 1,
        alignItems : "center",
        justifyContent : "center",
        borderColor : "#303030",
        marginRight : - 70
    },
    text : {
        color : "#fff",
        marginRight : 0  
    },
    container : {
        flexDirection : "row",
        alignItems : "space-around",
        justifyContent : "space-around",
        marginTop : 110
    },
    mic : {
        marginLeft : - 70  
    },
});