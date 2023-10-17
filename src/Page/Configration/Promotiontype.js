import React,{useEffect, useState} from "react";
import { View ,Text,TouchableOpacity, ToastAndroid, ScrollView} from "react-native";
import { colors } from "../../assets/config/colors";
import AppHeader from "../../navigation/component/AppHeader/AppHeader";
import Api from "../../services/api";
import { API_CONSTANTS } from "../../assets/config/constants";
import { Modal } from "react-native";
import { TextInput } from "@react-native-material/core";

import Checknewdate from "../../Library/Checknewdate";
import SingleDropdown from "../SingleDropdown";
import ListingCard from "./ListingCard";
import LinearGradient from "react-native-linear-gradient";


const Promotiontype =()=>{

    const apiCtrl = new Api

    const [state,setState]=useState()
    const[market,setMarket] =useState(false)
    // const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState('');
   
    useEffect(()=>{
        Promotionactivite()
    },[])
    const Promotionactivite =()=>{
        
            apiCtrl.callAxios(API_CONSTANTS.promotioactivity, { length: '', start: 0, filter: '',  }).then(res => {
   
            const data = res.data.aaData
            
            setState(data)
              })
        
    }
    const changebg = (index) => {
      setSelectedItemIndex(index);
  };
    
    
    return(
        <>
        <AppHeader text="Promotion Type"
            bgColor={colors.orange}
            BackIcon="arrow-left"
            HeaderTxtColor={colors.HeaderTxtColor}
            onPress={() => navigation.navigate('Promotionactivite')}
          />
        

        <View style={{position:'relative',flex:1,padding:10}}>
            <ScrollView showsVerticalScrollIndicator={false}>

{
  state !== undefined &&
  state.map((it, index) => {
    

      return(
        <LinearGradient
colors={['rgba(248,129,88, 0.9)', 'rgba(248,182,88, 0.9)']} style={{elevation: 5,
  zIndex: 9,
  height: 100,
  borderRadius: 10,
  padding: 10,
  marginBottom: 10,
  top: 2,}}>

        
  <Text style={{color:"white", textAlign:'center', fontWeight:"bold"}}> Type:{it.type}</Text>
  <Line/>
        
</LinearGradient>
      )
    
  })
}
            </ScrollView>
            
         
            <TouchableOpacity style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end',bottom:20,right:30,}}
             onPress={()=>setMarket(true)}
            
            >

         
                < View style={{backgroundColor:'orange', height:40, width:40,borderRadius:99,justifyContent:'center',alignItems:'center',borderColor:'white',}}>

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

export default Promotiontype


 export const Line =()=>{
    return(
        <View style={{backgroundColor:'white',height:1,top:1}}></View>
    )
}


export const Form = (props) => {
  const apiCtrl = new Api();
  const [state, setState] = useState({
    type: ""
  });

  const Type = [
    { label: "Online", value: "1" },
    { label: "Offline", value: "2" },
  ];

  const handleType = (type) => {
    setState({ ...state, type });
  };

  const handleSubmit = () => {
    // Form validation
    if (!state.type) {
      ToastAndroid.show('Please Select type!!', ToastAndroid.SHORT);
      return;
    }

    // Call API to submit form data
    apiCtrl
      .callAxios(API_CONSTANTS.patypecreate, state)
      .then((res) => {
        console.log("API response", res);
        // Handle success or further actions
      })
      .catch((error) => {
        console.error("API error", error);
        // Handle error if needed
      });

    // Close the modal
    props.setact(false);
  };
    return(
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', padding: 10 }}>
      <View style={{ backgroundColor: '#F1D7C3', padding: 10, paddingVertical: 30, borderRadius: 10 }}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', marginBottom: 10, fontSize: 30 }}>Promotion Type</Text>
        </View>
        <View style={{ width: '100%', gap: 10 }}>
        < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' ,alignItems:'center'}}>
            <Text style={{ width: '30%', color: 'black' }}>Type:</Text>
            <SingleDropdown  data={Type}   label="Type" func={handleType}/>
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
