


// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome5'
// import ImagePicker, { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { Banner, Tooltip } from "react-native-paper";
// import Swal from "../../Library/Swal";
// import { Button, Dialog, Portal } from 'react-native-paper';
// const Logistic = () => {
//   const [visible, setVisible] = useState(false);
//   const showDialog = () => setVisible(true);
//   const hideDialog = () => setVisible(false);
//   const [state, setState] = useState({
//     screenshot: ''
//   });
//   // console.log("state", state)
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const option = {
//     mediaType: 'photo',
//     quality: 1,
//     saveToPhotos: true,
//   };

//   // const openCamera = () => {
//   //   launchCamera(option, (res) => {
//   //     if (res.didCancel) {
//   //       toast('take a picture cancel');
//   //     } else if (res.errorCode) {
//   //       toast('error while open camera', res.errorCode);
//   //     } else {
//   //       const { uri } = res.assets[0];
//   //       console.log('uri', uri)
//   //       setState((prevState) => ({
//   //         ...prevState,
//   //         photo: uri
//   //       }));
//   //     }
//   //   })
//   // }
//   // const openGallery = () => {
//   //   launchImageLibrary(option, (res) => {
//   //     setState((prevState) => ({
//   //       ...prevState,
//   //       screenshot: uri
//   //     }));
//   //   })
//   // }
// //   const Popup = () => {
// //     return (
// //       <View style={{backgroundColor:'white', height:"50%", justifyContent:'center',borderColor:'green', borderWidth:.7, borderRadius:10}}>
// // <View style={{justifyContent:'center', alignItems:'center'}}>
// //         <View style={{ backgroundColor: 'white', height: 80, width: 80, borderRadius: 99, justifyContent: 'center', alignItems: 'center', borderColor:'green',borderWidth:.5 }}>
// //           <Icon name='check' color="green" size={30} />
// //         </View>
// //         <Text style={{color:'green',fontSize:20, fontWeight:"bold"}}>Sucesss</Text>
// //       </View>
// //       <TouchableOpacity>
// //         <View style={{ alignItems:'center', }}>
// //         <Text style={{textAlign:'right'}} >OK</Text>
// //         </View>

// //       </TouchableOpacity>
// //       </View>

// //     )

// //   }


//   const openGallery = () => {
//     setPopupVisible(true);
//   }
//   return (
//     <View style={{ padding: 10, }}>

//       {
//         state.photo == '' ? <Text> please Upload photo</Text> :

//           <View>
//             <Text style={{ textAlign: 'right' }} > Remove</Text>
//             <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//               {/* <Image source={{ uri: state.photo }} style={{ height: 100, width: 100, justifyContent: 'center', alignItems: 'center' }} /> */}
//             </View>
//           </View>
//       }
//       {/* <TouchableOpacity onPress={openCamera}>
//         <Text> Open Camera</Text>
//       </TouchableOpacity> */}
//       <TouchableOpacity onPress={openGallery}>
//         <Text> Open Gallery</Text>
//       </TouchableOpacity>
//       <View>
//         <Image source={{ uri: state.screenshot }} style={{ height: 30, width: 50 }} />

//       </View>
//       {isPopupVisible && <Swal
//       status="Sucess"
//       />}
//     {/* <Banner
//       visible={true} // Set this prop to control the visibility of the banner
//       actions={[
//         {
//           label: 'Dismiss',
//           onPress: () => console.log('Banner dismissed'),
//         },
//       ]}
//     >
//       This is a banner message.
//     </Banner> */}



//     </View>
//   )
// }






// // const openGallery = () => {
// //   const options = {
// //     mediaType: 'photo',
// //     quality: 1,
// //   };

// //   launchImageLibrary(options, (res) => {
// //     if (res.didCancel) {
// //       console.log('Open gallery cancelled');
// //     } else if (res.errorCode) {
// //       console.log('Error while opening gallery:', res.errorCode);
// //     } else {
// //       if (res.uri) {
// //         setState((prevState) => ({
// //           ...prevState,
// //           screenshot: res.uri,
// //           validationError: '' // Clear any previous validation errors
// //         }));
// //       } else {
// //         setState((prevState) => ({
// //           ...prevState,
// //           validationError: 'Invalid image selected' // Set the validation error message
// //         }));
// //       }
// //     }
// //   });
// // };

// export default Logistic




import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from 'react-native';

// import Form from '../../MainJason/Form';
import DATA from '../../MainJason/Form';

// const DATA = Form.data
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];


// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

const Info =()=>{
  return(
    <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'black', height:50, width:50}}>
      <View>
       
      </View>
    </View>
  )
}
const Logistic = () => {



  return (
    <>

      <View>

        <View>
          <Text style={{ fontWeight: 'bold', color: 'green', fontSize: 35, textAlign: 'center' }}> Todays sell </Text>
        </View>
        {/* <Info/> */}
        <View style={{justifyContent:'center',alignItems:'center'}}>

        <FlatList
          data={DATA}
          horizontal
          renderItem={({ item }) => {
            return (
              // <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'black', height:50, width:50}}>
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
                {/* <Info></Info> */}

             
               
               <View style={{padding:10, height:"100%"}}>
                 <Text>{item.title}</Text>
                <View>
                  <Image source={{uri:item.image}} style={{height:50, width:50}}
                   resizeMode='contain'/>
                </View>
                <Text  style={{
                  color: item.sell=="Sold" ? "green":
                  item.sell =="Todays"? "blue":
                  item.sell ==="Upcoming Days"?"red" :'',
                  fontSize:14,
                  fontWeight:'bold',
                  textDecorationLine:
                  item.sell =="Sold"?
                  "line-through":'none'
                  
                }}>{item.sell}</Text>
                <TouchableOpacity>
                  <Text>{item.size}</Text>
                </TouchableOpacity>
                </View>
              </View>
            )
          }
            //  <Text>{item.title}</Text>
          }
          keyExtractor={item => item.id}
        />
        </View>


      </View>
    </>
  );
};



const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
});


export default Logistic;
