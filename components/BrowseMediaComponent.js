import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Tile, Text } from 'react-native-elements';
import { withNavigation, StackActions } from 'react-navigation';

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5
	},
	mediaElement: {
		flex: 1
	},
	title: {
		fontSize: 22,
		color: 'blue'
	},
	icons: {
		position: 'absolute',
		zIndex: 2
	}
});

const BrowseMediaComponent = (props) => {
	const { navigation, genre, all, few } = props;
	return (
		<View>
			<View style={styles.row}>
				<Text style={styles.title}>{genre}</Text>
				<TouchableOpacity onPress={() => navigation.navigate('allmedia', { genre })}>
					<Text style={styles.title}>View all</Text>
				</TouchableOpacity>
			</View>
			<ScrollView horizontal>
				{few.map((one, i) => (
					<Tile
						key={i}
						imageSrc={{ uri: one.ThumbnailUrl }}
						imageProps={{
							PlaceholderContent: <ActivityIndicator />
						}}
						title={one.name}
						featured
						containerStyle={styles.mediaElement} 
						onPress={() => navigation.navigate('content', { _id: one._id })}
					/>
				))}
			</ScrollView>
		</View>
	)
}

export default withNavigation(BrowseMediaComponent);