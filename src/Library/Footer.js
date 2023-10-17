import React from "react";
import {
    View,
    Text,
    StyleSheet

} from 'react-native'

const Footer =(text)=>{
return(
    <View>
        <View>
        <View><Text style={styles.footer}> {'\u00A9'}{text}</Text></View>
        </View>
    </View>
)
}
export default Footer
const styles = StyleSheet.create({

    footer: {
        textAlign: 'center',
        
        fontWeight: 'bold',
        color: '#848884'
}
})
