import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "../styles/globalStyle";

import firebase from "firebase";
import fire from "../config/fire";
import * as Google from "expo-google-app-auth";

export default function Login() {

  const [email, setEmail] = useState("abcdef@example.com");
  const [password, setPassword] = useState("12345678");

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = (googleUser) => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase
      .auth()
      .onAuthStateChanged(function (firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      });
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        //iosClientId:'',
        androidClientId:
          "903588344582-731tbusmvdqs1o82lkndegsplbnemn3c.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  const emailSignIn = () => {
    console.log("email login called");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title="sign-in with google"
        onPress={() => signInWithGoogleAsync()}
      />
      <Button title="sign-in with email" onPress={() => emailSignIn()} />
    </View>
  );
}
