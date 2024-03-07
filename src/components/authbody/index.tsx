import Link from "next/link";
import Input from "../Input";
import Button from "../button";

const AuthBody = () => {
  return (
    <div className=" border-solid border border-[#f5f5f5] shadow-xl size-5/12 my-20 mx-auto rounded-sm bg-[#ffffff] mg">
      <h1 className="text-center text-2xl mt-10 mb-5">Welcome Back</h1>
      <div className="flex flex-col items-center gap-5 mb-10 mt-5 w-full">
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <div>
          <Button size="LARGE" variant="PRIMARY">
            Login
          </Button>
        </div>
        <p>
          Don't have an Account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthBody;
