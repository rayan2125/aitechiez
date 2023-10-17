import Rect from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import AppHeader from '../navigation/component/AppHeader/AppHeader'
import Bottom from '../navigation/component/Bottom/bottom'
// import Bottom from '../navigation/component/Bottom/bottom'
const { width, height } = Dimensions.get('window')
const Userdashboard = ({ navigation }) => {
    return (
        <>

            <View style={{ backgroundColor: '#F2F5FF', width: width, height: height }}>
                {/* HEaderr  */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, height: 80, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.push('enfdashboard')}>
                        <View >

                            <Text style={{ color: 'black', fontSize: 20 }}>Dashboard</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ marginHorizontal: 19 }} >
                            <View style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 90, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="user" color="black" size={18} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="bell" color="black" size={18} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ padding: 10 }}>


                </View>
                <View style={{}}>
                    <View style={{ padding: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 40 }}>

                        <TouchableOpacity >
                            <View style={styles.insidecontainer}>
                                <View style={styles.iconOut}>
                                    <View style={styles.iconBackground} >
                                        <Icon name='user-friends' color="white" size={35} />
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.insidetxt}>
                                        Total User
                                    </Text>
                                </View>


                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >

                            <View style={styles.insidecontainer}>
                                <View style={styles.iconOut}>
                                    <View style={styles.iconBackground}>
                                        <Icon name='users' color="white" size={35} />
                                    </View>

                                </View>
                                <View>
                                    <Text style={styles.insidetxt}>
                                        Total Active Users
                                    </Text>
                                </View>


                            </View>
                        </TouchableOpacity>








                    </View>
                </View>

                <View style={{ padding: 10 }}>
                    <View style={{ flexDirection: 'row', height: height, gap: 10, width: width, borderRadius: 10 }}>
                        <View style={styles.userdepart} >
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => navigation.push('Check')}>
                                        <View style={{ backgroundColor: 'white', width: 45, height: 60, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon name="user" color="" size={30} />


                                        </View>
                                    </TouchableOpacity>



                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Hr Department</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.userdepart}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={()=>navigation.push('Account')}>
                                        <View style={{ width: 45, height: 60, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                                            <Icon name="address-card" color="white" size={30} />
                                        </View>
                                    </TouchableOpacity>



                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Account</Text>
                                </View>
                            </View>

                        </View>
                        <View style={styles.userdepart}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


                                    <View style={{ width: 45, height: 60, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon name="whmcs" color="white" size={30} />
                                    </View>

                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Development</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                </View>
                <Bottom />

            </View>

        </>

    )
}
export default Userdashboard
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
        backgroundColor: '#00B7D7',
        width: 75, height: 75,
        borderRadius: 100,
    },
    iconOut: {
        alignItems: 'flex-end',
        marginRight: 20,
        bottom: 10
    },
    userdepart: {
        backgroundColor: '#00B7D7',
        height: "30%",
        width: "30%",
        borderRadius: 10,
        zIndex: 10,
        elevation: 10

    }
})