// // UpdateHistory.js
// import React, { useEffect, useState } from "react";
// import { FlatList, View ,Text} from "react-native";
// import AppHeader from "../navigation/component/AppHeader/AppHeader";
// import Api from "../services/api";
// import { API_CONSTANTS } from "../assets/config/constants";

// const UpdateHistory = ({ route }) => {
//   const apiCtrl = new Api();

//   const [state, setState] = useState([]);




//   useEffect(() => {
//     getEnquiryList();
//   }, []);

//   const getEnquiryList = () => {
//     var data = {
//       start: 0,
//       filter: '',
//       enquiry_id: route.params.id
//     };

//     apiCtrl.callAxios(API_CONSTANTS.enquiryhistory, data).then(res => {
//       const { aaData } = res.data;
//       setState(aaData);
//     });
//   };
// const meetingData = [
//     {
//       date: "2023-08-16",
//       time: "14:30",
//       meeting_done: true,
//       value: 15,
//     },
//     {
//       date: "2023-08-14",
//       time: "14:30",
//       meeting_done: true,
//       value: 15,
//     },
//     {
//       date: "2023-08-13",
//       time: "14:30",
//       meeting_done: true,
//       value: 15,
//     },
//     {
//       date: "2023-08-11",
//       time: "14:30",
//       meeting_done: true,
//       value: 15,
//     },
//     {
//       date: "2023-08-11",
//       time: "14:30",
//       meeting_done: true,
//       value: 15,
//     },
//     {
//       date: "2023-08-11",
//       time: {


//       },
//       meeting_done: true,
//       value: 15,
//     },
//     // Add more meeting entries here...
//   ];
  

//   const renderItem = ({ item }) => (
//     <View style={{ borderBottomWidth: 1, padding: 10 }}>
//       <Text> {item.date}</Text>
//       <Text>Time: {item.time}</Text>
//       <Text>Meeting Done: {item.meeting_done ? "Yes" : "No"}</Text>
//       <Text>Value: {item.value}</Text>
//     </View>
//   );

//   return (
//     <>
//       <AppHeader />
//       <FlatList
//       data={meetingData}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//     />
//     </>
//   );
// }

// const LeadUpdate = ({ date, updatetype }) => (
//   <View>
//     <View style={{ height: 30, backgroundColor: '#B1B1B1', justifyContent: 'center' }}>
//       <Text style={{ color: '#6A6A6A', marginHorizontal: 15, fontWeight: 'bold' }}>
//         {date}
//       </Text>
//     </View>
//     <View>
//       <Text>{updatetype}</Text>
//     </View>
//   </View>
// );

// export default UpdateHistory;



// import React from "react";
// import { FlatList, View, Text, StyleSheet } from "react-native";
// import AppHeader from "../navigation/component/AppHeader/AppHeader";

// const UpdateHistory = () => {
//   const meetingData = [
//     {
//       date: "2023-08-16",
//       times: [
//         { time: "14:30", meeting_done: true, type: "meeting" },
//         { time: "15:30", meeting_done: false, type: "Follow Up" },
//       ],
//     },
//     {
//       date: "2023-08-14",
//       times: [
//         { time: "10:00", meeting_done: true, type: "follow" },
//         { time: "11:30", meeting_done: false, type: 25 },
//       ],
//       date: "2023-08-14",
//       times: [
//         { time: "10:00", meeting_done: true, type: 20 },
//         { time: "11:30", meeting_done: false, type: 25 },
//       ],
//     },
//     // Add more meeting entries with multiple times...
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.date}>{item.date}</Text>
//       {item.times.map((timeEntry, index) => (
//         <View key={index} style={styles.timeContainer}>
//           <Text>Time: {timeEntry.time}</Text>
//           <Text>Value: {timeEntry.value}</Text>
//           <Text style={[styles.status, timeEntry.meeting_done ? styles.done : styles.cancelled]}>
//             {timeEntry.meeting_done ? "Done" : "Cancelled"}
//           </Text>
//         </View>
//       ))}
//     </View>
//   );

//   return (
//     <>
//     <AppHeader/>
//     <FlatList
//       data={meetingData}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//     />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   itemContainer: {
//     borderBottomWidth: 1,
//     padding: 10,
//   },
//   date: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   timeContainer: {
//     padding: 5,
//     marginVertical: 5,
//   },
//   status: {
//     fontWeight: "bold",
//   },
//   done: {
//     color: "green",
//   },
//   cancelled: {
//     color: "red",
//   },
// });

// export default UpdateHistory;


// import React from "react";
// import { FlatList, View, Text, StyleSheet } from "react-native";

// const UpdateHistory = () => {
//   const meetingData = [
//     {
//       date: "2023-08-16",
//       times: [
//         { time: "14:30", meeting_done: true, value: 15, remark: "Discuss project" },
//         { time: "15:30", meeting_done: false, value: 10, remark: "Follow-up call" },
//       ],
//     },
//     {
//       date: "2023-08-14",
//       times: [
//         { time: "10:00", meeting_done: true, value: 20, remark: "Presentation" },
//         { time: "11:30", meeting_done: false, value: 25, remark: "Review proposal" },
//       ],
//     },
//     // Add more meeting entries with multiple times...
//   ];

//   const isFollowUpTime = (time) => {
//     const currentTime = new Date();
//     const [hours, minutes] = time.split(":");
//     const followUpTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), parseInt(hours), parseInt(minutes));
//     return currentTime >= followUpTime;
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.date}>{item.date}</Text>
//       {item.times.map((timeEntry, index) => (
//         <View key={index} style={styles.timeContainer}>
//           <Text>Time: {timeEntry.time}</Text>
//           <Text>Value: {timeEntry.value}</Text>
//           <Text>Remark: {timeEntry.remark}</Text>
//           <Text style={styles.status}>
//             {isFollowUpTime(timeEntry.time) ? "Follow-up" : "Meeting"}
//           </Text>
//         </View>
//       ))}
//     </View>
//   );

//   return (
//     <FlatList
//       data={meetingData}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   itemContainer: {
//     borderBottomWidth: 1,
//     padding: 10,
//   },
//   date: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   timeContainer: {
//     padding: 5,
//     marginVertical: 5,
//   },
//   status: {
//     fontWeight: "bold",
//     color: "green",
//   },
// });

// export default UpdateHistory;



// import React from "react";
// import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
// import AppHeader from "../navigation/component/AppHeader/AppHeader";

// const UpdateHistory = () => {
//   const meetingData = [
//     {
//       date: "2023-08-16",
//       times: [
//         { time: "10:30", type: "follow-up", value: 15, remark: "Follow-up call" },
//         { time: "14:30", type: "meeting", value: 10, remark: "Client meeting" },
//       ],
//     },
//     {
//       date: "2023-08-14",
//       times: [
//         { time: "11:30", type: "follow-up", value: 20, remark: "Follow-up email" },
//         { time: "15:30", type: "meeting", value: 25, remark: "Presentation" },
//       ],
//     },

//     {
//         date: "2023-08-14",
//         times: [
//           { time: "11:30", type: "follow-up", value: 20, remark: "Follow-up email" },
//           { time: "15:30", type: "meeting", value: 25, remark: "Presentation" },
//         ],
//       },

//       {
//         date: "2023-08-13",
//         times: [
//           { time: "11:30", type: "follow-up", value: 20, remark: "Follow-up email" },
//           { time: "15:30", type: "meeting", value: 25, remark: "Presentation" },


// { time: "11:30", type: "follow-up", value: 20, remark: "Follow-up email" },
//           { time: "15:30", type: "meeting", meeting_type:online, remark: "Presentation" },
//         ],
//       },

//       {
//         date: "2023-08-12",
//         times: [
//           { time: "11:30", type: "follow-up",  remark: "Follow-up email" },
//           { time: "15:30", type: "meeting",  remark: "Presentation" },
//         ],
//       },
//     // Add more meeting entries with multiple times...
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.date}>{item.date}</Text>
//       {item.times.map((timeEntry, index) => (
//         <View key={index} style={styles.timeContainer}>
//           <Text>Time: {timeEntry.time}</Text>
//           {/* <Text>Value: {timeEntry.value}</Text> */}
//           <Text>Remark: {timeEntry.remark}</Text>
//           <Text style={styles.type}>
//             {timeEntry.type === "meeting" ? "Meeting" : "Follow-up"}
//           </Text>
//         </View>
//       ))}
//     </View>
//   );

//   return (


//    <>
//    <AppHeader/>
//    <ScrollView>
//    <FlatList
//       data={meetingData}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//     />
//    </ScrollView>
   
   
//    </>
//   );
// };

// const styles = StyleSheet.create({
//   itemContainer: {
//     borderBottomWidth: 1,
//     padding: 10,
//   },
//   date: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   timeContainer: {
//     padding: 5,
//     marginVertical: 5,
//   },
//   type: {
//     fontWeight: "bold",
//     color: "green", // You can adjust the color based on your preference
//   },
// });

// export default UpdateHistory;


import React from "react";
import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import AppHeader from "../navigation/component/AppHeader/AppHeader";
import Icon from 'react-native-vector-icons/FontAwesome5'

import { colors } from "../assets/config/colors";

const UpdateHistory = ({navigation}) => {
  const meetingData = [
    {
      date: "2023-08-16",
      times: [
        { time: "10:30", type: "follow-up", value: 15, remark: "Follow-up call" },
        { time: "14:30", type: "meeting", meetingType: "online", value: 10, remark: "Client meeting" },
      ],
    },
    {
      date: "2023-08-14",
      times: [
        { time: "11:30", type: "follow-up", value: 20, remark: "Follow-up email" },
        { time: "13:30", type: "follow-up", value: 20, remark: "Send your Company email" },
        { time: "15:30", type: "follow-up", value: 20, remark: "Follow-up Call" },
        { time: "18:30", type: "follow-up", value: 20, remark: "Follow-up email" },
        { time: "20:30", type: "meeting", meetingType: "offline", value: 25, remark: "Presentation",location:"Mumbai" },
      ],
    },
    // Add more meeting entries with multiple times...
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <View style={{backgroundColor:'rgba(147,147,147,.4)',height:28, borderRadius:10,justifyContent:'center'}}>

      <Text style={styles.date}>{item.date}</Text>
        </View>
      {item.times.map((timeEntry, index) => (
        <View key={index} style={styles.timeContainer}>
          <Text style={{color:timeEntry.type === "meeting" ? "green" : "red", fontWeight:'bold',fontSize:20}}>{timeEntry.type === "meeting" ? "Meeting" : "Follow-up"}</Text>
          <View style={{flexDirection:'row', alignItems:'center'}}>
<Icon name="clock" size={15} color="#1E3050"/>
          <Text>: {timeEntry.time}</Text>
          </View>
          {timeEntry.type === "meeting" && (
            <Text>Type: {timeEntry.meetingType}</Text>
          )}
          {/* <Text>Value: {timeEntry.value}</Text> */}
          <Text>Remark: {timeEntry.remark}</Text>
        </View>
      ))}
    </View>
  );

  const onBack=()=>{
    navigation.navigate("Leadhistory")
  }

  return (
   <>
   <AppHeader
   text="History"
   bgColor={colors.orange}
   BackIcon="arrow-left"
   HeaderTxtColor={colors.HeaderTxtColor}
   onPress={() => onBack()}
   />
   <ScrollView>

   <FlatList
      data={meetingData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
   </ScrollView>
   </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    padding: 10,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    // backgroundColor:'#7A7A7A',
    color:'#656565',
    // borderRadius:10,
    marginHorizontal:10,

    
  },
  timeContainer: {
    padding: 5,
    marginVertical: 5,
  },
});

export default UpdateHistory;


