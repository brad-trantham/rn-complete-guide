import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    // bind is used below to pass the id argument into the function passed to onDelete
    return (
    <TouchableOpacity activeOpacity={0.75} onPress={props.onDelete.bind(this,props.id)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem;