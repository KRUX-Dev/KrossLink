import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { globalStyles } from "@/assets/global/styles";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
            tabBarActiveTintColor: globalStyles.colors.primaryLight,
            headerStyle: {
                backgroundColor: globalStyles.colors.black
            },
            headerShadowVisible: false,
            headerTintColor: globalStyles.colors.primaryShade,
            tabBarStyle: {
                backgroundColor: globalStyles.colors.black,
            },
        }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="terms-conditions"
                options={{
                    title: "Terms & Conditions",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "document-text-sharp" : "document-text-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="privacy-policy"
                options={{
                    title: "Privacy Policy",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "shield-checkmark-sharp" : "shield-checkmark-outline"}
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
};