import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    // currentGoals is just a pointer to the latest state that setCourseGoals has access to
    // the anonymous function notation is short for {return [...currentGoals, enteredGoal];}
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value}/> } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 50
  }
});
