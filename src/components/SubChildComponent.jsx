import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function SubChildComponent(props) {
  let contextData = useContext(UserContext);
    return (
      <div className="sub-child">
        <h3>This is Sub Child Component</h3>
        <h4>User Name: {contextData.data.name}</h4>
        <h4>User Age: {contextData.data.age}</h4>
      </div>
    )
  }