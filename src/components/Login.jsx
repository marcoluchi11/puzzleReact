import React, { useEffect } from "react";
import styled from "@emotion/styled";
import firebase from "firebase/app";
import "firebase/auth";
const ImagenLogeo = styled.img`
  border-radius: 50%;
  width: 100px;
`;
// function desloguear() {
//   firebase
//     .auth()
//     .signOut()
//     .then((result) => {
//       console.log("Te deslogueaste");
//       desvestirUsuario();
//     })
//     .catch((err) => console.log("hay error tatito"));
// }
// function vestirUsuario() {
//   btn.style.display = "none";
//   off.style.display = "inline-block";
//   name.innerHTML = usuario.user.displayName;
//   pic.src = usuario.user.photoURL;
//   obtenerPuntuacionFinal();
//   mostrarVotos();
// }
// function desvestirUsuario() {
//   btn.style.display = "inline-block";
//   off.style.display = "none";
//   name.innerHTML = "Hola querido";
//   pic.src = "https://www.w3schools.com/howto/img_avatar.png";
// }
const Login = ({ user, setUser }) => {
  // eslint-disable-next-line

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
        // const Deslogin = user;
        // Deslogin.displayName = "Ingresa para jugar";
        // Deslogin.photoURL = "https://www.w3schools.com/howto/img_avatar.png";
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
        <button className="btn btn-secondary" onClick={deslogear}>
          Salir
        </button>
      ) : (
        <button
          id="login"
          className="btn btn-primary"
          onClick={logearConGoogle}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
