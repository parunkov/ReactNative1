import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { FilterItemProps } from '../types/types';
import Checkbox from 'expo-checkbox';


export default function FilterItem({ filterText, filterValue, callback }: FilterItemProps) {
    const [isChecked, setChecked] = useState(filterValue);
    const onPress = () => {
        setChecked(!isChecked);
        callback(filterText, !isChecked);
    }
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
            <Pressable onPress={onPress}>
                <Text style={styles.paragraph}>{filterText}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 3,
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        margin: 8,
    },
});
