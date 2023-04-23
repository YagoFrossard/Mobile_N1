import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContatoDetail from '../ContatoDetail';
import HomeTabs from '../HomeTabs';
import { StatusBar } from 'react-native';
import ContatosEdit from '../ContatoEdit';

const Stack = createNativeStackNavigator();
const headerHeight = Platform.OS === 'ios' ? 120 : StatusBar.currentHeight + 80;

export default function ContatosPage() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Visualizar" component={ContatoDetail} options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 32
        },
        headerStyle: { 
          backgroundColor: '#D9D9D9',
          height: headerHeight
        },
        headerBackVisible: false
        }}></Stack.Screen>
        <Stack.Screen name="Editar" component={ContatosEdit} options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 32
        },
        headerStyle: { 
          backgroundColor: '#D9D9D9',
          height: headerHeight
        },
        headerBackVisible: false
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}