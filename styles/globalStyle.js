import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const buttons = StyleSheet.create({
  primary: {
    flex:1,
    height: 40,
    borderRadius:6,
    elevation:5,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
});

export { styles, buttons };
