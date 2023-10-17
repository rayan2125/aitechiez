import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppHeader from '../navigation/component/AppHeader/AppHeader'
import { colors } from '../assets/config/colors'
import Mainjson from '../MainJason/MainJson'
const { width, height } = Dimensions.get('screen')
const AitechDashboard = ({ navigation, route }) => {

    const [numColumns, setNumColumns] = useState(2)
    const onLead = () => {
        navigation.push('leadlist')
    }
    const business = Mainjson.personal
    const data = Object.entries(business);

    const updateNumColumns = (newNumColumns) => {
        setNumColumns(newNumColumns);
    };
    //  console.warn(data)
    return (






        <>

            <View >
                <View>
                    <View>
                        {/* /* header section  */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, height: 80, alignItems: 'center' }}>
                            <View >


                                <Text style={{ color: 'black', fontSize: 20 }}>Dashboard</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={{ marginHorizontal: 19 }}
                                    onPress={() => navigation.push('Userdashboard')}
                                >
                                    <View style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 90, justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon name="user" color="black" size={18} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name="bell" color="black" size={18} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>




                    {/* main sectionn */}

                    {
                        <FlatList
                            data={data}
                            renderItem={({ item, key }) => {
                                const color =
                                    typeof item[1].app_settings !== 'undefined' && item[1].app_settings.color;
                                   const title =  item[1].app_settings.title;
                                   console.log('hhh', JSON.stringify(title))
                                return (
                                    <View style={styles.insidecontainer} key={key}>
                                        <TouchableOpacity
                                            onPress={() => {

                                                if (item[0] === 'community-center') {

                                                    navigation.push('Website');
                                                } else if (item[0] === 'online-training') {

                                                    navigation.push('Logistic')
                                                } else {
                                                    // Default action if no condition matches
                                                    // ...
                                                }
                                            }}
                                        >
                                            <View style={styles.iconOut}>
                                                <View
                                                    style={[styles.iconBackground, { backgroundColor: `${color.dark}` }]}
                                                >
                                                    <Icon name={
                                                        item[0] === 'community-center' ? 'comments' :
                                                            item[0] === 'online-training' ? 'laptop-code' :
                                                                item[0] === 'personal-accounting' ? 'calculator' : 
                                                                item[0] === 'infomation' ? 'laptop' :
                                                                item[0] === 'data-mining' ? 'database' : ''
                                                                
                                                    } color="white" size={35} />
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={styles.insidetxt}>{title}
                                                    {/* {
                                                        item[0] === 'community-center' ? 'Community' :
                                                            item[0] === 'online-training' ? 'Online Training' :
                                                                item[0] === 'website' ? 'Website' : ''} */}
                                                </Text>


                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                );
                            }}
                            keyExtractor={(item) => item[0]}
                            contentContainerStyle={{
                                padding: 10,
                                justifyContent: 'center',
                                gap: 20,
                            }}
                            numColumns={numColumns}
                            key={numColumns.toString()}
                        />



                    }



                </View>
            </View>
        </>


    )
}
export default AitechDashboard
const styles = StyleSheet.create({
    iconBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00B7D7',
        width: 75, height: 75,
        borderRadius: 100,
    },
    iconOut: {
        alignItems: 'flex-end',
        marginRight: 20,
        bottom: 10
    },
    insidetxt: {
        marginHorizontal: 13,
        fontSize: 15,
        // top: 3
        position:'absolute',
        color: 'black'
    },
    insidecontainer: {
        backgroundColor: '#fff',
        height: 165, width: 165,
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
        zIndex: 9,
        elevation: 5
    }




})
