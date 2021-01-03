import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  function nameFn(event) {
    setName(event.target.value);
  }
  function emailFn(event) {
    setEmail(event.target.value);
  }
  function genderfn(event) {
    setGender(event.target.value);
  }
  function phoneFn(event) {
    setPhoneNumber(event.target.value);
  }
  function passwordFn(event) {
    setPassword(event.target.value);
  }
  function validateFn() {
    if (!name || !email || !gender || !phoneNumber || !password) {
      setError("Error Message: All fields are mandatory");
      return;
    } else if (!name.match(/^[-_ a-zA-Z]+$/)) {
      setError("Error Message: Name is not alphanumeric");
      return;
    } else if (email.search("@") === -1) {
      setError("Error Message: Email must contain @");
      return;
    } else if (
      !(gender !== "male" || gender !== "female" || gender !== "other")
    ) {
      setError("Error Message: Please identify as male, female or others");
      return;
    } else if (!phoneNumber.match(/^[0-9]+$/)) {
      setError("Error Message: Phone Number must contain only numbers");
      return;
    } else if (password.length < 6) {
      setError("Error Message: Password must contain atleast 6 letters");
      return;
    } else {
      setError("");
      return true;
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (validateFn()) {
      let index = email.search("@");
      const username = email.substr(0, index);
      setUsername(username);
    } else {
      setUsername("");
    }
  }
  return (
    <div id="main">
      <h1>Sign Up From</h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="Name"
          data-testid="name"
          onChange={nameFn}
          value={name}
        />
        <label>Email address</label>
        <input
          type="text"
          name="Email"
          data-testid="email"
          onChange={emailFn}
          value={email}
        />
        <label>Gender</label>
        <select data-testid="gender" onChange={genderfn} selected={gender}>
          <option value="male" selected>
            male
          </option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          data-testid="phoneNumber"
          onChange={phoneFn}
          value={phoneNumber}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          data-testid="password"
          onChange={passwordFn}
          value={password}
        />
        <button data-testid="submit" onClick={handleSubmit}>
          Submit button
        </button>
      </form>
      {error && <p>{error}</p>}
      {username && <p>Hello {username}</p>}
    </div>
  );
};

export default App;
