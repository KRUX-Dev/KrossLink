import React from "react";
import { globalStyles } from "@/assets/global/styles";
import { View, Text, StyleSheet } from "react-native";

interface KROSSLINKtextProps {
    size: 'small' | 'medium' | 'large';
}

export const KROSSLINKtext = ({size} : KROSSLINKtextProps) => {
    return (
        <View style={styles.krosslinkContainer}>
            <Text style={
                [
                    styles.krossText,
                    size === 'small'
                        ? {fontSize: globalStyles.fontSizes.medium, fontWeight: '700'}
                        : size === 'medium'
                            ? {fontSize: globalStyles.fontSizes.large, fontWeight: '800'}
                            : {fontSize: globalStyles.fontSizes.xLarge, fontWeight: '900'}
                ]
            }>
                KROSS
            </Text>
            
            <Text style={
                [
                    styles.linkText,
                    size === 'small'
                        ? {fontSize: globalStyles.fontSizes.medium, fontWeight: '700'}
                        : size === 'medium'
                            ? {fontSize: globalStyles.fontSizes.large, fontWeight: '800'}
                            : {fontSize: globalStyles.fontSizes.xLarge, fontWeight: '900'}
                ]
            }>
                LINK
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    krosslinkContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    krossText: {
        color: globalStyles.colors.black,
    },
    linkText: {
        color: globalStyles.colors.primaryLight,
    },
})