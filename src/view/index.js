import home from './home.js';
import profile from './userProfile.js';
import {signUpView, eventSignUpInOut} from './signUpView.js';


const components = {
  signUpView: signUpView,
  home: home,
  user: profile,

}

const eventsElements = {
  signUpEvent: eventSignUpInOut,

}

export { components, eventsElements }