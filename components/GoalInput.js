import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const GoalInput = props => {
    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" 
                   style={styles.input} 
                   onChangeText={props.onChangeText}
                   value={props.value}/>
        <Button title="Add" onPress={props.onPress}/>
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      },
      input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10
      }
  })

export default GoalInput;