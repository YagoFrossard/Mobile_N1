import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import Contato from '../Contato';

export default function ContatosList() {

  const [ items, setItems ] = useState(
    [
      {
        "id": 1,
        "nome":"Yago",
        "sobrenome":"Frossard",
        "numero": 
          [
            22992113389,
            22898989898,
            21323455667
          ],
        "email":
          [
            "yagofcc@hotmail.com",
            "yagofrossard@hotmail.com"
          ],
        "endereco":"Rua Dulcina de Moraes, 15, Vale das Palmeiras"
      },
      {
        "id": 2,
        "nome":"Eduardo",
        "sobrenome":"Geladeira",
        "numero": 
          [
            22992113321,
            22898989123,
            21323478294
          ],
        "email":
          [
            "eduardo@hotmail.com",
            "geladeira@hotmail.com"
          ],
        "endereco":"Búzios, 77, Friburgo"
      },
      {
        "id": 3,
        "nome":"Eduardo",
        "sobrenome":"Geladeira",
        "numero": 
          [
            22992113321,
            22898989123,
            21323478294
          ],
        "email":
          [
            "eduardo@hotmail.com",
            "geladeira@hotmail.com"
          ],
        "endereco":"Búzios, 77, Friburgo"
      },
      {
        "id": 4,
        "nome":"Eduardo",
        "sobrenome":"Geladeira",
        "numero": 
          [
            22992113321,
            22898989123,
            21323478294
          ],
        "email":
          [
            "eduardo@hotmail.com",
            "geladeira@hotmail.com"
          ],
        "endereco":"Búzios, 77, Friburgo"
      },
      {
        "id": 5,
        "nome":"Eduardo",
        "sobrenome":"Geladeira",
        "numero": 
          [
            22992113321,
            22898989123,
            21323478294
          ],
        "email":
          [
            "eduardo@hotmail.com",
            "geladeira@hotmail.com"
          ],
        "endereco":"Búzios, 77, Friburgo"
      },
      {
        "id": 6,
        "nome":"Eduardo",
        "sobrenome":"Geladeira",
        "numero": 
          [
            22992113321,
            22898989123,
            21323478294
          ],
        "email":
          [
            "eduardo@hotmail.com",
            "geladeira@hotmail.com"
          ],
        "endereco":"Búzios, 77, Friburgo"
      },
      {
        "id": 7,
        "nome":"Eduardo",
        "sobrenome":"Geladeira",
        "numero": 
          [
            22992113321,
            22898989123,
            21323478294
          ],
        "email":
          [
            "eduardo@hotmail.com",
            "geladeira@hotmail.com"
          ],
        "endereco":"Búzios, 77, Friburgo"
      },
      {
        "id": 8,
        "nome":"Eduardo",
        "sobrenome":"Geladeira",
        "numero": 
          [
            22992113321,
            22898989123,
            21323478294
          ],
        "email":
          [
            "eduardo@hotmail.com",
            "geladeira@hotmail.com"
          ],
        "endereco":"Búzios, 77, Friburgo"
      },
      {
        "id": 9,
        "nome":"Eduardo",
        "sobrenome":"Geladeira",
        "numero": 
          [
            22992113321,
            22898989123,
            21323478294
          ],
        "email":
          [
            "eduardo@hotmail.com",
            "geladeira@hotmail.com"
          ],
        "endereco":"Búzios, 77, Friburgo"
      },
      {
        "id": 10,
        "nome":"Eduardo",
        "sobrenome":"Geladeira",
        "numero": 
          [
            22992113321,
            22898989123,
            21323478294
          ],
        "email":
          [
            "eduardo@hotmail.com",
            "geladeira@hotmail.com"
          ],
        "endereco":"Búzios, 77, Friburgo"
      }
    ]
  )

  return (
    <View>
      <ScrollView style={styles.itemView}>
        {items.map(item => {
          return <Contato key={item.id} id={item.id} nome={item.nome} sobrenome={item.sobrenome} numero={item.numero[0]} email={item.email[0]} />
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