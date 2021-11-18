import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../Hooks/UseAuth/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyOrders = (id) => {
    useEffect( () => {
        AOS.init();
      },[])
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        const url = `https://sheltered-meadow-91214.herokuapp.com/purchase?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
          

    }, [user.email])

    const handleDelete = id => {
        const url = `https://sheltered-meadow-91214.herokuapp.com/purchase/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = myOrders.filter(service => service._id !== id);
                    setMyOrders(remaining)
                }
            })
        console.log('clicked')
    }


    return (
        <div>
            <h3 data-aos="zoom-in-up" className="mb-4">My orders are: {myOrders.length}</h3>
            <TableContainer component={Paper}>
                <Table data-aos="zoom-in-up" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell data-aos="zoom-in-up">Product title</TableCell>
                            <TableCell data-aos="zoom-in-up" align="right">User Name</TableCell>
                            <TableCell data-aos="zoom-in-up" align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders?.map((order) => (
                            <TableRow
                                key={order.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell data-aos="zoom-in-up" component="th" scope="row">
                                    {order.title}
                                </TableCell>
                                
                                <TableCell data-aos="zoom-in-up" align="right">{order.name}</TableCell>
                                <TableCell data-aos="zoom-in-up" align="right"><button onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;