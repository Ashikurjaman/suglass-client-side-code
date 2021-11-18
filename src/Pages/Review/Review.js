import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth/useAuth";

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://sheltered-meadow-91214.herokuapp.com/addreviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Rating added successfully. Thanks for your feedback!");
        reset();
      }
    });
  };
  return (
    <div className="form-container">
      <h2 className="text-center">Please review us</h2>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ width: 700 }}
          {...register("name", { required: true, maxLength: 100 })}
          defaultValue={user.displayName}
          placeholder="Name"
        />
        <br />
        <br />
        <input
          style={{ width: 700 }}
          type="number"
          min="0"
          max="5"
          {...register("rating", { required: true, maxLength: 5 })}
          placeholder="Rating"
        />
        <br />
        <br />
        <textarea
          style={{ width: 700, height: 200 }}
          {...register("description")}
          placeholder="Description"
        />
        <br />
        <br />
        <input
          style={{
            marginTop: "20px",
            backgroundColor: "#39395f",
            color: "#fff",
            padding: "5px",
          }}
          Name="submit"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Review;
