// SeatSelectionScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { getToken, onDisplayNotification,requestUserPermission,notification } from '../../services/utils';
import Book from './Book';


const SeatSelectionScreen = ({ selectedEvent, selectedSeats, onSelectSeat, onConfirmBooking }) => {

  useEffect(() => {
    requestUserPermission()
    notification()
    getToken()
  }, [])

  // const getDeviceToke = async ()=>{
  //   let token =await messaging().getToken()
  //   console.log('ffff', token)
  // }
  return (
    <View>
      <Text>Event: {selectedEvent.name}</Text>
      <Text>Selected Seats: {selectedSeats.join(', ')}</Text>
      <Button title="Select Seat" onPress={() => onDisplayNotification({
        title:"it is working or not",body:"yes"
      })} />
      <Button title="Confirm Booking" onPress={() => onConfirmBooking()} />
      <Book/>
    </View>
  );
};

export default SeatSelectionScreen;
