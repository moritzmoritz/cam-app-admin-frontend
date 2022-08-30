import React, { setState, useEffect, useState } from "react"
import { googleProvider } from "./firebase";
import { getAuth, signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";

const App = () => {
  const auth = getAuth();

  const [state, setState] = useState({
    loadingUser: true,
    userLoggedIn: false,
    token: null
  });

  useEffect(() => {
    const loadUser = async () => {
      onAuthStateChanged(auth, async user => {
        if (user) {
          try {
            let token = await auth.currentUser.getIdToken(true);
            setState(state => ({
              ...state,
              loadingUser: false,
              userLoggedIn: true,
              token
            }));
          } catch {

          }
        } else {
          setState(state => ({
            ...state,
            loadingUser: false,
            userLoggedIn: false
          }));
        }
      });
    }

    loadUser();
  }, []);

  if (state.loadingUser) {
    return <div>loading...</div>
  }

  return (<div>
    {
      state.userLoggedIn &&
      <div>
        <p>{ state.token }</p>
        <button onClick={async () => {
          try {
            await signOut(auth);
            window.location.reload();
          } catch {

          }
        }}>Logout</button>
      </div>
    }

    {
      !state.userLoggedIn &&
      <button onClick={() => {
          signInWithRedirect(auth, googleProvider);
      }}>Login</button>
    }
  </div>)
}

export default App;