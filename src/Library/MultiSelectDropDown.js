import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
const MultiSelectDropDown = (props) => {
  const [search, setSearch] = useState();
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState(props.data);
  // const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [value, setValue] = useState([])
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

  // const sendvalue=()=>{


  // }
  useEffect(() => {
    props.func([...value])
  }, [value])

  useEffect(()=>{
   if(props.value!=="" &&props.data!==null){
    const{data}=props
    var dataset=[] 
    data.map((val,ind)=>{
       
       return(
        props.value.map((val1,ind1)=>{
          if(val1==val.value){
            // dataset=[...dataset,{"label":val.label,"value":val1}]
            dataset=[...dataset,{"label":val.label}]
          }
        })
       )
    })
      // console.log("propsval=>",props.value)
      // console.log("propsdata=>",props.data)
      // console.log("dataset=>",dataset)
      setSelectedCountry(props.value)
   }
  },[props.value])

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 60,
          borderRadius: 5,
          borderWidth: 0.5,
          alignSelf: 'center',
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
          // zIndex:99
        }}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={{ fontWeight: '600' }}>
          {selectedCountry == '' ? 'Select Product' :
            selectedCountry.map((val, ind) => {
              return val + "  "
            })
          }
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
            height: 200,
            alignSelf: 'center',
            width: '90%',
            position: 'absolute',
            backgroundColor: '#fff',
            borderRadius: 10,
            zIndex: 99

          }}>
          <TextInput
            placeholder="Search.."
            value={search}
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
                  // onPress={() => {
                  //   setSelectedCountry(old=>([...old,item.label]));
                  //   setClicked(!clicked);
                  //   onSearch('');
                  //   setSearch('');
                  //   props.func(item.value)
                  // }}>
                  onPress={() => {
                    const isSelected = selectedCountry.includes(item.label);
                    if (isSelected) {
                      setSelectedCountry(prevSelected =>
                        prevSelected.filter(label => label !== item.label)
                      );
                      setValue(prevValue =>
                        prevValue.filter(value => value !== item.value)

                      );
                      // props.func(...value);
                    } else {
                      setSelectedCountry(prevSelected => [...prevSelected, item.label]);
                      setValue(prevSelected => [...prevSelected, item.value]);
                      // props.func([...value])
                    }
                    setClicked(!clicked);
                    onSearch('');
                    setSearch('');
                    // sendvalue()
                  }}>
                  {/* <Text style={{fontWeight: '600'}}>{item.label}</Text> */}
                  <Text style={{ fontWeight: '600' }}>
                    {item.label}{' '}
                    {selectedCountry.includes(item.label) ? '✓' : ''}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

      ) : null}
    </View>
  );
};

export default MultiSelectDropDown;
