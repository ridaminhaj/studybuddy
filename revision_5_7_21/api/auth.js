
import {Alert} from "react-native";
import auth from './FireBase';
import app from "./FireBase";
import firebase from './FireBase';

/*
const auth = firebase.auth()
*/

export const signIn = async ({ email, password }, onSuccess, onError) => {
    try {
        const { user } = await app.auth().signInWithEmailAndPassword(email, password);
        const isEmailVerified = user.emailVerified;
        if (isEmailVerified) {

            onSuccess(user);
        } else {
            Alert.alert("Please verify your email. A new verification email will be sent to you.");
            await app.auth().currentUser.sendEmailVerification();
            console.log('Email verification sent');
        }
    } catch (error) {
        return onError(error);
    }
}

export const createAccount = async ({ name, email, password }, onSuccess, onError) => {
    try {
        const { user } = await app.auth().createUserWithEmailAndPassword(email, password);
        if (user) {
            await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
                userName: name,
                password,
                email,
                uid: firebase.auth().currentUser.uid,
                groups:{},
                profilepic: "https://i.pinimg.com/564x/dd/7a/73/dd7a73bf143c16dcc2c31426c97d2f41.jpg"
            });
            await user.updateProfile({ displayName: name });
            await user.sendEmailVerification();
            onSuccess(user);
        }
    } catch (error) {
        onError(error);
    }
}

/*export const getCurrentUserId = () => app.auth.currentUser ? app.auth.currentUser.uid : null;
export const getCurrentUserName = () => app.auth.currentUser ? app.auth.currentUser.displayName : null;
export const getCurrentUserEmail = () => app.auth.currentUser ? app.auth.currentUser.email : null;*/

export const signOut = async (onSuccess, onError) => {
    try {
        await app.auth().signOut();
        return onSuccess();
    } catch (error) {
        return onError(error);
    }
}