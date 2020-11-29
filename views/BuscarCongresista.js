import React, {useState, useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Modal,
  TextInput,
  Image,
  ImageBackground,
  StatusBar, Button,
  TouchableHighlight,
  Dimensions,
  Alert ,
  ToastAndroid
} from 'react-native';



//Buscar Congresista
const BuscarCongresista = ({ navigation, route }) => {
    const [search, setSearch] = useState('');
    const [departamento, setDepartamento] = useState(route.params.departamento);
    const [candidatos, setCandidatos] = useState([]);
    const [isSelected, setSelection] = useState(false);

    const loadData = async () => {
        // setDepartamento(route.params.departamento);
    
        useEffect(() => {
            fetch(`http://192.168.0.5:4800/departamentos-congresistas/${departamento}/buscar/`)
                .then((response) => response.json())
                .then((json) => { 
                    setCandidatos(json.data);
                })
                .catch((error) => {
                    console.error(error);
                });   

        }, []);
    }

    loadData();

    const __searchText = async () => {
        // useEffect(() => {
            fetch(`http://192.168.0.5:4800/departamentos-congresistas/${departamento}/buscar/${search}`)
                .then((response) => response.json())
                .then((json) => { 
                    setCandidatos(json.data);
                    
                })
                .catch((error) => {
                    console.error(error);
                });   
        // }, []);
    }

    const __showHV = async (dni) => {
        navigation.navigate('HojaDeVida', { dni });
    }

    return (
      <><View style={{ flex: 1, backgroundColor: '#eee', alignItems: 'center' }}>
          <ScrollView>
          <View style={styles.contentBtnTab}>
            <TouchableHighlight style={styles.btn}>
            <Text style={styles.textButton}>Buscar por Candidato</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn}>
            <Text style={styles.textButton}>Buscar por Partido</Text>
            </TouchableHighlight>
          </View>
  
        <View style={styles.search}>
            <TextInput
            style={styles.input2}
            placeholder="Buscar"
            onChangeText={text => setSearch(text)}
            />
            <View style={styles.image2}>
                <TouchableHighlight
                    onPress={() => __searchText()}>
                    <Image source={require('../img/lupa.png')} />
                </TouchableHighlight>
            </View>
        </View>
  
        <View>
            <Text style={styles.nya2}>Nombres y Apellidos</Text>
            <Text style={styles.par}>Partido</Text>
        </View>

        {candidatos && candidatos.map(item =>
        <TouchableHighlight 
            key={item.dni}
            onPress={() => __showHV(item.dni)}>
            <View >
                <Text style={styles.nya2}>{item.nombres} {item.apellido_paterno} {item.apellido_materno}</Text>
                <Text style={styles.par}>{item.partido}</Text>
            </View>
        </TouchableHighlight>
        )}
        
  </ScrollView>
        <TouchableHighlight style={styles.btnComparar}>
          <Text style={styles.textButton}>Comparar</Text>
        </TouchableHighlight>
      </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    contentBtnTab: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between'
    },
    btnComparar: {
        backgroundColor: '#2980b9',
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        width: 190
    },
    btn: {
        backgroundColor: '#2980b9',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 25,
        width: 190
    },
    btnTab: {
        
    },
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
    textButton: {
      textAlign: 'center',
      color: '#fff',
      textTransform: 'uppercase',
      fontSize: 15
    },
    input2: {
      backgroundColor: '#fff',
      textAlign: 'left',
      fontSize: 20,
      borderWidth: 1,
      borderColor: '#fff',
      marginLeft: 10,
      marginTop: 15,
      width: '80%'
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },  
    image2: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
    //   position: 'absolute',
    //   left: 350,
    //   top: 85,
        width: '20%'
    },
    nya2: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#eee',
      fontSize: 15,
      width: '60%',
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

export default BuscarCongresista;