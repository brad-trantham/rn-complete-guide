import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

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
      <GoalInput onChangeText={goalInputHandler} value={enteredGoal} onPress={addGoalHandler}/>
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value}/> } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 50
  }
});
