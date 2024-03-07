import Input from "../Input";
import Button from "../button";

const Transfer = () => {
  return (
    <div className="flex flex-col items-center border border-solid gap-5 shadow bg-white p-5">
      <h1 className=" text-2xl mt-5">Send Money </h1>
      <Input placeholder="Account Number" />
      <Input placeholder="Amount" />
      <Input placeholder="Narration" />
      <div className="mb-10">
        <Button size="LARGE" variant="PRIMARY">
          Tranfer
        </Button>
      </div>
    </div>
  );
};

export default Transfer;
