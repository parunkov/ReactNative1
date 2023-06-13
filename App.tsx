import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from './assets/data.json';
import ListItem from './components/ListItem';
  
console.log(data);
type Auto = {
  name: string;
  driver: string;
};
type GreetingProps = {
  auto: Auto;
}

const autoData: Auto[] = data;
console.log("🚀 ~ file: App.tsx:14 ~ autoData:", autoData);

export default function App({...props}: GreetingProps) {
  useEffect(() => {
    console.log(2222);
  });

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Список ТС</Text>
      </View>
      <StatusBar style="auto" />
      {autoData.map((item: Auto, key) => 
        <ListItem auto={item} key={key} />
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
  title: {
    fontSize: 20,
    marginBottom:20,
    marginTop: 10,
    fontWeight: 700
  },
  auto: {
    width: '90%',
    borderColor: 'red',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    borderRadius: 5
  }
});
