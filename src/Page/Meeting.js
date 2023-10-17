// import React, { useState } from 'react';
// import { View, StyleSheet,useWindowDimensions, TouchableOpacity, Text } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';

// const Meeting = () => {
//   const [index, setIndex] = useState(0);
//   const layout = useWindowDimensions();
//   const [routes] = useState([
//     { key: 'tab1', title: 'Tab 1' },
//     { key: 'tab2', title: 'Tab 2' },
//   ]);

//   const renderScene = SceneMap({
//     tab1: () => <View><Text>Tab 1 Content</Text></View>,
//     tab2: () => <View><Text>Tab 2 Content</Text></View>,
//   });

//   const renderTabBar = () => null; // You can customize the tab bar if needed

//   return (
//     <View style={styles.modalContainer}>
//       <View style={styles.modalContent}>
//         <TabView
//           navigationState={{ index, routes }}
//           renderScene={renderScene}
//           onIndexChange={setIndex}
//           initialLayout={{ width: layout.width }}
//           renderTabBar={renderTabBar}
//         />
//         <TouchableOpacity onPress={() => setSelectView(false)}>
//           <Text>Cancel</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as desired
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 8,
//   },
// });

// export default Meeting;
import React, { useState } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, Text,Dimensions,TextInput } from 'react-native';
// import { TextInput } from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';
const Meeting = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'tab1', title: 'Tab 1' },
      { key: 'tab2', title: 'Tab 2' },
    ]);
    const [tab1Date, setTab1Date] = useState('');
const [tab1Remark, setTab1Remark] = useState('');

const [tab2Date, setTab2Date] = useState('');
const [tab2Remark, setTab2Remark] = useState('');
const handleSubmit = (data) => {
    // Handle the submission logic for tab1
    console.log('Tab 1 Date:', data);
  
    // Handle the submission logic for tab2
    // console.log('Tab 2 Date:', tab2Date);
    // console.log('Tab 2 Remark:', tab2Remark);
  };
  
    const renderScene =
    
    // const [state,setState]=useState(),
    SceneMap({
      tab1: () => <MeetingForm submit={handleSubmit} />,

      tab2: () => 
      <FollowingForm submit={handleSubmit}/>
//       <View>
//       <View>
//           <Text style={{color:'black', fontWeight:'bold',textAlign:'center', marginBottom:10, fontSize:30}}> Following</Text>
//       </View>
//   <View style={{width:'100%',gap:10}}>
//   <View style={{flexDirection:'row', justifyContent:'space-around',width:'100%'}}>
//   <Text style={{width:'30%'}}>Date & Time:</Text>
//   <TextInput style={{ borderColor:'black', borderWidth:.8, width:"70%",borderRadius:10}}/>
// </View>
// < View style={{flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
//   <Text style={{width:'30%'}}>Remark:</Text>
//   <TextInput style={{ borderColor:'black', borderWidth:.8, width:"70%", borderRadius:10}}/>
// </View>
//   </View>
  
//   <TouchableOpacity>
//             <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
//                 <View style={{backgroundColor:'green', height:40,justifyContent:'center', width:'30%', alignItems:'center', borderRadius:10}}>

//                 <Text style={{color:'white', fontWeight:'bold'}}>Submit</Text>
//                 </View>
//             </View>
//         </TouchableOpacity>
  
  
//   </View>,
    });
  
    const renderTabBar = () => null; // You can customize the tab bar if needed
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>Schedule Meeting</Text>
        </TouchableOpacity>
  
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderTabBar={renderTabBar}
              />
              <TouchableOpacity onPress={() => setModalVisible(false)} style={{backgroundColor:'red'}}>
                <View style={{height:40, justifyContent:'center',alignItems:'center',}}>
                     <Text style={{color:'white', fontWeight:'bold', fontSize:18, textAlign:'center', }}>Close</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };


 export const MeetingForm = (props) => {

    const [state, setState] = useState({
        remark:'',
        date:'',
        schedule_type: 'meeting'
    });

    const handleSubmit = () => {
        props.submit(state)
    }
    return(
        <View>
                <View>
                    <Text style={{color:'black', fontWeight:'bold',textAlign:'center', marginBottom:10, fontSize:30}}>Follow-up</Text>
                </View>
                <View style={{width:'100%',gap:10}}>
                <View style={{flexDirection:'row', justifyContent:'space-around',width:'100%'}}>
                <Text style={{width:'30%'}}>Date & Time:</Text>
                <TextInput style={{ borderColor:'black', borderWidth:.8, width:"70%",borderRadius:10}}
                
                value={state.date}
                onChangeText={(text)=>setState((prev)=>({...prev,date: text}))}
                />
            </View>
            < View style={{flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
                <Text style={{width:'30%'}}>Remark:</Text>
                <TextInput style={{ borderColor:'black', borderWidth:.8, width:"70%", borderRadius:10}}
                value={state.remark}
                onChangeText={(text)=>setState((prev)=>({...prev, remark: text}))}
                />
            </View>
                </View>
                <View style={{ flexDirection:'row',justifyContent:'space-between', width:'100%'}}>
                  <TouchableOpacity onPress={handleSubmit} style={{width:'50%'}}>
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <View style={{backgroundColor:'green', height:40,justifyContent:'center', width:'30%', alignItems:'center', borderRadius:10}}>

                        <Text style={{color:'white', fontWeight:'bold'}}>Submit</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit} style={{width:'50%'}}>
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <View style={{backgroundColor:'red', height:40,justifyContent:'center', width:'30%', alignItems:'center', borderRadius:10}}>

                        <Text style={{color:'white', fontWeight:'bold'}}>Cancel</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
    )
  }
  export const FollowingForm = (props) => {

    const [state, setState] = useState({
        remark:'',
        date:'',
        schedule_type: 'following'
    });

    const handleSubmit = () => {
        props.submit(state)
    }
    return(
        <View>
                <View>
                    <Text style={{color:'black', fontWeight:'bold',textAlign:'center', marginBottom:10, fontSize:30}}>Following</Text>
                </View>
                <View style={{width:'100%',gap:10}}>
                <View style={{flexDirection:'row', justifyContent:'space-around',width:'100%'}}>
                <Text style={{width:'30%'}}>Date & Time:</Text>
                <TextInput style={{ borderColor:'black', borderWidth:.8, width:"70%",borderRadius:10}}
                
                value={state.date}
                onChangeText={(text)=>setState((prev)=>({...prev,date: text}))}
                />
            </View>
            < View style={{flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
                <Text style={{width:'30%'}}>Remark:</Text>
                <TextInput style={{ borderColor:'black', borderWidth:.8, width:"70%", borderRadius:10}}
                value={state.remark}
                onChangeText={(text)=>setState((prev)=>({...prev, remark: text}))}
                />
            </View>
                </View>
                <TouchableOpacity onPress={handleSubmit}>
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <View style={{backgroundColor:'green', height:40,justifyContent:'center', width:'30%', alignItems:'center', borderRadius:10}}>

                        <Text style={{color:'white', fontWeight:'bold'}}>Submit</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit}>
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <View style={{backgroundColor:'green', height:40,justifyContent:'center', width:'30%', alignItems:'center', borderRadius:10}}>

                        <Text style={{color:'white', fontWeight:'bold'}}>Submit</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
    )
  }

export default Meeting

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 8,
      width: '90%',
      height: '80%'
    },
  });
    