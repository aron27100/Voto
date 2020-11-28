import * as React from 'react';
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

const App = () => {
  return (
    <><View style={{ flex: 1, backgroundColor: '#eee' }}>
      

      <View style={styles.wrapper}>        
        <Text style={styles.login}>Elecciones Generales 2021</Text>
        
        <View>
          <TouchableHighlight style={styles.btnSend}>
            <Text style={styles.textSend}>Candidatos Presidenciales</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btnSend1}>
            <Text style={styles.textSend}>Candidatos al Congreso</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#eee',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  
  btnSend: {
    backgroundColor: '#2980b9',
    marginTop: 90,
    paddingVertical: 10,
    marginHorizontal: 60
  },
  btnSend1: {
    backgroundColor: '#2980b9',
    marginTop: 20,
    paddingVertical: 10,
    marginHorizontal: 60
  },
  textSend: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 20
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    marginTop: 50
  },

  login: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },

});

const App2 = () => {
  return (
    <><View style={{ flex: 1, backgroundColor: '#eee' }}>
      

      <View style={styles1.wrapper}>        
        <Text style={styles1.login}>Elegir Departamento</Text>
                    
      </View>
    </View>
    </>
  );
};

const styles1 = StyleSheet.create({
  wrapper: {
    backgroundColor: '#eee',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  input: {
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  btnSend: {
    backgroundColor: '#2980b9',
    marginTop: 90,
    paddingVertical: 10,
    marginHorizontal: 60
  },
  btnSend1: {
    backgroundColor: '#2980b9',
    marginTop: 20,
    paddingVertical: 10,
    marginHorizontal: 60
  },
  textSend: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 20
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    marginTop: 50
  },

  login: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },

  image2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },

});

export default App2;
