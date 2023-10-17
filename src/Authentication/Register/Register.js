import React, { useEffect, useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    ActivityIndicator,
    TouchableOpacity,
    Modal,
    FlatList,
    Alert,
    Dimensions,
    ToastAndroid
} from 'react-native'
import AppHeader from '../../navigation/component/AppHeader/AppHeader'
import Api from '../../services/api'
import { API_CONSTANTS } from '../../assets/config/constants'

import StorageController from '../../services/storage'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../assets/config/colors'
import { Dropdown } from 'react-native-element-dropdown';
// import Footer from '../../Library/Footer'



// const data = [
//     { label: 'Services', value: 'Services' },
//     { label: 'Management', value: 'Management' },

//   ];
const { height, width } = Dimensions.get('window')

const Register = ({ navigation, navigate }) => {
    const [state, setState] = useState({




    })



    const apiCtrl = new Api
    const storageCtrl = new StorageController

    const request =

    {
        name: state.name,
        email: state.email,
        mobile: state.mobile,
        password: state.password,
        c_password: state.confirm_password,
        // role:state.role,
    }


    const [value, setValue] = useState();
    const [label, setLabel] = useState()
    const lbl = label?.label ?? ''
    // console.log("value",label )
    const [isFocus, setIsFocus] = useState(false);





    const [validation, setvalidation] = useState({

        name: { required: true, type: 'alpha' },
        // company_code:{required:true, },
        mobile: { required: true, type: 'numeric' },
        email: { required: true, type: 'email' },
        password: { required: true, type: 'password' },
        confirm_password: { required: true, type: 'password' },



    })
    const [cvisibile, setCVisible] = useState(true)

    const [code, setCode] = useState('')





    const [errors, setErrors] = useState({})
    const submitdata = () => {

        let errors = {};

        isValid = true;

        Object.entries(validation).map(([fieldName, value]) => {
            fieldValue = (typeof state[fieldName] !== 'undefined') ? (state[fieldName] !== null ? state[fieldName] : "") : '';
            // console.log("fieldValue=>", fieldValue)
            if (typeof validation[fieldName] !== "undefined") {
                Object.entries(validation[fieldName]).map(([key, value]) => {
                    let temp = fieldName.replace(/_/g, " ");
                    var name = temp
                        .toLowerCase()
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');

                    if (key === 'required') {
                        if (((fieldValue.length < 0) || (fieldValue === '') || (fieldValue === null)) && (value)) {
                            errors[fieldName] = `${name} Field is required`
                            isValid = false;
                        }
                    }
                    if (isValid) {

                        errors[fieldName] = '';
                    }

                })
                // console.log("erroe=>",errors)    
                setErrors(old => ({ ...old, ...errors }))
            }

        })

        if (code === "") {
            ToastAndroid.show('Please Enter Company Code.', ToastAndroid.SHORT);
            return false;
        }
        apiCtrl.callAxiosGet(`${API_CONSTANTS.companydatacd}/${code}`).then(response => {
            // console.log("resss=>", response)
            var errData = response?.data?.status
            if (errData === 'error') {
                ToastAndroid.show('Please enter valid Company Code.', ToastAndroid.SHORT);
            } else {
                var count = 0;
                Object.entries(errors).map(([key, value]) => {
                    if (value !== '') {
                        count += 1;
                    }
                })
                if (count > 0) {
                    return false
                }
                apiCtrl.callAxios(API_CONSTANTS.userregister, request).then(res => {


                    if (res.success == true) {
                        storageCtrl.setItem('compnaydata', res.data)


                        Alert.alert('Success', res.message, [,

                            {
                                text: 'Submit',
                                onPress: () => {

                                    //   navigation.push('Register'); // Go back to the previous screen
                                }

                            }


                        ]);
                        setState({})
                        setCode('')

                    } else {

                        // console.log("ress=7777=>", res)
                        Alert.alert('Fail', res.message, [

                            ,

                            { text: 'ok', onPress: () => navigation.navigate('Register') },


                        ]);


                    }





                }
                )
            }

        })









    }

    // setCode('')

    const validations = (fieldName, fieldValue) => {

        let error = {}
        let isValid = true;
        let isMax = 1000;
        if (typeof validation[fieldName] !== "undefined") {
            Object.entries(validation[fieldName]).map(([key, value]) => {

                let temp = fieldName.replace(/_/g, " ");
                var name = temp
                    .toLowerCase()
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');

                if (key === 'required') {
                    if ((fieldValue.length < 0) || (fieldValue === '') || (fieldValue === null)) {
                        error[fieldName] = `${name} Field is required`
                        isValid = false;
                    }
                } else if (key === 'min') {
                    if (fieldValue.length < value) {
                        error[fieldName] = `${name} Is Valid`
                        isValid = false;
                    }
                } else if (key === 'max') {
                    if (fieldValue.length > value) {
                        error[fieldName] = `${name} Is Valid`
                        isMax = value;
                        isValid = false;
                    }
                } else if (key === 'type') {
                    if (value === 'alpha') {
                        if (!fieldValue.match(/^[A-Za-z\s]*$/)) {
                            error[fieldName] = `${name} Is Invalid`
                            isValid = false;
                        }
                    } else if (value === 'AlphaNumeric') {
                        if (!fieldValue.match(/^[A-Za-z0-9,-.\s]*$/)) {
                            error[fieldName] = `${name} Is Invalid`
                            isValid = false;
                        }
                    } else if (value === 'Numeric') {
                        if (!fieldValue.match(/^[0-9]*$/)) {
                            error[fieldName] = `${name} Is Invalid`
                            isValid = false;
                        }
                    }
                    else if (value === 'email') {
                        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
                        if (!fieldValue.match(reg)) {
                            error[fieldName] = `${name} Is Invalid`
                            isValid = false;
                        }
                    }






                    //   else if( value === 'name'){
                    //     let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;

                    //   }
                    // }
                    // else if (value === 'pan') {
                    //   let reg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
                    //   if (!fieldValue.match(reg)) {
                    //     error[fieldName] = `${name} Is Valid`
                    //     isValid = false;
                    //   }
                    // } else if (value == "aadhar") {
                    //   let reg = /(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/
                    //   if (!fieldValue.match(reg)) {
                    //     error[fieldName] = `${name} Is Valid`
                    //     isValid = false;
                    //   }

                    // } else if (value == "gst") {
                    //   let reg = /^[0-9]{2}[a-zA-Z]{3}[cphfatbljgCPHFATBLJG]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1}$/;
                    //   if (!fieldValue.match(reg)) {
                    //     error[fieldName] = `${name} Is Invalid`
                    //     isValid = false;
                    //   }

                    // }


                }
                if (isValid == true) {

                    error[fieldName] = '';
                }
            })
            // setvalidation(old=>({...old,errors:{ ...old.errors, ...error}})) 
            // this.setState(old=>({...old,errors:{ ...old.errors, ...error}})) 
            setErrors(old => ({ ...old, ...error }))
        }
        if (fieldName == 'organization_email') {
            setErrors(old => ({ ...old, contact_1: "" }))
            setState(old => ({ ...old, [fieldName]: fieldValue }))

        } else if (fieldName == "contact_1") {
            setErrors(old => ({ ...old, organization_email: "" }))
            setState(old => ({ ...old, [fieldName]: fieldValue }))
        } else if (fieldName == "pincode") {
            setState(old => ({ ...old, [fieldName]: fieldValue }))
            pincodeData(fieldValue)

        } else {
            setState(old => ({ ...old, [fieldName]: fieldValue }))
        }


        // Alert.alert('Alert Title', 'My Alert Msg', [
        //   {
        //     text: 'Cancel',
        //     onPress: () => console.log('Cancel Pressed'),
        //     style: 'cancel',
        //   },
        //   {text: 'OK', onPress: () => console.log('OK Pressed')},
        // ]);
    }

    const handlechange = ({ name, value }) => {
        // console.log("name=>", name, "value=>", value)
        validations(name, value)

    }


    return (<>


        <View style={{ width: width, height: height, justifyContent: 'space-between' }}>


            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>


                <View>

                    <View >
                        <View >
                            <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 25, color: 'black' }}>  Register Here</Text>
                        </View>

                        <View style={{ padding: 15, }}>
                            <View style={styles.input}>

                                <TextInput
                                    placeholder='Company Code'
                                    // placeholderTextColor="#56AAFF"
                                    value={code}
                                    onChangeText={(text) => setCode(text)}
                                />

                            </View>
                            <Text style={{ color: "red" }}>{errors.company_code ? errors.company_code : ""}</Text>
                            <View style={styles.input} >
                                {/* <Text>User  Name</Text> */}
                                <TextInput
                                    placeholder='User Name'
                                    value={state.name}
                                    // placeholderTextColor="#56AAFF"
                                    onChangeText={(text) => handlechange({ name: "name", value: text })}
                                />
                            </View>
                            <Text style={{ color: "red" }}>{errors.name ? errors.name : ""}</Text>
                            <View style={styles.input}>

                                <TextInput
                                    placeholder='User Mobile'
                                    value={state.mobile}
                                    keyboardType={'numeric'}

                                    maxLength={10}
                                    // placeholderTextColor="#56AAFF"
                                    onChangeText={(text) => handlechange({ name: "mobile", value: text })}
                                />
                            </View>
                            <Text style={{ color: "red" }}>{errors.mobile ? errors.mobile : ""}</Text>
                            <View style={styles.input} >
                                {/* <Text> User Email</Text> */}
                                <TextInput
                                    placeholder='User Email'
                                    value={state.email}
                                    keyboardType={'email-address'}
                                    // placeholderTextColor="#56AAFF"
                                    onChangeText={(text) => handlechange({ name: "email", value: text })}
                                />

                            </View>
                            <Text style={{ color: "red" }}>{errors.email ? errors.email : ""}</Text>
                            <View style={[styles.input, ]}>
                                {/* <Text>User Password</Text> */}
                                <TextInput

                                    value={state.password}
                                    placeholder='User Password'
                                    // placeholderTextColor="#56AAFF"
                                    secureTextEntry={true}
                                    onChangeText={(text) => handlechange({ name: "password", value: text })}
                                />
                                {/* <Icon name='eye'/> */}
                            </View>
                            <Text style={{ color: "red" }}>{errors.password ? errors.password : ""}</Text>
                            <View style={[styles.input, ]}>
                                {/* <Text>Confirm Password</Text> */}
                                <TextInput

                                    placeholder='Confirm Password'
                                    value={state.confirm_password}
                                    // placeholderTextColor="#56AAFF"
                                    secureTextEntry={cvisibile}
                                    onChangeText={(text) => handlechange({ name: "confirm_password", value: text })}
                                />
                                {/* <TouchableOpacity onPress={visible}>

                                <Icon name='eye'/>
                                </TouchableOpacity> */}
                            </View>
                            <Text style={{ color: "red" }}>{errors.confirm_password ? errors.confirm_password : ""}</Text>

                            <View>
                                <View>
                                    <TouchableOpacity onPress={() => submitdata()} >
                                        <View style={[styles.Button, { marginTop: 20, backgroundColor: '#f70072' }]}>
                                            <Text style={{ color: '#fff', textAlign: 'center' }} >Register</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={{ alignItems: 'center', }}>
                                <TouchableOpacity onPress={() => navigation.push('login')}>
                                    <Text style={{ color: 'black', top:10 }}> Already have an Account?<Text style={{ color: colors.PRIMARY }}>Login here</Text> </Text>
                                </TouchableOpacity>
                            </View>







                        </View>
                    </View>




                </View>

            </View>


            <View>

            </View>
            <View><Text style={styles.footer}> {'\u00A9'}copyright 2023 Aitechiez</Text></View>
        </View>




    </>




    )
}

export default Register

const styles = StyleSheet.create({


    Button: {
        height: 50,
        borderRadius: 20,
        fontSize: '15',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7
    },
    footer: {

        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    Button: {

        fontSize: '15',

        padding: 10,
        color: "white",
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 7




    },

})