import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header, StyleSheet } from 'react-native-elements';
import ShowAllMedia from '../components/ShowAllMedia';
import BottomNavBar from '../components/BottomNavBar';
import AppBar from '../components/AppBar';
import { connect } from 'react-redux';
import { getMediaGenreAction } from '../redux/actions';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'space-between'
	},
})

class AllMediaScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	currentParams: {},
	  	allMedia: this.props.allMedia
	  };
	}

	componentDidMount() {
		const { currentParams } = this.state;
		const { navigation } = this.props;
		const { params } = navigation.state;
		const genre = params ? params.genre : '';
		const language = params ? params.language : '';
		if (genre !== '') {
			getMediaGenre();
		}
	}

	render() {
		<View>
			<AppBar />
			<ScrollView>
				{allMedia.map((media, i) => (
					<ShowAllMedia
						url={media.url}
						ThumbnailUrl={media.ThumbnailUrl}
						Name={media.Name}
						_id={media._id}
						Description={media.Description} 
					/>
				))}
			</ScrollView>
			<BottomNavBar />
		</View>
	}
}

const mapStateToProps = state => ({
	allMedia: state.allMedia
});

const mapDispatchToProps = dispatch => ({
	getMediaGenre: () => dispatch(getMediaGenreAction())
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(AllMediaScreen));