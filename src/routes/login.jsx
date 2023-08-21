import { Form } from "react-router-dom";

const Login = () => {
  return (
    <>
      <body class="d-flex align-items-center py-4 bg-white">
        <main class="form-signin m-auto shadow px-5 pt-3 pb-5 rounded">
          <form className="">
            <div className="text-center">
              <img
                class="mb-4 text-center"
                src="/images/yuki.png"
                alt=""
                width="72"
                height="57"
              />
              <h1 class="h2 mb-3 fw-medium">Sign in</h1>
            </div>

            <div class="d-flex-row mb-2">
              <label>Email</label>
              <input
                type="email"
                class="form-control fw-light"
                id="signin-email"
                placeholder="Enter your email"
              />
            </div>
            <div class="d-grid align-items-center">
              <label>Password</label>
              <input
                type="password"
                class="form-control mb-4  fw-light"
                id="signin-password"
                placeholder="Enter your password"
              />
            </div>

            <div className="d-grid mb-4">
              <button class="btn accent text-white py-2" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </main>
        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </>
  );
};

export default Login;
