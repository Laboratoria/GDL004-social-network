import {registerUser, signIn, signOut } from '../model/signUpModel.js'

export const signUpController = (email, password) => {
    registerUser(email, password);
}

export const signInController = (emailAcces, passwordAcces) => {
    signIn(emailAcces, passwordAcces);
}

export const signOutController = () => {
    signOut();
}