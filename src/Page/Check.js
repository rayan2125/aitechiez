// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, Pressable, Button } from 'react-native';

// const { useEffect } = require("react");

// const Check = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [selectedButton, setSelectedButton] = useState(null);

//     const handleButtonPress = (buttonIndex) => {
//         setSelectedButton(buttonIndex);
//         setModalVisible(true);
//     };

//     const buttons = [];
//     const buttonColors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow', 'pink']; // Add more colors as needed

//     for (let i = 0; i < 7; i++) {  
//         let buttonText;
//         switch (i) {
//             case 0:
//                 buttonText = 'View Details';
//                 break;
//             case 1:
//                 buttonText = 'Other';
//                 break;
//             default:
//                 buttonText = `Button ${i + 1}`;
//                 break;
//         }
//         buttons.push(
//             <View key={i} style={{ flexDirection: 'row', backgroundColor: buttonColors[i], padding:10 }}>
//                 <View style={{padding:1,top:10,}}>

//                 <Pressable
//                     style={[styles.button, styles.buttonClose]}
//                     onPress={() => handleButtonPress(i)}>
//                     <Text style={styles.textStyle}>{buttonText}</Text>
//                 </Pressable>
//                 </View>
//             </View>
//         );
//     }

//     return (
//         <View>
//             {buttons}
//             {/* Render the modal based on the selectedButton */}
//             <Modal visible={modalVisible && selectedButton !== null}>
//                 {/* Content of the modal */}
//                 <Text>Modal for Button {selectedButton + 1}</Text>
//                 <Button title="Close Modal" onPress={() => setModalVisible(false)} />
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     // Add your button and text styles here
// });

// export default Check;

// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Modal, StyleSheet, Alert } from "react-native";
// import { Commands } from "react-native-maps/lib/MapViewNativeComponent";

// const Check = () => {
//     const Role = ["Admin", "Sales", "SuperAdmin"];

//     const roleWiseTab = {
//         "Admin" : ["management-team", "frontend", "backend-team", "backend-team", "frontend-team", ],
//         "SuperAdmin": ["management", "backend"],
//     };

//     const tabs = [ 
//         { title: "Management Team", id: "management-team", color: "red",},
//         { title: "Backend Team", id: "backend-team", color: "blue" },
//         { title: "Frontend Team", id: "frontend-team", color: "green" },
//         { title: "Calling Team", id: "calling-team", color: "#1B4A46" },
//         { title: "Backend ", id: "backend", color: "blue" },
//         { title: "Frontend ", id: "frontend", color: "green" },
//     ]

//     const [showDropdown, setShowDropdown] = useState(false);
//     const [selectedRole, setSelectedRole] = useState(Role[0]);
//     const [showFrontendPopup, setShowFrontendPopup] = useState(false)
//     const handleToggleDropdown = () => {
//         setShowDropdown((prevShowDropdown) => !prevShowDropdown);
//     };

//     const handleRoleSelection = (role) => {
//         setSelectedRole(role);
//         setShowDropdown(false);
//     };
//     const handleButtonPress = (buttonTitle) => {
//         console.log(`Button "${buttonTitle}" is pressed!`);
//         console.log(typeof buttonTitle)
//         if(buttonTitle=="Frontend "){
//             Alert.alert('ok')
//         }
        
//       };

//     const renderTeams = () => {
//         let renderTabs = [];
    
//         renderTabs = tabs.map((value, index)=>{
//             // console.log(roleWiseTab[`${role}`])
//             // console.log(roleWiseTab[`${selectedRole}`].includes(value.id))
//             if((typeof roleWiseTab[`${selectedRole}`] !== 'undefined')){
//                 if(roleWiseTab[`${selectedRole}`].includes(value.id) ){
//                     return value;
//                 } 
//             }
//         })

//         renderTabs = renderTabs.filter((value)=>{
//             return value != undefined
//         })
//       return(
//         <View style={styles.gridContainer}>
//             { renderButtons(renderTabs)}
//          </View>
//       )
//         // switch (selectedRole) {
//         //     case "Admin":
//         //     case "SuperAdmin":
//         //         return (
//         //             <View style={styles.gridContainer}>
//         //                 {renderButtons([
//         //                     { title: "Management Team", id: "management", color: "red",},
//         //                     { title: "Backend Team", color: "blue" },
//         //                     { title: "Frontend Team", color: "green" },
//         //                     { title: "Calling Team", color: "#1B4A46" },
//         //                     { title: "Backend ", color: "blue" },
//         //                     { title: "Frontend ", color: "green" },
//         //                     { title: "Frontend Team", color: "green" },
//         //                     { title: "Calling Team", color: "#1B4A46" },
//         //                     { title: "Backend ", color: "blue" },
//         //                     { title: "Frontend ", color: "green" },
                           
//         //                 ])}
//         //             </View>
//         //         );
//         //     case "Sales":
//         //         return (
//         //             <View style={styles.gridContainer}>
//         //                 {renderButtons([{ title: "Sales Team", color: "purple" }])}
//         //             </View>
//         //         );
//         //     default:
//         //         return null;
//         // }
//     };

//     const renderButtons = (buttons) => {
//         return buttons.map((button, index) => (
//             <Button key={index} title={button.title} color={button.color} 
//             press={() => handleButtonPress(button.title)}
//             />
//         ));
//     };

//     return (
//         <View>
//             {/* Toggle Dropdown */}
//             <TouchableOpacity onPress={handleToggleDropdown}>
//                 <Text>{selectedRole}</Text>
//             </TouchableOpacity>

//             {/* Dropdown Content */}
//             <Modal visible={showDropdown} transparent>
//                 <TouchableOpacity
//                     style={styles.dropdownContainer}
//                     activeOpacity={1}
//                     onPress={handleToggleDropdown}
//                 >
//                     {Role.map((role, index) => (
//                         <TouchableOpacity
//                             key={index}
//                             style={styles.dropdownItem}
//                             onPress={() => handleRoleSelection(role)}
//                         >
//                             <Text>{role}</Text>
//                         </TouchableOpacity>
//                     ))}
//                 </TouchableOpacity>
//             </Modal>

//             {/* Render teams based on selected role */}
//             {renderTeams()}

//             <FrontendPopup visible={showFrontendPopup} onClose={() => setShowFrontendPopup(false)} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     dropdownContainer: {
//         position: "absolute",
//         top: 30,
//         right: 10,
//         backgroundColor: "#fff",
//         borderRadius: 5,
//         elevation: 3,
//     },
//     dropdownItem: {
//         paddingHorizontal: 10,
//         paddingVertical: 8,
//     },
//     gridContainer: {
//         flexDirection: "row",
//         flexWrap: "wrap",
//         gap:5,
//         justifyContent: "flex-start",
//         paddingHorizontal: 10,
//     },
// });

// export default Check;

// export const Button = ({ title, color,press }) => {
//     const adjustedHeight = title.length > 1 ? 40 : 20;

//     return (
//         <TouchableOpacity style={[style.buttonContainer, { backgroundColor: color, height: adjustedHeight }]}  onPress={press}>
//         <View >
           
          

//             <Text style={style.buttonText}>{title}</Text>
//         </View>
//            </TouchableOpacity>
//     );
// };

// const style = StyleSheet.create({
//     buttonContainer: {
//         width: "30%",
//         marginVertical: 8,
//         padding: 10,
//         borderRadius: 8,
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     buttonText: {
//         color: "#fff",
//         textAlign: "center",
//     },
// });

// export const FrontendPopup =({ visible, onClose })=>{
//     return (
//         <Modal visible={visible} transparent animationType="fade">
//           <View style={styl.popupContainer}>
//             <View style={styl.popupContent}>
//               <Text style={styl.popupText}>This is the Frontend Popup!</Text>
//               <TouchableOpacity onPress={onClose} style={styl.closeButton}>
//                 <Text style={styl.closeButtonText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       );
// }
// const styl= StyleSheet.create({
//     popupContainer: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "rgba(0, 0, 0, 0.5)",
//     },
//     popupContent: {
//       backgroundColor: "#fff",
//       padding: 20,
//       borderRadius: 8,
//       alignItems: "center",
//     },
//     popupText: {
//       fontSize: 18,
//       marginBottom: 20,
//     },
//     closeButton: {
//       paddingVertical: 10,
//       paddingHorizontal: 20,
//       backgroundColor: "#1B4A46",
//       borderRadius: 4,
//     },
//     closeButtonText: {
//       color: "#fff",
//       fontSize: 16,
//     },
//   });
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
// import { RadioButton, Snackbar } from 'react-native-paper';
// import { Provider as PaperProvider } from 'react-native-paper';

// const Check = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [checked, setChecked] = useState('first');

//   const dropdownOptions = [
//     { label: 'Option 1', value: 'option1', bannerText: 'This is the banner text for Option 1!' },
//     { label: 'Option 2', value: 'option2', bannerText: 'This is the banner text for Option 2!' },
//     { label: 'Option 3', value: 'option3', bannerText: 'This is the banner text for Option 3!' },
//     // Add more options as needed
//   ];

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleOptionPress = (option) => {
//     setSelectedOption(option);
//     setDropdownVisible(false);
//   };

//   return (
//     <PaperProvider>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={toggleDropdown}>
//           <Text style={styles.dropdownText}>
//             {selectedOption ? `Selected: ${selectedOption.label}` : 'Select an option'}
//           </Text>
//         </TouchableOpacity>
//         <CustomBanner
//           visible={!!selectedOption}
//           onDismiss={() => setSelectedOption(null)}
//           text={selectedOption?.bannerText}
//         />
//         <Modal visible={dropdownVisible} transparent>
//           <TouchableOpacity style={styles.modalBackground} onPress={toggleDropdown}>
//             <View style={styles.dropdownContainer}>
//               <FlatList
//                 data={dropdownOptions}
//                 renderItem={({ item }) => (
//                   <TouchableOpacity onPress={() => handleOptionPress(item)}>
//                     <Text style={styles.optionText}>{item.label}</Text>
//                   </TouchableOpacity>
//                 )}
//                 keyExtractor={(item) => item.value}
//               />
//             </View>
//           </TouchableOpacity>
//         </Modal>

//         <RadioExample/>

       
//       </View>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   dropdownText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'blue',
//     paddingVertical: 10,
//     textAlign: 'center',
//   },
//   modalBackground: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dropdownContainer: {
//     backgroundColor: '#fafafa',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     width: 200,
//     maxHeight: 200,
//     paddingVertical: 10,
//   },
//   optionText: {
//     fontSize: 16,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
// });



// export default Check;
// export const CustomBanner = ({ visible, onDismiss, text }) => {
//     return (
//       <Snackbar
//         visible={visible}
//         onDismiss={onDismiss}
//         action={{
//           label: 'Dismiss',
//           onPress: onDismiss,
//         }}
//       >
//         {text}
//       </Snackbar>
//     );
//   };



  //  const RadioExample = () => {
  //   const [checked, setChecked] = useState('first');
  // console.log('fff',checked)
  //   return (
  //     <View>
  //       <RadioButton.Group
  //         onValueChange={(value) => setChecked(value)}
  //         value={checked}
  //       >
  //         <View>
            
  //           <RadioButton.Item label="First" value="first" />
  //         </View>
  //         <View>
            
  //           <RadioButton.Item label="Second" value="second" />
  //         </View>
  //         <View>
           
  //           <RadioButton.Item label="Third" value="third" />
  //         </View>
  //       </RadioButton.Group>
  //       <Text>{checked}</Text>
  //     </View>
  //   );
  // };
  
  // export default RadioExample;
  



  
//   import React, { useState, useEffect } from "react";
// import { TouchableOpacity, View, Text, Animated } from "react-native";

// const Check = () => {
//   const [state, setState] = useState({
//     animation: new Animated.Value(0),
//     isBallVisible: true,
//   });

//   const radius = 100; // Radius of the circular path
//   const centerX = 150; // X-coordinate of the center of the circle
//   const centerY = 300; // Y-coordinate of the center of the circle
//   const speed = 0.005; // Adjust the speed of rotation

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(state.animation, {
//         toValue: 1,
//         duration: 4000,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, []);

//   // Calculate the X and Y coordinates of the ball's position
//   const ballX = Animated.add(centerX, Animated.multiply(radius, Animated.cos(Animated.multiply(state.animation, 2 * Math.PI))));
//   const ballY = Animated.add(centerY, Animated.multiply(radius, Animated.sin(Animated.multiply(state.animation, 2 * Math.PI))));

//   const handlePress = () => {
//     setState((prevState) => ({
//       ...prevState,
//       isBallVisible: !prevState.isBallVisible,
//     }));
//   };

//   return (
//     <>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         {state.isBallVisible && (
//           <Animated.View
//             style={[
//               {
//                 backgroundColor: "red",
//                 height: 50,
//                 width: 50,
//                 borderRadius: 99,
//                 position: "absolute",
//                 transform: [{ translateX: ballX }, { translateY: ballY }],
//               },
//             ]}
//           ></Animated.View>
//         )}
//       </View>

//       <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
//         <TouchableOpacity style={{ backgroundColor: "blue", height: 50, width: 50, bottom: 60 }} onPress={handlePress}>
//           <Text>hiii</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// export default Check;

// import React, { useState, useEffect } from "react";
// import { TouchableOpacity, View, Text, Animated } from "react-native"; // Make sure to import Animated from react-native

// const Check = () => {
//   const [state, setState] = useState({
//     animation: new Animated.Value(0),
//     isBallVisible: true,
//   });

//   const radius = 100; // Radius of the circular path
//   const centerX = 150; // X-coordinate of the center of the circle
//   const centerY = 300; // Y-coordinate of the center of the circle
//   const speed = 0.005; // Adjust the speed of rotation

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(state.animation, {
//         toValue: 1,
//         duration: 4000,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, []);

//   // Calculate the X and Y coordinates of the ball's position
//   const ballX = Animated.add(centerX, Animated.multiply(radius, Animated.cos(Animated.multiply(state.animation, 2 * Math.PI))));
// //   const ballY = Animated.add(centerY, Animated.multiply(radius, Animated.sin(Animated.multiply(state.animation, 2 * Math.PI))));

//   const handlePress = () => {
//     setState((prevState) => ({
//       ...prevState,
//       isBallVisible: !prevState.isBallVisible,
//     }));
//   };

//   return (
//     <>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         {state.isBallVisible && (
//           <Animated.View
//             style={[
//               {
//                 backgroundColor: "red",
//                 height: 50,
//                 width: 50,
//                 borderRadius: 99,
//                 position: "absolute",
//                 transform: [{ translateX: ballX }, { translateY: ballY }],
//               },
//             ]}
//           ></Animated.View>
//         )}
//       </View>

//       <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
//         <TouchableOpacity style={{ backgroundColor: "blue", height: 50, width: 50, bottom: 60 }} onPress={handlePress}>
//           <Text>hiii</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// export default Check;


// import React, { useState } from "react";
// import {View,Text} from 'react-native'
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { TextInput ,IconButton} from "@react-native-material/core";
// import Icon from 'react-native-vector-icons/FontAwesome5'
// const Check =()=>{

//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [datePicker,setDatePicker] =useState()
//   const showPicker =()=>{
//     setDatePicker(true)
//   }
//   return(
//     <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
//     <Text style={{ width: '30%', color: 'black' }}>Date & Time:</Text>

//     <TextInput
//       // label="Label"
//       variant="outlined"
//       style={{ width: '70%' }}
//       value={selectedDate.toLocaleString()}
//       // onChangeText={(text) => setState((prev) => ({ ...prev,datetime : text }))}
//       trailing={props => (
//         <IconButton icon={props => <Icon name="calendar-check" {...props} />} {...props} onPress={showPicker}/>
//       )}
//     >{selectedDate.toDateString()}</TextInput>
//     {
// datePicker && (
// <DateTimePicker

//             mode={"date"}
//             display={"default"}
//             value={selectedDate}
//             // onChange={handleDateChange}
//         />
// )
//     }

//   </View>
//   )
// }
//   export default Check




// import React, { useState } from 'react';
// import { View, Button, CheckBox, Text } from 'react-native';

// function Check() {
//   const [buttonPressed, setButtonPressed] = useState(false);

//   const handleButtonPress = () => {
//     setButtonPressed(true);
//   };

//   return (
//     <View>
//       {!buttonPressed ? (
//         <Button
//           title="Press me"
//           onPress={handleButtonPress}
//         />
//       ) : (
//         // <CheckBox
//         //   value={true} // Set this to the value you want to associate with the checkbox
//         //   onValueChange={(value) => {
//         //     // Handle checkbox value change here
//         //   }}
//         // />
//         <View>
//             <Text> hi</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// export default Check;
// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, TextInput } from 'react-native';

// function Check() {
//   const [buttonPressed, setButtonPressed] = useState(false);
//   const [onlinePressed, setOnlinePressed] = useState(false);
//   const [offlinePressed, setOfflinePressed] = useState(false);

//   const handleButtonPress = () => {
//     setButtonPressed(true);
//   };

//   const handleOnlinePress = () => {
//     setOnlinePressed(true);
//     setOfflinePressed(false);
//   };

//   const handleOfflinePress = () => {
//     setOfflinePressed(true);
//     setOnlinePressed(false);
//   };

//   return (
//     <View>
//       {!buttonPressed ? (
//         <TouchableOpacity
//           style={{ width: '30%' }}
//           onPress={handleButtonPress}
//         >
//           <View
//             style={{
//               backgroundColor: '#1AD9FF',
//               height: 30,
//               justifyContent: 'center',
//               alignItems: 'center',
//               borderRadius: 10
//             }}
//           >
//             <Text style={{ color: 'white', fontWeight: 'bold' }}>Meeting</Text>
//           </View>
//         </TouchableOpacity>
//       ) : onlinePressed ? (
//         <View>
//           <TouchableOpacity onPress={handleOnlinePress}>
//             <Text>Online</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleOfflinePress}>
//             <Text>Offline</Text>
//           </TouchableOpacity>
//         </View>
//       ) : offlinePressed ? (
//         <View>
//           {/* Render your offline form here */}
//           <TextInput placeholder="Date and Time" />
//           <TextInput placeholder="Address" />
//           {/* Add more form fields as needed */}
//         </View>
//       ) : (
//         <View>
//           <TouchableOpacity onPress={handleOnlinePress}>
//             <Text>Online</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleOfflinePress}>
//             <Text>Offline</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }

// export default Check;

// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, TextInput } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Datepicker from './NewDatepicker';

// function Check() {
//   const [buttonPressed, setButtonPressed] = useState(false);
//   const [formType, setFormType] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const handleButtonPress = () => {
//     setButtonPressed(true);
//   };
//   const handleDateChange = (event, date) => {
//     if (date !== undefined) {
//       setSelectedDate(date);
//     }
//     setShowDatePicker(false);
//   };

//   const handleFormSelect = (type) => {
//     setFormType(type);
//     // console.log("type", type)
//   };

//   return (
//     <View>
//       {!buttonPressed ? (
//         <TouchableOpacity
//           style={{ width: '30%' }}
//           onPress={handleButtonPress}
//         >
//           <View
//             style={{
//               backgroundColor: '#1AD9FF',
//               height: 30,
//               justifyContent: 'center',
//               alignItems: 'center',
//               borderRadius: 10
//             }}
//           >
//             <Text style={{ color: 'white', fontWeight: 'bold' }}>Meeting</Text>
//           </View>
//         </TouchableOpacity>
//       ) : formType === 'online' ? (
//         <View>
//           <TouchableOpacity onPress={() => handleFormSelect(null)}>
//             <Text>Back</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setShowDatePicker(true)}>
//             {/* <Text>Select Date and Time</Text> */}
//             <Datepicker/>
//           </TouchableOpacity>
         
//           <TextInput placeholder="Google Meet Link" />
        
//         </View>
//       ) : formType === 'offline' ? (
//         <View>
//           <TouchableOpacity onPress={() => handleFormSelect(null)}>
//             <Text>Back</Text>
//           </TouchableOpacity>
//           {/* <TextInput placeholder="Date and Time" />
//            */}
//            <Datepicker/>
//           <TextInput placeholder="Address" />
//         </View>
//       ) : (
//         <View>
//           <TouchableOpacity onPress={() => handleFormSelect('online')}>
//             <Text>Online</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleFormSelect('offline')}>
//             <Text>Offline</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }

// export default Check;



// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity ,TextInput,Modal } from 'react-native';

// function Check() {
//   const [showModal, setShowModal] = useState(false);
//   const [showMeetingForm, setShowMeetingForm] = useState(false);

//   const handleButtonPress = () => {
//     setShowModal(true);
//   };

//   const handleOnlineButtonPress = () => {
//     setShowMeetingForm(true);
//   };

//   const handleFormCancel = () => {
//     setShowMeetingForm(false);
//     setShowModal(false);
//   };

//   return (
//     <View>
//       {!showModal ? (
//         <TouchableOpacity
//           style={{ width: '30%' }}
//           onPress={handleButtonPress}
//         >
//           <View style={{ backgroundColor: '#1AD9FF', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
//             <Text style={{ color: 'white', fontWeight: 'bold' }}>Meeting</Text>
//           </View>
//         </TouchableOpacity>
//       ) : (
//         <Modal
//           transparent={true}
//           visible={showModal}
//           onRequestClose={() => setShowModal(false)}
//         >
//           {!showMeetingForm ? (
//             <View>
//               <TouchableOpacity onPress={handleOnlineButtonPress}>
//                 <Text>Online</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => setShowModal(false)}>
//                 <Text>Cancel</Text>
//               </TouchableOpacity>
//             </View>
//           ) : (
//             <MeetingForm onCancel={handleFormCancel} />
//           )}
//         </Modal>
//       )}
//     </View>
//   );
// }

// export default Check;




// export const MeetingForm = (props) => {
//   console.log("propp", props.setMeeting)
//   const [state, setState] = useState({
//     datetime: '',
//     remark: '',
//     type: 'meeting',
//     enquiry_id: '1'
//   });
//   const handleSubmit = () => {
//     props.submit(state)

//   }
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [datePicker,setDtaePicker] =useState()
//   const showPicker =()=>{
//     setDtaePicker(true)
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', padding: 10 }}>
//       <View style={{ backgroundColor: 'white', padding: 10, paddingVertical: 30, borderRadius: 10 }}>
//         <View>
//           <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', marginBottom: 10, fontSize: 30 }}>Meeting</Text>
//         </View>
//         <View style={{ width: '100%', gap: 10 }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
//             <Text style={{ width: '30%', color: 'black' }}>Date & Time:</Text>

//             <TextInput
//               // label="Label"
//               variant="outlined"
//               style={{ width: '70%' }}
//               value={selectedDate.toLocaleString()}
//               onChangeText={(text) => setState((prev) => ({ ...prev,datetime : text }))}
//               trailing={props => (
//                 <IconButton icon={props => <Icon name="calendar-check" {...props} />} {...props} onPress={showPicker}/>
//               )}
//             >{}</TextInput>
//             {
// datePicker && (
//   <DateTimePicker

//                     mode={"date"}
//                     display={"default"}
//                     value={selectedDate}
//                     // onChange={handleDateChange}
//                 />
// )
//             }

//           </View>
//           < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
//             <Text style={{ width: '30%', color: 'black' }}>Remark:</Text>
//             <TextInput style={{ width: "70%",}}
//              variant="outlined"
//              value={state.remark}
//              onChangeText={(text) => setState((prev) => ({ ...prev, remark: text }))}
//             //  trailing={props => (
//             //   <IconButton icon={props => <Icon name="calendar-check" {...props} />} {...props} />
//             // )}
//             />
//           </View>
//           < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
//             <Text style={{ width: '30%', color: 'black' }}>Meeting Link</Text>
//             <TextInput style={{ width: "70%",}}
//              variant="outlined"
//              value={state.remark}
//              onChangeText={(text) => setState((prev) => ({ ...prev, remark: text }))}
//             //  trailing={props => (
//             //   <IconButton icon={props => <Icon name="calendar-check" {...props} />} {...props} />
//             // )}
//             />
//           </View>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 18 }}>
//           <TouchableOpacity onPress={handleSubmit} style={{ width: '48%' }}>
//             <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
//               <Text style={{ color: 'white', fontWeight: "bold" }}>Submit</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => props.onCancel(false)} style={{ width: '48%' }}>
//             <View style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
//               <Text style={{ color: 'white', fontWeight: "bold" }}>Cancel</Text>
//             </View>
//           </TouchableOpacity>

//         </View>


//       </View>

//     </View>
//   )
// }


// import React, { useContext } from 'react';
// import { View, Text } from 'react-native';

// const MyContext = React.createContext();

// export const Checking = () => {
//   const Text = "hiii dsd here please provide me info !!!";

//   return (
//     <MyContext.Provider value={Text}>
//       {/* Children components */}
//       <View>
//         <Text> hiii</Text>
//       </View>
//     </MyContext.Provider>
//   );
// };

// const Check = () => {
//   const conText = useContext(MyContext);
//   console.log("checkk", conText);

//   return (
//     <View>
//       <Text>{conText}</Text>
//     </View>
//   );
// };

// export default Check;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustoDropdown from '../Library/Dropdown/CustoDropdown';


const Check = () => {
  const { control, handleSubmit, setValue } = useForm();
  const [dropdownOptions] = useState(['Option 1', 'Option 2', 'Option 3']);
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="selectedOption"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <CustoDropdown
            options={dropdownOptions}
            selectedOption={value}
            onSelect={newValue => {
              onChange(newValue);
              setValue('selectedOption', newValue);
            }}
          />
        )}
      />
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Check;


 








