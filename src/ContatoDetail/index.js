import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ContatosDetail( { route }) {

    const navigation = useNavigation();

    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [numero, setNumero] = useState();
    const [email, setEmail] = useState();
    const [endereco, setEndereco] = useState();
    const [foto, setFoto] = useState();

    const voltarParaHome = () => {
        navigation.navigate('Contatos');
    }

    useEffect(() => {
        let obj = route.params
        if (obj){
            setNome(obj.nome)
            setSobrenome(obj.sobrenome)
            setEndereco(obj.endereco)
            setNumero(obj.numero)
            setEmail(obj.email)
        }
    })

    return (
        <View>
            <ScrollView>
                <View style={styles.headerIcons}>
                    <TouchableOpacity onPress={voltarParaHome}>
                        <Icon style={styles.icon} name='backspace-outline' color='black' size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={styles.icon} name='pencil-outline' color='black' size={40} />
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
                            clearButtomMode='always'
                            editable={false}
                            value={nome} />
                        <TextInput
                            style={styles.texto}
                            clearButtomMode='always'
                            editable={false}
                            value={sobrenome} />
                        <TextInput
                            style={styles.texto}
                            clearButtomMode='always'
                            editable={false}
                            value={endereco} />
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
                            clearButtomMode='always'
                            editable={false}
                            value={numero} />
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
                            clearButtomMode='always'
                            editable={false}
                            value={email} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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