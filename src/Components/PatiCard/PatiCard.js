import React from "react";
import { View, Text, Image } from "react-native";
import styles from './PatiCard.style';

const PatiCard = ({pati}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: pati.imgURL }}/>
            <Text style={styles.title}>{pati.title}</Text>
            <Text style={styles.price}>{pati.price}</Text>
            <Text style={styles.stock}>{pati.stock}</Text>
            {!pati.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
        </View>
    );
};

export default PatiCard;