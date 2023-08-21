const SignupForm3 = () => {
  return (
    <>
      <form className="">
        <div className="text-center">
          <img
            class="mb-3 text-center"
            src="/images/yuki.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h2 mb-3 fw-medium">Sign Up</h1>
        </div>
        <div className="text-center">
          <svg
            width="310"
            height="12"
            viewBox="0 0 386 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="5.5" fill="#D9D9D9" stroke="#633153" />
            <circle cx="6" cy="6" r="3" fill="#633153" />
            <g opacity="0.3">
              <circle cx="193" cy="6" r="5.5" fill="#D9D9D9" stroke="#633153" />
              <circle cx="193" cy="6" r="3" fill="#633153" />
            </g>
            <g opacity="0.3">
              <circle cx="380" cy="6" r="5.5" fill="#D9D9D9" stroke="#633153" />
              <circle cx="380" cy="6" r="3" fill="#633153" />
            </g>
            <line
              opacity="0.3"
              x1="12"
              y1="6.5"
              x2="188"
              y2="6.5"
              stroke="#633153"
            />
            <line
              opacity="0.3"
              x1="199"
              y1="6.5"
              x2="375"
              y2="6.5"
              stroke="#633153"
            />
          </svg>
        </div>

        <div class="d-grid align-items-center my-3">
          <label>Your Role</label>
          <select
            class="form-select form-select-lg"
            aria-label="Small select example"
            id="signup-role"
          >
            <option selected>Developer</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="d-grid align-items-center mb-3">
          <label> Number of Users</label>
          <select
            class="form-select form-select-lg"
            aria-label="Small select example"
            placeholder="-Select the number of users-"
            id="signup-no-of-users"
          >
            {/* <option selected>Developer</option> */}
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="d-grid align-items-center mb-3">
          <label> Blockchain you want to support </label>
          <select
            class="form-select form-select-lg"
            aria-label="Small select example"
            placeholder="-to be removed-"
            id="signup-role"
          >
            {/* <option selected>Developer</option> */}
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div class="d-grid align-items-center mb-3">
          <label>How did you hear about us?</label>
          <select
            class="form-select form-select-lg"
            aria-label="Small select example"
            placeholder="-How would you categorize your company-"
            id="signup-about-us"
          >
            {/* <option selected>Developer</option> */}
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="d-grid mb-3">
          <button class="btn accent text-white py-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupForm3;
