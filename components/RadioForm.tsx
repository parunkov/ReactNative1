import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { RadioProps } from '../types/types';

const Radio = ({ callback }: RadioProps) => {
  const [checked, setChecked] = useState(0);
  const lang = ['Русский', 'English'];
  return (
    <View>
      <View style={styles.btn}>
        {lang.map((lang, key) => {
          return (
            <View key={lang}>
              {checked == key ? (
                <TouchableOpacity style={styles.radio}>
                  <Image
                    style={styles.img}
                    source={require('../assets/green-marker.png')}
                  />
                  <Text style={styles.text}>{lang}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(key);
                    callback(key === 0);                    
                  }}
                  style={styles.radio}>
                  <Image
                    style={styles.img}
                    source={require('../assets/red-marker.png')}
                  />
                  <Text style={styles.text}>{lang}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
      <Text>{lang[checked]}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  img: {
    height: 30,
    width: 30,
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: 'column',
  },
  text: {
    fontSize: 16,
  },
});
export default Radio;