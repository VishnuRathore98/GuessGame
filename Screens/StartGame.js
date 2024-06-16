import { useState } from "react";
import { TextInput, View, Text, Button, StyleSheet } from "react-native";

function StartGame() {

  const [enteredNumber, setEnteredNumber] = useState('');

  function confirmHandler(number) {
    // setEnteredNumber(number);
    console.log(number);
  }
  function resetHandler(){
    setEnteredNumber('');
  }
  let number;
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titleText}>Guess My Number</Text>
      <View style={styles.gameContainer}>
        <Text style={styles.infoText}>Enter a number</Text>
        <View style={{ marginHorizontal: 100 }}>
          {number = <TextInput
            style={styles.textInputContainer}
            
            keyboardType="number-pad"
            maxLength={2}
          />}
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Reset" onPress={resetHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={confirmHandler.bind(this, number)}/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {},
  titleText: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  textInputContainer: {
    marginVertical: 20,
    borderBottomWidth: 1,
    paddingHorizontal: 6,
    width: 50,
  },
  gameContainer: {
    height: 200,
    width: 350,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  infoText: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    width:120,
    marginVertical: 3,
    marginHorizontal:20,
  },
});

export default StartGame;
