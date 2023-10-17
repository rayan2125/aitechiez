import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, ActivityIndicator, Button, Alert, Modal, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppHeader from '../navigation/component/AppHeader/AppHeader';
import { TouchableOpacity } from 'react-native';
import Api from '../services/api';
import StorageController from '../services/storage';
import { API_CONSTANTS } from '../assets/config/constants';
import { FlatList } from 'react-native';
import { colors } from '../assets/config/colors';
import { textModifier } from '../services/textModifier';

const { width, height } = Dimensions.get('screen')



const Website = ({ navigation, route }) => {
    const apiCtrl = new Api
    const storageCtrl = new StorageController;
    const [state, setState] = useState({
        filter: null,
        refreshing: false,
        loading: false,
        pageStart: 0,
        pageLength: 2,
        totalRecords: 0,

    });


    const [companylist, setCompanylist] = useState([]);

  

    const [collapse, setCollapse] = useState(false)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        getenquiryList(2);
    }, [])


    const getenquiryList = (pageLength) => {

        apiCtrl.callAxios(API_CONSTANTS.companylist, { length: pageLength, start: 0, }).then(res => {
            const { data } = res.data


            setCompanylist([...res.data.data])


            setState(old => ({ ...old, pageLength: pageLength }))

            setLoader(false)


            if (res.success == true) {



            }

        })
    }



    const onBack = () => {

        navigation.navigate('MainDashboard', { companylist })

    }
    const handleRefreshFromTop = () => {
        console.log("Coming to top");
        getenquiryList(state.pageLength + 2);

    };
    const handleLoadMoreFromBottom = () => {
        console.log("Coming to bottom");
        getenquiryList(state.pageLength + 2);
    };




    return (
        <>
            <AppHeader text="Company Lead"
                bgColor={colors.PRIMARY}
                BackIcon="arrow-left"
                HeaderTxtColor={colors.HeaderTxtColor}
                onPress={() => onBack()}
                Search="leads"
                Filter="" />


            <View style={{ width: width, height: height }}>




                {loader ? <View style={styles.loader}><ActivityIndicator size={50} animating={loader} style={{ color: colors.PRIMARY }} />
                    <Text>Please wait...</Text></View> : ""}
                <FlatList
                    data={companylist}
                    
                    renderItem={(Item, key) => {

                        var enquiryData = Item.item;




                        const addd = enquiryData.company_address




                        return (
                            <>
                                <View style={{ height: 100, width: width }}>
                                    <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ height: 70, width: 70, marginHorizontal: 5, }}>

                                                <Image source={{ uri: enquiryData.logo }} style={{ resizeMode: 'contain', height: '100%', padding: 10 }} />
                                            </View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View>
                                                    <Text style={{ color: 'black' }}>{enquiryData.company_name}</Text>

                                                    <TouchableOpacity>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                                            <Text style={{ color: '#4285F4', }}>{enquiryData.website}</Text>
                                                            <Icon name="link" color='#4285F4' />
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                                            {/* <Text >{enquiryData.primary_email}</Text> */}
                                                            <Icon name ="envelope"/>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <Text style={{color:'green'}}>{enquiryData.created}</Text>
                                                    
                                                </View>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-around', }}>
                                                <View style={{ justifyContent: 'center', alignContent: 'center', borderColor: 'black', borderWidth: 1, height: 19, width: 28, borderRadius:4 , }}>
                                                    <View>

                                                        <Icon name="eye" style={{marginHorizontal:5}} color='black' />
                                                    </View>
                                                </View>
                                                <View style={{ justifyContent: 'center', alignContent: 'center', borderColor: 'black', borderWidth: 1, height: 19, width: 26, borderRadius:4  }}>
                                                    <View>

                                                        <Icon name="edit" style={{marginHorizontal:5,}} color='black' />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                    </View>

                                    <View>

                                    </View>
                                    <View style={{ padding: 15 }}>
                                        <View style={{ height: .1, width: "100%", borderColor: 'grey', borderWidth: .3, }}>

                                        </View>
                                    </View>

                                </View>





























                            </>

                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    refreshing={state.refreshing}
                    onRefresh={handleRefreshFromTop}
                    onEndReached={handleLoadMoreFromBottom}

                />




            </View>


        </>

    )
}

export default Website

const styles = StyleSheet.create({
    card: {
        padding: 10
    },
    contanier: {

        // aligns:'center',
        zIndex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 2


    },
    rotate180: {
        transform: 'rotateZ(90deg)',
        animation: ' m 8s  linear',
        animationDelay: '-2s',
        transformOrigin: '50% 120.7%',
        transition: '2s'
    },

    rotate0: {
        transform: 'rotateZ(0deg)',

        transition: '2s'
    },
    sliderShow: {
        opacity: 1,
    },
    sliderHide: {
        display: 'none',
        transition: ' opacity 3s',
        opacity: 0
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '85%',


    },
    insubContainer: {
        padding: 10,
        width: '85%',
    },
    txt: {
        fontSize: 15,
        padding: 5,
        fontWeight: 'bold'

    },
    arrow: {
        // justifyContent:'flex-end',
        alignItems: 'flex-end',
        alignItems: 'center'

    },
    details: { margin: "5%", width: "100%" },
    loader: {

        justifyContent: 'center',
        alignItems: 'center',

        height: "90%",

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})
{/* <Text style={{ fontSize: 20, marginBottom: 10 }}>{Item.item.data.name}</Text> */ }


{/* <Text style={{ fontSize: 20, marginBottom: 10 }}>{Item.item.is_active}</Text> */ }
{/* <View style={{ width: '15%', alignSelf: 'center', backgroundColor: 'green', height: '30%', borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }}>
<Text style={{ textAlign: 'center', color: 'white' }} >{Item.item.data.status}</Text>
</View> */}
// ListEmptyComponent={<View style={{height:80, width:'95%', alignSelf:'center'}}></View>}













