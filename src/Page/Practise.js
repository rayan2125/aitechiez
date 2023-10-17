import Rect from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AppHeader from '../navigation/component/AppHeader/AppHeader'
const { width, height } = Dimensions.get('window')
const website = () => {
    return (
        <>
            <AppHeader />
            <View style={{ backgroundColor: '#F2F5FF', width: width, height: height }}>
                {/* HEaderr  */}
                <View >

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                        <View>
                            <Text style={{ fontSize: 20, color: 'black' }}> Website</Text>
                        </View>
                        <View style={{ width: "40%", height: 50, }}>
                            <View style={{ borderColor: 'black', borderWidth: 1, marginHorizontal: 10, padding: 5, borderRadius: 8, backgroundColor: 'white' }}>
                                <Icon name='search' />
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{padding:10}}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 20, color: 'black' }}> Website Details</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={{ color: '#56AAFF', fontSize: 18, left: 60, fontWeight: 'bold' }}>
                            Filters
                        </Text>
                    </View>

                    <View>

                    </View>
                </View>
                </View>
                <View style={{padding:10}}>
                    <View style={{ height: '50%', width: "100%", backgroundColor: 'white' ,borderWidth:1, borderColor:'grey',borderRadius:5}}>
                        <View>

                        </View>
                    </View>
                </View>

            </View>
        </>

    )
}
export default website
const styles = StyleSheet.create({

})