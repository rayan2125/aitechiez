import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import dashboard from '../dashboard/dashboard'
// import leadlist from '../dashboard/Lead/leadlist'
// import newlead from '../dashboard/Lead/newlead'
// import companylead from '../dashboard/Lead/companylead'
// import Invoice from '../dashboard/Invoice/Invoice'
// import card from '../dashboard/Invoice/card'
// import Editcompany from '../dashboard/Lead/Editcompany'


import Register from '../Authentication/Register/Register'
import Forgot from '../Authentication/Forgot/forgot'
import confirmation from '../Authentication/Forgot/confirmation'

import Bottom from './component/Bottom/bottom';

import costom from '../Page/Custom';
import Leadlist from '../Page/Leadlist';
import OnlineTraining from '../Page/OnlineTraining';


import Costominput from '../Library/Costominput';
import Custom from '../Page/Custom';
import Societym from '../Page/Society/Societym';
import Bill from '../Page/Bill';
import Card from '../Page/Card';
import Login from '../Authentication/Login/Login';
import Dynamicsimage from '../Authentication/Dynamicsimage';
import Userdashboard from '../Dashboard/Userdashboard';
import Website from '../Page/Website';
import MainDashboard from '../Dashboard/MainDashboard';
import Payment from '../Page/Payment';
import Mainlogin from '../Authentication/Login/Mainlogin';
import AitechDashboard from '../Dashboard/AitechDashboard';
import Logistic from '../Page/Logistic/Logistic';
import LeadDashboard from '../Dashboard/LeadDashboard';
import Leadhistory from '../Page/Leadhistory';
import Check from '../Page/Check';
import Boxes from '../component/Boxes';
import MainBook from '../component/Tickets/MainBook';
import MomSecond from '../Library/MomSecond';
import Mom from '../Page/Mom';
import MomTab from '../Page/MomTab';
import UpdateHistory from '../Library/UpdateHistory';
import Addattendees from '../Library/Addattendees';
import Promotiontype from '../Page/Configration/Promotiontype';
import Promotionactivite from '../Page/Configration/Promotionactivite';
import MarketingCam from '../Page/Configration/MarketingCam';
import MainPage from '../component/Game/Mainpage';
import Training from '../Page/Posp/Traning';
import PospVdo from '../Page/Posp/PospVod';






const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Mainlogin"}

      screenOptions={{ headerShown: false }}

    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Dynamicsimage' component={Dynamicsimage} />
      <Stack.Screen name='Forgot' component={Forgot} />
      <Stack.Screen name='confirmation' component={confirmation} />
      <Stack.Screen name='Userdashboard' component={Userdashboard} />
      <Stack.Screen name='Website' component={Website} />
      <Stack.Screen name='Custom' component={Custom} />
      {/* <Stack.Screen name='leadlist' component={Leadlist} /> */}
      <Stack.Screen name='MainDashboard' component={MainDashboard} />
      <Stack.Screen name='Costominput' component={Costominput} />
      <Stack.Screen name='Societym' component={Societym} />
      <Stack.Screen name='Bill' component={Bill} />
      <Stack.Screen name='Payment' component={Payment} />
      <Stack.Screen name='Card' component={Card} />
      <Stack.Screen name='Mainlogin' component={Mainlogin} />
      <Stack.Screen name='AitechDashboard' component={AitechDashboard} />
      <Stack.Screen name='Logistic' component={Logistic} />
      <Stack.Screen name='Leadlist' component={Leadlist}/>
      <Stack.Screen name='LeadDashboard' component={LeadDashboard}/>
      <Stack.Screen name='Leadhistory' component={Leadhistory}/>
      <Stack.Screen name='Check' component={Check}/>
      <Stack.Screen name='Boxes' component={Boxes}/>
      <Stack.Screen name='MainBook' component={MainBook}/>
      <Stack.Screen name='MomSecond' component={MomSecond}/>
      <Stack.Screen name='Mom' component={Mom}/>
      <Stack.Screen name='MomTab' component={MomTab}/>
      <Stack.Screen name='UpdateHistory' component={UpdateHistory}/>
      <Stack.Screen name='Addattendees' component={Addattendees}/>
      <Stack.Screen name='Promotiontype' component={Promotiontype}/>
      <Stack.Screen name='Promotionactivite' component={Promotionactivite}/>
      <Stack.Screen name ='MarketingCam' component={MarketingCam}/>
      <Stack.Screen name='MainPage' component={MainPage}/>
      <Stack.Screen name='Traning' component={Training}/>
      <Stack.Screen name='PospVod' component={PospVdo}/>
    </Stack.Navigator>
  )
}


export default Router

const styles = StyleSheet.create({})