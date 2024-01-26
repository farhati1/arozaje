import { StyleSheet } from 'react-native';
import { PADDING, COLORS } from './../../outils/constantes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    header: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        elevation: 5,
        borderRadius: 15,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 130 / 2,
    },
    userInfo: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginLeft: 10,

    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 1,
    },
    userEmail: {
        marginBottom: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    label: {
        marginTop: 10,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    radioGroup: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },

});

export default styles;