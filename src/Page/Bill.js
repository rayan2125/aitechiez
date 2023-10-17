import React from "react";
import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import AppHeader from "../navigation/component/AppHeader/AppHeader";
import Icon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../assets/config/colors";
const MonthBilling = (props) => {
    const { date } = props
    return (
        <View>
            <View style={{ backgroundColor: 'white', height: 60, justifyContent: 'center', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20, }}>
                    <Text style={{ left: 10 }}>{date}</Text>
                    <TouchableOpacity>
                        <View style={{ width: 100, borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                            <Icon name='arrow-down' color={'#000066'} />
                            <Text style={{ backgroundColor: 'black', height: 1, width: 12 }}></Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const Bill = ({ navigation, route }) => {
    const ondownload = () => {

    }
    const [selectedOption, setSelectedOption] = useState(null);
    console.log('nikhil ka ghr ', selectedOption)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handlePress = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        if (option === 'Option 1') {
            console.log('1');
        }
    };
    const flatNumbers = [
        {
            "flat No": 530,
            "Owner Name": "Nikhil Dubey",
            "Panding Amuont": 8888,
            "Due Date": "June-25-2023"
        },
        {
            "flat No": 531,
            "Owner Name": "Farah Sayyed",
            "Panding Amuont": 8907,
            "Due Date": "June-25-2023"
        },
        {
            "flat No": 532,
            "Owner Name": "Ajay Kewat",
            "Panding Amuont": 8789,
            "Due Date": "June-25-2023"
        }
    ];
    return (
        <>
            <AppHeader
                text='Bill'
                bgColor={colors.orange}
                BackIcon='arrow-left'
                onPress={() => navigation.push('Societym')}
            />


            <View style={{ backgroundColor: 'white', zIndex: 1, elevation: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <TouchableOpacity onPress={handlePress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginHorizontal: 20 }}>CHOOSE FLAT NUMBER</Text>
        <Icon name={isDropdownOpen ? 'caret-up' : 'caret-down'} size={20} color='black' />
      </View>
      {isDropdownOpen && (
        <View style={{ marginTop: 10, backgroundColor: 'lightgray', padding: 10 }}>
          <TouchableOpacity onPress={() => handleOptionSelect('Option 1')}>
            <Text>589</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect('Option 2')}>
            <Text>570</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect('Option 3')}>
            <Text>555</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight:'bold' }}>607 -</Text>
                    <Text style={{ marginHorizontal: 5, fontSize: 18, color: 'black',fontWeight:'bold' }}>Nikhil Dubey</Text>
                </View> */}

                <View>
                    <TouchableOpacity onPress={handlePress}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, marginHorizontal: 20 }}>CHOOSE FLAT NUMBER</Text>
                            <Icon name={isDropdownOpen ? 'caret-up' : 'caret-down'} size={20} color='black' />
                        </View>
                        {isDropdownOpen && (
                            <View style={{ marginTop: 10,  padding: 10,  justifyContent:'center', alignItems:'center' }}>
                                {flatNumbers.map((flatNumber, index) => (
                                    <TouchableOpacity key={index} onPress={() => handleOptionSelect(flatNumber)} style={{ flexDirection: 'row' }}>
                                        <Text>{flatNumber["flat No"]}</Text>
                                        <Text style={{ marginHorizontal: 10 }}>{flatNumber["Owner Name"]}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginHorizontal: 10, gap: 10, justifyContent: 'center' }}>
  {selectedOption !== null && (
    <>
      {selectedOption["flat No"] && <Text style={{ color: 'black', fontSize: 20 }}>{selectedOption["flat No"]}</Text>}
      {selectedOption["Owner Name"] && <Text style={{ color: 'black', fontSize: 20 }}>{selectedOption["Owner Name"]}</Text>}
    </>
  )}
</View>
                </View>

            </View>
            <ScrollView>


                <View style={{ padding: 10, }}>
                    <LinearGradient colors={['#00c3e3', '#f70072']}
                        start={{ x: 0.9, y: .2 }} end={{ x: 0.6, y: .6 }}
                        locations={[1, 1, 0.6]}
                        style={styles.linearGradient}>
                        <View style={{ padding: 10, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text
                                        style={{ color: 'white' }}
                                    >Flat No</Text>
                                    <View>
                                        {selectedOption !== null && (
                                            <Text style={{color:'white', fontWeight:'bold'}}>{selectedOption["flat No"]}</Text>
                                        )}
                                    </View>
                                </View>
                                <View style={{ width: '40%', justifyContent: 'center', left: 50 }}>
                                    <Text
                                        style={{ color: 'white' }}
                                    >Due Date</Text>
                                    <View>
                                        {
                                        selectedOption !==null &&(
                                            <Text style={{color:'white', fontWeight:'bold'}}>{selectedOption["Due Date"]}</Text>
                                        )
                                        }
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text
                                        style={{ color: 'white' }}
                                    >Payable Amount</Text>
                                    <View>
                                        {
                                        selectedOption !==null &&(
                                            <Text style={{color:'white', fontWeight:'bold'}}>{selectedOption["Panding Amuont"]}</Text>
                                        )
                                        }
                                    </View>
                                    
                                </View>

                                <TouchableOpacity style={{ width: 30 }} onPress={() => navigation.push('Payment')}>
                                    <View style={{ backgroundColor: 'white', borderRadius: 20, width: 70, height: 30, right: 60, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#964B00' }}>Pay Now </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 20, justifyContent: 'center', alignItems: 'center', opacity: 1, height: 40 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Last payment made for rs 789 on 04 July 2023</Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
                <View style={{ padding: 10 }}>
                    <View>

                    </View>
                    <View style={{ backgroundColor: 'white', height: 60, justifyContent: 'center', }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20, }}>
                            <Text style={{ left: 10 }}> Current Month Bill</Text>
                            <TouchableOpacity onPress={() => ondownload()}>
                                <View style={{ width: 100, borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                                    <Icon name='arrow-down' color={'#000066'} />
                                    <Text style={{ backgroundColor: '#000066', height: 1, width: 12 }}></Text>

                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <View style={{ padding: 10, bottom: 5 }}>
                        <Text style={{ fontSize: 19 }}>Bill Download </Text>
                    </View>
                    <ScrollView>
                        <View>

                            {/* <View>
                                        <View style={{ backgroundColor: 'white', height: 60, justifyContent: 'center', }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderRadius: 20, }}>
                                                <Text>May-2023</Text>
                                                <TouchableOpacity>
                                                    <View style={{ borderColor: '#000066', borderWidth: 1, width: 100, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Icon name='arrow-down' color={'#000066'} />
                                                        <Text style={{ color: '#000066', textAlign: 'center', marginHorizontal: 10 }}>Download</Text>
                                                    </View>
                                                </TouchableOpacity>

                                            </View>
                                        </View>
                                    </View> */}
                            <View style={{ gap: 10 }}>
                                <MonthBilling
                                    date='May-2023'
                                />
                                <MonthBilling
                                    date='April-2023'
                                />
                                <MonthBilling
                                    date='March-2023'
                                />
                                <MonthBilling
                                    date='Feb-2023'
                                />
                                <MonthBilling
                                    date='Jan-2023'
                                />
                                <MonthBilling
                                    date='Dec-2022'
                                />
                            </View>



                        </View>
                    </ScrollView>
                </View>
            </ScrollView>


            {/* <View style={{padding:10, gap:20}}>

                <View  style={{backgroundColor:'#CAEBE8' , height:40,justifyContent:'center', alignItems:'center'}}>
                    <Text>
                        Payment Amount 7888
                    </Text>
                </View>
                <LinearGradient 
                colors={['#fff', '#C7C7C7']}
                style={{backgroundColor:'#3EA99F' , height:40,justifyContent:'center', alignItems:'center'}}>
                    <Text>
                     debit card
                    </Text>
                </LinearGradient>
                <LinearGradient  
                colors={['#fff', '#C7C7C7']}
                style={{backgroundColor:'#3EA99F' , height:40,justifyContent:'center', alignItems:'center'}}>
                    <Text>
                    credit card
                    </Text>
                </LinearGradient>
                <LinearGradient 
                colors={['#fff', '#C7C7C7']}
                style={{backgroundColor:'#3EA99F' , height:40,justifyContent:'center', alignItems:'center'}}>
                    <Text>
                    gpay
                    </Text>
                </LinearGradient>
                <LinearGradient 
                colors={['#fff', '#C7C7C7']}
                style={{backgroundColor:'#3EA99F' , height:40,justifyContent:'center', alignItems:'center'}}>
                    <Text>
                    Cash 
                    </Text>
                </LinearGradient>
                <LinearGradient 
                colors={['#fff', '#C7C7C7']}
                style={{backgroundColor:'#3EA99F' , height:40,justifyContent:'center', alignItems:'center'}}>
                    <Text>
                    Internet Baking
                    </Text>
                </LinearGradient> 
            </View> */}

        </>

    )
}
export default Bill
const styles = StyleSheet.create({
    linearGradient: {
        zIndex: 9, elevation: 5, borderRadius: 10
    },

})