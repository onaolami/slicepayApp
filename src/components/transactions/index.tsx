import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";

const Transaction = () => {
  return (
    <div className=" ml-10  mt-10">
      <h2 className="mb-5">Transaction History</h2>

      <div className="mb-3 border border-solid bg-[#BFBFBF] shadow-gray-800 ">
        <h4>2/27/24</h4>
      </div>

      <div className="flex flex-column justify-between mb-5">
        <GoArrowUpRight />
        <div>
          <p>Chiwendu Faith Adiele</p>
          <p>7:48am</p>
        </div>
        <div>
          <p>$2,500.00</p>
        </div>
      </div>
      <div className="flex flex-column justify-between">
        <GoArrowDownLeft />
        <div>
          <p>Adebayo Raheem oluseyi</p>
          <p>6:50am</p>
        </div>
        <div>
          <p>$5000.00</p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
