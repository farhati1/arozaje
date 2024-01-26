import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";
const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    borderRadius: 15,
  },

  itemImg: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius: 15,
  },
});

export default styles;
