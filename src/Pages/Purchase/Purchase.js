import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth/useAuth";
import { useHistory } from "react-router-dom";

const Purchase = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { purchaseId } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${purchaseId}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [purchaseId]);

  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/purchase", data).then((res) => {
      if (res.data.insertedId) {
        alert("Congrats!! Order successfully confirmed");
        reset();
        history.push("/dashboard");
      }
    });
  };
  return (
    <div>
      <div className="  mt-5">
        <div>
          <img src={singleProduct.img} alt="" />
        </div>
        <div className="px-5 mt-5">
          <h2 className="text-warning">About this product</h2>
          <hr />
          <h3>{singleProduct.name}</h3>
          <p>Price:{singleProduct.price}</p>
        </div>
      </div>
      <div>
        <div className="container">
          <h2 className="">Add To Order</h2>
          <form className=" " onClick={handleSubmit(onSubmit)}>
            <input
              style={{ width: 400 }}
              {...register("name", { required: true, maxLength: 1000 })}
              defaultValue={user.displayName}
            />
            <br />
            <input
              style={{ width: 400 }}
              {...register("email", { required: true, maxLength: 1000 })}
              defaultValue={user.email}
            />
            <br />
            <input
              style={{ width: 400 }}
              {...register("title", { required: true, maxLength: 1000 })}
              defaultValue={singleProduct.name}
            />
            <br />
            <input
              style={{ width: 400 }}
              {...register("img", { required: true, maxLength: 1000 })}
              defaultValue={singleProduct.img}
            />
            <br />
            <input
              style={{ width: 400 }}
              {...register("location", { required: true, maxLength: 100 })}
              placeholder="Where do you live?"
            />
            <br />

            <input
              style={{
                marginTop: "20px",
                backgroundColor: "#39395f",
                color: "#fff",
              }}
              className="submit btn"
              type="submit"
              value="Confirm"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
