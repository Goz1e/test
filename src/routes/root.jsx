import {
  Outlet,
  useNavigation,
  useLoaderData,
  Form,
  redirect,
  useSubmit,
  Link,
  NavLink,
} from "react-router-dom";

const Root = () => {
  return (
    <>
      <header className="navbar sticky-top flex-md-nowrap shadow-sm p-0 white">
        <a
          className="navbar-brand col-md-3 col-lg-2 me-0 px-2 fs-6 shadow-0"
          to="/"
        >
          <img
            className="brand-mark"
            src="/images/yuki.png"
            alt="aladin mark"
          />
        </a>

        <ul class="nav d-flex justify-content-end me-2">
          <li className="nav-item text-nowrap">
            <button
              className="btn getapikey text-small rounded-2 px-4 mx-1 d-none d-sm-block"
              type="button"
            >
              Get API Key
            </button>
          </li>
          <li className="nav-item text-nowrap mx-3">
            <div class="btn-group">
              <button
                type="button p-0 m-0"
                class=" bg-white border-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  width="31"
                  height="34"
                  viewBox="0 0 31 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0251 29.6625C12.1126 29.6625 9.20008 29.2 6.43758 28.275C5.38758 27.9125 4.58758 27.175 4.23758 26.2125C3.87508 25.25 4.00008 24.1875 4.57508 23.2375L6.01258 20.85C6.31258 20.35 6.58758 19.35 6.58758 18.7625V15.15C6.58758 10.5 10.3751 6.71252 15.0251 6.71252C19.6751 6.71252 23.4626 10.5 23.4626 15.15V18.7625C23.4626 19.3375 23.7376 20.35 24.0376 20.8625L25.4626 23.2375C26.0001 24.1375 26.1001 25.225 25.7376 26.2125C25.3751 27.2 24.5876 27.95 23.6001 28.275C20.8501 29.2 17.9376 29.6625 15.0251 29.6625ZM15.0251 8.58752C11.4126 8.58752 8.46258 11.525 8.46258 15.15V18.7625C8.46258 19.675 8.08758 21.025 7.62508 21.8125L6.18758 24.2C5.91258 24.6625 5.83758 25.15 6.00008 25.5625C6.15008 25.9875 6.52508 26.3125 7.03758 26.4875C12.2626 28.2375 17.8001 28.2375 23.0251 26.4875C23.4751 26.3375 23.8251 26 23.9876 25.55C24.1501 25.1 24.1126 24.6125 23.8626 24.2L22.4251 21.8125C21.9501 21 21.5876 19.6625 21.5876 18.75V15.15C21.5876 11.525 18.6501 8.58752 15.0251 8.58752Z"
                    fill="#663355"
                  />
                  <path
                    d="M17.35 8.92498C17.2625 8.92498 17.175 8.91248 17.0875 8.88748C16.725 8.78748 16.375 8.71248 16.0375 8.66248C14.975 8.52498 13.95 8.59998 12.9875 8.88748C12.6375 8.99998 12.2625 8.88748 12.025 8.62498C11.7875 8.36248 11.7125 7.98748 11.85 7.64998C12.3625 6.33748 13.6125 5.47498 15.0375 5.47498C16.4625 5.47498 17.7125 6.32498 18.225 7.64998C18.35 7.98748 18.2875 8.36248 18.05 8.62498C17.8625 8.82498 17.6 8.92498 17.35 8.92498Z"
                    fill="#663355"
                  />
                  <path
                    d="M15.0249 32.5125C13.7874 32.5125 12.5874 32.0125 11.7124 31.1375C10.8374 30.2625 10.3374 29.0625 10.3374 27.825H12.2124C12.2124 28.5625 12.5124 29.2875 13.0374 29.8125C13.5624 30.3375 14.2874 30.6375 15.0249 30.6375C16.5749 30.6375 17.8374 29.375 17.8374 27.825H19.7124C19.7124 30.4125 17.6124 32.5125 15.0249 32.5125Z"
                    fill="#663355"
                  />
                  <circle cx="23" cy="8" r="8" fill="#FF001A" />
                </svg>
              </button>
              <ul class="dropdown-menu dropdown-menu-end border-0 rounded-0 shadow-sm w-auto">
                <li>
                  <a
                    href="#"
                    class="btn btn-hover-light rounded-0 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start"
                  >
                    <div>
                      <p class="d-block fw-medium pb-0 mb-0">Wallet created</p>
                      <small>Take a tour through the product</small>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="btn btn-hover-light rounded-0 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start"
                  >
                    <div>
                      <p class="d-block fw-medium pb-0 mb-0">
                        Deposit confirmed
                      </p>
                      <small>Explore this other product we offer</small>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="btn btn-hover-light rounded-0 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start"
                  >
                    <div>
                      <p class="d-block fw-medium pb-0 mb-0">Notification 3</p>
                      <small>
                        Get help from our support crew Get help from our support
                        crew
                      </small>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item text-nowrap">
            <div class="profile_info">
              <p className="p-0 m-0 text-sm text-decoration-none">
                Joshua Abolade
              </p>
              <small class="text-sm p-0 m-0">Admin</small>
            </div>
          </li>

          <li class="nav-item">
            <div class="btn-group">
              <button
                type="button"
                class="btn dropdown-toggle border-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul class="dropdown-menu dropdown-menu-end border-0 rounded-0 shadow-sm">
                <li>
                  <a class="dropdown-item py-0 " href="#">
                    <small>Support</small>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item py-0 " href="#">
                    <small>Edit Password</small>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item py-0 mt-2 " href="#">
                    <small className="logout-btn">Logout</small>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <ul class="navbar-nav flex-row d-lg-none">
            <li class="nav-item text-nowrap">
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                En
              </button>
            </li>
          </ul>
        </ul>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar p-0">
            <div
              class="offcanvas-lg offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                  Offcanvas with body scrolling
                </h5>
                <button
                  class="btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling"
                >
                  <i class="fa-solid fa-user"></i>
                </button>
              </div>
              <div class="side-nav-body white pt-4">
                <ul className="nav flex-column">
                  <button
                    className="btn getapikey text-small rounded-2 px-4 mx-3 d-md-none"
                    type="button"
                  >
                    Get API Key
                  </button>
                  <li className="nav-item">
                    <NavLink
                      to="home/"
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      <i className="bi bi-grid" width="11" height="11"></i>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="accounts/"
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      <i className="bi bi-boxes" width="16" height="16"></i>
                      Account
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="policy-engine/"
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      <i className="bi bi-boxes" width="16" height="16"></i>
                      Policy Engine
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="settings/"
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      <i className="bi bi-boxes" width="16" height="16"></i>
                      Settings
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="dev/"
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                    >
                      <i className="bi bi-boxes" width="16" height="16"></i>
                      Developer
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <main className="col-lg-10 ms-sm-auto mb-4 bg-grey">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

{
  /* //   id="detail"
      //   className={navigation.state === "loading" ? "loading" : ""}
      // > */
}
{
  /* <Outlet /> */
}

export default Root;
