import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePass = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        if (email==="admin@email.com" && password==="123") {
            toast.success(`Email : ${email} \nPassword : ${password}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(true)
            setTimeout(() => {
                window.location=("/");
            }, 2500);
        }
        else
        {alert("Invalid Email & Password");}
    } catch (error) {
        alert(error.message);
    }
  };

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const loginPassShow = () => {
    let pwd_type = document.querySelector("#login_password").type;
    if (pwd_type === "password") {
      document.querySelector("#login_password").type = "text";
    } else {
      document.querySelector("#login_password").type = "password";
    }
  };


  return (
    <>
      <div className="jumbotron my-5">
        <div className="container">
          <h1 className="display-4">Hello, Welcome to the Login Page</h1>
          <hr className="my-4" />
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              {/* <!-- Login Form : --> */}
              <div className="text-center">
                {loading && <Spinner/>}
              </div>
              <form
                className="form form-control"
                onSubmit={handleSubmit}
                name="login_form"
                id="login_form"
              >
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />

                {/* <!-- Login-Email (input) : --> */}
                <div className="form-group">
                  <label htmlFor="login_email">
                    Email address<sup style={{ color: "red" }}>*</sup>
                  </label>
                  <input
                    type="email"
                    className="form-control mb-2"
                    onChange={handleEmail}
                    value={email}
                    name="login_email"
                    id="login_email"
                    aria-describedby="emailHelp"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                  <span
                    style={{ color: "red" }}
                    id="err_email_login"
                    name="err_email_login"
                  ></span>
                </div>

                {/* <!-- Login-Password (input) : --> */}
                <div className="form-group">
                  <label htmlFor="login_password">
                    Password<sup style={{ color: "red" }}>*</sup>
                  </label>
                  <input
                    type="password"
                    className="form-control mb-2"
                    onChange={handlePass}
                    value={password}
                    name="login_password"
                    id="login_password"
                    required
                  />
                  <span
                    style={{ color: "red" }}
                    id="err_password_login"
                    name="err_password_login"
                  ></span>
                </div>

                {/* <!-- Login-checkbox : --> */}
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="login_ch"
                    id="login_ch"
                    onClick={loginPassShow}
                  />
                  <label className="form-check-label" htmlFor="login_ch">
                    Show/Hide
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning"
                  disabled={!validateForm()}
                >
                  Login
                </button>
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
