import { StyleSheet, Text, View } from 'react-native';

type Auto = {
    name: string;
    driver: string;
};

type GreetingProps = {
    auto: Auto;
}


export default function ListItem({ auto }: GreetingProps) {
    return (
        <View style={styles.auto} >
            <Text>{auto.name}</Text>
            <Text>{auto.driver}</Text>
        </View>
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
