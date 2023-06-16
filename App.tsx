import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import data from './assets/data.json';
import Checkbox from 'expo-checkbox';
import { Auto } from './types/types';
import ListItem from './components/ListItem';
import MapView, { Marker } from 'react-native-maps';
import Map from './components/Map';
import AutoScreen from './components/AutoScreen';
import { Filter } from './types/types';

// console.log(data);
// type Filter = {
//   [key: string]: boolean;
// }

const autoData: Auto[] = data;

export default function App() {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [autoFilter, setFilter] = useState<Filter>({
    'Грузовой': true,
    'Пассажирский': true,
    'Спецтранспорт': true,
  });
  const [isCargoChecked, setCargoChecked] = useState(true);
  const [isPassengerChecked, setPassengerChecked] = useState(true);
  const [isSpecialChecked, setSpecialChecked] = useState(true);
  const [isMapMode, setMapMode] = useState(false);
  const [isAutoMode, setAutoMode] = useState(false);
  const [autoIndex, setAuto] = useState(0);

  // useEffect(() => {
  //   console.log(2222);

  // });

  const onFilterPress = () => {
    setFilterVisible(true);
  };

  const onFilterApplyPress = () => {
    setFilterVisible(false);
  }
  const onMapPress = () => {
    setMapMode(true);
  }
  const onListPress = () => {
    setMapMode(false);
  }
  const onAutoPress = () => {
    setAutoMode(true);
  }
  const onReturnPress = () => {
    setAutoMode(false);
  }

  return (
    <View style={styles.screen}>
      {!isAutoMode && <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            {!isMapMode && <Text style={styles.titleText}>Список ТС</Text>}
            {isMapMode && <Button title={'Список ТС'} onPress={onListPress} />}
          </View>
          <View style={styles.headerItem}>
            {!isMapMode && <Button title={'Карта'} onPress={onMapPress} />}
            {isMapMode && <Text style={styles.titleText}>Карта</Text>}
          </View>
        </View>
        {/* <View style={styles.title}>
          <Text style={styles.titleText}>Список ТС</Text>
        </View> */}
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
                  autoFilter['Грузовой'] = value;
                }}
                color={isCargoChecked ? 'rgb(33, 150, 243)' : undefined}
              />
              <Text style={styles.paragraph}>Грузовой</Text>
            </View>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isPassengerChecked}
                onValueChange={(value) => {
                  setPassengerChecked(value);
                  autoFilter['Пассажирский'] = value;
                }}
                color={isPassengerChecked ? 'rgb(33, 150, 243)' : undefined}
              />
              <Text style={styles.paragraph}>Пассажирский</Text>
            </View>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isSpecialChecked}
                onValueChange={(value) => {
                  setSpecialChecked(value);
                  autoFilter['Спецтранспорт'] = value;
                }}
                color={isSpecialChecked ? 'rgb(33, 150, 243)' : undefined}
              />
              <Text style={styles.paragraph}>Спецтранспорт</Text>
            </View>
            <View style={styles.filterButton}>
              <Button title={'Применить'} onPress={onFilterApplyPress} />
            </View>
          </View>}
        {!isMapMode && autoData.map((item: Auto, key) => autoFilter[item.category] && <ListItem
          auto={item}
          key={key}
          callback={() => {
            setAuto(key);
            onAutoPress();
          }}
        />)}
        {isMapMode && <View style={styles.mapcontainer}>
          <Map autoData={autoData} autoFilter={autoFilter} latitude={55.78} longitude={37.43} />
        </View>
        }
      </View>}
      {isAutoMode && <View style={styles.container}>
        <AutoScreen auto={autoData[autoIndex]} key={autoIndex} callback={onReturnPress} autoFilter={autoFilter}/>
      </View>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    marginTop: 40,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
  },
  headerItem: {
    width: '48%',
    height: '100%',
    borderColor: 'rgb(33, 150, 243)',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 2,
  },
  title: {
    marginBottom: 20,
    marginTop: 10,
  },
  titleText: {
    width: '100%',
    marginTop: 8,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '500',
    color: 'rgb(33, 150, 243)',
    textAlign: 'center',
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
    width: '100%',
    borderRadius: 5,
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
  mapcontainer: {
    width: '100%',
    height: 500,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
