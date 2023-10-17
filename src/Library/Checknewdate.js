import { IconButton, TextInput } from "@react-native-material/core";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {View, Text} from "react-native"
const Checknewdate =(props)=>{
 
const [state,setState]= useState("Select date")

  const [showDate, setShowDate]=useState(false)
  const showDatePicker = () => {
    setShowDate(true);
  };

  const hideDatePicker =()=>{
    setShowDate(false)
    
  }
  const handleConfirm =(date)=>{
    // console.log("date",date.toISOString()   )
    


    const dt = new Date(date)
    const x = dt.toDateString()
    // const x1 = x[0].split('-')

    // console.log("x", x1)
    // const dateValue ={}

    // var d = new Date(date);
         //console.log("d=.",d)
          month = '' + (dt.getMonth() + 1),
          day = '' + dt.getDate(),
          year = dt.getFullYear();
          hours =dt.getHours();
          min = dt.getMinutes();

  
      if (month.length < 2) 
      
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      var modifydate= [year, month, day,].join('-');

      var time =[hours,min].join(":")

      const dateTime = modifydate +" " + time
      // console.log("date",dateTime)
      

    setState(x)
    hideDatePicker()
    props.onDateSelect(modifydate);
  }

  // console.log("show date picker==>",showDate)
  // console.log("state", state)
  return(

    <>
    <View>
      {/* <Text>date</Text> */}
      <TextInput
      // label="Label"
      editable={false}
      value={state}
      variant="outlined"
      // value={state}
      setVal={state}
      trailing={props => (
        <IconButton icon={props => <Icon name="calendar" {...props} />} {...props} 
        onPress={showDatePicker}
        onCancel={hideDatePicker}
        
        />
        )}
        />

        {
          showDate&&  
          <DateTimePickerModal
          mode="datetime"
          isVisible={showDate}
          onConfirm={handleConfirm}
          />
        }
    </View>
    </>
  )
}

export default Checknewdate;

