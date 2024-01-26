import { StyleSheet } from 'react-native';
import { PADDING, COLORS } from "../../outils/constantes";
const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#eee',
        alignItems: 'center',
       
        justifyContent: 'space-between',
    },
    textInput: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
        marginRight: 5,
        
    },
    send: {
        backgroundColor: COLORS.main,
        padding: 10,
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 50 / 2,
        alignItems: 'center',
        color: 'white',
    },
});
export default styles;