import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppHeader from '../navigation/component/AppHeader/AppHeader'
import { colors } from '../assets/config/colors'
import Mainjson from '../MainJason/MainJson'
const { width, height } = Dimensions.get('screen')
const MainDashboard = ({ navigation, route }) => {
//  const Userdata = route.params.userRole
//  console.log("usee", Userdata)
    const [numColumns, setNumColumns] = useState(2)
    const onLead = () => {
        navigation.push('leadlist')
    }
    const business = Mainjson.business
    const data = Object.entries(business);

    const updateNumColumns = (newNumColumns) => {
        setNumColumns(newNumColumns);
    };

    // const iconset = () => {
    //     if (item[0] === 'society-mgmt-system') {
    //         "building"
    //     } else if (item[0] === 'logistic-mgmt-system') {
    //         "truck"
    //     }
    // }


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
                                <TouchableOpacity>
                                    <Icon name="arrow-right-from-bracket" color="black" size={18} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>




                    {/* main sectionn */}

                    {
                        <FlatList
                            data={data}
                            renderItem={({ item, key }) => {
                                const color = (typeof item[1].app_settings !== 'undefined') && item[1].app_settings.color;
                                const icon = (typeof item[1].app_settings.logo)

                                //  console.log('hhhd', icon)
                                return (

                                    <View style={styles.insidecontainer} key={key}>
                                        <TouchableOpacity
                                            onPress={() => {

                                                if (item[0] === 'society-mgmt-system') {
                                                    navigation.push('Societym');
                                                } else if (item[0] === 'logistic-mgmt-system') {
                                                    navigation.push('Card')
                                                } else if (item[0] === "list") {
                                                    navigation.push('LeadDashboard',)
                                                }
                                                else if (item[0] === "ticket") {
                                                    navigation.push('MainPage')
                                                }
                                            }}
                                        >
                                            <View style={styles.iconOut}>
                                                <View
                                                    style={[styles.iconBackground, { backgroundColor: `${color.dark}` }]}
                                                >
                                                    <Icon name={
                                                        item[0] === 'society-mgmt-system' ? 'building' :
                                                            item[0] === 'logistic-mgmt-system' ? 'truck' :
                                                                item[0] === 'website' ? 'globe' :
                                                                    item[0] === 'list' ? 'globe' :
                                                                        item[0] === 'ticket' ? 'clipboard-list' : ''
                                                    } color="white" size={35} />
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={styles.insidetxt}>{
                                                    item[0] === 'society-mgmt-system' ? 'Society Management' :
                                                        item[0] === 'logistic-mgmt-system' ? 'Logistic' :
                                                            item[0] === 'website' ? 'Website' :
                                                                item[0] === 'list' ? 'Lead List' : ''
                                                }</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                )
                            }
                            }
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
export default MainDashboard
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
        bottom: 10,

    },
    insidetxt: {
        marginHorizontal: 13,
        position: 'absolute',
        fontSize: 15,

        color: 'black',

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
