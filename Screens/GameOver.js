import { View, Text, Image, Button, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOver({attempts, numberToGuess, startNewGame}) {
  return (
    <View style={styles.rootContainer}>
      
      <Title>Game Over!</Title>
        
      
      <View style={[styles.imageContainer]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{attempts}</Text> turns to guess the number <Text style={styles.highlight}>{numberToGuess}</Text>.
        </Text>

        
          <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
          
        </View>
      
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
export default GameOver;
