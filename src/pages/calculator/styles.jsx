import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fefefe",

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  outerDiv: {
    width: "90%",
    height: "70%",
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    marginTop: 20,
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    gap: 30,
  },

  display: {
    width: "80%",
    height: "25%",
    backgroundColor: "#4c1ccfff",
  },

  keyboard: {
    width: "90%",
    height: "50%",
    backgroundColor: "#222222ff",
    flexDirection: "column",
  },

  linha: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },

  key: {
    height: "90%",
    width: "20%",
    backgroundColor: "#2fccccff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  //Tests
  otherKey: {
    backgroundColor: "#888888ff",
  },

  operandKey: {
    backgroundColor: "#cfd13fff",
  },

  clearKey: {
    backgroundColor: "#b44b45ff",
  },

  equalsKey: {
    backgroundColor: "#a961acff",
  }

});
