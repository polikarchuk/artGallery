import firebase from "../config/firebase";


export  const  login=(email, password)=> {
    if (email.indexOf('@') === -1) {
        return Promise.reject('Email is not valid');
    }
    if (password === '') {
        return Promise.reject('Password is empty');
    }
    return firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            return Promise.reject('Invalid credentials');

        })
}
