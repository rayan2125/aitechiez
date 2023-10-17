import { View, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import Customized from '../../Costom/Customized/Customized'
// import Button from '../../Costom/customButton/CustomButton'
import React, { useState,useEffect } from 'react'
import Drawar from './Drawar'
import { colors } from '../../../assets/config/colors'





const AppHeader = ({ navigation, onPress, text, bgColor, HeaderTxtColor, BackIcon, Search, Filter ,data} ) => {
 
  
  const [collapse, setCollapse] = useState(false)
  // useEffect(() => {
  //   if (text === 'Lead Management') {
  //     console.log('Text prop is "Lead Management"');
  //   }
  // }, [text]);

  const logout = () => {
    navigation.navigare('AiLogin')
  }

  return (
    <>
      <View style={[styles.head,
      bgColor ? { backgroundColor: bgColor } : {}]}>

        <View style={styles.view}>{
          <TouchableOpacity >

            <Icon name={BackIcon} onPress={onPress} style={styles.header} />
          </TouchableOpacity>

        }
        </View>
        <View style={styles.view}>{

          <Text style={styles.header}>{text}</Text>
        }
        </View>
        <View style={[styles.view, { flexDirection: 'row', width: 90, zIndex: 9, justifyContent: "space-between" }]}  >
          {

            <TouchableOpacity onPress={() => setSearch('leads')}  >

              <Icon name='search' style={[styles.header, { display: (!Search) ? 'none' : 'flex' }]} />

            </TouchableOpacity>

          }

          {

            <TouchableOpacity onPress={() => setFilter('leads')} >

              <Icon name='filter' style={[styles.header, { display: (!Filter) ? 'none' : 'flex' }]} />

            </TouchableOpacity>

          }

          {

            <TouchableOpacity onPress={() => setCollapse(!collapse)} >

              <Icon name='bars' style={styles.header} />

            </TouchableOpacity>

          }
        </View>


        {/* <Collapse>
      <CollapseHeader><View>
        <Text> <Icon name='bars'  style={styles.header}/>  </Text></View></CollapseHeader>
      <CollapseBody>
      <View><Text>logout</Text>
      <Text>logout</Text>
      <Text>logout</Text>
       </View>
        </CollapseBody>
      </Collapse> */}
        {/* <Modal
      transparent={true}
      visible={showModal}
      
      >
        <View style={styles.modal}>
          <Customized 
         
          />
          

<Text onPress={() => setShowModal(false)} style={{fontSize:50 , color:"white",textAlign:'right',a:''}}> X</Text>
        </View>

      </Modal>
           */}

      </View>
      {collapse &&
       (
              
        <Drawar  onPress={()=>setCollapse(!collapse)}
        data={data}
        text={text}
        />
        )}
    </>


  )
}
const styles = StyleSheet.create({
  head: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // display: 'flex',
    width: "100%",
    position:'relative'

  },

  header: {
    color: colors.HeaderTxtColor,
    fontSize: 25,
    fontWeight: "800",
    width: "100%"
  },
  sliderShow: {
    opacity: 1,
  },
  sliderHide: {
    display: 'none',
    transition: ' opacity 3s',
    opacity: 0
  },
  drawer: {
    backgroundColor: 'white'
  },
})
export default AppHeader


