import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icones() {
    return (
        <View style = {{ flexDirection : "row", justifyContent :"space-around", alignItems : "baseline"}}>
            <View style = {{ alignItems : "center"}}>
                <MaterialCommunityIcons name = "music-accidental-sharp" size = {24} color = "#303030" />
                <Text style = {styles.text}> Cromático </Text>
            </View>
            <View style = {{ alignItems : "center"}}>
                <Octicons name = "settings" size = {24} color = "#303030"/>
                <Text style = {styles.text}> Corda a Corda </Text>
            </View>
            <View style = {{ alignItems : "center"}}> 
                <MaterialCommunityIcons name = "music-box-multiple-outline" size = {24} color = "#303030" />
                <Text style = {styles.text}> Treinar </Text>
            </View>
            <View style = {{ alignItems : "center"}}>
                <Ionicons name="md-settings-outline" size = {24} color = "#303030" />
                <Text style = {styles.text}> Preferências </Text>
            </View>
            <View style = {{ alignItems : "center"}}>
                    <Ionicons name = "ellipsis-horizontal-outline" size = {24} color = "#303030"/>
                    <Text style = {styles.text}> Mais Apps </Text>
            </View>
        </View>
            )
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
                fontSize : 10
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