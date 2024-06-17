import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import NumberContainer from "../components/game/NumberContainer";

function PlayGame({ userPickedNumber, onGameOver }) {
  const [opponentGuess, setOpponentGuess] = useState(
    Math.floor(Math.random() * 100)
  );
  const [opponentGuesses, setOpponentGuesses] = useState([]);
  const [lowerLimit, setLowerLimit] = useState(1);
  const [upperLimit, setUpperLimit] = useState(99);

  function guessGreaterNumberHandler(min, max) {
    setOpponentGuess(Math.floor(Math.random() * (max - min + 1)) + min);
    setLowerLimit(opponentGuess);
    console.log("opponentsGuess: " + opponentGuess);
  }
  function guessLowerNumberHandler(min, max) {
    setOpponentGuess(Math.floor(Math.random() * (max - min + 1)) + min);
    setUpperLimit(opponentGuess);
  }

  useEffect(() => {
    setOpponentGuesses([...opponentGuesses, opponentGuess]);
    if (opponentGuess == userPickedNumber) {
      onGameOver(opponentGuesses.length, userPickedNumber);
    }
  }, [opponentGuess, userPickedNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{opponentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={guessLowerNumberHandler.bind(
                this,
                lowerLimit,
                opponentGuess
              )}
            >
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={guessGreaterNumberHandler.bind(
                this,
                opponentGuess,
                upperLimit
              )}
            >
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default PlayGame;
