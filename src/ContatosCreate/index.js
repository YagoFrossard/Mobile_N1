import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

export default function ContatosCreate() {

  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [numero, setNumero] = useState();
  const [email, setEmail] = useState();
  const [endereco, setEndereco] = useState();
  const [foto, setFoto] = useState();

  return (
    <View>
      <ScrollView>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon style={styles.icon} name='backspace-outline' color='black' size={40}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.icon} name='save-outline' color='black' size={40}/>
          </TouchableOpacity>
        </View>
        <View style={styles.imageIcon}>
          <TouchableOpacity>
            <Icon name='person-circle-outline' color='black' size={250} />
          </TouchableOpacity>
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
  }
})