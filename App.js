import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
import Departamentos from './views/Departamentos';
import Partidos from './views/Partidos';
import BuscarCongresista from './views/BuscarCongresista';
import HojaDeVida from './views/HojaDeVida';

import {useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  StatusBar, Button,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={ Home } />
        <Stack.Screen name="Departamentos" options={{ title: 'Lista de departamentos' }} component={ Departamentos } />
        <Stack.Screen name="BuscarCongresista" options={{ title: 'Buscar candidato' }} component={ BuscarCongresista } />
        <Stack.Screen name="Partidos" options={{ title: 'Lista de partidos' }} component={ Partidos } />
        <Stack.Screen name="HojaDeVida" options={{ title: 'Hoja de Vida' }} component={ HojaDeVida } />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;

/*




//Partido Elegido
const App5 = () => {
  return (
    <><View style={{ flex: 1, backgroundColor: '#eee' }}>

      <Text style={styles5.nya5}>Nombres y Apellidos</Text>
      
      <TouchableHighlight style={styles5.btnSendss5}>
        <Text style={styles2.textSend2}>Comparar</Text>
      </TouchableHighlight>

    </View>
    </>
  );
};

const styles5 = StyleSheet.create({

    btnSendss5: {
    backgroundColor: '#2980b9',
    marginTop: 500,
    paddingVertical: 10,
    marginHorizontal: 120,
    marginLeft: 130,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  
  nya5: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 0,
    marginTop: 80,
    marginLeft: 60
  },
  
});

export default App2;
*/