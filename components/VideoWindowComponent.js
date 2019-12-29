import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import VideoPlayer from 'react-native-video-player';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
	preview: {
		flex: 1
	}
});

const VideoWindowComponent = (props) => {
	const { navigation, url, ThumbnailUrl } = props;
	return (
		<View>
			<VideoPlayer
				endWithThumbnail
				pauseOnPress
				fullScreenOnLongPress
				autoplay
				thumbnail={{uri: ThumbnailUrl}}
				video={{uri: url}}
				ref={r => videoRef = r}
			/>
		</View>
	)
}

export default VideoWindowComponent;