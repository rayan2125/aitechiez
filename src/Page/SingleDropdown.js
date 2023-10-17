import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { useEffect, useRef, useState } from 'react';
import { colors } from '../assets/config/colors';

const SingleDropdown = (props) => {
  console.log("props", props)
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(props.data);
  const [value, setValue] = useState("")
  const [selectedCountry, setSelectedCountry] = useState('');
  const searchRef = useRef();
  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(props.data);
    }
  };

  useEffect(() => {
    if(value!==""){
      props.func(value)
    }
   
  }, [value])
  //  console.log("setcount=>",value)
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 60,
          borderRadius: 5,
          borderWidth: 0.5,
          alignSelf: 'center',
          marginTop: 10,
          // borderColor:"orange":'',
          flexDirection: 'row',
          position:"relative",
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
          
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{ fontWeight: '600' ,}}>
          {selectedCountry == '' ? props.label : selectedCountry}
        </Text>
        {clicked ? (
          <Icon name="caret-up" />
        ) : (
          <Icon name="caret-down" size={20} />
        )}
      </TouchableOpacity>
      {clicked ? (
        

        <View
          style={{
            elevation: 5,
            marginTop: 20,
            bottom: 20,
            height: 250,
            alignSelf: 'center',
            width: '90%',
            position: 'absolute',
            backgroundColor: '#fff',
            borderRadius: 10,
            // top:6,
            
            
          }}>
          <TextInput
            placeholder="Search.."
            value={selectedCountry}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={{
              width: '90%',
              height: 50,
              alignSelf: 'center',
              borderWidth: 0.2,
              borderColor: '#8e8e8e',
              borderRadius: 7,
              marginTop: 20,
              paddingLeft: 20,
            }}
          />

          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              // console.log("item",item.label)
              return (
                <TouchableOpacity
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: '#8e8e8e',
                  }}
                  onPress={() => {
                    setSelectedCountry(item.label);
                    setValue(item.value)
                    setClicked(!clicked);
                    onSearch('');
                    setSearch('');
                  }}>
                  <Text style={{ fontWeight: '600', }}>{item.label}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
       
      ) : null}
    </View>
  );
};

export default SingleDropdown;




