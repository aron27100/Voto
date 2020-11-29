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

//Main
const Home = ({ navigation }) => {
    const __loadDepartamentos = async () => {
      navigation.navigate('Departamentos')
    }


    return (
      <><View style={{ flex: 1, backgroundColor: '#eee' }}>
  
  
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.title}>Vota bien,Vota informado</Text>
          </View>
  
          <View style={styles.image}>
            <Image source={require('../img/jne.png')} />
          </View>
          <View>
            <TouchableHighlight 
              onPress={() => __loadDepartamentos()}
              style={styles.btnSend}>
              <Text style={styles.textSend}>Candidatos Presidenciales</Text>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={() => __loadDepartamentos()}
              style={styles.btnSends}>
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
      paddingTop: 30,
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
    title: {
      color: '#000',
      backgroundColor: '#eee',
      fontSize: 30,
      textAlign: 'center',
    },
  
  });

export default Home;
