import { globalStyles } from '@/assets/global/styles';
import { Text, View, StyleSheet } from 'react-native';

export default function LogInScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Log In
            </Text>
            <Text style={styles.text}>
                Please enter your credentials to log in.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyles.colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
});