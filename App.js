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

//Main
const App = () => {
  return (
    <><View style={{ flex: 1, backgroundColor: '#eee' }}>


      <View style={styles.wrapper}>
        <Text style={styles.login}>Vota bien,Vota informado</Text>

        <View style={styles.image}>
          <Image source={require('./img/jne.png')} />
        </View>
        <View>
          <TouchableHighlight style={styles.btnSend}>
            <Text style={styles.textSend}>Candidatos Presidenciales</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btnSends}>
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
    marginTop: 30,
    paddingVertical: 10,
    marginHorizontal: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  btnSends: {
    backgroundColor: '#2980b9',
    marginTop: 20,
    paddingVertical: 10,
    marginHorizontal: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
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
    marginTop: 0
  },

  login: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 200
  },

});


//Departamentos
const App2 = () => {
  return (
    <><View style={{ flex: 1, backgroundColor: '#eee' }}>


      <View style={styles1.wrapper1}>
        <Text style={styles1.login1}>Elegir Departamento</Text>

      </View>
    </View>
    </>
  );
};

const styles1 = StyleSheet.create({
  wrapper1: {
    backgroundColor: '#eee',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  login1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },
});


//Buscar Congresista
const App3 = () => {
  return (
    <><View style={{ flex: 1, backgroundColor: '#eee' }}>

      <TouchableHighlight style={styles2.btnSend2}>
        <Text style={styles2.textSend2}>Elegir Candidato</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles2.btnSends2}>
        <Text style={styles2.textSend2}>Elegir Partido</Text>
      </TouchableHighlight>

      <TextInput
        style={styles2.input2}
        placeholder="Buscar"
        keyboardType="email-address"
      />
      <View style={styles2.image2}>
        <Image source={require('./img/lupa.png')} />
      </View>

      <Text style={styles2.nya2}>Nombres y Apellidos</Text>
      <Text style={styles2.dni}>D.N.I</Text>
      <Text style={styles2.par}>Partido</Text>
      <TouchableHighlight style={styles2.btnSendss2}>
        <Text style={styles2.textSend2}>Comparar</Text>
      </TouchableHighlight>

    </View>
    </>
  );
};

const styles2 = StyleSheet.create({

  btnSend2: {
    backgroundColor: '#2980b9',
    marginTop: 20,
    paddingVertical: 10,
    marginHorizontal: 210,
    marginLeft: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  btnSends2: {
    backgroundColor: '#2980b9',
    marginTop: -49,
    paddingVertical: 10,
    marginHorizontal: 210,
    marginRight: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  btnSendss2: {
    backgroundColor: '#2980b9',
    marginTop: 400,
    paddingVertical: 10,
    marginHorizontal: 120,
    marginLeft: 130,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textSend2: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 20
  },
  input2: {
    backgroundColor: '#fff',
    textAlign: 'left',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 70,
    marginLeft: 10,
    marginTop: 15,
  },
  image2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    position: 'absolute',
    left: 350,
    top: 85,
  },
  nya2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 0,
    marginTop: 20,
    marginLeft: 60
  },
  dni: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 0,
    marginTop: -20,
    marginLeft: 250
  },
  par: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 0,
    marginTop: -22,
    marginLeft: 350
  },
});

//Buscar Partido
const App4 = () => {
  return (
    <><View style={{ flex: 1, backgroundColor: '#eee' }}>

      <TouchableHighlight style={styles2.btnSend2}>
        <Text style={styles2.textSend2}>Elegir Candidato</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles2.btnSends2}>
        <Text style={styles2.textSend2}>Elegir Partido</Text>
      </TouchableHighlight>
    </View>
    </>
  );
};

const styles3 = StyleSheet.create({

  btnSend2: {
    backgroundColor: '#2980b9',
    marginTop: 20,
    paddingVertical: 10,
    marginHorizontal: 210,
    marginLeft: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  btnSends2: {
    backgroundColor: '#2980b9',
    marginTop: -49,
    paddingVertical: 10,
    marginHorizontal: 210,
    marginRight: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  btnSendss2: {
    backgroundColor: '#2980b9',
    marginTop: 470,
    paddingVertical: 10,
    marginHorizontal: 120,
    marginLeft: 130,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textSend2: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 20
  },
});

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

export default App5;
