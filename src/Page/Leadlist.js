import * as React from 'react';
import { View, useWindowDimensions,Text, KeyboardAvoidingView, Platform } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import AppHeader from '../navigation/component/AppHeader/AppHeader';
import { colors } from '../assets/config/colors';
import Newlead from './Newlead';
import Leadhistory from './Leadhistory';
import Salesteamlead from './Salesteamlead';




const FirstRoute = ({navigation,route}) => (
  <View >
<Newlead/>
  </View>

);

const SecondRoute = () => (
//  <Leadhistory/>
<Salesteamlead/>
);

const renderScene = SceneMap({
  SalesCoordinator: FirstRoute,
  SalesTeam: SecondRoute,
});

export default function TabViewExample({navigation, route}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'SalesCoordinator', title: 'SalesCoordinator' },
    { key: 'SalesTeam', title: 'SalesTeam' },
  ]);

  const onBack=()=>{
    navigation.push('enfdashboard')
  }
  const renderTabBar = props => (
    <TabBar
      {...props}
      style={{ backgroundColor: '#F88158' }} 
    />
  );


  return (
    <>
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex:1}}>

  
    {/* <AppHeader text="Lead Management"
                bgColor={colors.PRIMARY}
                BackIcon="arrow-left"
                HeaderTxtColor={colors.HeaderTxtColor}
                onPress={() => onBack()}
                Search="leads"
                Filter="" /> */}
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
      </KeyboardAvoidingView>
    </>
    
  );
}