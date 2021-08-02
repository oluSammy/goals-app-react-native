import React from "react";
import { StyleSheet, TextInput, Modal, Button, View } from "react-native";

const GoalInput = ({ value, onChange, addGoalHandler, openModal, cancel }) => {
  return (
    <Modal visible={openModal} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={onChange}
          value={value}
        />
        <View style={styles.btnContainer}>
          <Button title="add" onPress={addGoalHandler} />
          <Button title="cancel" onPress={cancel} color="red" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    marginTop: 20,
  },
});

export default GoalInput;
