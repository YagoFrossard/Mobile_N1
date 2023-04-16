import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contato from '../Contato';

export default function ContatosList() {

  const [ items, setItems ] = useState([]);

  async function getContatosList(){
    return AsyncStorage.getItem('items')
      .then(response => {
        if (response)
          return Promise.resolve(JSON.parse(response));
        else
          return Promise.resolve([]);
      })
  }

  useEffect(() => {
    getContatosList().then(items => setItems(items));
  })

  return (
    <View>
      <ScrollView style={styles.itemView}>
        {items.map(item => {
          return <Contato key={item.id} id={item.id} nome={item.nome} sobrenome={item.sobrenome} endereco={item.endereco}/>
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  itemView: {
    alignSelf: 'center',
    marginTop: 20
  }
})