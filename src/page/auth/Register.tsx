import { useState } from "react";
import Button from "../../components/reUse/Button";
import Input from "../../components/reUse/Input";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useSchoolRegister } from "../../hook/useSchool";
import ClipLoader from 'react-spinners/ClipLoader';
import { registerSchool } from "../../api/SchoolApi";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  
  // const {mutate} = useSchoolRegister(email);

  const handleSumbit = (e:any)=>{
    e.preventDefault();
    setLoading(true)
    if (email !== "") {
      registerSchool(email).then(()=>{
        toast.success('Successfully toasted!')
      });
      navigate("/auth/register-message")
      // mutate().then(() => {
      //   navigate("/auth/register-message");
      // });
    }
  };
 
  return (
    <div className=" w-full h-[100vh] flex flex-col justify-center items-center">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="mb-10 text-center flex items-center w-full flex-col">
        <div className="mb-5 w-20 h-30 rounded-full border flex justify-center items-center font-bold text-blue-600 text-[30px]">
          HMO
        </div>
        <div className="text-[26px] font-bold mb-3">Create an Account</div>
        <div className="text-[14px] -mt-4 ">
          sign up now and get free account instant.
        </div>
      </div>

      <form
        className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"
      >
        <Input
          placeholder="Email"
          className="w-[97%]"
          type="email"
          required
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />

        <div>
          <Button
            name="Register"
            className="w-[97%] bg-blue-500 text-white h-14 hover:bg-blue-600 transition-all duration-300"
            type="submit"
            icon={loading && <ClipLoader color="white" size={20} />}
            onClick={handleSumbit}  
          />
          {/* <ClipLoader
        color={"#fff"}
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
        </div>
        <div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
          Sign up with social network
        </div>
        <div className="flex flex-col">
          <Button
            name="Continue with Google"
            className="h-14 hover:bg-red-500 hover:text-white  transition-all duration-300 font-medium text-[#ababab]"
            icon={<FaGoogle />}
          />
        </div>
      </form>
      <div className="mt-5 text-[13px]">
        Already have an Account?{" "}
        <span className="font-bold text-blue-900">
          <Link to="/auth/signin">Login here</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
