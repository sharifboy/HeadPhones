import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Form = () => {
  const [name, setName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://reqres.in/api/users", {
      name: name,
    });
    if (res.status == 201) {
      console.log(res);
    }
  };

  const onDelete = async (e) => {
    const res = await axios.delete("https://reqres.in/api/users/86");
    if (res.status == 200) {
      console.log("success");
    } else {
      console.log("error", res.error);
    }
  };

  return (
    <div className="container form">
      <form action="" className="form-form">
        <input
          type="text"
          className="form-input"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" onClick={(e) => onSubmit(e)}>
          Submit
        </button>
        <button type="button" onClick={() => onDelete()}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default Form;
