import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, withNavigation } from 'react-navigation';
import { getAllMediaAction } from '../redux/actions';
import MenuComponent from '../components/MenuComponent';
import BottomNavBar from '../components/BottomNavBar';
import BrowseMediaComponent from '../components/BrowseMediaComponent';
import AppBar from '../components/AppBar';

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'space-between'
	},
	content: {
		flex: 1,
		paddingTop: 5,
	},
})

class HomeScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	mediaData: this.props.allMedia,
	  };
	}
	componentDidMount() {
		const { navigation, userName, seatNumber, drawerVisible, hideDrawer, showDrawer,
			selectedGenres, getAllMedia, allMedia 
		} = this.props;
		if (userName === '' || seatNumber === '') {
			navigation.navigate('login');
		}
		getAllMedia();
		this.setState({
			mediaData: allMedia
		})
	}

	render() {
		const { navigation, userName, seatNumber, drawerVisible, hideDrawer, showDrawer,
			selectedGenres, allMedia 
		} = this.props;
		const { mediaData } = this.state;
		return (
			<View style={styles.screen}>
				<AppBar />
				<ScrollView style={styles.content}>
		      {mediaData.map((one, i) => (
		      	<BrowseMediaComponent
		      		key={i}
		      		genre={one.Genre}
		      		few={one.few}
		      	/>
		      ))}
				</ScrollView>
				<BottomNavBar />
			</View>
		)
	}
}

const mapStateToProps = state => ({
	allMedia: state.allMedia,
});

const mapDispatchToProps = dispatch => ({
	getAllMedia: () => dispatch(getAllMediaAction),
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));