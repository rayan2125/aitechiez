import Rect from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import AppHeader from '../navigation/component/AppHeader/AppHeader'
import Bottom from '../navigation/component/Bottom/bottom'
// import Bottom from '../navigation/component/Bottom/bottom'
const { width, height } = Dimensions.get('window')


const Department =()=>{
    return(
<View style={{backgroundColor:'white',  height:70, borderRadius:5}}>
</View>
    )
}

const Account = ({ navigation }) => {
    return (
        <>

            <View style={{ backgroundColor: '#F2F5FF', width: width, height: height }}>
                {/* HEaderr  */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, height: 80, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.push('userdashboard')}>
                        <View >

                            {/* <Text style={{ color: 'black', fontSize: 20 }}></Text> */}
                            <Icon name='arrow-left' size={30} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ borderColor: 'black', borderWidth: 1, width: "60%", borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 40 }}>
                        <Text>Accounts</Text>
                        <Icon name='caret-down' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <TouchableOpacity>
                            <Icon name="bars" color="black" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                  
                     

                            <View style={{ borderColor: 'black', borderWidth: 1, width: '100%', borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: 40 }}>
                               
                               <View style={{flexDirection:'row', marginHorizontal:20,alignItems:'center'}}>
                               <Icon name='search'  size={20}/>
                                <Text style={{fontSize:20,fontWeight:'300'}}> Search</Text>
                                </View> 
                                

                            </View>

                </View>
<View style={{padding:10}}>
<View>
    <Text style={{color:'black', fontSize:20}}> Accounts User List with Department</Text>
</View>
</View>
<View style={{padding:10,marginBottom:5}}> 
<Department/>
<Text></Text>
<Department/>
<Text></Text>
<Department/>
<Text></Text>
<Department/>
<Text></Text>
<Department/>
</View>




            </View>

        </>

    )
}
export default Account
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
        borderRadius: 10
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
        borderRadius: 10

    }
})