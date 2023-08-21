const SignupForm1 = () => {
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
          <label>Name</label>
          <input
            type="text"
            class="form-control   fw-light"
            id="signup-name"
            placeholder="Enter your full name"
          />
        </div>

        <div class="d-grid align-items-center">
          <label>Company Name</label>
          <input
            type="text"
            class="form-control mb-3  fw-light"
            id="signup-company-name"
            placeholder="Enter your company name"
          />
        </div>

        <div class="d-flex-row mb-3">
          <label>Company Email</label>
          <input
            type="email"
            class="form-control fw-light"
            id="signup-email"
            placeholder="Enter your official email"
          />
        </div>

        <div class="d-flex-row mb-3">
          <label>Company URL</label>
          <input
            type="url"
            class="form-control fw-light"
            id="signup-url"
            placeholder="Enter your company web address"
          />
        </div>
        <div className="d-grid mb-3">
          <button class="btn accent text-white py-2" type="submit">
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupForm1;
