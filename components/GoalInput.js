import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

  // equivalent to:
  // function goalInputHandler(enteredText) {
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

    // the anonymous function notation is required on Button because
    // we need to define a parameter *and* ensure the function
    // isn't executed on render
    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" 
                   style={styles.input} 
                   onChangeText={goalInputHandler}
                   value={enteredGoal}/>
        <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)}/>
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