import React, { useEffect } from "react";
import styled from "@emotion/styled";
import firebase from "firebase/app";
import "firebase/auth";
import Salir from "./../images/clear-24px.svg";
const ImagenLogeo = styled.img`
  border-radius: 50%;
  width: 100px;
`;
const Login = ({ user, setUser }) => {
  var firebaseConfig = {
    apiKey: "AIzaSyDjBQY-QOtOetOqNm0iURN0YuQO42FDL-Y",
    authDomain: "breakcabezas.firebaseapp.com",
    databaseURL: "https://breakcabezas.firebaseio.com",
    projectId: "breakcabezas",
    storageBucket: "breakcabezas.appspot.com",
    messagingSenderId: "628647904137",
    appId: "1:628647904137:web:9c9c0a7907beedcd795758",
    measurementId: "G-KDBJTHQF99",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const logearConGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);

        //vestirUsuario();
        console.log("te logueaste con exito tato");
      })
      .catch((error) => console.log(error, "error tato"));
  };
  const deslogear = () => {
    firebase
      .auth()
      .signOut()
      .then((result) => {
        setUser(false);
      })
      .catch((err) => console.log("hay error tatito", err));
  };
  function onAuthStateChange(func) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        func(user);
      } else {
        func(false);
      }
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, [setUser]);
  return (
    <div>
      {user ? (
        <ImagenLogeo src={user.photoURL} />
      ) : (
        <ImagenLogeo src="https://www.w3schools.com/howto/img_avatar.png" />
      )}
      {user ? <h5>{user.displayName}</h5> : <h5>Ingresa para jugar</h5>}

      {user ? (
        <button className="btn btn-secondary mb-4 mt-3" onClick={deslogear}>
          <img src={Salir} className="mr-auto" alt="Icono" /> Salir
        </button>
      ) : (
        <button
          id="login"
          className="btn btn-primary  mt-3"
          onClick={logearConGoogle}
        >
          <img
            src="https://img.icons8.com/officexs/20/000000/google-logo.png"
            alt="LogoGoogle"
          />{" "}
          Ingresa con Google
        </button>
      )}
    </div>
  );
};

export default Login;
