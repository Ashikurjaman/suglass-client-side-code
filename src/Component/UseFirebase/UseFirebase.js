import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/FirebaseConfig/Firebase.init';
import { getAuth,signInWithPopup,updateProfile ,getIdToken, GoogleAuthProvider , signInWithEmailAndPassword , createUserWithEmailAndPassword, signOut, onAuthStateChanged   } from "firebase/auth";



initializeFirebase();
const UseFirebase = () => {

    const [user , setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error , setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



        // Register 

        const registerUser = (email, password,name,history) => {
            setIsLoading(true);
              createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  setError("");
                  
                  const newUser = {email, displayName: user.name};
                  setUser(newUser);
      
                  // saveUser to the database
                  saveUser(email,name,"POST")
                  
                  
                  updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                   
                  });
                  history.replace('/');
                  
                  
                })
                .catch((error) => {
                  setError (error.message);
                  // ..
                })
                .finally(()=> setIsLoading(false));
          }


        //   resgister finish


        //  LoginUser you

        const loginUser = (email, password, location,history) => {
            setIsLoading(true);
            signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || "/";
          history.replace(destination);
          setError("")
        })
        .catch((error) => {
          
          setError (error.message);
        })
        .finally(()=> setIsLoading(false));
        
          }

          useEffect(() =>{
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                   if (user) {
                     // User is signed in, see docs for a list of available properties
                     // https://firebase.google.com/docs/reference/js/firebase.User
                     
                     setUser(user)
                     getIdToken(user)
                     .then(idToken => {
                       setToken(idToken);
                       
                     })
                   } else {
                     setUser({})
                   }
                   setIsLoading(false)
       
                 });
                 return() => unsubscribe;
           },[])

           useEffect(() =>{
            fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data =>setAdmin(data.admin))
        },[user.email])
    
        const googleSignIn = (location,history) => {
          setIsLoading(true);
          signInWithPopup(auth, googleProvider)
      .then((result) => {
        
        const user = result.user;
        
        setError("")
        saveUser(user.email,user.displayName,"PUT")
        const destination = location?.state?.from || "/";
        history.replace(destination);
        
      }).catch((error) => {
        
        setError (error.message);
        
      })
      .finally(()=> setIsLoading(false));
        }

        //   login finish

        // logout 
        const logout = () => {
            setIsLoading(true)
              signOut(auth).then(() => {
                  // Sign-out successful.
                }).catch((error) => {
                  // An error happened.
                })
                .finally(()=> setIsLoading(false));
          }

          const saveUser =(email, displayName,method) => {
            console.log(displayName);
            const users = {email, displayName};
            fetch("http://localhost:5000/users", {
              method: method,
              headers: {'Content-Type': "application/json"},
              body: JSON.stringify(users)
            })
            .then()
          }
    return {
        user,
        admin,
        isLoading,
        registerUser,
        loginUser,
        logout,
        error,
        token,
        googleSignIn
    }
        
    
};

export default UseFirebase;