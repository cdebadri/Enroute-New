import React from 'react';
import { Header } from 'react-native-elements';

class AppBar extends React.Component{
	render() {
		return (
			<Header
        leftComponent={{ text: 'Enroute', style: { color: 'white' } }}
        rightComponent={{ icon: 'notifications', color: 'white' }}
      />
		)
	}
}

export default AppBar;