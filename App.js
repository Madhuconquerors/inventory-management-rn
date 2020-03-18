import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AddEmployee from './src/screens/AddEmployee';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/Logout';
import InventoryListScreen from './src/screens/InventoryListScreen';
import DrawerScreen2 from './src/screens/DrawerScreen2';
import EmployeeListScreen from './src/screens/EmployeeListScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const EmployeeStack = createStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppStack.Navigator initialRouteName="LoginScreen">
        <AppStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Inventory Management',headerTitleAlign:'center'}}
          
        />
        <AppStack.Screen
          name="Drawer"
          component={BurgerBtn}
          options={{
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <Icon name="menu" color="white" size={35} />
                </TouchableOpacity>
              );
            },
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <Icon name="user" color="white" size={35} />
                </TouchableOpacity>
              );
            },
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

function StackFn() {
  return (
    <EmployeeStack.Navigator initialRouteName="EmployeeList" headerMode="none">
      <EmployeeStack.Screen
        name="EmployeeList"
        component={EmployeeListScreen}
      />
      <EmployeeStack.Screen name="AddEmployee" component={AddEmployee} />
    </EmployeeStack.Navigator>
  );
}

function BurgerBtn() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="Inventory"
        component={InventoryListScreen}
        options={{title: 'Inventory'}}
       
      
        
      />
      {/* <Drawer.Screen
        name="EmployeeAdd"
        component={AddEmployee}
        options={{title: 'Employees add'}}
      />
      <Drawer.Screen
        name="EmployeeList"
        component={EmployeeListScreen}
        options={{title: 'Employees list '}}
      /> */}
      <Drawer.Screen
        name="Employee"
        component={StackFn}
        options={{title: 'Employee'}}
      />
      <Drawer.Screen
        name="Transactions"
        component={DrawerScreen2}
        options={{title: 'Transactions'}}
      />
    </Drawer.Navigator>
  );
}
export default App;
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#F3F9FB',
    card: '#4796BD',
    text: '#F4F9FA',
    border: 'rgb(199, 199, 204)',
  },
};

// const LoginStack = createStackNavigator();
// const RegisterStack = createStackNavigator();
// function Login() {
//   return (
//     <LoginStack.Navigator headerMode='none'>
//       <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
//       <LoginStack.Screen name="HomeScreen" component={HomeScreen} />
//     </LoginStack.Navigator>
//   );
// }

// function Register() {
//   return (
//     <RegisterStack.Navigator headerMode='none'>
//       <RegisterStack.Screen name="RegisterScreen" component={RegisterScreen} />
//       <RegisterStack.Screen name="HomeScreen" component={HomeScreen} />
//     </RegisterStack.Navigator>
//   );
// }
