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

export default function App() {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [autoFilter, setFilter] = useState({
    'Грузовой': true,
    'Пассажирский': true,
    'Спецтранспорт': true,
  });
  const [isCargoChecked, setCargoChecked] = useState(true);
  const [isPassengerChecked, setPassengerChecked] = useState(true);
  const [isSpecialChecked, setSpecialChecked] = useState(true);

  // useEffect(() => {
  //   console.log(2222);
  // });

  const onFilterPress = () => {
    console.log(5555);
    setFilterVisible(true);
  };

  const onFilterApplyPress = () => {
    console.log(7777);
    setFilterVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Список ТС</Text>
      </View>
      {!isFilterVisible &&
        <View style={styles.button}>
          <Button title={'Фильтр'} onPress={onFilterPress} />
        </View>
      }
      {isFilterVisible &&
        <View style={styles.filter}>
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isCargoChecked}
              onValueChange={(value) => {
                setCargoChecked(value);
                console.log(value);
                autoFilter['Грузовой'] = value;
                console.log(autoFilter);
              }}
              color={isCargoChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.paragraph}>Грузовой</Text>
          </View>
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isPassengerChecked}
              onValueChange={(value) => {
                setPassengerChecked(value);
                console.log(value);
                autoFilter['Пассажирский'] = value;
                console.log(autoFilter);
              }}
              color={isPassengerChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.paragraph}>Пассажирский</Text>
          </View>
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isSpecialChecked}
              onValueChange={(value) => {
                setSpecialChecked(value);
                console.log(value);
                autoFilter['Спецтранспорт'] = value;
                console.log(autoFilter);
              }}
              color={isSpecialChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.paragraph}>Спецтранспорт</Text>
          </View>
          <View style={styles.filterButton}>
            <Button title={'Применить'} onPress={onFilterApplyPress} />
          </View>
        </View>}
      {autoData.map((item: Auto, key) =>
        <ListItem auto={item} key={key} />
      )}
      <StatusBar style="auto" />
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
  filter: {
    width: '90%'
  },
  button: {
    marginBottom: 20,
    width: '90%'
  },
  filterButton: {
    marginTop: 10,
    marginBottom: 20,
    width: '100%'
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
