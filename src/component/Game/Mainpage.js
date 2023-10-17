import React,{useState} from "react";
import { View,Text, TouchableOpacity, Image,StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientButton from "./GraidentButton";
import CardGame from "./Cardgame";
// import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import GameCard from "./Cardgame";
import { Dimensions } from "react-native";
import * as Animatable from 'react-native-animatable';
import GameDrawer from "./GameDrawer";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";


const categories = ['Action', 'Family', 'Puzzle', 'Adventure', 'Racing', 'Education', 'Others'];

const featured = [
    {
        id: 1,
        title: 'Zooba',
        image: require('../../assets/images/zooba.png'),
        downloads: '200k',
        stars: 4
    },
    {
        id: 2,
        title: 'Subway Surfer',
        image: require('../../assets/images/subway.png'),
        downloads: '5M',
        stars: 4
    },
    {
        id: 3,
        title: 'Free Fire',
        image: require('../../assets/images/freeFire.png'),
        downloads: '100M',
        stars: 3
    },
    
    {
        id: 4,
        title: "Alto's Adventure",
        image: require('../../assets/images/altosAdventure.png'),
        downloads: '20k',
        stars: 4
    },
    {
        id: 4,
        title: "Alto's Adventure",
        image: require('../../assets/images/altosAdventure.png'),
        downloads: '20k',
        stars: 4
    },
    {
        id: 4,
        title: "Alto's Adventure",
        image: require('../../assets/images/altosAdventure.png'),
        downloads: '20k',
        stars: 4
    },
    {
        id: 4,
        title: "Alto's Adventure",
        image: require('../../assets/images/altosAdventure.png'),
        downloads: '20k',
        stars: 4
    },
  ]
  const games = [
    {
        id: 1,
        title: 'Shadow Fight',
        image: require('../../assets/images/shadowFight.png'),
        downloads: '20M',
        stars: 4.5
    },
    {
        id: 2,
        title: 'Valor Arena',
        image: require('../../assets/images/valorArena.png'),
        downloads: '10k',
        stars: 3.4
    },
    {
        id: 3,
        title: 'Frag',
        image: require('../../assets/images/frag.png'),
        downloads: '80k',
        stars: 4.6
    },
    {
        id: 4,
        title: "Zooba Wildlife",
        image: require('../../assets/images/zoobaGame.png'),
        downloads: '40k',
        stars: 3.5
    },
    {
        id: 4,
        title: "Clash of Clans",
        image: require('../../assets/images/clashofclans.png'),
        downloads: '20k',
        stars: 4.2
    },

    {
        id: 1,
        title: 'Shadow Fight',
        image: require('../../assets/images/shadowFight.png'),
        downloads: '20M',
        stars: 4.5
    },
    {
        id: 2,
        title: 'Valor Arena',
        image: require('../../assets/images/valorArena.png'),
        downloads: '10k',
        stars: 3.4
    },
    {
        id: 3,
        title: 'Frag',
        image: require('../../assets/images/frag.png'),
        downloads: '80k',
        stars: 4.6
    },
    {
        id: 4,
        title: "Zooba Wildlife",
        image: require('../../assets/images/zoobaGame.png'),
        downloads: '40k',
        stars: 3.5
    },
    {
        id: 4,
        title: "Clash of Clans",
        image: require('../../assets/images/clashofclans.png'),
        downloads: '20k',
        stars: 4.2
    },
  ];
const MainPage =()=>{

    const [activeCategory, setActiveCategory] = useState('Action');
    const [selectedGame, setSelectedGame] = useState(null);
    const[open ,setOpen]=useState(false)
    
    return(
        <>

        <LinearGradient
       colors={['#37958C', '#8AC9C3']}
    //    className ="w-full flex-1"
    style={{flex:1}}
        >
            <View style={{marginTop:15, padding:10}}>
                {/* icconn */}
                <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center', margin:10}}>
<Icon name="bars" size={20} color='#0B0D46' onPress={()=>setOpen(!open)}/>
<Icon name="bell" size={20}  color='#0B0D46'/>

                </View>

                {/* {
                    open &&

<GameDrawer/>

                        
                    
                } */}
                <View style={{ margin:10}}>
                    <Text style={{color:"#0B0D46", fontSize:30, fontWeight:'bold'}}>Browers Game</Text>
                </View>
                {/* catergies  */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height:'2%'}}>
{
    categories.map(cat=>{
        if(cat==activeCategory){
            return(<GradientButton key={cat} value={cat}/>)
        }else{

        return(<TouchableOpacity 
        onPress={()=>setActiveCategory(cat)}
        key ={cat} style={{backgroundColor:'#90CAF9',padding:5,paddingHorizontal:4, height:40,borderRadius:20,width:100, margin:10, alignItems:'center', justifyContent:"center"}}>
            
            <Text style={{color:'white'}}>{cat}</Text>
        </TouchableOpacity>)
        }
    })
}
                </ScrollView>

                {/* featuree */}
                <View>
                    <Text style={{color:"#0B0D46", fontSize:19, margin:10}}>Featured Games</Text>
                </View>
                
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height:'40%', }}>
  {featured.map((item, index) => {
    
    return (
    
    <GameCard key={index} game={item}/>
      
    );
  })}
</ScrollView>
            </View>
          
            <View style={{justifyContent:'space-between',flexDirection:'row', alignItems:'center',marginBottom:2}}>
                    <Text style={{color:"#0B0D46", fontSize:19, marginLeft:10}}>Top Action Games</Text>
                    
                    <TouchableOpacity style={{marginRight:8}}>
                    <Text style={{color:'#1E88E5', fontSize:15, }}>see all</Text>

                    </TouchableOpacity>
                </View>

            <View style={{marginTop:3, }}>


            <ScrollView style={{ height: 250 }} showsVerticalScrollIndicator={false}>
  {games.map((game, index) =>{ 
     let bg= game.id==selectedGame? 'rgba(255,255,255,0.4)': 'transparent';

 return (
    
    <TouchableOpacity
      key={index}
      onPress={() => {setSelectedGame(game.id)}}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10, // Add margin to create spacing between items
        padding: 10, // Add padding for spacing within each item
        backgroundColor: bg, // Just for visualization
        borderRadius: 20,
      }}
    >
      <Image
        source={game.image}
        style={{
          width: 100,
          aspectRatio: 9 / 10,
          height: 90,
          borderRadius: 20,
        }}
        resizeMode="contain"
      />
      <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
        <Text>{game.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/images/fullStar.png')}
            style={{ height: 10, width: 10 }}
          />
          <Text>{game.stars}</Text>
        </View>
      </View>
      <View>
        <GradientButton value="play"/>
      </View>
    </TouchableOpacity>
  )})}
</ScrollView>


            </View>
         
                
           
            

        </LinearGradient>
        </>
    )
}

export default MainPage


const styles = StyleSheet.create({
    cardContainer: {
      margin: 6,
      position:'relative',
      height: '100%', // Adjust the card height as needed
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
      },
    cardImage: {
      height: '100%',
      borderRadius:10,
    
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



// const styles = StyleSheet.create({
//     cardContainer: {
//       width: Dimensions.get("window").width,
//       backgroundColor: "white",
//       borderRadius: 10,
//       overflow: "hidden", // Ensure the gradient overlay doesn't overflow
//     },
//     cardImage: {
//       height: "70%",
//       width: "100%",
//       resizeMode: "contain",
//     },
//     gradientOverlay: {
//       position: 'absolute',
//       padding: 4,
//       height: 70,
//       width: 70,
//       borderRadius: 99,
//       right: 50,
//       top: 20,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     buttonText: {
//       color: 'white',
//       fontSize: 12,
//       textAlign: 'center',
//     },
//     // ... other styles
//   });
  

// export const DrawerOpen=(props)=>{
//     return(
//         <>
//         <LinearGradient  colors={['#CFFFE8','#7C998B']}
//         style={{height:'72%', bottom:65, right:10}}
//         >

//          <Animatable.View style={{ position:'relative'  }}>

        
//             <TouchableOpacity onPress={()=>props.setOpen(false)} style={{position:'absolute', top:10, left:10}}>

// {/* <Text>hii</Text> */}
// <Icon name ='arrow-left' size={30}/>
//             </TouchableOpacity>

//             <View style={{flexGrow:1,}}>
//                 <View style={{flexGrow:1,}}>
//                     <TouchableOpacity>
                        
//                         <Text>Profile</Text>
//                         <Text>Info</Text>
//                         <Text>Info</Text>
//                         <Text>Info</Text>
//                         <Text>Info</Text>
//                     </TouchableOpacity>

//                 </View>
//                 <View>
//                     <TouchableOpacity>
//                         <Text> Version :2.8.0.1</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </Animatable.View>
//         </LinearGradient>
         
//         </>
//     )
// } 