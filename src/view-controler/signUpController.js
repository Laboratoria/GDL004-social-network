import { registerUser, signIn, signOut, observer} from '../model/signUpModel.js'


export const signUpController = (registerEmail, registerPassword) => {
    registerUser(registerEmail, registerPassword);
    observer()
    }

export const signInController = (registerEmail, registerPassword) => {
    signIn(registerEmail, registerPassword);
    observer();
}

export const signOutController = () => {
    signOut();
}

export const userPostController = () => {
    signIn(emailAcces, passwordAcces);
}