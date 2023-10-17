// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity,Modal } from 'react-native';
// // import Modal from 'react-native-modal';
// const CustomAlert = ({ isVisible, title, message, onClose, text }) => {
//   return (
//     <Modal isVisible={isVisible} onBackdropPress={onClose}>
//       <View style={styles.container}>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.message}>{message}</Text>
//         <TouchableOpacity style={styles.button} onPress={onClose}>
//           <Text style={styles.buttonText}>{text}</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// };
// export default CustomAlert
// const styles = {
//   container: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'blue',
//     marginBottom: 10,
//   },
//   message: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'green',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
// };



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomAlert = ({ message, onCancel }) => {
  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertMessage}>{message}</Text>
      <TouchableOpacity style={styles.alertButton} onPress={onCancel}>
        <Text style={styles.alertButtonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const AiRegister = ({ navigation, route }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCancel = () => {
    setShowAlert(true);
  };

  const handleAlertButtonPress = () => {
    setShowAlert(false);
    // Handle cancellation logic here
    // For example, navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* ...existing code... */}
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
      {showAlert && (
        <CustomAlert
          message="Are you sure you want to cancel?"
          onCancel={handleAlertButtonPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // ...other styles
  },
  cancelButton: {
    // ...button styles
  },
  cancelButtonText: {
    // ...text styles
  },
  alertContainer: {
    // ...alert container styles
  },
  alertMessage: {
    // ...alert message styles
  },
  alertButton: {
    // ...alert button styles
  },
  alertButtonText: {
    // ...alert button text styles
  },
});

export default AiRegister;

