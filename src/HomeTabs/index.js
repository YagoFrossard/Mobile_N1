import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContatosList from '../ContatosList';
import ContatosCreate from '../ContatosCreate';
import ContatoDetail from '../ContatoDetail';
import HomeTabs from '../HomeTabs';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
const headerHeight = Platform.OS === 'ios' ? 120 : StatusBar.currentHeight + 80;

export default function ContatosPage() {

  return (
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarActiveBackgroundColor: "#89CFF0",
        tabBarInactiveBackgroundColor: "#D9D9D9",
        tabBarIcon: () => {
          const icons = {
            Contatos: 'people-outline',
            Criar: 'add-outline'
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
      })} >
        <Tab.Screen name="Contatos" component={ContatosList}></Tab.Screen>
        <Tab.Screen name="Criar" component={ContatosCreate}></Tab.Screen>
      </Tab.Navigator>
  );
}