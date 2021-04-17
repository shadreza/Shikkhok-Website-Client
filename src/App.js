import { createContext, useEffect, useState } from "react";
import Homepage from "./components/homepage/Homepage";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./components/FirebaseConfig/firebase.config";
import Header from "./components/header/Header";

firebase.initializeApp(firebaseConfig);

export const UserContext = createContext([]);
export const SelectedItem = createContext([]);
export const ProductContext = createContext([]);

function App() {

  const [products , setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5055/products')
    .then(res=>res.json())
    .then(data => {
      setProducts(data);
    })
  }, [products])

  let prd ={
    namePrd : "",
    pricePrd : 0,
    quantityPrd : 0,
    imageUrlPrd : "",
    isSetOrNot : false
    }

  const defaultUser = {
    name:"",
    image:"",
    email:"",
    isLoggedInOrNot:false
  }
  const [user , setUser] = useState(defaultUser);
  const [itemSelected , setItemSelected] = useState(prd);
  return (
    <ProductContext.Provider value={[products,setProducts]}>
      <UserContext.Provider value={[user , setUser]}>
        <SelectedItem.Provider value={[itemSelected , setItemSelected]}>
          <div className="App">
            <Header></Header>
          </div>
        </SelectedItem.Provider>
      </UserContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
