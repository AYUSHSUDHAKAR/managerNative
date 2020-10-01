import React, { useState, useEffect, createContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import SignInStack from "./screen/stack/SignInStack";
import SignOutStack from "./screen/stack/SignOutStack";

import fire from "./config/fire";

export const AuthContext = createContext(null);

export default function AuthNavigator() {
  // var provider = new firebase.auth.GoogleAuthProvider();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(result) {
    setUser(result);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const authSubscriber = fire.auth().onAuthStateChanged(onAuthStateChanged);

    // unsubscribe on unmount
    return authSubscriber;
  }, []);

  if (initializing) {
    return null;
  }

  return user ? (
    <AuthContext.Provider value={user}>
      <SignInStack />
    </AuthContext.Provider>
  ) : (
    <SignOutStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
