import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header, ButtonGroup, Icon, ThemeProvider } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavigationService from './NavigationService';
// import StreamingMedia from './components/StreamingMedia';
import ContentScreen from './screens/ContentScreen';
import MenuComponent from './components/MenuComponent';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PreferenceScreen from './screens/PreferenceScreen';
import AllMediaScreen from './screens/AllMediaScreen';

const theme = {
  colors: {
    primary: 'blue'
  }
};

const AppNavigator = createStackNavigator({
  home: { screen: HomeScreen },
//  content: { screen: ContentScreen },
  login: { screen: LoginScreen },
  preferences: { screen: PreferenceScreen },
  content: { screen: ContentScreen },
  allmedia: { screen: AllMediaScreen }
}, {
  initialRouteName: 'home',
  headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);

// const HomeIcon = () => {
//   return (
//     <TouchableOpacity onPress={() => NavigationService.navigate('home')}>
//       <Icon name='home' color='white' />
//       <Text style={{ color: 'white' }}>Home</Text>
//     </TouchableOpacity>
//   )
// }

// const MapIcon = () => {
//   return (
//     <TouchableOpacity onPress={() => NavigationService.navigate('map')}>
//       <Icon name='room' color='white' />
//       <Text style={{ color: 'white' }}>Map</Text>
//     </TouchableOpacity>
//   )
// }

// const BottomTabs = [
//   { element: HomeIcon },
//   { element: MapIcon }
// ];

export default function App() { 
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <View style={{
          flex: 1,
        }}>
          <AppContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </Provider>
    </ThemeProvider>
  );
}
