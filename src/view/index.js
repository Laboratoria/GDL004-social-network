import  home from './home.js';
import profile from './userProfile.js';
import notifications from './notifications.js'
import {signUpView} from './signUpView.js';
import  {signOut} from './home.js';




const components = {
  signUpView: signUpView,
  home: home,
  user: profile,
  notifications: notifications,
  
}

const eventsElements = {
  signOut: signOut,
}

export { components, eventsElements }