import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { chartOptions, data, data1 } from "../components/bar-chart";
import { doughChartOptions } from "../components/doughnut-chart";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

const Dashboard = () => {
  //
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const fetchSamplings = async () => {
      setChartData({
        labels: data.map((sampling) => sampling.year),
        datasets: [
          {
            label: "data1",
            data: data.map((sampling) => sampling.count),
            borderColor: "#633153",
            backgroundColor: "#633153",
          },
          {
            label: "data2",
            data: data1.map((sampling) => sampling.count),
            borderColor: "#e3d3de",
            backgroundColor: "#e3d3de",
          },
        ],
      });
    };
    fetchSamplings();
  }, []);

  // doughnut chart
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
        <h1 className="h5">Console</h1>
      </div>
      <div
        className="row d-flex rounded-2 text-light m-1 p-4  pb-1 shadow-sm"
        id="index-card"
      >
        <h5>Welcome</h5>
        <p className="">
          This is your business Yuki dashboard. <br /> Click on the button
          bellow to learn how to best utilize this platform
          <a
            className="btn btn-sm btn-secondary white accent-text ms-3"
            href="#"
          >
            Learn More
          </a>
        </p>
      </div>

      <div className="row text-light m-1 mt-3 gap-3">
        <div className="col m-0">
          <div className="row gap-3">
            <div className="col rounded-2 h-100 text-dark white shadow-sm">
              <div className="row">
                <div className="card border-0">
                  <div className="row g-0 p-1">
                    <div className="col-md-4 col-sm-4">
                      <img
                        src="/images/wallet.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 col-sm">
                      <div className="card-body">
                        <p className="card-text mb-0">
                          <small className="text-body-secondary">
                            Total account Value
                          </small>
                        </p>
                        <h5 className="card-title">7,983,221</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col rounded-2 h-100 text-dark white shadow-sm">
              <div className="row">
                <div className="card border-0">
                  <div className="row g-0 p-1">
                    <div className="col-md-4">
                      <img
                        src="/images/sack.png"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text mb-0">
                          <small className="text-body-secondary">
                            Net Volume
                          </small>
                        </p>
                        <p className="h5">
                          7,983,221<small>USD</small>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col rounded-2 h-100 text-dark white shadow-sm">
              <div className="d-grid gap-2 d-md-block py-2">
                <img
                  src="/images/Rectangle-accent.png"
                  className="status-box"
                  alt=""
                />
                <small className="text-muted">Inflow</small>
                <img
                  src="/images/Rectangle-accent-2.png"
                  className="status-box"
                  alt=""
                />
                <small className="text-muted">Outflow</small>
              </div>
              <div className="h-75 barchart">
                <Bar type="line" data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-3 rounded-2">
          <div className="row gap-3">
            <div className="col-md-6 col-lg-12 rounded-2 h-100 text-dark white shadow-sm">
              <div className="row">
                <div className="pt-3 accent-text pb-5">
                  <div className="h5 text-start">Wallets</div>
                  {/* <p className="pt-1 accent-text ">wallets</p> */}
                  <Doughnut
                    // type="line"
                    data={doughData}
                    options={doughChartOptions}
                  />
                </div>
              </div>
            </div>
            <div className="col rounded-2 h-100 text-dark white shadow-sm">
              <div className="row gap-1">
                <div className="col-sm col-md-12 col-lg">
                  <div className="card-body py-3">
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
                <div className="col-sm col-md-12 col-lg">
                  <div className="card-body py-3">
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

export default Dashboard;
