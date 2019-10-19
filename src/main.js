import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";       


Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyC-QLLtpIFGJ4bRyORZyEWinMpC8KRLrsI",
  authDomain: "testess-ea890.firebaseapp.com",
  databaseURL: "https://testess-ea890.firebaseio.com",
  projectId: "testess-ea890",
  storageBucket: "testess-ea890.appspot.com",
  messagingSenderId: "1018633631601",
  appId: "1:1018633631601:web:86ac831ab6e1c4aae668d0",
  measurementId: "G-6G1NB1SJLX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
