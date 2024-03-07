import { FaRegEyeSlash } from "react-icons/fa6";

const Balance = () => {
  return (
    <div className=" ml-10  border border-solid shadow-xl size-full rounded-md bg-white  text-center mt-5 mb-10">
      <h5 className="mt-5">Account: 2 1 1 9 9 6 1 0 6 5</h5>
      <div className="flex flex-row justify-center gap-20">
        <h2 className="mt-5 text-black text-3xl">NGN 9,353.45</h2>
        <FaRegEyeSlash className="mt-8" />
      </div>
      <p className="mt-5 mb-5">Savings account</p>
    </div>
  );
};

export default Balance;
