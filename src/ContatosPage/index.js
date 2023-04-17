import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ContatosList from '../ContatosList';
import ContatosCreate from '../ContatosCreate';
import ContatoDetail from '../ContatoDetail';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const { Navigator, Screen } = createBottomTabNavigator();
const headerHeight = Platform.OS === 'ios' ? 120 : StatusBar.currentHeight + 80;

export default function ContatosPage() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarActiveBackgroundColor: "#89CFF0",
          tabBarInactiveBackgroundColor: "#D9D9D9",
          tabBarIcon: () => {
            const icons = {
              Contatos: 'people-outline',
              Criar: 'add-outline',
              Visualizar: 'eye-outline'
            }

            return (
              <Icon name={icons[route.name]} color='black' size={45} />
            )
          },
          tabBarIconStyle: {
            marginTop: -20
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 32
          },
          headerStyle: { 
            backgroundColor: '#D9D9D9',
            height: headerHeight
          },
          tabBarStyle: {
            height: 80,
            marginTop: 0
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            position: 'absolute',
            top: 50,
            bottom: 0,
            left: 0,
            right: 0
          }
        })} 
        >
        <Screen name="Contatos" component={ContatosList}></Screen>
        <Screen name="Criar" component={ContatosCreate}></Screen>
        <Screen name="Visualizar" component={ContatoDetail} options={{ tabBarStyle: {display: 'none'} }}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}