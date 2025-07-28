import React from "react";
import { CustomInput, InputFieldAltPath } from "@/lib/types";
import { View, Text, TextInput, StyleSheet } from "react-native";

import { globalStyles } from "@/assets/global/styles";
import { Link } from "expo-router";

export const NewInput = ({input} : {input: CustomInput}) => {
    return (
        <View style={styles.inputContainer}>
            {input.label != null ? (
                <Text style={styles.inputLabel}>
                    {input.label}
                </Text>
            ) : null}

            <TextInput
                onChangeText={input.onChange}
                value={input.value}
                placeholder={input.placeholder}
                style={styles.inputField}
                placeholderTextColor={globalStyles.colors.gray}
                secureTextEntry={input.type == 'password'}
            />
        </View>
    )
}

interface MultiInputFieldProps {
    inputs: CustomInput[]
    alts?: InputFieldAltPath[]
}

export const MultiInputField = ({inputs, alts} : MultiInputFieldProps) => {
    return (
        <View style={styles.inputFieldsContainer}>
            {inputs.map((input, index) => (
                <NewInput key={index} input={input} />
            ))}

            {alts != null ? (
                <View style={styles.allAltsContainer}>
                    {alts.map((alt: InputFieldAltPath, index: number) => (
                        <View key={index} style={styles.altPathContainer}>
                            {alt.linkLabel != null ? (
                                <Text style={styles.altPathLabel}>
                                    {alt.linkLabel}
                                </Text>
                            ) : null}

                            <Link href={alt.link} style={styles.altPathLink}>
                                <Text>
                                    {alt.linkText}
                                </Text>
                            </Link>
                        </View>
                    ))}
                </View>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    inputFieldsContainer: {
        flex: 1,
        display: 'flex',
        maxWidth: 400,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: globalStyles.spacing.medium,
        width: '100%',
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: globalStyles.spacing.min
    },
    inputLabel: {
        fontWeight: '600',
        color: globalStyles.colors.gray
    },
    inputField: {
        borderColor: globalStyles.colors.gray,
        padding: globalStyles.spacing.small,
        borderWidth: 2,
        width: '100%',
        borderRadius: globalStyles.spacing.xSmall,
        color: globalStyles.colors.black,
    },
    
    allAltsContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: globalStyles.spacing.large
    },
    altPathContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    altPathLabel: {

    },
    altPathLink: {
        color: globalStyles.colors.primaryLight,
        fontWeight: globalStyles.weights.bold,
        flex: 1,
        display: 'flex',
        textAlign: 'right',
        justifyContent: 'flex-end'
    }
})