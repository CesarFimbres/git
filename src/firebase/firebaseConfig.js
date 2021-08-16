import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics'


const firebaseConfig = {
	apiKey: "AIzaSyCcQvQy_DhO5rLBEl-pwogQ7KFbS_fWEJE",
	authDomain: "git-stuff.firebaseapp.com",
	projectId: "git-stuff",
	storageBucket: "git-stuff.appspot.com",
	messagingSenderId: "666045079663",
	appId: "1:666045079663:web:3cd200a85b7ce46bb4ed9a",
	measurementId: "G-8712XLNVHG"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
	db,
	googleAuthProvider,
	firebase
}



/*
< !--The core Firebase JS SDK is always required and must be listed first-- >
<script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js"></script>

<!--TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyCcQvQy_DhO5rLBEl-pwogQ7KFbS_fWEJE",
	authDomain: "git-stuff.firebaseapp.com",
	projectId: "git-stuff",
	storageBucket: "git-stuff.appspot.com",
	messagingSenderId: "666045079663",
	appId: "1:666045079663:web:3cd200a85b7ce46bb4ed9a",
	measurementId: "G-8712XLNVHG"
};
  // Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
</script>
 */