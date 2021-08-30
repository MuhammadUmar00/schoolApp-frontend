import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export const addCousreStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    marginTop: HEIGHT * 0.03,
  },
  input: {
    width: "80%",
    fontSize: 17,
    borderColor: "#128da5",
    borderWidth: 1.5,
    marginVertical: HEIGHT * 0.015,
    height: HEIGHT * 0.06,
    borderRadius: 8,
    backgroundColor: "hsla(190, 80%, 36%, 0.08)",
    paddingHorizontal: "5%",
    color: "#128da5",
  },
  courseFile: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: HEIGHT * 0.16,
  },
  courseFileText: {
    color: "#128da5",
    fontSize: 15,
    fontWeight: "bold",
  },
  courseFileView: {
    backgroundColor: "#128da5",
    padding: "3.5%",
    paddingHorizontal: "7%",
    borderRadius: 20,
    width: WIDTH * 0.4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseFileCaption: {
    color: "#fff",
    fontSize: 12,
    marginTop: "5%",
  },
});
