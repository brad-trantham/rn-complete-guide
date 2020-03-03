import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

  // equivalent to:
  // function goalInputHandler(enteredText) {
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

    // the anonymous function notation is required on Button because
    // we need to define a parameter *and* ensure the function
    // isn't executed on render
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" 
                    style={styles.input} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Cancel" color="red" onPress={props.onCancel}/></View>
                <View style={styles.button}><Button title="Add" onPress={addGoalHandler}/></View>
            </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      },
      input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          width: '60%'
      },
      button: {
          width: '40%'
      }
  })

export default GoalInput;