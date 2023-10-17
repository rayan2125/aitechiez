import React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Modal, Alert, Button } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppHeader from "../../navigation/component/AppHeader/AppHeader";
import Api from "../../services/api";
import { API_CONSTANTS } from "../../assets/config/constants";
import { colors } from "../../assets/config/colors";


const { width, height } = Dimensions.get('window')
const Societym = ({ navigation, route }) => {

    const apiCtrl = new Api
    const [state, setState] = useState({
        filter: null,
        refreshing: false,
        loading: false,
        pageStart: 0,
        pageLength: 2,
        totalRecords: 0,

    });
    const [societyData, setSocietyData] = useState([
        1,
        2,
        3,

    ]);
    // console.log("sooosos", societyData)

    useEffect(() => {
        getSociectyData()
    }, [])

    const getSociectyData = () => {

        apiCtrl.callAxios(API_CONSTANTS.socmmng, { start: 0, length: 5 }).then(res => {
            const { aaData } = res.data
           setSocietyData([...aaData])
        })
    }
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const [modal, setModal] = useState(false)

    return (
        <>
            <AppHeader
                text='Soceity Management'
                bgColor='#1B4A46'
                BackIcon='arrow-left'
                onPress={() => navigation.push('MainDashboard')}
            />
            <View>
                <FlatList
                    data={societyData}
                    horizontal

                    renderItem={(Items, key) => {

                        const eItem = Items.item


                        return (
                            <View style={{ padding: 10, width: width }}>
                                <View >
                                    <LinearGradient colors={['#00c3e3', '#f70072']}
                                        start={{ x: 0.9, y: .2 }} end={{ x: 0.6, y: .6 }}
                                        locations={[1, 1, 0.6]}
                                        style={styles.linearGradient}>
                                        <View style={{ backgroundColor: '#00c3e3', }}></View>
                                        <View style={{ padding: 10, }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View>
                                                    <Text
                                                        style={{ color: 'white' }}
                                                    >Flat No</Text>
                                                    <TextInput
                                                        style={{ fontWeight: 'bold', bottom: 10 }}
                                                        placeholderTextColor='white'
                                                    >{eItem.flat_detail_id}</TextInput>
                                                </View>
                                                <View style={{ width: '40%', justifyContent: 'center', left: 50 }}>
                                                    <Text
                                                        style={{ color: 'white' }}
                                                    >Due Date</Text>
                                                    <TextInput
                                                        style={{ fontWeight: 'bold', bottom: 10 }}
                                                        placeholderTextColor='white'
                                                    >{eItem.billing_month}</TextInput>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View>
                                                    <Text
                                                        style={{ color: 'white' }}
                                                    >Payable Amount</Text>
                                                    <View></View>
                                                    <TextInput placeholder=" ₹ 5777"
                                                        style={{ fontWeight: 'bold', borderBottomColor: 'white' }}
                                                        placeholderTextColor='white'
                                                    />
                                                </View>

                                                <TouchableOpacity style={{ width: 30 }} onPress={() => navigation.push('Payment')}>
                                                    <View style={{ backgroundColor: 'white', borderRadius: 20, width: 150, height: 30, right: 120, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text style={{ color: '#964B00' }}>Payment Request </Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <Modal
                                                    transparent={true}
                                                    visible={modal}
                                                    animationType="slide"
                                                >
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>


                                                        <View style={{ backgroundColor: 'white', height: "30%", width: '80%', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                                                            <TouchableOpacity onPress={toggleCollapse}>
                                                                <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>Cash</Text>
                                                            </TouchableOpacity>
                                                            {
                                                                !isCollapsed && (
                                                                    <>
                                                                        <View style={{borderColor:'black', borderWidth:.6, width:"90%", height:"50%", borderRadius:10, flexDirection:'column'}}>
                                                                            <View style={{ flexDirection: 'row',  alignItems: 'center', justifyContent: 'center',}}>
                                                                                
                                                                                <Text style={{color:'black',fontWeight:'bold'}}>Amount:</Text>
                                                                                <TextInput placeholder="4353553"
                                                                                
                                                                                style={{borderColor:'black', borderWidth:.7, height:40, marginHorizontal:10, borderRadius:6}}/>
                                                                                
                                                                            </View>
                                                                            <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center',width:'100%' }}>

                                                                            <Text style={{color:'black',fontWeight:'bold',width:'50%'}}>Payment  Date:</Text>
                                                                                <TextInput 
                                                                                // placeholder="4353553"
                                                                                
                                                                                style={{borderColor:'black', borderWidth:.7, height:40,borderRadius:6,width:'50%'}}/>
                                                                            </View>

                                                                        </View>
                                                                    </>



                                                                )
                                                            }
                                                            <TouchableOpacity>
                                                                <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>Chaque</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity>
                                                                <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>Digital</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                        <TouchableOpacity onPress={() => setModal(false)}>
                                                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: 25, width: 25, borderRadius: 99, top: 10 }}>

                                                                <Text style={{ color: 'white', }}> X</Text>
                                                            </View>
                                                        </TouchableOpacity>

                                                        {/* <View>
                                                            <Button title={isCollapsed ? 'Expand' : 'Collapse'} onPress={toggleCollapse} />
                                                            {!isCollapsed &&
                                                            <View style={{flexDirection:'row', justifyContent:'center', width:'80%'}}>
                                                                <Text>dsd the brand :</Text>
                                                                <TextInput
                                                                placeholder="6666"
                                                                />
                                                                </View>
                                                             
                                                             }
                                                        </View> */}


                                                    </View>

                                                </Modal>
                                            </View>
                                            <View>
                                                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 20, justifyContent: 'center', alignItems: 'center', opacity: 1, height: 40 }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Last payment made for rs 789 on 04 July 2023</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </View>


                            </View>

                        )
                    }}


                />
                <View>
                    <View style={{ padding: 10 }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4, }}>
                            <View style={styles.insidecontainer}>
                                <TouchableOpacity onPress={() => navigation.push('Bill')}>
                                    <View style={styles.iconOut}>
                                        <View style={styles.iconBackground} >
                                            <Icon name='building' color="black" size={35} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.insidetxt}>
                                            Bill
                                        </Text>
                                    </View>

                                </TouchableOpacity>
                            </View>
                            <View style={styles.insidecontainer}>
                                <TouchableOpacity >
                                    <View style={styles.iconOut}>
                                        <View style={styles.iconBackground} >
                                            <Icon name='credit-card' color="black" size={35} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.insidetxt} >
                                            Payment
                                        </Text>
                                    </View>

                                </TouchableOpacity>
                            </View>
                            <View style={styles.insidecontainer}>
                                <TouchableOpacity >
                                    <View style={styles.iconOut}>
                                        <View style={styles.iconBackground} >
                                            <Icon name='globe' color="black" size={35} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.insidetxt}>
                                            abc
                                        </Text>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </View>

        </>
    );
};

export default Societym;

const styles = StyleSheet.create({
    linearGradient: {
        zIndex: 9, elevation: 5, borderRadius: 10
    },
    insidecontainer: {
        backgroundColor: '#fff',
        height: 100,
        width: 120,
        justifyContent: 'center',
        borderRadius: 10,
        zIndex: 10,
        elevation: 5
    },
    iconOut: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#00B7D7',
        width: 50, height: 50,
        borderRadius: 100,
    },
    insidetxt: {

        fontSize: 15,
        textAlign: 'center',
        color: 'black'
    },
});
