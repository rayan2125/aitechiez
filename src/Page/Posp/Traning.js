import React, { useState }  from "react";

import { View, Text,Image, TouchableOpacity, Dimensions, ScrollView, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import AppHeader from "../../navigation/component/AppHeader/AppHeader";

const {height,width} = Dimensions.get('screen')


const Training = ()=>{
    const Data=[    
        {
        Title:'Heavy Vehicle Insurance',

    },
        {
        Title:'CAR Insurance'
    },
        {
        Title:'Heavy Vehicle Insurance'
    },
        {
        Title:'Heavy Vehicle Insurance'
    },
        {
        Title:'Heavy Vehicle Insurance'
    },
]
  return ( 
    <>
    <AppHeader
    bgColor="green"
    text="Course"/>
    <ScrollView>

<View>
      {
          Data.map((Item)=>{
              return(
                  <TrainingCard
                  title={Item.Title}/>
              )
          })
      }
      
  </View>
  </ScrollView>
    </>
    )

}
export default Training



 export const TrainingCard =({title})=>{
    const[expand,setExapand]=useState(false)
    const navigation= useNavigation()
    const handleChangeExpand=()=>{
setExapand(!expand)
    }
    return(
        <View style={{padding:10}}>
<View style={{backgroundColor:'white', elevation:5,zIndex:9,borderRadius:5}}>
<TouchableOpacity style={{ flex: 1,}} onPress={()=>navigation.navigate("PospVod")}>
    <ImageBackground source={{uri:"https://img.freepik.com/free-vector/e-learning-education-template-vector-technology-ad-banner_53876-125996.jpg"}} 
    resizeMode="cover"
    style={{ flex: 1, width: width-20,height:220}}
    
    >

    <View style={{backgroundColor:'#646566' ,justifyContent:'center',alignItems:'center',width:"50%",borderRadius:10,top:10,position:'absolute',left:5}}>

    <Text style={{fontWeight:'400',color:'#fff', }}>Assigned by :Pops</Text>
    </View>
    <View style={{backgroundColor:'red' ,position:'absolute',right:0,top:10,width:50,borderTopLeftRadius:10,borderBottomLeftRadius:10,height:25,justifyContent:'center'}}>
        <Text style={{color:'#fff',fontWeight:'bold',marginHorizontal:4}}>New</Text>
    </View>
    
   
    {/* <Image source={require('../Posp/traning.png')}
    resizeMode="contain"
    
    style={{height:height-500,width:width-20}}/> */}
</ImageBackground>
    </TouchableOpacity>
    <View style={{marginHorizontal:10,marginTop:10}}>

    <Text style={{color:'black', fontSize:30,fontWeight:'400'}}>{title}</Text>
    <Text>Time:2Hour</Text>
    <View style={{flexDirection:'row', gap:10}}>

    <Text>Total Marks:<Text style={{color:'green'}}>100</Text></Text>
    <Text>Passing:<Text style={{color:'red'}}>35</Text></Text>
    </View>
    <Text>Uploaded: 19-Jun-23</Text>
    <TouchableOpacity  onPress={handleChangeExpand}>
<Text>Previous Report</Text>
    </TouchableOpacity>
    {
        expand &&
        <View>
           < View style={{flexDirection:'row', gap:10}}>

<Text>Total Marks:100</Text>
<Text>Passing:35</Text>
</View>


    <Text>Exam Date & Time :</Text>
  
    </View>
        
    }
    </View>
    <View style={{backgroundColor:'grey',height:1,marginTop:10}}></View>
<View style={{marginBottom:10,marginTop:10, justifyContent:'center',alignItems:'center'}}>
<LinearGradient colors={['#FF7F00','#EB8D2F']} style={{width:"70%",height:50,borderRadius:10,justifyContent:'center',alignItems:'center',marginHorizontal:10,}}>

<TouchableOpacity style={{justifyContent:'center',marginHorizontal:20,alignItems:'center',marginHorizontal:10,}}>
    <Text style={{color:'#FFf',fontWeight:"500"}}>Start Module Training</Text>
</TouchableOpacity>
</LinearGradient>
</View>
</View>
        </View>
    )
}