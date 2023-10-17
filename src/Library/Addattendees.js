// import { TextInput } from "@react-native-material/core";
// import React ,{useState }from "react";
// import { View,Text,TouchableOpacity, ScrollView } from "react-native";
// const Addattendees =()=>{


//     const [formArray, setFormArray] =useState(<From/>)
//     const addMore =()=>{

   
//         setFormArray(old=>([...old,formArray]))
//       }
//     return(
//         <View>
//             <ScrollView>

//             {formArray}
//             </ScrollView>
//             <Footer add={addMore}/>
//             {/* <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>

//             </View> */}
//         </View>
//     )
// }
// export default Addattendees;




// const From =()=>{

//     return(
//         <View style={{padding:10}}>
//             <View style={{flexDirection:'row', width:'100%',alignItems:'center'}}>
//                 <Text style={{width:'30%'}}>Name</Text>
//                 <TextInput
//                 variant="outlined"
//                 style={{width:'70%'}}
//                 />
//             </View>
//             <View style={{flexDirection:'row', width:'100%',alignItems:'center'}}>
//                 <Text style={{width:'30%'}}>Email</Text>
//                 <TextInput
//                 variant="outlined"
//                 style={{width:'70%'}}
//                 />
//             </View>
//             <View style={{flexDirection:'row', width:'100%',alignItems:'center'}}>
//                 <Text style={{width:'30%'}}>Phone</Text>
//                 <TextInput
//                 variant="outlined"
//                 style={{width:'70%'}}
//                 />
//             </View>
//             <View style={{flexDirection:'row', width:'100%',alignItems:'center'}}>
//                 <Text style={{width:'30%'}}>Designation</Text>
//                 <TextInput
//                 variant="outlined"
//                 style={{width:'70%'}}
//                 />
//             </View>
//         </View>
//     )
// }

// const Footer = (props) => {
//     // const navigation = useNavigation();
   
//     return (
//         <View >

//       <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 18, backgroundColor:'rgba(0,0,0,.2)', height:60, alignItems:'center' }}>
//       <TouchableOpacity onPress={()=>navigation.navigate("Mom")} style={{ width: '30%' }}>
//         <View style={{ backgroundColor: 'rgba(255,77,77,.8)', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
//           <Text style={{ color: 'white', fontWeight: "bold" }}>Back</Text>
//         </View>
//       </TouchableOpacity>
      
//     <TouchableOpacity  style={{ width: '30%' }}>
//         <View style={{ backgroundColor: 'rgba(123,189,119,.8)', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
//           <Text style={{ color: 'white', fontWeight: "bold" }}>Submit</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity  style={{ width: '30%' }} onPress={()=>props.add()}>
//         <View style={{ backgroundColor: 'rgba(2,112,186,.8)', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
//           <Text style={{ color: 'white', fontWeight: "bold" }}>Add More</Text>
//         </View>
//       </TouchableOpacity>
  
//     </View>
//         </View>
//     );
//   };



import {View, Text, FlatList, Dimensions, TouchableOpacity,StyleSheet, Alert, ScrollView, ProgressBarAndroidComponent} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import { Image } from 'react-native-animatable';
import { Banner ,Button} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5'
import { Stack, TextInput, IconButton } from "@react-native-material/core";

import MultiSelectDropDown from '../Library/MultiSelectDropDown';
import { Commands } from 'react-native-pager-view/lib/typescript/PagerViewNativeComponent';
import AppHeader from '../navigation/component/AppHeader/AppHeader';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../assets/config/colors';
const {height, width} = Dimensions.get('window');


export default function Addattendees(props) {

  // console.log("props===", props.company_name)
  const [formArray, setFormArray] =useState([])


 
  useEffect(()=>{


    
    
    var form  =  []
    form =[...form,<MutliFroms
    // data ={val}
    />]
    
    
    setFormArray([form]) 



  },[])
  const addMore =()=>{
   
    setFormArray(old=>([...old,<MutliFroms/>]))
  }
  const onBack =()=>{
    navigation.navigate
  }


// console.log("state=",formArray)
 return(
   <>
     <AppHeader text="Add Attendees"
        bgColor={colors.orange}
        BackIcon="arrow-left"
        HeaderTxtColor={colors.HeaderTxtColor}
        onPress={() => onBack()}
      />
   <ScrollView>

  <View style={{ flex: 1 , backgroundColor:'rbga(0,0,0,.6)', justifyContent:'center', alignItems:'center'}}>
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   {formArray}
        
      </View>
      </View>
   </ScrollView>
      <Footer add={addMore}/>
   </>
 )
}

 export const MutliFroms =(props)=>{
  const{data}=props
  // console.log("products", data)
  const navigation = useNavigation();

   const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
  const showDatepicker = () => {
    setShowPicker(true);
};
const productdata=()=>{

}

const getvalue=()=>{

}
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
    
<View style={{  justifyContent: 'center',  padding: 10 }}>
<View style={{  padding: 10, paddingVertical: 30, borderRadius: 10, position:'relative',  borderColor:'black', borderWidth:1 }}>

<View style={{padding:10, paddingVertical:10, gap: 10}}>


    <View style={{flexDirection:'row', width:'100%',alignItems:'center'}}>
                 <Text style={{width:'30%'}}>Name</Text>
                 <TextInput
                 variant="outlined"
                 style={{width:'70%'}}
                 />
            </View>
            <View style={{flexDirection:'row', width:'100%',alignItems:'center'}}>
                <Text style={{width:'30%'}}>Email</Text>
                <TextInput
                variant="outlined"
                style={{width:'70%'}}
                />
            </View>
            <View style={{flexDirection:'row', width:'100%',alignItems:'center'}}>
                <Text style={{width:'30%'}}>Phone</Text>
                <TextInput
                variant="outlined"
                style={{width:'70%'}}
                />
            </View>
            <View style={{flexDirection:'row', width:'100%',alignItems:'center'}}>
                <Text style={{width:'30%'}}>Designation</Text>
                <TextInput
                variant="outlined"
                style={{width:'70%'}}
                />
            </View>
</View>



  
  </View>
  
  </View>


    </>

  );
 }
 const Footer = (props) => {
  const navigation = useNavigation();
 
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 18, backgroundColor:'rgba(0,0,0,.2)', height:60, alignItems:'center' }}>
    <TouchableOpacity onPress={()=>navigation.navigate("Leadhistory")} style={{ width: '30%' }}>
      <View style={{ backgroundColor: 'rgba(255,77,77,.8)', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
        <Text style={{ color: 'white', fontWeight: "bold" }}>Back</Text>
      </View>
    </TouchableOpacity>
    
  <TouchableOpacity  style={{ width: '30%' }}>
      <View style={{ backgroundColor: 'rgba(123,189,119,.8)', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
        <Text style={{ color: 'white', fontWeight: "bold" }}>Submit</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity  style={{ width: '30%' }} onPress={()=>props.add()}>
      <View style={{ backgroundColor: 'rgba(2,112,186,.8)', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
        <Text style={{ color: 'white', fontWeight: "bold" }}>Add More</Text>
      </View>
    </TouchableOpacity>

  </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})