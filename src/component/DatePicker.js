import React, { useState, useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextField from '../Library/TextField';
import Icon from 'react-native-vector-icons/FontAwesome5'

import { IconButton } from "@react-native-material/core";
const Pickerdate = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handleDateChange = (event, selected) => {
        if (selected) {

            props.param.datefunc(selected)
            setSelectedDate(selected);

        }
        setShowPicker(false);
    };

    const showDatepicker = () => {
        setShowPicker(true);
    };

    // console.log("props==>",props)
    useEffect(() => {
        props.func(selectedDate)
    }, [selectedDate])

    return (
        <View >
            {/* <TouchableOpacity onPress={showDatepicker}>
                 <Text style={styles.label}>Select a Date</Text>
        
            </TouchableOpacity> */}
            <IconButton icon={props => <Icon name="calendar-week" size={24} color="blue" />} onPress={showDatepicker} />
            {showPicker && (
                <DateTimePicker

                    mode={"date"}
                    display={"default"}
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            )}
            {/* <Text style={styles.selectedDate}>Selected Date: {selectedDate.toDateString()}</Text> */}
        </View>
    );
};




const Datepicker = (props) => {
    const [state, setState] = useState()
    const [data, setdata] = useState(props)

    const valu = (val) => {

        setState(val.toDateString())

    }
  

    return (
        <TextField
            value={state ? state : ""}
            trailing={props => (
                <IconButton icon={props => <Pickerdate func={valu} param={data} />} {...props} />
            )}
        />
    )
}

export default Datepicker