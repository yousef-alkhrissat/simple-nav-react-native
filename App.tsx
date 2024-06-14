import * as React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Home!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter something..."
        onChangeText={setText}
        value={text}
      />
      <Button
        title="Press Me"
        onPress={() => alert(`You entered: ${text}`)}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Settings!</Text>
      <Button
        title="Logout"
        onPress={() => alert('Logging out...')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%',
    borderRadius: 5,
  },
});
