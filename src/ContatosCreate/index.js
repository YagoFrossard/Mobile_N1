import { StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker';
import FotoContato from '../FotoContato';

export default function ContatosCreate() {

  const navigation = useNavigation();

  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [numero3, setNumero3] = useState('');
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [endereco, setEndereco] = useState();
  const [foto, setFoto] = useState('');

  const gerarAlertaCamposNulos = () => {
    Alert.alert('Campos nulos', 'Nome, sobrenome e endereço não podem ser nulos', [
      {
        text: 'OK',
        style: 'cancel'
      }
    ]);
  }

  const gerarAlertaNumEmailNulos = () => {
    Alert.alert('Informações insuficientes', 'Pelo menos um número e um e-mail precisam ser cadastrados.', [
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
    setNumero1('')
    setNumero2('')
    setNumero3('')
    setEmail1('')
    setEmail2('')
    setFoto('')
  }

  const voltarParaHome = () => {
    anularValores();
    navigation.navigate('Contatos');
  }

  const abrirCamera = async () => {

    let result = await launchCameraAsync({
      allowsEditing: true,
      quality: 1
    });

    if(!result.canceled){
      setFoto(result.assets[0].uri);
    }else{
      Alert.alert('Erro', 'Você não tirou nenhuma foto.', [
        {
          text: 'OK',
          style: 'cancel'
        }
      ])
    }
  }

  const abrirGaleria = async () => {

    let result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if(!result.canceled){
      setFoto(result.assets[0].uri);
    }else{
      Alert.alert('Erro', 'Você não selecionou nenhuma imagem.', [
        {
          text: 'OK',
          style: 'cancel'
        }
      ])
    }
  }

  const selecionarImagem = () => {
    Alert.alert('Escolher imagem', 'Selecione de onde gostaria de escolher a imagem', [
      {
        text: 'Galeria',
        style: 'default',
        onPress: () => {abrirGaleria()}
      },
      {
        text: 'Câmera',
        style: 'default',
        onPress: () => {abrirCamera()}
      }
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'Seleção de imagem cancelada.',
        ),
    });
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

  function numero1Update(numero1) {
    setNumero1(numero1);
  }

  function numero2Update(numero2) {
    setNumero2(numero2);
  }

  function numero3Update(numero3) {
    setNumero3(numero3);
  }
  
  function email1Update(email1) {
    setEmail1(email1);
  }

  function email2Update(email2) {
    setEmail2(email2);
  }

  async function saveContact(){
    if( nome && sobrenome && endereco ){
      if((email1 || email2) && (numero1 || numero2 || numero3)){
        let numeros = [numero1, numero2, numero3]
        let emails = [email1, email2]
  
        const item = {id: new Date().getTime(), nome, sobrenome, endereco, numeros, emails, foto};
        
        let items = [];
        
        const response = await AsyncStorage.getItem('items');
    
        if (response) items = JSON.parse(response);
    
        items.push(item);
    
        await AsyncStorage.setItem('items', JSON.stringify(items));
    
        anularValores();
        voltarParaHome();
      }else{
        gerarAlertaNumEmailNulos();
      }
    }else{
      gerarAlertaCamposNulos();
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
          <TouchableOpacity onPress={selecionarImagem}>
            <FotoContato mini={false} foto={foto}/>
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
            value={numero1}
            onChangeText={numero1Update}/>
            <TextInput
            style={styles.texto}
            keyboardType='numeric'
            placeholder='Número'
            clearButtomMode='always'
            value={numero2}
            onChangeText={numero2Update}/>
            <TextInput
            style={styles.texto}
            keyboardType='numeric'
            placeholder='Número'
            clearButtomMode='always'
            value={numero3}
            onChangeText={numero3Update}/>
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
            value={email1}
            onChangeText={email1Update}/>
            <TextInput
            style={styles.texto}
            placeholder='E-mail'
            clearButtomMode='always' 
            value={email2}
            onChangeText={email2Update}/>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
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
  },
  blocoFoto: {
    width: 100,
    height: 100
  }
})