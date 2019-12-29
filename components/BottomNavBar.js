import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonGroup, Icon } from 'react-native-elements';
import NavigationService from '../NavigationService';

const HomeIcon = () => {
  return (
    <TouchableOpacity onPress={() => NavigationService.navigate('home')}>
      <Icon name='home' color='white' />
      <Text style={{ color: 'white' }}>Home</Text>
    </TouchableOpacity>
  )
}

const MapIcon = () => {
  return (
    <TouchableOpacity onPress={() => NavigationService.navigate('map')}>
      <Icon name='room' color='white' />
      <Text style={{ color: 'white' }}>Map</Text>
    </TouchableOpacity>
  )
}

const BottomTabs = [
  { element: HomeIcon },
  { element: MapIcon }
];

const BottomNavBar = () => {
  return (
    <ButtonGroup
      buttons={BottomTabs}
      containerStyle={{
        bottom: 0,
        position: 'absolute',
        marginBottom: 0,
        marginLeft: 0,
        width: '100%',
        height: '8%',
        backgroundColor: 'blue'
      }}
      innerBorderStyle={{
        color: 'blue'
      }}
    /> 
  )
}

export default BottomNavBar;