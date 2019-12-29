import React from 'react';
import { View } from 'react-native';
import { Overlay, ListItem } from 'react-native-elements';
import { hideDrawerAction } from '../redux/actions';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const options = [
	{
		name: 'Genres',
		link: 'genres',
	}, {
		name: 'Languages',
		link: 'languages'
	}, {
		name: 'Logout',
		link: 'logout'
	}
];

const RenderOptions = (props) => {
	const { navigation } = props;
	return (
		<View>
			{options.map((option, i) =>(
				<ListItem
					key={i}
					title={option.name}
					onPress={() => {
						navigation.navigate(option.link);
						hideDrawer();
					}}
					titleStyle={{
						color: 'white'
					}}
					containerStyle={{
						backgroundColor: 'transparent'
					}} 
				/>
			))}
		</View>
	);
}

const DrawerComponent = (props) => {
	const { navigation, drawerVisible, hideDrawer } = props;
	return(
		<View>
			<Overlay
				isVisible={drawerVisible}
				width='75%'
				height='100%'
				overlayBackgroundColor='blue'
				onBackdropPress={hideDrawer}
				children={RenderOptions(navigation)}
				overlayStyle={{
					marginTop: 0,
					marginLeft: 0
				}} 
			/>
		</View>
	)
}

const mapStateToProps = state => ({
	drawerVisible: state.drawerVisible,
});

const mapDispatchToProps = dispatch => ({
	hideDrawer: () => dispatch(hideDrawerAction()),
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(DrawerComponent));