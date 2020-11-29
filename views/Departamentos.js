import React, { useState, useEffect } from 'react';

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

//Departamentos
const Departamentos = ({ navigation }) => {

    const [departamentos, setDepartamentos] = useState([]);
  
    const loadPartidos = async () => {
      let proccessed = 0;
      useEffect(() => {
          const departamentosList = [{"id_ubigeo":"2534","nombre_ubigeo":"Amazonas","codigo_ubigeo":"01","etiqueta_ubigeo":"Amazonas, Per\u00fa","buscador_ubigeo":"amazonas per\u00fa","numero_hijos_ubigeo":"7","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"2625","nombre_ubigeo":"Ancash","codigo_ubigeo":"02","etiqueta_ubigeo":"Ancash, Per\u00fa","buscador_ubigeo":"ancash per\u00fa","numero_hijos_ubigeo":"20","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"2812","nombre_ubigeo":"Apurimac","codigo_ubigeo":"03","etiqueta_ubigeo":"Apurimac, Per\u00fa","buscador_ubigeo":"apurimac per\u00fa","numero_hijos_ubigeo":"7","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"2900","nombre_ubigeo":"Arequipa","codigo_ubigeo":"04","etiqueta_ubigeo":"Arequipa, Per\u00fa","buscador_ubigeo":"arequipa per\u00fa","numero_hijos_ubigeo":"8","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"3020","nombre_ubigeo":"Ayacucho","codigo_ubigeo":"05","etiqueta_ubigeo":"Ayacucho, Per\u00fa","buscador_ubigeo":"ayacucho per\u00fa","numero_hijos_ubigeo":"11","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"3143","nombre_ubigeo":"Cajamarca","codigo_ubigeo":"06","etiqueta_ubigeo":"Cajamarca, Per\u00fa","buscador_ubigeo":"cajamarca per\u00fa","numero_hijos_ubigeo":"13","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"3292","nombre_ubigeo":"Cusco","codigo_ubigeo":"08","etiqueta_ubigeo":"Cusco, Per\u00fa","buscador_ubigeo":"cusco per\u00fa","numero_hijos_ubigeo":"13","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"3414","nombre_ubigeo":"Huancavelica","codigo_ubigeo":"09","etiqueta_ubigeo":"Huancavelica, Per\u00fa","buscador_ubigeo":"huancavelica per\u00fa","numero_hijos_ubigeo":"7","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"3518","nombre_ubigeo":"Huanuco","codigo_ubigeo":"10","etiqueta_ubigeo":"Huanuco, Per\u00fa","buscador_ubigeo":"huanuco per\u00fa","numero_hijos_ubigeo":"11","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"3606","nombre_ubigeo":"Ica","codigo_ubigeo":"11","etiqueta_ubigeo":"Ica, Per\u00fa","buscador_ubigeo":"ica per\u00fa","numero_hijos_ubigeo":"5","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"3655","nombre_ubigeo":"Junin","codigo_ubigeo":"12","etiqueta_ubigeo":"Junin, Per\u00fa","buscador_ubigeo":"junin per\u00fa","numero_hijos_ubigeo":"9","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"3788","nombre_ubigeo":"La Libertad","codigo_ubigeo":"13","etiqueta_ubigeo":"La Libertad, Per\u00fa","buscador_ubigeo":"la libertad per\u00fa","numero_hijos_ubigeo":"12","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"3884","nombre_ubigeo":"Lambayeque","codigo_ubigeo":"14","etiqueta_ubigeo":"Lambayeque, Per\u00fa","buscador_ubigeo":"lambayeque per\u00fa","numero_hijos_ubigeo":"3","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"3926","nombre_ubigeo":"Lima","codigo_ubigeo":"15","etiqueta_ubigeo":"Lima, Per\u00fa","buscador_ubigeo":"lima per\u00fa","numero_hijos_ubigeo":"10","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"4108","nombre_ubigeo":"Loreto","codigo_ubigeo":"16","etiqueta_ubigeo":"Loreto, Per\u00fa","buscador_ubigeo":"loreto per\u00fa","numero_hijos_ubigeo":"6","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"4165","nombre_ubigeo":"Madre de Dios","codigo_ubigeo":"17","etiqueta_ubigeo":"Madre de Dios, Per\u00fa","buscador_ubigeo":"madre de dios per\u00fa","numero_hijos_ubigeo":"3","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"4180","nombre_ubigeo":"Moquegua","codigo_ubigeo":"18","etiqueta_ubigeo":"Moquegua, Per\u00fa","buscador_ubigeo":"moquegua per\u00fa","numero_hijos_ubigeo":"3","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"4204","nombre_ubigeo":"Pasco","codigo_ubigeo":"19","etiqueta_ubigeo":"Pasco, Per\u00fa","buscador_ubigeo":"pasco per\u00fa","numero_hijos_ubigeo":"3","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"4236","nombre_ubigeo":"Piura","codigo_ubigeo":"20","etiqueta_ubigeo":"Piura, Per\u00fa","buscador_ubigeo":"piura per\u00fa","numero_hijos_ubigeo":"8","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"4309","nombre_ubigeo":"Puno","codigo_ubigeo":"21","etiqueta_ubigeo":"Puno, Per\u00fa","buscador_ubigeo":"puno per\u00fa","numero_hijos_ubigeo":"13","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"4431","nombre_ubigeo":"San Martin","codigo_ubigeo":"22","etiqueta_ubigeo":"San Martin, Per\u00fa","buscador_ubigeo":"san martin per\u00fa","numero_hijos_ubigeo":"10","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"4519","nombre_ubigeo":"Tacna","codigo_ubigeo":"23","etiqueta_ubigeo":"Tacna, Per\u00fa","buscador_ubigeo":"tacna per\u00fa","numero_hijos_ubigeo":"4","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"4551","nombre_ubigeo":"Tumbes","codigo_ubigeo":"24","etiqueta_ubigeo":"Tumbes, Per\u00fa","buscador_ubigeo":"tumbes per\u00fa","numero_hijos_ubigeo":"3","nivel_ubigeo":"1","id_padre_ubigeo":"2533"},{"id_ubigeo":"4567","nombre_ubigeo":"Ucayali","codigo_ubigeo":"25","etiqueta_ubigeo":"Ucayali, Per\u00fa","buscador_ubigeo":"ucayali per\u00fa","numero_hijos_ubigeo":"4","nivel_ubigeo":"1","id_padre_ubigeo":"2533"}];
 
          departamentosList.forEach(dep => {
            fetch(`http://192.168.0.5:4800/departamentos-congresistas/${dep.nombre_ubigeo}/partidos`)
              .then((response) => response.json())
              .then((json) => { 
                proccessed++;
                const departamentosLista = []
      
                // json.data.forEach((item) => {
                  // console.log(item.key);
                  // departamentosList.push({
                  //   cantidad_partidos: json.data.length,
                  //   ...departamentosList
                  // });
                // })
  
                dep.cantidad_partidos = json.data.length;

                if(proccessed === departamentosList.length) {
                  setDepartamentos(departamentosList);
  
                }
              })
              .catch((error) => {
                console.error(error);
              });              
          })

        }, []);


    };
  
    loadPartidos();

    const __goPartidos = (departamento) => {
      navigation.navigate('BuscarCongresista', { departamento })
      console.log('Carga partidos', departamento);
    }
  
    return (
      <View style={{ flex: 1, backgroundColor: '#eee' }}>
        <ScrollView>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Elegir Departamento</Text>

            <View style={styles.contentList}>
            {departamentos && departamentos.map((item) =>
                 item.cantidad_partidos === 0 
                  ? <TouchableHighlight 
                      style={styles.buttonItem}
                      underlayColor='#ddd' key = {item.id_ubigeo}>
                      <View style={styles.listItem} >
                        <Text style={styles.textItem}>{item.nombre_ubigeo}</Text>
                      </View>
                    </TouchableHighlight>
                  : <TouchableHighlight 
                      style={styles.buttonItemActived}
                      underlayColor='#ddd'
                      onPress={() => __goPartidos(item.nombre_ubigeo)} key = {item.id_ubigeo}>
                      <View style={styles.listItem} key = {item.id_ubigeo}>
                        <Text style={styles.textItem}>{item.nombre_ubigeo} </Text>
                      </View>
                    </TouchableHighlight>
                
              )
            }
            </View>
          </View>
        </ScrollView>
      </View>

    );
  };
  
  const styles = StyleSheet.create({
    contentList: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    
    listItem: {
      // width: '50%',
      

    },
    buttonItemActived: {
      paddingVertical: 15,
      width: '48%',
      paddingHorizontal: 10,
      backgroundColor: '#8DD0FD',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 10,
    },
    buttonItem: {
      width: '48%',
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: '#fff',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 10,
    },
    textItem: {
      fontSize: 20,
      textAlign: 'center',
      
    },
    textItem: {
      fontSize: 20,
      textAlign: 'center',
    },
    wrapper: {
      backgroundColor: '#eee',
      display: 'flex',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 15
    },
    label: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20
    },
  });

export default Departamentos;