import React, { useState } from "react";

const Login = () => {
  const [user, setuUser] = useState({
    email: "",
    password: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(user)
    console.log(user);
  };

  return (
    <section>
      <main>
        <div className="section_registration">
          <div className="container grid grid-two-cols">
            <div className="registration_image">
              <img
                src="/images/login.png"
                alt="try to fill Login form"
                width="500"
                height="500"
              />
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
