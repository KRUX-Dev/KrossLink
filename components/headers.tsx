import React from "react";

import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { KROSSLINKtext } from "./KROSSLINKtext";

import { globalStyles } from "@/assets/global/styles";

interface AuthHeaderProps {
    label: string
}

export const AuthHeader = ({label} : AuthHeaderProps) => {
    return (
        <View style={styles.authHeader}>
            <Link href="/">
                <KROSSLINKtext size="small" />
            </Link>

            <Text style={styles.authLabel}>
                {label}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    authHeader: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingTop: globalStyles.spacing.small,
    },
    authLabel: {
        color: globalStyles.colors.gray,
        fontWeight: globalStyles.weights.bold,
        fontSize: globalStyles.fontSizes.large
    },
})