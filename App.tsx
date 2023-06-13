import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import data from './assets/data.json';
import ListItem from './components/ListItem';
import Checkbox from 'expo-checkbox';

console.log(data);
type Auto = {
  name: string;
  driver: string;
};

const autoData: Auto[] = data;

const onFilterPress = () => {
  console.log(5555);

};

export default function App() {
  // useEffect(() => {
  //   console.log(2222);
  // });

  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Список ТС</Text>
      </View>
      <View style={styles.button}>
        <Button title={'Фильтр'} onPress={onFilterPress} />
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Грузовой</Text>
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
    marginBottom: 20,
    marginTop: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700'
  },
  button: {
    marginBottom: 20
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
