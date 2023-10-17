import React from "react";
import { View } from "react-native";
import { Text } from "react-native-animatable";
const CardText =(props)=>{

    return(
        <>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{color:'white', alignItems:'flex-start',marginHorizontal:10}}> {props.title}:</Text>
            <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}> Check</Text>
        </View>
        </>
    )
}
export default CardText