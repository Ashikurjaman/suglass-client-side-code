import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const Addproduct = () => {
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if(res.data.insertedId){
                    alert(' Added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="form-container">
            <h2 className="text-center">Add Product</h2>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input style={{ width: 700,  }} {...register("name", { required: true, maxLength: 100 })} defaultValue="" placeholder="Name" />
                <br/>
                <br/>
                <input style={{ width: 700,  }} type="price"  {...register("price", { required: true, maxLength: 100 })} defaultValue="" placeholder="Price" />
                <br/>
                <br/>
                <input style={{ width: 700,  }}type="img" {...register("img", { required: true, maxLength: 100 })} defaultValue="" placeholder="img" />
                <br/>
                
                
                <input style={{ marginTop:"20px", backgroundColor:"#39395f" ,color:"#fff" ,padding:"5px"  }} className="submit" type="submit" />
            </form>
        </div>
    );
};

export default Addproduct;