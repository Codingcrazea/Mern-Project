import { useSelector } from "react-redux"
import UserComponent from "./UserComponent.jsx"

function App() {

     //Data Fetch From Redux
   const data = useSelector(state=>state.username.value)

   return<div>
    {data}<br/>
    <hr/>
    {data.map(ele=><b>{ele}&nbsp;&nbsp;</b>)}
    <hr/>
    <UserComponent/>
   </div>
  }

export default App
