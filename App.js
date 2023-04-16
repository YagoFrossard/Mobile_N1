import { StyleSheet, Text, View } from 'react-native';
import ContatosPage from './src/ContatosPage';
import Header from './src/Header';

export default function App() {
  return (
    <>
      <ContatosPage />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});