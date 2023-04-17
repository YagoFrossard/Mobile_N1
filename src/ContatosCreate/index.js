import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function ContatosCreate() {

  const navigation = useNavigation();

  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [numero, setNumero] = useState();
  const [email, setEmail] = useState();
  const [endereco, setEndereco] = useState();
  const [foto, setFoto] = useState();

  const gerarAlerta = () => {
    Alert.alert('Campos nulos', 'Algum dos campos está nulo.', [
      {
        text: 'OK',
        style: 'cancel'
      }
    ]);
  }

  const anularValores = () => {
    setNome(null)
    setSobrenome(null)
    setEndereco(null)
    setNumero(null)
    setEmail(null)
  }

  const voltarParaHome = () => {
    anularValores();
    navigation.navigate('Contatos');
  }

  function nomeUpdate(nome) {
    setNome(nome);
  }

  function sobrenomeUpdate(sobrenome) {
    setSobrenome(sobrenome);
  }

  function enderecoUpdate(endereco) {
    setEndereco(endereco);
  }

  function numeroUpdate(numero) {
    setNumero(numero);
  }
  
  function emailUpdate(email) {
    setEmail(email);
  }

  async function saveContact(){
    if( nome && sobrenome && endereco && numero && email ){
      const item = {id: new Date().getTime(), nome, sobrenome, endereco, numero, email};
      
      let items = [];
      
      const response = await AsyncStorage.getItem('items');
  
      if (response) items = JSON.parse(response);
  
      items.push(item);
  
      console.log(items);
      await AsyncStorage.setItem('items', JSON.stringify(items));
  
      anularValores();
    }else{
      gerarAlerta();
    }
  }

  useEffect(() => {

  }, [])

  return (
    <View>
      <ScrollView>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={voltarParaHome}>
            <Icon style={styles.icon} name='backspace-outline' color='black' size={40}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={saveContact}>
            <Icon style={styles.icon} name='save-outline' color='black' size={40}/>
          </TouchableOpacity>
        </View>
        <View style={styles.imageIcon}>
          <TouchableOpacity>
            <Icon name='person-circle-outline' color='black' size={250} />
          </TouchableOpacity>
        </View>
        <View style={styles.dados}>
          <View style={styles.blocoIcones}>
            <Icon style={styles.nomeIcon} name='person-outline' color='black' size={40} />
            <Icon style={styles.homeIcon} name='home-outline' color='black' size={40} />
          </View>
          <View style={styles.blocoTextos}>
            <TextInput
            style={styles.texto} 
            placeholder='Nome'
            clearButtomMode='always' 
            value={nome}
            onChangeText={nomeUpdate}/>
            <TextInput
            style={styles.texto}
            placeholder='Sobrenome'
            clearButtomMode='always'
            value={sobrenome}
            onChangeText={sobrenomeUpdate}/>
            <TextInput
            style={styles.texto}
            placeholder='Endereço'
            clearButtomMode='always' 
            multiline={true}
            value={endereco}
            onChangeText={enderecoUpdate}/>
          </View>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.dados}>
          <View style={styles.blocoIcones}>
            <Icon style={styles.genericIcon} name='call-outline' color='black' size={40} />
          </View>
          <View style={styles.blocoTextos}>
            <TextInput
            style={styles.texto}
            keyboardType='numeric'
            placeholder='Número'
            clearButtomMode='always'
            value={numero}
            onChangeText={numeroUpdate}/>
          </View>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.dados}>
          <View style={styles.blocoIcones}>
            <Icon style={styles.genericIcon} name='mail-outline' color='black' size={40} />
          </View>
          <View style={styles.blocoTextos}>
            <TextInput
            style={styles.texto}
            placeholder='E-mail'
            clearButtomMode='always' 
            value={email}
            onChangeText={emailUpdate}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles= StyleSheet.create({
  headerIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'space-between'
  },
  icon: {
    padding: 10
  },
  imageIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dados: {
    display: 'flex',
    flexDirection: 'row'
  },
  blocoIcones: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20
  },
  blocoTextos: {
    flexDirection: 'column'
  },
  texto: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    width: 300,
    height: 45,
    paddingLeft: 5,
    marginBottom: 5,
    overflow: 'hidden'
  },
  nomeIcon: {
    flex: 9,
    alignContent: 'flex-start'
  },
  homeIcon: {
    flex: 1,
    alignContent: 'flex-end'
  },
  genericIcon: {
    flex: 1
  },
  hr: {
    marginTop: 5,
    marginBottom: 10,
    borderBottomColor: '#B6D0E2',
    borderBottomWidth: 2,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})