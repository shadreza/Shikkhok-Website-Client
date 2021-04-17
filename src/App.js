import { createContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./components/FirebaseConfig/firebase.config";
import Header from "./components/header/Header";

firebase.initializeApp(firebaseConfig);

export const UserContext = createContext([]);
export const SelectedItem = createContext([]);
export const ProductContext = createContext([]);
export const CustomerContext = createContext([]);

function App() {

  const [products , setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5055/products')
    .then(res=>res.json())
    .then(data => {
      setProducts(data);
    })
  }, [products])

  const [customers , setCustomers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5055/customersHistory')
    .then(res=>res.json())
    .then(data => {
      setCustomers(data);
    })
  }, [customers])

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
    <CustomerContext.Provider value={[customers , setCustomers]}>
      <ProductContext.Provider value={[products,setProducts]}>
        <UserContext.Provider value={[user , setUser]}>
          <SelectedItem.Provider value={[itemSelected , setItemSelected]}>
            <div className="App">
              <Header></Header>
            </div>
          </SelectedItem.Provider>
        </UserContext.Provider>
      </ProductContext.Provider>
    </CustomerContext.Provider>
  );
}

export default App;
