import { ScrollView, StyleSheet, Text, TextInput, View, ActivityIndicator, Linking, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppHeader from '../navigation/component/AppHeader/AppHeader';
import { TouchableOpacity } from 'react-native';
import Api from '../services/api';
import StorageController from '../services/storage';
import { API_CONSTANTS } from '../assets/config/constants';
import { FlatList } from 'react-native';
import { colors } from '../assets/config/colors';
import { textModifier } from '../../services/textModifier';


const  Toptefl = ({ navigation, route }) => {
  const apiCtrl = new Api
  const storageCtrl = new StorageController;


  const [lead, setLead]=useState([])
const [orgaLead, setOrgaLead]=useState({})
const[ownerLead, setOwnerLead]=useState({})



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
  const [loader,setLoader] =useState(true)
 
  useEffect(() => {
    getenquiryList(10);
  }, [])

  const getenquiryList = (pageLength) => {
    apiCtrl.callAxios(API_CONSTANTS.enquiry, { length: pageLength, start: 0, filter: state.filter, enquiry_type: state.enquiry_type }).then(res => {
    
      setLoader(false)
      if (res.success == true) {
        let enquiryList = [];
       

        let dattaa = res.data.aaData
        
        
        setEnquiryList(dattaa)

        setState(old => ({ ...old, pageLength: pageLength }))
      
      }else{

        
      }
    })
  }
 


  const onBack = () => {
    navigation.navigate('dashboard')

  }


 



  const handleRefreshFromTop = () => {
    console.log("Coming to top");
    getenquiryList(state.pageLength + 10);

  };
  const handleLoadMoreFromBottom = () => {
    
    getenquiryList(state.pageLength + 10);
  };
 

  const renderLoader = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
        {state.loading ?
          <View style={{}}>
            <Text>Please wait....</Text>
            <ActivityIndicator size="small" style={{color:colors.PRIMARY}} />
          </View>
          :
          <View style={{}}>
            <ActivityIndicator size="small" color="#fff" animating={false} />
          </View>
        }
      </View>
    );
  };


  return (
    <>
   
   
      <View  >


        
        
       { loader? <View style={styles.loader}><ActivityIndicator size={50} animating={loader}  style={{color:colors.PRIMARY}}  />
        <Text>Please wait...</Text></View> :""}


        
        
        <FlatList
          data={enquiryList}
          renderItem={(Item, key) => {
            

const leadData = Item.item.data.data;

const organization = leadData?.organization ?? '';
const organizationName = leadData?.organization?.organization_name ?? '';
const organizationEmail = leadData?.organization?.organization_email ?? '';
const organizationContact = leadData?.organization?.contact_1 ?? '';
const owner = leadData?.owner?.owner_name ?? '';
const handleCallPress=()=>{
  Linking.openURL(`tel:${organizationContact}`);
}
const handleEmailPress =()=>{
  Linking.openURL(`mailto:${organizationEmail}`)
}





{



  
    
      return(


        <>
    
    <View style={{ padding: 10 }} >
    <View style={styles.contanier}>
      <View>
      <View style={{ flexDirection: 'row', }}>
    
      <View style={styles.subContainer}>
      <View>

        <View> 

        
         
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, alignItems: 'center', padding: 10, width: '100%' }}>

<View style={{ flexDirection: 'row', width: '50%',alignItems:'center',gap:5 }}>
  <Text style={{ color: colors.orange, fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{organizationName} {
    owner&&owner.owner_name!==undefined&&(
      <Text style={{ color: colors.orange, fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>{owner ? '(' + owner.owner_name + ')' : ''}</Text>

    )
  }</Text>


</View>

<View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '50%' }}>

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

        </View>
    
</View>
                               
        </View>
        </View>
      </View>
      
        <View style={[styles.insubContainer, styles[collapse[Item.item.id] ? 'sliderShow' : 'sliderHide']]}>
<View style={{backgroundColor:'white', flex:1, justifyContent:'flex-start', alignItems:'flex-start',}}>


<View style={{ padding: 10 }}>

            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: 'green', fontWeight: 'bold' }}>{organization.organization_type}</Text>
            </View>
            <View>


              <View style={{ marginBottom: 5, flexDirection: 'row', alignItems:'center', width:'100%'}}>
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
                <Text style={{ width:'70%', marginHorizontal:5 ,}}>{organization.address}, {organization.city}, {organization.district}, {organization.pincode}</Text>

              </View>
              <View style={{ backgroundColor: "grey", height: 1 }}>
                <Text></Text>
              </View>
            </View>
          
          </View>




        </View>
        </View>
       
      
                        <View>
                  
                        </View>
                        </View>
                        </View>
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
        
       

        <View style={[{ height: 50 }]}></View>
      </View>


    </>

)
}

export default Toptefl

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
  loader:{
    
    justifyContent:'center',
    alignItems:'center',
  
    height:"90%",
    
  }
})