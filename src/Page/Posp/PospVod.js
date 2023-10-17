import React from "react";
import {View,Text} from "react-native"
import Video from 'react-native-video';

const PospVdo =()=>{
return(
    <View style={{flex:1}}>
    <Video
     source={{
        uri: 'https://e-learning.anandrathiinsurance.com/api/uploads/videos/1672726669.mp4',
      }}// Replace with your video source
    style={{ width:'100%',height:220 }}
    // controls={true} // Show video controls (play, pause, etc.)
    resizeMode="contain" // Adjust the video's resizeMode property as needed
  />
  {/* <Text>hiii</Text> */}
</View>
)
}
export default PospVdo