import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        borderRadius: 10,
        padding :10,
        width: Dimensions.get('window').width / 2,
        margin: 5,
},
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color : 'black',
    },
    price:{
        fontSize: 20,
        padding: 10,
    },
    stock: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 20,

    },
});