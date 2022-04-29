import React, { useState } from "react";
import styles from "../styles/About.module.css";
import styles2 from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for Contacting Us , We will be reaching you soon");
        setDesc("");
        setEmail("");
        setName("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };
  return (
    <>
      <main className={styles.main}>
        <hr
          style={{
            borderColor: "rgb(32,32,32)",
            width: "92vw",
            height: "5px",
          }}
        />
        <h1 className={styles.title}>
          CONTACT <span className={styles2.span}>US</span>
        </h1>
        <hr
          style={{
            borderColor: "rgb(32,32,32)",
            width: "92vw",
            height: "5px",
          }}
        />
        <form className={styles2.form} onSubmit={handleSubmit}>
          <div className={styles2.formgrp}>
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className={styles2.formgrp}>
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className={styles2.formgrp}>
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles2.formgrp}>
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input
              name="desc"
              type="text"
              placeholder="Tell us About your FeedBack"
              value={desc}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;
