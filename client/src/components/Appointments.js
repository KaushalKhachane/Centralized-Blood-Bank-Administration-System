import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useState } from 'react';


import { Typography } from '@mui/material';

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

const Appointments = ()=>{

  const[appnts,setappnt] = useState([])

  React.useEffect(()=>{
    const fetchappnt = async()=>{
    try{
      const res = await axios.get("http://localhost:8801/appointments")
      setappnt(res.data);
      console.log(res)
    }
       
      catch(err){
        console.log(err)
      }
    }
    fetchappnt();
  },[])
  return(
    <>
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" align="left " gutterBottom>
         <b>Recent Appointments</b>
    </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Phone No</b></TableCell>
            <TableCell><b>Blood Group</b></TableCell>
            <TableCell><b>Donation Camp</b></TableCell>
            <TableCell><b>Donated(Y/N)</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appnts.map(appnt => (
            <TableRow>
              <TableCell>{appnt.app_date}</TableCell>
              <TableCell>{appnt.app_name}</TableCell>
              <TableCell>{appnt.app_phone_no}</TableCell>
              <TableCell>{appnt.app_blood_type}</TableCell>
              <TableCell>{appnt.app_camp_address}</TableCell>
              <TableCell>{appnt.app_donated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
    </>
  )
}

// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Elvis Presley',
//     'Tupelo, MS',
//     'VISA ⠀•••• 3719',
//     312.44,
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Paul McCartney',
//     'London, UK',
//     'VISA ⠀•••• 2574',
//     866.99,
//   ),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Michael Jackson',
//     'Gary, IN',
//     'AMEX ⠀•••• 2000',
//     654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'Bruce Springsteen',
//     'Long Branch, NJ',
//     'VISA ⠀•••• 5919',
//     212.79,
//   ),
// ];

function preventDefault(event) {
  event.preventDefault();
}

export default Appointments;