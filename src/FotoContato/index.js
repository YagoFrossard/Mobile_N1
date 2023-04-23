import { Image, StyleSheet, Text, View } from 'react-native';

export default function FotoContato({ foto, mini }) {

    let fotoUri = foto ? {uri: foto} : require('./user_placeholder.jpg');

  return (
        <Image style={mini ? styles.miniImagem : styles.maxImagem} source={fotoUri}></Image>
  );
}

const styles = StyleSheet.create({
    maxImagem: {
      width: 250,
      height: 250,
      borderRadius: 1000
    },
    miniImagem: {
      width: 60,
      height: 60,
      borderRadius: 1000
    }
})