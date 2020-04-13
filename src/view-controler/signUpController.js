import { registerUser, signIn, signOut} from '../model/signUpModel.js'

export const signUpController = (registerEmail, registerPassword) => {
    registerUser(registerEmail, registerPassword);

}

export const signInController = (emailAcces, passwordAcces) => {
    signIn(emailAcces, passwordAcces);
}

export const signOutController = () => {
    signOut();
}