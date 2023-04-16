import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Contato(props) {

  const alertaDeletar = () =>
    Alert.alert('Deletar Contato', 'Tem certeza que deseja deletar o contato de ' + props.nome + '?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Confirmar', onPress: () => deletarContato()},
    ]);
  
  async function getContatosList(){
    return AsyncStorage.getItem('items')
      .then(response => {
        if (response)
          return Promise.resolve(JSON.parse(response));
        else
          return Promise.resolve([]);
      })
  }

  const deletarContato = () => {
    getContatosList()
    .then(async (items) => {
      for(let i = 0; i < items.length; i++) {
        if(items[i].id == props.id) {
            items.splice(i, 1);
            break;
        } 
      }
      console.log(items)
      await AsyncStorage.setItem('items', JSON.stringify(items));
    });
  }

  return (
    <View style={styles.container}>
      <Icon style={styles.icone} name='person-circle-outline' color='black' size={80} />
      <View style={styles.grupoTextos}>
        <Text style={styles.texto}>
            {props.nome + " " + props.sobrenome}
        </Text>
        <Text style={styles.texto}>
            {props.nome}
        </Text>
        <Text style={styles.texto}>
            {props.endereco}
        </Text>
      </View>
      <View style={styles.botaoDeletar}>
        <TouchableOpacity onPress={alertaDeletar}>
          <Icon name='close-outline' color='black' size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: 360,
        height: 90,
        justifyContent: 'space-between',
        backgroundColor: '#B6D0E2',
        borderRadius: 15,
        marginTop: 5,
        marginBottom: 5
    },
    texto: {
        width: 249,
        height: 23,
        lineHeight: 25,
        fontSize: 16,
        fontWeight: 400,
    },
    icone: {
        flex: 3,
        textAlign: 'center',
        alignSelf: 'center'
    },
    botaoDeletar: {
        flex: 1,
        alignSelf: 'flex-start'
    },
    grupoTextos: {
        flex: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        overflow: 'hidden'
    }
})