import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import axios from "axios";


const Signup = props => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    
  });
  
 // const navigate = useNavigate();

  const[image,setImage]= useState({
    
  })
  function handleImage(e){
    console.log(e.target.files)
  setImage (e.target.files[0])
  }
  


  const handleSubmit =  e => {
    e.preventDefault();

    const {name, email, password} = credentials;

   
    const formData = new FormData();
    formData.append('name',name);
    formData.append('email',email)
    formData.append('password',password);
    formData.append('photo',image);
    axios({
  method: "post",
  url: "http://localhost:4000/api/v1/signup",
  data: formData,
  headers: { "Content-Type": "multipart/form-data" },
})
  .then(function (response) {
    //handle success
    console.log(response);
    if (response.data.success) {
      // Save the auth token and redirect
//navigate("/home")
     // localStorage.setItem("token", response.data.token);
      document.location.replace("http://localhost:3000/products")
      props.showAlert("Login Successfull", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
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
    <>
    <h2 className="text-warning mb-4">Sign Up to access Auraflix</h2>
    <div className="container mt-4">
   
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <div className="mb-3 form-floating">
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            required
            minLength={3}
          />
          <label htmlFor="name" className="form-label">
            Name
          </label>
        </div>
        <div className="mb-3 form-floating">
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
            minLength={5}
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
            name="password"
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            required
            minLength={5}
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div id="passwordHelp" className="form-text">
          <div class="mb-3">
              <label for="photo" class="form-label">samplefile</label>
              <input type="file" name="photo" onChange={handleImage} multiple class="form-control" id="lastname"/>
            </div>
            <strong>
              Note: ** You cannot reset your password again for security reasons
              **
            </strong>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
   </>
  );
};

export default Signup;
