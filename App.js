import { StyleSheet, Text, View } from 'react-native';
import ContatosPage from './src/ContatosPage';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  /*
  clearAsyncStorage = async() => {
    AsyncStorage.clear();
  }
  
  useEffect(() => {
    clearAsyncStorage();
  }, [])
  */

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