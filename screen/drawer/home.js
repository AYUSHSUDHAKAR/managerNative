import React, { useEffect, useState, useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";
import { buttons } from "../../styles/globalStyle";
import { StyleSheet } from "react-native";

import { AuthContext } from "../../AuthNavigator";

import firebase from "firebase";
import fire from "../../config/fire";

export default function Home(props) {
  const [organizations, setOrganizations] = useState();
  const [isActive, setIsActive] = useState(true);
  const [isclient, setClient] = useState(false);
  const [organization, setOrganization] = useState();

  const user = useContext(AuthContext);

  async function logOut() {
    try {
      await fire.auth().signOut();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <ScrollView>
      <Card>
        <Card.Title>Card 1</Card.Title>
        <Card.Divider />
        <Text>This is text inside card</Text>
        <Card.Divider />
        <View style={styles.alignH}>
          <TouchableOpacity style={buttons.primary}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttons.primary}>
            <Text>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttons.primary}>
            <Text>Disable</Text>
          </TouchableOpacity>
        </View>
      </Card>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome {user.uid}!</Text>
        <TouchableOpacity style={styles.button} onPress={logOut}>
          <Text style={styles.buttonText}>Sign out 🤷</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  alignH: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe2ff",
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: "500",
    color: "#7f78d2",
  },
  button: {
    flexDirection: "row",
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    width: 160,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#481380",
  },
  buttonText: {
    color: "#ffe2ff",
    fontSize: 24,
    marginRight: 5,
  },
});
