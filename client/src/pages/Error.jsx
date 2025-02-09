import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not Found</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod omnis
            sunt enim consectetur consequatur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa, numquam ipsa distinctio maxime
            reiciendis autem quae qui id quidem vel voluptates consectetur
            accusantium at commodi dignissimos sequi placeat alias fuga soluta
            magnam cum hic sint harum? Nisi ducimus, minus iusto aspernatur quam
            iure ea.
          </p>
          <div className="btns">
            <NavLink to="/">Return home</NavLink>
            <NavLink to="/contact">Report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
