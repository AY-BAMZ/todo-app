import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{

    },
    textOne: {
        fontFamily: "poppins-bold",
        fontSize: 40,
    },textTwo: {
        fontFamily: "poppins-bold",
        fontSize: 32,
    },textThree: {
        fontFamily: "poppins-semibold",
        fontSize: 24,
    },textFour: {
        fontFamily: "poppins-semibold",
        fontSize: 20,
    },textFive: {
        fontFamily: "poppins-medium",
        fontSize: 18,
    },textSix: {
        fontFamily: "poppins-medium",
        fontSize: 16,
    },textSeven: {
        fontFamily: "poppins-regular",
        fontSize: 14,
    },textEight: {
        fontFamily: "poppins-regular",
        fontSize: 12,
    },
    addButton: {
        alignSelf: 'center',
        padding: 8,
        marginVertical: 20,
        borderColor: '#f2f2f2',
        borderRadius: 12,
        backgroundColor: "#fff"
    },
    closeButton: {
        alignSelf: 'center',
        padding: 8,
        marginVertical: 20,
        marginTop: 40,
        borderColor: '#f2f2f2',
        borderRadius: 12,
        backgroundColor: "#f2f2f2"
    },
    input: {
        padding: 12,
        fontSize: 18,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginVertical: 10,
        paddingVertical: 16,
        borderRadius: 8,
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: 'purple',
        color: "#fff",
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        backgroundColor: "none",
        alignSelf: 'center',
        fontSize: 20,

    },
    errorText: {
        alignSelf: 'center',
        marginHorizontal: 20,
        padding: 6,
        fontSize: 12,
        backgroundColor: "#ff000020",
        color: 'red',
        paddingHorizontal: 20,
        borderRadius: 5
    }
});