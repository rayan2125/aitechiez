
import React from 'react'
import { View,Text,StyleSheet, TextInput,TouchableOpacity,Dimensions,FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome5'
const {width,height} = Dimensions.get('window')
import styled from 'styled-components/native'

const Card =()=>{
    const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: #BF4F74;
`
    // const data = [
    //     { id: '1', title: 'Item 1' },
    //     { id: '2', title: 'Item 2' },
    //     { id: '3', title: 'Item 3' },
    //     // Add more items as needed
    //   ];
    return(
        <LinearGradient  colors={['#C7FFD1','#6B55A3']}
        style={{flex:1}}
        >

<View style={{ justifyContent:'center', alignItems:'center', flex:1}} >
    <LinearGradient colors={['#C7FFD1',"#9B1C53",]} style={{ height:height-50,width:width-100,borderBottomLeftRadius:30,borderBottomRightRadius:30, justifyContent:'center', }}> 
<View style={{height:height-300,width:width-500, borderRadius:99, backgroundColor:'#FCE2EC',borderBottomLeftRadius:0,borderBottomRightRadius:0,justifyContent:'center', alignItems:'center'}}>
<LinearGradient colors={['#7C1643','#C7FFD1','#6B55A3']} style={{backgroundColor:'red', height:200, width:200,borderRadius:99,justifyContent:'center',alignItems:'center'}}>
<View style={{backgroundColor:'white', height:50, width:50,borderRadius:99,justifyContent:'center'}}>

</View>
</LinearGradient>
</View>
<View style={{backgroundColor:'white', height:2}}>

</View>
<View style={{flexDirection:'row', justifyContent:'space-around',alignItems:'center',top:10}}>

<Icon name ='caret-left' size={30} color='white'/>
<Icon name ='pause' size={30} color='white'/>
<Icon name ='caret-right' size={30} color='white'/>
</View>
<View>
    <Text style={{textAlign:"center",top:20, color:"#FEEBFF", fontWeight:'bold', fontSize:30}}>Haye Rama</Text>
</View>
    </LinearGradient>



</View>
        </LinearGradient>
    )
}
export default Card
const styles =StyleSheet.create({

})







{/* <FlatList
    horizontal
    data={data}
    renderItem={(key,item)=>{
        return(
<View style={{padding:10, width:width}} >
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
                                        placeholder="401" />
                                </View>
                                <View style={{ width: '40%', justifyContent:'center',left:50 }}>
                                    <Text
                                        style={{ color: 'white' }}
                                    >Due Date</Text>
                                    <TextInput placeholder="15-07-2023"
                                        style={{ fontWeight: 'bold', bottom: 10 }}
                                        placeholderTextColor='white'
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text
                                        style={{ color: 'white' }}
                                    >Payable Amount</Text>
                                    <View></View>
                                    <TextInput placeholder=" ₹ 5777"
                                        style={{ fontWeight: 'bold' ,borderBottomColor:'white'}}
                                        placeholderTextColor='white'
                                    />
                                </View>
    
                                <TouchableOpacity style={{ width: 30 }} onPress={()=>navigation.push('Bill')}>
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
        )
    }}
/> */}
{/* <StyledView>
    <StyledText>
        hiii
    </StyledText>
</StyledView> */}