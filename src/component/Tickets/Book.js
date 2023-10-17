// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// const EventListScreen = ({ events, onSelectEvent }) => {
//   return (
//     <View>
//       <Text>Available Events</Text>
//       <FlatList
//         data={events}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => onSelectEvent(item)}>
//             <Text>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default EventListScreen;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const CustomDropdown = ({ options, onOptionSelect, selectedOption }) => {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const handleOptionPress = (option) => {
//     onOptionSelect(option);
//     setDropdownVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => setDropdownVisible(!isDropdownVisible)} style={styles.selectedOption}>
//         <Text>{selectedOption}</Text>
//       </TouchableOpacity>

//       {isDropdownVisible && (
//         <View style={styles.dropdown}>
//           {options.map((option) => (
//             <TouchableOpacity key={option} onPress={() => handleOptionPress(option)} style={styles.optionItem}>
//               <Text>{option}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//   },
//   selectedOption: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     padding: 12,
//     borderRadius: 4,
//   },
//   dropdown: {
//     position: 'absolute',
//     top: 30,
//     left: 0,
//     right: 0,
//     backgroundColor: 'white',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     padding: 8,
//   },
//   optionItem: {
//     padding: 8,
//   },
// });

// // Usage Example
// const MyScreen = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('Select an option');
//   const options = ['Option 1', 'Option 2', 'Option 3'];

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TouchableOpacity onPress={() => setPopupVisible(true)}>
//         <Text>Show Popup</Text>
//       </TouchableOpacity>

//       <CustomDropdown
//         options={options}
//         onOptionSelect={handleOptionSelect}
//         selectedOption={selectedOption}
//       />

//       {/* Additional content for your pop-up goes here */}
//     </View>
//   );
// };

// export default MyScreen;
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Modal } from 'react-native'
import{useEffect, useState,useRef} from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import React from 'react'
// import { WebSocket} from 'react-native-websocket'

const practise = () => {
const [data, setData]= useState([{
        aState:" ", 
        pincode:" "
}])

const[modal,setModal ]=useState(false)
// const[connection,setConnection]=useState('Connected')
// const [socket,setSocket]=useState(null)
const[info, setInfo]= useState()


const [connectionStatus, setConnectionStatus] = useState('Connecting...');
const [socket, setSocket] = useState(null);
const socketRef = useRef(null);
// useEffect(() => {
//   // Create a new WebSocket connection
//   const newSocket = new WebSocket('ws://192.168.2.56:8080/chat');

//   // Set up event handlers
//   newSocket.onopen = () => {
//     setConnectionStatus('Connected');
//   };

//   newSocket.onerror = (error) => {
//     setConnectionStatus('Error');
//     console.error('WebSocket error:', error);
//   };

//   newSocket.onclose = () => {
//     setConnectionStatus('Closed');
//   };

//   setSocket(newSocket);

//   // Clean up the WebSocket connection on unmount
//   return () => {
//     newSocket.close();
//   };
// }, []);


// useEffect(() => {
//   // Create a new WebSocket connection on component mount
//   socketRef.current = new WebSocket('ws://192.168.1.11:8081/practise');

//   // Handle the socket connection events
//   socketRef.current.onopen = () => {
//     console.log('WebSocket connection established.');
//   };

//   socketRef.current.onmessage = (event) => {
//     console.log('RECIEVED', event.data);
//     const receivedMessage = event.data;

//     setMessages((prevMessages) => [...prevMessages, receivedMessage]);
//   };

//   socketRef.current.onerror = (error) => {
//     console.error('WebSocket error:', error);
//   };

//   socketRef.current.onclose = () => {
//     console.log('WebSocket connection closed.');
//   };

//   // Clean up the WebSocket connection on component unmount
//   return () => {
//     socketRef.current.close();
//   };
// }, []);







  return (
    <View>
<Text> hiii</Text>
     </View>
  )
}

export default practise

const styles = StyleSheet.create({})