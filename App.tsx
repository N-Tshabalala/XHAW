import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, View, Text } from 'react-native';

// Example Screens
const HomeScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to Empowering the Nation!</Text>
    <Button
      title="Six-Month Courses"
      onPress={() => navigation.navigate('Six-Month Courses')}
      color="#E15600" // Inline style for orange button color
    />
    <Button
      title="Six-Week Courses"
      onPress={() => navigation.navigate('Six-Week Courses')}
      color="#E15600" // Correct orange button color
    />
  </View>
);

const SixMonthCoursesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Six-Month Courses List</Text>
  </View>
);

const SixWeekCoursesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Six-Week Courses List</Text>
  </View>
);

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#000000' }, // Black header background
      headerTintColor: '#E15600', // Orange header text
      drawerStyle: { backgroundColor: '#000000' }, // Black drawer background
      drawerActiveTintColor: '#E15600', // Orange for active drawer items
      drawerInactiveTintColor: '#FFFFFF', // White for inactive drawer items
    }}
  >
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Six-Month Courses" component={SixMonthCoursesScreen} />
    <Drawer.Screen name="Six-Week Courses" component={SixWeekCoursesScreen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Black background
  },
  title: {
    color: '#E15600', // Orange text for titles
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: '#FFFFFF', // White body text
    fontSize: 16,
    textAlign: 'center',
  },
});
