
import { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    ToastAndroid,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    Dimensions,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform

} from 'react-native'
import * as GLOBAL from '../../assets/config/constants';
import { API_CONSTANTS } from "../../assets/config/constants"
import StorageController from "../../services/storage";
import Api from '../../services/api';
import Crypt from "../../Crypt/Crypt";
import React from 'react'

const Mainlogin = ({ navigation, route }) => {

    const [state, setState] = useState({
        email: "",
        password: "",
        role:"Admin"

    })

    const [loader, setLoader] = useState(false)

    const [code, setCode] = useState('')
    const [keyPressed, setKeyPressed] = useState('');

    const { width, height } = Dimensions.get('window')
    const apiCtrl = new Api;
    const storageCtrl = new StorageController;
    const cryptCtrl = new Crypt
    const [isPopupVisible, setPopupVisible] = useState(false);





    const handleLogin = () => {

       


        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;










        if (state.email === "" && state.password === "") {

            ToastAndroid.show('PLease Enter Login Credentials.', ToastAndroid.SHORT);
        } else {

            if (state.email === "") {
                // console.log('PLease Enter Email.');
                ToastAndroid.show('Please Enter Email.', ToastAndroid.SHORT);
                return false;
            } else if (regex.test(state.email) === false) {
                // console.log('Invalid Email! Please Enter Valid Email.')
                ToastAndroid.show('Invalid Email! Please Enter Valid Email.', ToastAndroid.SHORT);
                return false;
            }
            if (state.password === "") {
                ToastAndroid.show('Invalid Password! Please Enter Valid Password.', ToastAndroid.SHORT);
                return false;
            } else if (state.password.length < 5) {
                ToastAndroid.show('Password has to be atleast 5 characters long', ToastAndroid.SHORT);
                return false;
            }
        }




        if (state.email && state.password) {

            const request = { email: state.email, password: state.password, "nonEncrypted": true ,role:"admin" }
            // console.log(request);
            var encryptedData = cryptCtrl.encrypt(JSON.stringify(request));
            // console.log('encry', encryptedData)



            apiCtrl.callAxios(API_CONSTANTS.login, { request: encryptedData }, false).then(response => {
                // console.log("*-*-*-", request)
                console.log("ppppppp", response)
                if (response.success) {
                    // console.log('res=>', response.data)
                    storageCtrl.setItem('token', response.data.access_token)

                    ToastAndroid.show('Login Success: ' + response.message, ToastAndroid.SHORT)
                    storageCtrl.setItem('user_details', JSON.stringify(response.data));

                    GLOBAL.userDetails = response.data.data;
                    setPopupVisible(true)
                    // console.log('hi ')  
   

                    navigation.push('MainDashboard',{userRole:state.role})
                } else {
                    // console.log('hello ')
                    ToastAndroid.show('Login Error: ' + response.message, ToastAndroid.SHORT);
                    // console.log("====||===||", response)



                }
            })
        } else {
            ToastAndroid.show('Please enter Username & Password.', ToastAndroid.SHORT);
        }








        setLoader(false)


    }












    return (
        <>
 <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}
            >

              

            <View style={{  justifyContent: 'center', }}>
                <View style={{position:'relative', top:'50%',bottom:'50%',}}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 60 }}>
                        <Image source={require('../Login/Aitechiez.png')}
                            style={styles.tinyLogo} />

                    </View>
                    <View style={styles.inner}>
                        <TextInput placeholder="Email" style={styles.textInput}
                            onChangeText={(text) => setState(old => ({ ...old, email: text }))}
                        />
                        <TextInput placeholder="Password" style={styles.textInput}
                            onChangeText={(text) => setState(old => ({ ...old, password: text }))}
                        />
                        <View style={{gap:20}}>
                        <TouchableOpacity onPress={() => handleLogin()} >
                        <View style={[styles.Button, { backgroundColor: '#f70072', }]}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
                                </View>
                            </TouchableOpacity>
                           
                            <TouchableOpacity onPress={() => navigation.push('Login')}>
                                <View style={[styles.Button, { color:'red' }]}>
                                    <Text style={{ color: '#DF5050', textAlign: 'center', fontSize:20,fontWeight:'bold' }}> Business Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.footer}><Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }} > {'\u00A9'}copyright 2023 Primary Key technologies</Text></View>
                    </View>
                    <View>
               
            </View>
                    {/* <View>
                             <View style={styles.inner}>
                        <Text style={styles.header}>Login</Text>
                        <View>
                            
                            

                            <View>
                                <TouchableOpacity onPress={() => handleLogin()} >
                                    <View style={[styles.Button, { backgroundColor: '#f70072', }]}>
                                        <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View>

                                <TouchableOpacity onPress={() => navigation.push('Dynamicsimage')}>

                                    <Text style={{ color: 'black' }}>Business Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View >

                            


                        </View>
                    </View>
                
                        </View> */}
                </View>


            </View>
          </KeyboardAvoidingView>
        

            {/* <View style={{ flex: 1, justifyContent: 'center' }}>
                <View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 35, color: 'black', padding: 5 }}>Login</Text>
                    </View>
                    <View style={{ padding: 15, }}>
                        <View style={{ marginBottom: 10 }}>
                            <View style={styles.input}>
                               
                            </View>
                            <Text style={{ color: "red" }}>{errors ? errors : ""}</Text>
                            <View style={styles.input}>
                                <TextInput
                                    onChangeText={(text) => setState(old => ({ ...old, email: text }))}
                                    placeholder={"Email"} />
                            </View>
                            <Text style={{ color: "red" }}>{errors ? errors : ""}</Text>
                            <View style={styles.input}>
                                <TextInput
                                    onChangeText={(text) => setState(old => ({ ...old, password: text }))}
                                    placeholder={" Password"}
                                    secureTextEntry={true}
                                    showEyeIcon={true}
                                />
                            </View>
                           
                        </View>

                        <TouchableOpacity onPress={() => navigation.push('Forgot')}>

                            <Text style={{ textAlign: 'right', color: 'black', right: 8 }}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <View style={{ padding: 5, }}>
                            <TouchableOpacity onPress={() => handleLogin()} >
                                <View style={[styles.Button, { backgroundColor: '#00c3e3' }]}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleMasterLogin()} >
                                <View style={[{ marginTop: 20, backgroundColor: '#f70072', top: 50, height: 30, width: 30, borderRadius: 99 }]}>
                                    <Icon name='vial' style={{ flex: 1, justifyContent: 'center', top: 10, left: 8 }} color="white" />

                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => navigation.push('Register')}>
                                <Text style={{ color: 'black' }}> Don't have Account?<Text style={{ color: colors.SECONDARY }}>Register here</Text> </Text>
                            </TouchableOpacity>
                        </View>
                        

                    </View>

                </View>
                <View style={styles.footer}><Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }} > {'\u00A9'}copyright 2023 Primary Key technologies</Text></View>
            </View> */}



        </>



    )
}
export default Mainlogin
const styles = StyleSheet.create({


    input: {
        borderColor: 'black',
        // borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',

    },


    footer: {
      
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'black',
       



    },
    Button: {
        fontSize: '15',
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 7
    },
   
  inner:{
    padding:10
  },

    textInput: {
        height: 55,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 36,

    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
    tinyLogo: {


        height: 50,
        alignContent: 'center',
        resizeMode: 'contain',





    },
});






