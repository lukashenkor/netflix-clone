import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";


export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser')),
  );
  const { firebase } = useContext(FirebaseContext);


  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      // console.log(authUser);
      // firebase.auth().signOut();
      setUser(authUser);
      /*if (authUser) {
        localStorage.setItem('authUser', JSON.stringify({
          data: authUser.providerData
        }));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }*/
    });

    return () => listener();
  }, []);

  return { user };
};