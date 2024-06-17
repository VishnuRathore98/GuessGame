import { ImageBackground, StyleSheet, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./Screens/StartGame";
import PlayGame from "./Screens/PlayGame";
import GameOver from "./Screens/GameOver";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(); //Keep null such that if condition will be falsy.
  const [isGameOver, setIsGameOver] = useState(false);
  const [guesses, setGuesses] = useState(0);
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(number) {
    setPickedNumber(number);
  }

  function startNewGameHandler() {
    console.log("clicked");
    setPickedNumber(null);
    setIsGameOver(false);
    // setGuesses(0);
    // <StartGame onPickedNumber={1}/>;
  }

  function gameOverHandler(tries, number) {
    setGuesses(tries);
    setUserNumber(number);
    setIsGameOver(true);
  }

  let screen = <StartGame onPickedNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <PlayGame userPickedNumber={pickedNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver) {
    screen = (
      <GameOver
        attempts={guesses}
        numberToGuess={userNumber}
        startNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.rootContainer}
    >
      
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar style='light'/>
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
