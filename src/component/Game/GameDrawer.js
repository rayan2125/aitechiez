import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';

import * as Animatable from 'react-native-animatable';

const Tab = ({ text, mail, current, setCurrent, onPress }) => {
  const isActive = current === text;

  const handlePress = () => {
    setCurrent(text);
    if (onPress) {
      onPress(); // Call the provided onPress function
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: isActive ? 'white' : 'transparent',
          paddingLeft: 20,
          paddingRight: 40,
          borderRadius: 8,
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            marginHorizontal: 15,
            color: isActive ? '#f52d73' : 'white',
          }}
        >
          {text}
        </Text>
        <Text style={{ color: isActive ? '#f52d73' : 'white' }}>{mail}</Text>
      </View>
    </TouchableOpacity>
  );
};

const GameDrawer = () => {
  const [currentTab, setCurrentTab] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

  const handleAlert = () => {
    if (currentTab === 'Message') {
      Alert.alert('Message Alert', 'You pressed the Message tab!');
    }
    //  else if (currentTab === 'Tab 2') {
    //   Alert.alert('Tab 2 Alert', 'You pressed Tab 2!');
    // } 
    // else if (currentTab === 'Tab 3') {
    //   Alert.alert('Tab 3 Alert', 'You pressed Tab 3!');
    // }
  };

  return (
    <View style={{ height:"72%", justifyContent: 'flex-start', alignItems: 'flex-end' }}>
      {/* <TouchableOpacity onPress={toggleCollapse}>
        <View>
          <Text>Open</Text>
        </View>
      </TouchableOpacity> */}
      <Animatable.View
        animation={isCollapsed ? 'fadeOut' : 'slideInLeft'}
        duration={500}
        style={{
          backgroundColor: 'black',
          height: '100%',
          width: '90%',
          transform: [{ translateY: isCollapsed ? 0 : -50 }],
        }}
      >
        <Tab
          text="Message"
          mail="example@mail.com"
          current={currentTab}
          onPress={handleAlert}
          setCurrent={setCurrentTab}
        />
        <Tab
          text="Tab "
          mail="example@mail.com"
          current={currentTab}
          onPress={handleAlert}
          setCurrent={setCurrentTab}
        />
        <Tab
          text="Tab 3"
          mail="example@mail.com"
          current={currentTab}
          onPress={handleAlert}
          setCurrent={setCurrentTab}
        />
      </Animatable.View>
    </View>
  );
};

export default GameDrawer;