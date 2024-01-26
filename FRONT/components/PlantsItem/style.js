import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollableListItem: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "white",
    marginRight: 15,
    elevation: 20,
  },

  mainText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subText: {
    marginTop: 3,
    fontSize: 12,
  },
});

export default styles;
