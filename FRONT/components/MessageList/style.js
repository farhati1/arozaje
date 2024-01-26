import { StyleSheet } from 'react-native';
import { PADDING, COLORS } from "../../outils/constantes";
const styles = StyleSheet.create({
    messagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5,
        marginTop: 15,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    messageImg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 10,

    },
    messageInfo: {
        flexDirection: 'column',
        flex: 1,
        paddingVertical: PADDING.vertical,
        
    },
    date_name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },

    name_style: {
        fontWeight: 'bold',
        marginRight:5,
    

    },
});

export default styles;
