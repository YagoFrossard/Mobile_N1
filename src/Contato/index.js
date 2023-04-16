import {StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Contato(props) {
  return (
    <View style={styles.container}>
      <Icon style={styles.icone} name='person-circle-outline' color='black' size={80} />
      <View style={styles.grupoTextos}>
        <Text style={styles.texto}>
            {props.nome + " " + props.sobrenome}
        </Text>
        <Text style={styles.texto}>
            {props.numero}
        </Text>
        <Text style={styles.texto}>
            {props.email}
        </Text>
      </View>
      <TouchableOpacity style={styles.botaoDeletar}>
        <Icon name='close-outline' color='black' size={30} />
      </TouchableOpacity>
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
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center'
    },
    botaoDeletar: {
        flex: 1
    },
    grupoTextos: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    }
})