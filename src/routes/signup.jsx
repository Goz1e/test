import SignupForm1 from "../components/signup-form1";
import SignupForm2 from "../components/signup-form2";
import SignupForm3 from "../components/signup-form3";

const Signup = () => {
  return (
    <>
      <body class="d-flex align-items-center py-4 bg-white">
        <main class="form-signup m-auto shadow  p-5 pb-3 pt-3 rounded">
          <SignupForm1 />
          {/* <SignupForm2 /> */}
          {/* <SignupForm3 /> */}
        </main>
        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </>
  );
};

export default Signup;
