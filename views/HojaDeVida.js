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
const HojaDeVida = ({ navigation, route }) => {
    const [search, setSearch] = useState('');
    const [dni, setDni] = useState(route.params.dni);
    const [dato, setDato] = useState(null);
    const [datoPersonal, setDatoPersonal] = useState(null);
    const [eduBasica, setEduBasica] = useState(null);
    const [eduUniversitaria, setEduUniversitaria] = useState([]);
    const [sentenciaObliga, setSentenciaObliga] = useState([]);

    const loadData = async () => {
        // setDepartamento(route.params.departamento);
    
        useEffect(() => {
            fetch(`http://192.168.0.5:4800/congresistas-hv/${dni}`)
                .then((response) => response.json())
                .then((json) => { 
                    let data = json.data[0];
                    setDato(data);

                    fetch(`https://plataformaelectoral.jne.gob.pe/HojaVida/GetAllHVDatosPersonales?param=${data.idhojavida}-${data.intcantexpedientesdadivas}-${data.idorganizacionpolitica}-${data.idprocesoelectoral}`)
                    .then((response) => response.json())
                    .then((resp2) => { 
                        setDatoPersonal(resp2.data[0]);
                    });

                    // https://plataformaelectoral.jne.gob.pe/HojaVida/GetAllHVEduBasica?Ids=131580-0

                    fetch(`https://plataformaelectoral.jne.gob.pe/HojaVida/GetAllHVEduBasica?Ids=${data.idhojavida}-${data.intcantexpedientesdadivas}`)
                    .then((response) => response.json())
                    .then((resp3) => { 
                        setEduBasica(resp3.data[0]);
                    });

                    // https://plataformaelectoral.jne.gob.pe/HojaVida/GetAllHVEduUniversitaria?Ids=131580-0-ASC

                    fetch(`https://plataformaelectoral.jne.gob.pe/HojaVida/GetAllHVEduUniversitaria?Ids=${data.idhojavida}-${data.intcantexpedientesdadivas}-ASC`)
                    .then((response) => response.json())
                    .then((resp3) => { 
                        setEduUniversitaria(resp3.data);
                    });

                    // https://plataformaelectoral.jne.gob.pe/HojaVida/GetAllHVSentenciaObliga?Ids=131580-0-ASC
                    fetch(`https://plataformaelectoral.jne.gob.pe/HojaVida/GetAllHVSentenciaObliga?Ids=${data.idhojavida}-${data.intcantexpedientesdadivas}-ASC`)
                        .then((response) => response.json())
                        .then((resp3) => { 
                            setSentenciaObliga(resp3.data);
                            console.log('hv',resp3.data[0]);
                        });

                   // https://plataformaelectoral.jne.gob.pe/HojaVida/GetAllHVDatosPersonales?param=131560-0-4-108

                    console.log('DNI', data.idhojavida, data.intcantexpedientesdadivas, data.idorganizacionpolitica, data.idprocesoelectoral);
                })
                .catch((error) => {
                    console.error(error);
                })  

        }, []);
    }

    loadData();

    return (
      <><View style={{ flex: 1, backgroundColor: '#eee' }}>
              {datoPersonal &&
                <SafeAreaView> 
                <ScrollView>
                        <View style={styles.imageProfile}>
                            <Image source={{ uri: 'https://declara.jne.gob.pe' + dato.strrutaarchivo }} style={{width: 150, height: 250}} />
                        </View>  

                        <View>
                            <Text style={styles.subtitle}>Nombre completo</Text>
                            <Text style={styles.data}>{datoPersonal.strNombres} {datoPersonal.strApellidoPaterno} {datoPersonal.strApellidoMaterno}</Text>
                        </View>
                        
                        <View>
                            <Text style={styles.subtitle}>Fecha de nacimiento</Text>
                            <Text style={styles.data}>{datoPersonal.strFechaNacimiento}</Text>
                        </View>

                        <View>
                            <Text style={styles.subtitle}>DNI</Text>
                            <Text style={styles.data}>{datoPersonal.strDocumentoIdentidad}</Text>
                        </View>

                        <View>
                            <Text style={styles.subtitle}>Sexo</Text>
                            <Text style={styles.data}>{datoPersonal.strSexo == 1 ? 'Masculino' : 'Femenino' }</Text>
                        </View>

                        {eduBasica && <View>
                            <Text style={styles.subtitle}>Estudios Primarios concl.</Text>
                            <Text style={styles.data}>{eduBasica.strConcluidoEduPrimaria == 1 ? 'Si': 'No'}</Text>
                        </View>}

                        {eduBasica && <View>
                            <Text style={styles.subtitle}>Estudios Secundarios concl.</Text>
                            <Text style={styles.data}>{eduBasica.strConcluidoEduSecundaria == 1 ? 'Si': 'No' }</Text>
                        </View>}

                        {eduUniversitaria && 
                        <View>
                            <Text style={styles.subtitle}>Estudios Universitarios</Text>

                            {eduUniversitaria && eduUniversitaria.map( (item, key) => 
                            <View key={key}>
                                <Text style={styles.data}>{item.strCarreraUni} en la {item.strUniversidad}</Text>

                            </View>
                            )}
                        </View>}

                        {sentenciaObliga && 
                        <View>
                            <Text style={styles.subtitle}>Relación de sentencias</Text>

                            {sentenciaObliga && sentenciaObliga.map( (item, key) => 
                            <View key={key}>
                                <Text style={styles.data}>{item.strMateriaSentencia}</Text>

                            </View>
                            )}
                        </View>}
                </ScrollView>
                </SafeAreaView>
                }
      </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    imageProfile: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        textAlign: 'center'
        
    },  
    contentBtnTab: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between'
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
    // contentSubtitle: {
    //     backgroundColor: 'red'
    // },
    data: {
      fontSize: 18,
    //   fontWeight: 'bold',
    //   textTransform: 'uppercase',
      textAlign: 'left',
      marginBottom: 0,
      marginTop: 10,
      marginHorizontal: 10
    },
    subtitle: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor: '#A0D7FD',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'left',
        marginBottom: 0,
        marginTop: 20,
        marginHorizontal: 10,
        // paddingHorizontal: 10
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

export default HojaDeVida;