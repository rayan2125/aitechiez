// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const Popup = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const openPopup = () => {
//     setPopupVisible(true);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={openPopup}>
//         <Text>Open Popup</Text>
//       </TouchableOpacity>

//       {isPopupVisible && (
//         <View style={styles.popupContainer}>
//           <Text style={styles.message}>This is a custom pop-up.</Text>

//           <TouchableOpacity style={styles.closeButton} onPress={closePopup}>
//             <Text style={styles.closeButtonText}>Close</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   popupContainer: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -100 }, { translateY: -100 }],
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//   },
//   message: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   closeButton: {
//     backgroundColor: '#ccc',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 4,
//   },
//   closeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default Popup;
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Check = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://aitechiez.com/api/api/users/usersrolelist?key=role_name[]=Admin'
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {data.map((user, index) => (
        <Text key={index}>{user.name}</Text>
      ))}
    </View>
  );
};

export default Check;
