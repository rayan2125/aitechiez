import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,Alert,} from 'react-native'
import { colors } from "../assets/config/colors";


const Dynamicsimage = ({navigation,route}) => {
    const [loader,setLoader] =useState(false)
    goNext=()=>{

        navigation.push('Login')
        navigation.push('register')
        
    }
    // goRegister=()=>{
    //     Alert.alert('redd')
    //     navigation.push('Register')
    // }
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
          <View style={styles.Logo} >

<Image source={require('./Login/Aitechiez.png')}
        style={styles.tinyLogo} />
</View>
{/* <ActivityIndicator  animating ={loader}/> */}
            <View >
                <Text style={{fontSize:50, color:'black',textAlign:'center'}}> Welcome to our Society</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', height:50, padding:2}}>




                <View style={{width:"50%", }}>
                    <TouchableOpacity style={[styles.Button, styles.green]} onPress={()=>goNext()}
                    
                    >
                        <Text style={styles.logintxt} >Login</Text>
                    </TouchableOpacity >
                </View>







                <View style={{width:"50%",}}>
                    <TouchableOpacity style={[styles.Button, styles.red]} 
                    
                    // onPress={()=>navigation.push('Register')}>
                    onPress={()=>goNext()}>
                        <Text style={styles.logintxt}>Register</Text>
                    </TouchableOpacity >
                </View>

            </View>
        </View>





    )
}
export default Dynamicsimage
const styles = StyleSheet.create({

    Button: {
        
        fontSize: '15',
flex:1,

        color: "white",
        justifyContent:'center',
        alignItems:'center',
        height:60,
        



    },
    green:{
        backgroundColor:'#f70072',
        borderBottomLeftRadius:6,
        borderTopLeftRadius:6,
        
    },
    red:{
        backgroundColor: '#00c3e3',
borderBottomRightRadius:6,
        borderTopRightRadius:6,
    },
    logintxt:{
    
        color:colors.WHITE,
        
        
    },
    Logo: {

        // margin:10,
        alignItems: 'center',
        // height:'20%'
},
tinyLogo: {


    height: 50,
    alignContent: 'center',
    resizeMode: 'contain',
    top: 100




},

})