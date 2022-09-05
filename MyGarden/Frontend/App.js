import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Analythics from './Analytics';
import RemoreActivition from'./RemoteActivition';
import Home from'./Home';
import ScheduleActivition from'./ScheduleActivition';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Home/>
    </View>
  );
}

function RemoteScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <RemoreActivition/>
    </View>
  );
}

function AnalyticScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Analythics/>
    </View>
  );
}


function SchduleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScheduleActivition/>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Remote" component={RemoteScreen} />
        <Drawer.Screen name="Analytics" component={AnalyticScreen} />
         <Drawer.Screen name="Schdule" component={SchduleScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
