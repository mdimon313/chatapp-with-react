import { FiAtSign, FiLock, FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const formControl = (e) => {
    e.preventDefault();
    console.log(email);

    // Clear input values
    setPass("");
    setEmail("");
  };
  return (
    <section className="account_wrap">
      <div className="container">
        <div className="account_box">
          <div className="account_img">
            <img
              src="https://image.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg"
              alt="simple login img"
            />
          </div>

          <form onSubmit={formControl}>
            <h2 className="account_header">Login Account</h2>
            <Input
              type="text"
              placeholder="Enter e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<FiAtSign />}
            />

            <Input
              type="password"
              value={pass}
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              icon={<FiLock />}
            />

            <Button title="Login" />
            <div className="withaccount">
              <span>
                <FcGoogle />
              </span>
              <span>
                <FiGithub />
              </span>
            </div>
            <p className="redirect_enroll">
              Don't have account?{" "}
              <Link to="/enroll" className="redirect_link">
                Create an account
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
