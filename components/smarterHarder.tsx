import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "@/assets/global/styles";

export const SmarterHarder = () => {
    return (
        <View style={styles.smarterHarderContainer}>
            <Text style={styles.smarterHarderText}>
                Drive Smarter,
            </Text>

            <Text style={styles.smarterHarderText}>
                Not Harder.
            </Text>

            <View style={styles.smarterHarderBorder}></View>
        </View>
    );
} 

const styles = StyleSheet.create({
    smarterHarderContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: globalStyles.spacing.small,
        justifyContent: 'center',
        width: '100%',
        marginVertical: globalStyles.spacing.large,
    },
    smarterHarderText: {
        color: globalStyles.colors.black,
        fontSize: globalStyles.fontSizes.xLarge,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    smarterHarderBorder: {
        width: '25%',
        height: 4,
        backgroundColor: globalStyles.colors.primaryLight,
        marginTop: 10,
        borderRadius: 20
    }
});