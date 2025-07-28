import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "@/assets/global/styles";
import { Image } from "expo-image";
import { LinkButton, MultiButtonField } from "@/components/buttons";
import { LandingLegalLinks } from "@/components/GlobalLinks";
import { KROSSLINKtext } from "@/components/KROSSLINKtext";

const _LOGO = require('@/assets/images/LOGO_KrossLinkArtboard 1_1@VECTOR.svg');

export default function Index() {
  const authButtons = [
    {
      label: "Log In",
      link: "/log-in",
      outline: false,
    },
    {
      label: "Sign Up",
      link: "/sign-up",
      outline: true,
    },
  ]

  return (
    <View
      style={styles.container}
    >
      <View style={styles.splashLogoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={_LOGO}
            style={styles.image}
            contentFit="contain"
          />
        </View>

        <KROSSLINKtext size="large" />

        <Text style={styles.splashText}>
          Powered by KrossFleet, LLC
        </Text>
      </View>

      <View style={styles.splashButtonContainer}>
        <MultiButtonField buttons={authButtons} />

        <LandingLegalLinks />
      </View>
    </View>
  );
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
    gap: globalStyles.spacing.large,
  },
  text: {
    color: globalStyles.colors.white,
  },


  splashLogoContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: globalStyles.spacing.large,
    maxWidth: 400,
  },
  imageContainer: {
    backgroundColor: globalStyles.colors.black,
    borderRadius: '100%',
    width: "75%",
    overflow: 'hidden',
    padding: globalStyles.spacing.large,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  splashText: {
    color: globalStyles.colors.gray,
    fontSize: 16,
    textAlign: 'center',
  },

  splashButtonContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})
