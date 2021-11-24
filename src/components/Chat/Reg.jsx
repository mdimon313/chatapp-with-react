import { FiAtSign, FiLock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

const Reg = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const formControl = (e) => {
    e.preventDefault();
  };
  return (
    <section className="account_wrap">
      <div className="container">
        <div className="account_box">
          <div className="account_img">
            <img
              src="https://image.freepik.com/free-vector/mention-concept-illustration_114360-231.jpg"
              alt="sign up vector"
            />
          </div>
          <form onSubmit={formControl}>
            <h2 className="account_header">Create Account</h2>
            <Input type="text" placeholder="Your Name" icon={<FiUser />} />
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
            <Input
              type="password"
              value={pass}
              placeholder="Re-type Password"
              onChange={(e) => setPass(e.target.value)}
              icon={<FiLock />}
            />

            <Button title="Sign Up" />
            <p className="redirect_enroll">
              Already have an account?{" "}
              <Link to="/" className="redirect_link">
                login here
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reg;
