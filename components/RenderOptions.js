import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Card } from 'react-native-elements';

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

const RenderOptions = (props) => {
	const { title, options, optionsSelected, onSelectOrDeselect } = props;
  return (
  	<Card title={title}>
      {options.map((option, i) => (  
        <ListItem
        	key={i}
          title={option}
          onPress={() => onSelectOrDeselect(i)}
          rightIcon={
          	(optionsSelected[i]) ? {
            	name: 'check',
            	color: 'blue'
            } : {
            	name: 'add',
            	color: 'blue'
            }
          }
          bottomDivider
        />
      ))}
  	</Card>
  )
}
export default RenderOptions;