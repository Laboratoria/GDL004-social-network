import home from './home.js';
import profile from './userProfile.js';
import {signUpView, eventSignUp} from './signUpView.js';


const components = {
  signUpView: signUpView,
  home: home,
  user: profile,

}

const eventsElements = {
  signUpEvent: eventSignUp,

}

export { components, eventsElements }