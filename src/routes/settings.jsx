import React from "react";
import { Form, Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-4 ">
        <h1 className="h5">Settings</h1>
      </div>

      <div className="bd-example-snippet bd-code-snippet">
        <div className="bd-example m-0 border-0">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active text-dark accent-text rounded-0  nav-tab"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Email
              </button>
              <button
                className="nav-link rounded-0 text-dark  nav-tab"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Password
              </button>
              <button
                className="nav-link rounded-0 text-dark nav-tab"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                2FA
              </button>
              <button
                className="nav-link rounded-0 text-dark nav-tab"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-account"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Activate Account
              </button>
            </div>
          </nav>
          <div
            className="tab-content white border-start border-bottom border-end p-3"
            id="nav-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <p className="m-0 p-0 mt-3">Enter your new email</p>
              <Form class="row align-items-center g-2 mt-0">
                <div class="col-md-4">
                  <input
                    type="email"
                    id="transaction-fee"
                    class="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
              </Form>
              <div className="my-5">
                <button id="policy-button">save</button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <p>
                Select the blockchain your business would prefer to make
                available your platform.
              </p>
              <form class="row g-3">
                <div>
                  <div class="col-md-4">
                    <label for="inputPassword4" class="form-label small ">
                      Old Password
                    </label>
                    <input
                      name="old-password"
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="inputPassword4" class="form-label small ">
                    New Password
                  </label>
                  <input
                    name="new-password"
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div class="col-md-4">
                  <label for="inputPassword4" class="form-label small ">
                    Confirm Password
                  </label>
                  <input
                    name="confirm-password"
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
              </form>
              <button id="policy-button" className="my-5">
                save
              </button>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="row my-5">
                <div className="col-md-4">
                  <div className="card rounded-3 py-2" id="policy-card">
                    <div className="row ps-2">
                      <div className="col-md-auto d-flex p-0 ps-2">
                        <img src="/images/bitcoin-1.png" alt="..." />
                        <p>
                          <small className="text-body-secondary">
                            Authorize 2FA security
                          </small>
                        </p>
                      </div>

                      <div className="col-auto pt-1">
                        <div className="form-check form-switch p-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="policy-usdt"
                          />
                          <label
                            className="form-check-label"
                            for="policy-usdt"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <button id="policy-button">save</button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-account"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <p className="gy-4">Click this button to activate your account</p>
              <div className="my-5 d-grid">
                <button id="policy-button" className="btn">
                  Active my account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
