import React from "react";
class Employee extends React.Component
{
  constructor()
  {
    super()
  }

  render()
  {
    return<div className="container text-center">
      <h1 style={{color:'red'}}>Employee App</h1>
      <h1>Enter Employee Data</h1>
      <div className="row">
      <div className="col-md-4 form-group">
        <input type="number" className="form-control" placeholder="Enter Employee Id"/>
      </div>
      <div className="col-md-4 form-group">
        <input type="text" className="form-control" placeholder="Enter Employee Name"/>
      </div>
      <div className="col-md-4 form-group">
        <input type="number" className="form-control" placeholder="Enter Employee Contact"/>
      </div>
      </div> 
      <div className="row">
      <div className="col-md-4 form-group">
        <input type="number" className="form-control" placeholder="Enter Employee Salary"/>
      </div>
      <div className="col-md-4 form-group">
        <input type="number" className="form-control" placeholder="Enter Employee Experience"/>
      </div>
      <div className="col-md-4 form-group">
        <select className="form-control">
            <option>Employee Department</option>
            <option value="admin">Admin</option>
            <option value="recp">Reception</option>
            <option value="hr">HR</option>
            <option value="account">Account</option>
            <option value="wde">Devlopment</option>
        </select>
      </div>
      </div> 
      <div className="row form-group">
      <input type="button" className="form-control btn btn-success" value="Save Data"/>
      </div>

     <hr/>
     <h1>Show Employee Record's</h1>
     <div className="row table-responsive">
         <table className="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                 <th>S.no</th>
                 <th>Id</th>
                 <th>Name</th>
                 <th>Salary</th>
                 <th>Dept</th>
                 <th>Contact</th>
                 <th>Exp</th>
                 <th>Operation</th>
                </tr>
            </thead>
         </table>
     </div> 
    </div>
  }
}
export default Employee;