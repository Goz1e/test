import React, { useState, useEffect } from "react";
import { doughChartOptions } from "../components/doughnut-chart";
import { Doughnut } from "react-chartjs-2";

const Account = () => {
  const [doughData, setDoughData] = useState({ datasets: [] });

  useEffect(() => {
    const data = [{ inflow: 2010, outflow: 1010 }];
    const setDoughChartData = async () => {
      setDoughData({
        labels: ["inflow", "outflow"],
        datasets: [
          {
            label: "inflow - outflow",
            data: [data[0].inflow, data[0].outflow],
            backgroundColor: ["#633153", "#e3d3de"],
            hoverOffset: 4,
            cutout: 80,
          },
        ],
      });
    };
    setDoughChartData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3  ">
        <h1 className="h5">Assets</h1>
      </div>
      <div className="row gap-3 m-1">
        <div className="col rounded-2 text-white shadow-sm accent">
          <div className="row p-2">
            <div className=" colcard border-0 p-2">
              <div className="row g-0 p-1">
                <div className="col-md-2 m-0 p-0">
                  <img
                    src="/images/bitcoin-1.png"
                    className="img-fluid rounded accent-2 "
                    alt="..."
                  />
                </div>
                <div className="col-md m-0 p-0">
                  <div className="card-body p-0 ps-2">
                    <p className="card-text text-light">
                      <small className="">Total wallet Asset Value</small>
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="card-title">7,983,221</h5>
            </div>
          </div>
        </div>
        <div className="col rounded-2 text-dark white shadow-sm">
          <div className="row p-2">
            <div className=" colcard border-0 p-2">
              <div className="row g-0 p-1">
                <div className="col-md-2 m-0 p-0">
                  <img
                    src="/images/bitcoin-1.png"
                    className="img-fluid rounded accent-2 "
                    alt="..."
                  />
                </div>
                <div className="col-md m-0 p-0">
                  <div className="card-body p-0 ps-2">
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Total Wallet Bitcoin Value
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="card-title">7,983,221</h5>
            </div>
          </div>
        </div>
        <div className="col rounded-2 text-dark white shadow-sm">
          <div className="row p-2">
            <div className=" colcard border-0 p-2">
              <div className="row g-0 p-1">
                <div className="col-md-2 m-0 p-0">
                  <img
                    src="/images/ethereum-1.png"
                    className="img-fluid rounded accent-2 "
                    alt="..."
                  />
                </div>
                <div className="col-md m-0 p-0">
                  <div className="card-body p-0 ps-2">
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Total Wallet Etherum Value
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="card-title">7,983,221</h5>
            </div>
          </div>
        </div>
        <div className="col rounded-2 text-dark white shadow-sm">
          <div className="row p-2">
            <div className=" colcard border-0 p-2">
              <div className="row g-0 p-1">
                <div className="col-md-2 m-0 p-0">
                  <img
                    src="/images/tether-1.png"
                    className="img-fluid rounded accent-2 "
                    alt="..."
                  />
                </div>
                <div className="col-md m-0 p-0">
                  <div className="card-body p-0 ps-2">
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Total Wallet Tether Value
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="card-title">7,983,221</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-light m-1 mt-3 gap-3">
        <div className="col-sm-12 col-md-12 col-lg p-0">
          <div class="table-responsive table-sm rounded-3 overflow-lg-x-hidden ">
            <table class="table table-sm table-borderless table-hover caption-top p-3">
              <caption className="accent-2 accent-text fw-medium pb-1 mb-1">
                <p className="px-2 mb-1">My Kontracts</p>
              </caption>
              <thead className="table-head border">
                <tr>
                  <th scope="col" className="ps-2 fw-medium">
                    Wallet
                  </th>
                  <th scope="col" className="ps-2 fw-medium">
                    Cathegory
                  </th>
                  <th scope="col" className="ps-2 fw-medium">
                    Asset
                  </th>
                  <th scope="col" className="ps-2 fw-medium">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td className="">
                    {" "}
                    <small className="py-1 my-1 ps-1 accent-text">
                      Josh Abolade
                    </small>
                  </td>
                  <td className="">
                    <button disabled className="table-inflow">
                      {" "}
                      inflow
                    </button>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      Bitcoin
                    </small>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      0.0000353 BTC
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    {" "}
                    <small className="py-1 my-1 ps-1 accent-text">
                      Josh Abolade
                    </small>
                  </td>
                  <td className="">
                    <button disabled className="table-outflow">
                      {" "}
                      outflow
                    </button>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      Bitcoin
                    </small>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      0.0000353 BTC
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    {" "}
                    <small className="py-1 my-1 ps-1 accent-text">
                      Josh Abolade
                    </small>
                  </td>
                  <td className="">
                    <button disabled className="table-inflow">
                      {" "}
                      inflow
                    </button>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      Bitcoin
                    </small>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      0.0000353 BTC
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    {" "}
                    <small className="py-1 my-1 ps-1 accent-text">
                      Josh Abolade
                    </small>
                  </td>
                  <td className="">
                    <button disabled className="table-inflow">
                      {" "}
                      inflow
                    </button>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      Bitcoin
                    </small>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      0.0000353 BTC
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    {" "}
                    <small className="py-1 my-1 ps-1 accent-text">
                      Josh Abolade
                    </small>
                  </td>
                  <td className="">
                    <button disabled className="table-outflow">
                      {" "}
                      outflow
                    </button>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      Bitcoin
                    </small>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      0.0000353 BTC
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    {" "}
                    <small className="py-1 my-1 ps-1 accent-text">
                      Josh Abolade
                    </small>
                  </td>
                  <td className="">
                    <button disabled className="table-inflow">
                      {" "}
                      inflow
                    </button>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      Bitcoin
                    </small>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      0.0000353 BTC
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    {" "}
                    <small className="py-1 my-1 ps-1 accent-text">
                      Josh Abolade
                    </small>
                  </td>
                  <td className="">
                    <button disabled className="table-inflow">
                      {" "}
                      inflow
                    </button>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      Bitcoin
                    </small>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      0.0000353 BTC
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    {" "}
                    <small className="py-1 my-1 ps-1 accent-text">
                      Josh Abolade
                    </small>
                  </td>
                  <td className="">
                    <button disabled className="table-outflow">
                      {" "}
                      outflow
                    </button>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      Bitcoin
                    </small>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      0.0000353 BTC
                    </small>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    {" "}
                    <small className="py-1 my-1 ps-1 accent-text">
                      Josh Abolade
                    </small>
                  </td>
                  <td className="">
                    <button disabled className="table-inflow">
                      {" "}
                      inflow
                    </button>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      Bitcoin
                    </small>
                  </td>
                  <td className="">
                    <small className="py-1 my-1 ps-1 accent-text">
                      0.0000353 BTC
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md col-lg-3">
          <div className="row g-3">
            {/* doughnut */}
            <div className="col-7 col-lg-12 rounded-2 text-dark white shadow-sm h-75 pt-4">
              {" "}
              <Doughnut data={doughData} options={doughChartOptions} />
            </div>
            {/* active-inactive wallets */}
            <div className="col rounded-2 h-100 text-dark white shadow-sm pt-1">
              <div className="row gap-1">
                <div className="col-sm-6 col-md-12 col-lg">
                  <div className="card-body p-2">
                    <img
                      src="/images/Rectangle-accent.png"
                      className="status-box"
                      alt=""
                    />
                    <p className="card-text m-0">
                      {" "}
                      <small>Active wallets</small>
                    </p>
                    <p className="m-0">
                      <strong>4,567</strong>
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg">
                  <div className="card-body p-2">
                    <img
                      src="/images/Rectangle-accent-2.png"
                      className="status-box"
                      alt=""
                    />
                    <p className="card-text m-0">
                      {" "}
                      <small>Inactive wallets</small>
                    </p>
                    <p className="m-0">
                      <strong>4,567</strong>
                    </p>
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

export default Account;
