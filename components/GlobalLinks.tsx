import { globalStyles } from "@/assets/global/styles";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const LandingLegalLinks = () => {
    return (
        <View style={styles.legalContainer}>
            <Link href="/terms-conditions">
                <Text style={styles.legalLink}>
                    Terms and Conditions
                </Text>
            </Link>

            <Link href="/privacy-policy">
                <Text style={styles.legalLink}>
                    Privacy Policy
                </Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    legalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 400,
        padding: 20,
    },
    legalLink: {
        color: globalStyles.colors.primaryLight,
        fontWeight: globalStyles.weights.bold
    },
})