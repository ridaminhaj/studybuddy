import { Alert } from "react-native";
import firebase from "./firebase";

const auth = firebase.auth();

export const signIn = async ({ email, password }, onSuccess, onError) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    const isEmailVerified = user.emailVerified;
    if (isEmailVerified) {
      onSuccess(user);
    } else {
      Alert.alert("Please verify your email");
    }
  } catch (error) {
    return onError(error);
  }
}

export const createAccount = async ({ name, email, password }, onSuccess, onError) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    if (user) {
      await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
        userName: name,
        password,
        email,
        uid: firebase.auth().currentUser.uid,
        groups:{},
        profilepic: "https://i.pinimg.com/564x/dd/7a/73/dd7a73bf143c16dcc2c31426c97d2f41.jpg"
      });
      await user.updateProfile({ displayName: name }).then(Alert.alert("Sign up successfully!", "Please verify your email before signing in."));
      await user.sendEmailVerification();
      onSuccess(user);
    }
  } catch (error) {
    onError(error);
  }
}

export const signOut = async (onSuccess, onError) => {
  try {
    await auth.signOut();
    return onSuccess();
  } catch (error) {
    return onError(error);
  }
}

export const getCurrentUserId = () => auth.currentUser ? auth.currentUser.uid : null;

export const getCurrentUserName = () => auth.currentUser ? auth.currentUser.displayName : null;

export const getCurrentUserEmail = () => auth.currentUser ? auth.currentUser.email : null;


export const setOnAuthStateChanged = (onUserAuthenticated, onUserNotFound) => auth.onAuthStateChanged((user) => {
  if (user) {
    return onUserAuthenticated(user);
  } else {
    return onUserNotFound(user);
  }
});