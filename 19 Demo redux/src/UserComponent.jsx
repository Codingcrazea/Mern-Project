import { useRef } from "react"
import { useDispatch } from "react-redux";
import { addUserName, removeUserName } from "./Redux/Slice";

function UserComponent()
{
    var name = useRef()
    const dispatch = useDispatch();
    var addName = ()=>{
      var nm = name.current.value;
      dispatch(addUserName(nm));
   }
   
   var removeName = ()=>{
    var nm = name.current.value; 
     dispatch(removeUserName(nm))
   }

    return<div>
      <input type="text" placeholder="Enter Name" ref={name}/>
      &nbsp;&nbsp;
      <button onClick={addName}>Add Name</button>
      &nbsp;&nbsp;
      <button onClick={removeName}>Remove Name</button>
    </div>
}
export default UserComponent