import React from 'react';
import { Tabs } from 'expo-router';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import { Text } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import { PlatformPressable } from '@react-navigation/elements';
import { useGetTheme } from '@/src/hooks/useGetTheme';

interface TabBarIconProps {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const TabBarIcon = (props: TabBarIconProps) => {
  return <MaterialCommunityIcons size={28} {...props} />;
};

export default function TabLayout() {
  const { theme } = useGetTheme();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primaryContainer,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor: theme.secondaryContainer,
        },
        tabBarStyle: {
          paddingTop: 5,
        },
        tabBarButton: (props) => (
          <PlatformPressable
            {...props}
            android_ripple={{ color: 'transparent' }} // Disables the ripple effect for Android
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          title: t('BottomTabBar.tabOne'),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: t('BottomTabBar.tabTwo'),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="folder-image" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
