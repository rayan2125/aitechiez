import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome5'
  import React, { useEffect, useRef, useState } from 'react';
  
  const NewDropDownCus = (props) => {
    
    
   const [clicked,setClicked]=useState(false)
  
  
    
     
   
  
    return (
      <View style={{ flex: 1,position:"relative" }}>
       <TouchableOpacity
       style={{
        
        width: '100%',
          height: 60,
          borderRadius: 5,
          borderWidth: 0.5,
          alignSelf: 'center',
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
          zIndex:99
    }}
    onPress={() => {
          setClicked(!clicked);
        }}
       
       >
        <Text>Drop Process</Text>

       </TouchableOpacity>
       {
        clicked ?(
            <View 
            style={{
                elevation: 5,
            marginTop: 20,
            bottom: 20,
            height: 200,
            alignSelf: 'center',
            width: '90%',
            position: 'absolute',
            backgroundColor: '#fff',
            borderRadius: 10,
            zIndex: 99,
            top:1
            }}
            >

            </View>
        ):null
       }
      </View>
    );
  };
  
  export default NewDropDownCus;