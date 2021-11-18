import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../Hooks/UseAuth/useAuth';

const MyOrders = (id) => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/purchase?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
          

    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/purchase/${id}`
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
            <h3 className="mb-4">My orders are: {myOrders.length}</h3>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product title</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders?.map((order) => (
                            <TableRow
                                key={order.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.title}
                                </TableCell>
                                
                                <TableCell align="right">{order.name}</TableCell>
                                <TableCell align="right"><button onClick={() => handleDelete(order._id)} className="btn btn-danger">Delete</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;