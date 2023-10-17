import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,TextInput } from 'react-native'
const Forgot = ({navigation, route}) => {
    return (
        <>
            <View style={{flex:1,justifyContent:'center'}}>
               
               <View style={{padding:10}}>
               <View style={{ padding:15}}>
                    <Text style={{fontSize:30, color:'black', }}>Forgot Password</Text>

                </View>
                <View style={{ padding:15}}>
                        <TextInput
                            // onChangeText={(text) => setState(old => ({ ...old, password: text }))}
                            style={styles.input}
                            placeholder={"User Name"}
                            secureTextEntry={true}
                            showEyeIcon={true}
                        />
                        <View style={{}}>
                    <TouchableOpacity onPress={()=>navigation.push('confirmation')} >
                        <View style={[styles.Button, { marginTop: 20, backgroundColor: '#f70072' }]}>
                            <Text style={{ color: '#fff', textAlign: 'center' ,fontSize:15}} >Forgot Password</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </View>
               </View>
                
                
            </View>
        </>

    )
}
export default Forgot;
const styles = StyleSheet.create({
    Button: {
        fontSize: '19',
        
        color: "white",
        justifyContent:'center',
        height: 55,
        borderRadius: 7
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        // padding: 5,
        borderRadius: 10


    },


})