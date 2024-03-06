import React from "react";
import { StatusBar, useState } from "expo-status-bar";
import { StyleSheet, TextInput, View, Button } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [speech, setSpeech] = React.useState("");

  const speak = () => {
    Speech.speak(speech);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSpeech(text)}
      />
      <Button title="Press to hear text" onPress={speak} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
