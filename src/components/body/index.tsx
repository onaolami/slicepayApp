import Link from "next/link";
import Input from "../Input";
import Button from "../button";

const Body = () => {
  return (
    <div className=" border-solid border border-[#f5f5f5] shadow-xl size-5/12 my-20 mx-auto rounded-sm bg-[#ffffff] mg">
      <h1 className="text-center mt-10 mb-2">New here? Create an Account</h1>
      <h1 className="text-center mt -5">Setup Your Profile</h1>
      <div className="flex flex-col items-center gap-5 mb-10 mt-5 w-full">
        <Input placeholder="FullName" className="" />
        <Input placeholder="Email" type="text" className="" />
        <Input placeholder="UserName" type="text" className="" />
        <Input placeholder="Password" type="Password" className="" />
        <div className="bg-red-50">
          <Button size="LARGE" variant="PRIMARY">
            Sign Up
          </Button>
        </div>
        <p>
          Already have an account? <Link href="login">Login</Link>
        </p> 
      </div>
    </div>
  );
};

export default Body;
