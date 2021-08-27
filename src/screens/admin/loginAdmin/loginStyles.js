import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  heading: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: HEIGHT * 0.18,
    marginBottom: HEIGHT * 0.08,
  },
  input: {
    width: "80%",
    fontSize: 17,
    borderColor: "#128da5",
    borderWidth: 1.5,
    marginVertical: HEIGHT * 0.01,
    height: HEIGHT * 0.06,
    borderRadius: 8,
    backgroundColor: "hsla(190, 80%, 36%, 0.08)",
    paddingHorizontal: "5%",
    color: "#128da5",
  },
  text: {
    flexDirection: "row",
    marginTop: HEIGHT * 0.03,
  },
  donthave: {
    fontSize: 12,
    color: "black",
  },
  signup: {
    fontSize: 12,
    color: "#128da5",
  },
  loginAsAdmin: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 0,
  },
  errtext: {
    color: "crimson",
    alignSelf: "center",
    fontSize: 9.5,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});
