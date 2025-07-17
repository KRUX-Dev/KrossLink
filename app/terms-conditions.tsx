import { globalStyles } from '@/assets/global/styles';
import { Text, View, StyleSheet } from 'react-native';

export default function TermsAndConditionsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                This is the Terms and Conditions page.
            </Text>
            <Text style={styles.text}>
                Here you can find the terms under which we operate.
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
        color: globalStyles.colors.white,
    },
});