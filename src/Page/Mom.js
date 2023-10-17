import React, { useEffect, useState } from "react";
import { View,Text, TouchableOpacity } from "react-native";
// import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import MultiSelectDropDown from "../Library/MultiSelectDropDown";
import { useNavigation } from '@react-navigation/native';
import SingleDropdown from "./SingleDropdown";
import DateTimePicker from '@react-native-community/datetimepicker';
import NewDatepicker from "./NewDatepicker";

const Mom =({route})=>{
  

  const[state, setState]=useState({

  })

  const params = route?.params?.data;
  
    const navigation = useNavigation();
    // const [selectedDate, setSelectedDate] = useState(new Date());
const[isDropdownOpen,setIsDropdownOpen] = useState(false)
useEffect(()=>{
  setState({company_name:params})
},[route?.params?.data])
const showDrop =()=>{
    setIsDropdownOpen(true)
}

const handleDateChange = (event, selected) => {

  setShowPicker(false);
 
}
const productdata = [
  {label: 'HP', value:"1"},
  {label: 'Intel', value:"2"},
  {label: 'TATA', value:"3"},
  {label: 'WIPRO', value:"4"},
  {label: 'HITACHI', value:"5"},
];
const Attendees =[
  {label: 'Dhananjay', value:"1"},
  {label: 'Nikhil', value:"2"},
  {label: 'Ajay', value:"3"},
  {label: 'Swapnil', value:"4"},
  {label: 'Satyam', value:"5"},
]
const getvalue=(val)=>{
setState(old=>({...old,product:val}))
}
const goOnNextScreen =()=>{
  navigation.navigate("Boxes", state)
}


    return(

<View style={{justifyContent: 'center',  padding: 10 , position:'relative'}}>
<View style={{  padding: 10, paddingVertical: 30, borderRadius: 10,top:"30%"}}>
  <View style={{ width: '100%', gap: 10 }}>
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <Text style={{ width: '30%', color: 'black' ,}}>Product:</Text>

    
    <MultiSelectDropDown data={productdata} value={state.product?state.product:""} func={getvalue}/>

    </View>
    < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems:'center' }}>
      <Text style={{ width: '29%', color: 'black' }}>Company Name:</Text>
       <TextInput
      style={{width:'70%',}}
      editable={false}
      variant="outlined"
      
       >{params}</TextInput>
        
    
    </View>
    < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems:'center' }}>
      <Text style={{ width: '30%', color: 'black' }}>Attendees from the account:</Text>
      
      <SingleDropdown
      data={Attendees}
      func={getvalue}
      />
      
    </View>
    < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems:'center' }}>
      <Text style={{ width: '29%', color: 'black' }}>Date of Meeting:</Text>
       {/* <TextInput
      style={{width:'70%'}}
   
      variant="outlined"
      trailing={props=>(
        <IconButton icon={props=><Icon name="calendar-check"  color="blue" {...props}/>}{...props} onPress={showDrop} />
      )}
      
    >{}</TextInput> */}
    <View style={{width:'70%'}}>

    <NewDatepicker/>
    </View>
        {/* {
          isDropdownOpen && 
          <DateTimePicker

                    mode={"date"}
                    display={"default"}
                    value={selectedDate}
                    onChange={handleDateChange}
                />
        } */}
    
    </View>
    < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems:'center'  }}>
      <Text style={{ width: '29%', color: 'black' }}>Our Staff :</Text>
      

    <SingleDropdown/>
        
      
    </View>
  </View>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 18 }}>
    <TouchableOpacity onPress={() => navigation.navigate('Leadhistory')} style={{ width: '48%' }}>
      <View style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
        <Text style={{ color: 'white', fontWeight: "bold" }}>Cancel</Text>
      </View>
    </TouchableOpacity>
    
  <TouchableOpacity onPress={() => goOnNextScreen()} style={{ width: '48%' }}>
      <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
        <Text style={{ color: 'white', fontWeight: "bold" }}>Next</Text>
      </View>
    </TouchableOpacity>

  </View>
 

</View>

</View>
    )
}

export default Mom



