import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, LinearGradient } from "react-native";
import StartGame from "./Screens/StartGame";
import PlayGame from "./Screens/PlayGame";
import GameOver from "./Screens/GameOver";

export default function App() {
  return (
    <View style={styles.container}>
    {/* <LinearGradient colors={['#4e0329', '#ddb52f']}> */}
      {/* <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" imageStyle={{opacity:0.75}} > */}
      <StartGame />
      {/* <PlayGame /> */}
      {/* <GameOver /> */}
      {/* </ImageBackground> */}
      {/* </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    
    alignItems: "center",
    justifyContent: "center",
  },
});
