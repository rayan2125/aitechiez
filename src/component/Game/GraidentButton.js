import React from "react";
import {Text, TouchableOpacity} from "react-native"
import LinearGradient from "react-native-linear-gradient";

const GradientButton=(props)=>{
    return(
        <LinearGradient 
        colors={['rgba(98,176, 155, 0.9)', 'rgba(58, 131, 244,0.9)']}
        end={{x:1, y:1}}
        start={{x: 0.1, y: 0.2}}
        style={{ height:40,borderRadius:20,width:100,margin:10,alignItems:'center'}}
        >
<TouchableOpacity  style={{padding:5,paddingHorizontal:4,height:40,   alignItems:'center', justifyContent:"center"}}>
            
            <Text style={{color:'white'}}>{props.value}</Text>
        </TouchableOpacity>
        </LinearGradient>
    )
}
export default GradientButton