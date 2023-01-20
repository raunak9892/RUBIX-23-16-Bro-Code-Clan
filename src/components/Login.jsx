import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios  from "axios";


  const Login = props => {
    const [credentials, setCredentials] = useState({
      
      email: "",
      password: "",
      
    });
  
    let history = useHistory();
  
    const handleSubmit =  e => {
      e.preventDefault();
  
      const {email, password} = credentials;
  
     
      const formData = new FormData();
      
      formData.append('email',email)
      formData.append('password',password);
    
      axios({
    method: "post",
    url: "http://localhost:4000/api/v1/login",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
      if (response.data.success) {
        // Save the auth token and redirect
        localStorage.setItem("token", response.data.token);
        //history.push("/products")
       document.location.replace("http://localhost:3000/products")
        
      } else {
        
      }
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
  
  };

  const onChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  return (
    <div className="container">
      <h2 className="text-warning my-2 mb-4">Login to Continue</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            value={credentials.email}
            onChange={onChange}
            name="email"
            placeholder="Email" // Check this out
            aria-describedby="emailHelp"
          />
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            value={credentials.password}
            onChange={onChange}
            name="password"
            placeholder="Enter your password"
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
