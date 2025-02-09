import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setuUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  //handling the input values

  const HandleInput = (e) => {
    console.log(e);
    let name = e.target.name; //kis field me likh rha
    let value = e.target.value; //kya value likh rha hai

    setuUser({
      //...user,[e.target.name]:e.target.value
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //alert(user)
    console.log(user);
    try {
      const response = await fetch(`http://localhost:3000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login form", response);
      if (response.ok) {
        alert("Login succesful");
        setuUser({
          email: "",
          password: "",
        });
        navigate("/")
      } else {
        alert("invalid credentials");
        console.log("invalid credentials");
      }
    } catch (error) {
      console.log("error in login", error);
    }
  };

  return (
    <section>
      <main>
        <div className="section_registration">
          <div className="container grid grid-two-cols">
            <div className="registration_image">
              <img src="/images/login.png" alt="try to fill Login form" />
            </div>
            {/* let tackle registratin form */}
            <div className="registrartion_form">
              <h1 className="main_heading mb-3">Login Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={HandleInput}
                  />
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={HandleInput}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
