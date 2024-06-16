import { View, Text, Image, Button, StyleSheet } from "react-native";

function GameOver(params) {
  return (
    <View style={styles.rootContainer}>
      <View style={[styles.container]}>
        <Text style={[styles.titleText, styles.headingContainer]}>
          Game Over!
        </Text>
      </View>
      <View style={[styles.summaryContainer, styles.container]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />

        <Text style={styles.summaryText}>
          Your phone needed X turns to guess the number Y.
        </Text>

        <View style={[styles.restartButton]}>
          <Button title="Start New Game" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {

  },
  headingContainer: {
    padding: 6,
    borderWidth: 1,
  },
  container: {
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  summaryContainer: {
    borderWidth:1,
    // padding:6,
    height:400,
  },
  titleText: {
    marginVertical: 8,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    borderWidth: 2,
    borderColor: "black",
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  summaryText: {
    padding: 14,
    textAlign: "center",
    fontSize: 18,
  },
  restartButton: {},
});

export default GameOver;
