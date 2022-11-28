import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TopBox() {
  return (
    <ImageBackground source={require("../../assets/hometopboxbg.png")}>
      <View style={styles.topBox}>
        <View style={styles.container}>
          <View style={styles.timer}>
            <Text style={styles.textSix} color="white">
              Today
            </Text>
            <Text style={styles.countdown}>Due in 2 hours</Text>
          </View>
          <Text style={styles.mainTodo}>
            Meeting With Client in florida for home.
          </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Completed</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  topBox: {
    height: 182,
  },
  container: {
    backgroundColor: "#5A19AD99",
    height: "100%",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  timer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textSix: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: "#fff",
  },
  countdown: {
    fontStyle: "italic",
    color: "#fff",
    fontFamily: "poppins-medium",
    fontSize: 16,
  },
  mainTodo: {
    fontFamily: "poppins-bold",
    fontSize: 24,
    color: "#fff",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#F23859",
    color: "#fff",
    padding: 16,
    borderRadius: 50,
    width: 100,
    position: "absolute",
    right: 30,
    top: 153,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "poppins-regular",
    fontSize: 14,
  },
});
