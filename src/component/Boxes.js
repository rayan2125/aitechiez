import {View, Text, FlatList, Dimensions, TouchableOpacity,StyleSheet, Alert, ScrollView, ProgressBarAndroidComponent} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import { Image } from 'react-native-animatable';
import { Banner ,Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Datepicker from './DatePicker';
import MultiSelectDropDown from '../Library/MultiSelectDropDown';
import { Commands } from 'react-native-pager-view/lib/typescript/PagerViewNativeComponent';
const {height, width} = Dimensions.get('window');

export default function Boxes(props) {
  // console.log("props===", props.company_name)
  const [formArray, setFormArray] =useState([])


 
  useEffect(()=>{


    const{params}=props.route
    console.log('props',params.product)
    var form  =  []

params.product.length>0 && params.product.map((val,ind)=>{
  console.log("val", val)
form =[...form,<MutliFroms
data ={val}
/>]

console.log('form', form)
setFormArray([form]) 

})

  },[props.route])
  const addMore =()=>{
   
    setFormArray(old=>([...old,<MutliFroms/>]))
  }

console.log("state=",formArray)
 return(
   <>
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
<View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <Text style={{ width: '30%', color: 'black' ,}}>Product:</Text>

    
    {/* <MultiSelectDropDown data={data} func={getvalue} /> */}
    <TextInput
      style={{width:'70%'}}
    //   label="Label"
      variant="outlined"
      
    >{data}</TextInput>

    </View>

< View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems:'center'  }}>
      <Text style={{ width: '30%', color: 'black' }}>Discussion Points:</Text>
       <TextInput
      style={{width:'70%'}}
    //   label="Label"
      variant="outlined"
      
    />
        
    
    </View>
    < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems:'center' }}>
      <Text style={{ width: '30%', color: 'black' }}>Dependies:</Text>
       <TextInput
       multiline
       numberOfLines={4}
      style={{width:'70%'}}
    //   label="Label"
      variant="outlined"
      
    />
        
    
    </View>
    < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems:'center'  }}>
      <Text style={{ width: '30%', color: 'black' }}>Responsibility:</Text>
       <TextInput
      style={{width:'70%'}}
    //   label="Label"
      variant="outlined"
      
    />
        
    
    </View>
    < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' , alignItems:'center' }}>
      <Text style={{ width: '30%', color: 'black' }}>Timeline:</Text>
       <TextInput
      style={{width:'70%'}}
    //   label="Label"
      variant="outlined"
      trailing={props=>(
        <IconButton icon={props=><Icon name="calendar-check" {...props}/>}{...props}  onPress={showDatepicker}/>
      )}

      
    />

      {/* <Datepicker/>   */}
    
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
    <TouchableOpacity onPress={()=>navigation.navigate("Mom")} style={{ width: '30%' }}>
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
