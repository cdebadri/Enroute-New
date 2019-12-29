import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Header, Button } from 'react-native-elements';
import RenderOptions from '../components/RenderOptions';
import { withNavigation, StackActions } from 'react-navigation';

const styles = StyleSheet.create({
	screen: {
  	flex: 1,
  	justifyContent: 'space-between'
  },
  footer: {
  	bottom: 0,
  	position: 'absolute',
  	zIndex: 2,
  	width: '100%'
  }
});

class PreferenceScreen extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	genres: [],
	    languages: [],
	    genreList: [],
	    languageList: []
	  };
	}

  componentDidMount() {
  	const genres = ['horror', 'thriller'];
    const languages = ['eng', 'beng'];
    let selected = [];
    genres.forEach(genre => selected.push(false));
    let selectedLanguages = [];
    languages.forEach(lang => selectedLanguages.push(false));
    this.setState({
    	genres: selected,
      languages: selectedLanguages,
      genreList: genres,
      languageList: languages
    });
  }
  onSelectOrDeselectGenres = (index) => {
  	let changedList = this.state.genres;
    changedList[index] = !changedList[index];
  	this.setState({
    	genres: changedList
    });
  }
  onSelectOrDeselectLanguages = (index) => {
  	let changedList = this.state.languages;
    changedList[index] = !changedList[index];
  	this.setState({
    	languages: changedList
    });
  }
  render() {
  	const { navigation } = this.props;
  	return (
  		<View style={styles.screen}>
  			<Header
  				centerComponent={{ text: 'Preferences', style: { color: 'white' } }} 
  			/>
	    	<ScrollView>
	        <RenderOptions
	          title="Genres"
	          options={this.state.genreList}
	          optionsSelected={this.state.genres}
	          onSelectOrDeselect={this.onSelectOrDeselectGenres}
	        />
	        <RenderOptions
	          title="Languages"
	          options={this.state.languageList}
	          optionsSelected={this.state.languages}
	          onSelectOrDeselect={this.onSelectOrDeselectLanguages}
	        />
	    	</ScrollView>
	    	<Button
	    		buttonStyle={styles.footer}
	    		title="Next"
	    		onPress={() => {
	    			navigation.navigate('home');
	    		}} 
	    	/>
	    </View>
    )
  }
}

export default withNavigation(PreferenceScreen);