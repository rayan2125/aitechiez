import React, { useEffect } from "react";
import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ToastAndroid, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppHeader from "../navigation/component/AppHeader/AppHeader";
import LinearGradient from "react-native-linear-gradient";

import * as Animatable from 'react-native-animatable';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Swal from "../Library/Swal";


const Payment = ({ navigation, route }) => {
  const [expandedForm, setExpandedForm] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const onData=()=>{
    setPopupVisible(true)
  }
  const PaymentForm = ({ label }) => {
    const [state, setState] = useState({
      cheque: {
        cheque_no:'',
        cheque_date: '',
        amount: '',
        photo: ''
      },
      cash: {
        amount: '',
        payment_date: ''
      },
      upi: {
        amount: '',
        payment_date: '',
        ref_no: '',
        screenshot: ''

      }
    })
    // console.log("satatta", state.screenshot)

    const [errors, setErrors] = useState({});

    const [validation, setValidation] = useState({
      cheque: {
        cheque_no: { required: true, type: 'AlphaNumeric' },
        cheque_date: { required: true },
        amount: { required: true, min: 2 },
        photo: { required: true }
      },
      cash: {
        amount: { required: true, min: 2 },
        payment_date: { required: true }
      },
      upi: {
        amount: { required: true, min: 2 },
        payment_date: { required: true },
        ref_no: { required: true },
        screenshot: { required: true}

      }
    })
    // console.log('cheque no', state)  


    const validator = () => {
      let error = {};
      Object.entries( state[label.toLowerCase()]).map(([fieldName, fieldValue]) => {
        // console.log('valiation', validation[fieldName], label.toLowerCase());
        // return false;
        if (typeof validation[label.toLowerCase()][fieldName] !== "undefined") {
          Object.entries(validation[label.toLowerCase()][fieldName]).map(([key, value]) => {

            let temp = fieldName.replace(/_/g, " ");
            var name = temp
              .toLowerCase()
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            var isValid = true;
            
            if (key === 'required') {
              if ((fieldValue.length == 0) || (fieldValue === '') || (fieldValue === null)) {
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
            if(isValid) {
              if(!error[fieldName]){
                error[fieldName] = '';
              }
            }
          })
          // this.setState(old=>({...old,errors:{ ...old.errors, ...error}})) 
          setErrors(old => ({ ...old, ...error }))
          console.log('error', error, state)
        }

      })

    }

    const [selectedImage, setSelectedImage] = useState('');

     
    const isExpanded = expandedForm === label;

    const toggleExpand = () => {
      if (isExpanded) {
        setExpandedForm(null);
      } else {
        setExpandedForm(label);
      }
    };
    //   const handleInputChange = (text) => {
    //     setState((prevState) => ({ ...prevState, cheque_no: text }));
    //   };
    // const [isPopupVisible, setPopupVisible] = useState(false);
    const Submithandle = () => {
      return validator();
     
      
    }
   

    const option = {
      mediaType: 'photo',
      quality: 1,
      //  includeBase64: true,
      saveToPhotos: true
    };

    
    // const Imageloader = ({ onPress, text, ondelete, source, key }) => {
    //   console.log('image Loader', source.uri)
    //   return (
    //     <View style={{ marginBottom: 10, height: 'auto', }} key={key}>

    //       <TouchableOpacity onPress={onPress} style={{ backgroundColor: state.photo ? 'transparent' : 'green', borderRadius: 10, }}>
    //         <View style={{ justifyContent: 'center' }}>

    //           {
    //             state.photo === '' ? (
    //               <View style={{ justifyContent: 'center', alignItems: 'center', height: 40 }}>

    //                 <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>{text}</Text>

    //               </View>
    //             ) : (
    //               <View style={{ height: 'auto' }}>
    //                 <TouchableOpacity onPress={ondelete} style={{ alignItems: 'flex-end', }}>


    //                   {/* <Icon name='circle-xmark' style={{ justifyContent: 'center' }} size={20} color="red" /> */}
    //                   <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 19 }}>X</Text>
    //                 </TouchableOpacity>
    //                 <View style={{ justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
    //                   <Image source={source} style={styles.image} />

    //                 </View>
    //               </View>
    //             )
    //           }

    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //   )
    // }
    const Imageloader = ({ onPress, text, ondelete, source, key, error = '' }) => {
      const hasPhoto = !!source.uri;

      return (
        <>
          <Text style={{ fontSize: 12, color: 'red' }}>{error}</Text>
          <View style={{ marginBottom: 10, height: 'auto' }} key={key}>
            <TouchableOpacity onPress={onPress} style={{ backgroundColor: hasPhoto ? 'transparent' : 'green', borderRadius: 10 }}>
              <View style={{ justifyContent: 'center' }}>
                {hasPhoto ? (
                  <View style={{ height: 'auto' }}>
                    <TouchableOpacity onPress={ondelete} style={{ alignItems: 'flex-end' }}>
                      <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 19 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
                      <Image source={source} style={styles.image} />
                    </View>
                  </View>
                ) : (
                  <View style={{ justifyContent: 'center', alignItems: 'center', height: 40 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>{text}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </>
      );
    };


    const openCamera = (payment_mode) => {
      launchCamera(option, (res) => {
        console.log('openCamera', res)
        if (res.didCancel) {
          toast('take a picture cancel');
        } else if (res.errorCode) {
          toast('error while open camera', res.errorCode);
        } else {
          const { uri, base64 } = res.assets[0];
          // console.log('uri', uri)
          // setState((old) => ({
          //   ...old, [payment_mode]: {
          //     ...old[payment_mode], image: `data:image/png;base64,${base64}`
          //   }
          // }))
          setState((prevState) => ({
            ...prevState,
            [label.toLowerCase()]:{
              ...prevState[label.toLowerCase()], photo: uri, 
            }
          }));
          setErrors((prevState) => ({
            ...prevState,
            payment_mode: uri,            
          }));
        }
      })
    }

    // const openGallery = (payment_mode) => {
    //   launchImageLibrary(option, (res) => {
    //     if (res.didCancel) {
    //       toast('take a picture cancel');
    //     } else if (res.errorCode) {
    //       toast('error while open camera', res.errorCode);
    //     } else {
    //       const { uri, base64 } = res.assets[0];
    //       console.log('uri', uri)
    //       setState((old) => ({
    //         ...old, [payment_mode]: {
    //           ...old[payment_mode], image: `data:image/png;base64,${base64}`
    //         }
    //       }))
    //       setState((prevState) => ({
    //         ...prevState,
    //         screenshot: uri
    //       }));
    //     }
    //   })
    // }

    const openGallery = (payment_mode) => {
      launchImageLibrary(option, (res) => {
        if (res.didCancel) {
          console.log('Open gallery cancelled');
        } else if (res.errorCode) {
          console.log('Error while opening gallery:', res.errorCode);
        } else {
          if (res.assets[0].uri) {
            // console.log("uri", uri)
            // setState((prevState) => ({
            //   ...prevState,
            //   [label.toLowerCase()]:{
            //     ...prevState[label.toLowerCase()], screenshot: uri,
                
            //   }
              
            // }));
            
            const uri = res.assets[0].uri
            setState((prevState) => ({
              ...prevState,
              [label.toLowerCase()]:{
                ...prevState[label.toLowerCase()], screenshot: uri,
                
              }
            
            }))
          } 
          
        

        }
       

      })
    }
    const removePhoto = () => {
      setState((prevState) => ({
        ...prevState,
        [label.toLowerCase()]:{
          ...prevState[label.toLowerCase()], photo: uri,
          
        }
      }));
    };

    const Submit = (props) => {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }} key={props.key}>
          <TouchableOpacity onPress={() => { Submithandle() }}>
            <View style={{ backgroundColor: '#2B4F09', width: 80, height: 40, justifyContent: 'center', borderRadius: 10 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    };
    



    const ImageUpload = ({ upload, name }) => {
      return (
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity onPress={upload} style={{ backgroundColor: 'green', borderRadius: 10 }}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={{ width: '100%', height: 'auto' }} >
        <TouchableOpacity onPress={() => toggleExpand()}>
          <LinearGradient
            colors={isExpanded ? ['#fff', '#C7C7C7',] : ['#3EA99F', '#3EA99F']}
            style={{ backgroundColor: '#3EA99F', height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{label}</Text>
          </LinearGradient>
        </TouchableOpacity>

        {isExpanded && (
          <View>
            {label.toLowerCase() === 'cheque' && (
              <Animatable.View
                animation="fadeInLeft"
                duration={1000}
                style={{}}>
                <Form title="Cheque No."
                  keyboardType='numeric'
                  value={state.cheque.cheque_no}
                  error={errors.cheque_no}
                  onChangeText={(text) => setState((prev) => ({
                    ...prev, cheque: {
                      ...prev.cheque, cheque_no: text
                    }
                  }))
                  } />
                <Form title="Cheque Date"
                  error={errors.cheque_date}
                  keyboardType='numeric'
                  onChangeText={(text) => setState((prev) => ({
                    ...prev, cheque: {
                      ...prev.cheque, cheque_date: text
                    }
                  }))
                  }
                />
                <Form title="Amount"
                  keyboardType='numeric'
                  error={errors.amount}
                  onChangeText={(text) => setState((prev) => ({
                    ...prev, cheque: {
                      ...prev.cheque, amount: text
                    }
                  }))
                  }
                />
                <Imageloader
                  text="Upload Cheque Image"
                  onPress={()=>openCamera('cheque')}
                  ondelete={removePhoto}
                  error={errors.photo}
                  source={{ uri: state.cheque.photo }}
                  key={'cheque'}
                />

                <Submit key={'cheque'} />
                {isPopupVisible && <Swal />}
              </Animatable.View>
            )}

            {label.toLowerCase() === 'cash' && (
              <Animatable.View
                animation="fadeInLeft"
                duration={1000}>
                <Form title="Amount"
                  keyboardType='numeric'
                  error={errors.amount}
                  onChangeText={(text) => setState((prev) => ({
                    ...prev, cash: {
                      ...prev.cash, amount: text
                    }
                  }))
                  }
                />
                <Form title="Payment Date"
                  label={label}
                  keyboardType='numeric'
                  error={errors.payment_date}
                  onChangeText={(text) => setState((prev) => ({
                    ...prev, cash: {
                      ...prev.cash, payment_date: text
                    }
                  }))
                  }
                />
                <Submit key={'cash'} />
              </Animatable.View >
            )}

            {label.toLowerCase() === 'upi' && (
              <Animatable.View
                animation="fadeInLeft"
                duration={1000}>
                <Form title="Amount"
                  error={errors.amount}
                  keyboardType='numeric'
                  onChangeText={(text) => setState((prev) => ({
                    ...prev, upi: {
                      ...prev.upi, amount: text
                    }
                  }))}
                />
                <Form title="Payment Date"
                  keyboardType='numeric'
                  error={errors.payment_date}
                  onChangeText={(text) => setState((prev) => ({
                    ...prev, upi: {
                      ...prev.upi, payment_date: text
                    }
                  }))} />
                <Form title="UTR/Ref No."
                  error={errors.ref_no}
                  onChangeText={(text) => setState((prev) => ({
                    ...prev, upi: {
                      ...prev.upi, ref_no: text
                    }
                  }))} />
                <Imageloader
                  text="Upload Payment Screenshot"
                  onPress={()=>openGallery('upi')}
                  ondelete={removePhoto}
                  error={errors.screenshot}
                  source={{ uri: state.upi.screenshot&&state.upi.screenshot }}

                />

                {/* <View>
                  <TouchableOpacity onPress={openGallery}>
                    <Text> open your Gallery</Text>
                  </TouchableOpacity>
                  <Image source={{ uri: state.screenshot }} />
                </View> */}
                <Submit key={'upi'} />

              </Animatable.View >
            )}
          </View>
        )}
      </View>
    );
  };

  const Form = ({ title, onChangeText, value, error = '', keyboardType }) => {
    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ textAlign: 'left', color: '#091002', marginBottom: 2 }}>{title}:  <Text style={{ fontSize: 12, color: 'red' }}>{error}</Text></Text>

          <TextInput style={{ borderWidth: 0.6, borderColor: '#1B4A46', width: '99%', borderRadius: 5 }}
            keyboardType={
              keyboardType
            }

            onChangeText={onChangeText}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <AppHeader
        text="Payment Mode"
        bgColor="#1B4A46"
        BackIcon="arrow-left"
        onPress={() => navigation.push('Societym')}
      />
      <ScrollView

      >



        <View style={{ padding: 10, gap: 20 }}>
          {/* <View style={{ backgroundColor: '#CAEBE8', height: 40, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Payment Amount 7888</Text>
          </View> */}

          <PaymentForm label="Cheque" />
          <PaymentForm label="Cash" />
          <PaymentForm label="UPI" />
        </View>
      </ScrollView>
    </>
  );
};

export default Payment;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
