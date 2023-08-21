import React from "react";
import { Form } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex gap-5 justify-content-center p-5 m-5">
          <div className="col-md">
            <img
              className="img-fluid"
              src="https://img.freepik.com/free-vector/abstract-background_53876-90695.jpg?size=626&ext=jpg&ga=GA1.2.671844003.1691227886&semt=sph"
              alt=""
            />
          </div>
          <div className="col-md text-start">
            {/* bootstrap form */}
            <p>Sign up</p>

            <Form>
              <div className="mb-3 text-start">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3 text-start">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3 text-start">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="mb-3 text-start">
                <label>Company Type</label>
                <select class="form-select">
                  <option selected>Select company type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3 text-start">
                <label>Location</label>
                <select class="form-select">
                  <option selected>Select company type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button className="btn w-100 accent text-white">signup</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
