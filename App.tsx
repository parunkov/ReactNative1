import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from './assets/data.json';
  
console.log(data);

export default function App() {
  useEffect(() => {
    console.log(2222);
  });

  return (
    <View style={styles.container}>
      <Text>Список ТС</Text>
      <StatusBar style="auto" />
      {data.map((item, key) => 
        <View style={styles.auto} key={key} >
          <Text>{item.name}</Text>
          <Text>{item.driver}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  auto: {
    width: '90%',
    borderColor: 'red',
    borderWidth: 1,
  }
});
