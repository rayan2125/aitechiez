
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
        ActivityIndicator
} from 'react-native'
import * as GLOBAL from '../../assets/config/constants';
import { API_CONSTANTS } from "../../assets/config/constants"
import StorageController from "../../services/storage";
import Api from '../../services/api';

import Crypt from "../../Crypt/Crypt";


import React from 'react'
// var footertext ={

// }

const login = ({ navigation, route }) => {

        const [state, setState] = useState({
                email: "",
                password: ""

        })

        const [loader,setLoader] =useState(false)

        const [code, setCode] = useState('')
        const [keyPressed, setKeyPressed] = useState('');


        const apiCtrl = new Api;
        const storageCtrl = new StorageController;
        const cryptCtrl = new Crypt

        useEffect(() => {
                auth()
        
        }, [])

        const auth = () => {
                const request = { email: "test@admin.com", password: "U$er1234", "nonEncrypted": true }
                // console.log(request);
                var encryptedData = cryptCtrl.encrypt(JSON.stringify(request));
                // console.log('encry')



                apiCtrl.callAxios(API_CONSTANTS.login, { request: encryptedData }, false).then(response => {
                        // console.log("*-*-*-", request)
                        console.log('log res=====>', response)
                        // console.log("error log 1", response)
                        if (response.success) {
                                // console.log('log res=====>', response.data)
                                storageCtrl.setItem('token', response.data.access_token)

                                // ToastAndroid.show('Login Success: ' + response.message, ToastAndroid.SHORT)
                                storageCtrl.setItem('user_details', JSON.stringify(response.data));
                                GLOBAL.userDetails = response.data.data;
                                // console.log('hi ')



                                // navigation.push('Register')
                        } else {
                                // console.log('hello ')
                                // ToastAndroid.show('Login Error: ' + response.message, ToastAndroid.SHORT);
                                // console.log("====||===||", response)



                        }
                })

        }

        const handleMasterLogin = () => {
                navigation.push('dashboard')

                // setState({
                //         email:'test@admin.com',
                //         password:'U$er1234',

                // })
                // setCode('uataitechi');
                // handleLogin();
        }

        const handleLogin = () => {
                // navigation.navigate('dashboard')
                // setLoader(true)
                if (code === "") {
                        // console.log('PLease Enter Compa.');
                        ToastAndroid.show('Please Enter Company Code.', ToastAndroid.SHORT);
                        return false;
                }

                  
                let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                

                apiCtrl.callAxiosGet(`${API_CONSTANTS.companydatacd}/${code}`).then(response => {
                        // console.log("compnay code", company_code)

                        
                        // console.log("resss56566=>", response.data.status)
                    
                        var errData = response?.data?.status
                        if(errData==='error'){
                                ToastAndroid.show('Please enter valid Company Code.', ToastAndroid.SHORT);
                        }else{
                                if (response.success == false) {
                                        API_CONSTANTS.BASE_URL=`https://${response.data.data.website}/api`
                                        // console.log("baseurl", API_CONSTANTS) 
                                        // var baseUrl = API_CONSTANTS
                                        // console.log("======>>>",baseUrl )
                                        storageCtrl.setItem("compnay_data" , response.data.data)
                                        // console.log("adddd===>>",)
                                        if (state.email === "" && state.password === "") {
        
                                                ToastAndroid.show('PLease Enter Login Credentials.', ToastAndroid.SHORT);
                                        } else {
        
                                                if (state.email === "") {
                                                        console.log('PLease Enter Email.');
                                                        ToastAndroid.show('Please Enter Email.', ToastAndroid.SHORT);
                                                        return false;
                                                } else if (regex.test(state.email) === false) {
                                                        console.log('Invalid Email! Please Enter Valid Email.')
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
        
                                                const request = { email: state.email, password: state.password, "nonEncrypted": true }
                                                // console.log(request);
                                                var encryptedData = cryptCtrl.encrypt(JSON.stringify(request));
                                                // console.log('encry')
        
        
        
                                                apiCtrl.callAxios(API_CONSTANTS.login, { request: encryptedData }, false).then(response => {
                                                        console.log("*-*-*-", request)
                                                        console.log("error log 1", response)
                                                        if (response.success) {
                                                                // console.log('res=>', response.data)
                                                                storageCtrl.setItem('token', response.data.access_token)
        
                                                                ToastAndroid.show('Login Success: ' + response.message, ToastAndroid.SHORT)
                                                                storageCtrl.setItem('user_details', JSON.stringify(response.data));
                                                                GLOBAL.userDetails = response.data.data;
                                                                // console.log('hi ')
        
        
        
                                                                navigation.push('dashboard')
                                                        } else {
                                                                console.log('hello ')
                                                                ToastAndroid.show('Login Error: ' + response.message, ToastAndroid.SHORT);
                                                                console.log("====||===||", response)
        
        
        
                                                        }
                                                })
                                        } else {
                                                ToastAndroid.show('Please enter Username & Password.', ToastAndroid.SHORT);
                                        }
                                }
                        }
                        // if(response.data.status=='error') {
                        //         ToastAndroid.show('Please enter valid Company Code.', ToastAndroid.SHORT);
                        // }else{
                                
                        // }


                })
                // apiCtrl.callAxios(API_CONSTANTS.companycode, code).then(response=>{
                //         console.log("resss=>",response )
                //     })


setLoader(false)


        }
        const compcode = {
                slug: code
        }

        const handleKeyPress = (event) => {

                const { nativeEvent } = event;
                const { key, repeat } = nativeEvent;
                var data = ""
                data = key
                //  console.log("key=>",nativeEvent)

                // // Ignore repeated key events
                // if (repeat) {
                //   return;
                // }

                // // Set the key that was released
                // setKeyPressed(key);


                apiCtrl.callAxios(API_CONSTANTS.companycode, data).then(res => (
                        console.log("response", res)
                ))
        };









        return (


                <View>
                        {/* <View style={styles.Logo} >

                                <Image source={require('../Login/Aitechiez.png')}
                                        style={styles.tinyLogo} />
                        </View> */}

                        <View style={styles.mainContainer}
                        >
                               {/* { loader? <View style={styles.loader}><ActivityIndicator size={50} animating={loader}    />
                                <Text>Please wait...</Text></View> :""} */}



                                <View style={{
                                        borderColor: 'black', borderRadius: 21, shadowColor: 'grey',
                                        backgroundColor: 'white', borderWidth: 1, padding: 20,
                                }}>

                                        <Text style={{textAlign:'left'}}>
                                                Login
                                        </Text>
                                        <View style={styles.inputContainer}>


                                                {/* <Text style={[styles.label, styles.bcolor]}>Company Code<Text stytle={{ color: 'red' }}>*</Text>
                                                </Text> */}
                                                <TextInput
                                                        onChangeText={(text) => setCode(text)}
                                                        style={styles.input}
                                                        placeholder={"Company Code"}
                                                
                                                />

                                                {/* <Text style={[styles.label, styles.bcolor]}>
                                                        Email: <Text stytle={{ color: 'red' }}>*</Text>
                                                </Text> */}
                                                <TextInput
                                                        onChangeText={(text) => setState(old => ({ ...old, email: text }))}
                                                        style={styles.input}
                                                        placeholder={"Email"}
                                                />
                                                {/* <Text style={[styles.label, styles.bcolor]}>
                                                        Password<Text stytle={{ color: 'red' }}>*</Text>
                                                </Text> */}
                                                <TextInput
                                                        onChangeText={(text) => setState(old => ({ ...old, password: text }))}
                                                        style={styles.input}
                                                        placeholder={" Password"}
                                                        secureTextEntry={true}
                                                        showEyeIcon={true}
                                                />

                                        </View>

                                        <TouchableOpacity onPress={() => handleLogin()} >
                                                <View style={styles.Button}>
                                                        <Text style={{ color: '#fff', textAlign: 'center' }}
                                                        >Login</Text>


                                                </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => handleMasterLogin()} >
                                                <View style={[styles.Button,{ marginTop:20, backgroundColor:'red'}]}>
                                                        <Text style={{ color: '#fff', textAlign: 'center' }}
                                                        >Master Login</Text>


                                                </View>
                                        </TouchableOpacity>










                                </View>
                                <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => navigation.push('Register')}>
                                                <Text style={{ color: 'black' }}> Don't have Account?<Text style={{ color: 'red' }}>Register here</Text> </Text>
                                        </TouchableOpacity>
                                </View>
                                <Text style={{color:'black'}} onPress={()=>navigation.push('dynamicsimage')}>back</Text>
                        </View>
                        <View><Text style={styles.footer}> {'\u00A9'}copyright 2023 Primary Key technologies</Text></View>

                </View>

        )
}

export default login

const styles = StyleSheet.create({

        mainContainer: {
                paddingHorizontal: 30,
                padding: "27%",







        },
        inputContainer: {

                alignItems: 'center',
                justifyContent: 'center',
        },
        tinyLogo: {


                height: 50,
                alignContent: 'center',
                resizeMode: 'contain',
                top: 100




        },

        labelacc: {
                marginBottom: 25,
                marginHorizontal: 30,
                justifyContent: "space-between"
        },
        label: {
                //fontSize:18,
                color: "#7d7d7d",
                // padding:10,
                // margin:12,
                //marginTop:10,
                //marginBottom:5,
                // lineHeight:25,
                // left: "3%",
                width: '90%',

                fontFamily: "regular"
        },
        mainHeader: {
                fontSize: 23,
                fontWeight: "bold",
                textAlign: "center",
                //paddingTop:56,
                marginBottom: 20,

        },
        container: {

                // flex: 1,
                marginTop: 10,

                justifyContent: 'space-around',
        },
        Logo: {

                // margin:10,
                alignItems: 'center',
                // height:'20%'
        },
        checkboxContainer: {
                flexDirection: 'row',
                marginBottom: 20,
                textAlign: 'left'

        },

        labelc: {
                left: 30,
                fontSize: 15,
                color: 'red',
                margin: 2

                // paddingHorizontal: 30,


        },
        labelca: {
                margin: 2,
                fontSize: 15,
                left: 10,
        },
        input: {
                width: '90%',
                padding: 10,
                margin: 10,
                borderWidth: 1,
                backgroundColor: "#fffbfb",
                borderColor: "#F5F5F5",
                borderRadius: 5,




        },

        sgp: {
                fontWeight: "bold",
                left: 200,
                fontSize: 14,
                color: "red",
        },
        Checkbox: {
                margin: 10,
                // borderWidth:1,
                // padding:10,
                // backgroundColor:"#fffbfb",
                borderColor: "#F5F5F5",
                borderRadius: 14

        },
        Button: {
                borderRadius: 8,
                backgroundColor: '#0000FF',
                color: 'white',
                borderRadius: 10,
                padding: 10,


        },
        innerText: {
                color: "red"
        },
        footer: {
                textAlign: 'center',
                top: 70,
                fontSize: 15,
                fontWeight: 'bold',
                color: '#848884'
        }

});