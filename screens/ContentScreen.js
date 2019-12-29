import React from 'react';
import VideoWindowComponent from '../components/VideoWindowComponent';
import AppBar from '../components/AppBar';
import { getMediaAction } from '../redux/actions';
import { connect } from 'react-redux';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Text, Input, Button, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'space-between'
	},
	rowEnd: {
		flexDirection: 'row',
		flex: 1,
		bottom: 0,
		marginBottom: 0,
	},
	rowMid: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between',
		padding: 5
	},
	iconCount: {
		flexDirection: 'row',
		padding: 5
	}
})

class ContentScreen extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	liked: false,
	  	comment: ''
	  };
	}

	componentDidMount() {
		// const { getMedia } = this.props;
		// getMedia();
	}

	handleComment = (value) => {
		this.setState({
			comment: value
		});
	}

	render() {
		const { comment, liked } = this.state;
		const { mediaUrl, mediaPosterUrl, mediaComments, mediaLikes, mediaViews, mediaDescription } = this.props;
		return (
			<View style={styles.screen}>
				<AppBar />
				<VideoWindowComponent 
					url={mediaUrl}
					thumbnail={mediaPosterUrl}
				/>
				<View style={styles.rowMid}>
					<Button 
						icon={{
							name: 'remove-red-eye',
							color: 'blue'
						}}
						type='clear'
						title={`${mediaViews}`}
					/>
					<Button 
						icon={{
							name: 'favorite',
							color: (liked) ? 'red': 'blue'
						}}
						type='clear'
						title={`${mediaLikes}`}
					/>
					<Button 
						icon={{
							name: 'comment',
							color: 'blue'
						}}
						type='clear'
						title={`${mediaComments.length}`}
					/>
				</View>
				<View>
					<Text>{mediaDescription}</Text>
				</View>
				{(mediaComments.length > 0) ?
					<ScrollView>
						{mediaComments.map((comment, i) => (
							<ListItem 
								title={comment.userName} 
								key={i}
								subtitle={comment.comment}
								bottomDivider 
							/>
						))}
					</ScrollView>
					:
					<Text>Wow, such empty!</Text>
				}
				<View style={styles.rowEnd}>
					<Input
						multiline={true}
						containerStyle={{
							width: '90%'
						}}
						inputContainerStyle={{
							borderColor: 'blue'
						}}
						placeholder='Enter Comment'
						value={comment}
						onChangeText={(value) => this.handleComment(value)} 
					/>
					<Button
						icon={{
							name: 'send',
							color: 'blue'
						}}
						type='clear'
					/>
				</View>
			</View>
		)
	}
}

const mapStateToProps = state => ({
	mediaName: state.mediaName,
	mediaUrl: state.mediaUrl,
	mediaPosterUrl: state.mediaPosterUrl,
	mediaComments: state.mediaComments,
	mediaViews: state.mediaViews,
	mediaLikes: state.mediaLikes
});

const mapDispatchToPops = dispatch => ({
	getMedia: () => dispatch(getMediaAction())
})

export default withNavigation(connect(mapStateToProps, mapDispatchToPops)(ContentScreen));