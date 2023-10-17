import { StyleSheet, TouchableOpacity, Text, View,Alert } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { TabView } from 'react-native-tab-view';




const Drawar = ({ onPress, data,text }) => {
  const[userInfo,setUserInfo]=useState(data)

  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigation = useNavigation();
  

  const [currentTab, setCurrentTab] = useState()
  const [showConfiguration, setShowConfiguration] = useState(false)
  const TabBatton = (currentTab, setCurrentTab, title,datarole) => {
    
    const navigateToScreen = (screenName) => {
      setCurrentTab(title);
      navigation.navigate(screenName,{datarole});
    };

    return (
      <TouchableOpacity
        onPress={() => {
          if (title ==="Newlead") {
              
            navigateToScreen('Leadlist');
          } else if( title==="Leadlist"){
            {navigateToScreen('Leadhistory',datarole)}
          }else if( title ==="Configuration"){
            setShowConfiguration(!showConfiguration)
            
          }
        
        }}>

        <View style={{
          flexDirection: 'row', alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'orange' : 'transparent',
          paddingLeft: 20,
          paddingRight: 40,
          borderRadius: 8,
          marginTop: 10,
          marginHorizontal: 10
        }}>


          <Text style={{
            textAlign:'center',
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            marginHorizontal:8,
            color: currentTab == title ? "white" : "black"
          }}>{title}</Text>

        </View>
      </TouchableOpacity>
    )
  }


const Nested =()=>{

  return (
    <View
      animation={isCollapsed ? 'fadeOut' : 'slideInLeft'}
      duration={500}
      style={{
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor:'white',
        height: '100%',
        width: '90%',
        transform: [{ translateY: isCollapsed ? 0 : -50 }],
      }}
    >
      <View style={{ height: '90%' }}>

        <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#FF9F00', height: '9%' }}>
          <View style={{ padding: 10, alignItems:'center',justifyContent:'center',right:39 }} >
            <Text style={{color:'white', fontWeight:'bold',fontSize:20, textAlign:'center'}}> Welcome Abhishek</Text>
          </View>

        </TouchableOpacity>



        <View style={{ flexGrow: 1 }}>
          {TabBatton(currentTab, setCurrentTab, "Dashboard")}
          {TabBatton(currentTab, setCurrentTab, "Configuration")}
          {showConfiguration && (
        <Configuration
        title="Promotion Type"
        
        />
      )}
          {TabBatton(currentTab, setCurrentTab, 'Newlead')}
          {TabBatton(currentTab, setCurrentTab, 'Leadlist', datarole={userInfo})}
          {TabBatton(currentTab, setCurrentTab, 'Report')}
          
        </View>
        
        <View>
          {TabBatton(currentTab, setCurrentTab, 'Version No.566')}
        </View>
      </View>
    </View>



  )
}
return(
  text==="Course"?<Nested/>:<Nested/>
)
}

export default Drawar

const styles = StyleSheet.create({


})



 export  const Configuration = ({ title }) => {
  const navigation = useNavigation();
  // Define an array of configuration objects
  const configurationData = [
    { title: 'Promotion Type', screenName: 'Promotiontype' },
    { title: 'Promotion Activity', screenName: 'Promotionactivite' },
    { title: ' Marketing Campaign ', screenName: 'MarketingCam' },
    // Add more configuration objects as needed
  ];

  return (
    <View>
      {configurationData.map((config) => (
        
        <TouchableOpacity
          key={config.screenName}
          onPress={() => {
            if (config.screenName ==="Promotiontype") {
              navigation.navigate(config.screenName);
            } else if( config.screenName==="Promotionactivite"){
              navigation.navigate(config.screenName);

            }else if( config.screenName ==="MarketingCam"){
           
              navigation.navigate(config.screenName);
              
            }
            
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
              paddingLeft: 20,
              paddingRight: 40,
              borderRadius: 8,
              marginTop: 10,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                paddingLeft: 15,
                marginHorizontal: 8,
              }}
            >
              {config.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};




