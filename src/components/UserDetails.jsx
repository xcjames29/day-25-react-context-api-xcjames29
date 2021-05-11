import { useState } from "react";
import UserContext from "../context/UserContext";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent"
export default function UserDetailsComponent() {
    var [userDetails,setUserDetails] = useState({
      name: "Mayank",
      age: 30
    });
  
    return (
      <UserContext.Provider value={{data:userDetails, setData:setUserDetails}} >
          <div className="parent">
          <h1>This is the Parent Component</h1>
          <ChildComponent  />
          <SiblingComponent/>
        </div>
      </UserContext.Provider>
    );
  }