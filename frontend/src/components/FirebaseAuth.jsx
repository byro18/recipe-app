import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed up
		const user = userCredential.user;
		// ...
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
	});

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in
		const user = userCredential.user;
		// ...
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
	});
