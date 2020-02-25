import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // equivalent to:
  // function goalInputHandler(enteredText) {
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    // currentGoals is just a pointer to the latest state that setCourseGoals has access to
    // the anonymous function notation is short for {return [...currentGoals, enteredGoal];}
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" 
                   style={styles.input} 
                   onChangeText={goalInputHandler}
                   value={enteredGoal}/>
        <Button title="Add" onPress={addGoalHandler}/>
      </View>
      <FlatList data={courseGoals} renderItem={itemData =>
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 50
  },
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});