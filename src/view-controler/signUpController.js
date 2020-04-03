import registerUser from '../model/signUpModel.js'

export default  signUpController = (email, password) => {
    registerUser(email, password);
}
