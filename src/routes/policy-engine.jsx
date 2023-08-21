import React from "react";
import { Form, Link } from "react-router-dom";

const PolicyEngine = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 mb-4 ">
        <h1 className="h5">Policy</h1>
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
                Asset Activation
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
                Network Activation
              </button>
              <button
                className="nav-link rounded-0 text-dark"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Transaction Policy
              </button>
              <button
                className="nav-link rounded-0 text-dark"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-account"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Account Whitelisting
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
              <p>
                Select the asset(s) your business would prefer to make available
                for your users.
              </p>
              <div className="row my-5">
                <div className="col w-100">
                  <div className="card rounded-3 py-2" id="policy-card">
                    <div className="row ps-2">
                      <div className="col d-flex p-0 ps-2">
                        <img src="/images/bitcoin-1.png" alt="..." />
                        <p>
                          <small className="text-body-secondary">USDT</small>
                        </p>
                      </div>

                      <div className="col pt-1">
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
                <div className="col w-100">
                  <div className="card rounded-3 py-2" id="policy-card">
                    <div className="row ps-2">
                      <div className="col d-flex p-0 ps-2">
                        <img src="/images/bitcoin-1.png" alt="..." />
                        <p>
                          <small className="text-body-secondary">Bitcoin</small>
                        </p>
                      </div>

                      <div className="col pt-1">
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
                <div className="col w-100">
                  <div className="card rounded-3 py-2" id="policy-card">
                    <div className="row ps-2">
                      <div className="col d-flex p-0 ps-2">
                        <img src="/images/bitcoin-1.png" alt="..." />
                        <p>
                          <small className="text-body-secondary">Etherum</small>
                        </p>
                      </div>

                      <div className="col pt-1">
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

                <div className="col w-100">
                  <div className="card rounded-3 py-2" id="policy-card">
                    <div className="row ps-2">
                      <div className="col d-flex p-0 ps-2">
                        <img src="/images/bitcoin-1.png" alt="..." />
                        <p>
                          <small className="text-body-secondary">Tron</small>
                        </p>
                      </div>

                      <div className="col pt-1">
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

              <button id="policy-button">save</button>
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
              <div className="row my-5">
                <div className="col w-100">
                  <div className="card rounded-3 py-2" id="policy-card">
                    <div className="row ps-2">
                      <div className="col d-flex p-0 ps-2">
                        <img src="/images/bitcoin-1.png" alt="..." />
                        <p>
                          <small className="text-body-secondary">Etherum</small>
                        </p>
                      </div>

                      {/* <div className="col pt-1">
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
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col w-100">
                  <div className="card rounded-3 py-2" id="policy-card">
                    <div className="row ps-2">
                      <div className="col d-flex p-0 ps-2">
                        <img src="/images/bitcoin-1.png" alt="..." />
                        <p>
                          <small className="text-body-secondary">
                            BNB Smartchain
                          </small>
                        </p>
                      </div>

                      {/* <div className="col pt-1">
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
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col w-100">
                  <div className="card rounded-3 py-2" id="policy-card">
                    <div className="row ps-2">
                      <div className="col d-flex p-0 ps-2">
                        <img src="/images/bitcoin-1.png" alt="..." />
                        <p>
                          <small className="text-body-secondary">
                            Celo Blockchain
                          </small>
                        </p>
                      </div>

                      {/* <div className="col pt-1">
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
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="col w-100">
                  <div className="card rounded-3 py-2" id="policy-card">
                    <div className="row ps-2">
                      <div className="col d-flex p-0 ps-2">
                        <img src="/images/bitcoin-1.png" alt="..." />
                        <p>
                          <small className="text-body-secondary">Polygon</small>
                        </p>
                      </div>

                      {/* <div className="col pt-1">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <button id="policy-button">save</button>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <p>
                Set your business transaction fees and other related actions{" "}
                <br />
                <br />
                <strong>Transaction fees </strong> <br />
                <small>
                  Enter the transaction fee you would want to charge your users
                  for every transaction. Note you cannot charge beyond 1% of the
                  entire transaction.
                </small>
              </p>
              <Form class="row align-items-center g-2">
                <div class="col-2">
                  <input
                    type="number"
                    id="transaction-fee"
                    class="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>
                <div className="col">
                  <span id="passwordHelpInline" class="form-text">
                    %
                  </span>
                </div>
              </Form>
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
              <p className="gy-4">create wallet</p>
              <Form class="row g-3 mb-1">
                <div class="col-md-3">
                  <label for="inputCity" class="form-label small ">
                    Address
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-2">
                  <label for="inputState" class="form-label small">
                    Asset
                  </label>
                  <select id="inputState" class="form-select">
                    <option>USDT</option>
                    <option>Bitcoin</option>
                    <option>Etherum</option>
                    <option>Tron</option>
                  </select>
                </div>
              </Form>
              <Link to="/" className="accent-text text-decoration-none small">
                + add another item{" "}
              </Link>
              <div className="my-5">
                <button id="policy-button">save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyEngine;
