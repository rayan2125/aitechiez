import { View,  StyleSheet,Text ,Touchable, TouchableOpacity } from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome5'
import { $, jQuery } from 'react-native-jquery';

import React, { useState } from 'react'

import { colors } from '../../../assets/config/colors'





const Bottom = ({navigation,onPress,text ,bgColor,HeaderTxtColor,BackIcon, Search,Filter}) => {
  const [collapse, setCollapse] = useState(false)
  
 

  return (
    <>
    <View style={{flex:1,padding:5,borderBottomEndRadius:10}}>
    <View 
    style={{ padding:10,borderTopEndRadius:20,borderTopStartRadius:20}}
    // style={[ styles.head, 
    //   bgColor ? {backgroundColor : bgColor } : {}]}
      
      >
        <View style={{alignItems:'center'}} >
            <TouchableOpacity style={{backgroundColor:'#CAEBE8'}} >
                <Text > tab here</Text>
            </TouchableOpacity>
        </View>

      <View style={styles.view}>{
        <TouchableOpacity >

          <Icon name={BackIcon} onPress={onPress} style={styles.header} />
        </TouchableOpacity>

      }
      </View>
      <View style={styles.view}>{

<Text style={styles.header}>{text}</Text>
}
      </View>
      <View style={[styles.view, {flexDirection:'row', width:90,zIndex:9 ,justifyContent:"space-between"} ]}  >
      {

        <TouchableOpacity onPress={()=>setSearch('leads')}  > 
        
          <Icon name='search'   style={[styles.header, {display:(!Search)?'none':'flex'}]}/> 

        </TouchableOpacity>
        
}
     
      {

       
        
}
    
      {

        <TouchableOpacity onPress={()=>setCollapse(!collapse)} > 
        
          {/* <Icon name='bars'   style={styles.header}/>  */}

        </TouchableOpacity>
        
}
      </View>
  

     

    </View>
    </View>
    
        
        </>
        
        
  )
}
 const styles = StyleSheet.create({
head:{
  height:"8%",
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  padding:10,
  display:'flex',
  width:"100%"

},

header:{
  color:colors.HeaderTxtColor,
  fontSize:25,
  fontWeight:"800",
  width:"100%"
},
sliderShow:{
  opacity:1,
},
sliderHide:{
  display:'none',
  transition:' opacity 3s',
  opacity: 0
},

 })
export default Bottom


