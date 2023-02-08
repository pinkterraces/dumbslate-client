import { useState } from "react";

export const SignupView = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthdate: birthdate // Prob needs to match in the backend
    };

    console.log("data: ", data);

    fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }).then((res) => {
      if (res.ok) {
        console.log("dataRes: ", res.json());
        alert("Signed Up!");
        //window.location.reload();
      } else {
        alert("Signup Failed");
      }
    });
  };

/*   function validateEmail() {
    let value = emailInput.value;
    let hasAtSign = value.indexOf("@") > -1;
    let hasDot = value.indexOf(".") > -1;
    return value && hasAtSign && hasDot;
  } */

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            minLength="5"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
