import React from "react";
import Employee from "./Employee.jsx";
class App extends React.Component
{
  constructor()
  {
    super()
  }

  render()
  {
    return<div className="container">
      <Employee/>
    </div>
  }
}
export default App;