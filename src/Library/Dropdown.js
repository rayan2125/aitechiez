import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you have the FontAwesome icon library installed
import Api  from '../services/api';
// import StorageController from '../services/storage';
import { API_CONSTANTS } from '../assets/config/constants';

export const UserRefrel = () => {

  const apiCtrl= new Api
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState()
//   Object.entries(userData).map((val,inde)=>{
// console.log("rrere", val[0].role)
//   })

// console.log("hhh", userData)


  const handleRoleChange = (selectedRole) => {
    // Handle the selected role as needed
    console.log('Selected Role:', selectedRole);
  };
  // console.log('user', )
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
useEffect(()=>{
  userList();
},[])

  const userList = (pageLength) => {

    apiCtrl.callAxios(API_CONSTANTS.userlist, { length: pageLength, start: 0, filter: '', }).then(res => {

      const userListData = res.data.aaData

      setUserData(userListData)

    })
  }

  // const sourceLead = ["Dhananjay", "Farha", "Ajay", "Nikhil", "Abhishek"];

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          height: 30,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
        onPress={handlePress}
      >
        <Text style={{ color: 'white' }}>
          {selectedOption ? selectedOption : 'Select Source'}
        </Text>
        <Icon
          name={isDropdownOpen ? 'caret-up' : 'caret-down'}
          color="white"
          size={20}
        />
      </TouchableOpacity>
      {isDropdownOpen && (
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 3,
            padding: 10,
          }}
        >
          {userData.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(option.name)}
              style={{ paddingVertical: 5 }}
            >
              <Text>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

 

export const Campaign = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const sourceLead = ["ander_12", "mum_36", "malad_1", "na_12", "chur_2"];

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          height: 30,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
        onPress={handlePress}
      >
        <Text style={{ color: 'white' }}>
          {selectedOption ? selectedOption : 'Select Source'}
        </Text>
        <Icon
          name={isDropdownOpen ? 'caret-up' : 'caret-down'}
          color="white"
          size={20}
        />
      </TouchableOpacity>
      {isDropdownOpen && (
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 3,
            padding: 10,
          }}
        >
          {sourceLead.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(option)}
              style={{ paddingVertical: 5 }}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};


export const Assign = () => {

  const apiCtrl= new Api
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState()
//   Object.entries(userData).map((val,inde)=>{
// console.log("rrere", val[0].role)
//   })

// console.log("hhh", userData)


  const handleRoleChange = (selectedRole) => {
    // Handle the selected role as needed
    console.log('Selected Role:', selectedRole);
  };
  // console.log('user', )
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
useEffect(()=>{
  userList();
},[])

  const userList = (pageLength) => {

    apiCtrl.callAxios(API_CONSTANTS.userlist, { length: pageLength, start: 0, filter: '', }).then(res => {

      const userListData = res.data.aaData

      setUserData(userListData)

    })
  }

  // const sourceLead = ["Dhananjay", "Farha", "Ajay", "Nikhil", "Abhishek"];

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          height: 30,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}
        onPress={handlePress}
      >
        <Text style={{ color: 'white' }}>
          {selectedOption ? selectedOption : 'Select Source'}
        </Text>
        <Icon
          name={isDropdownOpen ? 'caret-up' : 'caret-down'}
          color="white"
          size={20}
        />
      </TouchableOpacity>
      {isDropdownOpen && (
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 3,
            padding: 10,
          }}
        >
          {userData.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionSelect(option.name)}
              style={{ paddingVertical: 5 }}
            >
              <Text>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
