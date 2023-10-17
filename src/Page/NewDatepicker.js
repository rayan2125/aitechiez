import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';


const Pickerdate = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handleDateChange = (event, selected) => {
        if (selected) {
           
            setSelectedDate(selected);
            props.datefunc(selected);
           
        }
        setShowPicker(false);
    };

    // const showDatepicker = () => {
    //     setShowPicker(true);
    // };

    

    return (
        <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
            <View style={{justifyContent:'center', alignItems:'center', height:40, width:40, backgroundColor:'#111C87', borderRadius:99}}>

            <Icon name="calendar-week" size={24} color="white" onPress={()=>setShowPicker(true)} />
            </View>
            {showPicker && (
                <DateTimePicker
                    mode="date"
                    display="default"
                    textColor='red'
                    value={selectedDate}
                    onChange={handleDateChange}
                    minimumDate={new Date()} // Set minimum date to allow only current or upcoming dates
                />
            )}
        </View>
    );
};

const NewDatepicker = (props) => {
    // console.log("ggdgd", props)
    const { initialDate } = props; // Get the initialDate prop
    const [selectedDate, setSelectedDate] = useState(initialDate || null);
    // console.log("sele", selectedDate.toDateString())

    const handleDateChange = (date) => {
       // setSelectedDate(date);
        // console.log("date", date.toDateString())

         var d = new Date(date);
         //console.log("d=.",d)
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      var modifydate= [year, month, day].join('-');
          //  console.log("date", modifydate)
          //   setSelectedDate(modifydate);
          setSelectedDate(date);
            props.func(modifydate)
    };

    return (
        <View style={{ flexDirection:'row' , justifyContent:'space-around', alignItems:'center', borderColor:'black', borderWidth:.8,borderRadius:7}}>
            <TextInput
                placeholderTextColor='black'
                placeholder="Select a date"
                value={selectedDate ? selectedDate.toDateString() : ''}
                editable={false}
                style={{marginHorizontal:15}}
            />
            <Pickerdate datefunc={handleDateChange} />
        </View>
    );
};

export default NewDatepicker;
