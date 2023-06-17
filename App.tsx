import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import data from './assets/data.json';
import { Auto } from './types/types';
import ListItem from './components/ListItem';
import Map from './components/Map';
import AutoScreen from './components/AutoScreen';
import { Filter } from './types/types';
import FilterItem from './components/FilterItem';
import SettingsScreen from './components/SettingsScreen';

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
  const [isMapMode, setMapMode] = useState(false);
  const [mode, setMode] = useState('main');
  const [autoIndex, setAuto] = useState(0);
  const [isRusLang, setLang] = useState(true);

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
    setMode('auto');
  }
  const onSettingsPress = () => {
    setMode('settings')
  }
  const onReturnPress = () => {
    setMode('main');
  }
  const onFilterItemPress = (filterText: string, value: boolean) => {
    const newFilter = {...autoFilter};
    newFilter[filterText] = value;
    setFilter(newFilter);
  }
  const onLangChange = (value: boolean) => {
    setLang(value);
    console.log(value);
    
  }

  return (
    <View style={styles.screen}>
      {mode === 'main' && <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            {!isMapMode && <Text style={styles.titleText}>Список</Text>}
            {isMapMode && <Button title={'Список'} onPress={onListPress} />}
          </View>
          <View style={styles.headerItem}>
            {!isMapMode && <Button title={'Карта'} onPress={onMapPress} />}
            {isMapMode && <Text style={styles.titleText}>Карта</Text>}
          </View>
          <Pressable style={styles.settingsButton} onPress={onSettingsPress}>
            <Image source={require('./assets/gear.png')} style={styles.settingsImage} />
          </Pressable>
        </View>
        {!isFilterVisible &&
          <View style={styles.button}>
            <Button title={'Фильтр'} onPress={onFilterPress} />
          </View>
        }
        {isFilterVisible &&
          <View style={styles.filter}>
            <View>
              <FilterItem 
                filterText='Грузовой' 
                filterValue={autoFilter['Грузовой']} 
                callback={onFilterItemPress} 
              />
              <FilterItem 
                filterText='Пассажирский' 
                filterValue={autoFilter['Пассажирский']} 
                callback={onFilterItemPress} 
              />
              <FilterItem 
                filterText='Спецтранспорт' 
                filterValue={autoFilter['Спецтранспорт']} 
                callback={onFilterItemPress} 
              />
            </View>
            <View style={styles.filterButton}>
              <Button title={'Применить'} onPress={onFilterApplyPress} />
            </View>
          </View>}
        {!isMapMode &&
          <ScrollView style={styles.listContainer}>
            {autoData.map((item: Auto, key) => autoFilter[item.category] && <ListItem
              auto={item}
              key={key}
              callback={() => {
                setAuto(key);
                onAutoPress();
              }}
            />)
            }
          </ScrollView>}
        {isMapMode && <View style={styles.mapcontainer}>
          <Map autoData={autoData} autoFilter={autoFilter} latitude={55.78} longitude={37.43} />
        </View>
        }
      </View>}
      {mode === 'auto' && <View style={styles.container}>
        <AutoScreen auto={autoData[autoIndex]} key={autoIndex} callback={onReturnPress} autoFilter={autoFilter} />
      </View>}
      {mode === 'settings' && <View style={styles.container}>
        <SettingsScreen callback={onReturnPress} change={onLangChange} isRusLang={isRusLang} />
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
    width: '40%',
    height: '100%',
    borderColor: 'rgb(33, 150, 243)',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 2,
  },
  settingsButton: {
    width: '15%',
    height: '100%',
  },
  settingsImage: {
    marginLeft: 'auto',
    height: 43,
    width: 43,
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
  listContainer: {
    width: '90%',
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
