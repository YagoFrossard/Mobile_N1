import { StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.titleText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#D9D9D9"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black"
    }
})