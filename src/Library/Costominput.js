import React from "react";
import { View,Text, StyleSheet, TextInput } from "react-native";




const Costominput =(props)=>{
const{name,placeholder,value,onPress,keyboardType,maxLength,numberOfLines} =props
    return(
        <>
        <View>
    <Text style={{color:'black'}}>{name}</Text>
    <TextInput 
    
    placeholder={placeholder}
    value={value}
    onChangeText={onPress}
    keyboardType={keyboardType}
    maxLength={maxLength}
    numberOfLines={numberOfLines}
    style={{borderBottomColor:'black',borderColor:"black",borderBottomWidth:1}}
    />
</View>

        </>

       
    )
}
export default Costominput;
const styles =StyleSheet.create({

})