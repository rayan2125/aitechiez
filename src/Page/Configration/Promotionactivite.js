import { ScrollView, StyleSheet, Text, View,TouchableOpacity, Modal, Alert  } from 'react-native'
import React, { useEffect, useState } from 'react'


import Api from '../../services/api';
import { API_CONSTANTS } from '../../assets/config/constants';
import { FlatList } from 'react-native'

import AppHeader from '../../navigation/component/AppHeader/AppHeader';
import { colors } from '../../assets/config/colors';
import { Line } from './Promotiontype';
import { TextInput } from '@react-native-material/core';
import SingleDropdown from '../SingleDropdown';









export const Promotionactivite = ({ leadDatas, userData, Item, }) => {
    const [loader, setLoader] = useState(true)
    const apiCtrl = new Api

const[enquiryList,setgetenquiryList]=useState()
const [state,setState] =useState()

    const getenquiryList = () => {

        apiCtrl.callAxios(API_CONSTANTS.paacitivity, { length: "", start: 0, filter: '', enquiry_type: "" }).then(res => {

const data = res.data.aaData

            setgetenquiryList(data)
        })
    }

    useEffect(()=>{
        getenquiryList();
    },[])

const [market,setMarket]=useState(false)
    return (
        <>
        <AppHeader text="Promotion Activity"
            bgColor={colors.orange}
            BackIcon="arrow-left"
            HeaderTxtColor={colors.HeaderTxtColor}
            onPress={() => navigation.navigate('Promotionactivite')}
          />
          <ScrollView>

        <View style={{ padding: 5, marginBottom: 15, height:"100%",  }} >
            <View style={styles.contanier}>

                <View style={{ padding: 5 }} >




                    {/* {loader ? <View style={styles.loader}><ActivityIndicator size={50} animating={loader} style={{ color: colors.PRIMARY }} />
                        <Text>Please wait...</Text></View> : ""} */}




                    <FlatList
                        data={enquiryList}
                        renderItem={(Item, key) => {
                            console.log("Item", Item)
                            const item =Item.item
                            console.log("hh", item.assign_to)


                            {
                                return (


                                    <>
                                       <View style={{position:'relative',flex:1,padding:10,}}>
            <View style={{backgroundColor:'white', elevation:5,zIndex:9, borderRadius:10, padding:10,gap:10}}>
                
               < Text style={{color:'black',fontSize:18}}> Type :{item.type}</Text>
                <Line/>
               < Text style={{color:'black',fontSize:18}}> Mode :{item.mode}</Text>
                <Line/>
            
               
                

            </View>
            
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
          </ScrollView>
          <View>
          <TouchableOpacity style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end',bottom:20,right:30,}}
            
            onPress={()=>setMarket(true)}
        
            >

         
                < View style={{backgroundColor:'green', height:40, width:40,borderRadius:99,justifyContent:'center',alignItems:'center'}}>

<Text style={{color:'white',fontWeight:'bold',fontSize:30}}>+</Text>
            
            </View>
            </TouchableOpacity>
            <Modal transparent={true}
            visible={market}
            >
<Form setact={setMarket}/>
            </Modal>
          </View>
        </>
    )
}
export default Promotionactivite;
const styles = StyleSheet.create({

    contanier: {

        


    },
    rotate180: {
        transform: 'rotateZ(90deg)',
        animation: ' m 8s  linear',
        animationDelay: '-2s',
        transformOrigin: '50% 120.7%',
        transition: '2s'
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









 export const Form =(props)=>{
    const[state,setState]=useState()

    const Mode =[
        {label: 'SMS', value:"1"},
        {label: 'PPC', value:"2"},
      ]
      const Type =[
        {label: 'Online', value:"1"},
    {label: 'Offline', value:"2"},
   
      ]

    const handleSubmit =()=>{

    }
    return(
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', padding: 10 }}>
      <View style={{ backgroundColor: 'white', padding: 10, paddingVertical: 30, borderRadius: 10 }}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', marginBottom: 10, fontSize: 30 }}>Promotion Activity</Text>
        </View>
        <View style={{ width: '100%', gap: 10 }}>
        < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' ,alignItems:'center'}}>
            <Text style={{ width: '30%', color: 'black' }}>Type:</Text>
            <SingleDropdown  data={Type}   label="Type"/>
          </View>
          
          
            
            < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' ,alignItems:'center'}}>
            <Text style={{ width: '30%', color: 'black' }}>Mode:</Text>
            <SingleDropdown  data={Mode} label="Mode"/>
          </View>
          
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 18 }}>
          <TouchableOpacity onPress={handleSubmit} style={{ width: '48%' }}>
            <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
              <Text style={{ color: 'white', fontWeight: "bold", fontSize: 20 }}>Submit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  style={{ width: '48%' }} onPress={()=>props.setact(false)}>
            <View style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
              <Text style={{ color: 'white', fontWeight: "bold", fontSize: 20 }}>Cancel</Text>
            </View>
          </TouchableOpacity>

        </View>


      </View>

    </View>
    )
}




