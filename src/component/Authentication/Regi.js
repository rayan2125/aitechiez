import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View, ActivityIndicator, TouchableOpacity , Modal, FlatList, Alert, Dimensions } from 'react-native'
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
  const {height, width}= Dimensions.get('window')

const Register = ({navigation,navigate}) => {
    const [state, setState] = useState({
      


        
    })
    
    

    const apiCtrl = new Api
    const storageCtrl = new StorageController

const request=

{
    name:state.name,
    email:state.email,
    mobile:state.mobile,
    password:state.password,
    c_password:state.confirm_password,
    // role:state.role,
}


    const [value, setValue] = useState();
const [label, setLabel]=useState()
const lbl = label?.label??''
    // console.log("value",label )
    const [isFocus, setIsFocus] = useState(false);





    const [validation, setvalidation] = useState({

        name: { required: true, type: 'alpha' },
        mobile: { required: true, type: 'numeric' },
        email: { required: true, type: 'email' },
        password: { required: true, type: 'password' },
        confirm_password:{required:true, type:'password'},
        


    })
    const [cvisibile,setCVisible]=useState(true)
    
const [code, setCode]=useState('')

const compcode ={
    slug:code
}



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



        var count = 0;
        Object.entries(errors).map(([key, value]) => {
            if (value !== '') {
                count += 1;
            }
        })

        if(count>0){
            return false
        }
        
 
apiCtrl.callAxios(API_CONSTANTS.companydatacd, code).then(response=>{
    console.log("resss=>",response )
})
        apiCtrl.callAxios(API_CONSTANTS.userregister, request).then(res => {

          
          if (res.success == true) {
            storageCtrl.setItem('compnaydata',res.data)

            
            Alert.alert('Success', res.message, [  ,

              {
                text: 'Submit',
                onPress: () => {
                    
                //   navigation.push('Register'); // Go back to the previous screen
                }

              }


            ]);
            setState({})

          } else {

            console.log("ress=7777=>",res )
            Alert.alert('Fail', res.message, [

              ,
              { text: 'ok', onPress: () => navigation.navigate('Register') },


            ]);


          }





        })
    }



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

    // const codeVal=()=>{
    //     apiCtrl.callAxios(API_CONSTANTS.companycode,compcode ).then(res=>{
    //         console.log("res", res)
    //         if(res.success==true){
    //             Alert.alert('Success', res.message, [  ,

    //                 {
    //                   text: 'ok',
                     
      
    //                 }
      
      
    //               ]);
    //         }else{
    //             Alert.alert('Not a Match code', res.message,[
    //                 {
    //                     text: 'ok',
                        
        
    //                   }
    //             ])
    //         }
    //     })

    // }


    

//     const visible =()=>{
// setCVisible(false)
//     }
    return (<>


        <View style={{  flex:1,  }}>
            <View style={{height:height/32, width:width}}></View>
            
       <View style={{flex:1, justifyContent:'center',padding:10 }}>
        
       <View >
       <View>
                <View style={{backgroundColor:'#56AAFF', height:50, width:"100%",borderTopLeftRadius:60,borderTopRightRadius:60 ,top:1}}></View>
                        <View style={{borderColor:'#56AAFF', borderWidth:1 }}>
                        <View >
                            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:19}}> User Registration Form</Text>
                        </View>

                        <View style={{ padding:15,}}>
                            <View style={styles.input} >
                                {/* <Text>User  Name</Text> */}
                                <TextInput 
                                placeholder='User Name'
                                value={state.name}
                                placeholderTextColor="#56AAFF"
                                    onChangeText={(text) => handlechange({ name: "name", value: text })}
                                />
                            </View>
                            <Text style={{ color: "red" }}>{errors.name ? errors.name : ""}</Text>
                            <View  style={styles.input}>
                                
                                <TextInput 
                                placeholder='User Mobile'
                                value={state.mobile}
                                keyboardType={'numeric'}

                                maxLength={10}
                                placeholderTextColor="#56AAFF"
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
                                placeholderTextColor="#56AAFF"
                                    onChangeText={(text) => handlechange({ name: "email", value: text })}
                                />
                                
                            </View>
                            <Text style={{ color: "red" }}>{errors.email ? errors.email : ""}</Text>
                            <View  style={[styles.input,styles.row]}>
                                {/* <Text>User Password</Text> */}
                                <TextInput 
                                style={{width:'80%'}}
                                value={state.password}
                                placeholder='User Password'
                                placeholderTextColor="#56AAFF"
                                secureTextEntry={true}
                                    onChangeText={(text) => handlechange({ name: "password", value: text })}
                                />
                                {/* <Icon name='eye'/> */}
                            </View>
                            <Text style={{ color: "red" }}>{errors.password ? errors.password : ""}</Text>
                            <View  style={[styles.input,styles.row]}>
                                {/* <Text>Confirm Password</Text> */}
                                <TextInput 
                                style={{width:'80%'}}
                                placeholder='Confirm Password'
                                value={state.confirm_password}
                                placeholderTextColor="#56AAFF"
                                secureTextEntry={cvisibile}
                                    onChangeText={(text) => handlechange({ name: "confirm_password", value: text })}
                                />
                                {/* <TouchableOpacity onPress={visible}>

                                <Icon name='eye'/>
                                </TouchableOpacity> */}
                            </View>
                            <Text style={{ color: "red" }}>{errors.confirm_password ? errors.confirm_password : ""}</Text>

                            {/* <View style={{flexDirection:'row', textAlign:'center', justifyContent:'space-between', }}>
                                
                                <TextInput style={styles.input}
                                placeholder='Company Code'
                                placeholderTextColor="#56AAFF"
                                onChangeText={(text) => setCode(text)}
                                />
                                <TouchableOpacity onPress={codeVal}>

                                <Text> Verify code</Text>
                                </TouchableOpacity>
                            </View> */}
                            
                            <View>
                                
                                {/* <View style={{padding:10}} >
<Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Role' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setState(old=>({...old,role:item.value}));
            
            // console.log("abcfesd", item.label)
            
            setIsFocus(false);
          }}
          
            />
                                
                                </View> */}
                                
                                

                            

                                <View>
                                   
                                </View>

                            </View>
                            
                                <View style={{ justifyContent: 'center', alignItems: 'center',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 6,
                            },
                            shadowOpacity: 0.37,
                            shadowRadius: 7.84,
                            
                            elevation: 12,
                            }}>
                                    <TouchableOpacity style={[styles.Button, styles.green]} onPress={ submitdata}>
                                        <View style={{ height: 40, justifyContent: 'center',backgroundColor:'#56AAFF',top:15  ,width:"80%", borderRadius:17}}>

                                            <Text style={{ textAlign: 'center',  color: 'white', borderRadius: 20, fontWeight:'bold'}}>     Create Account     </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            



                            


                        </View>
                        </View>
                        <View style={{backgroundColor:'#56AAFF', height:50, width:"100%",borderBottomLeftRadius:60,borderBottomRightRadius:60 ,position:'relative', 
     top: 0,
     left: 0,
     bottom: 0,
     right: 0,
     
     }}></View>

       <View><Text style={styles.footer}> {'\u00A9'}copyright 2023 Aitechiez</Text></View>
       {/* <Footer/> */}
                    </View>
        
       </View>
      
       </View>
       <View>

       </View>
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
        borderBottomColor: '#56AAFF',
        borderBottomWidth: 1,
},
      footer: {
        textAlign: 'center',
        // backgroundColor:'white',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#848884'
},
row:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

}

})