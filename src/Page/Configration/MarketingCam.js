import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal, KeyboardAvoidingView, Dimensions, Alert,Animated } from 'react-native'
import React, { useEffect, useState } from 'react'


import Api from '../../services/api';
import { API_CONSTANTS } from '../../assets/config/constants';
import { FlatList } from 'react-native';
import { Line } from './Promotiontype';
import { colors } from '../../assets/config/colors';
import AppHeader from '../../navigation/component/AppHeader/AppHeader';
import { TextInput } from '@react-native-material/core';
import NewDatepicker from '../NewDatepicker';
import SingleDropdown from '../SingleDropdown';
import Checknewdate from '../../Library/Checknewdate';
import { ActivityIndicator } from 'react-native-paper';
import Check from '../Check';
import LinearGradient from 'react-native-linear-gradient';








export const MarketingCam = ({ leadDatas, userData, Item, }) => {
  const [loading, setLoading] = useState(false);
  const height = Dimensions.get('screen').height
  const apiCtrl = new Api

  const [enquiryList, setgetenquiryList] = useState()
  const [state, setState] = useState()
  const [market, setMarket] = useState(false)

  const getenquiryList = () => {
    // setLoading(true)
    apiCtrl.callAxios(API_CONSTANTS.campaign, { length: "", start: 0, filter: '', enquiry_type: "" }).then(res => {

      const data = res.data.aaData

      setgetenquiryList(data)
    })
  }

  useEffect(() => {
    getenquiryList();
  }, [])


  return (
    <>
      <AppHeader text="Marketing Campaign"
        bgColor={colors.orange}
        BackIcon="arrow-left"
        HeaderTxtColor={colors.HeaderTxtColor}
        onPress={() => navigation.navigate('Promotionactivite')}
      />
      <ScrollView>


        {loading ? (
          <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', height: "90%" }}>
            <View>

              <ActivityIndicator size={50} animating={loading} style={{ color: colors.PRIMARY }} />
              <Text>Please wait...</Text>
            </View>
          </View>
        ) :

          <View style={{ padding: 5, marginBottom: 15, height: "100%", backgroundColor: 'rgba(253,232,204,.6)' }} >
            <View style={styles.contanier}>

              <View style={{ padding: 5 }} >




                {/* {loader ? <View style={styles.loader}><ActivityIndicator size={50} animating={loader} style={{ color: colors.PRIMARY }} />
                        <Text>Please wait...</Text></View> : ""} */}




                <FlatList
                  data={enquiryList}
                  renderItem={(Item, key) => {

                    const item = Item.item



                    {
                      return (


                        <>
                          <View style={{ position: 'relative', flex: 1, padding: 10, height: '80%' }}>
                            <LinearGradient 
                            colors={['rgba(248,129,88, 0.9)', 'rgba(248,182,88, 0.9)']}
                            style={{ backgroundColor: 'white', elevation: 5, zIndex: 9, borderRadius: 10, padding: 10, gap: 10 }}>

                            <View >
                              <View style={styles.insidetxt}>

                              <Text style={styles.insideHandtype}>Assign Name :</Text>
                              <Text style={styles.insideApitype}>{item.assign_to}</Text>
                              </View>
                              <View style={styles.insidetxt}>

                              <Text style={styles.insideHandtype}>Type :</Text>
                              <Text style={styles.insideApitype}>{item.type}</Text>
                              </View>
                              <View style={styles.insidetxt}>

                              <Text style={styles.insideHandtype}>Mode :</Text>
                              <Text style={styles.insideApitype}>{item.mode}</Text>
                              </View>
                              <View style={styles.insidetxt}>

                              <Text style={styles.insideHandtype}>Title:</Text>
                              <Text style={styles.insideApitype}>{item.title}</Text>
                              </View>
                              <View style={styles.insidetxt}>

                              <Text style={styles.insideHandtype}>Date :</Text>
                              <Text style={styles.insideApitype}>{item.start_date}</Text>
                              </View>
                              
                              


                            </View>
                            </LinearGradient>

                          </View>
                        </>
                      )


                    }

                  }}
                  keyExtractor={(item, index) => index.toString()}

                />





              </View >

            </View>

          </View>
        }
      </ScrollView>
      <View>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', bottom: 20, right: 30, }}
          onPress={() => setMarket(true)}

        >


          < View style={{ backgroundColor: 'orange', height: 40, width: 40, borderRadius: 99, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>+</Text>

          </View>
        </TouchableOpacity>
      </View>
      <Modal transparent={true}
        visible={market}
      >

        
          <Form setact={setMarket} />
          
        
      </Modal>
    </>
  )
}
export default MarketingCam;
const styles = StyleSheet.create({

  insidetxt:{
flexDirection:'row', alignItems:'center',width:'100%'
  },
  insideHandtype:{
    color: 'white',fontWeight:"bold", fontSize: 18,textAlign:'center', width:'40%',
  },
  insideApitype:{
    color: 'white',fontWeight:"bold", fontSize: 18,textAlign:'left', width:'60%',
  },
  

  rotate0: {
    transform: 'rotateZ(0deg)',

    transition: '2s'
  },
  sliderShow: {
    opacity: 1,
  },
  sliderHide: {
    display: 'none',
    transition: ' opacity 3s',
    opacity: 0
  },

  insubContainer: {
    padding: 10,
    width: '85%',
  },
  txt: {
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold'

  },
  arrow: {
    // justifyContent:'flex-end',
    alignItems: 'flex-end',
    alignItems: 'center'

  },
  details: { margin: "5%", width: "100%" },
  loader: {

    justifyContent: 'center',
    alignItems: 'center',

    height: "90%",

  },
  textview: {
    width: '70%'
  },
  textinside: {
    color: 'black',
    fontWeight: 'bold',
    width: '30%',
    textAlign: 'left'
  },
  mainview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }
})

export const Form = (props) => {


  const apiCtrl = new Api

  const height = Dimensions.get('screen').height
  const [showForm, setShowForm] = useState(true);
  const [showCheckModal, setShowCheckModal] = useState(false);
  const scaleValue = useState(new Animated.Value(0))[0];
  const [bgColor,setBgColor]=useState('')
  

  useEffect(() => {
    if (showCheckModal) {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [showCheckModal]);



  const [state, setState] = useState({
    assign_to: '',
    type: '',
    mode: '',
    title: '',
    start_date: '',
    end_date: '',
    description: ''

  })
  // console.log("stae", state)
  const [errors, setErrors] = useState({
    assign_to: '',
    type: '',
    mode: '',
    title: '',
    start_date: '',
    end_date: '',
    description: ''
  });
 

  const Type = [
    { label: 'Online', value: "1" },
    { label: 'Offline', value: "2" },

  ]

  
  const user = [
    { label: 'Nikhil', value: "1" },
    { label: 'Dhananjay', value: "2" },

  ]

  const Mode = [
    { label: 'SMS', value: "1" },
    { label: 'PPC', value: "2" },
  ]
  const handleAssign = (assign_to) => {
    setState({ ...state, assign_to });
  }

  const handleStartDate = (selectedDate) => {

    setState({ ...state, start_date: selectedDate });

  };
  const handleEndDate = (selectedDate) => {

    setState({ ...state, end_date: selectedDate });


  };
  const handleType = (type) => {
    console.log("typpe", type)
    setState({ ...state, type });

  };



  const handleMode = (mode) => {
    setState({ ...state, mode });
  }
  const handleSubmit = () => {
    const validationErrors = {};

    if (!state.assign_to) {
      validationErrors.assign_to = 'Assign Name is required';
    }

    if (!state.type) {
      validationErrors.type = 'Type is required';
    }

    if (!state.mode) {
      validationErrors.mode = 'Mode is required';
    }

    if (!state.title) {
      validationErrors.title = 'Title is required';
    }

    if (!state.start_date) {
      validationErrors.start_date = 'Start Date is required';
    }

    if (!state.end_date) {
      validationErrors.end_date = 'End Date is required';
    }

    if (!state.description) {
      validationErrors.description = 'Description is required';
    }

    setErrors(validationErrors);

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length === 0) {
      const requestData = {
        assign_to: state.assign_to,
        type: state.type,
        mode: state.mode,
        title: state.title,
        start_date: state.start_date,
        end_date: state.end_date,
        description: state.description,
      };

      apiCtrl.callAxios(API_CONSTANTS.mcreateupate, { requestData }).then(res => {
        // console.log("res", res);
        setBgColor(res)
        setShowCheckModal(true);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
        
        // props.setact(false)
      });
    }
  };






  const handleCloseCheckModal = () => {
    setShowForm(true);
    props.setact(false)
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowCheckModal(false);
    });
  };

  return (

  <>
<ScrollView>
 

  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', padding: 15,  }}>
    <View style={{ backgroundColor: 'white', padding: 10, paddingVertical: 30, borderRadius: 10, margin:5 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontWeight: '600', textAlign: 'center', marginBottom: 10, fontSize: 30 }}>Marketing Campaign</Text>
      </View>
      <View style={{ width: '100%', gap: 5 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center',  }}>

          {/* <TextInput
            style={{ width: "100%" }}
            variant="outlined"
            label='Assign Name'
            onChangeText={(text) => setState({ ...state, assign_to: text })}
          /> */}
           <SingleDropdown data={user} label="Assign to" func={handleAssign}  />


        </View>
        <Text style={{ color: 'red' }}>{errors.assign_to}</Text>

        < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>

          <SingleDropdown data={Type} label="Type" func={handleType}  />
        </View>
        <Text style={{ color: 'red' }}>{errors.type}</Text>
       
        < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>

          <SingleDropdown data={Mode} label="Mode" func={handleMode} />
        </View>
        <Text style={{ color: 'red' }}>{errors.mode}</Text>

        < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>

          <TextInput style={{ width: "100%", }}
            variant="outlined"
            label='Title'
            onChangeText={(text) => setState({ ...state, title: text })}
            // onFocus={() => setTitleFocused(true)}
            // onBlur={() => setTitleFocused(false)}
          />
        </View>
        <Text style={{ color: 'red' }}>{errors.title}</Text>

        < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>

          <View style={{ width: '100%' }}>

            <Checknewdate onDateSelect={handleStartDate} />
          </View>


        </View>
        <Text style={{ color: 'red' }}>{errors.start_date}</Text>

        < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>

          <View style={{ width: '100%' }}>

            <Checknewdate onDateSelect={handleEndDate} />
          </View>

        </View>
        <Text style={{ color: 'red' }}>{errors.end_date}</Text>

        < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>

          <TextInput style={{ width: "100%", }}
            variant="outlined"
            label='Description'
            onChangeText={(text) => setState({ ...state, description: text })}
          />
        </View>
        <Text style={{ color: 'red' }}>{errors.description}</Text>

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 18 }}>
        <TouchableOpacity onPress={handleSubmit} style={{ width: '48%' }}>
          <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
            <Text style={{ color: 'white', fontWeight: "bold", fontSize: 20 }}>Submit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '48%' }} onPress={()=>props.setact(false)}>
          <View style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
            <Text style={{ color: 'white', fontWeight: "bold", fontSize: 20 }}>Cancel</Text>
          </View>
        </TouchableOpacity>

      </View>


    </View>

  
  </View>


{showCheckModal && (
<Animated.View
style={{
  backgroundColor:bgColor.success==='true'?'green':'red',
  position: 'absolute',
  top: '50%',
  left: '45%',
  borderRadius: 20,
  transform: [
    { translateX: -50 },
    { translateY: -50 },
    { scale: scaleValue },
  ],
  zIndex: 999,
  opacity: scaleValue,
}}>
<TouchableOpacity onPress={handleCloseCheckModal} style={{ height: 150, width: 150, borderRadius: 20 }}>
<Text style={{ color: 'white', textAlign: 'center' }}>{bgColor.success==='true'?'Sucess':'Fail'}</Text>
  
  
</TouchableOpacity>

</Animated.View>
)}
</ScrollView>


  </>  
      
      

    


  )
}

// export const  CheckSwal =()=>{
//   return(
//     <View style={{zIndex:99,bottom:"50%",position:"relative", right:20,margin:1}}>
// <View style={{}}>
//   <View style={{backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>

//   <Text style={{color:'black'}}>hii</Text>
//   </View>
// </View>
//         </View>
//   )
// } 












