// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome5'
// import * as Animatable from 'react-native-animatable';

// const Swal = ({ status,bgColor,onNavigation }) => {
  
 

 

 

//   return (
//     <TouchableOpacity >
//       <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//         <Animatable.View
//           animation="fadeInLeft"
//           duration={1000}
//           style={[styles.mainView,bgColor ? { backgroundColor: bgColor } : {}]}
//         >
//           <Animatable.View animation="fadeInDown" duration={1500} style={{ justifyContent: 'center', alignItems: 'center' }}>
//             <View style={{ backgroundColor: 'white', height: 60, width: 60, borderRadius: 99, justifyContent: 'center', alignItems: 'center', borderColor: '#4B8910', borderWidth: 1 }}>
//               <Icon name='check' color="#4B8910" size={40} />
//             </View>
//             <Animatable.Text animation="fadeInUp" duration={1500} style={{ color: '#fff', fontSize: 20, fontWeight: "bold" }}>{status}</Animatable.Text>
//           </Animatable.View>
//           <View>
//             <TouchableOpacity onPress={onNavigation}>
//               <View style={{ alignItems: 'center' }}>
//                 <Text style={{ textAlign: 'right', color: 'yellow', fontWeight: 'bold' }}>OK</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </Animatable.View>
//       </View>
//     </TouchableOpacity>
//   );
// }

// export default Swal;

// const styles = StyleSheet.create({  
//   mainView: {
//     // backgroundColor: 'rgba(75, 137, 16,0.7)',
//     // backgroundColor:{bgcolor},
//     height: "70%",
//     width: "60%",
//     justifyContent: 'center',
//     borderRadius: 10,
//   }     
// });



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native';

const Swal = ({ isVisible, title, message, onClose }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Swal;

