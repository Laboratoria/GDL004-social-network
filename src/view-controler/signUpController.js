import {registerUser} from '../model/signUpModel.js'

export const signUpController = (email, password) => {
    registerUser(email, password);
}
