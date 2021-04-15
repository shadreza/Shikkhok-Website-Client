import { createContext, useState } from "react";
import Homepage from "./components/homepage/Homepage";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./components/FirebaseConfig/firebase.config";
import Header from "./components/header/Header";

firebase.initializeApp(firebaseConfig);

export const UserContext = createContext([]);
export const HeaderStayingContext = createContext([]);

function App() {
  const defaultUser = {
    name:"",
    image:"",
    email:"",
    isLoggedInOrNot:false
  }
  const [user , setUser] = useState(defaultUser);
  const [headerShouldStayOrNot , setHeaderShouldStayOrNot] = useState(true);
  return (
    <UserContext.Provider value={[user , setUser]}>
      <HeaderStayingContext.Provider value={[headerShouldStayOrNot , setHeaderShouldStayOrNot]}>
        <div className="App">
          {headerShouldStayOrNot === true && <Header></Header>}
        </div>
      </HeaderStayingContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
