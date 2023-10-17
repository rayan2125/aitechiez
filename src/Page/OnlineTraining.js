// import React from "react";
// import { View,Text, Animated,TouchableWithoutFeedback, Easing } from "react-native";
// const rotateValue =new Animated.Value(0)

// const OnlineTraining =()=>{
//     let rotation= rotateValue.interpolate({
//         inputRange: [0, 1],
//         outputRange: ["0deg", "360deg"]
//     })
//     let transformStyle = { transform: [{ rotate: rotation }] };
//     return (

// <View>
//     <TouchableWithoutFeedback
//     onPressIn={()=>{
//         Animated.timing(rotateValue,{
//             toValue:1,
//             duration:700,
//             easing:Easing.linear
//         }).start()
//         onPress(Data)
//     }}
//     />
//     <Text>
//         hiii
//     </Text>
// </View>
//     )
// }
// export default OnlineTraining