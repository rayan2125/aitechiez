import React from "react";

import {TouchableOpacity, Text} from 'react-native'
import LinearGradient from "react-native-linear-gradient";

const ListingCard =()=>{
    return(

<LinearGradient 
colors={['rgba(248,129,88, 0.9)', 'rgba(58, 131, 244,0.9)']}>
    <TouchableOpacity>
        <Text>Type:{}</Text>
    </TouchableOpacity>
</LinearGradient>

    )
}
export default  ListingCard;