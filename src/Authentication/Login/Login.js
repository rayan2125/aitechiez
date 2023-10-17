
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
import Icon from 'react-native-vector-icons/FontAwesome5'
import Crypt from "../../Crypt/Crypt";



import React from 'react'
import { colors } from '../../assets/config/colors';
import Custom from '../../Page/Custom';
const Login = ({ navigation, route }) => {
    const [state, setState] = useState({
        email: "",
        password: ""

    })

    const [loader, setLoader] = useState(false)
    const [code, setCode] = useState('')
    const [keyPressed, setKeyPressed] = useState('');

    const { width, height } = Dimensions.get('window')
    const apiCtrl = new Api;
    const storageCtrl = new StorageController;
    const cryptCtrl = new Crypt

    useEffect(() => {
        setLoader(true)
        auth()
setLoader(false)
    }, [])

    const auth = () => {
        const request = { email: "test@admin.com", password: "U$er1234", "nonEncrypted": true }

        var encryptedData = cryptCtrl.encrypt(JSON.stringify(request));




        apiCtrl.callAxios(API_CONSTANTS.login, { request: encryptedData }, false).then(response => {
            // console.log("*-*-*-", request)
            console.log("ggd", response)
            // console.log('log res=====>', response)
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
        navigation.push('MainDashboard')
        // Alert.alert()

        setState({
                email:'test@admin.com',
                password:'U$er1234',

        })
        // setCode('uataitechi');
        handleLogin();
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


            var errData = response?.data?.status
            // console.log('errdata', errData)
            if (errData === 'error') {
                ToastAndroid.show('Please enter valid Company Code.', ToastAndroid.SHORT);
            } else {
                if (response.success ==='success') {
                    API_CONSTANTS.BASE_URL = `https://${response.data.data.website}/api`
                    // console.log("BASEURL======>", API_CONSTANTS)
                    // var baseUrl = API_CONSTANTS
                    // console.log("======>>>",baseUrl )
                    storageCtrl.setItem("compnay_data", response.data.data)
                    // console.log("adddd===>>",)
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

                        const request = { email: state.email, password: state.password, "nonEncrypted": true }
                        // console.log(request);
                        var encryptedData = cryptCtrl.encrypt(JSON.stringify(request));
                        // console.log('encry')



                        apiCtrl.callAxios(API_CONSTANTS.login, { request: encryptedData }, false).then(response => {
                            // console.log("*-*-*-", request)
                            // console.log("error log 1", response)
                            if (response.success) {
                                // console.log('res=>', response.data)
                                storageCtrl.setItem('token', response.data.access_token)

                                ToastAndroid.show('Login Success: ' + response.message, ToastAndroid.SHORT)
                                storageCtrl.setItem('user_details', JSON.stringify(response.data));
                                GLOBAL.userDetails = response.data.data;
                                // console.log('hi ')



                                // navigation.push('MainDashboard')
                            } else {
                                // console.log('hello ')
                                ToastAndroid.show('Login Error: ' + response.message, ToastAndroid.SHORT);
                                // console.log("====||===||", response)
                                navigation.push('MainDashboard')



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












    return (
        <>


            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>

                <TouchableWithoutFeedback >
                    <View style={styles.inner}>
                        <Text style={styles.header}>Login</Text>
                        <View>

                            <TextInput placeholder="Company Code" style={styles.textInput}
                                onChangeText={(text) => setCode(text)}

                            />
                            <TextInput placeholder="Email" style={styles.textInput}
                                onChangeText={(text) => setState(old => ({ ...old, email: text }))}
                            />
                            <TextInput placeholder="Password" style={styles.textInput}
                                onChangeText={(text) => setState(old => ({ ...old, password: text }))}
                            />
                            <View>

                                <TouchableOpacity onPress={() => navigation.push('Forgot')}>

                                    <Text style={{ textAlign: 'right', color: 'black', right: 8, bottom: 10 }}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => handleLogin()} >
                                    <View style={[styles.Button, { backgroundColor: '#f70072', }]}>
                                        <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', }}>
                                <TouchableOpacity onPress={() => navigation.push('Register')}>
                                    <Text style={{ color: 'black',top:10 }}> Don't have an Account? <Text style={{ color: colors.SECONDARY }}>Register here</Text> </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => handleMasterLogin()} >
                                    <View style={[{ marginTop: 20, backgroundColor: '#f70072', height: 30, width: 30, borderRadius: 99 }]}>
                                        <Icon name='vial' style={{ flex: 1, justifyContent: 'center', top: 10, left: 8 }} color="white" />

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View >

                            <View style={styles.footer}><Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }} > {'\u00A9'}copyright 2023 Primary Key technologies</Text></View>


                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            

            {/* <View style={{ flex: 1, justifyContent: 'center' }}>
                <View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 35, color: 'black', padding: 5 }}>Login</Text>
                    </View>
                    <View style={{ padding: 15, }}>
                        <View style={{ marginBottom: 10 }}>
                            <View style={styles.input}>
                                <TextInput
                                    onChangeText={(text) => setCode(text)}
                                    placeholder={"Company Code"}
                                />
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

export default Login

const styles = StyleSheet.create({


    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },


    footer: {
        top: 30,
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
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
        color: 'black',
        textAlign: 'left'
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
});