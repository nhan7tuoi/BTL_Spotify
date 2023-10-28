import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Pressable } from 'react-native';
import { LeftOutlined } from '@ant-design/icons';

import HomeScreen from './views/Home';
import SearchScreen from './views/Search';
import LibraryScreen from './views/Library';
import PremiumScreen from './views/Premium';
import LoginScreen from './views/Login';
import LoginWithScreen from './views/LoginWith';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName='LoginWith'>
      <Stack.Screen
        name="Login" component={LoginScreen}
        options={
          ({ navigation }) => ({
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
            headerLeft: () => (
              <Pressable onPress={() => {
                navigation.goBack();
              }}
              style={{width:50}}
              >
                <LeftOutlined style={{color:'#fff',fontSize:20}} />
              </Pressable>
            ),
          })
        }
      />
      <Stack.Screen name='LoginWith' component={LoginWithScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Home' component={TabScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}


function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000', height: 70 },
        activeTintColor: 'white',
        inactiveTintColor: 'gray',

      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', marginBottom: 5 },
          tabBarIconStyle: { backgroundColor: 'red' },
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => (
            <Image
              resizeMode='contain'
              source={require(
                focused
                  ? './assets/Icon/VectoriconHome-1.svg'
                  : './assets/Icon/VectoriconHome.svg'
              )}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Tìm kiếm',
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', marginBottom: 5 },
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => (
            <Image
              resizeMode='contain'
              source={require(
                focused
                  ? './assets/Icon/VectoriconSearch-1.svg'
                  : './assets/Icon/VectoriconSearch.svg'
              )}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Thư viện',
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', marginBottom: 5 },
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => (
            <Image
              resizeMode='contain'
              source={require(
                focused
                  ? './assets/Icon/VectoriconLib-1.svg'
                  : './assets/Icon/VectoriconLib.svg'
              )}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          tabBarLabel: 'Premium',
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', marginBottom: 5 },
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: () => (
            <Image
              resizeMode='contain'
              source={require('./assets/Icon/VectoriconPremium.svg')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer initialRouteName='LoginWith'>
      <StackScreen />
    </NavigationContainer>
  );
}

// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack
// npm install @react-navigation/bottom-tabs
// npm install react-native-paper
// npm install react-native-safe-area-context
// npm install react-native-vector-icons
// npm install @ant-design/icons --save