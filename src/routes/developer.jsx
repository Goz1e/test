import React from "react";
import { Form, Link } from "react-router-dom";
const Developer = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-4 ">
        <h1 className="h5">Developer</h1>
      </div>

      <div className="bd-example-snippet bd-code-snippet">
        <div className="bd-example m-0 border-0">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active text-dark accent-text rounded-0"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Test API Key
              </button>
              <button
                className="nav-link rounded-0 text-dark"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Production API Key
              </button>
            </div>
          </nav>
          <div
            className="tab-content white border-start border-bottom border-end p-3 shadow-sm"
            id="nav-tabContent"
          >
            <div
              className="tab-pane fade show active "
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <p className="pt-2">
                This is your <strong className="fw-medium">TEST</strong> API Key
                and can be used while developing your platform.
              </p>
              <br />
              <div className="row pb-5">
                <div className="col-md-4">
                  <div class="input-group ">
                    <input
                      id="test-api-key"
                      type="password"
                      class="form-control"
                      value="disguised api key to be copieid"
                      aria-label="Recipient's username with two button addons"
                    />
                    <button class="btn btn-outline-secondary" type="button">
                      view
                    </button>
                    <button class="btn btn-outline-secondary" type="button">
                      copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <p className="pt-2">
                This is your <strong className="fw-medium">Production</strong>{" "}
                API Key and can be used while developing your platform.
              </p>
              <br />
              <div className="row pb-5">
                <div className="col-md-4">
                  <div class="input-group ">
                    <input
                      id="production-api-key"
                      type="password"
                      class="form-control"
                      value="disguised api key to be copieid"
                      aria-label="Recipient's username with two button addons"
                    />
                    <button class="btn btn-outline-secondary" type="button">
                      view
                    </button>
                    <button class="btn btn-outline-secondary" type="button">
                      copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developer;
