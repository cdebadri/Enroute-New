import React from 'react';
import { ScrollView, ActivityContainer, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-elements';

const ShowAllMedia = (props) => {
	const { ThumbnailUrl, url, Name, Description, _id } = props;
	return (
		<TouchableOpacity onPress={() => navigation.navigate('content', { _id })}>
			<Card
				title={Name}
				image={{uri: ThumbnailUrl}}
				imageProps={{
					placeholder: <ActivityContainer />
				}}
				containerStyle={{
					width: '100%'
				}}>
				<Text>{Description.substring(0, 40) + '...'}</Text>
			</Card>
		</TouchableOpacity>
	)
}

export default ShowAllMedia;