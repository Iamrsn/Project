import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [user, setuUser] = useState({
    username: "",
    email: "",
    phone: "",
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
      const response = await fetch(`http://localhost:3000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setuUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      console.log("error in registration", error);
    }
  };

  return (
    <section>
      <main>
        <div className="section_registration">
          <div className="container grid grid-two-cols">
            <div className="registration_image">
              <img
                src="/images/register.png"
                alt="try to fill registration form"
                width="500"
                height="500"
              />
            </div>
            {/* let tackle registratin form */}
            <div className="registrartion_form">
              <h1 className="main_heading mb-3">Registration Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={HandleInput}
                  />
                </div>

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
                  <label htmlFor="phone">phone</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
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
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
