import { SafeAreaView, View, Text } from "react-native";

function PlayGame(params) {
  return (
    // <SafeAreaView>
      <View>
        <View>
          <Text>Opponent's Guess</Text>
        </View>
        <View>
          <Text style={{ textAlign: "center" }}>41</Text>
        </View>
        <View>
          <Text>Higher or Lower?</Text>
        </View>
        <View>
          <Text>#1 Opponent's guess</Text>
        </View>
      </View>
    // </SafeAreaView>
  );
}

export default PlayGame;
