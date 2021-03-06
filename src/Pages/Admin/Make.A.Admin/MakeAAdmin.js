import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import React, { useState } from "react";

import useAuth from "../../../Hooks/UseAuth/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handalonBlur = (e) => {
    setEmail(e.target.value);
  };
  const handalAdminSubmit = (e) => {
    const user = { email };
    fetch("https://sheltered-meadow-91214.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authrization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifedCount) {
          setSuccess(true);
          setEmail("");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make Admin</h2>
      <form onSubmit={handalAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          id="standard-basic"
          label="Email"
          type="email"
          defaultValue={setEmail}
          onBlur={handalonBlur}
          variant="standard"
        />

        <Button
          type="submit"
          variant="contained"
          style={{ backgrounColor: "#39395f" }}
        >
          Make Admin
        </Button>
      </form>
      {success && (
        <Alert severity="success">
          <AlertTitle>Successfully Add</AlertTitle>
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
