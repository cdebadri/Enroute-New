import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { verifyUserDetailsAction } from '../redux/actions';
import { StackActions } from 'react-navigation';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'space-between',
	},
	footer: {
		bottom: 0,
		position: 'absolute',
		zIndex: 2
	}
})

class LoginScreen extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {	
	  	name: this.props.userName,
			seat: this.props.seatNumber,
			pnr: this.props.pnr,
		};
	}
	
	handleNameChange = (event) => {
		this.setState({
			name: event.target.value
		});
	}

	handleSeatChange = (event) => {
		this.setState({
			seat: event.target.value
		});
	}

	handlePnrChange = (event) => {
		this.setState({
			pnr: event.target.value
		});
	}

	render() {
		const { navigation, verifyUserDetails } = this.props;
		return (
			<View style={styles.screen}>
				<Header
					centerComponent={{ text: 'Login', style: { color: 'white' } }} 
				/>
				<Input
					label='Name'
					placeholder='Enter Name'
					leftIcon={
						<Icon
							name='user'
							size={24}
							color='blue' 
						/>
					}
					value={this.name}
					onchangeText={this.handleNameChange} 
				/>
				<Input
					label='Seat Number'
					placeholder='Enter Seat Number'
					leftIcon={
						<Icon
							name='tasks'
							size={24}
							color='blue'
						/>
					}
					value={this.seat}
					onchangeText={this.handleSeatChange}
				/>
				<Input
					label='PNR'
					placeholder='Enter PNR'
					leftIcon={
						<Icon
							name='tasks'
							size={24}
							color='blue'
						/>
					}
					value={this.pnr}
					onchangeText={this.handlePnrChange}
				/>
				<Button
					title='Next'
					containerStyle={styles.footer}
					onPress={() => {
						verifyUserDetails();
						navigation.navigate('preferences');
					}}
					containerStyle={{
						marginBottom: 0
					}} 
				/>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	userName: state.userName,
	seatNumber: state.seatNumber,
	pnr: state.pnr
});

const mapDispatchToProps = dispatch => ({
	verifyUserDetails: () => dispatch(verifyUserDetailsAction()),
});

export default connect(null, mapDispatchToProps)(LoginScreen);