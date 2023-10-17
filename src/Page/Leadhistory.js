import { ScrollView, StyleSheet, Text, View, Linking, Modal, Pressable, Alert, Animated, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppHeader from '../navigation/component/AppHeader/AppHeader';
import { TouchableOpacity } from 'react-native';
import Crypt from '../Crypt/Crypt';

import Api from '../services/api';
import { API_CONSTANTS } from '../assets/config/constants';
import { FlatList } from 'react-native';
import { colors } from '../assets/config/colors';
import { Update } from '../component/LeadUpHis';
import Boxes from '../component/Boxes';
import messaging from '@react-native-firebase/messaging';
import { getToken, notification, requestUserPermission, onDisplayNotification, unsubscribeBackground } from '../services/utils';
import { getLatestRemoteMessage } from '../services/Helper';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import DropdownComponent from '../Library/NaiveMaterialDropdown';
import Mom from './Mom';
import MultiFrom from './MultiFrom';
import DropdownSelect from './Dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import NewDatepicker from './NewDatepicker';
import UpdateHistory from '../Library/UpdateHistory';
import SingleDropdown from './SingleDropdown';
import StorageController from '../services/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Leadhistory = ({ navigation, route }) => {
  console.log("typeof role are coming",route)
  const apiCtrl = new Api
  const storageCtrl = new StorageController;
  const cryptCtrl = new Crypt


  const data = async (value)=>{
    try {
      const getData = await storageCtrl.getItem('user_details') 
      console.log("getet",getData)     
    } catch (error) {
      console.log("errr",error)
      
    }
  }
  // const data = storageCtrl.getItem("user_details")
  // console.log("data",data)


  const [lead, setLead] = useState([])
  const [orgaLead, setOrgaLead] = useState({})
  const [ownerLead, setOwnerLead] = useState({})
  const [loadBtn, setLoadBtn] = useState(false)

  const [state, setState] = useState({
    filter: null,
    refreshing: false,
    loading: false,
    pageStart: 0,
    pageLength: 10,
    totalRecords: 0,
    enquiry_type: 'sales',

  })

  const [enquiryList, setEnquiryList] = useState({});

  const [collapse, setCollapse] = useState(false)
  const [loader, setLoader] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);
  const [view, setView] = useState(false);
  const [form, setForm] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState([])
  // lead Assign by user 
  const [totalLeads, setTotalLeads] = useState(0);
  // console.log("total",totalLeads)
  const [availableLeads, setAvailableLeads] = useState([]);
  // console.log("aviable lead ",availableLeads)

  const [mFrom, setMFrom] = useState(false)
  const [follForm, setFollForm] = useState(false)



  useEffect((navigation) => {
    getenquiryList(10);
    userList();
    requestUserPermission()
    notification(navigation)
    const latestRemoteMessage = getLatestRemoteMessage();
    console.log('Latest remoteMessage:', latestRemoteMessage);
    getToken()
    getDeviceToken()


    // history();
  }, [])

  useEffect(() => {
    const data = async (value)=>{
      try {
        const getData = await storageCtrl.getItem('user_details') 
        console.log("getet",getData)     
      } catch (error) {
        console.log("errr",error)
        
      }
    }
    data()
  }, []);

  // var role = cryptCtrl.decrypt(storageCtrl.getItem('user_roles'))
  // var roles = JSON.parse(role)
  // console.log(roles)


  // const userDetailsString = storageCtrl.getItem('user_details');
  // const parsedUserDetails = JSON.parse(userDetailsString);
  
  // console.log("userDetails ===>", parsedUserDetails);

  const userList = (pageLength) => {

    apiCtrl.callAxios(API_CONSTANTS.userlist, { length: pageLength, start: 0, filter: '', }).then(res => {

      const userListData = res.data.aaData

      setUserData(userListData)

    })
  }



  const getenquiryList = (pageLength) => {

    apiCtrl.callAxios(API_CONSTANTS.enquiry, { length: pageLength, start: 0, filter: '', enquiry_type: state.enquiry_type })
    .then(res => {

      setLoader(false)
      if (res.success == true) {
        let enquiryList = [];



        let dattaa = res.data.aaData
        

        setEnquiryList(dattaa)
        setTotalLeads(dattaa)
        setAvailableLeads(Array.from({ length: data }, (_, i) => i + 1));
        setState(old => ({ ...old, pageLength: pageLength }))

      } else {


      }
    })
  }

  const getDeviceToken = async () => {
    let token = await messaging().getToken()
    // console.log("hfhhfh", token)
  }

  const onBack = () => {
    navigation.navigate('LeadDashboard')

  }



  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };


  const handleRefreshFromTop = () => {

    getenquiryList(state.pageLength + 10);

  };
  const handleLoadMoreFromBottom = () => {

    getenquiryList(state.pageLength + 10);
  };
  const viewDetail = () => {
    // setLoadBtn(true)
    setForm(true)

  }

  const renderLoader = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
        {state.loading ?
          <View style={{}}>
            <Text>Please wait....</Text>
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          </View>
          :
          <View style={{}}>
            {/* <ActivityIndicator animating={true} color={MD2Colors.red800} /> */}
          </View>
        }
      </View>
    );
  };


  return (
    <>
      <AppHeader text="Lead List"
        bgColor={colors.orange}
        BackIcon="arrow-left"
        HeaderTxtColor={colors.HeaderTxtColor}
        onPress={() => onBack()}
      />




      <View style={{ padding: 5 }} >




        {loader ? <View style={styles.loader}><ActivityIndicator size={50} animating={loader} style={{ color: colors.PRIMARY }} />
          <Text>Please wait...</Text></View> : ""}




        <FlatList
          data={enquiryList}
          renderItem={(Item, key) => {


            {
              return (


                <>
                  <Leads key={key} leadDatas={Item.item.data.data} Item={Item} userData={userData} />
                </>
              )


            }

          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          refreshing={state.refreshing}
          onRefresh={handleRefreshFromTop}
          onEndReached={handleLoadMoreFromBottom}
          ListFooterComponent={renderLoader}
        />




      </View >


    </>

  )
}

export default Leadhistory;


export const Leads = ({ leadDatas, userData, Item, }) => {
  // console.log("user",userData[0].id)
  // console.log("itesm",Item.item.enquiry_code)
  const navigation = useNavigation();
  const apiCtrl = new Api
  const [lead, setLead] = useState([])
  const [orgaLead, setOrgaLead] = useState({})
  const [ownerLead, setOwnerLead] = useState({})

  useEffect(() => {
    requestUserPermission()
    notification()
    getToken()
    unsubscribeBackground()
  }, [])
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    
  });

  const [state, setState] = useState({
    filter: null,
    refreshing: false,
    loading: false,
    pageStart: 0,
    pageLength: 10,
    totalRecords: 0,
    enquiry_type: 'sales',

  })

  

  const [collapse, setCollapse] = useState(false)
  const [loader, setLoader] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);
  const [view, setView] = useState(false);
  const [form, setForm] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectView, setSelectView] = useState(false);
  const [mFrom, setMFrom] = useState(false)
  const [follForm, setFollForm] = useState(false);
  const [mom, setMom] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const[showMeeting,setShowMeeting] =useState(false)

  const handlePress = ({ }) => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleOptionSelect = (option,id) => {
    console.log('options',id)
    
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setView(false)
    onDisplayNotification({
      title: `This is Lead Assign by ${option}`, body: ` ${option} `
    })



    apiCtrl.callAxios(API_CONSTANTS.assign, { length:'' , start: 0, filter: '', enquiry_code: Item.item.enquiry_code,
    user_id:id}).then(res => {

     
    })

    

    

  };

  const handleButtonPress = () => {
    setButtonPressed(true);
  };

  const leadData = leadDatas;

  const organization = leadData?.organization ?? '';
  const organizationName = leadData?.organization?.organization_name ?? '';
  const organizationEmail = leadData?.organization?.organization_email ?? '';
  const organizationContact = leadData?.organization?.contact_1 ?? '';
  const organizationWhat = leadData?.organization?.whatApps_number ?? '';
  const owner = leadData?.owner ?? '';
  const handleCallPress = () => {
    Linking.openURL(`tel:${organizationContact}`);
  }
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${organizationEmail}`)
  }


  const handleSubmit = () => {
    props.submit(state)
  }

  const viewDetail = () => {

    setForm(true)

  }



  const sendingData = () => {
    navigation.navigate('Mom', { data: organizationName })
  }

  const handleSubmitFrom = (formData) => {

    apiCtrl.callAxios(API_CONSTANTS.updateenquiey, formData).then(res => {




      if (res && res.data && res.data.status === "success") {

        if (res.data.data && res.data.data.type === "meeting") {
          Alert.alert(res.message)
          setMFrom(false)
        } else if (res.data.data && res.data.data.type === "folloup") {
          Alert.alert(res.message)
          setFollForm(false)
        }
      }
    })
  }
  const handleFormCancel = () => {
    setButtonPressed(false);
    setShowMeeting(false);
  };
  const upDatedHistory =()=>{
    navigation.navigate('UpdateHistory',{id:Item.item.id})
  }

  return (
    <View style={{ padding: 5, marginBottom: 15 }} >
      <View style={styles.contanier}>




        <View>

          <View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, alignItems: 'center', padding: 10, width: '100%' }}>

              <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center', gap: 5 }}>
                <Text style={{ color: colors.orange, fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{organizationName} {
                  owner && owner.owner_name !== undefined && (
                    <Text style={{ color: colors.orange, fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>{owner ? '(' + owner.owner_name + ')' : ''}</Text>

                  )
                }</Text>


              </View>
              {/* <TouchableOpacity style={{ width: '30%', justifyContent: 'center' }}
              onPress={() => setForm(true)}

            >

              <Icon name="eye"
                size={20}
              />
            </TouchableOpacity> */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '40%' }}>

                <TouchableOpacity onPress={handleEmailPress}>
                  <View style={{ backgroundColor: '#EDC91C', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 99 }}>

                    <Icon name="envelope" size={20}
                      color="white"
                    />

                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCallPress}>
                  <View style={{ backgroundColor: '#007FFF', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 99 }}>
                    <Icon name="phone-volume"
                      size={20}
                      color='white'
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                // onPress={handleWhatsPress}
                >
                  <View style={{ backgroundColor: 'green', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 99 }}>
                    <Icon name="whatsapp"
                      color='white'
                      size={20}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{ backgroundColor: '#FF3333', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 99 }}>
                    <Icon name="globe"
                      size={20}
                      color='white'
                    />
                  </View>
                </TouchableOpacity>


              </View>
            </View>

            <View style={{ padding: 10 }}>

              <View style={{ marginBottom: 10 }}>
                <Text style={{ color: 'green', fontWeight: 'bold' }}>{organization.organization_type}</Text>
              </View>
              <View>


                <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                  <Text style={{ color: 'black', fontWeight: 'bold', }}>
                    Address :
                    <TouchableOpacity style={{}}>
                      <View style={{ backgroundColor: '#FF3333', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 99 }}>
                        <Icon name="thumbtack"
                          size={20}
                          color='white'
                        />
                      </View>
                    </TouchableOpacity>
                  </Text>
                  <Text style={{ width: '70%', marginHorizontal: 5, }}>{organization.address}, {organization.city}, {organization.district}, {organization.pincode}</Text>

                </View>



                <View style={{ backgroundColor: "grey", height: 1 }}>
                  <Text></Text>
                </View>
              </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 15 }}>

              <TouchableOpacity style={{ width: '30%' }}
                onPress={() => setView(true)}
              >
                <View style={{ backgroundColor: 'black', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                  <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                    {selectedOption ? selectedOption : 'Assign Lead'}
                  </Text>
                </View>
              </TouchableOpacity>{
                <Modal transparent={true}
                  visible={view}
                >
                  <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', justifyContent: 'center', flex: 1, padding: 10, paddingVertical: 15 }}>
                    <View style={{ backgroundColor: 'white', zIndex: 10, elevation: 5, paddingVertical: 15, borderRadius: 15 }}>

                      <TouchableOpacity
                        onPress={handlePress}
                      >

                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                          <Text style={{ color: 'black', marginHorizontal: 5 }}>
                            {selectedOption ? selectedOption : 'Assign Person'}
                          </Text>
                          <Icon
                            name={isDropdownOpen ? 'caret-up' : 'caret-down'}
                            size={20}
                          />
                        </View>
                      </TouchableOpacity>
                      {isDropdownOpen && (
                        <View
                          style={{
                            marginTop: 10,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            elevation: 3,
                            padding: 1,

                          }}
                        >
                          <ScrollView>

                            {typeof userData !== 'undefined' && userData.map((option, index) => (
                              
                              ["Admin", "Sale", "Superadmin"].includes(option.role) && (
                              
                                <TouchableOpacity
                                  key={index}
                                  onPress={() => handleOptionSelect(option.name,option.id)}
                                  style={{ paddingVertical: 5 }}
                                >
                                  <Text style>
                                    {option.name}
                                  </Text>
                                </TouchableOpacity>
                              )
                            ))}
                          </ScrollView>


                        </View>

                      )}
                      <TouchableOpacity onPress={() => setView(false)}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                          <View style={{ backgroundColor: 'white', zIndex: 9, elevation: 5, width: '30%', borderRadius: 10 }}>
                            <Text style={{ color: 'orange', textAlign: 'center', fontWeight: 'bold' }}>Cancel</Text>
                          </View>

                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>

                </Modal>
              }
              <TouchableOpacity style={{ width: '30%' }} onPress={() =>upDatedHistory()}>
                <View style={{ backgroundColor: 'orange', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Lead History</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '30%' }}
               onPress={()=>setMFrom(true)}
              >
                <View style={{ backgroundColor: '#1AD9FF', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize:11 }}> Schedule Meeting</Text>
                </View>
              </TouchableOpacity>

             {/* {!buttonPressed ? (
              <TouchableOpacity style={{ width: '30%' }}
               onPress={handleButtonPress}
              >
                <View style={{ backgroundColor: '#1AD9FF', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Meeting</Text>
                </View>
              </TouchableOpacity>):(
                <View>
                  <TouchableOpacity onPress={()=>setShowMeeting(true)}>

                  <Text>Online </Text>
                  </TouchableOpacity>
                  {
                    <Modal 
                    transparent={true}
                    visible={showMeeting}
                    >

                       <MeetingForm
                      onCancel={handleFormCancel} 
                      submit={handleSubmitFrom}
                       />
                    </Modal>
                  }
                  <TouchableOpacity onPress={()=>setShowMeeting(true)}>

                  <Text>Offline </Text>
                  </TouchableOpacity>
                </View>
              )} */}
              
              {
                <Modal transparent={true}
                  visible={mFrom}
                >
                 
                  <MeetingForm
                    enquiry_id={Item.item.id}

                    submit={handleSubmitFrom}
                    setMFrom={setMFrom}

                  />
                </Modal>

              }
               {/* {showDropdown && <DropdownSelect />} */}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 15 }}>

              <TouchableOpacity style={{ width: '30%' }}
                onPress={viewDetail}
              >
                <View style={{ backgroundColor: '#1AD9FF', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                  <Text style={{ color: 'white', fontWeight: 'bold' }}>View Detail</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '30%' }}
                onPress={() => setFollForm(true)}

              >
                <View style={{ backgroundColor: '#FF0000', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                  <Text style={{ color: 'white', fontWeight: 'bold' }}> Add Follow-Up</Text>
                </View>
              </TouchableOpacity>{
                <Modal
                  transparent={true}
                  visible={follForm}
                >
                  <FollowingForm
                    enquiry_id={Item.item.id}
                    submit={handleSubmitFrom}
                    setFollForm={setFollForm}

                  />
                </Modal>
              }
              <TouchableOpacity style={{ width: '30%' }}
              // onPress={() => setFollForm(true)}
              >


                <View style={{ backgroundColor: '#3C8B50', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Update</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
              marginBottom: 15
            }}>

              <TouchableOpacity style={{ width: '30%' }}
                onPress={sendingData}
              >
                <View style={{ backgroundColor: '#6A9C96', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Create MOM</Text>
                </View>
              </TouchableOpacity>



              <TouchableOpacity style={{ width: '30%' }}
onPress={()=>navigation.navigate("Addattendees")}
              >
                <View style={{ backgroundColor: 'blue', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Attendees</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '30%' }}

              >
                <View style={{ backgroundColor: '#FF3F00', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                  <Text style={{ color: 'white', fontWeight: 'bold' ,fontSize:11}}>Reschedule Meeting</Text>
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity style={{ width: '45%' }} onPress={() => setSelectView(true)}>
              <View style={{ backgroundColor: 'white', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>

                <Text style={{ color: 'white', fontWeight: 'bold' }}></Text>
              </View>
            </TouchableOpacity> */}
            </View>
          </View>

        </View>

      </View>
      <Modal transparent={true}
        visible={form}
      >
        {




          <View style={{ backgroundColor: 'rgba(0,0,0,0.8)', padding: 20, flex: 1, justifyContent: 'center', position: 'relative' }}>


            <View style={{ backgroundColor: 'white', zIndex: 9, elevation: 5, borderRadius: 15, padding: 10, position: 'relative' }}>
              <View style={{ position: 'absolute', top: -13, right: -13 }}>
                <Pressable onPress={() => setForm(false)} style={{}}>

                  <View style={{ backgroundColor: 'red', borderRadius: 100, width: 30, height: 30, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textAlign: 'center', }}>X</Text>
                  </View>
                </Pressable>
              </View>
              <View >
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}> Organization Details</Text>
                {
                  <>
                    <View style={{ padding: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ borderRadius: 15, borderColor: 'yellow', borderWidth: 1, backgroundColor: '#FFFFD1', padding: 10 }}>


                        <View style={styles.mainview}>
                          <Text style={styles.textinside}>Name:</Text>
                          <Text style={styles.textview}>{organization.organization_name}</Text>
                        </View>
                        <View style={styles.mainview}>
                          <Text style={styles.textinside}>Email:</Text>
                          <Text style={styles.textview}>{organization.organization_email}</Text>
                        </View>
                        <View style={styles.mainview}>
                          <Text style={styles.textinside}>Contact:</Text>
                          <Text style={styles.textview}>{organization.contact_1}</Text>
                        </View>
                        <View style={styles.mainview}>
                          <Text style={styles.textinside}>WhatsApp:</Text>
                          <Text style={styles.textview}>{organization.whatApps_number}</Text>
                        </View>
                        <View style={styles.mainview}>
                          <Text style={styles.textinside}>Address:</Text>
                          <Text style={{ width: "70%" }}>{organization.address}, {organization.city}, {organization.district}, {organization.pincode}</Text>
                        </View>
                        <View style={[styles.mainview, { justifyContent: 'center', alignItems: 'center' }]}>
                          <Text style={styles.textinside}>Organization Type:</Text>
                          <Text style={{ width: "70%" }}>{organization.organization_type}</Text>
                        </View>

                      </View>
                    </View>
                  </>
                }
              </View>
              <View >
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}> Owner Details</Text>
                {
                  <>
                    <View style={{ padding: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ borderRadius: 15, borderColor: 'yellow', borderWidth: 1, backgroundColor: '#FFFFD1', padding: 10 }}>


                        <View style={styles.mainview}>
                          <Text style={styles.textinside}>Name:</Text>
                          <Text style={styles.textview}>{owner.owner_name}</Text>
                        </View>
                        <View style={styles.mainview}>
                          <Text style={styles.textinside}>Email:</Text>
                          <Text style={styles.textview}>{ }</Text>
                        </View>
                        <View style={styles.mainview}>
                          <Text style={styles.textinside}>Contact:</Text>
                          <Text style={styles.textview}>{ }</Text>
                        </View>


                      </View>
                    </View>
                  </>
                }
              </View>


            </View>
          </View>

        }

      </Modal>


      <View style={[styles.insubContainer, styles[collapse[Item.item.id] ? 'sliderShow' : 'sliderHide']]}>
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', }}>
          <Modal transparent={true}
            visible={modalVisible}
          >

          </Modal>



        </View>
      </View>

      <View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

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
  textview: {
    width: '70%'
  },
  textinside: {
    color: 'black',
    fontWeight: 'bold',
    width: '30%',
    textAlign: 'left'
  },
  mainview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }
})




export const MeetingForm = (props) => {
  // console.log("propp", props.data)
  const apiCtrl = new Api
const initialDate = new Date()
const [state, setState] = useState({
  datetime: props.initialDate,
  remark: '',
  type: 'meeting',
  enquiry_id: props.enquiry_id,
  type_of_meet:null
 
});

useEffect(()=>{
getenquiryList()
},[10])
const getenquiryList = () => {

  apiCtrl.callAxios(API_CONSTANTS.enquiry, { start: 0, filter: '', enquiry_type: state.enquiry_type }).then(res => {
// console.log("res", res)

    if (res.success == true) {
      let enquiryList = [];



      let dattaa = res.data.aaData







    } else {


    }
  })
}



const getvalue=(val)=>{
   //console.log("val---",val)
  //setMeetType(old=>({...old,val}))
  //  setMeetType(val)
  setState(old=>({...old, type_of_meet:val}))
  }
const getCleint =(val)=>{

}
const getStaff =(val)=>{

}

  const getdate=(date)=>{
    //console.log("date---",date)
   //setMeetType(old=>({...old,val}))
   //  setMeetType(val)
   //setState(old=>({...old, type_of_meet:val}))
   }

const meetingType = [
  {label: 'Online', value:"1"},
  {label: 'Offline', value:"2"},
 
];
const Attendees = [
  {label: 'Sarvan', value:"1"},
  {label: 'Nandkishor', value:"2"},
  {label: 'Prakash', value:"3"},
  {label: 'Mahesh', value:"4"},
  {label: 'New', value:"5"},
 
];
const Cleint = [
  {label: 'Niku', value:"1"},
  {label: 'Rishi', value:"2"},
  {label: 'Anuj', value:"3"},
  {label: 'Ramesh', value:"4"},
 
];

  // console.log("dateinfo", initialDate.toDateString())
 
  
  const handleSubmit = () => {

    props.submit(state)
   
      
      props.setMFrom(false)
   
  }
 
// console.log("state ", state)
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', padding: 10 }}>
      <View style={{ backgroundColor: 'white', padding: 10, paddingVertical: 30, borderRadius: 10 }}>
        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', marginBottom: 10, fontSize: 30 }}>Meeting</Text>
        </View>
        <View style={{ width: '100%', gap: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
            <Text style={{ width: '30%', color: 'black' }}>Date & Time:</Text>

           
            <View style={{width:'70%'}}>
            <NewDatepicker func={getdate} initialDate={initialDate} />
            </View>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
            <Text style={{ width: '30%', color: 'black' }}>Attendees:</Text>

           
            <SingleDropdown
            data={Attendees}
            label={"Select Attendees "}

            func={getStaff}
            />

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
            <Text style={{ width: '30%', color: 'black' }}> Client Attendees:</Text>

           
            <SingleDropdown
            data={Cleint}
            label={"Select Attendees "}

            func={getCleint}
            />

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
            <Text style={{ width: '30%', color: 'black' }}> Meeting:</Text>

           
            <SingleDropdown
            data={meetingType}
            label={"Meeting Type"}
            func={getvalue}
            />
            

          </View>
        
          < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
            <Text style={{ width: '30%', color: 'black' }}>Remark:</Text>
            <TextInput style={{ width: "70%",}}
             variant="outlined"
             value={state.remark}
             onChangeText={(text) => setState((prev) => ({ ...prev, remark: text }))}
            //  trailing={props => (
            //   <IconButton icon={props => <Icon name="calendar-check" {...props} />} {...props} />
            // )}
            />
          </View>
          {( (state.type_of_meet!==null)?
           ( state.type_of_meet ==="1" )?<>
          
            < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
            <Text style={{ width: '30%', color: 'black' }}>Meeting Link</Text>
            <TextInput style={{ width: "70%",}}
             variant="outlined"
             
            
            />
          </View>
          </>
          : <>
          < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%',alignItems:'center' }}>
            <Text style={{ width: '30%', color: 'black' }}> Location</Text>
            <TextInput style={{ width: "70%",}}
             variant="outlined"
             
            //  onChangeText={(text) => setState((prev) => ({ ...prev, : text }))}
            //  trailing={props => (
            //   <IconButton icon={props => <Icon name="calendar-check" {...props} />} {...props} />
            // )}
            />
          </View>
          </>:""
          )}
         
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 18 }}>
          <TouchableOpacity onPress={handleSubmit} style={{ width: '48%' }}>
            <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
              <Text style={{ color: 'white', fontWeight: "bold" }}>Submit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.setMFrom(false)} style={{ width: '48%' }}>
            <View style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
              <Text style={{ color: 'white', fontWeight: "bold" }}>Cancel</Text>
            </View>
          </TouchableOpacity>

        </View>


      </View>

    </View>
  )
}


export const FollowingForm = (props) => {
  const apiCtrl = new Api
  const [state, setState] = useState({
    datetime: '',
    remark: '',
    type: 'folloup',
    enquiry_id: props.enquiry_id
  });

  useEffect(() => {
    getenquiryList(10);

  }, [])
  const getenquiryList = () => {

    apiCtrl.callAxios(API_CONSTANTS.enquiry, { start: 0, filter: '', enquiry_type: state.enquiry_type }).then(res => {


      if (res.success == true) {
        let enquiryList = [];



        let dattaa = res.data.aaData







      } else {


      }
    })
  }
  const handleSubmit = () => {
    props.submit(state)

  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', padding: 10 }}>
      <View style={{ backgroundColor: 'white', padding: 10, paddingVertical: 30, borderRadius: 10 }}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', marginBottom: 10, fontSize: 30 }}>Follow - Up</Text>
        </View>
        <View style={{ width: '100%', gap: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' , alignItems:'center'}}>
            <Text style={{ width: '30%', color: 'black' }}>Date & Time:</Text>
            
            <View style={{width:'70%'}}>
 
            <NewDatepicker/>
            </View>
          </View>
          < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' ,alignItems:'center'}}>
            <Text style={{ width: '30%', color: 'black' }}>Remark:</Text>
            <TextInput style={{  width: "70%",}}
             variant="outlined"
              value={state.remark}
              onChangeText={(text) => setState((prev) => ({ ...prev, remark: text }))}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 18 }}>
          <TouchableOpacity onPress={handleSubmit} style={{ width: '48%' }}>
            <View style={{ backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
              <Text style={{ color: 'white', fontWeight: "bold", fontSize: 20 }}>Submit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.setFollForm(false)} style={{ width: '48%' }}>
            <View style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 20 }}>
              <Text style={{ color: 'white', fontWeight: "bold", fontSize: 20 }}>Cancel</Text>
            </View>
          </TouchableOpacity>

        </View>


      </View>

    </View>
  )
}


// export const Update = () => {


//   return (
//     <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.1)', padding: 10 }}>
//       <View style={{ backgroundColor: 'white', padding: 10, paddingVertical: 30, borderRadius: 10 }}>
//         <View>
//           <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', marginBottom: 10, fontSize: 30 }}>History</Text>
//         </View>
//         <View style={{ width: '100%', gap: 10 }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
//             <Text style={{ width: '30%', color: 'black' }}>Created:</Text>
//             <Text style={{width:'50%',textAlign:'left',right:30}}>hhhhh</Text>
//           </View>
//           <View style={{ height: 1, backgroundColor: 'grey' }}>

//           </View>
//           < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
//             <Text style={{ width: '30%', color: 'black' }}>Remark:</Text>
//             <Text style={{width:'50%',textAlign:'left',right:30}}>hhhhh</Text>
//           </View>
//           <View style={{ height: 1, backgroundColor: 'grey' }}>

//           </View>
//           < View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
//             <Text style={{ width: '30%', color: 'black' }}>Type:</Text>
//             <Text style={{width:'50%',textAlign:'left',right:30}}>hhhhh</Text>
//           </View>
//           <View style={{ height: 1, backgroundColor: 'grey' }}>

//           </View>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 18 }}>


//         </View>


//       </View>

//     </View>
//   )
// }

 export const GlowyButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    setIsPressed(true);
    Animated.spring(scale, {
      toValue: 1.1,
      useNativeDriver: false, // adjust based on your animation requirements
    }).start();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={{
          backgroundColor: isPressed ? '#E7F3F6' : '#3E8FA8',
          padding: 10,
          borderRadius: 10,
          transform: [{ scale }],
          // Add other styles for glow effect like shadow, etc.
        }}
      >
        {/* Your content goes here */}
      </Animated.View>
    </TouchableOpacity>
  );
};




