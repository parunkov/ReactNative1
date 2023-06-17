import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { FilterItemProps } from '../types/types';
import Checkbox from 'expo-checkbox';


export default function FilterItem({ filterText, filterValue, callback }: FilterItemProps) {
    const [isChecked, setChecked] = useState(filterValue);
    return (
        <View style={styles.section}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={(value) => {
                    setChecked(value);
                    callback(filterText, value);
                }}
                color={isChecked ? 'rgb(33, 150, 243)' : undefined}
            />
            <Text style={styles.paragraph}>{filterText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
