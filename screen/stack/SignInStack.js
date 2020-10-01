import * as React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "../drawer/home";
import AddOrg from "../drawer/addOrg";
import SupplierInfo from "../drawer/supplierInfo";
import General from "../tabs/general";
import ReturnStatus from "../tabs/returnStatus";
import Report from "../tabs/reports";

import EditOrg from "../editOrg";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();


const CreateDrawer = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        children={createHomeStack}
      />
      <Drawer.Screen name="Add Organization" component={createAddOrgStack} />
      <Drawer.Screen
        name="Know Your Supplier"
        component={createSupplierStack}
      />
    </Drawer.Navigator>
  );
};

const createHomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#009387",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Org List"
        component={Home}
        options={{
          title: "Home",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
      <Stack.Screen
        name="Edit Org"
        component={EditOrg}
        options={{ title: "Edit Organization" }}
      />
      <Stack.Screen
        name="Top Tabs"
        component={createTopTabs}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
};

const createAddOrgStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#009387",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Add Org"
        component={AddOrg}
        options={{
          title: "Add Organization",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const createSupplierStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#009387",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Supplier Info"
        component={SupplierInfo}
        options={{
          title: "Supplier Info",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const createTopTabs = () => {
  <MaterialTopTabs.Navigator>
    <MaterialTopTabs.Screen name="General" component={General} />
    <MaterialTopTabs.Screen name="Return Status" component={ReturnStatus} />
    <MaterialTopTabs.Screen name="Report" component={Report} />
  </MaterialTopTabs.Navigator>;
};


export default function SignInStack() {
  return (
    <NavigationContainer>
      <CreateDrawer/>
    </NavigationContainer>
  )
}