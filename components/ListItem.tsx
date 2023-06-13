import { StyleSheet, Text, View, Pressable } from 'react-native';

type Auto = {
    name: string;
    driver: string;
};

type GreetingProps = {
    auto: Auto;
}
const onPress = () => {
    console.log(3333);
};

export default function ListItem({ auto }: GreetingProps) {
    return (
        <Pressable style={styles.auto} onPress={onPress}>
            <Text>{auto.name}</Text>
            <Text>{auto.driver}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    auto: {
        width: '90%',
        borderColor: 'red',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10,
        borderRadius: 5
    }
});
