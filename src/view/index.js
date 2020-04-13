import home from './home.js';
import profile from './userProfile.js';
import notifications from './notifications.js'
import {signUpView, eventSignUpIn} from './signUpView.js';



const components = {
  signUpView: signUpView,
  home: home,
  user: profile,
  notifications: notifications
}

const eventsElements = {
  signUpEvent: eventSignUpIn,
  
  

}

export { components, eventsElements }