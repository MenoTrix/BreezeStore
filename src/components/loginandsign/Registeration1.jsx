import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./formstyle.css";
export default function Registeration1() {
  const [error, errorSet] = useState("");
  const [loading, loadingSet] = useState(false);
  const [confirmpass, confirmpasswordSet] = useState({
    check: false,
    meseage: "",
  });
  function toggle() {
    var password = document.getElementsByName("password");
    console.log(password[0]);
    password[0].type = password[0].type == "password" ? "text" : "password";
  }
  function confirmtoggle() {
    var password = document.getElementsByName("confirmpassword");
    // console.log(password[0]);
    password[0].type = password[0].type == "password" ? "text" : "password";
  }
  let navigate = useNavigate();

  const RegisterFormHandler = (event) => {
    event.preventDefault();
    loadingSet(true);
    var { title, body, image, price } = event.target;
    if (image.value != image.value) {
      confirmpasswordSet({
        check: true,
        meseage: "not the same with password",
      });
    } else {
      confirmpasswordSet({
        check: false,
        meseage: "",
      });
      axios
        .post("http://127.0.0.1:8000/meals/newmeal", {
          title: title.value,
          image: image.value,
          body: body.value,
          price: price.value,
        })
        .then((response) => {
          console.log(response);
          loadingSet(false);
          navigate("/regesteration");
        })
        .catch((error) => {
          errorSet(error.response.data[Object.keys(error.response.data)[0]]);
          loadingSet(false);
        });
    }
  };
  return (
    <div className="full-height bg-light container-fluid w-100 d-flex justify-content-center text-start align-items-center form-holder">
      <div className="col-sm-8 col-md-6 col-lg-4 bg-white p-3 form-content">
        <form onSubmit={RegisterFormHandler}>
          <h1 className="text-center">title</h1>

          <input
            className="w-100 "
            type="text"
            placeholder="Enter user name"
            name="title"
            pattern="^[a-zA-Z].{2,20}"
            required
          />
          <br />
          <br />

          <h1 className="text-center">Description</h1>

          <input
            className="w-100 "
            type="text"
            placeholder="Enter your body"
            name="body"
            required
          />
          <br />
          <br />

          <h1 className="text-center">Image</h1>
          <input
            type="text"
            name="image"
            placeholder="image"
            required
            className="w-100 "
          />
          <br />
          <br />

          <h1 className="text-center ">Price</h1>
          <input
            className="w-100 "
            type="number"
            placeholder="Enter your Price"
            name="price"
            required
          />
          <br />
          <br />

          {error.length > 0 && <div className="alert alert-danger">hi</div>}

          {loading ? (
            <div className="spinner-border text-info" role="status"></div>
          ) : (
            <button type="submit" className="button">
              {" "}
              Submit{" "}
            </button>
          )}
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}
{
  {
    /* <form class="form-style-7">
    <ul>
      <li>
        <label for="name">Name</label>
        <input type="text" name="name" maxlength="100" />
        <span>Enter your full name here</span>
      </li>
      <li>
        <label for="email">Email</label>
        <input type="email" name="email" maxlength="100" />
        <span>Enter a valid email address</span>
      </li>
      <li>
        <label for="url">Website</label>
        <input type="url" name="url" maxlength="100" />
        <span>Your website address (eg: http://www.google.com)</span>
      </li>
      <li>
        <label for="bio">About You</label>
        <textarea name="bio" onkeyup="adjust_textarea(this)"></textarea>
        <span>Say something about yourself</span>
      </li>
      <li>
        <input type="submit" value="Send This" />
      </li>
    </ul>
  </form> */
  }
  /* <br />
          <label>Show Password </label>
          <input type="checkbox" label="Show Password" onClick={toggle} />
          <h1>Confirmation Password</h1>
          <input
            type="password"
            name="confirmpassword"
            placeholder="confirm Password"
            required
          />
          {confirmpass.check && (
            <div className="alert alert-danger">{confirmpass.meseage}</div>
          )}
          <br />
          <label htmlFor="">Show Password </label>
          <input
            type="checkbox"
            label="Show Password"
            onClick={confirmtoggle}
          /> */
}
// return
// <div className="full-height bg-light container-fluid w-100 d-flex justify-content-center text-start align-items-center form-holder">
//   <div className="col-sm-8 col-md-6 col-lg-4 bg-white p-3 form-content">
//     <Form onSubmit={RegisterFormHandler}>
//       <Form.Group className="mb-3 form-items" controlId="formBasicusername">
//         <h1>username</h1>
//         {/* {/* <Form.Label className="form-content">Username</Form.Label> */}
//         <Form.Control
//           type="text"
//           placeholder="Enter user name"
//           name="username"
//           pattern="^[a-zA-Z].{2,20}"
//           title="user name must start with character and contain at least 3 words"
//           required
//         />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Enter your email"
//           name="email"
//           required
//         />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           name="password"
//           placeholder="Password"
//           // pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}"
//           title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
//           required
//         />
//         <Form.Group className="my-3" controlId="formBasicCheckbox">
//           <Form.Check
//             type="checkbox"
//             label="Show Password"
//             onClick={toggle}
//           />
//         </Form.Group>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
//         <Form.Label>Confirmation Password</Form.Label>
//         <Form.Control
//           type="password"
//           name="confirmpassword"
//           placeholder="confirm Password"
//           // pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}"
//           required
//         />
//         {confirmpass.check && (
//           <div className="alert alert-danger">{confirmpass.meseage}</div>
//         )}
//         <Form.Group className="my-3" controlId="formConfirmBasicCheckbox">
//           <Form.Check
//             type="checkbox"
//             label="Show Password"
//             onClick={confirmtoggle}
//           />
//         </Form.Group>
//       </Form.Group>

//       {error.length > 0 && (
//         <div className="alert alert-danger">{error}</div>
//       )}

//       {loading ? (
//         <div className="spinner-border text-info" role="status"></div>
//       ) : (
//         <Button className="w-100 bg-info" variant="primary" type="submit">
//           Submit
//         </Button>
//       )}
//     </Form>
//   </div>
// </div>
