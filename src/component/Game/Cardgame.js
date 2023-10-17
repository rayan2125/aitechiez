// import { View, Text, Image, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import LinearGradient from 'react-native-linear-gradient'
// import StarRating from 'react-native-star-rating';
// // import { Icon } from '@mui/material';
// const CardGame=()=>{

//     const [isFavourite, setFavourite] = useState(false);
//     return(
//         <>
//             <View  style={{marginRight:4,position:'relative'}}>
//       <Image source={game.image} style={{width:80, height:60, borderRadius:20}} />
//       <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.6)']} 
//       style={{marginRight:4,position:'absolute',padding:4, height:'auto', width:'auto',flex:1, justifyContent:'space-between',borderRadius:20}}
//        >
//         <View  style={{ flexDirection:'row',justifyContent:"flex-end"}}>
//             <TouchableOpacity
//                 onPress={()=> setFavourite(!isFavourite)}
//                 // className="p-3 rounded-full"

//                 style={{backgroundColor: 'rgba(255,255,255,0.3)', borderRadius:20}}
//             >
//                 {/* <HeartIcon size="25" color={isFavourite? storeColors.redHeart: 'white'} /> */}
//                 <Icon name="bars"/>
//             </TouchableOpacity>
//         </View>
//         <View style={{gap:5}}>
//             <StarRating
//                 disabled={true}
//                 starSize={15}
//                 containerStyle={{width: 90}}
//                 maxStars={5}
//                 rating={game.stars}
//                 emptyStar={require('../../assets/images/emptyStar.png')}
//                 fullStar={require('../../assets/images/fullStar.png')}
//             />
//             <Text className="text-xl font-bold text-gray-300">
//                 {game.title}
//             </Text>
//             <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
//                 {/* <ArrowDownTrayIcon size="18" color="lightgray" /> */}
//                 <Text >
//                     {game.downloads} Downloads
//                 </Text>
//             </View>
//         </View>
//       </LinearGradient>
//     </View>

//         </>


//     )
// }
// export default CardGame


import React,{useState} from "react";
import { View,Text,Image,StyleSheet ,Dimensions,TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import StarRating from "react-native-star-rating";
import Icon from 'react-native-vector-icons/FontAwesome';


const GameCard =(game)=>{
    
    const [isFavourite, setFavourite] = useState(false);
   
    return(
<>

<View  style={styles.cardContainer}>
<Image source={game.game.image} style={styles.cardImage}
onError={(error) => console.error('Image Error:', error)}
/>

        <LinearGradient 
          colors={['transparent', 'rgba(0, 0, 0, 0.2)']}
          style={[styles.gradientOverlay,{borderColor: isFavourite ? "red" : "transparent"}]}
        >
          <TouchableOpacity onPress={()=> setFavourite(!isFavourite)}>
            <Icon name="heart" size={40} color={isFavourite?"red":"white"}/>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{width:'8%',bottom:70,position:'absolute', left:18}}>
        <StarRating
                disabled={true}
                starSize={15}
                containerStyle={{width: 90}}
                maxStars={5}
                rating={game.stars}
                emptyStar={require('../../assets/images/emptyStar.png')}
                fullStar={require('../../assets/images/fullStar.png')}
            />
        </View>
            <Text style={{ color:'white', fontSize:20, position:'absolute', left:18,bottom:40}}>{game.game.title}</Text>

            <View style={{position:"absolute" ,left:18,bottom:20, flexDirection:'row', alignItems:'center'}}>
                <View style={{alignItems:'center'}}>

                <Icon name="arrow-down" style={{marginHorizontal:10}} color="white"/>
                <Text style={{height:1,backgroundColor:'white', width:20,}}></Text>
                </View>
                <Text style={{color:'white', fontWeight:'600'}}>{game.game.downloads}</Text>

            </View>
      </View>

</>
    )
}
export default GameCard
const styles = StyleSheet.create({
    cardContainer: {
      margin: 6,
      position:'relative',
    //   height: '100%', // Adjust the card height as needed
      width: Dimensions.get("window").width,  // Adjust the card width as needed
    //   backgroundColor: "white",
      borderRadius: 10,
      padding: 10,
    //   alignItems: "center",
    //   justifyContent: "center",
    //   elevation: 4, // Add shadow or elevation for card effect
    },

    gradientOverlay: {
        position: 'absolute',
        padding: 4,
        height: 70,
        width: 70,
        borderRadius: 99,
        right: 50,
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor:{isFavourite?"red":"transparent"},
        borderWidth:1
      },
    cardImage: {
      height: '100%',
      borderRadius:20,
    
      width: Dimensions.get('screen').width-50, // Image width should be 100% of the card
      resizeMode: "contain", // Or other suitable image resize mode
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 8,
    },
    cardDetails: {
      fontSize: 12,
      color: "gray",
      marginTop: 4,
    },
  });