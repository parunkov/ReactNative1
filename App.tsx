import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import data from './assets/data.json';
import Checkbox from 'expo-checkbox';
import { Auto } from './types/types';
import ListItem from './components/ListItem';
import MapView, { Marker } from 'react-native-maps';
import AutoScreen from './components/AutoScreen';
// import Map from './components/Map';
// import YaMap from 'react-native-yamap';

// YaMap.init('63c7add9-7c2e-47de-9ad9-9b81d17c537f');

// console.log(data);
type Filter = {
  [key: string]: boolean;
}

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

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            {!isMapMode && <Text style={styles.titleText}>Список ТС</Text>}
            {isMapMode && <Button title={'Список ТС'} onPress={onListPress} />}
          </View>
          <View style={styles.headerItem}>
            {!isMapMode && <Button title={'Карта'} onPress={onMapPress}/>}
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
                  console.log(value);
                  autoFilter['Грузовой'] = value;
                  console.log(autoFilter);
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
                  console.log(value);
                  autoFilter['Пассажирский'] = value;
                  console.log(autoFilter);
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
                  console.log(value);
                  autoFilter['Спецтранспорт'] = value;
                  console.log(autoFilter);
                }}
                color={isSpecialChecked ? 'rgb(33, 150, 243)' : undefined}
              />
              <Text style={styles.paragraph}>Спецтранспорт</Text>
            </View>
            <View style={styles.filterButton}>
              <Button title={'Применить'} onPress={onFilterApplyPress} />
            </View>
          </View>}
        {!isMapMode && autoData.map((item: Auto, key) => autoFilter[item.category] && <ListItem auto={item} key={key} />)}
        {isMapMode && <View style={styles.mapcontainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 55.78825,
              longitude: 37.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {autoData.map((item: Auto, key) => {
              const coords = {
                latitude: item.latitude,
                longitude: item.longitude
              };
              let image = require('./assets/blue-marker.png');
              if (item.category === 'Пассажирский') image = require('./assets/green-marker.png');
              if (item.category === 'Спецтранспорт') image = require('./assets/red-marker.png');
              return autoFilter[item.category] && <Marker
                key={key}
                coordinate={coords}
                title={item.name}
                image={image}
              />;
            })}
          </MapView>
        </View>
        }
      </View>
      {/* <View style={styles.container}>
        <AutoScreen auto={autoData[0]} />
      </View> */}
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
    marginTop: 8,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '500',
    color: 'rgb(33, 150, 243)',
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
    width: '100%'
  },
  map: {
    width: '100%',
    height: 500,
  },
});
