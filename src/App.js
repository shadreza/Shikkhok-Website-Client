import { createContext, useState } from "react";
import Homepage from "./components/homepage/Homepage";
export const UserContext = createContext([]);
function App() {
  const defaultUser = {
    name:"",
    image:"",
    email:"",
    phone:""
  }
  const [user , setUser] = useState(defaultUser);
  return (
    <UserContext.Provider value={[user , setUser]}>
      <div className="App">
        <Homepage></Homepage>
      </div>
    </UserContext.Provider>
  );
}

export default App;
