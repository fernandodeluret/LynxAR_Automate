import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch as Switch1 } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';



export default function App() {

  const [ligth, setLigth] = useState(false);
  let lightState

  let [fontsLoaded] = useFonts({
    museo: require('./assets/fonts/MuseoModerno-Thin.ttf'),
  });

  async function switchLight(v) {
    try {
      let response = await fetch('http://192.168.1.200/interruptor');
      let responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }    
  }
  
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <Text style={styles.titulo}>Lynx<Text style={styles.tituloAR}>AR</Text> </Text>
          <Switch1
            style={{ transform: [ {scaleX: 4},{scaleY: 4} ] }}
            // trackColor={{ false: "#fff", true: "#222" }}
            thumbColor={ligth ? "#70a3ae" : "#999"}
            value={ligth}
            onValueChange={v => {
              setLigth(v)
              switchLight(v)
            }}
          />
          <Text style={styles.luz}>{ligth? 'On': 'Off'}</Text>
          
          
        </View>
      </PaperProvider>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titulo: {
    fontSize: 50,
    fontFamily: 'museo',
    color: '#666'
  },
  tituloAR: {
    fontSize: 50,
    fontFamily: 'museo',
    color: '#70a3ae'
  },
  luz: {
    fontSize: 40,
    fontFamily: 'museo',
    color: '#555'
  },
});
