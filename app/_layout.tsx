import { Stack } from "expo-router";
import * as Device from 'expo-device';
import * as NavigationBar from 'expo-navigation-bar';

export default function RootLayout() {
  const visibility = NavigationBar.useVisibility();

  console.log(Device.deviceName,":", visibility)
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="terms-conditions"
        options={{
          title: 'Terms & Conditions',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="privacy-policy"
        options={{
          title: 'Privacy Policy',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="log-in"
        options={{
          title: 'Log In',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          title: 'Sign Up',
          headerShown: false,
        }}
      />
      
      {/* <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      /> */}
    </Stack>
  );
}
