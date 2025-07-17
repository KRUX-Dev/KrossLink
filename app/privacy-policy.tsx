import { globalStyles } from '@/assets/global/styles';
import { Text, View, StyleSheet } from 'react-native';

export default function PrivacyPolicyScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                This is the Privacy Policy page.
            </Text>
            <Text style={styles.text}>
                Here you can find information about how we handle your data.
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