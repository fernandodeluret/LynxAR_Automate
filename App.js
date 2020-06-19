import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';


export default function App() {

  const [ligth, setLigth] = useState(false);
  let lightState

  async function switchLight(v) {
    try {
      let response = await fetch('http://192.168.1.200/interruptor');
      let responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }    
  }
  

  return (
    <View style={styles.container}>
      <Text>LynxAR</Text>
      <Switch
        value={ligth}
        onValueChange={v => {
          setLigth(v)
          switchLight(v)
        }}
      />
      <Text>{ligth? 'On': 'Off'}</Text>
      
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
