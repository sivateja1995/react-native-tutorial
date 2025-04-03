import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { Asset } from "expo-asset";
import { Link } from "expo-router";

const bg_image_url = Asset.fromModule(
  require("@/assets/images/coffee-1.png")
).uri;
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: bg_image_url }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>coffee</Text>
        <Link
          href="/contact"
          style={( styles.button)}
          asChild
        >
          <Pressable>
            <Text style={styles.buttonText}>contact us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000",
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,

    // opacity: 0.5,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    shadowOpacity: 2,
    opacity: 1,
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 7,
    margin: 1,
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: "auto"
  },
  buttonText: {
    color: "rgba(41, 138, 38, 0.7)",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
});
