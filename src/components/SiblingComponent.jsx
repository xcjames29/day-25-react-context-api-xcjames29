
import { useContext } from "react";
import UserContext from "../context/UserContext";
export default function SiblingComponent(){
    let contextData = useContext(UserContext);
    console.log(contextData);
    let changeAge = ()=>{
        console.log(contextData);
        let newObj = JSON.parse(JSON.stringify(contextData.data));
        newObj.age = Math.ceil(Math.random()*100);
        console.log(newObj);
        contextData.setData(newObj);
    }
    return(
        <div className="sibling-container">
            <button onClick={changeAge} className="sibling" >Click me</button>
        </div>
    )
}