import React from 'react';  
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

 
class EmployeeList extends React.Component {
	 constructor(props) {
    	super(props);  
    	console.log(this.props); 
	};
  render() { 
  	const rows = [];
    if(this.props && this.props.data && this.props.data.length > 0)
    {
      for(var i=0;i<this.props.data.length;i++)
      {
       rows.push(createEmployeeData(this.props.data[i].id, this.props.data[i].name, this.props.data[i].mob, this.props.data[i].dob, this.props.data[i].address));
      }
    }

  return (
  		     <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>ID</b></TableCell>
            <TableCell align="center"><b> Name</b></TableCell>
            <TableCell align="center"><b>Mobile</b></TableCell>
            <TableCell align="center"><b>DOB</b></TableCell>            
            <TableCell align="center"><b>Address</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.mob}</TableCell>
              <TableCell align="center">{row.dob}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  	)
};

};

function createEmployeeData(id, name, mob, dob, address) {
  return {id, name, mob, dob, address };
}

export default EmployeeList;