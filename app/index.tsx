import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "@/assets/global/styles";
import { Image } from "expo-image";
import { LinkButton } from "@/components/buttons";

const _LOGO = require('@/assets/images/LOGO_KrossLinkArtboard 1_1@VECTOR.svg');

export default function Index() {

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

        <View style={styles.krosslinkContainer}>
          <Text style={styles.krossText}>
            KROSS
          </Text>
          <Text style={styles.linkText}>
            LINK
          </Text>
        </View>

        <Text style={styles.splashText}>
          Powered by KrossFleet, LLC
        </Text>
      </View>

      <View style={styles.splashButtonContainer}>
        <View style={styles.authButtonContainer}>
          <LinkButton
            link="/log-in"
            label="Log In"
            action={() => null}
          />

          <LinkButton
            outline
            link="/sign-up"
            label="Sign Up"
            action={() => null}
          />
        </View>

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
  krosslinkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  krossText: {
    color: globalStyles.colors.black,
    fontSize: 48,
    fontWeight: '900',
  },
  linkText: {
    color: globalStyles.colors.primaryLight,
    fontSize: 48,
    fontWeight: '900',
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
  authButtonContainer: {
    flex: 1,
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  legalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  legalLink: {
    color: globalStyles.colors.primaryLight,
  },
})
