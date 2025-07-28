import { globalStyles } from '@/assets/global/styles';
import { LinkButton, MultiButtonField } from '@/components/buttons';
import { LandingLegalLinks } from '@/components/GlobalLinks';
import { AuthHeader } from '@/components/headers';
import { MultiInputField } from '@/components/inputs';
import { KROSSLINKtext } from '@/components/KROSSLINKtext';
import { SmarterHarder } from '@/components/smarterHarder';
import { CustomInput, InputFieldAltPath } from '@/lib/types';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function SignUpScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordV, setPasswordV] = useState('');


    const inputFieldsData: CustomInput[] = [
        {
            label: 'Name',
            type: 'text',
            value: name,
            onChange: setName,
            placeholder: 'Jordan Smith',
        },
        {
            label: 'Email',
            type: 'email',
            value: email,
            onChange: setEmail,
            placeholder: 'JordanSmith@example.com',
        },
        {
            label: 'Password',
            type: 'password',
            value: password,
            onChange: setPassword,
            placeholder: 'P@ssW0rd?'
        },
        {
            label: 'Confirm Password',
            type: 'password',
            value: passwordV,
            onChange: setPasswordV,
            placeholder: '*********'
        }
    ]

    const authButtons = [
        {
            label: "Sign Up",
            action: () => null,
        },
        {
            label: "Back",
            link: "/",
            outline: true,
        },
    ]

    const altInputLink: InputFieldAltPath[] = [
        {
            linkLabel: 'Already have an account?',
            linkText: "Log in",
            link: '/log-in'
        }
    ]

    const handleSignUp = () => {
        console.log('sign up user:', name, email)
    }

    return (
        <View style={styles.container}>
            <AuthHeader label="Sign Up" />

            <SmarterHarder />

            <MultiInputField
                inputs={inputFieldsData}
                alts={altInputLink}
            />

            <MultiButtonField buttons={authButtons} />

            <LandingLegalLinks />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: globalStyles.spacing.xLarge,
        backgroundColor: globalStyles.colors.white,
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: globalStyles.spacing.small,
    },
});