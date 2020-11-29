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

//Buscar Partido
const Partidos = () => {
    return (
      <><View style={{ flex: 1, backgroundColor: '#eee' }}>
  
        <TouchableHighlight style={styles.btnSend2}>
          <Text style={styles.textSend2}>Elegir Candidato</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnSends2}>
          <Text style={styles.textSend2}>Elegir Partido</Text>
        </TouchableHighlight>
      </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
  
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

export default Partidos;