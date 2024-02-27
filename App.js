import React from "react";
import {SafeAreaView, StyleSheet, Text, Image, Button, View, Dimensions, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import patika_data from "./src/patika_data.json";
import PatiCard from "./src/Components/PatiCard";

function App () {

  const renderpati = ({item}) => <PatiCard pati={item} />
  return (
    <SafeAreaView>
      <Text style={styles.config}>PATİKASTORE</Text>
      <TextInput style={styles.textInput} placeholder="Ara.." />
      <FlatList 
      horizontal={false}
      paddingRight= {5}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      data={patika_data}
      renderItem={renderpati} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
config: {
  fontWeight: 'bold',
  fontSize: 40,
  color: '#800080',
  textAlign: 'left',
  paddingLeft: 15,
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    fontSize: 20,
    padding: 10,
    margin: 10,
  },
});
export default App;