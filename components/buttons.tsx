import { globalStyles } from "@/assets/global/styles";
import { Link } from "expo-router";
import { Text, Pressable, StyleSheet } from "react-native";

type ButtonProps = {
    label: string;
    link?: string;
    action?: () => void;
    outline?: boolean;
}
export const LinkButton: any = ({label, link, action, outline}: ButtonProps) => {
    return (
        <Pressable
            onPress={action}
            style={outline==true ? styles.hollowButton : styles.solidButton}
            accessibilityLabel={label}
        >
            <Text style={outline==true ? styles.hollowButtonText : styles.solidButtonText}>
                {label}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    solidButton: {
        backgroundColor: globalStyles.colors.primaryLight,
        padding: globalStyles.spacing.medium,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hollowButton: {
        borderWidth: 2,
        borderColor: globalStyles.colors.primaryLight,
        padding: globalStyles.spacing.medium,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    solidButtonText: {
        color: globalStyles.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    hollowButtonText: {
        color: globalStyles.colors.primaryLight,
        fontSize: 16,
        fontWeight: 'bold',
    },
});