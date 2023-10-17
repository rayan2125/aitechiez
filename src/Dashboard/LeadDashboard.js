import Rect, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import AppHeader from '../navigation/component/AppHeader/AppHeader'
import { colors } from '../assets/config/colors'
import Toptefl from '../component/Toptenfl'

// import { FlatList } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window')
const LeadDashboard = ({ navigation ,route}) => {

// const roleUser = route.params
// const [role,setRole]=useState(roleUser)
    return (
        <>
            <AppHeader
bgColor={colors.orange}
text='Lead Management'
onTextChange={(text) => {
    if (text === "Lead Management") {
      console.log("work or not");
    }
  }}
// data={role}


            />
            

                <View style={{ backgroundColor: '#F2F5FF', width: width, height: height }}>

                    <View style={{ padding: 10 }}>


                    </View>
                    <ScrollView style={{height:'90%'}}>
                        <View style={{ padding: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 40 }}>

                                <View style={styles.insidecontainer}>
                            <TouchableOpacity >
                            <View style={styles.iconOut}>
                                    <View style={styles.iconBackground}>
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>6</Text>
                                    </View>
                                    </View>
                                    <View>
                                        <Text style={styles.insidetxt}>
                                            Todays Follow
                                        </Text>
                                    </View>

                            </TouchableOpacity>
                                </View>
                            <TouchableOpacity >

                                <View style={styles.insidecontainer}>
                                <View style={styles.iconOut}>
                                    <View style={styles.iconBackground}>
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>20</Text>
                                    </View>
                                    </View>
                                    <View>
                                        <Text style={styles.insidetxt}>
                                            Todays Meeting
                                        </Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >

                                <View style={styles.insidecontainer}>
                                <View style={styles.iconOut}>
                                    <View style={styles.iconBackground}>
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>10</Text>
                                    </View>
                                    </View>
                                    <View>
                                        <Text style={styles.insidetxt}>
                                            Meeting with in 2 hours
                                        </Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >

                                <View style={styles.insidecontainer}>
                                <View style={styles.iconOut}>
                                    <View style={styles.iconBackground}>
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>18</Text>
                                    </View>
                                    </View>
                                    <View>
                                        <Text style={styles.insidetxt}>
                                            Follow-up with in 2 hours
                                        </Text>
                                    </View>


                                </View>
                            </TouchableOpacity>








                        </View>
                           
                        <View style={{height:'70%', position:'relative', zIndex:99999}} >
                       <Toptefl/>
                        </View>
                       
                    </ScrollView>
                   

                </View>

            

        </>

    )
}
export default LeadDashboard
const styles = StyleSheet.create({
    insidetxt: {
        marginHorizontal: 13,
        fontSize: 15,
        top: 3,
        color: 'black'
    },
    insidecontainer: {
        backgroundColor: '#fff',
        height: 165, width: 165,
        justifyContent: 'center',
        borderRadius: 10,
        zIndex: 10,
        elevation: 5
    },
    iconBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#cc5500",
        width: 75, height: 75,
        borderRadius: 100,
    },
    iconOut: {
        alignItems: 'flex-end',
        marginRight: 20,
        bottom: 10
    },
    userdepart: {
        backgroundColor: "#cc5500",
        height: "30%",
        width: "30%",
        borderRadius: 10,
        zIndex: 10,
        elevation: 10

    }
})