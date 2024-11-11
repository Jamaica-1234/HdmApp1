import { Image, View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          height: 60,
          backgroundColor: 'black', // Set tab bar background color to black
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
          color: 'white', // Optional: Set label color to white
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.home} color={focused ? 'white' : color} /> // Icon color logic
          ),
          tabBarLabel: 'HOME',
        }}
      />

      <Tabs.Screen
        name="together"
        options={{
          title: 'Together',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.together} color={focused ? 'white' : color} />
          ),
          tabBarLabel: 'TOGETHER',
        }}
      />

      <Tabs.Screen
        name="vip"
        options={{
          title: 'VIP',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.vip} color={focused ? 'yellow' : color} />
          ),
          tabBarLabel: 'VIP',
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.explore} color={focused ? 'white' : color} />
          ),
          tabBarLabel: 'EXPLORE',
        }}
      />

      <Tabs.Screen
        name="me"
        options={{
          title: 'Me',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.me} color={focused ? 'white' : color} />
          ),
          tabBarLabel: 'ME',
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
