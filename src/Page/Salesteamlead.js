import {
    TouchableOpacity, StyleSheet,
    Text, View, ToastAndroid,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView,
    TextInput,
    Platform
} from 'react-native'
import React, { useEffect, useState } from 'react'

import { ScrollView, RefreshControl } from 'react-native'
// import AppHeader from '../../navigation/component/AppHeader/AppHeader'
import Api from '../services/api'
import StorageController from '../services/storage'
import { API_CONSTANTS } from '../assets/config/constants'
import { colors } from '../assets/config/colors'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Costominput from '../Library/Costominput'
import Dropdown from '../Library/Dropdown'












const Salesteamlead = ({ navigation, route }) => {

    const [state, setState] = useState({

        organization_name: ' ',
        organization_email: ' ',
        contact_1: ' ',
        whatApps_number: ' ',
        address: ' ',
        pincode: ' ',
        state: ' ',
        city: ' ',
        district: ' ',
        organization_type: ' ',
        owner_name: ' ',
        email: ' ',
        contact: ' ',
        recruitment: ' '

    })
    // console.log("empty ", )
    const [validation, setvalidation] = useState({


        organization_name: { required: true, type: 'alpha' },

        organization_email: { required: true, type: 'email' },
        contact_1: { required: true, type: 'numeric' },
        // whatApps_number: { required: true, type: 'numeric' },
        // address: { required: true, type: 'alpha' },
        // pincode: { required: true, type: 'numeric' },
        // state: { required: true, type: 'alpha' },
        // city: { required: true, type: 'alpha' },
        // district: { required: true, type: 'alpha' },
        // organization_type: { required: true, type: 'alpha' },
        owner_name: { required: true, type: 'alpha' },
        // email: { required: true, type: 'email' },
        // contact: { required: true, type: 'numeric' },
    })
    const [errors, setErrors] = useState({})


    const apiCtrl = new Api
    const storageCtrl = new StorageController;




    const request = {
        enquiry_type: 'sales',
        status: " ",
        name: "Test  Admin",
        phone: '7754871087 ',
        email: ' dhananjay.s.dubey20125@gmail.com',
        state: ' 12',
        city: "82",
        data: {
            user: {
                enquiry_type: 'sales',
                name: "Test  Admin",
                phone: '7754871087 ',
                email: 'dhananjay.s.dubey20125@gmail.com ',
                state: ' 12',
            },
            organization: {
                organization_name: state.organization_name,
                organization_email: state.organization_email,
                contact_1: state.contact_1,
                whatApps_number: state.whatApps_number,
                address: state.address,
                pincode: state.pincode,
                state: state.state,
                city: state.city,
                district: state.city,
                organization_type: state.organization_type

            },
            owner: {
                owner_name: state.owner_name,
                email: state.email,
                contact: state.contact
            }
        }
    }
    const [open, setOpen] = useState();





    const submitdata = () => {
        let error = {};
        isValid = true;



        Object.entries(state).map(([fieldName, fieldValue]) => {

            if (typeof validation[fieldName] !== "undefined") {
                Object.entries(validation[fieldName]).map(([key, value]) => {

                    let temp = fieldName.replace(/_/g, " ");
                    var name = temp
                        .toLowerCase()
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');

                    if (key === 'required') {
                        if ((fieldValue.length < 0) || (fieldValue === ' ') || (fieldValue === null)) {
                            error[fieldName] = `${name} Field is required`
                            isValid = false;
                        }
                    } else if (key === 'min') {
                        if (fieldValue.length < value) {
                            error[fieldName] = `${name} Is Invalid`
                            isValid = false;
                        }
                    } else if (key === 'max') {
                        if (fieldValue.length > value) {
                            error[fieldName] = `${name} Is Invalid`
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
                        // else if (value === 'email') {
                        //   let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
                        //   if (!fieldValue.match(reg)) {
                        //     error[fieldName] = `${name} Is Invalid`
                        //     isValid = false;
                        //   }else if( value === 'name'){
                        //     let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
                        //     if(!fieldName.match(reg)){
                        //       error[fieldName] = `${name} Is Invalid`
                        //     isValid = false;
                        //     }
                        //   }

                        // }
                        else if (value === 'pan') {
                            let reg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
                            if (!fieldValue.match(reg)) {
                                error[fieldName] = `${name} Is Invalid`
                                isValid = false;
                            }
                        } else if (value == "aadhar") {
                            let reg = /(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/
                            if (!fieldValue.match(reg)) {
                                error[fieldName] = `${name} Is Invalid`
                                isValid = false;
                            }

                        } else if (value == "gst") {
                            let reg = /^[0-9]{2}[a-zA-Z]{3}[cphfatbljgCPHFATBLJG]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1}$/;
                            if (!fieldValue.match(reg)) {
                                error[fieldName] = `${name} Is Invalid`
                                isValid = false;
                            }

                        }



                    }
                    // if(isValid == true) {

                    //     error[fieldName] = '';
                    // }
                })

                setErrors(old => ({ ...old, ...error }))
            }

        })



        var count = 0;
        Object.entries(error).map(([key, value]) => {
            if (value !== '') {
                count += 1;
            }
        })


        if (count) {

            if (state.organization_email !== "") {

                if (state.contact_1 !== "") {
                    setErrors(old => ({
                        ...old,
                        contact_1: ""
                    }));
                    return false;
                }
            } else {

                if (state.contact_1 === "") {
                    setErrors(old => ({
                        ...old,
                        contact_1: ""
                    }));
                    return false;
                }
            }

            return false;
        }
        setLoader(true)

        apiCtrl.callAxios(API_CONSTANTS.airegister, request).then(res => {

            console.log('res====>>', res)
            if (res.success == true) {

                setLoader(false)
                Alert.alert('Success', res.message, [,

                    {
                        text: 'Submit',
                        onPress: () => {
                            setState('')

                        }

                    }


                ]);














            } else {


                Alert.alert('Fail', res.message, [

                    ,
                    { text: 'Submit', },


                ]);


            }





        })
    }



    const onBack = () => {
        navigation.navigate('dashboard')

    }
    const [editable, setEditable] = useState(false)
    const [editableC, setEditableC] = useState(false)
   
    const [loader, setLoader] = useState(false)
    const pincodeData = (pin) => {

        apiCtrl.callAxios(API_CONSTANTS.pincode, { pin_code: pin }).then(res => {
            console.log("response pincodedata=>", res)
            // if (res.success == true) {
            //     setErrors(old => ({ ...old, pincode: "" }))
            //     var citydata = ""
            //     res.data.city_or_village_name.map((val, key) => {
            //         //     console.log("val Village=>",val)
            //         citydata = val
            //     })

            //     setState(old => ({ ...old, city: citydata, state: res.data.state_name }))

            // } else {
            //     setErrors(old => ({ ...old, pincode: res.message }))
            // }
        })
    }
    const [refreshing, setRefreshing] = React.useState(false);
   
    const Fail = () => {

    }

/**
 *  drop down selection
 */
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    if(option==="Refal"){
        Alert.alert('ok')
    }
  };


  // lead sourceCode
  const sourceLead = ["Refal", "Google", "Facebook", "LinkedIn", "Walking","Campaign"];

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



    }

    const handlechange = ({ name, value }) => {
        validations(name, value)

    }

    const cancelbtn = () => {


        Alert.alert(
            'Cancel',
            'Are you sure you want to cancel?',
            [
                {
                    text: 'No',
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        navigation.push('dashboard');
                        setLoader(false)
                    }
                }
            ]
        );


    }
    const updateValidation = (email) => {
        if (!email) {

            setValidation((prevValidation) => ({
                ...prevValidation,
                contact_1: { required: true, type: 'numeric' },
            }));
        } else {

            setValidation((prevValidation) => ({
                ...prevValidation,
                contact_1: { required: false, type: 'numeric' },
            }));
        }
    };



    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
        setState({
            organization_name: ' ',
            organization_email: ' ',
            contact_1: ' ',
            whatApps_number: ' ',
            address: ' ',
            pincode: ' ',
            state: ' ',
            city: ' ',
            district: ' ',
            organization_type: ' ',
            owner_name: ' ',
            email: ' ',
            contact: ' ',
            recruitment: ' '
        });
        setErrors('')
    }, []);

    const onButtonClick = () => {
        setEditable(true);
    };

    const onButtonClickCon = () => {
        setEditableC(true)
    }

    return (
        <>
            < KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}


            >
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                >

                    <ScrollView style={{ flex: 1 }}


                    >



                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                            <View style={styles.inputContainer}>
                                <Text style={{ fontSize: 20, text: '500', textAlign: 'center' }}> Organization Details  </Text>

                                <View style={[styles.header, styles.headerButtom]}>


                                    <Text style={styles.label}>
                                        Organization Name*
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        // value={state.organization_name?state.organization_name:""}
                                        // onChangeText={(text) => setTotal(old => ({ ...old, organization_name: text }))}
                                        onChangeText={(text) => handlechange({ name: "organization_name", value: text })}
                                        maxLength={30}


                                    />
                                    <Text style={{ color: "red" }}>{errors.organization_name ? errors.organization_name : ""}</Text>
                                    <Text style={styles.label}>
                                        Organization Email*
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        // value={state.organization_email?state.organization_email:""}
                                        //  onChangeText={ (text)=>handlechange({name:"organization_name",value:text})}
                                        onChangeText={(text) => handlechange({ name: "organization_email", value: text })}
                                        keyboardType={'email-address'}


                                    />
                                    <Text style={{ color: "red" }}>{errors.organization_email ? errors.organization_email : ""}</Text>
                                    <Text style={styles.label}>
                                        Contact 1.:
                                    </Text>

                                    <TextInput
                                        style={styles.input}
                                        // value={state.contact_1?state.contact_1:""}
                                        keyboardType={'numeric'}

                                        maxLength={12}

                                        onChangeText={(text) => handlechange({ name: "contact_1", value: text })}

                                    />
                                    <Text style={{ color: "red" }}>{errors.contact_1 ? errors.contact_1 : ""}</Text>
                                    <Text style={styles.label}>
                                        WhatApps Number :
                                    </Text>

                                    <TextInput

                                        style={styles.input}
                                        // value={state.whatApps_number?state.whatApps_number:""}
                                        keyboardType={'numeric'}
                                        maxLength={10}


                                        onChangeText={(text) => handlechange({ name: "whatApps_number", value: text })}

                                    />
                                    <Text style={{ color: "red" }}>{errors.whatApps_number ? errors.whatApps_number : ""}</Text>

                                    <Text style={styles.label}>
                                        Address*
                                    </Text>
                                    <TextInput
                                        //  value={state.address?state.address:""}
                                        style={styles.input}
                                        numberOfLines={2}   // onChangeText={(text) => setTotal(old => ({ ...old, address: text }))}
                                        onChangeText={(text) => handlechange({ name: "address", value: text })} />

                                    {/* <Text style={{ color: "red" }}>{errors.pincode ? errors.pincode : ""}</Text> */}
                                    <Text style={styles.label}>
                                        Pincode*
                                    </Text>
                                    <TextInput
                                        //  value={state.pincode?state.pincode:""}
                                        style={styles.input}
                                        keyboardType={'numeric'}
                                        maxLength={6}  // onChangeText={(text) => setTotal(old => ({ ...old, pincode: text }))}
                                        onChangeText={(text) => handlechange({ name: "pincode", value: text })}


                                    />

                                    <Text style={styles.label}>  State* </Text>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>


                                    </View>


                                    <TextInput
                                        // value={state.state?state.state:""}
                                        style={styles.input}   // onChangeText={(text) => setTotal(old => ({ ...old, state: text }))}
                                        onChangeText={(text) => handlechange({ name: "state", value: text })} />




                                    {/* <Text style={{ color: "red" }}>{errors.state ? errors.state : ""}</Text> */}

                                    <Text style={styles.label}>
                                        City*
                                    </Text>
                                    <TextInput
                                        //  value={state.city?state.city:""}
                                        style={styles.input}

                                        // onChangeText={(text) => setTotal(old => ({ ...old, city: text }))}
                                        onChangeText={(text) => handlechange({ name: "city", value: text })}


                                    />
                                    {/* <Text style={{ color: "red" }}>{errors.city ? errors.city : ""}</Text> */}

                                    <Text style={styles.label}>
                                        District*
                                    </Text>
                                    <TextInput
                                        //  value={state.district?state.district:""}
                                        style={styles.input} // onChangeText={(text) => setTotal(old => ({ ...old, district: text }))}
                                        onChangeText={(text) => handlechange({ name: "district", value: text })}

                                    />

                                    {/* <Text style={{ color: "red" }}>{errors.district ? errors.district : ""}</Text> */}

                                    <Text style={styles.label}>
                                        Nature*
                                    </Text>
                                    <TextInput
                                        //  value={state.organization_type?state.organization_type:""}
                                        style={styles.input}
                                        // onChangeText={(text) => setTotal(old => ({ ...old, organization_type: text }))}
                                        onChangeText={(text) => handlechange({ name: "organization_type", value: text })}

                                    />
                                   

                                    <Text style={styles.label}>
                                    Requirement*
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        // value={state.recruitment?state.recruitment:""}
                                        // onChangeText={(text) => setTotal(old => ({ ...old, pincode: text }))}
                                        onChangeText={(text) => handlechange({ name: "recruitment", value: text })}

                                    />
                                    {/* <Text> Referred By</Text>
                                    <Dropdown/> */}
                                    {/* <Text style={{ color: "red" }}>{errors.organization_type ? errors.organization_type : ""}</Text> */}


                                </View>
                                <Text style={{ fontSize: 20, top: 40, textAlign: 'center' }}> Owner   </Text>
                                <View style={{ height: 50 }}></View>
                            
                                <View style={[styles.header, styles.headertop]}>
                                    <Text style={styles.label}>
                                        Name *
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        // value={state.owner_name?state.owner_name:""}
                                        // onChangeText={(text) => setTotal(old => ({ ...old, name: text }))}
                                        onChangeText={(text) => handlechange({ name: "owner_name", value: text })}

                                    />
                                    <Text style={{ color: "red" }}>{errors.owner_name ? errors.owner_name : ""}</Text>
                                    <Text style={[styles.label,]}>

                                        <Text>
                                            Email*
                                        </Text>
                                        <Text>{ }</Text>
                                        <TouchableOpacity style={{ left: 20 }}>
                                            <Icon name="edit" size={20} onPress={onButtonClick} style={{}} />
                                        </TouchableOpacity>
                                    </Text>

                                    <TextInput
                                        style={styles.input}
                                        editable={editable}
                                        // value={state.email?state.email:""}
                                        keyboardType={'email-address'}
                                        // onChangeText={(text) => setTotal(old => ({ ...old, email: text }))}
                                        onChangeText={(text) => handlechange({ name: "email", value: text })}

                                    >{state.organization_email}</TextInput>
                                    {/* <Text style={{color:"red"}}>{errors.email?errors.email:""}</Text> */}

                                    <Text style={[styles.label,]}>

                                        <Text>
                                            Contact*
                                        </Text>
                                        <Text>{ }</Text>
                                        <TouchableOpacity style={{ left: 20 }}>
                                            <Icon name="edit" size={20} onPress={onButtonClickCon} style={{}} />
                                        </TouchableOpacity>
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        maxLength={10}
                                        editable={editableC}

                                        keyboardType='numeric'
                                        // onChangeText={(text) => setTotal(old => ({ ...old, contact: text }))}
                                        onChangeText={(text) => handlechange({ name: "contact", value: text })}

                                    >{state.contact_1}</TextInput>
                                    {/* <Text style={{color:"red"}}>{errors.contact?errors.email:""}</Text> */}




                                </View>

                                {loader ? <View style={styles.loader}><ActivityIndicator size={50} animating={loader} style={{ color: colors.PRIMARY }} />
                                    <Text>Please wait...</Text></View> : ""}


                            </View>
                            <View >

                            </View>
                            <View style={styles.DataSubmit}>
                                <View>

                                    < View style={styles.widthButton} >
                                        <TouchableOpacity style={[styles.Button, styles.green]} onPress={() => submitdata()}>


                                            <Text style={{ color: "white", fontSize: 20, fontWeight: '600', textAlign: 'center', alignSelf: 'center' }} >Submit</Text>
                                        </TouchableOpacity >







                                        <TouchableOpacity style={[styles.Button, styles.red]}>
                                            <Text style={{ color: "white", fontSize: 20, fontWeight: '600', textAlign: 'center', verticalAlign: 'middle' }} onPress={() => cancelbtn()}>Cancel</Text>

                                        </TouchableOpacity >
                                    </View>
                                </View>



                            </View>
                        </View>





                        <View style={{ height: 40 }}></View>
                    </ScrollView>

                </ScrollView>
            </KeyboardAvoidingView>



        </>






    )
}

export default Salesteamlead

const styles = StyleSheet.create({

    inputContainer: {
        padding: 10,

    },
    label: {
        marginBottom: 2,
        padding: 2,
        top: 15,
        color: "black",
        left: "2%",
        fontFamily: "regular",
        fontWeight: 'bold'

    },
    widthButton: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },





    input: {


        margin: 6,

        padding: 4,

        borderBottomColor: 'black',
        borderBottomWidth: 0.5,

    },
    Button: {
        borderRadius: 20,
        fontSize: '15',


        color: "white",
        textAlign: 'center',
        width: "48%",
        margin: 2,
        padding: 2,



    },






    DataSubmit: {
        flexDirection: 'row',
        justifyContent: 'center',




    },
    headerButtom: {
        top: 20,

    },
    headertop: {
        height: "22%"
    },






    header: {
        borderColor: "black",
        borderWidth: 0.5,
        flexDirection: 'column',
        borderRadius: 10,
        padding: 10,



    },
    red: {
        backgroundColor: 'red',
        height: 40

    },
    green: {
        backgroundColor: "green",
        height: 40
    }
})