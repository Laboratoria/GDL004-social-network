import { components } from '../view/index.js'
  // Your web app's Firebase configuration
  const initfb = () => {
  
    const firebaseConfig = {
    apiKey: "AIzaSyCnQ31KbCMulCxtCuFoBtLaQ3lw76l7wwI",
    authDomain: "deal-b4259.firebaseapp.com",
    databaseURL: "https://deal-b4259.firebaseio.com",
    projectId: "deal-b4259",
    storageBucket: "deal-b4259.appspot.com",
    messagingSenderId: "541545225912",
    appId: "1:541545225912:web:6bc45c07fc362a638b5e4d",
    measurementId: "G-MS1DQ2F5PX"
   };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  }


export default initfb