import React from 'react'; 

import EmployeeList from './materialuitable';

var employeeList = []; 
class Employee extends React.Component {
 
  constructor(props) {
    super(props);
    this.props= props; 
	this.state = {id:'',name: '',mob : '', dob : '', address : ''}; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.data =  JSON.parse(localStorage.getItem('employeeList'));
  }

  handleChange(e) {
  	let name = e.target.name;
  	let val = e.target.value;
    this.setState({[name]: val});
  }

  handleSubmit(event) { 
    event.preventDefault();
    console.log('A name was submitted: ' + this.state.name);
    var employeeDetails = JSON.parse(localStorage.getItem('employeeList'));
   console.log(employeeList);
     var details = {
      id: this.state.id,
      name: this.state.name,
      mob: this.state.mob,
      dob: this.state.dob,
      address: this.state.address,
    };
    employeeList.push(details);
    localStorage.setItem('employeeList', JSON.stringify(employeeList));  
    this.setState({id:'',name: '',mob : '', dob : '', address : '' });	
    this.data =  JSON.parse(localStorage.getItem('employeeList'));
  }
  render() {
  	
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h1 align='center'>Employee Details</h1>
			 <form onSubmit={this.handleSubmit} > 

                <label htmlFor="id">Employee ID</label>
				<input type="text" value={this.state.id} onChange={this.handleChange} id="id" name="id" placeholder="Enter your ID" pattern="{0-9}" required /> 
				
				<label htmlFor="name">Employee Name</label>
				<input type="text" value={this.state.name} onChange={this.handleChange} id="name" name="name" placeholder="Your your name.. " pattern="[a-zA-Z][a-zA-Z ]{2,}" required /> 
				
				<label htmlFor="mob">Mobile Number</label>
				<input type="number" value={this.state.mob} onChange={this.handleChange} id="mob" name="mob" placeholder="Mobile Number" pattern=" {0-9}" required />
 
               <label for="dob">Employee DOB</label>
                <input type="date"  value={this.state.dob} onChange={this.handleChange} id="dob" name="dob" placeholder="Enter Employee Date of birth"  required/>

				<label htmlFor="address">Address</label>
				<input type="text" value={this.state.address} onChange={this.handleChange}  id="address" placeholder ="Address" name ="address" className="form-control"   required />
				
                <input type="submit" value="Submit" />

			  </form>
			</div>  
      </header>

			<EmployeeList data ={this.data} />
    </div>

    

 );
  }
}

export default Employee;