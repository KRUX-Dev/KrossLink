import { globalStyles } from "@/assets/global/styles";
import { Link } from "expo-router";
import { Text, Pressable, StyleSheet, View } from "react-native";

type ButtonProps = {
    label: string;
    link?: string;
    action?: () => void;
    outline?: boolean;
}

export const LinkButton: any = ({label, link, action, outline}: ButtonProps) => {
    if (link) {
        return (
            <Link
                //@ts-ignore
                href={link}
                style={outline ? styles.hollowButton : styles.solidButton}
                accessibilityLabel={label}
            >
                <Text style={outline ? styles.hollowButtonText : styles.solidButtonText}>
                    {label}
                </Text>
            </Link>
        );
    }

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

export const MultiButtonField = ({ buttons }: { buttons: ButtonProps[] }) => {
    return (
        <View style={styles.multiButtonContainer}>
            {buttons.map((button, index) => (
                <LinkButton
                    key={index}
                    label={button.label}
                    link={button.link}
                    action={button.action}
                    outline={button.outline}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    solidButton: {
        backgroundColor: globalStyles.colors.primaryLight,
        padding: globalStyles.spacing.small,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    hollowButton: {
        borderWidth: 2,
        borderColor: globalStyles.colors.primaryLight,
        padding: globalStyles.spacing.small,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    solidButtonText: {
        color: globalStyles.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    hollowButtonText: {
        color: globalStyles.colors.primaryLight,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    multiButtonContainer: {
        display: 'flex',
        width: '100%',
        maxWidth: 400,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
});