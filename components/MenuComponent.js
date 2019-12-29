import React from 'react';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { showDrawerAction, hideDrawerAction } from '../redux/actions';
import { withNavigation } from 'react-navigation';

const MenuComponent = (props) => {
	const { navigation, showDrawer, hideDrawer, drawerVisible } = props;
	let style = {
		name: 'menu',
		size: 15,
		color: 'white'
	};
	// if (navigation.state.routeName === 'Home' || navigation.state.routeName === 'Map') {
	// 	style = {
	// 		name: 'menu',
	// 		size: 15,
	// 		color: 'white'
	// 	};
	// }	else {
	// 	style = {
	// 		name: 'arrow-left',
	// 		size: 15,
	// 		color: 'white'
	// 	};
	// }

	return (
		<Button
			icon={style}
			onPress={() => {
				if (drawerVisible) {
					hideDrawer();
				} else {
					showDrawer();
				}
			}} 
		/>
	);
}

export default withNavigation(MenuComponent);