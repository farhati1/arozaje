import { StyleSheet } from 'react-native';
import { COLORS, PADDING } from './../../outils/constantes';
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        elevation: 5,
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
});
export default styles;