import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const navigate = useNavigate();


  const changehandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submithandler = (e) => {

    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      localStorage.setItem("login", JSON.stringify(formValues));
    }
  }, [formErrors]);
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/products")
    }
  })
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters!";
    }
    return errors;
  };
  return (
    <div className='container'>
      <div className="heading">
        <h2>Login</h2>
        <form onSubmit={submithandler}>
          <label htmlFor="username">Email:</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="name"
            value={formValues.email}
            onChange={changehandler}
          />
          {<p style={{ color: 'red' }}>{formErrors.email}</p>}
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="name"
            value={formValues.password}
            onChange={changehandler}
          />
          {<p style={{ color: 'red' }}>{formErrors.password}</p>}
          <br /><br />
          <button type='submit' >Go</button>
        </form>
      </div>
    </div>
  )
}

export default Login;