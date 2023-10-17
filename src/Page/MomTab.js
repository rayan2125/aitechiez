import * as React from 'react';
import { View, useWindowDimensions,Text, KeyboardAvoidingView, Platform } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import Mom from './Mom';
// import MomSecond from '../Library/MomSecond';
import Boxes from '../component/Boxes';






const FirstRoute = ({}) => (

<Mom/>


);

const SecondRoute = () => (
//  <Leadhistory/>
<Boxes/>
);

const renderScene = SceneMap({
  SalesCoordinator: FirstRoute,
  SalesTeam: SecondRoute,
});

export default function MomTab ({navigation, route}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'SalesCoordinator', title: 'Mom' },
    { key: 'SalesTeam', title: 'Mom' },
  ]);

 
  const renderTabBar = props => (
    <TabBar
      {...props}
      style={{ backgroundColor: 'white' }} 
    />
  );


  return (
    <>
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex:1}}>

  
   
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