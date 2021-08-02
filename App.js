import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const goalInputHandler = (txt) => {
    setEnteredGoal(txt);
  };

  const addGoalHandler = () => {
    if (enteredGoal.length === 0) return;
    setCourseGoals([
      ...courseGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setOpenModal(false);
    setEnteredGoal("");
  };

  const cancel = () => {
    setEnteredGoal("");
    setOpenModal(false);
  };

  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    console.log(courseGoals);
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setOpenModal(true)} />
      <View style={styles.inputContainer}>
        <GoalInput
          onChange={goalInputHandler}
          value={enteredGoal}
          addGoalHandler={addGoalHandler}
          openModal={openModal}
          cancel={cancel}
        />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});
